import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { getMfaStatusApi, verifyCodeApi } from '../services/api';
import {
  ShieldCheck,
  Mail,
  Smartphone,
  Check,
  ArrowRight,
  AlertCircle,
  Loader2,
  Lock
} from 'lucide-react';

export default function CodeVerification() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || '';
  const rememberMe = location.state?.rememberMe ?? true;

  // Hooks must run unconditionally on every render — the "no email"
  // early-return happens further below, after all hooks are declared.
  const [mode, setMode] = useState('mail'); // 'mail' | 'msauth'
  const [msAuthEnabled, setMsAuthEnabled] = useState(false);
  const [statusLoaded, setStatusLoaded] = useState(false);

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const [isVerifying, setIsVerifying] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!email) return;
    let cancelled = false;
    getMfaStatusApi({ email })
      .then((res) => {
        if (cancelled) return;
        setMsAuthEnabled(!!res.msAuthEnabled);
        setStatusLoaded(true);
      })
      .catch(() => {
        if (cancelled) return;
        // If the status check fails, fall back to email-only verification.
        setMsAuthEnabled(false);
        setStatusLoaded(true);
      });
    return () => { cancelled = true; };
  }, [email]);

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

  const handleModeSelect = (nextMode) => {
    if (nextMode === 'msauth' && !msAuthEnabled) return;
    setMode(nextMode);
    setOtp(['', '', '', '', '', '']);
    setErrorMessage('');
  };

  const handleVerifySubmit = async (e) => {
    e.preventDefault();
    const code = otp.join('');

    if (code.length < 6) {
      setErrorMessage('Please enter all 6 digits of the verification code.');
      return;
    }

    setIsVerifying(true);
    setErrorMessage('');

    try {
      await verifyCodeApi({ email, code, mode, rememberMe });
      sessionStorage.setItem('technik_school_authenticated', 'true');
      navigate('/schools');
    } catch (err) {
      setIsVerifying(false);
      setErrorMessage(err.message || 'Invalid code. Please try again.');
    }
  };

  // No email in context (e.g. direct navigation without logging in first) — send back to login.
  if (!email) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div style={styles.pageContainer}>
      <main style={styles.contentWrapper}>

        <div style={styles.brandingHeader}>
          <div style={styles.badgeCapsule}>
            <ShieldCheck size={15} color="#38bdf8" />
            <span>VERIFY YOUR IDENTITY</span>
          </div>
          <h1 style={styles.mainTitle}>Code Verification</h1>
          <p style={styles.mainSub}>
            Confirm it's you — enter the verification code for <strong>{email}</strong> to finish signing in.
          </p>
        </div>

        {/* MODE SELECTOR */}
        <div style={styles.methodSelectorGrid}>
          <div
            onClick={() => handleModeSelect('mail')}
            style={{
              ...styles.methodCard,
              ...(mode === 'mail' ? styles.methodCardActive : {})
            }}
          >
            <div style={styles.methodCardTop}>
              <div style={{ ...styles.methodIconBox, background: mode === 'mail' ? '#0284c7' : '#e0f2fe' }}>
                <Mail size={22} color={mode === 'mail' ? '#ffffff' : '#0284c7'} />
              </div>
              {mode === 'mail' && (
                <span style={styles.activeCheckBadge}><Check size={12} color="#ffffff" /> Selected</span>
              )}
            </div>
            <h3 style={styles.methodTitle}>Email OTP</h3>
            <p style={styles.methodDesc}>A 6-digit code was sent to your registered email.</p>
          </div>

          <div
            onClick={() => handleModeSelect('msauth')}
            style={{
              ...styles.methodCard,
              ...(mode === 'msauth' ? styles.methodCardActive : {}),
              ...(!msAuthEnabled ? styles.methodCardDisabled : {})
            }}
          >
            <div style={styles.methodCardTop}>
              <div style={{ ...styles.methodIconBox, background: mode === 'msauth' ? '#0284c7' : '#e0f2fe' }}>
                <Smartphone size={22} color={mode === 'msauth' ? '#ffffff' : (msAuthEnabled ? '#0284c7' : '#94a3b8')} />
              </div>
              {mode === 'msauth' && (
                <span style={styles.activeCheckBadge}><Check size={12} color="#ffffff" /> Selected</span>
              )}
            </div>
            <h3 style={{ ...styles.methodTitle, ...(!msAuthEnabled ? styles.methodTitleDisabled : {}) }}>Microsoft Authenticator</h3>
            <p style={styles.methodDesc}>
              {statusLoaded && !msAuthEnabled
                ? 'Not set up yet — you can configure this after logging in.'
                : 'Enter the current code shown in your authenticator app.'}
            </p>
          </div>
        </div>

        {/* CODE ENTRY CARD */}
        <div style={styles.loginCard}>
          <div style={styles.cardHeaderBox}>
            <div style={styles.cardHeaderIconCircle}>
              <Lock size={22} color="#0284c7" />
            </div>
            <div>
              <h2 style={styles.cardTitle}>Enter Verification Code</h2>
              <p style={styles.cardSub}>
                {mode === 'mail' ? 'Check your inbox for the 6-digit code.' : 'Open Microsoft Authenticator for the current code.'}
              </p>
            </div>
          </div>

          <form onSubmit={handleVerifySubmit} style={styles.formStack}>
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
                <AlertCircle size={16} color="#dc2626" />
                <span>{errorMessage}</span>
              </div>
            )}

            <button type="submit" disabled={isVerifying} style={styles.submitBtnGold}>
              {isVerifying ? (
                <><Loader2 size={18} className="spin-slow" /> Verifying...</>
              ) : (
                <>Verify &amp; Sign In <ArrowRight size={18} /></>
              )}
            </button>
          </form>
        </div>

      </main>
    </div>
  );
}

const styles = {
  pageContainer: {
    background: '#ffffff',
    minHeight: 'calc(100vh - 80px)',
    color: '#0f172a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3.5rem 1rem'
  },
  contentWrapper: {
    maxWidth: '620px',
    width: '100%',
    margin: '0 auto'
  },
  brandingHeader: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  badgeCapsule: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    background: 'rgba(2, 132, 199, 0.08)',
    border: '1px solid rgba(2, 132, 199, 0.25)',
    color: '#0284c7',
    fontSize: '0.78rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
    padding: '0.35rem 0.85rem',
    borderRadius: '20px',
    marginBottom: '1rem'
  },
  mainTitle: {
    fontSize: '2.1rem',
    fontWeight: 800,
    margin: '0 0 0.5rem 0',
    letterSpacing: '-0.02em',
    color: '#0f172a'
  },
  mainSub: {
    fontSize: '0.92rem',
    color: '#475569',
    lineHeight: 1.55,
    margin: 0
  },

  methodSelectorGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  methodCard: {
    background: '#ffffff',
    border: '2px solid #e2e8f0',
    borderRadius: '14px',
    padding: '1.25rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  methodCardActive: {
    border: '2px solid #0284c7',
    boxShadow: '0 10px 25px rgba(2, 132, 199, 0.15)',
    background: '#f0f9ff',
  },
  methodCardDisabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  methodCardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem',
  },
  methodIconBox: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeCheckBadge: {
    background: '#0284c7',
    color: '#ffffff',
    fontSize: '0.68rem',
    fontWeight: 800,
    padding: '0.18rem 0.55rem',
    borderRadius: '20px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.2rem',
  },
  methodTitle: {
    fontSize: '1rem',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '0.3rem',
  },
  methodTitleDisabled: {
    color: '#94a3b8',
  },
  methodDesc: {
    fontSize: '0.8rem',
    color: '#64748b',
    lineHeight: '1.45',
    margin: 0,
  },

  loginCard: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '24px',
    padding: '2.2rem',
    boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
  },
  cardHeaderBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
    marginBottom: '1.8rem',
    paddingBottom: '1.2rem',
    borderBottom: '1px solid #f1f5f9',
  },
  cardHeaderIconCircle: {
    width: '46px',
    height: '46px',
    borderRadius: '14px',
    background: 'rgba(2, 132, 199, 0.1)',
    border: '1px solid rgba(2, 132, 199, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 800,
    margin: '0 0 2px 0',
    color: '#0f172a'
  },
  cardSub: {
    fontSize: '0.82rem',
    color: '#64748b',
    margin: 0
  },
  formStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem'
  },
  otpInputGroup: {
    display: 'flex',
    gap: '0.65rem',
    justifyContent: 'center',
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
    background: '#fef2f2',
    border: '1px solid #fca5a5',
    color: '#991b1b',
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    fontSize: '0.85rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem'
  },
  submitBtnGold: {
    width: '100%',
    background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    border: 'none',
    borderRadius: '12px',
    padding: '0.95rem 1.5rem',
    color: '#ffffff',
    fontSize: '0.98rem',
    fontWeight: 800,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
    boxShadow: '0 6px 20px rgba(2, 132, 199, 0.35)',
  },
};
