import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, useSearchParams, Link } from 'react-router-dom';
import { activateAccountApi, resendActivationApi } from '../services/api';
import {
  Mail,
  Loader2,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function ActivationPending() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');
  const type = searchParams.get('type') || 'school';

  const email = location.state?.email || '';
  const schoolName = location.state?.schoolName || '';

  // 'waiting' | 'activating' | 'success' | 'error'
  const [phase, setPhase] = useState(token ? 'activating' : 'waiting');
  const [errorMessage, setErrorMessage] = useState('');

  const [resendStatus, setResendStatus] = useState(''); // '', 'sending', 'sent', 'error'
  const [resendCooldown, setResendCooldown] = useState(0);

  const hasActivatedRef = useRef(false);

  // Auto-activate when a token is present in the URL (user clicked the email link)
  useEffect(() => {
    if (!token || hasActivatedRef.current) return;
    hasActivatedRef.current = true;

    activateAccountApi({ token, type })
      .then((res) => {
        setPhase('success');
        const activatedEmail = res?.email || email;
        const activatedSchoolName = res?.schoolName || schoolName;
        const mfaSetupToken = res?.mfaSetupToken || '';

        setTimeout(() => {
          navigate('/mfa-setup', {
            state: { email: activatedEmail, schoolName: activatedSchoolName, mfaSetupToken }
          });
        }, 1600);
      })
      .catch((err) => {
        setPhase('error');
        setErrorMessage(err.message || 'This activation link is invalid or has expired.');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, type]);

  // Resend cooldown countdown
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const t = setInterval(() => setResendCooldown((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [resendCooldown]);

  const handleResend = () => {
    if (!email || resendCooldown > 0) return;
    setResendStatus('sending');
    resendActivationApi({ email, type })
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
      <div style={styles.card}>

        {phase === 'waiting' && (
          <>
            <div style={styles.iconRingBlue}>
              <Mail size={38} color="#0284c7" className="activation-pulse" />
            </div>
            <span style={styles.badge}><ShieldCheck size={13} /> Registration Received</span>
            <h1 style={styles.title}>Waiting for Activation</h1>
            <p style={styles.subtitle}>
              We've sent an activation link to{' '}
              {email ? <strong style={styles.emailHighlight}>{email}</strong> : 'your registered email address'}.
              Please open your inbox and click the link to activate {schoolName ? <strong>{schoolName}</strong> : 'your school'}'s account.
            </p>

            <div style={styles.dotsRow}>
              <span className="activation-dot" style={{ ...styles.dot, animationDelay: '0s' }} />
              <span className="activation-dot" style={{ ...styles.dot, animationDelay: '0.2s' }} />
              <span className="activation-dot" style={{ ...styles.dot, animationDelay: '0.4s' }} />
            </div>

            {email && (
              <div style={styles.resendBox}>
                {resendStatus === 'sent' ? (
                  <p style={styles.resendSentText}>
                    <CheckCircle2 size={15} color="#16a34a" /> A fresh activation email has been sent.
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
                      <>Resend available in {resendCooldown}s</>
                    ) : (
                      <><RefreshCw size={15} /> Didn't get the email? Resend it</>
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

        {phase === 'activating' && (
          <>
            <div style={styles.iconRingBlue}>
              <Loader2 size={38} color="#0284c7" className="spin-slow" />
            </div>
            <h1 style={styles.title}>Activating Your Account...</h1>
            <p style={styles.subtitle}>Please wait while we confirm your activation link.</p>
          </>
        )}

        {phase === 'success' && (
          <>
            <div style={styles.iconRingGreen}>
              <CheckCircle2 size={40} color="#16a34a" />
            </div>
            <h1 style={styles.title}>Account Activated!</h1>
            <p style={styles.subtitle}>Taking you to Multi-Factor Authentication setup...</p>
          </>
        )}

        {phase === 'error' && (
          <>
            <div style={styles.iconRingRed}>
              <AlertCircle size={38} color="#dc2626" />
            </div>
            <h1 style={styles.title}>Activation Link Issue</h1>
            <p style={styles.subtitle}>{errorMessage}</p>
            <p style={styles.subtleNote}>
              Check the same activation email for a separate "Resend Activation Link" — clicking it will send you a brand new link.
            </p>
            <div style={styles.footerLinkRow}>
              <Link to="/login" style={styles.footerLink}>Go to Login <ArrowRight size={14} /></Link>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    background: '#f8fafc',
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 1.25rem',
    boxSizing: 'border-box',
  },
  card: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '24px',
    padding: '3rem 2.5rem',
    maxWidth: '520px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
    boxSizing: 'border-box',
  },
  iconRingBlue: {
    width: '84px',
    height: '84px',
    borderRadius: '50%',
    background: '#e0f2fe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.25rem auto',
  },
  iconRingGreen: {
    width: '84px',
    height: '84px',
    borderRadius: '50%',
    background: '#dcfce7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.25rem auto',
  },
  iconRingRed: {
    width: '84px',
    height: '84px',
    borderRadius: '50%',
    background: '#fee2e2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.25rem auto',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    background: 'rgba(2, 132, 199, 0.08)',
    border: '1px solid rgba(2, 132, 199, 0.25)',
    color: '#0284c7',
    fontSize: '0.72rem',
    fontWeight: 700,
    letterSpacing: '0.04em',
    padding: '0.3rem 0.75rem',
    borderRadius: '20px',
    marginBottom: '0.85rem',
  },
  title: {
    fontSize: '1.6rem',
    fontWeight: 900,
    color: '#0f172a',
    margin: '0 0 0.6rem 0',
  },
  subtitle: {
    fontSize: '0.92rem',
    color: '#475569',
    lineHeight: 1.6,
    margin: '0 0 1.5rem 0',
  },
  subtleNote: {
    fontSize: '0.82rem',
    color: '#64748b',
    lineHeight: 1.55,
    marginTop: '-0.75rem',
    marginBottom: '1.5rem',
  },
  emailHighlight: {
    color: '#0f172a',
  },
  dotsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.4rem',
    marginBottom: '1.75rem',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#0284c7',
    display: 'inline-block',
    animation: 'activationDotPulse 1.4s ease-in-out infinite',
  },
  resendBox: {
    borderTop: '1px solid #f1f5f9',
    paddingTop: '1.25rem',
    marginBottom: '1rem',
  },
  resendBtn: {
    background: 'transparent',
    border: '1px solid #cbd5e1',
    borderRadius: '10px',
    padding: '0.6rem 1.1rem',
    color: '#0284c7',
    fontWeight: 700,
    fontSize: '0.85rem',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  resendSentText: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    color: '#15803d',
    fontWeight: 700,
    fontSize: '0.85rem',
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

// Shared keyframe animations (pulse icon + bouncing dots)
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
  `;
}
