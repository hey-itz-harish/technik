import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Mail, 
  Smartphone, 
  QrCode, 
  Copy, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Lock, 
  Key, 
  Sparkles, 
  Download, 
  AlertCircle, 
  CheckCircle, 
  Loader2,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export default function MfaSetup() {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve school email from location state or query or default fallback
  const queryParams = new URLSearchParams(location.search);
  const emailFromUrl = queryParams.get('email');
  const schoolEmail = location.state?.email || emailFromUrl || 'principal@stxaviers.edu.in';
  const schoolName = location.state?.schoolName || 'St. Xavier International School';

  // Selected MFA Method: 'ms-authenticator' | 'email'
  const [selectedMethod, setSelectedMethod] = useState('ms-authenticator');
  
  // OTP Digits State (6 boxes)
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  // Copy Key Feedback
  const [copiedKey, setCopiedKey] = useState(false);

  // Verification & Success State
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Email Resend Timer State
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const secretKey = 'JBSW Y3DP EHPK 3PXP';

  // Countdown timer for email OTP resend
  useEffect(() => {
    let interval = null;
    if (selectedMethod === 'email' && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer(prev => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [selectedMethod, resendTimer]);

  const handleCopyKey = () => {
    navigator.clipboard.writeText(secretKey.replace(/\s/g, ''));
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2500);
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setErrorMessage('');

    // Auto-advance to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendEmailOtp = () => {
    setResendTimer(30);
    setCanResend(false);
    setErrorMessage('');
    alert(`A new 6-digit verification code has been dispatched to ${schoolEmail}.`);
  };

  const handleVerifySubmit = (e) => {
    e.preventDefault();
    const enteredCode = otp.join('');

    if (enteredCode.length < 6) {
      setErrorMessage('Please enter all 6 digits of the verification code.');
      return;
    }

    setIsVerifying(true);
    setErrorMessage('');

    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 1200);
  };

  return (
    <div style={styles.pageContainer}>
      
      {/* Top Header Badge & Title */}
      <header style={styles.headerSection}>
        <div style={styles.headerContainer}>
          <div style={styles.badgeCapsule}>
            <ShieldCheck size={14} color="#0284c7" />
            <span>MFA Portal Security Setup</span>
          </div>
          <h1 style={styles.mainTitle}>
            Configure <span style={{ color: '#f97316' }}>Two-Factor Authentication</span>
          </h1>
          <p style={styles.mainSubtitle}>
            Protect {schoolName} administrator account with Multi-Factor Authentication. Choose your preferred verification method below.
          </p>
        </div>
      </header>

      {!isVerified ? (
        <main style={styles.contentContainer}>
          
          {/* METHOD SELECTOR TABS */}
          <div style={styles.methodSelectorGrid}>
            
            {/* Option 1: Microsoft Authenticator */}
            <div 
              onClick={() => { setSelectedMethod('ms-authenticator'); setErrorMessage(''); setOtp(['','','','','','']); }}
              style={{
                ...styles.methodCard,
                ...(selectedMethod === 'ms-authenticator' ? styles.methodCardActiveMS : {})
              }}
            >
              <div style={styles.methodCardTop}>
                <div style={{ ...styles.methodIconBox, background: selectedMethod === 'ms-authenticator' ? '#0284c7' : '#e0f2fe' }}>
                  <Smartphone size={24} color={selectedMethod === 'ms-authenticator' ? '#ffffff' : '#0284c7'} />
                </div>
                {selectedMethod === 'ms-authenticator' && (
                  <span style={styles.activeCheckBadge}><Check size={13} color="#ffffff" /> Active</span>
                )}
              </div>
              <h3 style={styles.methodTitle}>Microsoft Authenticator</h3>
              <p style={styles.methodDesc}>
                Use TOTP security codes generated by the Microsoft Authenticator app on your phone. Highly secure & works offline.
              </p>
              <div style={styles.recommendedPill}>Recommended for Schools</div>
            </div>

            {/* Option 2: Email OTP */}
            <div 
              onClick={() => { setSelectedMethod('email'); setErrorMessage(''); setOtp(['','','','','','']); }}
              style={{
                ...styles.methodCard,
                ...(selectedMethod === 'email' ? styles.methodCardActiveEmail : {})
              }}
            >
              <div style={styles.methodCardTop}>
                <div style={{ ...styles.methodIconBox, background: selectedMethod === 'email' ? '#ea580c' : '#ffedd5' }}>
                  <Mail size={24} color={selectedMethod === 'email' ? '#ffffff' : '#ea580c'} />
                </div>
                {selectedMethod === 'email' && (
                  <span style={styles.activeCheckBadgeOrange}><Check size={13} color="#ffffff" /> Active</span>
                )}
              </div>
              <h3 style={styles.methodTitle}>Email OTP Passcode</h3>
              <p style={styles.methodDesc}>
                Receive a 6-digit single-use passcode directly to your registered administrator email address during login.
              </p>
              <div style={styles.emailPill}>{schoolEmail}</div>
            </div>

          </div>

          {/* DETAIL SETUP VIEW DEPENDING ON METHOD */}
          {selectedMethod === 'ms-authenticator' ? (
            /* ========================================================= */
            /* MICROSOFT AUTHENTICATOR SETUP VIEW WITH QR CODE & STEPS   */
            /* ========================================================= */
            <div style={styles.setupCardBox}>
              
              <div style={styles.setupCardHeader}>
                <div style={styles.headerIconSquare}>
                  <QrCode size={24} color="#0284c7" />
                </div>
                <div>
                  <h2 style={styles.setupCardTitle}>Set Up Microsoft Authenticator</h2>
                  <p style={styles.setupCardSub}>Scan the QR code with your mobile app or enter the secret key manually.</p>
                </div>
              </div>

              <div style={styles.msSetupGrid}>
                
                {/* Left Column: QR Code & Secret Key Display */}
                <div style={styles.qrColumn}>
                  <div style={styles.qrFrame}>
                    {/* High Precision Simulated 2FA QR Code Vector Graphic */}
                    <svg width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100" height="100" rx="8" fill="#ffffff" />
                      {/* Top-Left Finder */}
                      <rect x="8" y="8" width="28" height="28" rx="4" fill="#041026" />
                      <rect x="13" y="13" width="18" height="18" rx="2" fill="#ffffff" />
                      <rect x="17" y="17" width="10" height="10" rx="1" fill="#0284c7" />

                      {/* Top-Right Finder */}
                      <rect x="64" y="8" width="28" height="28" rx="4" fill="#041026" />
                      <rect x="69" y="13" width="18" height="18" rx="2" fill="#ffffff" />
                      <rect x="73" y="17" width="10" height="10" rx="1" fill="#0284c7" />

                      {/* Bottom-Left Finder */}
                      <rect x="8" y="64" width="28" height="28" rx="4" fill="#041026" />
                      <rect x="13" y="69" width="18" height="18" rx="2" fill="#ffffff" />
                      <rect x="17" y="73" width="10" height="10" rx="1" fill="#0284c7" />

                      {/* Data Pattern Pixels */}
                      <rect x="40" y="8" width="6" height="6" fill="#041026" />
                      <rect x="50" y="8" width="6" height="6" fill="#041026" />
                      <rect x="40" y="18" width="6" height="6" fill="#0284c7" />
                      <rect x="48" y="24" width="8" height="8" fill="#041026" />
                      <rect x="8" y="40" width="6" height="6" fill="#041026" />
                      <rect x="18" y="44" width="6" height="6" fill="#0284c7" />
                      <rect x="28" y="40" width="6" height="6" fill="#041026" />
                      <rect x="40" y="40" width="20" height="20" rx="4" fill="#041026" />

                      {/* Center MS Brand Accent */}
                      <rect x="44" y="44" width="6" height="6" fill="#f97316" />
                      <rect x="52" y="44" width="6" height="6" fill="#0284c7" />
                      <rect x="44" y="52" width="6" height="6" fill="#10b981" />
                      <rect x="52" y="52" width="6" height="6" fill="#fbbf24" />

                      <rect x="68" y="40" width="8" height="8" fill="#041026" />
                      <rect x="80" y="44" width="8" height="8" fill="#0284c7" />
                      <rect x="40" y="68" width="8" height="8" fill="#041026" />
                      <rect x="52" y="72" width="8" height="8" fill="#041026" />
                      <rect x="68" y="68" width="10" height="10" fill="#0284c7" />
                      <rect x="82" y="82" width="10" height="10" fill="#041026" />
                      <rect x="68" y="82" width="8" height="8" fill="#041026" />
                    </svg>
                  </div>
                  <div style={styles.qrScanLabel}>
                    <QrCode size={14} color="#0284c7" /> Scan QR with Authenticator App
                  </div>

                  <div style={styles.secretKeyContainer}>
                    <span style={styles.secretKeyLabel}>Secret Key (Manual Entry):</span>
                    <div style={styles.secretKeyBox}>
                      <span style={styles.secretKeyText}>{secretKey}</span>
                      <button 
                        type="button" 
                        onClick={handleCopyKey}
                        style={styles.copyBtn}
                        title="Copy Secret Key"
                      >
                        {copiedKey ? <Check size={14} color="#10b981" /> : <Copy size={14} color="#0284c7" />}
                        <span>{copiedKey ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column: Step-by-Step Instructions & Verification Code */}
                <div style={styles.instructionsColumn}>
                  <h4 style={styles.stepsHeading}>Setup Steps for Microsoft Authenticator:</h4>
                  
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
                        Open the app, tap the <strong>"+"</strong> icon (Add account) and choose <strong>"Work or school account"</strong> or <strong>"Other"</strong>.
                      </div>
                    </li>

                    <li style={styles.stepListItem}>
                      <span style={styles.stepBullet}>3</span>
                      <div>
                        Point your camera to scan the QR code on the left (or enter the Secret Key manually).
                      </div>
                    </li>

                    <li style={styles.stepListItem}>
                      <span style={styles.stepBullet}>4</span>
                      <div>
                        Enter the 6-digit code displayed in Microsoft Authenticator below to activate MFA.
                      </div>
                    </li>
                  </ol>

                  {/* 6-Digit OTP Form */}
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
                          Verify & Activate Microsoft MFA <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </form>

                </div>

              </div>

            </div>
          ) : (
            /* ========================================================= */
            /* EMAIL OTP VERIFICATION SETUP VIEW                         */
            /* ========================================================= */
            <div style={styles.setupCardBox}>
              
              <div style={styles.setupCardHeader}>
                <div style={{ ...styles.headerIconSquare, background: '#ffedd5' }}>
                  <Mail size={24} color="#ea580c" />
                </div>
                <div>
                  <h2 style={styles.setupCardTitle}>Set Up Email Verification OTP</h2>
                  <p style={styles.setupCardSub}>A 6-digit security code has been sent to your administrator email.</p>
                </div>
              </div>

              <div style={styles.emailSetupWrapper}>
                <div style={styles.emailBoxInfo}>
                  <Mail size={20} color="#ea580c" />
                  <div>
                    <span style={{ fontSize: '0.82rem', color: '#64748b', display: 'block' }}>Destination Email Address:</span>
                    <strong style={{ fontSize: '1.05rem', color: '#0f172a' }}>{schoolEmail}</strong>
                  </div>
                </div>

                <form onSubmit={handleVerifySubmit} style={styles.otpFormCentered}>
                  <label style={styles.otpLabel}>Enter 6-Digit Email Verification Code <span style={{ color: '#ef4444' }}>*</span></label>
                  
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
                          ...(digit ? styles.otpBoxFilledOrange : {}),
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

                  <div style={styles.resendRow}>
                    {canResend ? (
                      <button type="button" onClick={handleResendEmailOtp} style={styles.resendBtnActive}>
                        Resend Verification OTP Code
                      </button>
                    ) : (
                      <span style={styles.resendTimerText}>
                        Didn't receive code? Resend available in <strong>{resendTimer}s</strong>
                      </span>
                    )}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isVerifying} 
                    style={styles.verifyBtnOrange}
                  >
                    {isVerifying ? (
                      <>
                        <Loader2 size={18} className="spin-slow" /> Verifying Code...
                      </>
                    ) : (
                      <>
                        Verify & Enable Email MFA <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>

              </div>

            </div>
          )}

        </main>
      ) : (
        /* ========================================================= */
        /* MFA SETUP COMPLETE SUCCESS VIEW                           */
        /* ========================================================= */
        <main style={styles.successContainer}>
          <div style={styles.successCard}>
            <div style={styles.successIconOuter}>
              <CheckCircle size={48} color="#ffffff" />
            </div>
            
            <h2 style={styles.successTitle}>MFA Security Enabled Successfully!</h2>
            <p style={styles.successDesc}>
              {selectedMethod === 'ms-authenticator'
                ? `Your account for ${schoolName} is now protected with Microsoft Authenticator 2FA.`
                : `Your account for ${schoolName} is now protected with Email OTP verification.`}
            </p>

            {/* Emergency Recovery Codes Box */}
            <div style={styles.recoveryBox}>
              <div style={styles.recoveryHeader}>
                <Key size={18} color="#0284c7" />
                <span>Emergency Backup Recovery Codes (Save These)</span>
              </div>
              <p style={styles.recoverySub}>
                If you lose access to your phone or email, use these one-time codes to sign into your school portal:
              </p>
              
              <div style={styles.codesGrid}>
                <span style={styles.codePill}>SCH-8942-A1</span>
                <span style={styles.codePill}>SCH-7301-B2</span>
                <span style={styles.codePill}>SCH-9104-C3</span>
                <span style={styles.codePill}>SCH-6218-D4</span>
              </div>
            </div>

            <button 
              type="button" 
              onClick={() => {
                sessionStorage.setItem('technik_school_authenticated', 'true');
                navigate('/schools');
              }}
              style={styles.proceedDashboardBtn}
            >
              Proceed to School Dashboard <ArrowRight size={18} />
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

  /* Method Selector Cards */
  methodSelectorGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  methodCard: {
    background: '#ffffff',
    border: '2px solid #e2e8f0',
    borderRadius: '16px',
    padding: '1.75rem',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  methodCardActiveMS: {
    border: '2px solid #0284c7',
    boxShadow: '0 10px 25px rgba(2, 132, 199, 0.15)',
    background: '#f0f9ff',
  },
  methodCardActiveEmail: {
    border: '2px solid #ea580c',
    boxShadow: '0 10px 25px rgba(234, 88, 12, 0.15)',
    background: '#fff7ed',
  },
  methodCardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.25rem',
  },
  methodIconBox: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeCheckBadge: {
    background: '#0284c7',
    color: '#ffffff',
    fontSize: '0.72rem',
    fontWeight: 800,
    padding: '0.2rem 0.6rem',
    borderRadius: '20px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.2rem',
  },
  activeCheckBadgeOrange: {
    background: '#ea580c',
    color: '#ffffff',
    fontSize: '0.72rem',
    fontWeight: 800,
    padding: '0.2rem 0.6rem',
    borderRadius: '20px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.2rem',
  },
  methodTitle: {
    fontSize: '1.15rem',
    fontWeight: 800,
    color: '#0f172a',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.4rem',
  },
  methodDesc: {
    fontSize: '0.85rem',
    color: '#64748b',
    lineHeight: '1.5',
    marginBottom: '1.25rem',
    flex: 1,
  },
  recommendedPill: {
    display: 'inline-block',
    fontSize: '0.72rem',
    fontWeight: 800,
    color: '#0284c7',
    background: '#e0f2fe',
    padding: '0.25rem 0.65rem',
    borderRadius: '6px',
    alignSelf: 'flex-start',
  },
  emailPill: {
    display: 'inline-block',
    fontSize: '0.72rem',
    fontWeight: 800,
    color: '#ea580c',
    background: '#ffedd5',
    padding: '0.25rem 0.65rem',
    borderRadius: '6px',
    alignSelf: 'flex-start',
    wordBreak: 'break-all',
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
    marginBottom: '1.25rem',
  },
  secretKeyContainer: {
    width: '100%',
    textAlign: 'center',
  },
  secretKeyLabel: {
    fontSize: '0.72rem',
    fontWeight: 700,
    color: '#64748b',
    display: 'block',
    marginBottom: '0.35rem',
  },
  secretKeyBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#ffffff',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    padding: '0.4rem 0.65rem',
  },
  secretKeyText: {
    fontSize: '0.78rem',
    fontWeight: 800,
    fontFamily: 'monospace',
    color: '#0f172a',
    letterSpacing: '0.04em',
  },
  copyBtn: {
    background: '#f1f5f9',
    border: 'none',
    borderRadius: '4px',
    padding: '0.25rem 0.5rem',
    fontSize: '0.72rem',
    fontWeight: 700,
    color: '#0284c7',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.2rem',
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
  otpFormCentered: {
    maxWidth: '460px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  otpBoxFilledOrange: {
    border: '2px solid #ea580c',
    background: '#fff7ed',
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

  /* Email OTP Specific View */
  emailSetupWrapper: {
    padding: '1rem 0',
  },
  emailBoxInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    background: '#fff7ed',
    border: '1px solid #fed7aa',
    padding: '1rem 1.25rem',
    borderRadius: '12px',
    maxWidth: '460px',
    margin: '0 auto 2rem auto',
  },
  resendRow: {
    marginBottom: '1.25rem',
    textAlign: 'center',
  },
  resendBtnActive: {
    background: 'transparent',
    border: 'none',
    color: '#ea580c',
    fontWeight: 700,
    fontSize: '0.85rem',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  resendTimerText: {
    fontSize: '0.82rem',
    color: '#64748b',
  },
  verifyBtnOrange: {
    width: '100%',
    padding: '0.85rem',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
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
    boxShadow: '0 6px 20px rgba(249, 115, 22, 0.3)',
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
  recoveryBox: {
    background: '#f8fafc',
    border: '1px solid #cbd5e1',
    borderRadius: '14px',
    padding: '1.5rem',
    marginBottom: '2rem',
    textAlign: 'left',
  },
  recoveryHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.92rem',
    fontWeight: 800,
    color: '#0f172a',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.35rem',
  },
  recoverySub: {
    fontSize: '0.78rem',
    color: '#64748b',
    marginBottom: '1rem',
  },
  codesGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.75rem',
  },
  codePill: {
    background: '#ffffff',
    border: '1px solid #cbd5e1',
    padding: '0.5rem 0.85rem',
    borderRadius: '6px',
    fontFamily: 'monospace',
    fontWeight: 800,
    fontSize: '0.88rem',
    color: '#0369a1',
    textAlign: 'center',
    letterSpacing: '0.05em',
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
  }
};
