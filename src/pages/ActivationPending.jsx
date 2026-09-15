import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, useSearchParams, Link } from 'react-router-dom';
import { activateAccountApi, getActivationStatusApi, resendActivationApi } from '../services/api';
import {
  Mail,
  Loader2,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  ArrowRight,
  ShieldCheck,
  Building2,
  Lock,
  Sparkles,
  QrCode
} from 'lucide-react';

export default function ActivationPending() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');
  const type = searchParams.get('type') || 'school';

  const initialEmail = location.state?.email || '';
  const initialSchoolName = location.state?.schoolName || '';

  // 'waiting' | 'activating' | 'success' | 'error'
  const [phase, setPhase] = useState(token ? 'activating' : 'waiting');
  const [errorMessage, setErrorMessage] = useState('');

  const [activatedInfo, setActivatedInfo] = useState({
    email: initialEmail,
    schoolName: initialSchoolName,
    mfaSetupToken: ''
  });

  const [countdown, setCountdown] = useState(6);
  const [resendStatus, setResendStatus] = useState(''); // '', 'sending', 'sent', 'error'
  const [resendCooldown, setResendCooldown] = useState(0);

  const hasActivatedRef = useRef(false);

  // Auto-activate when a token is present in the URL (user clicked email link)
  useEffect(() => {
    if (!token || hasActivatedRef.current) return;
    hasActivatedRef.current = true;

    // Small delay so loading state looks smooth and intentional
    const minLoadTimer = new Promise((resolve) => setTimeout(resolve, 800));

    Promise.all([
      activateAccountApi({ token, type }),
      minLoadTimer
    ])
      .then(([res]) => {
        const email = res?.email || initialEmail;
        const schoolName = res?.schoolName || initialSchoolName;
        const mfaSetupToken = res?.mfaSetupToken || '';

        setActivatedInfo({
          email,
          schoolName,
          mfaSetupToken
        });
        setPhase('success');
      })
      .catch(async (err) => {
        // Fallback: If token was already used / cleared, check if account is already activated
        if (initialEmail) {
          try {
            const statusRes = await getActivationStatusApi({ email: initialEmail, type });
            if (statusRes?.isActivated) {
              setActivatedInfo({
                email: statusRes.email || initialEmail,
                schoolName: statusRes.schoolName || initialSchoolName,
                mfaSetupToken: ''
              });
              setPhase('success');
              return;
            }
          } catch {
            // ignore and show main error
          }
        }
        setPhase('error');
        setErrorMessage(err.message || 'This activation link is invalid or has expired.');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, type]);

  // Countdown timer on Success screen to transition to MFA Setup
  useEffect(() => {
    if (phase !== 'success') return;

    if (countdown <= 0) {
      handleProceedToMfa();
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, countdown]);

  const handleProceedToMfa = () => {
    if (activatedInfo.mfaSetupToken) {
      navigate('/mfa-setup', {
        state: {
          email: activatedInfo.email,
          schoolName: activatedInfo.schoolName,
          mfaSetupToken: activatedInfo.mfaSetupToken
        }
      });
    } else {
      navigate('/login', {
        state: { email: activatedInfo.email }
      });
    }
  };

  // Resend cooldown countdown
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const t = setInterval(() => setResendCooldown((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [resendCooldown]);

  const handleResend = () => {
    const targetEmail = activatedInfo.email || initialEmail;
    if (!targetEmail || resendCooldown > 0) return;
    setResendStatus('sending');
    resendActivationApi({ email: targetEmail, type })
      .then(() => {
        setResendStatus('sent');
        setResendCooldown(30);
      })
      .catch((err) => {
        setResendStatus('error');
        setErrorMessage(err.message || 'Failed to resend the activation email.');
      });
  };

  return (
    <div style={styles.pageContainer}>
      {/* Background Decorative Gradient Orbs */}
      <div style={styles.bgBlobTop} />
      <div style={styles.bgBlobBottom} />

      <div style={styles.card}>

        {/* ============================================================ */}
        {/* PHASE 1: WAITING FOR USER TO CLICK LINK IN EMAIL             */}
        {/* ============================================================ */}
        {phase === 'waiting' && (
          <>
            <div style={styles.iconRingBlue}>
              <Mail size={40} color="#0284c7" className="activation-pulse" />
            </div>
            <div style={styles.badgeRow}>
              <span style={styles.badge}><ShieldCheck size={14} /> Registration Received</span>
            </div>
            <h1 style={styles.title}>Waiting for Activation</h1>
            <p style={styles.subtitle}>
              We've sent an activation link to{' '}
              {activatedInfo.email ? <strong style={styles.emailHighlight}>{activatedInfo.email}</strong> : 'your registered coordinator email'}.
              Please open your inbox and click the link to activate {activatedInfo.schoolName ? <strong>{activatedInfo.schoolName}</strong> : 'your school'}'s account.
            </p>

            <div style={styles.dotsRow}>
              <span className="activation-dot" style={{ ...styles.dot, animationDelay: '0s' }} />
              <span className="activation-dot" style={{ ...styles.dot, animationDelay: '0.2s' }} />
              <span className="activation-dot" style={{ ...styles.dot, animationDelay: '0.4s' }} />
            </div>

            {activatedInfo.email && (
              <div style={styles.resendBox}>
                {resendStatus === 'sent' ? (
                  <p style={styles.resendSentText}>
                    <CheckCircle2 size={16} color="#16a34a" /> A fresh activation email has been sent. Please check your inbox.
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={resendStatus === 'sending' || resendCooldown > 0}
                    style={styles.resendBtn}
                  >
                    {resendStatus === 'sending' ? (
                      <><Loader2 size={15} className="spin-slow" /> Sending Activation Link...</>
                    ) : resendCooldown > 0 ? (
                      <>Resend available in {resendCooldown}s</>
                    ) : (
                      <><RefreshCw size={15} /> Didn't receive the email? Resend Activation Link</>
                    )}
                  </button>
                )}
                {resendStatus === 'error' && (
                  <p style={styles.resendErrorText}><AlertCircle size={14} /> {errorMessage}</p>
                )}
              </div>
            )}

            <div style={styles.footerLinkRow}>
              <Link to="/login" style={styles.footerLink}>Already activated? Go to Login &rarr;</Link>
            </div>
          </>
        )}

        {/* ============================================================ */}
        {/* PHASE 2: ACTIVATING IN PROGRESS (LOADING SCREEN)            */}
        {/* ============================================================ */}
        {phase === 'activating' && (
          <div style={styles.loadingContainer}>
            <div style={styles.iconRingSpinning}>
              <Loader2 size={44} color="#0284c7" className="spin-slow" />
            </div>
            <div style={styles.badgeRow}>
              <span style={styles.badgeBlue}><Sparkles size={13} /> Security Handshake</span>
            </div>
            <h1 style={styles.title}>Activating Your Account...</h1>
            <p style={styles.subtitle}>
              Verifying your security credentials and connecting to the institutional database. This will only take a moment.
            </p>

            <div style={styles.loadingBarTrack}>
              <div style={styles.loadingBarProgress} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* PHASE 3: SUCCESSFUL ACTIVATION PAGE                         */}
        {/* ============================================================ */}
        {phase === 'success' && (
          <div style={styles.successContainer}>
            <div style={styles.iconRingGreen}>
              <CheckCircle2 size={46} color="#16a34a" />
            </div>
            
            <div style={styles.badgeRow}>
              <span style={styles.badgeGreen}><ShieldCheck size={14} /> Verification Successful</span>
            </div>

            <h1 style={styles.titleSuccess}>Account Activated Successfully!</h1>
            
            <p style={styles.subtitleSuccess}>
              Your institution profile has been verified and activated in the Technik Olympiad portal.
            </p>

            {/* Institution Info Card */}
            <div style={styles.infoCard}>
              <div style={styles.infoRow}>
                <Building2 size={18} color="#0284c7" style={{ flexShrink: 0 }} />
                <div style={styles.infoTextGroup}>
                  <span style={styles.infoLabel}>Institution Name</span>
                  <span style={styles.infoValue}>{activatedInfo.schoolName || 'Partner School'}</span>
                </div>
              </div>

              <div style={styles.infoDivider} />

              <div style={styles.infoRow}>
                <Mail size={18} color="#0284c7" style={{ flexShrink: 0 }} />
                <div style={styles.infoTextGroup}>
                  <span style={styles.infoLabel}>Coordinator Email</span>
                  <span style={styles.infoValue}>{activatedInfo.email || 'Registered Email'}</span>
                </div>
              </div>

              <div style={styles.infoDivider} />

              <div style={styles.infoRow}>
                <Lock size={18} color="#16a34a" style={{ flexShrink: 0 }} />
                <div style={styles.infoTextGroup}>
                  <span style={styles.infoLabel}>Account Status</span>
                  <span style={styles.infoValueGreen}>Active &amp; Security Verified</span>
                </div>
              </div>
            </div>

            {/* Step Explanation */}
            <div style={styles.nextStepBox}>
              <div style={styles.nextStepHeader}>
                <QrCode size={18} color="#0284c7" />
                <span style={styles.nextStepTitle}>Next Step: Two-Factor Authentication (MFA)</span>
              </div>
              <p style={styles.nextStepDesc}>
                To secure your school data, you will now set up <strong>Microsoft Authenticator</strong> on your mobile phone before accessing the coordinator dashboard.
              </p>
            </div>

            {/* Action Buttons */}
            <div style={styles.actionGroup}>
              <button
                type="button"
                onClick={handleProceedToMfa}
                style={styles.proceedBtn}
              >
                <span>Proceed to MFA Setup</span>
                <ArrowRight size={18} />
              </button>

              <div style={styles.timerSubText}>
                Automatically advancing in <strong>{countdown}s</strong>...
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* PHASE 4: ERROR STATE                                        */}
        {/* ============================================================ */}
        {phase === 'error' && (
          <>
            <div style={styles.iconRingRed}>
              <AlertCircle size={42} color="#dc2626" />
            </div>
            <div style={styles.badgeRow}>
              <span style={styles.badgeRed}><AlertCircle size={14} /> Activation Error</span>
            </div>
            <h1 style={styles.title}>Activation Link Invalid</h1>
            <p style={styles.subtitle}>{errorMessage}</p>
            
            <p style={styles.subtleNote}>
              Activation links are valid for 24 hours. If your link has expired, you can request a fresh activation link below or sign in if your account is already active.
            </p>

            <div style={styles.resendBox}>
              {resendStatus === 'sent' ? (
                <p style={styles.resendSentText}>
                  <CheckCircle2 size={16} color="#16a34a" /> A new activation link has been sent to your email!
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={resendStatus === 'sending' || resendCooldown > 0}
                  style={styles.resendBtn}
                >
                  {resendStatus === 'sending' ? (
                    <><Loader2 size={15} className="spin-slow" /> Sending...</>
                  ) : resendCooldown > 0 ? (
                    <>Resend in {resendCooldown}s</>
                  ) : (
                    <><RefreshCw size={15} /> Request New Activation Email</>
                  )}
                </button>
              )}
            </div>

            <div style={styles.footerLinkRow}>
              <Link to="/login" style={styles.footerLink}>Return to School Login &rarr;</Link>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)',
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 1.25rem',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  bgBlobTop: {
    position: 'absolute',
    top: '-15%',
    right: '-10%',
    width: '450px',
    height: '450px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(2, 132, 199, 0.12) 0%, rgba(2, 132, 199, 0) 70%)',
    pointerEvents: 'none',
  },
  bgBlobBottom: {
    position: 'absolute',
    bottom: '-15%',
    left: '-10%',
    width: '450px',
    height: '450px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(22, 163, 74, 0.10) 0%, rgba(22, 163, 74, 0) 70%)',
    pointerEvents: 'none',
  },
  card: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '24px',
    padding: '3.2rem 2.5rem',
    maxWidth: '560px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.1), 0 2px 6px rgba(0, 0, 0, 0.04)',
    position: 'relative',
    zIndex: 1,
    boxSizing: 'border-box',
  },
  badgeRow: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0.85rem',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    background: 'rgba(2, 132, 199, 0.08)',
    border: '1px solid rgba(2, 132, 199, 0.25)',
    color: '#0284c7',
    fontSize: '0.76rem',
    fontWeight: 700,
    letterSpacing: '0.03em',
    padding: '0.35rem 0.85rem',
    borderRadius: '20px',
  },
  badgeBlue: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    background: '#e0f2fe',
    border: '1px solid #bae6fd',
    color: '#0369a1',
    fontSize: '0.76rem',
    fontWeight: 700,
    padding: '0.35rem 0.85rem',
    borderRadius: '20px',
  },
  badgeGreen: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    background: '#dcfce7',
    border: '1px solid #bbf7d0',
    color: '#15803d',
    fontSize: '0.78rem',
    fontWeight: 700,
    padding: '0.35rem 0.95rem',
    borderRadius: '20px',
  },
  badgeRed: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    background: '#fee2e2',
    border: '1px solid #fecaca',
    color: '#b91c1c',
    fontSize: '0.76rem',
    fontWeight: 700,
    padding: '0.35rem 0.85rem',
    borderRadius: '20px',
  },
  iconRingBlue: {
    width: '88px',
    height: '88px',
    borderRadius: '50%',
    background: '#e0f2fe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.35rem auto',
    boxShadow: '0 8px 20px rgba(2, 132, 199, 0.15)',
  },
  iconRingSpinning: {
    width: '88px',
    height: '88px',
    borderRadius: '50%',
    background: '#f0f9ff',
    border: '2px solid #bae6fd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.35rem auto',
  },
  iconRingGreen: {
    width: '92px',
    height: '92px',
    borderRadius: '50%',
    background: '#dcfce7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.35rem auto',
    boxShadow: '0 10px 25px rgba(22, 163, 74, 0.2)',
  },
  iconRingRed: {
    width: '88px',
    height: '88px',
    borderRadius: '50%',
    background: '#fee2e2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.35rem auto',
  },
  title: {
    fontSize: '1.65rem',
    fontWeight: 900,
    color: '#0f172a',
    margin: '0 0 0.6rem 0',
  },
  titleSuccess: {
    fontSize: '1.75rem',
    fontWeight: 900,
    color: '#0c1e45',
    margin: '0 0 0.6rem 0',
  },
  subtitle: {
    fontSize: '0.94rem',
    color: '#475569',
    lineHeight: 1.6,
    margin: '0 0 1.5rem 0',
  },
  subtitleSuccess: {
    fontSize: '0.96rem',
    color: '#475569',
    lineHeight: 1.55,
    margin: '0 0 1.5rem 0',
  },
  subtleNote: {
    fontSize: '0.82rem',
    color: '#64748b',
    lineHeight: 1.55,
    marginBottom: '1.5rem',
  },
  emailHighlight: {
    color: '#0284c7',
  },
  dotsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.45rem',
    marginBottom: '1.75rem',
  },
  dot: {
    width: '9px',
    height: '9px',
    borderRadius: '50%',
    background: '#0284c7',
    display: 'inline-block',
    animation: 'activationDotPulse 1.4s ease-in-out infinite',
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loadingBarTrack: {
    width: '100%',
    maxWidth: '320px',
    height: '6px',
    background: '#e2e8f0',
    borderRadius: '10px',
    overflow: 'hidden',
    marginTop: '1rem',
  },
  loadingBarProgress: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #0284c7, #38bdf8, #0284c7)',
    borderRadius: '10px',
    animation: 'loadingBarAnim 1.5s ease-in-out infinite',
  },
  successContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoCard: {
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    padding: '1.25rem 1.5rem',
    width: '100%',
    textAlign: 'left',
    boxSizing: 'border-box',
    marginBottom: '1.35rem',
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
  },
  infoTextGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  infoLabel: {
    fontSize: '0.74rem',
    fontWeight: 600,
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  infoValue: {
    fontSize: '0.94rem',
    fontWeight: 700,
    color: '#0f172a',
  },
  infoValueGreen: {
    fontSize: '0.92rem',
    fontWeight: 800,
    color: '#15803d',
  },
  infoDivider: {
    height: '1px',
    background: '#e2e8f0',
    margin: '0.85rem 0',
  },
  nextStepBox: {
    background: '#f0f9ff',
    border: '1px solid #bae6fd',
    borderRadius: '14px',
    padding: '1rem 1.25rem',
    width: '100%',
    textAlign: 'left',
    boxSizing: 'border-box',
    marginBottom: '1.6rem',
  },
  nextStepHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.35rem',
  },
  nextStepTitle: {
    fontSize: '0.86rem',
    fontWeight: 800,
    color: '#0369a1',
  },
  nextStepDesc: {
    fontSize: '0.82rem',
    color: '#475569',
    lineHeight: 1.5,
    margin: 0,
  },
  actionGroup: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
  },
  proceedBtn: {
    width: '100%',
    background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    padding: '0.95rem 1.5rem',
    fontSize: '0.98rem',
    fontWeight: 800,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
    boxShadow: '0 8px 20px rgba(2, 132, 199, 0.3)',
    transition: 'all 0.2s ease',
  },
  timerSubText: {
    fontSize: '0.8rem',
    color: '#64748b',
  },
  resendBox: {
    borderTop: '1px solid #f1f5f9',
    paddingTop: '1.25rem',
    marginBottom: '1rem',
    width: '100%',
  },
  resendBtn: {
    background: 'transparent',
    border: '1px solid #cbd5e1',
    borderRadius: '10px',
    padding: '0.65rem 1.25rem',
    color: '#0284c7',
    fontWeight: 700,
    fontSize: '0.85rem',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
  },
  resendSentText: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    color: '#15803d',
    fontWeight: 700,
    fontSize: '0.85rem',
    margin: 0,
  },
  resendErrorText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.35rem',
    color: '#dc2626',
    fontSize: '0.8rem',
    marginTop: '0.6rem',
  },
  footerLinkRow: {
    marginTop: '0.5rem',
  },
  footerLink: {
    color: '#0284c7',
    fontWeight: 700,
    fontSize: '0.85rem',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
  },
};

// Shared keyframe animations (pulse icon + bouncing dots + loader bar)
if (typeof document !== 'undefined') {
  let styleSheet = document.getElementById('activation-pending-styles');
  if (!styleSheet) {
    styleSheet = document.createElement('style');
    styleSheet.id = 'activation-pending-styles';
    document.head.appendChild(styleSheet);
  }
  styleSheet.innerText = `
    @keyframes activationDotPulse {
      0%, 80%, 100% { opacity: 0.25; transform: scale(0.85); }
      40% { opacity: 1; transform: scale(1.15); }
    }
    .activation-pulse {
      animation: activationIconPulse 2s ease-in-out infinite;
    }
    @keyframes activationIconPulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.08); opacity: 0.75; }
    }
    @keyframes loadingBarAnim {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(0%); }
      100% { transform: translateX(100%); }
    }
  `;
}
