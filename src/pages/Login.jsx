import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  Building2, 
  Lock, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  KeyRound, 
  Sparkles, 
  School,
  HelpCircle,
  AlertCircle
} from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  // Read URL query parameter for registration success state
  const queryParams = new URLSearchParams(location.search);
  const isJustRegistered = queryParams.get('registered') === 'true';

  const initialEmail = location.state?.email || 'coordinator@stxaviers.edu.in';
  const initialSchoolName = location.state?.schoolName || "St. Xavier International School";
  const initialRegId = location.state?.id || 'SCH-2026-TXI';

  const [emailOrCode, setEmailOrCode] = useState(initialEmail);
  const [password, setPassword] = useState('••••••••');
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Auto-Fill Demo Credentials Helper
  const handleFillDemoCredentials = () => {
    setEmailOrCode('SCH-2026-TXI');
    setPassword('Technik2026!');
    setLoginError('');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!emailOrCode || !password) {
      setLoginError('Please enter your School Code / Email and Password.');
      return;
    }

    setIsSubmitting(true);
    setLoginError('');

    // Save pending MFA status
    sessionStorage.setItem('technik_school_auth_pending', 'true');

    setTimeout(() => {
      setIsSubmitting(false);
      // Redirect to Verification / MFA Setup Page
      navigate('/mfa-setup', {
        state: {
          email: emailOrCode.includes('@') ? emailOrCode : 'coordinator@stxaviers.edu.in',
          schoolName: initialSchoolName,
          schoolCode: emailOrCode
        }
      });
    }, 800);
  };

  return (
    <div style={styles.pageContainer}>
      
      {/* Background Decorative Accent Gradients */}
      <div style={styles.bgGradientBlob1} />
      <div style={styles.bgGradientBlob2} />

      <main style={styles.contentWrapper}>
        
        {/* TOP INSTITUTIONAL HERO BRANDING */}
        <div style={styles.brandingHeader}>
          <div style={styles.badgeCapsule}>
            <ShieldCheck size={15} color="#38bdf8" />
            <span>OFFICIAL PARTNER INSTITUTION PORTAL</span>
          </div>

          <h1 style={styles.mainTitle}>
            School Portal <span style={{ color: '#0284c7' }}>Login</span>
          </h1>
          <p style={styles.mainSub}>
            Sign in to manage your school's registered students, track Technik Pride Award nominations, and download official certificates.
          </p>
        </div>

        {/* REGISTRATION SUCCESS BANNER (IF REDIRECTED AFTER REGISTRATION) */}
        {isJustRegistered && (
          <div style={styles.registeredBanner}>
            <div style={styles.bannerIconSquare}>
              <CheckCircle2 size={24} color="#16a34a" />
            </div>
            <div>
              <h4 style={styles.bannerTitle}>School Account Created Successfully!</h4>
              <p style={styles.bannerSub}>
                Your School Code (<strong>{initialRegId}</strong>) has been generated. Please sign in below to verify your identity via 2-Factor Authentication and access your School Portal.
              </p>
            </div>
          </div>
        )}

        {/* MAIN LOGIN CARD */}
        <div style={styles.loginCard}>
          
          <div style={styles.cardHeaderBox} className="login-card-header">
            <div style={styles.cardHeaderIconCircle}>
              <School size={24} color="#0284c7" />
            </div>
            <div>
              <h2 style={styles.cardTitle}>Institutional Sign In</h2>
              <p style={styles.cardSub}>Enter your School Code or Coordinator Email</p>
            </div>

            <button 
              type="button" 
              onClick={handleFillDemoCredentials}
              style={styles.demoFillBtn}
              className="login-demo-btn"
            >
              <Sparkles size={14} /> Auto-Fill Demo Credentials
            </button>
          </div>

          <form onSubmit={handleLoginSubmit} style={styles.formStack}>
            
            {loginError && (
              <div style={styles.errorAlert}>
                <AlertCircle size={16} color="#dc2626" />
                <span>{loginError}</span>
              </div>
            )}

            {/* Field 1: School Code / Email */}
            <div style={styles.fieldCol}>
              <label style={styles.fieldLabel}>
                School Code or Coordinator Email <span style={styles.reqStar}>*</span>
              </label>
              <div style={styles.inputWrapper}>
                <Building2 size={18} color="#64748b" style={styles.inputIcon} />
                <input 
                  type="text" 
                  required
                  placeholder="e.g. SCH-2026-TXI or coordinator@stxaviers.edu.in"
                  value={emailOrCode}
                  onChange={(e) => setEmailOrCode(e.target.value)}
                  style={styles.textInput}
                />
              </div>
            </div>

            {/* Field 2: Password */}
            <div style={styles.fieldCol}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label style={styles.fieldLabel}>
                  Account Password <span style={styles.reqStar}>*</span>
                </label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset link dispatched to school coordinator email."); }} style={styles.forgotLink}>
                  Forgot password?
                </a>
              </div>
              <div style={styles.inputWrapper}>
                <Lock size={18} color="#64748b" style={styles.inputIcon} />
                <input 
                  type="password" 
                  required
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={styles.textInput}
                />
              </div>
            </div>

            {/* Remember Me & Help Row */}
            <div style={styles.optionsRow} className="login-options-row">
              <label style={styles.checkboxLabel}>
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={styles.checkboxInput}
                />
                <span>Remember this school browser session</span>
              </label>

              <span style={styles.mfaNoticePill}>
                <KeyRound size={13} color="#0284c7" /> Requires MFA Verification
              </span>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              style={styles.submitBtnGold}
            >
              {isSubmitting ? 'Authenticating Credentials...' : 'Sign In & Proceed to Verification'}
              <ArrowRight size={18} />
            </button>

          </form>

          {/* Footer Callout: Need Registration? */}
          <div style={styles.cardFooter}>
            <p style={styles.footerText}>
              Don't have a registered school account yet?{' '}
              <Link to="/register?level=school" style={styles.registerLink}>
                Register Your School Here &rarr;
              </Link>
            </p>
          </div>

        </div>

        {/* SECURITY FOOTER INFO */}
        <div style={styles.securityFooter}>
          <div style={styles.secItem}>
            <ShieldCheck size={16} color="#10b981" />
            <span>256-Bit SSL Encrypted Enterprise Portal</span>
          </div>
          <div style={styles.secItem}>
            <Lock size={16} color="#38bdf8" />
            <span>Multi-Factor Authentication (MFA) Protected</span>
          </div>
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
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3.5rem 1rem'
  },
  bgGradientBlob1: {
    position: 'absolute',
    top: '-10%',
    left: '15%',
    width: '450px',
    height: '450px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, rgba(255,255,255,0) 70%)',
    pointerEvents: 'none'
  },
  bgGradientBlob2: {
    position: 'absolute',
    bottom: '-10%',
    right: '15%',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(217, 119, 6, 0.07) 0%, rgba(255,255,255,0) 70%)',
    pointerEvents: 'none'
  },
  contentWrapper: {
    maxWidth: '540px',
    width: '100%',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2
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
    fontSize: '2.2rem',
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
  registeredBanner: {
    background: '#f0fdf4',
    border: '1.5px solid #86efac',
    borderRadius: '16px',
    padding: '1.1rem 1.3rem',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.9rem',
    boxShadow: '0 4px 12px rgba(22, 163, 74, 0.06)'
  },
  bannerIconSquare: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: '#dcfce7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  bannerTitle: {
    margin: '0 0 4px 0',
    fontSize: '0.98rem',
    fontWeight: 800,
    color: '#15803d'
  },
  bannerSub: {
    margin: 0,
    fontSize: '0.85rem',
    color: '#166534',
    lineHeight: 1.45
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
    position: 'relative'
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
    fontSize: '1.25rem',
    fontWeight: 800,
    margin: '0 0 2px 0',
    color: '#0f172a'
  },
  cardSub: {
    fontSize: '0.82rem',
    color: '#64748b',
    margin: 0
  },
  demoFillBtn: {
    marginLeft: 'auto',
    background: '#fffbe6',
    border: '1px solid #fde047',
    color: '#b45309',
    padding: '0.4rem 0.75rem',
    borderRadius: '8px',
    fontSize: '0.76rem',
    fontWeight: 700,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    transition: 'all 0.2s',
    boxShadow: '0 2px 6px rgba(217, 119, 6, 0.1)'
  },
  formStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem'
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
  fieldCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.45rem'
  },
  fieldLabel: {
    fontSize: '0.85rem',
    fontWeight: 700,
    color: '#1e293b'
  },
  reqStar: {
    color: '#ef4444',
    marginLeft: '2px'
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  inputIcon: {
    position: 'absolute',
    left: '1rem',
    pointerEvents: 'none'
  },
  textInput: {
    width: '100%',
    background: '#f8fafc',
    border: '1px solid #cbd5e1',
    borderRadius: '12px',
    padding: '0.85rem 1rem 0.85rem 2.8rem',
    color: '#0f172a',
    fontSize: '0.92rem',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'all 0.2s'
  },
  forgotLink: {
    color: '#0284c7',
    fontSize: '0.8rem',
    fontWeight: 600,
    textDecoration: 'none'
  },
  optionsRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem',
    fontSize: '0.82rem'
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.45rem',
    color: '#475569',
    cursor: 'pointer'
  },
  checkboxInput: {
    accentColor: '#0284c7',
    width: '15px',
    height: '15px',
    cursor: 'pointer'
  },
  mfaNoticePill: {
    color: '#0284c7',
    fontSize: '0.78rem',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
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
    marginTop: '0.5rem',
    transition: 'all 0.2s'
  },
  cardFooter: {
    marginTop: '1.8rem',
    paddingTop: '1.2rem',
    borderTop: '1px solid #f1f5f9',
    textAlign: 'center'
  },
  footerText: {
    fontSize: '0.85rem',
    color: '#64748b',
    margin: 0
  },
  registerLink: {
    color: '#0284c7',
    fontWeight: 700,
    textDecoration: 'none'
  },
  securityFooter: {
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap'
  },
  secItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.78rem',
    color: '#64748b',
    fontWeight: 600
  }
};

// Add responsive styling for Login
if (typeof document !== 'undefined') {
  let styleSheet = document.getElementById('login-responsive-styles');
  if (!styleSheet) {
    styleSheet = document.createElement("style");
    styleSheet.id = 'login-responsive-styles';
    document.head.appendChild(styleSheet);
  }
  styleSheet.innerText = `
    @media (max-width: 540px) {
      .login-card-header {
        flex-wrap: wrap !important;
        gap: 0.75rem !important;
      }
      .login-demo-btn {
        margin-left: 0 !important;
        width: 100% !important;
        justify-content: center !important;
      }
      .login-options-row {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 0.65rem !important;
      }
    }
  `;
}
