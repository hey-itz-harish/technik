import React, { useState, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { getMfaSetupQrSrc, verifyMfaSetupApi } from '../services/api';
import {
  ShieldCheck,
  QrCode,
  ArrowRight,
  AlertCircle,
  CheckCircle,
  Loader2,
  ExternalLink
} from 'lucide-react';

export default function MfaSetup() {
  const navigate = useNavigate();
  const location = useLocation();

  const schoolEmail = location.state?.email || '';
  const schoolName = location.state?.schoolName || 'your school';
  const mfaSetupToken = location.state?.mfaSetupToken || '';

  // 6-Digit OTP Digits State
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const qrSrc = schoolEmail && mfaSetupToken ? getMfaSetupQrSrc(schoolEmail, mfaSetupToken) : '';

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setErrorMessage('');

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifySubmit = async (e) => {
    e.preventDefault();
    const enteredCode = otp.join('');

    if (enteredCode.length < 6) {
      setErrorMessage('Please enter all 6 digits of the verification code.');
      return;
    }

    setIsVerifying(true);
    setErrorMessage('');

    try {
      await verifyMfaSetupApi({ email: schoolEmail, code: enteredCode, actToken: mfaSetupToken });
      setIsVerifying(false);
      setIsVerified(true);
    } catch (err) {
      setIsVerifying(false);
      setErrorMessage(err.message || 'Invalid authenticator code. Please try again.');
    }
  };

  const handleSkip = () => {
    navigate('/login', { state: { email: schoolEmail } });
  };

  // Guard: this page only works right after activation, carrying the
  // short-lived mfaSetupToken issued by /api/auth/activate.
  if (!schoolEmail || !mfaSetupToken) {
    return (
      <div style={styles.pageContainer}>
        <div style={styles.guardCard}>
          <AlertCircle size={40} color="#dc2626" style={{ marginBottom: '1rem' }} />
          <h2 style={styles.guardTitle}>Activation Required First</h2>
          <p style={styles.guardDesc}>
            Please complete account activation via the link sent to your email before setting up Microsoft Authenticator.
          </p>
          <Link to="/login" style={styles.guardLink}>Go to Login Instead &rarr;</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.pageContainer}>

      <header style={styles.headerSection}>
        <div style={styles.headerContainer}>
          <div style={styles.badgeCapsule}>
            <ShieldCheck size={14} color="#0284c7" />
            <span>MFA Portal Security Setup</span>
          </div>
          <h1 style={styles.mainTitle}>
            Configure <span style={{ color: '#f97316' }}>Microsoft Authenticator</span>
          </h1>
          <p style={styles.mainSubtitle}>
            Add an extra layer of security to {schoolName}'s administrator account. This step is optional — a one-time email code is always available too.
          </p>
        </div>
      </header>

      {!isVerified ? (
        <main style={styles.contentContainer}>
          <div style={styles.setupCardBox}>

            <div style={styles.setupCardHeader}>
              <div style={styles.headerIconSquare}>
                <QrCode size={24} color="#0284c7" />
              </div>
              <div>
                <h2 style={styles.setupCardTitle}>Scan the QR Code</h2>
                <p style={styles.setupCardSub}>Use the Microsoft Authenticator app on your phone to scan and set up.</p>
              </div>
            </div>

            <div style={styles.msSetupGrid} className="mfa-setup-grid">

              <div style={styles.qrColumn}>
                <div style={styles.qrFrame}>
                  <img src={qrSrc} alt="Microsoft Authenticator QR Code" width={180} height={180} style={{ display: 'block', borderRadius: '6px' }} />
                </div>
                <div style={styles.qrScanLabel}>
                  <QrCode size={14} color="#0284c7" /> Scan with Authenticator App
                </div>
              </div>

              <div style={styles.instructionsColumn}>
                <h4 style={styles.stepsHeading}>Setup Steps:</h4>

                <ol style={styles.stepsList}>
                  <li style={styles.stepListItem}>
                    <span style={styles.stepBullet}>1</span>
                    <div>
                      <strong>Install Microsoft Authenticator</strong> from the
                      <a href="https://play.google.com/store/apps/details?id=com.azure.authenticator" target="_blank" rel="noopener noreferrer" style={styles.appLink}>
                        Google Play Store <ExternalLink size={11} />
                      </a> or
                      <a href="https://apps.apple.com/app/microsoft-authenticator/id983155280" target="_blank" rel="noopener noreferrer" style={styles.appLink}>
                        Apple App Store <ExternalLink size={11} />
                      </a>.
                    </div>
                  </li>

                  <li style={styles.stepListItem}>
                    <span style={styles.stepBullet}>2</span>
                    <div>
                      Open the app, tap the <strong>"+"</strong> icon (Add account) and choose <strong>"Other"</strong>.
                    </div>
                  </li>

                  <li style={styles.stepListItem}>
                    <span style={styles.stepBullet}>3</span>
                    <div>
                      Point your camera to scan the QR code on the left.
                    </div>
                  </li>

                  <li style={styles.stepListItem}>
                    <span style={styles.stepBullet}>4</span>
                    <div>
                      Enter the 6-digit code displayed in Microsoft Authenticator below to activate MFA.
                    </div>
                  </li>
                </ol>

                <form onSubmit={handleVerifySubmit} style={styles.otpForm}>
                  <label style={styles.otpLabel}>Enter 6-Digit Code from Authenticator App <span style={{ color: '#ef4444' }}>*</span></label>

                  <div style={styles.otpInputGroup}>
                    {otp.map((digit, idx) => (
                      <input
                        key={idx}
                        ref={el => inputRefs.current[idx] = el}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(idx, e)}
                        style={{
                          ...styles.otpBox,
                          ...(digit ? styles.otpBoxFilled : {}),
                          ...(errorMessage ? styles.otpBoxError : {})
                        }}
                      />
                    ))}
                  </div>

                  {errorMessage && (
                    <div style={styles.errorAlert}>
                      <AlertCircle size={15} color="#dc2626" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isVerifying}
                    style={styles.verifyBtnPrimary}
                  >
                    {isVerifying ? (
                      <>
                        <Loader2 size={18} className="spin-slow" /> Verifying Code...
                      </>
                    ) : (
                      <>
                        Verify &amp; Activate Microsoft MFA <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>

                <button type="button" onClick={handleSkip} style={styles.skipLink}>
                  Skip for now, set this up later &rarr;
                </button>
              </div>

            </div>

          </div>
        </main>
      ) : (
        <main style={styles.successContainer}>
          <div style={styles.successCard}>
            <div style={styles.successIconOuter}>
              <CheckCircle size={48} color="#ffffff" />
            </div>

            <h2 style={styles.successTitle}>MFA Security Enabled Successfully!</h2>
            <p style={styles.successDesc}>
              Your account for {schoolName} is now protected with Microsoft Authenticator. You'll be asked for a code from the app (or your email) whenever you log in.
            </p>

            <button
              type="button"
              onClick={() => navigate('/login', { state: { email: schoolEmail } })}
              style={styles.proceedDashboardBtn}
            >
              Continue to Login <ArrowRight size={18} />
            </button>
          </div>
        </main>
      )}

    </div>
  );
}

const styles = {
  pageContainer: {
    background: '#f8fafc',
    minHeight: '100vh',
    paddingBottom: '5rem',
    boxSizing: 'border-box',
  },
  headerSection: {
    background: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    padding: '2.5rem 1.5rem',
    textAlign: 'center',
  },
  headerContainer: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  badgeCapsule: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    background: '#e0f2fe',
    border: '1px solid #bae6fd',
    color: '#0369a1',
    padding: '0.35rem 0.95rem',
    borderRadius: '50px',
    fontSize: '0.78rem',
    fontWeight: 800,
    marginBottom: '1rem',
    fontFamily: 'var(--font-heading)',
  },
  mainTitle: {
    fontSize: '2.25rem',
    fontWeight: 900,
    color: '#0f172a',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.5rem',
  },
  mainSubtitle: {
    fontSize: '0.95rem',
    color: '#64748b',
    lineHeight: '1.6',
  },

  contentContainer: {
    maxWidth: '1000px',
    margin: '2rem auto 0 auto',
    padding: '0 1.5rem',
    boxSizing: 'border-box',
  },

  /* Setup Card Box */
  setupCardBox: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    padding: '2.25rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
  },
  setupCardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #f1f5f9',
  },
  headerIconSquare: {
    width: '48px',
    height: '48px',
    minWidth: '48px',
    borderRadius: '12px',
    background: '#e0f2fe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setupCardTitle: {
    fontSize: '1.35rem',
    fontWeight: 800,
    color: '#0f172a',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.2rem',
  },
  setupCardSub: {
    fontSize: '0.85rem',
    color: '#64748b',
  },

  /* Microsoft Setup Layout Grid */
  msSetupGrid: {
    display: 'grid',
    gridTemplateColumns: '260px 1fr',
    gap: '2.5rem',
    alignItems: 'start',
  },
  qrColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '14px',
    padding: '1.5rem',
  },
  qrFrame: {
    background: '#ffffff',
    padding: '0.75rem',
    borderRadius: '12px',
    border: '1px solid #cbd5e1',
    boxShadow: '0 6px 15px rgba(0,0,0,0.05)',
    marginBottom: '0.75rem',
  },
  qrScanLabel: {
    fontSize: '0.78rem',
    fontWeight: 700,
    color: '#0369a1',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
  },

  /* Instructions Column */
  instructionsColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  stepsHeading: {
    fontSize: '1rem',
    fontWeight: 800,
    color: '#0f172a',
    fontFamily: 'var(--font-heading)',
    marginBottom: '1rem',
  },
  stepsList: {
    paddingLeft: 0,
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
    marginBottom: '2rem',
  },
  stepListItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.85rem',
    fontSize: '0.88rem',
    color: '#334155',
    lineHeight: '1.45',
  },
  stepBullet: {
    width: '24px',
    height: '24px',
    minWidth: '24px',
    borderRadius: '50%',
    background: '#041026',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '0.78rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0.1rem',
  },
  appLink: {
    color: '#0284c7',
    fontWeight: 700,
    textDecoration: 'none',
    margin: '0 0.2rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.15rem',
  },

  /* OTP Input Box */
  otpForm: {
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '1.5rem',
  },
  otpLabel: {
    fontSize: '0.85rem',
    fontWeight: 800,
    color: '#0f172a',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.85rem',
    display: 'block',
  },
  otpInputGroup: {
    display: 'flex',
    gap: '0.65rem',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  otpBox: {
    width: '46px',
    height: '52px',
    borderRadius: '10px',
    border: '2px solid #cbd5e1',
    textAlign: 'center',
    fontSize: '1.35rem',
    fontWeight: 800,
    fontFamily: 'var(--font-heading)',
    color: '#0f172a',
    outline: 'none',
    background: '#ffffff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.03)',
    transition: 'all 0.2s ease',
  },
  otpBoxFilled: {
    border: '2px solid #0284c7',
    background: '#f0f9ff',
  },
  otpBoxError: {
    border: '2px solid #ef4444',
    background: '#fff5f5',
  },
  errorAlert: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.45rem',
    color: '#dc2626',
    fontSize: '0.82rem',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  verifyBtnPrimary: {
    width: '100%',
    padding: '0.85rem',
    borderRadius: '10px',
    background: '#041026',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '0.92rem',
    fontFamily: 'var(--font-heading)',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.65rem',
    boxShadow: '0 6px 20px rgba(4, 16, 38, 0.25)',
  },
  skipLink: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    background: 'transparent',
    border: 'none',
    color: '#64748b',
    fontSize: '0.82rem',
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: '0.85rem',
  },

  /* Success View */
  successContainer: {
    maxWidth: '650px',
    margin: '3rem auto',
    padding: '0 1.5rem',
  },
  successCard: {
    background: '#ffffff',
    borderRadius: '24px',
    border: '1px solid #e2e8f0',
    padding: '3rem 2.5rem',
    textAlign: 'center',
    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
  },
  successIconOuter: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: '#10b981',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem auto',
    boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)',
  },
  successTitle: {
    fontSize: '1.75rem',
    fontWeight: 900,
    color: '#0f172a',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.5rem',
  },
  successDesc: {
    fontSize: '0.95rem',
    color: '#475569',
    lineHeight: '1.6',
    marginBottom: '2rem',
  },
  proceedDashboardBtn: {
    width: '100%',
    padding: '0.95rem',
    borderRadius: '12px',
    background: '#041026',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '1rem',
    fontFamily: 'var(--font-heading)',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.65rem',
    boxShadow: '0 8px 25px rgba(4, 16, 38, 0.3)',
  },

  /* Guard (no activation token) */
  guardCard: {
    maxWidth: '480px',
    margin: '4rem auto',
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '20px',
    padding: '2.5rem',
    textAlign: 'center',
    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
  },
  guardTitle: {
    fontSize: '1.3rem',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '0.5rem',
  },
  guardDesc: {
    fontSize: '0.9rem',
    color: '#64748b',
    lineHeight: '1.55',
    marginBottom: '1.5rem',
  },
  guardLink: {
    color: '#0284c7',
    fontWeight: 700,
    textDecoration: 'none',
  }
};

// Responsive tweak: stack the QR column above instructions on small screens
if (typeof document !== 'undefined') {
  let styleSheet = document.getElementById('mfa-setup-responsive-styles');
  if (!styleSheet) {
    styleSheet = document.createElement('style');
    styleSheet.id = 'mfa-setup-responsive-styles';
    document.head.appendChild(styleSheet);
  }
  styleSheet.innerText = `
    @media (max-width: 768px) {
      .mfa-setup-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `;
}
