import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, ShieldCheck, CheckCircle, ArrowRight, Loader2, Sparkles, Building2, User, MapPin } from 'lucide-react';

export default function Register({ selectedTrack, onRegisterSuccess, clearSelectedTrack }) {
  const navigate = useNavigate();

  // Form Fields State
  const [formData, setFormData] = useState({
    name: '',
    grade: 'Grade 6',
    school: '',
    city: '',
    track: selectedTrack || 'Coding & Algorithms',
    regType: 'all-levels' // 'all-levels' -> ₹599, 'per-level' -> ₹299
  });

  // Keep form track synchronized with props (if selected from Catalog/Compass)
  useEffect(() => {
    if (selectedTrack) {
      setFormData(prev => ({ ...prev, track: selectedTrack }));
    }
  }, [selectedTrack]);

  // Derived Values
  const feeAmount = formData.regType === 'all-levels' ? 599 : 299;
  
  // Calculate Grade Category
  const getCategory = (gradeStr) => {
    const num = parseInt(gradeStr.replace(/[^0-9]/g, ''), 10);
    if (num <= 5) return 'Junior Division (Grades 4-5)';
    if (num <= 7) return 'Middle Division (Grades 6-7)';
    return 'Senior Division (Grades 8-9)';
  };

  // State for Payment Modal Flow
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentStep, setPaymentStep] = useState('input'); // 'input', 'processing', 'success'
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.school || !formData.city) {
      alert("Please fill in all required fields.");
      return;
    }
    setShowCheckout(true);
  };

  // Execute Simulated Payment
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setPaymentStep('processing');
    
    setTimeout(() => {
      setPaymentStep('success');
      
      // Save registration state
      const newRegistration = {
        id: 'REG-' + Math.floor(100000 + Math.random() * 900000),
        studentName: formData.name,
        grade: formData.grade,
        school: formData.school,
        city: formData.city,
        track: formData.track,
        regType: formData.regType === 'all-levels' ? 'One-time (All Levels)' : 'Per Level',
        fee: feeAmount,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        stage: 1 // School level active
      };
      
      onRegisterSuccess(newRegistration);
      clearSelectedTrack();
    }, 2000);
  };

  const handleGoToDashboard = () => {
    setShowCheckout(false);
    setPaymentStep('input');
    navigate('/dashboard');
  };

  return (
    <div style={styles.page}>
      <header className="container" style={styles.header}>
        <h1 style={styles.title}>Secure <span className="text-gradient">Registration</span></h1>
        <p style={styles.subtitle}>Enter student details, select your registration format, and proceed to payment to unlock learning resources.</p>
      </header>

      <main className="container" style={styles.mainGrid} className="register-main-grid">
        {/* Left Column: Form */}
        <div className="glass-card" style={styles.formCard}>
          <h2 style={styles.cardHeader}>Student Particulars</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Student Name */}
            <div className="form-group">
              <label htmlFor="name-input" className="form-label">Student Full Name *</label>
              <div style={styles.inputWrapper}>
                <User size={16} style={styles.inputIcon} />
                <input 
                  type="text" 
                  id="name-input" 
                  className="form-control" 
                  style={styles.controlWithIcon}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Aarav Sharma"
                  required 
                />
              </div>
            </div>

            <div style={styles.formRow} className="register-form-row">
              {/* Grade */}
              <div className="form-group" style={{ flex: 1 }}>
                <label htmlFor="grade-select" className="form-label">Grade / Class *</label>
                <select 
                  id="grade-select" 
                  className="form-control"
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                >
                  <option value="Grade 4">Grade 4</option>
                  <option value="Grade 5">Grade 5</option>
                  <option value="Grade 6">Grade 6</option>
                  <option value="Grade 7">Grade 7</option>
                  <option value="Grade 8">Grade 8</option>
                  <option value="Grade 9">Grade 9</option>
                </select>
              </div>

              {/* Olympiad Track */}
              <div className="form-group" style={{ flex: 1.5 }}>
                <label htmlFor="track-select" className="form-label">Olympiad Track *</label>
                <select 
                  id="track-select" 
                  className="form-control"
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                >
                  <option value="Abacus Championship">Abacus Championship</option>
                  <option value="Mental Math Arena">Mental Math Arena</option>
                  <option value="Coding & Algorithms">Coding & Algorithms</option>
                  <option value="Robotics & Hardware">Robotics & Hardware</option>
                  <option value="English & Creative Writing">English & Creative Writing</option>
                  <option value="Digital & Classical Art">Digital & Classical Art</option>
                  <option value="AI & Machine Learning">AI & Machine Learning</option>
                  <option value="Public Speaking & Debate">Public Speaking & Debate</option>
                </select>
              </div>
            </div>

            {/* School */}
            <div className="form-group">
              <label htmlFor="school-input" className="form-label">School Name *</label>
              <div style={styles.inputWrapper}>
                <Building2 size={16} style={styles.inputIcon} />
                <input 
                  type="text" 
                  id="school-input" 
                  className="form-control" 
                  style={styles.controlWithIcon}
                  value={formData.school}
                  onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                  placeholder="e.g. St. Xavier's Academy"
                  required 
                />
              </div>
            </div>

            {/* City */}
            <div className="form-group">
              <label htmlFor="city-input" className="form-label">City *</label>
              <div style={styles.inputWrapper}>
                <MapPin size={16} style={styles.inputIcon} />
                <input 
                  type="text" 
                  id="city-input" 
                  className="form-control" 
                  style={styles.controlWithIcon}
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Mumbai"
                  required 
                />
              </div>
            </div>

            {/* Registration Type Select */}
            <div className="form-group">
              <label className="form-label">Registration Plan *</label>
              <div style={styles.regOptions}>
                <label 
                  style={{
                    ...styles.regLabel,
                    borderColor: formData.regType === 'all-levels' ? 'var(--primary)' : 'var(--border-subtle)',
                    background: formData.regType === 'all-levels' ? 'rgba(99, 102, 241, 0.05)' : 'transparent',
                  }}
                >
                  <input 
                    type="radio" 
                    name="regType" 
                    value="all-levels"
                    checked={formData.regType === 'all-levels'}
                    onChange={() => setFormData({ ...formData, regType: 'all-levels' })}
                    style={styles.radioInput}
                  />
                  <div>
                    <span style={styles.regTitle}>All Levels Package (Recommended)</span>
                    <span style={styles.regSubtitle}>One-time payment. Unlocks School, District & State study modules.</span>
                  </div>
                  <span style={styles.regPrice}>₹599</span>
                </label>

                <label 
                  style={{
                    ...styles.regLabel,
                    borderColor: formData.regType === 'per-level' ? 'var(--primary)' : 'var(--border-subtle)',
                    background: formData.regType === 'per-level' ? 'rgba(99, 102, 241, 0.05)' : 'transparent',
                  }}
                >
                  <input 
                    type="radio" 
                    name="regType" 
                    value="per-level"
                    checked={formData.regType === 'per-level'}
                    onChange={() => setFormData({ ...formData, regType: 'per-level' })}
                    style={styles.radioInput}
                  />
                  <div>
                    <span style={styles.regTitle}>Per Level Plan</span>
                    <span style={styles.regSubtitle}>Pay step-by-step. Includes entry-level School module only.</span>
                  </div>
                  <span style={styles.regPrice}>₹299</span>
                </label>
              </div>
            </div>

            {/* Live Fee Display */}
            <div style={styles.feeDisplayCard}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Calculated Total Fee</span>
              <span style={styles.feeDisplayVal}>₹{feeAmount}</span>
            </div>

            <button type="submit" className="btn btn-primary" style={styles.submitBtn}>
              Proceed to Payment
              <ArrowRight size={18} />
            </button>
          </form>
        </div>

        {/* Right Column: Order Summary */}
        <div className="glass-card" style={styles.summaryCard}>
          <div style={styles.summaryBadgeWrapper}>
            <span className="badge badge-indigo">Live Invoice State</span>
          </div>
          
          <h2 style={styles.cardHeader}>Order Summary</h2>
          
          <div style={styles.summaryDetails}>
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>Track</span>
              <span style={styles.summaryValue}>{formData.track}</span>
            </div>
            
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>Category</span>
              <span style={styles.summaryValue}>{getCategory(formData.grade)}</span>
            </div>
            
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>Exam Format</span>
              <span style={styles.summaryValue}>Online Proctored Exam</span>
            </div>
            
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>Qualifiers Date</span>
              <span style={styles.summaryValue}>Oct 18, 2026</span>
            </div>

            <div style={styles.summaryDivider} />

            {/* Small Path diagram */}
            <div style={styles.diagramContainer}>
              <h4 style={styles.diagramHeader}>Progression Path</h4>
              
              <div style={styles.diagramFlow}>
                <div style={styles.diagramNode}>
                  <div style={{ ...styles.diagramDot, background: 'var(--primary)' }}>S</div>
                  <span style={styles.diagramNodeLabel}>School</span>
                </div>
                <div style={styles.diagramConnector} />
                <div style={styles.diagramNode}>
                  <div style={styles.diagramDot}>D</div>
                  <span style={styles.diagramNodeLabel}>District</span>
                </div>
                <div style={styles.diagramConnector} />
                <div style={styles.diagramNode}>
                  <div style={styles.diagramDot}>St</div>
                  <span style={styles.diagramNodeLabel}>State</span>
                </div>
              </div>
            </div>

            <div style={styles.summaryDivider} />

            <div style={styles.summaryTotal}>
              <span>Final Charge</span>
              <span style={{ color: 'var(--accent)' }}>₹{feeAmount}</span>
            </div>
          </div>

          <div style={styles.invoiceFooter}>
            <ShieldCheck size={16} color="var(--success)" />
            <span>Secured 256-bit SSL transaction</span>
          </div>
        </div>
      </main>

      {/* Payment Overlay Modal */}
      {showCheckout && (
        <div className="modal-overlay">
          <div className="modal-content" style={styles.checkoutModal}>
            
            {paymentStep === 'input' && (
              <>
                <div style={styles.modalHeader}>
                  <CreditCard size={28} color="var(--primary)" />
                  <div>
                    <h3 style={styles.modalTitle}>Gateway Simulator</h3>
                    <p style={styles.modalSubtitle}>Technik Olympiad Payment Sandbox</p>
                  </div>
                </div>

                <div style={styles.checkoutDetailsSummary}>
                  <span>Paying for: <strong>{formData.track}</strong></span>
                  <span style={styles.checkoutAmt}>₹{feeAmount}</span>
                </div>

                <form onSubmit={handlePaymentSubmit} style={styles.checkoutForm}>
                  <div className="form-group">
                    <label className="form-label">Card Number</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="4111 2222 3333 4444"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value.replace(/[^0-9 ]/g, '').substring(0, 19))}
                      required 
                    />
                  </div>

                  <div style={styles.checkoutFormRow}>
                    <div className="form-group" style={{ flex: 1 }}>
                      <label className="form-label">Expiry Date</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="MM/YY" 
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value.replace(/[^0-9/]/g, '').substring(0, 5))}
                        required
                      />
                    </div>
                    <div className="form-group" style={{ flex: 1 }}>
                      <label className="form-label">CVV</label>
                      <input 
                        type="password" 
                        className="form-control" 
                        placeholder="123" 
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value.replace(/[^0-9]/g, '').substring(0, 3))}
                        required
                      />
                    </div>
                  </div>

                  <div style={styles.checkoutActions}>
                    <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                      Pay ₹{feeAmount}
                    </button>
                    <button type="button" onClick={() => setShowCheckout(false)} className="btn btn-ghost">
                      Cancel
                    </button>
                  </div>
                </form>
              </>
            )}

            {paymentStep === 'processing' && (
              <div style={styles.processingWrapper}>
                <Loader2 size={48} className="pulse-glowing" style={styles.spinner} />
                <h3 style={styles.processingTitle}>Authorizing Transaction...</h3>
                <p style={styles.processingDesc}>Contacting mock banking networks. Please do not close this window.</p>
              </div>
            )}

            {paymentStep === 'success' && (
              <div style={styles.successWrapper}>
                <div style={styles.successIconOuter}>
                  <CheckCircle size={44} color="white" />
                </div>
                <h3 style={styles.successTitle}>Payment Successful!</h3>
                <p style={styles.successDesc}>
                  Congratulations! Student **{formData.name}** is registered. Your study materials are unlocked.
                </p>
                <button onClick={handleGoToDashboard} className="btn btn-primary" style={styles.successBtn}>
                  Go to Student Dashboard
                  <ArrowRight size={16} />
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    padding: '3rem 0',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3.5rem',
  },
  title: {
    fontSize: '2.75rem',
    marginBottom: '0.75rem',
  },
  subtitle: {
    color: 'var(--text-secondary)',
    maxWidth: '620px',
    margin: '0 auto',
    fontSize: '1.05rem',
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '2rem',
    alignItems: 'start',
  },
  formCard: {
    padding: '2.5rem',
    border: '1px solid var(--border-subtle)',
  },
  cardHeader: {
    fontSize: '1.4rem',
    marginBottom: '1.5rem',
    fontFamily: 'var(--font-heading)',
    fontWeight: 600,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formRow: {
    display: 'flex',
    gap: '1rem',
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  inputIcon: {
    position: 'absolute',
    left: '1rem',
    color: 'var(--text-muted)',
  },
  controlWithIcon: {
    paddingLeft: '2.5rem',
    width: '100%',
  },
  regOptions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  regLabel: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    border: '1px solid',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
    gap: '1rem',
  },
  radioInput: {
    accentColor: 'var(--primary)',
    width: '18px',
    height: '18px',
  },
  regTitle: {
    display: 'block',
    fontSize: '0.95rem',
    fontWeight: 600,
    color: 'var(--text-primary)',
  },
  regSubtitle: {
    display: 'block',
    fontSize: '0.75rem',
    color: 'var(--text-secondary)',
  },
  regPrice: {
    marginLeft: 'auto',
    fontSize: '1.2rem',
    fontWeight: 800,
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-heading)',
  },
  feeDisplayCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '12px',
    padding: '1rem 1.25rem',
    margin: '1.5rem 0',
  },
  feeDisplayVal: {
    fontSize: '1.5rem',
    fontWeight: 800,
    color: 'var(--accent)',
    fontFamily: 'var(--font-heading)',
  },
  submitBtn: {
    padding: '0.9rem',
    width: '100%',
  },
  summaryCard: {
    padding: '2.5rem',
    border: '1px solid var(--border-subtle)',
    position: 'sticky',
    top: '100px',
  },
  summaryBadgeWrapper: {
    marginBottom: '1rem',
  },
  summaryDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.9rem',
  },
  summaryLabel: {
    color: 'var(--text-secondary)',
  },
  summaryValue: {
    fontWeight: 600,
    textAlign: 'right',
  },
  summaryDivider: {
    height: '1px',
    background: 'var(--border-subtle)',
    margin: '0.5rem 0',
  },
  diagramContainer: {
    margin: '0.5rem 0',
  },
  diagramHeader: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: '1rem',
    letterSpacing: '0.05em',
  },
  diagramFlow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 0.5rem',
  },
  diagramNode: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.35rem',
  },
  diagramDot: {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid var(--border-subtle)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 700,
    color: 'var(--text-secondary)',
  },
  diagramNodeLabel: {
    fontSize: '0.65rem',
    color: 'var(--text-muted)',
    fontWeight: 600,
  },
  diagramConnector: {
    flexGrow: 1,
    height: '2px',
    background: 'rgba(255,255,255,0.05)',
    margin: '0 0.5rem',
    marginTop: '-12px',
  },
  summaryTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.25rem',
    fontWeight: 800,
    fontFamily: 'var(--font-heading)',
  },
  invoiceFooter: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    justifyContent: 'center',
    marginTop: '2rem',
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
  },
  checkoutModal: {
    maxWidth: '460px',
    width: '90%',
    padding: '2rem',
  },
  modalHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    borderBottom: '1px solid var(--border-subtle)',
    paddingBottom: '1.25rem',
    marginBottom: '1.5rem',
  },
  modalTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
  },
  modalSubtitle: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
  },
  checkoutDetailsSummary: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(255,255,255,0.02)',
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: '1px solid var(--border-subtle)',
    fontSize: '0.85rem',
    marginBottom: '1.5rem',
  },
  checkoutAmt: {
    fontWeight: 800,
    color: 'var(--accent)',
    fontSize: '1.1rem',
  },
  checkoutForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  checkoutFormRow: {
    display: 'flex',
    gap: '1rem',
  },
  checkoutActions: {
    display: 'flex',
    gap: '0.75rem',
    marginTop: '1.5rem',
  },
  processingWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '3rem 0',
  },
  spinner: {
    color: 'var(--primary)',
    animation: 'spin 1.5s linear infinite',
    marginBottom: '1.5rem',
  },
  processingTitle: {
    fontSize: '1.25rem',
    marginBottom: '0.5rem',
  },
  processingDesc: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    maxWidth: '300px',
  },
  successWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem 0',
  },
  successIconOuter: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: 'var(--success)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    boxShadow: '0 0 20px var(--success-glow)',
  },
  successTitle: {
    fontSize: '1.5rem',
    marginBottom: '0.75rem',
  },
  successDesc: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
    marginBottom: '2rem',
    maxWidth: '340px',
  },
  successBtn: {
    width: '100%',
    padding: '0.85rem',
  }
};

// Add CSS keyframes for rotation spinner and responsive registration grid
const styleSheet = document.createElement("style");
styleSheet.innerText += `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @media (min-width: 1024px) {
    .register-main-grid {
      grid-template-columns: 1.5fr 1fr !important;
      column-gap: 3.5rem !important;
    }
  }
  @media (max-width: 768px) {
    .register-form-row {
      flex-direction: column !important;
    }
  }
`;
document.head.appendChild(styleSheet);
