import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import ComingSoon from './ComingSoon';
import { registerSchoolApi } from '../services/api';
import { 
  Building2, 
  User, 
  FileText, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Sparkles, 
  GraduationCap, 
  Loader2, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export default function Register({ onRegisterSuccess, clearSelectedTrack }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Read URL query parameter for active portal level (e.g., /register?level=student or /register?level=school)
  const queryParams = new URLSearchParams(location.search);
  const initialLevel = queryParams.get('level') === 'student' ? 'student' : 'school';
  
  const [activeLevel, setActiveLevel] = useState(initialLevel); // 'school' | 'student'

  useEffect(() => {
    const level = new URLSearchParams(location.search).get('level');
    if (level === 'student' || level === 'school') {
      setActiveLevel(level);
    }
  }, [location.search]);

  // ==========================================
  // SCHOOL REGISTRATION FORM STATE
  // ==========================================
  const [schoolDetails, setSchoolDetails] = useState({
    schoolName: '',
    board: '',
    state: '',
    district: '',
    city: '',
    address: '',
    email: '',
    mobile: '',
    principalName: ''
  });

  const [coordinatorDetails, setCoordinatorDetails] = useState({
    name: '',
    designation: '',
    mobile: '',
    email: ''
  });

  const [declarationConfirmed, setDeclarationConfirmed] = useState(false);
  const [declarationError, setDeclarationError] = useState(false);
  const declarationRef = useRef(null);

  // Auto-Fill Demo Data Helper
  const handleFillDemoData = () => {
    setSchoolDetails({
      schoolName: "St. Xavier's International School",
      board: 'CBSE',
      state: 'Andhra Pradesh',
      district: 'NTR District',
      city: 'Vijayawada',
      address: 'Plot 42, Executive Campus, Ring Road, Vijayawada - 520008',
      email: 'principal@stxaviers.edu.in',
      mobile: '+91 98765 43210',
      principalName: 'Dr. Ramesh Verma'
    });

    setCoordinatorDetails({
      name: 'Mrs. Anitha Sharma',
      designation: 'STEM & Science HOD',
      mobile: '+91 95004 28800',
      email: 'stem.coordinator@stxaviers.edu.in'
    });

    setDeclarationConfirmed(true);
    setDeclarationError(false);
  };

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(true);
  const [registrationId, setRegistrationId] = useState('');

  // Submit School Registration Form
  const handleSchoolRegisterSubmit = (e) => {
    e.preventDefault();

    if (!schoolDetails.schoolName || !schoolDetails.email || !schoolDetails.mobile) {
      alert("Please fill in all required School Details.");
      return;
    }
    if (!coordinatorDetails.name || !coordinatorDetails.mobile || !coordinatorDetails.email) {
      alert("Please fill in all required Coordinator Details.");
      return;
    }
    if (!declarationConfirmed) {
      setDeclarationError(true);
      if (declarationRef.current) {
        declarationRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setDeclarationError(false);
    setIsProcessing(true);
    setShowModal(true);

    registerSchoolApi({
      schoolDetails,
      coordinatorDetails
    }).then((res) => {
      const regId = res?.school?.id || res?.student?.id || ('SCH-' + Math.floor(100000 + Math.random() * 900000));
      setRegistrationId(regId);
      setIsProcessing(false);

      if (onRegisterSuccess) {
        onRegisterSuccess({
          id: regId,
          schoolName: schoolDetails.schoolName,
          email: schoolDetails.email,
          phone: schoolDetails.mobile,
          address: schoolDetails.address,
          date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
        });
      }
      if (clearSelectedTrack) clearSelectedTrack();
    });
  };

  const handleFinishModal = () => {
    setShowModal(false);
    navigate('/login?registered=true', { 
      state: { 
        email: schoolDetails.email, 
        schoolName: schoolDetails.schoolName,
        id: registrationId
      } 
    });
  };

  return (
    <div style={styles.pageContainer}>
      
      {/* Top Banner & Level Switcher Header */}
      <div style={styles.topBarSection}>
        <div style={styles.levelSwitcherContainer}>
          <button
            type="button"
            onClick={() => setActiveLevel('school')}
            style={{
              ...styles.levelTab,
              ...(activeLevel === 'school' ? styles.levelTabActiveSchool : {})
            }}
          >
            <Building2 size={18} />
            <span>School Portal Registration</span>
            {activeLevel === 'school' && <span style={styles.activeDotSchool} />}
          </button>

          <button
            type="button"
            onClick={() => setActiveLevel('student')}
            style={{
              ...styles.levelTab,
              ...(activeLevel === 'student' ? styles.levelTabActiveStudent : {})
            }}
          >
            <GraduationCap size={18} />
            <span>Student Portal Registration</span>
            <span style={styles.comingSoonPill}>Coming Soon</span>
          </button>
        </div>
      </div>

      {activeLevel === 'school' ? (
        /* ======================================================== */
        /* SCHOOL REGISTRATION FLOW                                 */
        /* ======================================================== */
        <>
          {/* Step Indicator Bar (1, 2, 3) */}
          <div style={styles.stepBarWrapper}>
            <div style={styles.stepBarContainer}>
              <div style={styles.stepItemActive}>
                <div style={styles.stepNumberActive}>1</div>
                <div style={styles.stepTextGroup}>
                  <div style={styles.stepTitleActive}>School Details</div>
                  <div style={styles.stepSub}>Tell us about your school</div>
                </div>
              </div>
              <div style={styles.stepDivider} />

              <div style={styles.stepItem}>
                <div style={styles.stepNumber}>2</div>
                <div style={styles.stepTextGroup}>
                  <div style={styles.stepTitle}>Coordinator Details</div>
                  <div style={styles.stepSub}>Add contact person</div>
                </div>
              </div>
              <div style={styles.stepDivider} />

              <div style={styles.stepItem}>
                <div style={styles.stepNumber}>3</div>
                <div style={styles.stepTextGroup}>
                  <div style={styles.stepTitle}>Review & Submit</div>
                  <div style={styles.stepSub}>Confirm and submit</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Form Body */}
          <main style={styles.formMainContainer}>
            <form onSubmit={handleSchoolRegisterSubmit} style={styles.formStack}>

              {/* CARD 1: SCHOOL DETAILS */}
              <div style={styles.cardBox}>
                <div style={styles.cardSectionHeader}>
                  <div style={styles.sectionIconSquare}>
                    <Building2 size={22} color="#0284c7" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h2 style={styles.cardTitle}>School Details</h2>
                    <p style={styles.cardSub}>Provide your school information</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleFillDemoData}
                    style={styles.demoFillBtn}
                    title="Auto-fill sample school & coordinator details"
                  >
                    <Sparkles size={14} color="#ea580c" /> Auto-Fill Demo Details
                  </button>
                </div>

                <div style={styles.formGrid3}>
                  <div style={{ ...styles.fieldGroup, gridColumn: 'span 2' }}>
                    <label style={styles.label}>School Name <span style={styles.req}>*</span></label>
                    <input
                      type="text"
                      style={styles.input}
                      placeholder="Enter school name"
                      value={schoolDetails.schoolName}
                      onChange={(e) => setSchoolDetails({ ...schoolDetails, schoolName: e.target.value })}
                      required
                    />
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>Board <span style={styles.req}>*</span></label>
                    <select
                      style={styles.select}
                      value={schoolDetails.board}
                      onChange={(e) => setSchoolDetails({ ...schoolDetails, board: e.target.value })}
                      required
                    >
                      <option value="">Select Board</option>
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                      <option value="State Board">State Board</option>
                      <option value="IB">IB</option>
                      <option value="IGCSE">IGCSE</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>State <span style={styles.req}>*</span></label>
                    <select
                      style={styles.select}
                      value={schoolDetails.state}
                      onChange={(e) => setSchoolDetails({ ...schoolDetails, state: e.target.value })}
                      required
                    >
                      <option value="">Select State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>District <span style={styles.req}>*</span></label>
                    <select
                      style={styles.select}
                      value={schoolDetails.district}
                      onChange={(e) => setSchoolDetails({ ...schoolDetails, district: e.target.value })}
                      required
                    >
                      <option value="">Select District</option>
                      <option value="Krishna / Vijayawada">Krishna / Vijayawada</option>
                      <option value="NTR District">NTR District</option>
                      <option value="Visakhapatnam">Visakhapatnam</option>
                      <option value="Guntur">Guntur</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Mumbai City">Mumbai City</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Bengaluru Urban">Bengaluru Urban</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>City <span style={styles.req}>*</span></label>
                    <input
                      type="text"
                      style={styles.input}
                      placeholder="Enter city"
                      value={schoolDetails.city}
                      onChange={(e) => setSchoolDetails({ ...schoolDetails, city: e.target.value })}
                      required
                    />
                  </div>

                  <div style={{ ...styles.fieldGroup, gridColumn: '1 / -1' }}>
                    <label style={styles.label}>School Address <span style={styles.req}>*</span></label>
                    <input
                      type="text"
                      style={styles.input}
                      placeholder="Enter complete address (Street, Landmark, Pincode)"
                      value={schoolDetails.address}
                      onChange={(e) => setSchoolDetails({ ...schoolDetails, address: e.target.value })}
                      required
                    />
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>School Email <span style={styles.req}>*</span></label>
                    <input
                      type="email"
                      style={styles.input}
                      placeholder="Enter school email"
                      value={schoolDetails.email}
                      onChange={(e) => setSchoolDetails({ ...schoolDetails, email: e.target.value })}
                      required
                    />
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>School Mobile <span style={styles.req}>*</span></label>
                    <input
                      type="tel"
                      style={styles.input}
                      placeholder="Enter school mobile number"
                      value={schoolDetails.mobile}
                      onChange={(e) => setSchoolDetails({ ...schoolDetails, mobile: e.target.value })}
                      required
                    />
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>Principal Name <span style={styles.req}>*</span></label>
                    <input
                      type="text"
                      style={styles.input}
                      placeholder="Enter principal name"
                      value={schoolDetails.principalName}
                      onChange={(e) => setSchoolDetails({ ...schoolDetails, principalName: e.target.value })}
                      required
                    />
                  </div>
                </div>

              </div>

              {/* CARD 2: COORDINATOR DETAILS */}
              <div style={styles.cardBox}>
                <div style={styles.cardSectionHeader}>
                  <div style={styles.sectionIconSquare}>
                    <User size={22} color="#0284c7" />
                  </div>
                  <div>
                    <h2 style={styles.cardTitle}>Coordinator Details</h2>
                    <p style={styles.cardSub}>Provide the details of the person coordinating this nomination</p>
                  </div>
                </div>

                <div style={styles.formGrid2}>
                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>Coordinator Name <span style={styles.req}>*</span></label>
                    <input
                      type="text"
                      style={styles.input}
                      placeholder="Enter coordinator name"
                      value={coordinatorDetails.name}
                      onChange={(e) => setCoordinatorDetails({ ...coordinatorDetails, name: e.target.value })}
                      required
                    />
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>Designation <span style={styles.req}>*</span></label>
                    <input
                      type="text"
                      style={styles.input}
                      placeholder="Enter designation (e.g. Science HOD, STEM Coordinator)"
                      value={coordinatorDetails.designation}
                      onChange={(e) => setCoordinatorDetails({ ...coordinatorDetails, designation: e.target.value })}
                      required
                    />
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>Mobile Number <span style={styles.req}>*</span></label>
                    <input
                      type="tel"
                      style={styles.input}
                      placeholder="Enter mobile number"
                      value={coordinatorDetails.mobile}
                      onChange={(e) => setCoordinatorDetails({ ...coordinatorDetails, mobile: e.target.value })}
                      required
                    />
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>Email ID <span style={styles.req}>*</span></label>
                    <input
                      type="email"
                      style={styles.input}
                      placeholder="Enter email address"
                      value={coordinatorDetails.email}
                      onChange={(e) => setCoordinatorDetails({ ...coordinatorDetails, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* CARD 3: DECLARATION */}
              <div 
                ref={declarationRef}
                style={{
                  ...styles.cardBox,
                  ...(declarationError ? styles.cardBoxError : {})
                }}
              >
                <div style={styles.cardSectionHeader}>
                  <div style={{
                    ...styles.sectionIconSquare,
                    background: declarationError ? '#fee2e2' : '#e0f2fe'
                  }}>
                    <FileText size={22} color={declarationError ? '#dc2626' : '#0284c7'} />
                  </div>
                  <div>
                    <h2 style={{
                      ...styles.cardTitle,
                      color: declarationError ? '#dc2626' : '#0b1d3a'
                    }}>Declaration</h2>
                  </div>
                </div>

                {declarationError && (
                  <div style={styles.declarationErrorAlert} className="shake-error-alert">
                    <AlertCircle size={18} color="#dc2626" style={{ flexShrink: 0 }} />
                    <span>
                      <strong>Confirmation Required:</strong> Please check the declaration box below to confirm that all information provided is true and correct before submitting.
                    </span>
                  </div>
                )}

                <div style={styles.declarationCheckRow}>
                  <input
                    type="checkbox"
                    id="declaration-chk"
                    checked={declarationConfirmed}
                    onChange={(e) => {
                      setDeclarationConfirmed(e.target.checked);
                      if (e.target.checked) setDeclarationError(false);
                    }}
                    style={{
                      ...styles.checkbox,
                      ...(declarationError ? styles.checkboxError : {})
                    }}
                  />
                  <label htmlFor="declaration-chk" style={{
                    ...styles.declarationText,
                    color: declarationError ? '#dc2626' : '#334155',
                    fontWeight: declarationError ? 600 : 400
                  }}>
                    We hereby confirm that the information provided is true and correct. We have obtained the consent from the school administration to register for the Technik Olympiad.
                  </label>
                </div>
              </div>

              {/* FOOTER ACTIONS BAR */}
              <div style={styles.actionsBar}>
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  style={styles.backBtn}
                >
                  <ArrowLeft size={16} /> Back
                </button>

                <button
                  type="submit"
                  style={styles.reviewSubmitBtn}
                >
                  Review & Submit <ArrowRight size={18} />
                </button>
              </div>

            </form>
          </main>
        </>
      ) : (
        <main style={{ width: '100%', margin: 0, padding: 0 }}>
          <ComingSoon title="Student Portal" forceRegisterTheme={true} />
        </main>
      )}

      {/* CONFIRMATION / SUCCESS MODAL */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalCard}>
            {isProcessing ? (
              <div style={styles.modalContentCenter}>
                <Loader2 size={48} color="#0284c7" className="spin-slow" style={{ marginBottom: '1rem' }} />
                <h3 style={styles.modalTitle}>Submitting Registration...</h3>
                <p style={styles.modalDesc}>Connecting to Technik Olympiad server. Please wait.</p>
              </div>
            ) : (
              <div style={styles.modalContentCenter}>
                <div style={styles.successIconCircle}>
                  <CheckCircle size={40} color="#ffffff" />
                </div>
                <h3 style={styles.modalTitle}>Registration Submitted Successfully!</h3>
                <p style={styles.modalDesc}>
                  Your registration reference number is <strong>{registrationId}</strong>. Access instructions have been sent to your registered email.
                </p>
                <button onClick={handleFinishModal} style={styles.modalActionBtn}>
                  Set Up MFA Security <ArrowRight size={16} />
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
  pageContainer: {
    background: '#f8fafc',
    minHeight: '100vh',
    paddingBottom: '5rem',
    boxSizing: 'border-box',
  },

  /* Top Bar Section */
  topBarSection: {
    background: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    padding: '1.25rem 0',
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
  levelSwitcherContainer: {
    display: 'inline-flex',
    background: '#f1f5f9',
    padding: '0.35rem',
    borderRadius: '16px',
    border: '1px solid #cbd5e1',
    gap: '0.5rem',
  },
  levelTab: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    padding: '0.65rem 1.4rem',
    borderRadius: '12px',
    border: 'none',
    background: 'transparent',
    color: '#64748b',
    fontFamily: 'var(--font-heading)',
    fontWeight: 600,
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  levelTabActiveSchool: {
    background: '#041026',
    color: '#ffffff',
    boxShadow: '0 4px 14px rgba(4, 16, 38, 0.25)',
  },
  levelTabActiveStudent: {
    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    color: '#ffffff',
    boxShadow: '0 4px 14px rgba(249, 115, 22, 0.3)',
  },
  activeDotSchool: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#38bdf8',
  },
  comingSoonPill: {
    fontSize: '0.65rem',
    fontWeight: 800,
    textTransform: 'uppercase',
    background: '#fef3c7',
    color: '#b45309',
    padding: '0.15rem 0.45rem',
    borderRadius: '20px',
    letterSpacing: '0.04em',
    marginLeft: '0.2rem',
  },

  /* Step Indicator Bar */
  stepBarWrapper: {
    background: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    padding: '1.25rem 1.5rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
    boxSizing: 'border-box',
  },
  stepBarContainer: {
    maxWidth: '960px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
  },
  stepItemActive: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flex: 1,
  },
  stepItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flex: 1,
    opacity: 0.6,
  },
  stepNumberActive: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    background: '#041026',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(4, 16, 38, 0.25)',
    flexShrink: 0,
  },
  stepNumber: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    background: '#94a3b8',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  stepTextGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  stepTitleActive: {
    fontSize: '0.92rem',
    fontWeight: 700,
    color: '#0f172a',
    fontFamily: 'var(--font-heading)',
  },
  stepTitle: {
    fontSize: '0.92rem',
    fontWeight: 600,
    color: '#475569',
    fontFamily: 'var(--font-heading)',
  },
  stepSub: {
    fontSize: '0.75rem',
    color: '#64748b',
  },
  stepDivider: {
    width: '1px',
    height: '30px',
    background: '#cbd5e1',
  },

  /* Form Container */
  formMainContainer: {
    maxWidth: '1000px',
    margin: '2rem auto 0 auto',
    padding: '0 1.5rem',
    boxSizing: 'border-box',
  },
  formStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.75rem',
  },
  cardBox: {
    background: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    padding: '2rem',
    boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
  },
  cardBoxError: {
    border: '2px solid #ef4444',
    boxShadow: '0 0 20px rgba(239, 68, 68, 0.18)',
    background: '#fff8f8',
  },
  cardSectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
    paddingBottom: '0.85rem',
    borderBottom: '1px solid #f1f5f9',
  },
  sectionIconSquare: {
    width: '44px',
    height: '44px',
    minWidth: '44px',
    minHeight: '44px',
    borderRadius: '10px',
    background: '#e0f2fe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 800,
    color: '#0b1d3a',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.15rem',
  },
  cardSub: {
    fontSize: '0.82rem',
    color: '#64748b',
  },
  demoFillBtn: {
    background: '#fff7ed',
    border: '1px solid #fed7aa',
    color: '#c2410c',
    padding: '0.45rem 0.95rem',
    borderRadius: '8px',
    fontSize: '0.8rem',
    fontWeight: 700,
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 6px rgba(234, 88, 12, 0.08)',
  },

  /* Form Grids */
  formGrid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.25rem',
  },
  formGrid2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.25rem',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.45rem',
    width: '100%',
    boxSizing: 'border-box',
  },
  label: {
    fontSize: '0.84rem',
    fontWeight: 700,
    color: '#1e293b',
    fontFamily: 'var(--font-heading)',
  },
  req: {
    color: '#ef4444',
  },
  input: {
    width: '100%',
    height: '42px',
    padding: '0.65rem 0.85rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '0.88rem',
    color: '#0f172a',
    outline: 'none',
    background: '#ffffff',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    transition: 'all 0.2s ease',
  },
  select: {
    width: '100%',
    height: '42px',
    padding: '0.65rem 0.85rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '0.88rem',
    color: '#0f172a',
    outline: 'none',
    background: '#ffffff',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    transition: 'all 0.2s ease',
  },

  /* Declaration Section */
  declarationErrorAlert: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    background: '#fef2f2',
    border: '1px solid #fca5a5',
    color: '#991b1b',
    padding: '0.85rem 1rem',
    borderRadius: '8px',
    fontSize: '0.85rem',
    lineHeight: '1.45',
    marginBottom: '1rem',
    fontFamily: 'var(--font-heading)',
  },
  declarationCheckRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
    padding: '0.85rem 1rem',
    background: '#f8fafc',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
  },
  checkbox: {
    width: '20px',
    height: '20px',
    minWidth: '20px',
    minHeight: '20px',
    accentColor: '#041026',
    cursor: 'pointer',
    flexShrink: 0,
  },
  checkboxError: {
    outline: '3px solid #ef4444',
    outlineOffset: '2px',
    borderRadius: '3px',
  },
  declarationText: {
    fontSize: '0.88rem',
    color: '#334155',
    lineHeight: '1.5',
    cursor: 'pointer',
  },

  /* Actions Bar */
  actionsBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1rem',
  },
  backBtn: {
    background: '#ffffff',
    border: '1px solid #cbd5e1',
    padding: '0.75rem 1.75rem',
    borderRadius: '8px',
    color: '#0f172a',
    fontWeight: 700,
    fontSize: '0.9rem',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  reviewSubmitBtn: {
    background: '#041026',
    border: 'none',
    padding: '0.85rem 2.25rem',
    borderRadius: '8px',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '0.95rem',
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.65rem',
    boxShadow: '0 6px 20px rgba(4, 16, 38, 0.25)',
  },

  /* Modal */
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(15, 23, 42, 0.75)',
    backdropFilter: 'blur(6px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '1.5rem',
  },
  modalCard: {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '3rem 2.5rem',
    maxWidth: '480px',
    width: '100%',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)',
  },
  modalContentCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  successIconCircle: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: '#10b981',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.25rem',
    boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
  },
  modalTitle: {
    fontSize: '1.35rem',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '0.5rem',
    fontFamily: 'var(--font-heading)',
  },
  modalDesc: {
    fontSize: '0.9rem',
    color: '#475569',
    lineHeight: '1.5',
    marginBottom: '2rem',
  },
  modalActionBtn: {
    width: '100%',
    padding: '0.85rem',
    borderRadius: '10px',
    background: '#041026',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '0.9rem',
    fontFamily: 'var(--font-heading)',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  }
};

// Add CSS keyframe animation for shake-error-alert and responsive form grid
if (typeof document !== 'undefined') {
  let styleSheet = document.getElementById('register-error-styles');
  if (!styleSheet) {
    styleSheet = document.createElement("style");
    styleSheet.id = 'register-error-styles';
    document.head.appendChild(styleSheet);
  }
  styleSheet.innerText = `
    @keyframes errorShake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-6px); }
      40%, 80% { transform: translateX(6px); }
    }
    .shake-error-alert {
      animation: errorShake 0.45s ease-in-out;
    }
    @media (max-width: 768px) {
      div[style*="gridTemplateColumns"] {
        grid-template-columns: 1fr !important;
      }
    }
  `;
}
