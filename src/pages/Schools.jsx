import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  School, 
  Users, 
  Trophy, 
  Search, 
  PlusCircle, 
  CheckCircle2, 
  BookOpen, 
  Award, 
  ShieldCheck, 
  Trash2, 
  Upload, 
  User, 
  ArrowRight, 
  FileCheck,
  Download,
  LogOut,
  Clock,
  Check,
  AlertCircle,
  Loader2
} from 'lucide-react';
import {
  getSchoolProfileApi,
  getSchoolStudentsApi,
  getPrideNominationsApi,
  nominatePrideStudentsApi,
  uploadNominationDocumentApi,
  registerOlympiadStudentsApi
} from '../services/api';

// Helper to determine if class is junior or senior
const isJuniorGrade = (gradeStr = '', catStr = '') => {
  const combined = (gradeStr + ' ' + catStr).toLowerCase();
  return combined.includes('jr') ||
    combined.includes('junior') ||
    combined.includes('grade 3') ||
    combined.includes('grade 4') ||
    combined.includes('grade 5') ||
    combined.includes('class 3') ||
    combined.includes('class 4') ||
    combined.includes('class 5') ||
    combined.includes('class iii') ||
    combined.includes('class iv') ||
    combined.includes('class v');
};

export default function Schools() {
  const navigate = useNavigate();

  // Auth Guard
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('technik_school_authenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('technik_school_authenticated');
    sessionStorage.removeItem('technik_school_auth_pending');
    sessionStorage.removeItem('technik_csrf_token');
    navigate('/login');
  };

  // Active Tab: 'roster' (All Students) | 'pride-nominated-list' | 'nominate-pride' | 'olympiad-reg'
  const [activeTab, setActiveTab] = useState('roster'); 

  // Form Mode & Filter States
  const [selectedLevelFilter, setSelectedLevelFilter] = useState('junior'); // 'junior' | 'senior'
  const [formType, setFormType] = useState('olympiad'); // 'olympiad' | 'pride'

  // Roster Filter State
  const [rosterSearch, setRosterSearch] = useState('');
  const [rosterGradeFilter, setRosterGradeFilter] = useState('All');
  const [rosterYearFilter, setRosterYearFilter] = useState('All');

  // Pride Nominations Filter State
  const [prideSearch, setPrideSearch] = useState('');
  const [prideYearFilter, setPrideYearFilter] = useState('All');

  // School Profile Data
  const [schoolProfile, setSchoolProfile] = useState({
    id: '',
    schoolCode: 'SCH-2026-TXI',
    schoolName: 'St. Xavier International School',
    city: 'Chennai',
    state: 'Tamil Nadu',
    principalName: 'Dr. R. Sundaram',
    coordinatorName: 'Prof. S. Meenakshi',
    coordinatorDesignation: 'STEM & Olympiad Coordinator',
    coordinatorMobile: '+91 95004 28800',
    coordinatorEmail: 'coordinator@stxaviers.edu.in'
  });

  // Coordinator Details State for Forms
  const [coordinator, setCoordinator] = useState({
    name: 'Prof. S. Meenakshi',
    designation: 'STEM & Olympiad Coordinator',
    mobile: '+91 95004 28800',
    email: 'coordinator@stxaviers.edu.in'
  });

  // Dynamic Student Nomination / Registration List State
  const [studentList, setStudentList] = useState([
    {
      id: 1,
      name: '',
      studentClass: 'Grade 4',
      gender: 'Select Gender',
      category: 'Robotics Olympiad',
      achievementTitle: '',
      description: '',
      fileName: '',
      filePath: '',
      uploading: false
    }
  ]);

  // Form State & Feedback
  const [declaration, setDeclaration] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lastSubmittedType, setLastSubmittedType] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Live Backend Data
  const [loadingRoster, setLoadingRoster] = useState(false);
  const [loadingPride, setLoadingPride] = useState(false);
  const [submittedRoster, setSubmittedRoster] = useState([]);
  const [prideNominations, setPrideNominations] = useState([]);

  // Fetch School Profile
  useEffect(() => {
    let isMounted = true;
    async function loadProfile() {
      try {
        const data = await getSchoolProfileApi();
        if (data && isMounted) {
          const resolvedSchoolId = data.id || sessionStorage.getItem('technik_school_id') || '';
          if (data.id) {
            sessionStorage.setItem('technik_school_id', data.id);
          }
          setSchoolProfile(prev => ({
            ...prev,
            id: resolvedSchoolId || prev.id,
            schoolCode: data.schoolCode || prev.schoolCode,
            schoolName: data.schoolName || prev.schoolName,
            city: data.city || prev.city,
            state: data.state || prev.state,
            principalName: data.principalName || prev.principalName,
            coordinatorName: data.coordinatorName || prev.coordinatorName,
            coordinatorDesignation: data.coordinatorDesignation || prev.coordinatorDesignation,
            coordinatorMobile: data.coordinatorMobile || prev.coordinatorMobile,
            coordinatorEmail: data.coordinatorEmail || prev.coordinatorEmail
          }));
          if (data.coordinatorName) {
            setCoordinator({
              name: data.coordinatorName,
              designation: data.coordinatorDesignation || 'STEM & Olympiad Coordinator',
              mobile: data.coordinatorMobile || '',
              email: data.coordinatorEmail || data.email || ''
            });
          }
        }
      } catch (err) {
        // Handled silently
      }
    }
    loadProfile();
    return () => { isMounted = false; };
  }, []);

  // Fetch All Enrolled Students Roster from Backend
  const fetchStudents = useCallback(async () => {
    setLoadingRoster(true);
    const activeSchoolId = schoolProfile.id || sessionStorage.getItem('technik_school_id') || '';
    try {
      const res = await getSchoolStudentsApi({
        search: rosterSearch,
        gradeLevel: rosterGradeFilter,
        year: rosterYearFilter,
        schoolId: activeSchoolId
      });
      if (res && Array.isArray(res.students)) {
        const mapped = res.students.map(st => {
          const d = st.createdAt ? new Date(st.createdAt) : new Date();
          const formattedDate = d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
          return {
            id: st.id,
            name: st.studentName,
            grade: st.grade,
            track: st.category || 'Robotics Olympiad',
            date: formattedDate,
            status: st.status || 'Registered & Verified',
            year: st.academicYear || d.getFullYear()
          };
        });
        setSubmittedRoster(mapped);
      }
    } catch (err) {
      // Retain existing state
    } finally {
      setLoadingRoster(false);
    }
  }, [rosterSearch, rosterGradeFilter, rosterYearFilter, schoolProfile.id]);

  // Fetch Pride Nominations from Backend
  const fetchPrideNominations = useCallback(async () => {
    setLoadingPride(true);
    const activeSchoolId = schoolProfile.id || sessionStorage.getItem('technik_school_id') || '';
    try {
      const res = await getPrideNominationsApi({
        year: prideYearFilter,
        search: prideSearch,
        schoolId: activeSchoolId
      });
      if (res && Array.isArray(res.nominations)) {
        const mapped = res.nominations.map(nom => {
          const d = nom.createdAt ? new Date(nom.createdAt) : new Date();
          const formattedDate = d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
          return {
            id: nom.id,
            studentName: nom.studentName,
            class: nom.class,
            classCategory: nom.classCategory || (isJuniorGrade(nom.class) ? 'Grade 3 to 5 (Jr Level)' : 'Grade 6 to 8 (Senior Level)'),
            achievementCategory: nom.achievementCategory || 'Technik Pride Award Nomination',
            dateSubmitted: formattedDate,
            nominationStatus: nom.nominationStatus || 'Submitted & Under Review',
            adminStatus: nom.adminStatus || 'Forwarded to Technik Super Admin',
            academicYear: nom.academicYear || d.getFullYear()
          };
        });
        setPrideNominations(mapped);
      }
    } catch (err) {
      // Retain existing state
    } finally {
      setLoadingPride(false);
    }
  }, [prideYearFilter, prideSearch, schoolProfile.id]);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  useEffect(() => {
    fetchPrideNominations();
  }, [fetchPrideNominations]);

  // Quota Computations: 3 Junior (Grades 3-5) + 3 Senior (Grades 6-8) = 6 Total per Year
  const currentYear = 2026;
  const yearNominations = prideNominations.filter(n => (n.academicYear === currentYear || n.dateSubmitted?.includes(String(currentYear))));
  const jrPrideCount = yearNominations.filter(n => isJuniorGrade(n.class, n.classCategory)).length;
  const srPrideCount = yearNominations.filter(n => !isJuniorGrade(n.class, n.classCategory)).length;
  const totalPrideCount = jrPrideCount + srPrideCount;

  // Real-time Stepper Completion Validation
  const isCoordStepComplete = Boolean(
    coordinator.name.trim() && 
    coordinator.designation.trim() && 
    coordinator.mobile.trim() && 
    coordinator.email.trim() && 
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(coordinator.email.trim())
  );

  const isPrideStepComplete = studentList.length > 0 && studentList.every(s => 
    s.name.trim() && 
    s.gender !== 'Select Gender' && 
    s.achievementTitle.trim() && 
    s.description.trim()
  );

  const isOlympiadStepComplete = studentList.length > 0 && studentList.every(s => 
    s.name.trim() && 
    s.gender !== 'Select Gender' && 
    s.category
  );

  const isReviewStepComplete = declaration === true;

  const clearFormError = (key) => {
    if (formErrors[key]) {
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      });
    }
  };

  // Add another student row dynamically with quota enforcement
  const handleAddStudent = () => {
    if (formType === 'pride' || activeTab === 'nominate-pride') {
      const isJr = selectedLevelFilter === 'junior';
      const existingInLevel = isJr ? jrPrideCount : srPrideCount;
      const currentInFormForLevel = studentList.filter(s => isJuniorGrade(s.studentClass, selectedLevelFilter)).length;

      if (existingInLevel + currentInFormForLevel >= 3) {
        alert(`Annual Quota Limit Reached: Maximum 3 nominations allowed for ${isJr ? 'Junior Level (Grades 3-5)' : 'Senior Level (Grades 6-8)'} per academic year. (You currently have ${existingInLevel} registered).`);
        return;
      }
      if (totalPrideCount + studentList.length >= 6) {
        alert("Annual Quota Limit Reached: Maximum 6 total nominations allowed per school for the Technik Pride Award in this academic year.");
        return;
      }
    }

    const defaultGrade = selectedLevelFilter === 'junior' ? 'Grade 4' : 'Grade 7';
    setStudentList([
      ...studentList,
      {
        id: Date.now(),
        name: '',
        studentClass: defaultGrade,
        gender: 'Select Gender',
        category: formType === 'pride' ? 'Technik Pride Award' : 'Robotics Olympiad',
        achievementTitle: '',
        description: '',
        fileName: '',
        filePath: '',
        uploading: false
      }
    ]);
  };

  // Remove student row
  const handleRemoveStudent = (id) => {
    if (studentList.length === 1) return;
    setStudentList(studentList.filter(s => s.id !== id));
  };

  // Update student field
  const handleStudentChange = (id, field, value) => {
    setStudentList(studentList.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  // Handle file upload to backend server
  const handleFileUpload = async (studentId, file) => {
    if (!file) return;
    handleStudentChange(studentId, 'fileName', file.name);
    handleStudentChange(studentId, 'uploading', true);

    try {
      const res = await uploadNominationDocumentApi(file);
      if (res && res.filePath) {
        handleStudentChange(studentId, 'filePath', res.filePath);
      }
    } catch (err) {
      console.error('File upload failed, will continue with local file reference:', err);
    } finally {
      handleStudentChange(studentId, 'uploading', false);
    }
  };

  // Form Submit Handler for both Pride Award & Olympiad Registration
  const handleSubmitForm = async (e, currentType) => {
    e.preventDefault();
    setSubmitError('');
    const errs = {};

    // Coordinator validation
    if (!coordinator.name.trim()) errs.coordName = "This field cannot be left empty";
    if (!coordinator.designation.trim()) errs.coordDesignation = "This field cannot be left empty";
    if (!coordinator.mobile.trim()) errs.coordMobile = "This field cannot be left empty";
    if (!coordinator.email.trim()) {
      errs.coordEmail = "This field cannot be left empty";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(coordinator.email.trim())) {
      errs.coordEmail = "Please enter a valid email address";
    }

    // Students validation
    studentList.forEach((s) => {
      if (!s.name.trim()) {
        errs[`student_name_${s.id}`] = "This field cannot be left empty";
      }
      if (s.gender === 'Select Gender') {
        errs[`student_gender_${s.id}`] = "Please select gender";
      }
      if (currentType === 'pride') {
        if (!s.achievementTitle.trim()) {
          errs[`student_ach_${s.id}`] = "This field cannot be left empty";
        }
        if (!s.description.trim()) {
          errs[`student_desc_${s.id}`] = "This field cannot be left empty";
        }
      }
    });

    if (!declaration) {
      errs.declaration = "Please accept the declaration before submitting.";
    }

    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      return;
    }

    setFormErrors({});
    const validStudents = studentList.filter(s => s.name.trim() !== '');

    // Quota validation on submit
    if (currentType === 'pride') {
      const incomingJr = validStudents.filter(s => isJuniorGrade(s.studentClass, selectedLevelFilter)).length;
      const incomingSr = validStudents.filter(s => !isJuniorGrade(s.studentClass, selectedLevelFilter)).length;

      if (jrPrideCount + incomingJr > 3) {
        setSubmitError(`Annual Quota Exceeded: Junior Level allows max 3 nominations. You have ${jrPrideCount} registered and submitted ${incomingJr} more.`);
        return;
      }
      if (srPrideCount + incomingSr > 3) {
        setSubmitError(`Annual Quota Exceeded: Senior Level allows max 3 nominations. You have ${srPrideCount} registered and submitted ${incomingSr} more.`);
        return;
      }
      if (totalPrideCount + validStudents.length > 6) {
        setSubmitError(`Annual Quota Exceeded: Maximum 6 nominations allowed per year.`);
        return;
      }
    }

    setIsSubmitting(true);
    const activeSchoolId = schoolProfile.id || sessionStorage.getItem('technik_school_id') || undefined;
    try {
      if (currentType === 'pride') {
        const payload = {
          schoolId: activeSchoolId,
          academicYear: currentYear,
          nominations: validStudents.map(s => ({
            studentName: s.name,
            class: s.studentClass,
            classCategory: selectedLevelFilter === 'junior' ? 'Grade 3 to 5 (Jr Level)' : 'Grade 6 to 8 (Senior Level)',
            gender: s.gender,
            achievementCategory: s.category || 'Technik Pride Award',
            achievementTitle: s.achievementTitle,
            briefDescription: s.description,
            supportingDocument: s.filePath || s.fileName || ''
          }))
        };

        await nominatePrideStudentsApi(payload);
        await fetchPrideNominations();
        await fetchStudents();
      } else {
        const payload = {
          schoolId: activeSchoolId,
          academicYear: currentYear,
          students: validStudents.map(s => ({
            studentName: s.name,
            class: s.studentClass,
            classCategory: selectedLevelFilter === 'junior' ? 'Grade 3 to 5 (Jr Level)' : 'Grade 6 to 8 (Senior Level)',
            gender: s.gender,
            olympiadTrack: s.category || 'Robotics Olympiad'
          }))
        };

        await registerOlympiadStudentsApi(payload);
        await fetchStudents();
      }

      setLastSubmittedType(currentType);
      setFormSubmitted(true);

      // Reset student list
      setStudentList([
        {
          id: Date.now(),
          name: '',
          studentClass: selectedLevelFilter === 'junior' ? 'Grade 4' : 'Grade 7',
          gender: 'Select Gender',
          category: currentType === 'pride' ? 'Technik Pride Award' : 'Robotics Olympiad',
          achievementTitle: '',
          description: '',
          fileName: '',
          filePath: '',
          uploading: false
        }
      ]);
    } catch (err) {
      console.error('Submission failed:', err);
      setSubmitError(err.message || 'Submission failed. Please check details and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filtered Roster (Image 2)
  const filteredRoster = submittedRoster.filter((st) => {
    const matchesName = st.name.toLowerCase().includes(rosterSearch.toLowerCase()) || 
                        st.track.toLowerCase().includes(rosterSearch.toLowerCase());
    const matchesGrade = rosterGradeFilter === 'All' || 
                         (rosterGradeFilter === 'Jr Level' && (st.grade.includes('Jr') || isJuniorGrade(st.grade))) ||
                         (rosterGradeFilter === 'Sr Level' && (st.grade.includes('Sr') || !isJuniorGrade(st.grade)));
    const matchesYear = rosterYearFilter === 'All' || String(st.year || st.date).includes(rosterYearFilter);
    return matchesName && matchesGrade && matchesYear;
  });

  // Filtered Pride Nominations (Image 3)
  const filteredPride = prideNominations.filter((st) => {
    const matchesName = st.studentName.toLowerCase().includes(prideSearch.toLowerCase()) ||
                        st.achievementCategory.toLowerCase().includes(prideSearch.toLowerCase());
    const matchesYear = prideYearFilter === 'All' || String(st.academicYear || st.dateSubmitted).includes(prideYearFilter);
    return matchesName && matchesYear;
  });

  return (
    <div style={styles.page}>
      
      {/* Dynamic Keyframes and Mobile Responsiveness */}
      <style>{`
        @keyframes stepCheckPop {
          0% { transform: scale(0.4) rotate(-20deg); opacity: 0; }
          50% { transform: scale(1.3) rotate(8deg); opacity: 1; }
          75% { transform: scale(0.92) rotate(-3deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .step-check-anim {
          animation: stepCheckPop 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @media (max-width: 768px) {
          .school-portal-header-box {
            padding: 1.25rem 1rem !important;
          }
          .school-metrics-row {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 0.65rem !important;
          }
          .school-tab-nav {
            justify-content: flex-start !important;
            overflow-x: auto !important;
            padding-bottom: 0.5rem !important;
            flex-wrap: nowrap !important;
            -webkit-overflow-scrolling: touch;
          }
          .school-tab-btn {
            white-space: nowrap !important;
            flex-shrink: 0 !important;
            padding: 0.65rem 1rem !important;
            font-size: 0.82rem !important;
          }
          .school-filter-bar {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 0.75rem !important;
          }
          .school-filter-bar > div, .school-filter-bar input, .school-filter-bar select {
            width: 100% !important;
          }
          .school-table-container {
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch;
          }
          .stepper-steps-wrapper {
            overflow-x: auto !important;
            padding-bottom: 0.5rem !important;
          }
        }
      `}</style>

      {/* HERO BANNER & PORTAL NAVIGATION HEADER (IMAGE 1) */}
      <section style={styles.heroSection}>
        <div className="container" style={styles.heroContainer}>
          
          {/* Top Breadcrumb */}
          <div style={styles.breadcrumbRow}>
            <Link to="/" style={styles.breadcrumbLink}>Home</Link>
            <span style={styles.breadcrumbSep}>&gt;</span>
            <span style={styles.breadcrumbCurrent}>School Portal Dashboard</span>
          </div>

          <div style={styles.portalHeaderBox} className="school-portal-header-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', width: '100%' }}>
              <div style={styles.schoolTitleGroup}>
                <div style={styles.schoolIconCircleLg}>
                  <School size={28} color="#ffffff" />
                </div>
                <div>
                  <div style={styles.portalBadgeRow}>
                    <span className="badge badge-gold">VERIFIED INSTITUTIONAL PARTNER</span>
                    <span style={styles.schoolCodePill}>CODE: {schoolProfile.schoolCode}</span>
                  </div>
                  <h1 style={styles.schoolPortalName}>{schoolProfile.schoolName}</h1>
                  <p style={styles.schoolPortalSub}>
                    {schoolProfile.city}, {schoolProfile.state} &nbsp;|&nbsp; Principal: {schoolProfile.principalName} &nbsp;|&nbsp; Coordinator: {coordinator.name}
                  </p>
                </div>
              </div>

              <button 
                type="button"
                onClick={handleLogout}
                style={{
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  color: '#fca5a5',
                  padding: '0.45rem 0.95rem',
                  borderRadius: '10px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s'
                }}
              >
                <LogOut size={15} /> Sign Out Portal
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div style={styles.portalMetricsRow} className="school-metrics-row">
              <div style={styles.metricPill}>
                <Users size={16} color="#38bdf8" />
                <span>Total Enrolled: <strong>{submittedRoster.length} Students</strong></span>
              </div>
              <div style={styles.metricPill}>
                <Trophy size={16} color="#fbbf24" />
                <span>Pride Award Nominations: <strong>{prideNominations.length}</strong></span>
              </div>
              <div style={styles.metricPill}>
                <FileCheck size={16} color="#4ade80" />
                <span>Verified Certificates: <strong>{submittedRoster.filter(r => r.status.includes('Verified')).length}</strong></span>
              </div>
            </div>
          </div>

          {/* DEDICATED SCHOOL PORTAL OPTIONS NAVIGATION TABS (IMAGE 1) */}
          <div style={styles.tabNavRow} className="school-tab-nav">
            <button 
              className="school-tab-btn"
              style={{
                ...styles.tabNavBtn,
                ...(activeTab === 'roster' ? styles.tabNavBtnActiveBlue : {})
              }}
              onClick={() => setActiveTab('roster')}
            >
              <Users size={16} />
              <span>All Students ({submittedRoster.length})</span>
            </button>

            <button 
              className="school-tab-btn"
              style={{
                ...styles.tabNavBtn,
                ...(activeTab === 'pride-nominated-list' ? styles.tabNavBtnActiveGold : {})
              }}
              onClick={() => { setActiveTab('pride-nominated-list'); fetchPrideNominations(); }}
            >
              <Trophy size={16} color={activeTab === 'pride-nominated-list' ? '#041026' : '#fbbf24'} />
              <span>Nominated for Pride Award ({prideNominations.length})</span>
            </button>

            <button 
              className="school-tab-btn"
              style={{
                ...styles.tabNavBtn,
                ...(activeTab === 'nominate-pride' ? styles.tabNavBtnActiveGold : {})
              }}
              onClick={() => { setActiveTab('nominate-pride'); setFormType('pride'); setFormSubmitted(false); setSubmitError(''); }}
            >
              <Trophy size={16} />
              <span>+ Nominate Student</span>
            </button>

            <button 
              className="school-tab-btn"
              style={{
                ...styles.tabNavBtn,
                ...(activeTab === 'olympiad-reg' ? styles.tabNavBtnActiveOrange : {})
              }}
              onClick={() => { setActiveTab('olympiad-reg'); setFormType('olympiad'); setFormSubmitted(false); setSubmitError(''); }}
            >
              <BookOpen size={16} />
              <span>Olympiad Registration</span>
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* OPTION 1: ALL ENROLLED STUDENTS LIST VIEW (IMAGE 2)                       */}
      {/* ========================================================================= */}
      {activeTab === 'roster' && (
        <section style={styles.sectionPadding}>
          <div className="container">
            
            <div style={styles.rosterCardWrapper}>
              
              {/* Header Bar */}
              <div style={styles.rosterHeaderRow}>
                <div>
                  <h2 style={styles.rosterTitle}>Enrolled Students &amp; Achievers List</h2>
                  <p style={styles.rosterSub}>Manage, search, and export registered students from {schoolProfile.schoolName}.</p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => { setActiveTab('olympiad-reg'); setFormType('olympiad'); setFormSubmitted(false); }} 
                    style={styles.actionBtnOrange}
                  >
                    <BookOpen size={15} /> + Register for Olympiad
                  </button>
                  <button 
                    onClick={() => { setActiveTab('nominate-pride'); setFormType('pride'); setFormSubmitted(false); }} 
                    style={styles.actionBtnGold}
                  >
                    <Trophy size={15} /> + Nominate for Pride Award
                  </button>
                </div>
              </div>

              {/* Roster Controls: Search & Filter (IMAGE 2) */}
              <div style={styles.rosterControlRow}>
                <div style={styles.rosterSearchBox}>
                  <Search size={17} color="#64748b" style={{ marginRight: '0.4rem' }} />
                  <input
                    type="text"
                    placeholder="Search by student name or track..."
                    value={rosterSearch}
                    onChange={(e) => setRosterSearch(e.target.value)}
                    style={styles.rosterSearchInput}
                  />
                </div>

                <div style={styles.rosterFilterGroup}>
                  <label style={styles.filterLabel}>Grade Level:</label>
                  <select 
                    value={rosterGradeFilter}
                    onChange={(e) => setRosterGradeFilter(e.target.value)}
                    style={styles.selectFilter}
                  >
                    <option value="All">All Grades</option>
                    <option value="Jr Level">Junior Level (Grade 3-5)</option>
                    <option value="Sr Level">Senior Level (Grade 6-8)</option>
                  </select>

                  <label style={{ ...styles.filterLabel, marginLeft: '0.85rem' }}>Academic Year:</label>
                  <select 
                    value={rosterYearFilter}
                    onChange={(e) => setRosterYearFilter(e.target.value)}
                    style={styles.selectFilter}
                  >
                    <option value="All">All Years</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
              </div>

              {/* Enrolled Students Roster Table (IMAGE 2) */}
              <div style={styles.tableResponsive}>
                {loadingRoster ? (
                  <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
                    <Loader2 size={28} className="spin" style={{ margin: '0 auto 0.5rem auto' }} />
                    <p>Loading student roster...</p>
                  </div>
                ) : (
                  <table style={styles.rosterTable}>
                    <thead>
                      <tr style={styles.tableHeaderRow}>
                        <th style={styles.thCell}>STUDENT NAME</th>
                        <th style={styles.thCell}>CLASS / LEVEL</th>
                        <th style={styles.thCell}>CATEGORY / TRACK</th>
                        <th style={styles.thCell}>ENROLLED DATE</th>
                        <th style={styles.thCell}>STATUS</th>
                        <th style={styles.thCell}>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRoster.length === 0 ? (
                        <tr>
                          <td colSpan="6" style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
                            No students match the selected filters.
                          </td>
                        </tr>
                      ) : (
                        filteredRoster.map((st, i) => (
                          <tr key={st.id || i} style={styles.tableBodyRow}>
                            <td style={styles.tdCellBold}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                                <div style={{
                                  ...styles.avatarCircle,
                                  background: st.track.includes('Pride') ? '#041026' : '#041026',
                                  color: '#ffffff'
                                }}>
                                  {st.name.charAt(0)}
                                </div>
                                <span style={{ fontWeight: 700, color: '#0f172a' }}>{st.name}</span>
                              </div>
                            </td>
                            <td style={styles.tdCell}>{st.grade}</td>
                            <td style={styles.tdCell}>
                              <span style={st.track.includes('Pride') ? styles.trackBadgeGold : styles.trackBadgeBlue}>
                                {st.track}
                              </span>
                            </td>
                            <td style={styles.tdCell}>{st.date || '04 Sep 2026'}</td>
                            <td style={styles.tdCell}>
                              <span style={{
                                ...styles.rosterStatusTag,
                                background: st.status.includes('Verified') ? 'rgba(22, 163, 74, 0.1)' : 'rgba(249, 115, 22, 0.1)',
                                color: st.status.includes('Verified') ? '#16a34a' : '#ea580c',
                                border: `1px solid ${st.status.includes('Verified') ? 'rgba(22, 163, 74, 0.2)' : 'rgba(249, 115, 22, 0.2)'}`
                              }}>
                                <CheckCircle2 size={13} style={{ marginRight: '4px' }} />
                                {st.status}
                              </span>
                            </td>
                            <td style={styles.tdCell}>
                              <button 
                                type="button" 
                                style={styles.tableActionBtn}
                                onClick={() => alert(`Downloading Admit Card & Examination Pass for ${st.name}`)}
                              >
                                <Download size={13} /> Admit Card
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                )}
              </div>

            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* OPTION 2: NOMINATED FOR PRIDE AWARD LIST VIEW (IMAGE 3)                   */}
      {/* ========================================================================= */}
      {activeTab === 'pride-nominated-list' && (
        <section style={styles.sectionPadding}>
          <div className="container">
            <div style={styles.rosterCardWrapper}>
              
              {/* Header Box (IMAGE 3) */}
              <div style={{ 
                background: 'linear-gradient(135deg, #fffbe6 0%, #fef3c7 100%)', 
                padding: '1.25rem 1.5rem', 
                borderRadius: '14px', 
                border: '1px solid #fde047', 
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <Trophy size={28} color="#d97706" />
                  <div>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#92400e', margin: 0 }}>
                      Students Nominated for Technik Pride Award
                    </h2>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.86rem', color: '#b45309' }}>
                      List of students nominated by {schoolProfile.schoolName}. Submitted for review by Technik Super Admin &amp; Olympiad Committee.
                    </p>
                  </div>
                </div>
                <div>
                  <button 
                    onClick={() => { setActiveTab('nominate-pride'); setFormType('pride'); setFormSubmitted(false); setSubmitError(''); }} 
                    style={styles.actionBtnGold}
                  >
                    <Trophy size={15} /> + Nominate Student
                  </button>
                </div>
              </div>

              {/* Pride Filter Bar */}
              <div style={styles.rosterControlRow}>
                <div style={styles.rosterSearchBox}>
                  <Search size={17} color="#64748b" style={{ marginRight: '0.4rem' }} />
                  <input
                    type="text"
                    placeholder="Search nominated students..."
                    value={prideSearch}
                    onChange={(e) => setPrideSearch(e.target.value)}
                    style={styles.rosterSearchInput}
                  />
                </div>

                <div style={styles.rosterFilterGroup}>
                  <label style={styles.filterLabel}>Academic Year:</label>
                  <select 
                    value={prideYearFilter}
                    onChange={(e) => setPrideYearFilter(e.target.value)}
                    style={styles.selectFilter}
                  >
                    <option value="All">All Years</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
              </div>

              {/* Roster Table (IMAGE 3) */}
              <div style={styles.tableResponsive}>
                {loadingPride ? (
                  <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
                    <Loader2 size={28} className="spin" style={{ margin: '0 auto 0.5rem auto' }} />
                    <p>Loading pride nominations...</p>
                  </div>
                ) : (
                  <table style={styles.rosterTable}>
                    <thead>
                      <tr style={styles.tableHeaderRow}>
                        <th style={styles.thCell}>STUDENT NAME</th>
                        <th style={styles.thCell}>CLASS / LEVEL</th>
                        <th style={styles.thCell}>NOMINATED CATEGORY</th>
                        <th style={styles.thCell}>DATE SUBMITTED</th>
                        <th style={styles.thCell}>NOMINATION STATUS</th>
                        <th style={styles.thCell}>ADMIN STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPride.length === 0 ? (
                        <tr>
                          <td colSpan="6" style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
                            No students nominated for Pride Award yet. Click "+ Nominate Student" above to get started.
                          </td>
                        </tr>
                      ) : (
                        filteredPride.map((st, i) => (
                          <tr key={st.id || i} style={styles.tableBodyRow}>
                            <td style={styles.tdCellBold}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                                <div style={{ ...styles.avatarCircle, background: '#f59e0b', color: '#ffffff' }}>
                                  {st.studentName.charAt(0)}
                                </div>
                                <span style={{ fontWeight: 700, color: '#0f172a' }}>{st.studentName}</span>
                              </div>
                            </td>
                            <td style={styles.tdCell}>
                              {st.class} ({isJuniorGrade(st.class, st.classCategory) ? 'Jr Level' : 'Sr Level'})
                            </td>
                            <td style={styles.tdCell}>
                              <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#b45309' }}>
                                Technik Pride Award Nomination
                              </span>
                            </td>
                            <td style={styles.tdCell}>{st.dateSubmitted}</td>
                            <td style={styles.tdCell}>
                              <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '0.3rem 0.75rem',
                                borderRadius: '20px',
                                fontSize: '0.78rem',
                                fontWeight: 700,
                                background: '#fef3c7',
                                color: '#d97706',
                                border: '1px solid #fde047'
                              }}>
                                <Clock size={13} style={{ marginRight: '5px' }} />
                                {st.nominationStatus || 'Submitted & Under Review'}
                              </span>
                            </td>
                            <td style={styles.tdCell}>
                              <span style={{ fontSize: '0.82rem', color: '#0284c7', fontWeight: 600 }}>
                                {st.adminStatus || 'Forwarded to Technik Super Admin'}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                )}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* OPTION 3: + NOMINATE STUDENT FOR PRIDE AWARD VIEW (IMAGE 4)               */}
      {/* ========================================================================= */}
      {activeTab === 'nominate-pride' && (
        <section style={styles.sectionPadding}>
          <div className="container">
            
            {/* STEPPER PROGRESS BAR (IMAGE 4) WITH TICK COMPLETION ANIMATION */}
            <div style={styles.stepperBar}>
              
              {/* Step 1: Coordinator Details */}
              <div style={{ ...styles.stepItem, opacity: 1 }}>
                <div style={{
                  ...styles.stepCircle,
                  background: isCoordStepComplete ? '#16a34a' : '#d97706',
                  color: '#ffffff',
                  boxShadow: isCoordStepComplete ? '0 2px 8px rgba(22, 163, 74, 0.3)' : '0 2px 8px rgba(217, 119, 6, 0.3)'
                }}>
                  {isCoordStepComplete ? (
                    <Check size={18} strokeWidth={3} className="step-check-anim" />
                  ) : (
                    '1'
                  )}
                </div>
                <div>
                  <div style={styles.stepItemTitle}>Coordinator Details</div>
                  <div style={styles.stepItemSub}>Add contact person</div>
                </div>
              </div>

              <div style={{
                ...styles.stepDivider,
                background: isCoordStepComplete ? '#86efac' : '#e2e8f0'
              }} />

              {/* Step 2: Pride Award Nomination */}
              <div style={{ ...styles.stepItem, opacity: 1 }}>
                <div style={{
                  ...styles.stepCircle,
                  background: isPrideStepComplete ? '#16a34a' : '#d97706',
                  color: '#ffffff',
                  boxShadow: isPrideStepComplete ? '0 2px 8px rgba(22, 163, 74, 0.3)' : '0 2px 8px rgba(217, 119, 6, 0.3)'
                }}>
                  {isPrideStepComplete ? (
                    <Check size={18} strokeWidth={3} className="step-check-anim" />
                  ) : (
                    '2'
                  )}
                </div>
                <div>
                  <div style={styles.stepItemTitle}>Pride Award Nomination</div>
                  <div style={styles.stepItemSub}>Nominate outstanding students</div>
                </div>
              </div>

              <div style={{
                ...styles.stepDivider,
                background: isPrideStepComplete ? '#86efac' : '#e2e8f0'
              }} />

              {/* Step 3: Review & Submit */}
              <div style={{ ...styles.stepItem, opacity: 1 }}>
                <div style={{
                  ...styles.stepCircle,
                  background: isReviewStepComplete ? '#16a34a' : '#94a3b8',
                  color: '#ffffff',
                  boxShadow: isReviewStepComplete ? '0 2px 8px rgba(22, 163, 74, 0.3)' : 'none'
                }}>
                  {isReviewStepComplete ? (
                    <Check size={18} strokeWidth={3} className="step-check-anim" />
                  ) : (
                    '3'
                  )}
                </div>
                <div>
                  <div style={styles.stepItemTitle}>Review &amp; Submit</div>
                  <div style={styles.stepItemSub}>Confirm and submit</div>
                </div>
              </div>

            </div>

            {/* FORM CONTAINER CARD */}
            <div style={styles.mainFormCard}>
              
              {/* Header Box */}
              <div style={styles.formHeaderBoxGold}>
                <Trophy size={26} color="#d97706" />
                <div>
                  <h2 style={styles.formBoxTitle}>Technik Pride Award Nomination Form</h2>
                  <p style={styles.formBoxSub}>Recognise, encourage &amp; inspire. Nominate exceptional students for the national Technik Pride Award.</p>
                </div>
              </div>

              {/* ANNUAL QUOTA NOTICE BANNER: 3 JUNIOR + 3 SENIOR = 6 TOTAL */}
              <div style={{
                background: 'linear-gradient(135deg, #fffbe6 0%, #fef3c7 100%)',
                border: '1px solid #fde047',
                borderRadius: '14px',
                padding: '1.1rem 1.4rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap',
                boxShadow: '0 4px 14px rgba(217, 119, 6, 0.08)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: '#d97706',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 3px 8px rgba(217, 119, 6, 0.3)'
                  }}>
                    <Trophy size={22} color="#ffffff" />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.98rem', fontWeight: 800, color: '#92400e' }}>
                      Annual Quota: Max 3 Junior &amp; 3 Senior Students per Year (Total 6)
                    </h4>
                    <p style={{ margin: '3px 0 0 0', fontSize: '0.86rem', color: '#b45309', lineHeight: 1.4 }}>
                      Each school can nominate a maximum of <strong>3 students for Junior Level (Grades 3-5)</strong> and <strong>3 students for Senior Level (Grades 6-8)</strong> per academic year.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <div style={{
                    background: '#ffffff',
                    border: '1.5px solid #f59e0b',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '30px',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    color: '#b45309',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 2px 8px rgba(217, 119, 6, 0.12)'
                  }}>
                    <Award size={15} color="#d97706" />
                    <span>Jr Level: <strong>{jrPrideCount} / 3 Used</strong></span>
                  </div>
                  <div style={{
                    background: '#ffffff',
                    border: '1.5px solid #f59e0b',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '30px',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    color: '#b45309',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 2px 8px rgba(217, 119, 6, 0.12)'
                  }}>
                    <Award size={15} color="#d97706" />
                    <span>Sr Level: <strong>{srPrideCount} / 3 Used</strong></span>
                  </div>
                </div>
              </div>

              {/* ERROR BANNER */}
              {submitError && (
                <div style={{
                  background: '#fef2f2',
                  border: '1px solid #f87171',
                  borderRadius: '12px',
                  padding: '0.9rem 1.25rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: '#991b1b'
                }}>
                  <AlertCircle size={20} color="#dc2626" />
                  <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{submitError}</span>
                </div>
              )}

              {/* SUCCESS TOAST BANNER */}
              {formSubmitted && lastSubmittedType === 'pride' && (
                <div style={styles.successBanner}>
                  <CheckCircle2 size={24} color="#16a34a" />
                  <div>
                    <h4 style={styles.successBannerTitle}>Pride Award Nomination Submitted Successfully!</h4>
                    <p style={styles.successBannerSub}>
                      Nominated students have been submitted to Technik Super Admin and added to {schoolProfile.schoolName} roster. Confirmation email sent to <strong>{coordinator.email}</strong>.
                    </p>
                  </div>
                  <button onClick={() => setActiveTab('pride-nominated-list')} style={styles.resetFormBtn}>
                    View Nominated Students &rarr;
                  </button>
                </div>
              )}

              <form onSubmit={(e) => handleSubmitForm(e, 'pride')} noValidate>
                
                {/* SECTION 1: COORDINATOR DETAILS */}
                <div style={styles.formCardSection}>
                  <div style={styles.sectionHeaderRow}>
                    <div style={{ ...styles.sectionHeaderIconCircle, background: '#fef3c7' }}>
                      <User size={22} color="#d97706" />
                    </div>
                    <div>
                      <h3 style={styles.sectionHeaderTitle}>Coordinator Details</h3>
                      <p style={styles.sectionHeaderSub}>Provide details of the person coordinating this nomination.</p>
                    </div>
                  </div>

                  <div style={styles.grid4Col}>
                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>Coordinator Name <span style={styles.reqStar}>*</span></label>
                      <input 
                        type="text" 
                        style={{
                          ...styles.textInput,
                          ...(formErrors.coordName ? styles.inputError : {})
                        }}
                        value={coordinator.name}
                        onChange={(e) => {
                          setCoordinator({ ...coordinator, name: e.target.value });
                          clearFormError('coordName');
                        }}
                        placeholder="Enter coordinator name"
                      />
                      {formErrors.coordName && (
                        <span style={styles.fieldErrorText}>{formErrors.coordName}</span>
                      )}
                    </div>

                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>Designation <span style={styles.reqStar}>*</span></label>
                      <input 
                        type="text" 
                        style={{
                          ...styles.textInput,
                          ...(formErrors.coordDesignation ? styles.inputError : {})
                        }}
                        value={coordinator.designation}
                        onChange={(e) => {
                          setCoordinator({ ...coordinator, designation: e.target.value });
                          clearFormError('coordDesignation');
                        }}
                        placeholder="Enter designation"
                      />
                      {formErrors.coordDesignation && (
                        <span style={styles.fieldErrorText}>{formErrors.coordDesignation}</span>
                      )}
                    </div>

                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>Mobile Number <span style={styles.reqStar}>*</span></label>
                      <input 
                        type="tel" 
                        style={{
                          ...styles.textInput,
                          ...(formErrors.coordMobile ? styles.inputError : {})
                        }}
                        value={coordinator.mobile}
                        onChange={(e) => {
                          setCoordinator({ ...coordinator, mobile: e.target.value });
                          clearFormError('coordMobile');
                        }}
                        placeholder="Enter mobile number"
                      />
                      {formErrors.coordMobile && (
                        <span style={styles.fieldErrorText}>{formErrors.coordMobile}</span>
                      )}
                    </div>

                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>Email ID <span style={styles.reqStar}>*</span></label>
                      <input 
                        type="email" 
                        style={{
                          ...styles.textInput,
                          ...(formErrors.coordEmail ? styles.inputError : {})
                        }}
                        value={coordinator.email}
                        onChange={(e) => {
                          setCoordinator({ ...coordinator, email: e.target.value });
                          clearFormError('coordEmail');
                        }}
                        placeholder="Enter email address"
                      />
                      {formErrors.coordEmail && (
                        <span style={styles.fieldErrorText}>{formErrors.coordEmail}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* SECTION 2: STUDENT NOMINATION */}
                <div style={styles.formCardSection}>
                  <div style={styles.sectionHeaderRowBetween}>
                    <div style={styles.sectionHeaderRow}>
                      <div style={{ ...styles.sectionHeaderIconCircle, background: '#fef3c7' }}>
                        <Trophy size={22} color="#d97706" />
                      </div>
                      <div>
                        <h3 style={styles.sectionHeaderTitle}>Student Nomination Details</h3>
                        <p style={styles.sectionHeaderSub}>Nominate students from Grade 3 to 8 for the Technik Pride Award.</p>
                      </div>
                    </div>

                    <div style={styles.levelGroupSelector}>
                      <span style={styles.levelSelectorLabel}>Class Category:</span>
                      <button 
                        type="button"
                        style={{
                          ...styles.levelBtn,
                          ...(selectedLevelFilter === 'junior' ? styles.levelBtnActiveGreen : {})
                        }}
                        onClick={() => {
                          setSelectedLevelFilter('junior');
                          studentList.forEach(s => {
                            if (!['Grade 3', 'Grade 4', 'Grade 5'].includes(s.studentClass)) {
                              handleStudentChange(s.id, 'studentClass', 'Grade 4');
                            }
                          });
                        }}
                      >
                        Grade 3 to 5 (Jr Level)
                      </button>

                      <button 
                        type="button"
                        style={{
                          ...styles.levelBtn,
                          ...(selectedLevelFilter === 'senior' ? styles.levelBtnActiveBlue : {})
                        }}
                        onClick={() => {
                          setSelectedLevelFilter('senior');
                          studentList.forEach(s => {
                            if (!['Grade 6', 'Grade 7', 'Grade 8'].includes(s.studentClass)) {
                              handleStudentChange(s.id, 'studentClass', 'Grade 7');
                            }
                          });
                        }}
                      >
                        Grade 6 to 8 (Senior Level)
                      </button>
                    </div>
                  </div>

                  {/* DYNAMIC STUDENT CARDS LIST */}
                  <div style={styles.studentCardsList}>
                    {studentList.map((student, index) => (
                      <div key={student.id} style={styles.studentEntryCard}>
                        
                        <div style={styles.studentEntryHeader}>
                          <h4 style={styles.studentEntryTitleGold}>Student {index + 1}</h4>
                          {studentList.length > 1 && (
                            <button 
                              type="button"
                              onClick={() => handleRemoveStudent(student.id)}
                              style={styles.removeStudentBtn}
                            >
                              <Trash2 size={14} />
                              <span>Remove</span>
                            </button>
                          )}
                        </div>

                        <div style={styles.grid4Col}>
                          <div style={styles.fieldCol}>
                            <label style={styles.fieldLabel}>Student Name <span style={styles.reqStar}>*</span></label>
                            <input 
                              type="text" 
                              placeholder="Enter student name"
                              style={{
                                ...styles.textInput,
                                ...(formErrors[`student_name_${student.id}`] ? styles.inputError : {})
                              }}
                              value={student.name}
                              onChange={(e) => {
                                handleStudentChange(student.id, 'name', e.target.value);
                                clearFormError(`student_name_${student.id}`);
                              }}
                            />
                            {formErrors[`student_name_${student.id}`] && (
                              <span style={styles.fieldErrorText}>{formErrors[`student_name_${student.id}`]}</span>
                            )}
                          </div>

                          <div style={styles.fieldCol}>
                            <label style={styles.fieldLabel}>Class <span style={styles.reqStar}>*</span></label>
                            <select 
                              style={styles.selectInput}
                              value={student.studentClass}
                              onChange={(e) => handleStudentChange(student.id, 'studentClass', e.target.value)}
                            >
                              {selectedLevelFilter === 'junior' ? (
                                <>
                                  <option value="Grade 3">Grade 3 (Class III)</option>
                                  <option value="Grade 4">Grade 4 (Class IV)</option>
                                  <option value="Grade 5">Grade 5 (Class V)</option>
                                </>
                              ) : (
                                <>
                                  <option value="Grade 6">Grade 6 (Class VI)</option>
                                  <option value="Grade 7">Grade 7 (Class VII)</option>
                                  <option value="Grade 8">Grade 8 (Class VIII)</option>
                                </>
                              )}
                            </select>
                          </div>

                          <div style={styles.fieldCol}>
                            <label style={styles.fieldLabel}>Gender <span style={styles.reqStar}>*</span></label>
                            <select 
                              style={{
                                ...styles.selectInput,
                                ...(formErrors[`student_gender_${student.id}`] ? styles.inputError : {})
                              }}
                              value={student.gender}
                              onChange={(e) => {
                                handleStudentChange(student.id, 'gender', e.target.value);
                                clearFormError(`student_gender_${student.id}`);
                              }}
                            >
                              <option value="Select Gender">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                            {formErrors[`student_gender_${student.id}`] && (
                              <span style={styles.fieldErrorText}>{formErrors[`student_gender_${student.id}`]}</span>
                            )}
                          </div>

                          <div style={styles.fieldCol}>
                            <label style={styles.fieldLabel}>Achievement Category <span style={styles.reqStar}>*</span></label>
                            <select 
                              style={styles.selectInput}
                              value={student.category}
                              onChange={(e) => handleStudentChange(student.id, 'category', e.target.value)}
                            >
                              <option value="Technik Pride Award">Technik Pride Award - Academic &amp; Innovation</option>
                              <option value="Robotics Pride Award">Robotics &amp; STEM Innovation</option>
                              <option value="Coding Pride Award">Coding &amp; Algorithmic Excellence</option>
                              <option value="Leadership Pride Award">Young Leadership &amp; Social Impact</option>
                            </select>
                          </div>
                        </div>

                        <div style={styles.grid3Col}>
                          <div style={styles.fieldCol}>
                            <label style={styles.fieldLabel}>Achievement / Talent Title <span style={styles.reqStar}>*</span></label>
                            <input 
                              type="text" 
                              placeholder="Enter achievement title"
                              style={{
                                ...styles.textInput,
                                ...(formErrors[`student_ach_${student.id}`] ? styles.inputError : {})
                              }}
                              value={student.achievementTitle}
                              onChange={(e) => {
                                handleStudentChange(student.id, 'achievementTitle', e.target.value);
                                clearFormError(`student_ach_${student.id}`);
                              }}
                            />
                            {formErrors[`student_ach_${student.id}`] && (
                              <span style={styles.fieldErrorText}>{formErrors[`student_ach_${student.id}`]}</span>
                            )}
                          </div>

                          <div style={styles.fieldCol}>
                            <label style={styles.fieldLabel}>Brief Description <span style={styles.reqStar}>*</span></label>
                            <textarea 
                              placeholder="Describe the achievement (Max 300 characters)"
                              style={{
                                ...styles.textAreaInput,
                                ...(formErrors[`student_desc_${student.id}`] ? styles.inputError : {})
                              }}
                              value={student.description}
                              onChange={(e) => {
                                handleStudentChange(student.id, 'description', e.target.value);
                                clearFormError(`student_desc_${student.id}`);
                              }}
                              maxLength={300}
                            />
                            {formErrors[`student_desc_${student.id}`] && (
                              <span style={styles.fieldErrorText}>{formErrors[`student_desc_${student.id}`]}</span>
                            )}
                          </div>

                          <div style={styles.fieldCol}>
                            <label style={styles.fieldLabel}>Supporting Document / Photo</label>
                            <div style={styles.fileUploadBox}>
                              <input 
                                type="file" 
                                id={`file-${student.id}`} 
                                style={{ display: 'none' }}
                                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                                onChange={(e) => {
                                  if (e.target.files && e.target.files[0]) {
                                    handleFileUpload(student.id, e.target.files[0]);
                                  }
                                }}
                              />
                              <label htmlFor={`file-${student.id}`} style={styles.fileChooseBtn}>
                                {student.uploading ? <Loader2 size={13} className="spin" /> : <Upload size={13} />}
                                <span>{student.uploading ? 'Uploading...' : 'Choose File'}</span>
                              </label>
                              <span style={styles.fileNameDisplay}>
                                {student.fileName || 'No file chosen'}
                              </span>
                            </div>
                            <span style={styles.fileHelpText}>Upload certificate/photo (JPG, PNG, PDF | Max 5 MB)</span>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>

                  <div style={styles.addBtnRow}>
                    <button 
                      type="button" 
                      onClick={handleAddStudent}
                      disabled={
                        (selectedLevelFilter === 'junior' && jrPrideCount + studentList.filter(s => isJuniorGrade(s.studentClass)).length >= 3) ||
                        (selectedLevelFilter === 'senior' && srPrideCount + studentList.filter(s => !isJuniorGrade(s.studentClass)).length >= 3) ||
                        (totalPrideCount + studentList.length >= 6)
                      }
                      style={{
                        ...styles.addAnotherBtnGold,
                        ...((selectedLevelFilter === 'junior' && jrPrideCount + studentList.filter(s => isJuniorGrade(s.studentClass)).length >= 3) ||
                            (selectedLevelFilter === 'senior' && srPrideCount + studentList.filter(s => !isJuniorGrade(s.studentClass)).length >= 3) ||
                            (totalPrideCount + studentList.length >= 6) ? {
                          opacity: 0.6,
                          cursor: 'not-allowed',
                          background: '#f1f5f9',
                          color: '#64748b',
                          borderColor: '#cbd5e1'
                        } : {})
                      }}
                    >
                      <PlusCircle size={18} />
                      <span>
                        {(selectedLevelFilter === 'junior' && jrPrideCount + studentList.filter(s => isJuniorGrade(s.studentClass)).length >= 3)
                          ? 'MAX QUOTA REACHED FOR JUNIOR LEVEL (3/3 STUDENTS)'
                          : (selectedLevelFilter === 'senior' && srPrideCount + studentList.filter(s => !isJuniorGrade(s.studentClass)).length >= 3)
                          ? 'MAX QUOTA REACHED FOR SENIOR LEVEL (3/3 STUDENTS)'
                          : '+ ADD ANOTHER STUDENT'
                        }
                      </span>
                    </button>
                  </div>
                </div>

                {/* SECTION 3: DECLARATION */}
                <div style={styles.formCardSection}>
                  <div style={styles.sectionHeaderRow}>
                    <div style={{ ...styles.sectionHeaderIconCircle, background: '#fef3c7' }}>
                      <ShieldCheck size={22} color="#d97706" />
                    </div>
                    <div>
                      <h3 style={styles.sectionHeaderTitle}>Declaration</h3>
                    </div>
                  </div>

                  <label style={styles.declarationCheckLabel}>
                    <input 
                      type="checkbox"
                      checked={declaration}
                      onChange={(e) => {
                        setDeclaration(e.target.checked);
                        clearFormError('declaration');
                      }}
                      style={styles.checkboxInput}
                    />
                    <span>
                      We hereby confirm that the information provided is true and correct. We have obtained the consent from the students and parents/guardians to nominate them for the Technik Pride Award.
                    </span>
                  </label>
                  {formErrors.declaration && (
                    <span style={styles.fieldErrorText}>{formErrors.declaration}</span>
                  )}
                </div>

                <div style={styles.formFooterRow}>
                  <button 
                    type="button"
                    onClick={() => setActiveTab('pride-nominated-list')}
                    style={styles.backBtn}
                  >
                    &larr; View Nominated Students List
                  </button>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      ...styles.submitReviewBtnGold,
                      ...(isSubmitting ? { opacity: 0.7, cursor: 'not-allowed' } : {})
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="spin" />
                        <span>Submitting Nominations...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Pride Award Nomination</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* OPTION 4: OLYMPIAD REGISTRATION VIEW                                      */}
      {/* ========================================================================= */}
      {activeTab === 'olympiad-reg' && (
        <section style={styles.sectionPadding}>
          <div className="container">
            
            {/* STEPPER PROGRESS BAR WITH TICK COMPLETION ANIMATION */}
            <div style={styles.stepperBar}>
              
              {/* Step 1: Coordinator Details */}
              <div style={{ ...styles.stepItem, opacity: 1 }}>
                <div style={{
                  ...styles.stepCircle,
                  background: isCoordStepComplete ? '#16a34a' : '#ea580c',
                  color: '#ffffff',
                  boxShadow: isCoordStepComplete ? '0 2px 8px rgba(22, 163, 74, 0.3)' : '0 2px 8px rgba(234, 88, 12, 0.3)'
                }}>
                  {isCoordStepComplete ? (
                    <Check size={18} strokeWidth={3} className="step-check-anim" />
                  ) : (
                    '1'
                  )}
                </div>
                <div>
                  <div style={styles.stepItemTitle}>Coordinator Details</div>
                  <div style={styles.stepItemSub}>Add contact person</div>
                </div>
              </div>

              <div style={{
                ...styles.stepDivider,
                background: isCoordStepComplete ? '#86efac' : '#e2e8f0'
              }} />

              {/* Step 2: Olympiad Registration */}
              <div style={{ ...styles.stepItem, opacity: 1 }}>
                <div style={{
                  ...styles.stepCircle,
                  background: isOlympiadStepComplete ? '#16a34a' : '#ea580c',
                  color: '#ffffff',
                  boxShadow: isOlympiadStepComplete ? '0 2px 8px rgba(22, 163, 74, 0.3)' : '0 2px 8px rgba(234, 88, 12, 0.3)'
                }}>
                  {isOlympiadStepComplete ? (
                    <Check size={18} strokeWidth={3} className="step-check-anim" />
                  ) : (
                    '2'
                  )}
                </div>
                <div>
                  <div style={styles.stepItemTitle}>Olympiad Registration</div>
                  <div style={styles.stepItemSub}>Register students for 8 tracks</div>
                </div>
              </div>

              <div style={{
                ...styles.stepDivider,
                background: isOlympiadStepComplete ? '#86efac' : '#e2e8f0'
              }} />

              {/* Step 3: Review & Submit */}
              <div style={{ ...styles.stepItem, opacity: 1 }}>
                <div style={{
                  ...styles.stepCircle,
                  background: isReviewStepComplete ? '#16a34a' : '#94a3b8',
                  color: '#ffffff',
                  boxShadow: isReviewStepComplete ? '0 2px 8px rgba(22, 163, 74, 0.3)' : 'none'
                }}>
                  {isReviewStepComplete ? (
                    <Check size={18} strokeWidth={3} className="step-check-anim" />
                  ) : (
                    '3'
                  )}
                </div>
                <div>
                  <div style={styles.stepItemTitle}>Review &amp; Submit</div>
                  <div style={styles.stepItemSub}>Confirm and submit</div>
                </div>
              </div>

            </div>

            {/* FORM CONTAINER CARD */}
            <div style={styles.mainFormCard}>
              
              {/* Header Box */}
              <div style={styles.formHeaderBoxOrange}>
                <BookOpen size={26} color="#ea580c" />
                <div>
                  <h2 style={styles.formBoxTitle}>Technik Olympiad Registration Form 2026</h2>
                  <p style={styles.formBoxSub}>Register students from Grade 3 to 8 across 8 STEM, Robotics &amp; AI Olympiad tracks.</p>
                </div>
              </div>

              {/* ERROR BANNER */}
              {submitError && (
                <div style={{
                  background: '#fef2f2',
                  border: '1px solid #f87171',
                  borderRadius: '12px',
                  padding: '0.9rem 1.25rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: '#991b1b'
                }}>
                  <AlertCircle size={20} color="#dc2626" />
                  <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{submitError}</span>
                </div>
              )}

              {/* SUCCESS TOAST BANNER */}
              {formSubmitted && lastSubmittedType === 'olympiad' && (
                <div style={styles.successBanner}>
                  <CheckCircle2 size={24} color="#16a34a" />
                  <div>
                    <h4 style={styles.successBannerTitle}>Olympiad Registration Submitted Successfully!</h4>
                    <p style={styles.successBannerSub}>
                      Students have been registered into {schoolProfile.schoolName} roster. Confirmation email sent to <strong>{coordinator.email}</strong>.
                    </p>
                  </div>
                  <button onClick={() => setActiveTab('roster')} style={styles.resetFormBtn}>
                    View Enrolled Students List &rarr;
                  </button>
                </div>
              )}

              <form onSubmit={(e) => handleSubmitForm(e, 'olympiad')} noValidate>
                
                {/* SECTION 1: COORDINATOR DETAILS */}
                <div style={styles.formCardSection}>
                  <div style={styles.sectionHeaderRow}>
                    <div style={{ ...styles.sectionHeaderIconCircle, background: '#ffedd5' }}>
                      <User size={22} color="#ea580c" />
                    </div>
                    <div>
                      <h3 style={styles.sectionHeaderTitle}>Coordinator Details</h3>
                      <p style={styles.sectionHeaderSub}>Provide details of the person coordinating this Olympiad registration.</p>
                    </div>
                  </div>

                  <div style={styles.grid4Col}>
                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>Coordinator Name <span style={styles.reqStar}>*</span></label>
                      <input 
                        type="text" 
                        style={{
                          ...styles.textInput,
                          ...(formErrors.coordName ? styles.inputError : {})
                        }}
                        value={coordinator.name}
                        onChange={(e) => {
                          setCoordinator({ ...coordinator, name: e.target.value });
                          clearFormError('coordName');
                        }}
                        placeholder="Enter coordinator name"
                      />
                      {formErrors.coordName && (
                        <span style={styles.fieldErrorText}>{formErrors.coordName}</span>
                      )}
                    </div>

                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>Designation <span style={styles.reqStar}>*</span></label>
                      <input 
                        type="text" 
                        style={{
                          ...styles.textInput,
                          ...(formErrors.coordDesignation ? styles.inputError : {})
                        }}
                        value={coordinator.designation}
                        onChange={(e) => {
                          setCoordinator({ ...coordinator, designation: e.target.value });
                          clearFormError('coordDesignation');
                        }}
                        placeholder="Enter designation"
                      />
                      {formErrors.coordDesignation && (
                        <span style={styles.fieldErrorText}>{formErrors.coordDesignation}</span>
                      )}
                    </div>

                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>Mobile Number <span style={styles.reqStar}>*</span></label>
                      <input 
                        type="tel" 
                        style={{
                          ...styles.textInput,
                          ...(formErrors.coordMobile ? styles.inputError : {})
                        }}
                        value={coordinator.mobile}
                        onChange={(e) => {
                          setCoordinator({ ...coordinator, mobile: e.target.value });
                          clearFormError('coordMobile');
                        }}
                        placeholder="Enter mobile number"
                      />
                      {formErrors.coordMobile && (
                        <span style={styles.fieldErrorText}>{formErrors.coordMobile}</span>
                      )}
                    </div>

                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>Email ID <span style={styles.reqStar}>*</span></label>
                      <input 
                        type="email" 
                        style={{
                          ...styles.textInput,
                          ...(formErrors.coordEmail ? styles.inputError : {})
                        }}
                        value={coordinator.email}
                        onChange={(e) => {
                          setCoordinator({ ...coordinator, email: e.target.value });
                          clearFormError('coordEmail');
                        }}
                        placeholder="Enter email address"
                      />
                      {formErrors.coordEmail && (
                        <span style={styles.fieldErrorText}>{formErrors.coordEmail}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* SECTION 2: STUDENT REGISTRATION & LEVEL SELECTION */}
                <div style={styles.formCardSection}>
                  <div style={styles.sectionHeaderRowBetween}>
                    <div style={styles.sectionHeaderRow}>
                      <div style={{ ...styles.sectionHeaderIconCircle, background: '#ffedd5' }}>
                        <Users size={22} color="#ea580c" />
                      </div>
                      <div>
                        <h3 style={styles.sectionHeaderTitle}>Student Registration Details</h3>
                        <p style={styles.sectionHeaderSub}>Add details of the students registering for Olympiad tracks.</p>
                      </div>
                    </div>

                    <div style={styles.levelGroupSelector}>
                      <span style={styles.levelSelectorLabel}>Class Category:</span>
                      <button 
                        type="button"
                        style={{
                          ...styles.levelBtn,
                          ...(selectedLevelFilter === 'junior' ? styles.levelBtnActiveGreen : {})
                        }}
                        onClick={() => {
                          setSelectedLevelFilter('junior');
                          studentList.forEach(s => {
                            if (!['Grade 3', 'Grade 4', 'Grade 5'].includes(s.studentClass)) {
                              handleStudentChange(s.id, 'studentClass', 'Grade 4');
                            }
                          });
                        }}
                      >
                        Grade 3 to 5 (Jr Level)
                      </button>

                      <button 
                        type="button"
                        style={{
                          ...styles.levelBtn,
                          ...(selectedLevelFilter === 'senior' ? styles.levelBtnActiveBlue : {})
                        }}
                        onClick={() => {
                          setSelectedLevelFilter('senior');
                          studentList.forEach(s => {
                            if (!['Grade 6', 'Grade 7', 'Grade 8'].includes(s.studentClass)) {
                              handleStudentChange(s.id, 'studentClass', 'Grade 7');
                            }
                          });
                        }}
                      >
                        Grade 6 to 8 (Senior Level)
                      </button>
                    </div>
                  </div>

                  {/* DYNAMIC STUDENT CARDS LIST */}
                  <div style={styles.studentCardsList}>
                    {studentList.map((student, index) => (
                      <div key={student.id} style={styles.studentEntryCard}>
                        
                        <div style={styles.studentEntryHeader}>
                          <h4 style={styles.studentEntryTitleOrange}>Student {index + 1}</h4>
                          {studentList.length > 1 && (
                            <button 
                              type="button"
                              onClick={() => handleRemoveStudent(student.id)}
                              style={styles.removeStudentBtn}
                            >
                              <Trash2 size={14} />
                              <span>Remove</span>
                            </button>
                          )}
                        </div>

                        <div style={styles.grid4Col}>
                          <div style={styles.fieldCol}>
                            <label style={styles.fieldLabel}>Student Name <span style={styles.reqStar}>*</span></label>
                            <input 
                              type="text" 
                              placeholder="Enter student name"
                              style={{
                                ...styles.textInput,
                                ...(formErrors[`student_name_${student.id}`] ? styles.inputError : {})
                              }}
                              value={student.name}
                              onChange={(e) => {
                                handleStudentChange(student.id, 'name', e.target.value);
                                clearFormError(`student_name_${student.id}`);
                              }}
                            />
                            {formErrors[`student_name_${student.id}`] && (
                              <span style={styles.fieldErrorText}>{formErrors[`student_name_${student.id}`]}</span>
                            )}
                          </div>

                          <div style={styles.fieldCol}>
                            <label style={styles.fieldLabel}>Class <span style={styles.reqStar}>*</span></label>
                            <select 
                              style={styles.selectInput}
                              value={student.studentClass}
                              onChange={(e) => handleStudentChange(student.id, 'studentClass', e.target.value)}
                            >
                              {selectedLevelFilter === 'junior' ? (
                                <>
                                  <option value="Grade 3">Grade 3 (Class III)</option>
                                  <option value="Grade 4">Grade 4 (Class IV)</option>
                                  <option value="Grade 5">Grade 5 (Class V)</option>
                                </>
                              ) : (
                                <>
                                  <option value="Grade 6">Grade 6 (Class VI)</option>
                                  <option value="Grade 7">Grade 7 (Class VII)</option>
                                  <option value="Grade 8">Grade 8 (Class VIII)</option>
                                </>
                              )}
                            </select>
                          </div>

                          <div style={styles.fieldCol}>
                            <label style={styles.fieldLabel}>Gender <span style={styles.reqStar}>*</span></label>
                            <select 
                              style={{
                                ...styles.selectInput,
                                ...(formErrors[`student_gender_${student.id}`] ? styles.inputError : {})
                              }}
                              value={student.gender}
                              onChange={(e) => {
                                handleStudentChange(student.id, 'gender', e.target.value);
                                clearFormError(`student_gender_${student.id}`);
                              }}
                            >
                              <option value="Select Gender">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                            {formErrors[`student_gender_${student.id}`] && (
                              <span style={styles.fieldErrorText}>{formErrors[`student_gender_${student.id}`]}</span>
                            )}
                          </div>

                          <div style={styles.fieldCol}>
                            <label style={styles.fieldLabel}>Olympiad Track <span style={styles.reqStar}>*</span></label>
                            <select 
                              style={styles.selectInput}
                              value={student.category}
                              onChange={(e) => handleStudentChange(student.id, 'category', e.target.value)}
                            >
                              <option value="Robotics Olympiad">Robotics Olympiad</option>
                              <option value="Coding Olympiad">Coding Olympiad</option>
                              <option value="AI Olympiad">AI Olympiad</option>
                              <option value="English Olympiad">English Olympiad</option>
                              <option value="Art Olympiad">Art Olympiad</option>
                              <option value="Speaking Olympiad">Speaking Olympiad</option>
                              <option value="Abacus Olympiad">Abacus Olympiad</option>
                              <option value="Mental Maths Olympiad">Mental Maths Olympiad</option>
                            </select>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>

                  <div style={styles.addBtnRow}>
                    <button 
                      type="button" 
                      onClick={handleAddStudent}
                      style={styles.addAnotherBtnOrange}
                    >
                      <PlusCircle size={18} />
                      <span>+ ADD ANOTHER STUDENT</span>
                    </button>
                  </div>
                </div>

                {/* SECTION 3: DECLARATION */}
                <div style={styles.formCardSection}>
                  <div style={styles.sectionHeaderRow}>
                    <div style={{ ...styles.sectionHeaderIconCircle, background: '#ffedd5' }}>
                      <ShieldCheck size={22} color="#ea580c" />
                    </div>
                    <div>
                      <h3 style={styles.sectionHeaderTitle}>Declaration</h3>
                    </div>
                  </div>

                  <label style={styles.declarationCheckLabel}>
                    <input 
                      type="checkbox"
                      checked={declaration}
                      onChange={(e) => {
                        setDeclaration(e.target.checked);
                        clearFormError('declaration');
                      }}
                      style={styles.checkboxInput}
                    />
                    <span>
                      We hereby confirm that the information provided is true and correct. We have obtained the consent from the students and parents/guardians to register them for the Technik Olympiad.
                    </span>
                  </label>
                  {formErrors.declaration && (
                    <span style={styles.fieldErrorText}>{formErrors.declaration}</span>
                  )}
                </div>

                <div style={styles.formFooterRow}>
                  <button 
                    type="button"
                    onClick={() => setActiveTab('roster')}
                    style={styles.backBtn}
                  >
                    &larr; Back to Students List
                  </button>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      ...styles.submitReviewBtnOrange,
                      ...(isSubmitting ? { opacity: 0.7, cursor: 'not-allowed' } : {})
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="spin" />
                        <span>Submitting Registrations...</span>
                      </>
                    ) : (
                      <>
                        <span>Register Students for Olympiad</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>

          </div>
        </section>
      )}

    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#f8fafc',
    color: '#0f172a',
    paddingBottom: '2.5rem',
  },
  sectionPadding: {
    padding: '2rem 0',
  },

  /* HERO BANNER & PORTAL NAV HEADER */
  heroSection: {
    position: 'relative',
    background: 'linear-gradient(135deg, #041026 0%, #0c2045 100%)',
    color: '#ffffff',
    padding: '1.5rem 0 2rem 0',
  },
  heroContainer: {
    position: 'relative',
    zIndex: 2,
  },
  breadcrumbRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.8rem',
    marginBottom: '0.85rem',
  },
  breadcrumbLink: {
    color: '#94a3b8',
    textDecoration: 'none',
    fontWeight: 500,
  },
  breadcrumbSep: {
    color: '#64748b',
    fontSize: '0.75rem',
  },
  breadcrumbCurrent: {
    color: '#ffffff',
    fontWeight: 600,
  },

  portalHeaderBox: {
    background: 'rgba(255, 255, 255, 0.06)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '16px',
    padding: '1.25rem 1.5rem',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.25rem',
    marginBottom: '1.25rem',
  },
  schoolTitleGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  schoolIconCircleLg: {
    width: '54px',
    height: '54px',
    borderRadius: '14px',
    background: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 14px rgba(29, 78, 216, 0.3)',
    flexShrink: 0,
  },
  portalBadgeRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    marginBottom: '0.3rem',
  },
  schoolCodePill: {
    fontSize: '0.72rem',
    fontWeight: 800,
    background: 'rgba(255, 255, 255, 0.15)',
    color: '#cbd5e1',
    padding: '0.15rem 0.5rem',
    borderRadius: '4px',
  },
  schoolPortalName: {
    fontSize: '1.75rem',
    fontWeight: 900,
    color: '#ffffff',
    fontFamily: 'var(--font-heading)',
    lineHeight: '1.15',
    marginBottom: '0.2rem',
  },
  schoolPortalSub: {
    fontSize: '0.82rem',
    color: '#cbd5e1',
  },

  portalMetricsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  metricPill: {
    background: 'rgba(4, 16, 38, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    borderRadius: '30px',
    padding: '0.4rem 0.85rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.45rem',
    fontSize: '0.78rem',
    color: '#ffffff',
  },

  /* TAB NAVIGATION ROW */
  tabNavRow: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  tabNavBtn: {
    background: 'rgba(255, 255, 255, 0.08)',
    color: '#cbd5e1',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '0.65rem 1.25rem',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '0.84rem',
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.2s ease',
  },
  tabNavBtnActiveBlue: {
    background: '#38bdf8',
    color: '#041026',
    borderColor: '#38bdf8',
    boxShadow: '0 4px 14px rgba(56, 189, 248, 0.35)',
  },
  tabNavBtnActiveGold: {
    background: '#fbbf24',
    color: '#041026',
    borderColor: '#fbbf24',
    boxShadow: '0 4px 14px rgba(251, 191, 36, 0.35)',
  },
  tabNavBtnActiveOrange: {
    background: '#ea580c',
    color: '#ffffff',
    borderColor: '#ea580c',
    boxShadow: '0 4px 14px rgba(234, 88, 12, 0.35)',
  },

  /* STEPPER PROGRESS BAR */
  stepperBar: {
    background: '#ffffff',
    borderRadius: '14px',
    padding: '1rem 1.5rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 3px 12px rgba(0,0,0,0.025)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '1.25rem',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  stepItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  stepCircle: {
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    fontSize: '0.9rem',
    fontFamily: 'var(--font-heading)',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  stepItemTitle: {
    fontSize: '0.88rem',
    fontWeight: 700,
    color: '#0f172a',
    fontFamily: 'var(--font-heading)',
  },
  stepItemSub: {
    fontSize: '0.75rem',
    color: '#64748b',
  },
  stepDivider: {
    width: '60px',
    height: '2px',
    background: '#e2e8f0',
    transition: 'background 0.3s ease',
  },

  /* ROSTER TABLE CARD */
  rosterCardWrapper: {
    background: '#ffffff',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    padding: '1.75rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
  },
  rosterHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  rosterTitle: {
    fontSize: '1.35rem',
    fontWeight: 800,
    color: '#0f172a',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.2rem',
  },
  rosterSub: {
    fontSize: '0.85rem',
    color: '#64748b',
  },
  actionBtnOrange: {
    background: '#ea580c',
    color: '#ffffff',
    border: 'none',
    padding: '0.55rem 1.1rem',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '0.82rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.45rem',
    boxShadow: '0 4px 12px rgba(234, 88, 12, 0.25)',
  },
  actionBtnGold: {
    background: '#f59e0b',
    color: '#041026',
    border: 'none',
    padding: '0.55rem 1.1rem',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '0.82rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.45rem',
    boxShadow: '0 4px 12px rgba(245, 158, 11, 0.25)',
  },

  /* CONTROLS: SEARCH & FILTER */
  rosterControlRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '1.25rem',
    background: '#f8fafc',
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
  },
  rosterSearchBox: {
    display: 'flex',
    alignItems: 'center',
    background: '#ffffff',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    padding: '0.45rem 0.85rem',
    flex: '1',
    minWidth: '240px',
    maxWidth: '400px',
  },
  rosterSearchInput: {
    border: 'none',
    outline: 'none',
    fontSize: '0.84rem',
    color: '#0f172a',
    width: '100%',
  },
  rosterFilterGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  filterLabel: {
    fontSize: '0.8rem',
    fontWeight: 700,
    color: '#64748b',
  },
  selectFilter: {
    padding: '0.4rem 0.75rem',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    background: '#ffffff',
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#0f172a',
    outline: 'none',
  },

  /* TABLE STYLES */
  tableResponsive: {
    overflowX: 'auto',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
  },
  rosterTable: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
  },
  tableHeaderRow: {
    background: '#f1f5f9',
    borderBottom: '1px solid #e2e8f0',
  },
  thCell: {
    padding: '0.85rem 1rem',
    fontSize: '0.76rem',
    fontWeight: 800,
    color: '#475569',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    fontFamily: 'var(--font-heading)',
  },
  tableBodyRow: {
    borderBottom: '1px solid #f1f5f9',
    transition: 'background 0.15s ease',
  },
  tdCell: {
    padding: '0.85rem 1rem',
    fontSize: '0.84rem',
    color: '#334155',
    verticalAlign: 'middle',
  },
  tdCellBold: {
    padding: '0.85rem 1rem',
    fontSize: '0.84rem',
    color: '#0f172a',
    verticalAlign: 'middle',
  },
  avatarCircle: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: '#041026',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    fontSize: '0.82rem',
    flexShrink: 0,
  },
  trackBadgeBlue: {
    display: 'inline-block',
    padding: '0.25rem 0.65rem',
    borderRadius: '6px',
    fontSize: '0.78rem',
    fontWeight: 700,
    background: '#e0f2fe',
    color: '#0284c7',
  },
  trackBadgeGold: {
    display: 'inline-block',
    padding: '0.25rem 0.65rem',
    borderRadius: '6px',
    fontSize: '0.78rem',
    fontWeight: 700,
    background: '#fef3c7',
    color: '#b45309',
  },
  rosterStatusTag: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.25rem 0.65rem',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: 700,
  },
  tableActionBtn: {
    background: '#f8fafc',
    border: '1px solid #cbd5e1',
    color: '#0284c7',
    padding: '0.35rem 0.75rem',
    borderRadius: '6px',
    fontSize: '0.78rem',
    fontWeight: 700,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    transition: 'all 0.2s',
  },

  /* MAIN FORM CARD */
  mainFormCard: {
    background: '#ffffff',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    padding: '2rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
    marginBottom: '2rem',
  },
  formHeaderBoxGold: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    background: '#fffbeb',
    border: '1px solid #fef08a',
    padding: '1rem 1.25rem',
    borderRadius: '12px',
    marginBottom: '1.5rem',
  },
  formHeaderBoxOrange: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    background: '#fff7ed',
    border: '1px solid #ffedd5',
    padding: '1rem 1.25rem',
    borderRadius: '12px',
    marginBottom: '1.5rem',
  },
  formBoxTitle: {
    fontSize: '1.25rem',
    fontWeight: 800,
    color: '#0f172a',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.15rem',
  },
  formBoxSub: {
    fontSize: '0.85rem',
    color: '#64748b',
  },

  /* SUCCESS BANNER */
  successBanner: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    background: '#f0fdf4',
    border: '1px solid #bbf7d0',
    padding: '1rem 1.25rem',
    borderRadius: '12px',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
  },
  successBannerTitle: {
    fontSize: '0.95rem',
    fontWeight: 800,
    color: '#166534',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.15rem',
  },
  successBannerSub: {
    fontSize: '0.82rem',
    color: '#15803d',
  },
  resetFormBtn: {
    marginLeft: 'auto',
    background: '#16a34a',
    color: '#ffffff',
    border: 'none',
    padding: '0.45rem 0.9rem',
    borderRadius: '6px',
    fontSize: '0.78rem',
    fontWeight: 700,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },

  formCardSection: {
    marginBottom: '1.75rem',
    paddingBottom: '1.5rem',
    borderBottom: '1px solid #f1f5f9',
  },
  sectionHeaderRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
    marginBottom: '1.25rem',
  },
  sectionHeaderRowBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '1.25rem',
  },
  sectionHeaderIconCircle: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    background: '#e0f2fe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeaderTitle: {
    fontSize: '1.15rem',
    fontWeight: 800,
    color: '#0f172a',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.15rem',
  },
  sectionHeaderSub: {
    fontSize: '0.82rem',
    color: '#64748b',
  },

  /* LEVEL SELECTOR BUTTONS */
  levelGroupSelector: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: '#f8fafc',
    padding: '0.35rem',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
  },
  levelSelectorLabel: {
    fontSize: '0.78rem',
    fontWeight: 700,
    color: '#64748b',
    paddingLeft: '0.35rem',
  },
  levelBtn: {
    background: 'transparent',
    border: 'none',
    padding: '0.35rem 0.75rem',
    borderRadius: '6px',
    fontSize: '0.78rem',
    fontWeight: 700,
    color: '#64748b',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  levelBtnActiveGreen: {
    background: '#16a34a',
    color: '#ffffff',
    boxShadow: '0 2px 8px rgba(22, 163, 74, 0.25)',
  },
  levelBtnActiveBlue: {
    background: '#2563eb',
    color: '#ffffff',
    boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)',
  },

  /* FORM INPUT GRIDS */
  grid4Col: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.25rem',
  },
  grid3Col: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr 1fr',
    gap: '1.25rem',
    marginTop: '1rem',
  },
  fieldCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  fieldLabel: {
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#1e293b',
    fontFamily: 'var(--font-heading)',
  },
  reqStar: {
    color: '#ef4444',
  },
  textInput: {
    padding: '0.65rem 0.85rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '0.88rem',
    color: '#0f172a',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  },
  selectInput: {
    padding: '0.65rem 0.85rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '0.88rem',
    color: '#0f172a',
    outline: 'none',
    background: '#ffffff',
    width: '100%',
    boxSizing: 'border-box',
  },
  textAreaInput: {
    padding: '0.65rem 0.85rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '0.85rem',
    color: '#0f172a',
    outline: 'none',
    minHeight: '75px',
    resize: 'vertical',
    fontFamily: 'inherit',
    width: '100%',
    boxSizing: 'border-box',
  },
  inputError: {
    borderColor: '#ef4444 !important',
    background: '#fef2f2 !important',
    boxShadow: '0 0 0 3px rgba(239, 68, 68, 0.12)'
  },
  fieldErrorText: {
    color: '#dc2626',
    fontSize: '0.75rem',
    fontWeight: 600,
    marginTop: '0.2rem',
    display: 'block'
  },

  /* STUDENT ENTRY CARDS */
  studentCardsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  studentEntryCard: {
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '1.25rem',
  },
  studentEntryHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  studentEntryTitleGold: {
    fontSize: '1rem',
    fontWeight: 800,
    color: '#d97706',
    fontFamily: 'var(--font-heading)',
  },
  studentEntryTitleOrange: {
    fontSize: '1rem',
    fontWeight: 800,
    color: '#ea580c',
    fontFamily: 'var(--font-heading)',
  },
  removeStudentBtn: {
    background: 'transparent',
    border: 'none',
    color: '#ef4444',
    fontSize: '0.8rem',
    fontWeight: 700,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
  },

  fileUploadBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    padding: '0.35rem 0.5rem',
    background: '#ffffff',
  },
  fileChooseBtn: {
    background: '#f1f5f9',
    border: '1px solid #cbd5e1',
    padding: '0.35rem 0.75rem',
    borderRadius: '6px',
    fontSize: '0.78rem',
    fontWeight: 700,
    color: '#334155',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  fileNameDisplay: {
    fontSize: '0.78rem',
    color: '#64748b',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  fileHelpText: {
    fontSize: '0.72rem',
    color: '#94a3b8',
    marginTop: '0.2rem',
  },

  addBtnRow: {
    marginTop: '1.25rem',
  },
  addAnotherBtnGold: {
    width: '100%',
    padding: '0.85rem',
    borderRadius: '10px',
    border: '2px dashed #d97706',
    background: '#fffbeb',
    color: '#d97706',
    fontWeight: 800,
    fontSize: '0.88rem',
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  },
  addAnotherBtnOrange: {
    width: '100%',
    padding: '0.85rem',
    borderRadius: '10px',
    border: '2px dashed #ea580c',
    background: '#fff7ed',
    color: '#ea580c',
    fontWeight: 800,
    fontSize: '0.88rem',
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  },

  declarationCheckLabel: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    fontSize: '0.88rem',
    color: '#334155',
    lineHeight: '1.5',
    cursor: 'pointer',
  },
  checkboxInput: {
    marginTop: '0.2rem',
    width: '18px',
    height: '18px',
    accentColor: '#041026',
  },

  formFooterRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1.5rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  backBtn: {
    background: '#ffffff',
    color: '#475569',
    border: '1px solid #cbd5e1',
    padding: '0.75rem 1.25rem',
    borderRadius: '8px',
    fontWeight: 700,
    fontSize: '0.85rem',
    cursor: 'pointer',
  },
  submitReviewBtnGold: {
    background: '#d97706',
    color: '#ffffff',
    border: 'none',
    padding: '0.75rem 1.75rem',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '0.9rem',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 14px rgba(217, 119, 6, 0.3)',
    transition: 'all 0.2s ease',
  },
  submitReviewBtnOrange: {
    background: '#ea580c',
    color: '#ffffff',
    border: 'none',
    padding: '0.75rem 1.75rem',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '0.9rem',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 14px rgba(234, 88, 12, 0.3)',
    transition: 'all 0.2s ease',
  },
};
