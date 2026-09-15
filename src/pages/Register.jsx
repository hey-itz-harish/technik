import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { registerSchoolApi } from '../services/api';
import { 
  Building2, 
  User, 
  FileText, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle,
  Check,
  Sparkles, 
  Loader2, 
  AlertCircle,
  Eye,
  EyeOff
} from 'lucide-react';

export default function Register({ onRegisterSuccess, clearSelectedTrack }) {
  const navigate = useNavigate();

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

  // Account Credentials
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [declarationConfirmed, setDeclarationConfirmed] = useState(false);
  const [declarationError, setDeclarationError] = useState(false);
  const declarationRef = useRef(null);

  // Dynamic Step Completion Calculation for interactive checkmarks
  const isStep1Complete = Boolean(
    schoolDetails.schoolName.trim() &&
    schoolDetails.board &&
    schoolDetails.state.trim() &&
    schoolDetails.district.trim() &&
    schoolDetails.city.trim() &&
    schoolDetails.address.trim() &&
    schoolDetails.email.trim() &&
    schoolDetails.mobile.trim() &&
    schoolDetails.principalName.trim() &&
    password &&
    confirmPassword &&
    password === confirmPassword
  );

  const isStep2Complete = Boolean(
    coordinatorDetails.name.trim() &&
    coordinatorDetails.designation.trim() &&
    coordinatorDetails.mobile.trim() &&
    coordinatorDetails.email.trim()
  );

  const isStep3Complete = Boolean(declarationConfirmed);

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
      mobile: '+91 95004 28800',
      principalName: 'Dr. Ramesh Verma'
    });

    setCoordinatorDetails({
      name: 'Mrs. Anitha Sharma',
      designation: 'STEM & Science HOD',
      mobile: '+91 95004 28800',
      email: 'stem.coordinator@stxaviers.edu.in'
    });

    setPassword('Technik@2026');
    setConfirmPassword('Technik@2026');

    setDeclarationConfirmed(true);
    setDeclarationError(false);
    setFieldErrors({});
  };

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(true);

  // Error Popup State
  const [errorMessage, setErrorMessage] = useState('');

  // Field-level Validation Errors State
  const [fieldErrors, setFieldErrors] = useState({});

  const clearFieldError = (key) => {
    setFieldErrors(prev => {
      if (!prev[key]) return prev;
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  const validateSchoolForm = () => {
    const errs = {};

    // School Details
    if (!schoolDetails.schoolName.trim()) errs.schoolName = "This field cannot be left empty";
    if (!schoolDetails.board) errs.board = "This field cannot be left empty";
    if (!schoolDetails.state) errs.state = "This field cannot be left empty";
    if (!schoolDetails.district) errs.district = "This field cannot be left empty";
    if (!schoolDetails.city.trim()) errs.city = "This field cannot be left empty";
    if (!schoolDetails.address.trim()) errs.address = "This field cannot be left empty";
    if (!schoolDetails.email.trim()) {
      errs.schoolEmail = "This field cannot be left empty";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(schoolDetails.email.trim())) {
      errs.schoolEmail = "Please enter a valid email address";
    }
    if (!schoolDetails.mobile.trim()) errs.schoolMobile = "This field cannot be left empty";
    if (!schoolDetails.principalName.trim()) errs.principalName = "This field cannot be left empty";

    // Passwords
    if (!password) {
      errs.password = "This field cannot be left empty";
    } else if (password.length < 6) {
      errs.password = "Password must be at least 6 characters long";
    }
    if (!confirmPassword) {
      errs.confirmPassword = "This field cannot be left empty";
    } else if (confirmPassword !== password) {
      errs.confirmPassword = "Passwords do not match";
    }

    // Coordinator Details
    if (!coordinatorDetails.name.trim()) errs.coordName = "This field cannot be left empty";
    if (!coordinatorDetails.designation.trim()) errs.coordDesignation = "This field cannot be left empty";
    if (!coordinatorDetails.mobile.trim()) errs.coordMobile = "This field cannot be left empty";
    if (!coordinatorDetails.email.trim()) {
      errs.coordEmail = "This field cannot be left empty";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(coordinatorDetails.email.trim())) {
      errs.coordEmail = "Please enter a valid email address";
    }

    // Declaration
    if (!declarationConfirmed) {
      errs.declaration = "Please accept the declaration to proceed";
      setDeclarationError(true);
      if (declarationRef.current) {
        declarationRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      setDeclarationError(false);
    }

    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Submit School Registration Form
  const handleSchoolRegisterSubmit = async (e) => {
    e.preventDefault();

    if (!validateSchoolForm()) {
      return;
    }

    setDeclarationError(false);
    setErrorMessage('');
    setIsProcessing(true);
    setShowModal(true);

    try {
      await registerSchoolApi({ schoolDetails, coordinatorDetails, password });
      setIsProcessing(false);

      if (onRegisterSuccess) {
        // A local-only id for the client-side registrations list — the
        // backend no longer echoes an id back at this pending-activation stage.
        const localRegId = 'SCH-' + Math.floor(100000 + Math.random() * 900000);
        onRegisterSuccess({
          id: localRegId,
          schoolName: schoolDetails.schoolName,
          email: schoolDetails.email,
          phone: schoolDetails.mobile,
          address: schoolDetails.address,
          date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
        });
      }
      if (clearSelectedTrack) clearSelectedTrack();
    } catch (err) {
      setShowModal(false);
      setIsProcessing(true);
      setErrorMessage(err.message || 'Registration failed. Please try again.');
    }
  };

  const handleFinishModal = () => {
    setShowModal(false);
    navigate('/activation-pending', {
      state: {
        email: schoolDetails.email,
        schoolName: schoolDetails.schoolName
      }
    });
  };

  return (
    <div style={styles.pageContainer}>
      
      {/* Top Banner Header */}
      <div style={styles.topBarSection}>
        <div style={styles.levelSwitcherContainer}>
          <div
            style={{
              ...styles.levelTab,
              ...styles.levelTabActiveSchool,
              cursor: 'default'
            }}
          >
            <Building2 size={18} />
            <span>School & Coordinator Registration</span>
            <span style={styles.activeDotSchool} />
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SCHOOL REGISTRATION FLOW                                 */}
      {/* ======================================================== */}
      <>
          {/* Step Indicator Bar (1, 2, 3) */}
          <div style={styles.stepBarWrapper}>
            <div style={styles.stepBarContainer} className="register-step-container">
              {/* Step 1: School Details */}
              <div style={isStep1Complete ? styles.stepItemComplete : styles.stepItemActive}>
                <div 
                  style={isStep1Complete ? styles.stepNumberCompleted : styles.stepNumberActive}
                  className={isStep1Complete ? "step-check-anim" : ""}
                >
                  {isStep1Complete ? <Check size={18} strokeWidth={3} /> : '1'}
                </div>
                <div style={styles.stepTextGroup}>
                  <div style={isStep1Complete ? styles.stepTitleComplete : styles.stepTitleActive}>
                    School Details
                    {isStep1Complete && <span style={styles.stepCompletedPill}>Completed</span>}
                  </div>
                  <div style={styles.stepSub} className="register-step-sub">Tell us about your school</div>
                </div>
              </div>

              <div 
                style={{
                  ...styles.stepDivider,
                  ...(isStep1Complete ? styles.stepDividerActive : {})
                }} 
                className="register-step-divider" 
              />

              {/* Step 2: Coordinator Details */}
              <div style={isStep2Complete ? styles.stepItemComplete : (isStep1Complete ? styles.stepItemActive : styles.stepItem)}>
                <div 
                  style={isStep2Complete ? styles.stepNumberCompleted : (isStep1Complete ? styles.stepNumberActive : styles.stepNumber)}
                  className={isStep2Complete ? "step-check-anim" : ""}
                >
                  {isStep2Complete ? <Check size={18} strokeWidth={3} /> : '2'}
                </div>
                <div style={styles.stepTextGroup}>
                  <div style={isStep2Complete ? styles.stepTitleComplete : (isStep1Complete ? styles.stepTitleActive : styles.stepTitle)}>
                    Coordinator Details
                    {isStep2Complete && <span style={styles.stepCompletedPill}>Completed</span>}
                  </div>
                  <div style={styles.stepSub} className="register-step-sub">Add contact person</div>
                </div>
              </div>

              <div 
                style={{
                  ...styles.stepDivider,
                  ...(isStep2Complete ? styles.stepDividerActive : {})
                }} 
                className="register-step-divider" 
              />

              {/* Step 3: Review & Submit */}
              <div style={isStep3Complete ? styles.stepItemComplete : (isStep2Complete ? styles.stepItemActive : styles.stepItem)}>
                <div 
                  style={isStep3Complete ? styles.stepNumberCompleted : (isStep2Complete ? styles.stepNumberActive : styles.stepNumber)}
                  className={isStep3Complete ? "step-check-anim" : ""}
                >
                  {isStep3Complete ? <Check size={18} strokeWidth={3} /> : '3'}
                </div>
                <div style={styles.stepTextGroup}>
                  <div style={isStep3Complete ? styles.stepTitleComplete : (isStep2Complete ? styles.stepTitleActive : styles.stepTitle)}>
                    Review & Submit
                    {isStep3Complete && <span style={styles.stepCompletedPill}>Ready</span>}
                  </div>
                  <div style={styles.stepSub} className="register-step-sub">Confirm and submit</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Form Body */}
          <main style={styles.formMainContainer} className="register-main-container">
            <form onSubmit={handleSchoolRegisterSubmit} style={styles.formStack} noValidate>

              {/* CARD 1: SCHOOL DETAILS */}
              <div style={styles.cardBox} className="register-card-box">
                <div style={styles.cardSectionHeader} className="register-card-header">
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
                    className="register-demo-btn"
                    title="Auto-fill sample school & coordinator details"
                  >
                    <Sparkles size={14} color="#ea580c" /> Auto-Fill Demo Details
                  </button>
                </div>

                <div style={styles.formGrid3} className="register-form-grid">
                  <div style={{ ...styles.fieldGroup, gridColumn: 'span 2' }} className="register-col-span-2">
                    <label style={styles.label}>School Name <span style={styles.req}>*</span></label>
                    <input
                      type="text"
                      style={{
                        ...styles.input,
                        ...(fieldErrors.schoolName ? styles.inputError : {})
                      }}
                      placeholder="Enter school name"
                      value={schoolDetails.schoolName}
                      onChange={(e) => {
                        setSchoolDetails({ ...schoolDetails, schoolName: e.target.value });
                        clearFieldError('schoolName');
                      }}
                    />
                    {fieldErrors.schoolName && <span style={styles.fieldError}>{fieldErrors.schoolName}</span>}
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>Board <span style={styles.req}>*</span></label>
                    <select
                      style={{
                        ...styles.select,
                        ...(fieldErrors.board ? styles.inputError : {})
                      }}
                      value={schoolDetails.board}
                      onChange={(e) => {
                        setSchoolDetails({ ...schoolDetails, board: e.target.value });
                        clearFieldError('board');
                      }}
                    >
                      <option value="">Select Board</option>
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                      <option value="State Board">State Board</option>
                      <option value="IB">IB</option>
                      <option value="IGCSE">IGCSE</option>
                      <option value="Other">Other</option>
                    </select>
                    {fieldErrors.board && <span style={styles.fieldError}>{fieldErrors.board}</span>}
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>State <span style={styles.req}>*</span></label>
                    <select
                      style={{
                        ...styles.select,
                        ...(fieldErrors.state ? styles.inputError : {})
                      }}
                      value={schoolDetails.state}
                      onChange={(e) => {
                        setSchoolDetails({ ...schoolDetails, state: e.target.value });
                        clearFieldError('state');
                      }}
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
                    {fieldErrors.state && <span style={styles.fieldError}>{fieldErrors.state}</span>}
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>District <span style={styles.req}>*</span></label>
                    <select
                      style={{
                        ...styles.select,
                        ...(fieldErrors.district ? styles.inputError : {})
                      }}
                      value={schoolDetails.district}
                      onChange={(e) => {
                        setSchoolDetails({ ...schoolDetails, district: e.target.value });
                        clearFieldError('district');
                      }}
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
                    {fieldErrors.district && <span style={styles.fieldError}>{fieldErrors.district}</span>}
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>City <span style={styles.req}>*</span></label>
                    <input
                      type="text"
                      style={{
                        ...styles.input,
                        ...(fieldErrors.city ? styles.inputError : {})
                      }}
                      placeholder="Enter city"
                      value={schoolDetails.city}
                      onChange={(e) => {
                        setSchoolDetails({ ...schoolDetails, city: e.target.value });
                        clearFieldError('city');
                      }}
                    />
                    {fieldErrors.city && <span style={styles.fieldError}>{fieldErrors.city}</span>}
                  </div>

                  <div style={{ ...styles.fieldGroup, gridColumn: '1 / -1' }} className="register-col-span-all">
                    <label style={styles.label}>School Address <span style={styles.req}>*</span></label>
                    <input
                      type="text"
                      style={{
                        ...styles.input,
                        ...(fieldErrors.address ? styles.inputError : {})
                      }}
                      placeholder="Enter complete address (Street, Landmark, Pincode)"
                      value={schoolDetails.address}
                      onChange={(e) => {
                        setSchoolDetails({ ...schoolDetails, address: e.target.value });
                        clearFieldError('address');
                      }}
                    />
                    {fieldErrors.address && <span style={styles.fieldError}>{fieldErrors.address}</span>}
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>School Email <span style={styles.req}>*</span></label>
                    <input
                      type="email"
                      style={{
                        ...styles.input,
                        ...(fieldErrors.schoolEmail ? styles.inputError : {})
                      }}
                      placeholder="Enter school email"
                      value={schoolDetails.email}
                      onChange={(e) => {
                        setSchoolDetails({ ...schoolDetails, email: e.target.value });
                        clearFieldError('schoolEmail');
                      }}
                    />
                    {fieldErrors.schoolEmail && <span style={styles.fieldError}>{fieldErrors.schoolEmail}</span>}
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>School Mobile <span style={styles.req}>*</span></label>
                    <input
                      type="tel"
                      style={{
                        ...styles.input,
                        ...(fieldErrors.schoolMobile ? styles.inputError : {})
                      }}
                      placeholder="Enter school mobile number"
                      value={schoolDetails.mobile}
                      onChange={(e) => {
                        setSchoolDetails({ ...schoolDetails, mobile: e.target.value });
                        clearFieldError('schoolMobile');
                      }}
                    />
                    {fieldErrors.schoolMobile && <span style={styles.fieldError}>{fieldErrors.schoolMobile}</span>}
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>Principal Name <span style={styles.req}>*</span></label>
                    <input
                      type="text"
                      style={{
                        ...styles.input,
                        ...(fieldErrors.principalName ? styles.inputError : {})
                      }}
                      placeholder="Enter principal name"
                      value={schoolDetails.principalName}
                      onChange={(e) => {
                        setSchoolDetails({ ...schoolDetails, principalName: e.target.value });
                        clearFieldError('principalName');
                      }}
                    />
                    {fieldErrors.principalName && <span style={styles.fieldError}>{fieldErrors.principalName}</span>}
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>Account Password <span style={styles.req}>*</span></label>
                    <div style={styles.passwordInputWrapper}>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        style={{
                          ...styles.passwordInput,
                          ...(fieldErrors.password ? styles.inputError : {})
                        }}
                        placeholder="Create a password (min. 6 characters)"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          clearFieldError('password');
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={styles.passwordToggleBtn}
                        tabIndex={-1}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    {fieldErrors.password && <span style={styles.fieldError}>{fieldErrors.password}</span>}
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>Confirm Password <span style={styles.req}>*</span></label>
                    <div style={styles.passwordInputWrapper}>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        style={{
                          ...styles.passwordInput,
                          ...(fieldErrors.confirmPassword ? styles.inputError : {})
                        }}
                        placeholder="Re-enter your password"
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                          clearFieldError('confirmPassword');
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        style={styles.passwordToggleBtn}
                        tabIndex={-1}
                        aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                      >
                        {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    {fieldErrors.confirmPassword && <span style={styles.fieldError}>{fieldErrors.confirmPassword}</span>}
                  </div>
                </div>

              </div>

              {/* CARD 2: COORDINATOR DETAILS */}
              <div style={styles.cardBox} className="register-card-box">
                <div style={styles.cardSectionHeader} className="register-card-header">
                  <div style={styles.sectionIconSquare}>
                    <User size={22} color="#0284c7" />
                  </div>
                  <div>
                    <h2 style={styles.cardTitle}>Coordinator Details</h2>
                    <p style={styles.cardSub}>Provide the details of the person coordinating this nomination</p>
                  </div>
                </div>

                <div style={styles.formGrid2} className="register-form-grid">
                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>Coordinator Name <span style={styles.req}>*</span></label>
                    <input
                      type="text"
                      style={{
                        ...styles.input,
                        ...(fieldErrors.coordName ? styles.inputError : {})
                      }}
                      placeholder="Enter coordinator name"
                      value={coordinatorDetails.name}
                      onChange={(e) => {
                        setCoordinatorDetails({ ...coordinatorDetails, name: e.target.value });
                        clearFieldError('coordName');
                      }}
                    />
                    {fieldErrors.coordName && <span style={styles.fieldError}>{fieldErrors.coordName}</span>}
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>Designation <span style={styles.req}>*</span></label>
                    <input
                      type="text"
                      style={{
                        ...styles.input,
                        ...(fieldErrors.coordDesignation ? styles.inputError : {})
                      }}
                      placeholder="Enter designation (e.g. Science HOD, STEM Coordinator)"
                      value={coordinatorDetails.designation}
                      onChange={(e) => {
                        setCoordinatorDetails({ ...coordinatorDetails, designation: e.target.value });
                        clearFieldError('coordDesignation');
                      }}
                    />
                    {fieldErrors.coordDesignation && <span style={styles.fieldError}>{fieldErrors.coordDesignation}</span>}
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>Mobile Number <span style={styles.req}>*</span></label>
                    <input
                      type="tel"
                      style={{
                        ...styles.input,
                        ...(fieldErrors.coordMobile ? styles.inputError : {})
                      }}
                      placeholder="Enter mobile number"
                      value={coordinatorDetails.mobile}
                      onChange={(e) => {
                        setCoordinatorDetails({ ...coordinatorDetails, mobile: e.target.value });
                        clearFieldError('coordMobile');
                      }}
                    />
                    {fieldErrors.coordMobile && <span style={styles.fieldError}>{fieldErrors.coordMobile}</span>}
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>Email ID <span style={styles.req}>*</span></label>
                    <input
                      type="email"
                      style={{
                        ...styles.input,
                        ...(fieldErrors.coordEmail ? styles.inputError : {})
                      }}
                      placeholder="Enter email address"
                      value={coordinatorDetails.email}
                      onChange={(e) => {
                        setCoordinatorDetails({ ...coordinatorDetails, email: e.target.value });
                        clearFieldError('coordEmail');
                      }}
                    />
                    {fieldErrors.coordEmail && <span style={styles.fieldError}>{fieldErrors.coordEmail}</span>}
                  </div>
                </div>
              </div>

              {/* CARD 3: DECLARATION */}
              <div 
                ref={declarationRef}
                style={{
                  ...styles.cardBox,
                  ...(declarationError || fieldErrors.declaration ? styles.cardBoxError : {})
                }}
                className="register-card-box"
              >
                <div style={styles.cardSectionHeader} className="register-card-header">
                  <div style={{
                    ...styles.sectionIconSquare,
                    background: (declarationError || fieldErrors.declaration) ? '#fee2e2' : '#e0f2fe'
                  }}>
                    <FileText size={22} color={(declarationError || fieldErrors.declaration) ? '#dc2626' : '#0284c7'} />
                  </div>
                  <div>
                    <h2 style={{
                      ...styles.cardTitle,
                      color: (declarationError || fieldErrors.declaration) ? '#dc2626' : '#0b1d3a'
                    }}>Declaration</h2>
                  </div>
                </div>

                {(declarationError || fieldErrors.declaration) && (
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
                      if (e.target.checked) {
                        setDeclarationError(false);
                        clearFieldError('declaration');
                      }
                    }}
                    style={{
                      ...styles.checkbox,
                      ...((declarationError || fieldErrors.declaration) ? styles.checkboxError : {})
                    }}
                  />
                  <label htmlFor="declaration-chk" style={{
                    ...styles.declarationText,
                    color: (declarationError || fieldErrors.declaration) ? '#dc2626' : '#334155',
                    fontWeight: (declarationError || fieldErrors.declaration) ? 600 : 400
                  }}>
                    We hereby confirm that the information provided is true and correct. We have obtained the consent from the school administration to register for the Technik Olympiad.
                  </label>
                </div>
              </div>

              {/* FOOTER ACTIONS BAR */}
              <div style={styles.actionsBar} className="register-actions-bar">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  style={styles.backBtn}
                  className="register-back-btn"
                >
                  <ArrowLeft size={16} /> Back
                </button>

                <button
                  type="submit"
                  style={styles.reviewSubmitBtn}
                  className="register-submit-btn"
                >
                  Review & Submit <ArrowRight size={18} />
                </button>
              </div>

            </form>
          </main>
        </>

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
                  An activation link has been sent to <strong>{schoolDetails.email}</strong>. Please check your inbox to activate your account.
                </p>
                <button onClick={handleFinishModal} style={styles.modalActionBtn}>
                  Continue <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ERROR POPUP MODAL */}
      {errorMessage && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalCard}>
            <div style={styles.modalContentCenter}>
              <div style={styles.errorIconCircle}>
                <AlertCircle size={40} color="#ffffff" />
              </div>
              <h3 style={styles.modalTitle}>Registration Failed</h3>
              <p style={styles.modalDesc}>{errorMessage}</p>
              <button onClick={() => setErrorMessage('')} style={styles.modalActionBtn}>
                Close &amp; Try Again
              </button>
            </div>
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
    transition: 'all 0.3s ease',
  },
  stepItemComplete: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flex: 1,
    transition: 'all 0.3s ease',
  },
  stepItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flex: 1,
    opacity: 0.6,
    transition: 'all 0.3s ease',
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
    transition: 'all 0.3s ease',
  },
  stepNumberCompleted: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 14px rgba(22, 163, 74, 0.35)',
    flexShrink: 0,
    transition: 'all 0.3s ease',
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
    transition: 'all 0.3s ease',
  },
  stepTextGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  stepTitleActive: {
    fontSize: '0.92rem',
    fontWeight: 700,
    color: '#0f172a',
    fontFamily: 'var(--font-heading)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  stepTitleComplete: {
    fontSize: '0.92rem',
    fontWeight: 700,
    color: '#15803d',
    fontFamily: 'var(--font-heading)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  stepTitle: {
    fontSize: '0.92rem',
    fontWeight: 600,
    color: '#475569',
    fontFamily: 'var(--font-heading)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  stepCompletedPill: {
    fontSize: '0.62rem',
    fontWeight: 800,
    textTransform: 'uppercase',
    background: '#dcfce7',
    color: '#15803d',
    padding: '0.12rem 0.45rem',
    borderRadius: '12px',
    letterSpacing: '0.04em',
    display: 'inline-flex',
    alignItems: 'center',
  },
  stepSub: {
    fontSize: '0.75rem',
    color: '#64748b',
  },
  stepDivider: {
    width: '1px',
    height: '30px',
    background: '#cbd5e1',
    transition: 'all 0.3s ease',
  },
  stepDividerActive: {
    background: 'linear-gradient(180deg, #16a34a 0%, #22c55e 100%)',
    boxShadow: '0 0 8px rgba(22, 163, 74, 0.4)',
    width: '2px',
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
  inputError: {
    borderColor: '#ef4444 !important',
    background: '#fff8f8 !important',
    boxShadow: '0 0 0 3px rgba(239, 68, 68, 0.15)',
  },
  fieldError: {
    color: '#dc2626',
    fontSize: '0.78rem',
    fontWeight: 600,
    marginTop: '0.15rem',
    display: 'block',
  },
  passwordInputWrapper: {
    position: 'relative',
    width: '100%',
  },
  passwordInput: {
    width: '100%',
    height: '42px',
    padding: '0.65rem 2.5rem 0.65rem 0.85rem',
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
  passwordToggleBtn: {
    position: 'absolute',
    top: '50%',
    right: '0.6rem',
    transform: 'translateY(-50%)',
    background: 'transparent',
    border: 'none',
    padding: '0.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#64748b',
    cursor: 'pointer',
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
  errorIconCircle: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: '#ef4444',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.25rem',
    boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)',
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
    @keyframes stepCheckPop {
      0% { transform: scale(0.5) rotate(-20deg); opacity: 0; }
      50% { transform: scale(1.25) rotate(6deg); opacity: 1; }
      75% { transform: scale(0.95) rotate(-2deg); }
      100% { transform: scale(1) rotate(0deg); opacity: 1; }
    }
    .step-check-anim {
      animation: stepCheckPop 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    @media (max-width: 768px) {
      .register-main-container {
        padding: 0 0.85rem !important;
        margin-top: 1.25rem !important;
      }
      .register-card-box {
        padding: 1.25rem 1rem !important;
        border-radius: 10px !important;
      }
      .register-card-header {
        flex-wrap: wrap !important;
        gap: 0.75rem !important;
        margin-bottom: 1.15rem !important;
      }
      .register-demo-btn {
        width: 100% !important;
        justify-content: center !important;
      }
      .register-form-grid,
      div[style*="gridTemplateColumns"] {
        grid-template-columns: 1fr !important;
        gap: 1rem !important;
      }
      .register-col-span-2,
      .register-col-span-all,
      div[style*="gridColumn: span 2"],
      div[style*="grid-column: span 2"] {
        grid-column: 1 / -1 !important;
      }
      .register-step-sub {
        display: none !important;
      }
      .register-step-divider {
        height: 20px !important;
      }
      .register-step-container {
        gap: 0.5rem !important;
        justify-content: space-around !important;
      }
      .register-actions-bar {
        flex-direction: column-reverse !important;
        gap: 0.75rem !important;
      }
      .register-back-btn,
      .register-submit-btn {
        width: 100% !important;
        justify-content: center !important;
      }
    }
  `;
}
