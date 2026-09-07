import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  School, 
  Users, 
  Trophy, 
  MapPin, 
  Search, 
  PlusCircle, 
  CheckCircle2, 
  Building, 
  BookOpen, 
  Award, 
  Bot, 
  Code, 
  Cpu, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  UserCheck, 
  X, 
  Trash2, 
  Upload, 
  User, 
  GraduationCap, 
  ArrowRight, 
  FileCheck,
  Download,
  Filter,
  LogOut
} from 'lucide-react';

export default function Schools() {
  const navigate = useNavigate();

  // Auth Guard: Ensure school is authenticated before viewing dashboard
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('technik_school_authenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('technik_school_authenticated');
    sessionStorage.removeItem('technik_school_auth_pending');
    navigate('/login');
  };
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  const [activeModalSchool, setActiveModalSchool] = useState(null);
  
  // Portal Main Active Tab: 'roster' (Students List) | 'nominate-pride' | 'olympiad-reg' | 'directory'
  const [activeTab, setActiveTab] = useState('roster'); 

  // Level Selection State for Form: 'junior' (Grade 3-5) vs 'senior' (Grade 6-8)
  const [selectedLevelFilter, setSelectedLevelFilter] = useState('junior');

  // Form Type Mode: 'olympiad' vs 'pride'
  const [formType, setFormType] = useState('olympiad'); 

  // Roster Filter State
  const [rosterSearch, setRosterSearch] = useState('');
  const [rosterGradeFilter, setRosterGradeFilter] = useState('All');
  const [rosterYearFilter, setRosterYearFilter] = useState('All');

  // Coordinator Details State
  const [coordinator, setCoordinator] = useState({
    name: 'Prof. S. Meenakshi',
    designation: 'STEM & Olympiad Coordinator',
    mobile: '+91 95004 28800',
    email: 'coordinator@stxaviers.edu.in'
  });

  // Dynamic Student Nomination List State
  const [studentList, setStudentList] = useState([
    {
      id: 1,
      name: '',
      studentClass: 'Grade 4',
      gender: 'Select Gender',
      category: 'Robotics Olympiad',
      achievementTitle: '',
      description: '',
      fileName: ''
    }
  ]);

  // Form Declaration Checkbox State
  const [declaration, setDeclaration] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lastSubmittedType, setLastSubmittedType] = useState('');

  // Live Enrolled Students Roster
  const [submittedRoster, setSubmittedRoster] = useState([
    { id: 1, name: 'Aarav Sharma', grade: 'Grade 4 (Jr Level)', track: 'Robotics Olympiad', date: '02 Sep 2026', status: 'Registered & Verified' },
    { id: 2, name: 'Kavya Raman', grade: 'Grade 7 (Sr Level)', track: 'Coding & Algorithms', date: '03 Sep 2026', status: 'Registered & Verified' },
    { id: 3, name: 'Rohan Gupta', grade: 'Grade 5 (Jr Level)', track: 'Technik Pride Award', date: '04 Sep 2026', status: 'Nomination Received' },
    { id: 4, name: 'Diya Patel', grade: 'Grade 8 (Sr Level)', track: 'AI & Machine Learning', date: '04 Sep 2026', status: 'Registered & Verified' },
    { id: 5, name: 'Siddharth M.', grade: 'Grade 3 (Jr Level)', track: 'Mental Maths Olympiad', date: '05 Sep 2026', status: 'Registered & Verified' },
    { id: 6, name: 'Ananya Roy', grade: 'Grade 6 (Sr Level)', track: 'Technik Pride Award', date: '05 Sep 2026', status: 'Nomination Received' },
    { id: 7, name: 'Vikramaditya K.', grade: 'Grade 8 (Sr Level)', track: 'Technik Pride Award', date: '10 Nov 2025', status: 'Pride Award Winner' },
    { id: 8, name: 'Priya Sundaram', grade: 'Grade 5 (Jr Level)', track: 'Coding & Algorithms', date: '14 Oct 2025', status: 'Registered & Verified' },
    { id: 9, name: 'Aditya Narayan', grade: 'Grade 7 (Sr Level)', track: 'Robotics Olympiad', date: '08 Dec 2024', status: 'Registered & Verified' }
  ]);

  // Initial Sample Partner Schools Directory
  const [schoolsList, setSchoolsList] = useState([
    {
      id: 'SCH-101',
      name: 'St. Xavier International School',
      city: 'Chennai',
      state: 'Tamil Nadu',
      totalStudents: 420,
      verified: true,
      topTracks: ['Robotics', 'Coding & AI', 'Mental Maths'],
      students: [
        { name: 'Aarav Sharma', grade: 'Grade 4 (Jr Level)', track: 'Coding & Algorithms', stage: 'Stage 2 (District)' },
        { name: 'Kavya Raman', grade: 'Grade 7 (Sr Level)', track: 'Robotics Olympiad', stage: 'Stage 3 (State)' },
        { name: 'Rohan Gupta', grade: 'Grade 5 (Jr Level)', track: 'Mental Maths', stage: 'Stage 1 (School)' },
        { name: 'Diya Patel', grade: 'Grade 8 (Sr Level)', track: 'Generative AI', stage: 'Stage 2 (District)' }
      ]
    },
    {
      id: 'SCH-102',
      name: 'St. Joseph Higher Secondary School',
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      totalStudents: 385,
      verified: true,
      topTracks: ['Mental Maths', 'English', 'Robotics'],
      students: [
        { name: 'Vihaan K.', grade: 'Grade 5 (Jr Level)', track: 'Mental Maths', stage: 'Stage 3 (State)' },
        { name: 'Sanjana Nair', grade: 'Grade 7 (Sr Level)', track: 'English Olympiad', stage: 'Stage 2 (District)' }
      ]
    },
    {
      id: 'SCH-103',
      name: 'Bharatiya Vidya Bhavan',
      city: 'Madurai',
      state: 'Tamil Nadu',
      totalStudents: 310,
      verified: true,
      topTracks: ['Coding', 'Technik Art', 'Generative AI'],
      students: [
        { name: 'Ananya R.', grade: 'Grade 7 (Sr Level)', track: 'Generative AI', stage: 'Stage 3 (State)' }
      ]
    }
  ]);

  // Add another student row dynamically
  const handleAddStudent = () => {
    if (formType === 'pride' || activeTab === 'nominate-pride') {
      const existingPrideCount = submittedRoster.filter(r => r.track.includes('Pride')).length;
      if (existingPrideCount + studentList.length >= 2) {
        alert("Annual Quota Limit Reached: Each partner school can nominate a maximum of 2 students per year for the Technik Pride Award.");
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
        fileName: ''
      }
    ]);
  };

  // Remove student row
  const handleRemoveStudent = (id) => {
    if (studentList.length === 1) return;
    setStudentList(studentList.filter(s => s.id !== id));
  };

  // Update specific student field
  const handleStudentChange = (id, field, value) => {
    setStudentList(studentList.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  // Form Submit Handler for both Pride Award & Olympiad Reg
  const handleSubmitForm = (e, currentType) => {
    e.preventDefault();
    if (!declaration) {
      alert("Please accept the declaration before submitting.");
      return;
    }

    const validStudents = studentList.filter(s => s.name.trim() !== '');
    if (validStudents.length === 0) {
      alert("Please enter at least one student name.");
      return;
    }

    if (currentType === 'pride') {
      const existingPrideCount = submittedRoster.filter(r => r.track.includes('Pride')).length;
      if (existingPrideCount + validStudents.length > 2) {
        alert(`Annual Quota Limit Exceeded: Each school can nominate a maximum of 2 students per year for the Technik Pride Award. You currently have ${existingPrideCount} registered nomination(s).`);
        return;
      }
    }

    const newEntries = validStudents.map((s, idx) => ({
      id: Date.now() + idx,
      name: s.name,
      grade: `${s.studentClass} (${selectedLevelFilter === 'junior' ? 'Jr Level' : 'Sr Level'})`,
      track: s.category || (currentType === 'pride' ? 'Technik Pride Award' : 'Robotics Olympiad'),
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: currentType === 'pride' ? 'Nomination Received' : 'Registered & Verified'
    }));

    setSubmittedRoster([...newEntries, ...submittedRoster]);
    setLastSubmittedType(currentType);
    setFormSubmitted(true);

    // Auto-reset input list
    setStudentList([
      {
        id: Date.now(),
        name: '',
        studentClass: selectedLevelFilter === 'junior' ? 'Grade 4' : 'Grade 7',
        gender: 'Select Gender',
        category: currentType === 'pride' ? 'Technik Pride Award' : 'Robotics Olympiad',
        achievementTitle: '',
        description: '',
        fileName: ''
      }
    ]);
  };

  const filteredSchools = schoolsList.filter((sch) => {
    const matchesSearch = sch.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          sch.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === 'All' || sch.city === selectedCity;
    return matchesSearch && matchesCity;
  });

  const filteredRoster = submittedRoster.filter((st) => {
    const matchesName = st.name.toLowerCase().includes(rosterSearch.toLowerCase()) || 
                        st.track.toLowerCase().includes(rosterSearch.toLowerCase());
    const matchesGrade = rosterGradeFilter === 'All' || st.grade.includes(rosterGradeFilter);
    const matchesYear = rosterYearFilter === 'All' || st.date.includes(rosterYearFilter);
    return matchesName && matchesGrade && matchesYear;
  });

  return (
    <div style={styles.page}>
      
      {/* HERO BANNER & PORTAL NAVIGATION HEADER */}
      <section style={styles.heroSection}>
        <div className="container" style={styles.heroContainer}>
          
          {/* Top Breadcrumb */}
          <div style={styles.breadcrumbRow}>
            <Link to="/" style={styles.breadcrumbLink}>Home</Link>
            <span style={styles.breadcrumbSep}>&gt;</span>
            <span style={styles.breadcrumbCurrent}>School Portal Dashboard</span>
          </div>

          <div style={styles.portalHeaderBox}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', width: '100%' }}>
              <div style={styles.schoolTitleGroup}>
                <div style={styles.schoolIconCircleLg}>
                  <School size={28} color="#ffffff" />
                </div>
                <div>
                  <div style={styles.portalBadgeRow}>
                    <span className="badge badge-gold">VERIFIED INSTITUTIONAL PARTNER</span>
                    <span style={styles.schoolCodePill}>CODE: SCH-2026-TXI</span>
                  </div>
                  <h1 style={styles.schoolPortalName}>St. Xavier International School</h1>
                  <p style={styles.schoolPortalSub}>
                    Chennai, Tamil Nadu &nbsp;|&nbsp; Principal: Dr. R. Sundaram &nbsp;|&nbsp; Coordinator: {coordinator.name}
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
            <div style={styles.portalMetricsRow}>
              <div style={styles.metricPill}>
                <Users size={16} color="#38bdf8" />
                <span>Total Enrolled: <strong>{420 + submittedRoster.length} Students</strong></span>
              </div>
              <div style={styles.metricPill}>
                <Trophy size={16} color="#fbbf24" />
                <span>Pride Award Nominations: <strong>{submittedRoster.filter(r => r.track.includes('Pride')).length + 12}</strong></span>
              </div>
              <div style={styles.metricPill}>
                <FileCheck size={16} color="#4ade80" />
                <span>Verified Certificates: <strong>385</strong></span>
              </div>
            </div>
          </div>

          {/* DEDICATED SCHOOL PORTAL OPTIONS NAVIGATION TABS */}
          <div style={styles.tabNavRow}>
            <button 
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
              style={{
                ...styles.tabNavBtn,
                ...(activeTab === 'pride-nominated-list' ? styles.tabNavBtnActiveGold : {})
              }}
              onClick={() => setActiveTab('pride-nominated-list')}
            >
              <Trophy size={16} color="#f59e0b" />
              <span>Nominated for Pride Award ({submittedRoster.filter(r => r.track.includes('Pride')).length})</span>
            </button>

            <button 
              style={{
                ...styles.tabNavBtn,
                ...(activeTab === 'nominate-pride' ? styles.tabNavBtnActiveGold : {})
              }}
              onClick={() => { setActiveTab('nominate-pride'); setFormType('pride'); setFormSubmitted(false); }}
            >
              <Trophy size={16} />
              <span>+ Nominate Student</span>
            </button>

            <button 
              style={{
                ...styles.tabNavBtn,
                ...(activeTab === 'olympiad-reg' ? styles.tabNavBtnActiveOrange : {})
              }}
              onClick={() => { setActiveTab('olympiad-reg'); setFormType('olympiad'); setFormSubmitted(false); }}
            >
              <BookOpen size={16} />
              <span>Olympiad Registration</span>
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* OPTION 1: STUDENTS LIST VIEW                                             */}
      {/* ========================================================================= */}
      {activeTab === 'roster' && (
        <section style={styles.sectionPadding}>
          <div className="container">
            
            <div style={styles.rosterCardWrapper}>
              
              {/* Header Bar */}
              <div style={styles.rosterHeaderRow}>
                <div>
                  <h2 style={styles.rosterTitle}>Enrolled Students &amp; Achievers List</h2>
                  <p style={styles.rosterSub}>Manage, search, and export registered students from St. Xavier International School.</p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button 
                    onClick={() => { setActiveTab('olympiad-reg'); setFormType('olympiad'); }} 
                    style={styles.actionBtnOrange}
                  >
                    <BookOpen size={15} /> + Register for Olympiad
                  </button>
                  <button 
                    onClick={() => { setActiveTab('nominate-pride'); setFormType('pride'); }} 
                    style={styles.actionBtnGold}
                  >
                    <Trophy size={15} /> + Nominate for Pride Award
                  </button>
                </div>
              </div>

              {/* Roster Controls: Search & Filter */}
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

              {/* Enrolled Students Roster Table */}
              <div style={styles.tableResponsive}>
                <table style={styles.rosterTable}>
                  <thead>
                    <tr style={styles.tableHeaderRow}>
                      <th style={styles.thCell}>Student Name</th>
                      <th style={styles.thCell}>Class / Level</th>
                      <th style={styles.thCell}>Category / Track</th>
                      <th style={styles.thCell}>Enrolled Date</th>
                      <th style={styles.thCell}>Status</th>
                      <th style={styles.thCell}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRoster.map((st, i) => (
                      <tr key={i} style={styles.tableBodyRow}>
                        <td style={styles.tdCellBold}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={styles.avatarCircle}>{st.name.charAt(0)}</div>
                            <span>{st.name}</span>
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
                          }}>
                            <CheckCircle2 size={13} style={{ marginRight: '4px' }} />
                            {st.status}
                          </span>
                        </td>
                        <td style={styles.tdCell}>
                          <button 
                            type="button" 
                            style={styles.tableActionBtn}
                            onClick={() => alert(`Downloading Admit Card & Certificate for ${st.name}`)}
                          >
                            <Download size={13} /> Admit Card
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* PRIDE AWARD NOMINATED STUDENTS LIST VIEW                                  */}
      {/* ========================================================================= */}
      {activeTab === 'pride-nominated-list' && (
        <section style={styles.sectionPadding}>
          <div className="container">
            <div style={styles.rosterCardWrapper}>
              
              <div style={{ ...styles.rosterHeaderRow, background: 'linear-gradient(135deg, #fffbe6 0%, #fef3c7 100%)', padding: '1.25rem 1.5rem', borderRadius: '12px', border: '1px solid #fde047', marginBottom: '1.5rem' }}>
                <div>
                  <h2 style={{ ...styles.rosterTitle, color: '#92400e', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Trophy size={22} color="#d97706" />
                    Students Nominated for Technik Pride Award
                  </h2>
                  <p style={{ ...styles.rosterSub, color: '#b45309' }}>
                    List of students nominated by St. Xavier International School. Submitted for review by Technik Super Admin & Olympiad Committee.
                  </p>
                </div>
                <div>
                  <button 
                    onClick={() => { setActiveTab('nominate-pride'); setFormType('pride'); setFormSubmitted(false); }} 
                    style={styles.actionBtnGold}
                  >
                    <Trophy size={15} /> + Nominate Student
                  </button>
                </div>
              </div>

              {/* Roster Table */}
              <div style={styles.tableResponsive}>
                <table style={styles.rosterTable}>
                  <thead>
                    <tr style={styles.tableHeaderRow}>
                      <th style={styles.thCell}>Student Name</th>
                      <th style={styles.thCell}>Class / Level</th>
                      <th style={styles.thCell}>Nominated Category</th>
                      <th style={styles.thCell}>Date Submitted</th>
                      <th style={styles.thCell}>Nomination Status</th>
                      <th style={styles.thCell}>Admin Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submittedRoster.filter(st => st.track.includes('Pride')).length === 0 ? (
                      <tr>
                        <td colSpan="6" style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
                          No students nominated for Pride Award yet. Click "+ Nominate Student" above to get started.
                        </td>
                      </tr>
                    ) : (
                      submittedRoster.filter(st => st.track.includes('Pride')).map((st, i) => (
                        <tr key={i} style={styles.tableBodyRow}>
                          <td style={styles.tdCellBold}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <div style={{ ...styles.avatarCircle, background: '#f59e0b', color: '#ffffff' }}>{st.name.charAt(0)}</div>
                              <span>{st.name}</span>
                            </div>
                          </td>
                          <td style={styles.tdCell}>{st.grade}</td>
                          <td style={styles.tdCell}>
                            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#b45309' }}>
                              Technik Pride Award Nomination
                            </span>
                          </td>
                          <td style={styles.tdCell}>{st.date}</td>
                          <td style={styles.tdCell}>
                            <span style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              padding: '0.25rem 0.65rem',
                              borderRadius: '20px',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              background: '#fef3c7',
                              color: '#d97706',
                              border: '1px solid #fde047'
                            }}>
                              <Clock size={12} style={{ marginRight: '4px' }} />
                              Submitted &amp; Under Review
                            </span>
                          </td>
                          <td style={styles.tdCell}>
                            <span style={{ fontSize: '0.78rem', color: '#0284c7', fontWeight: 600 }}>
                              Forwarded to Technik Super Admin
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* OPTION 2: NOMINATE STUDENTS FOR PRIDE AWARD VIEW                          */}
      {/* ========================================================================= */}
      {activeTab === 'nominate-pride' && (
        <section style={styles.sectionPadding}>
          <div className="container">
            
            {/* Stepper Progress Bar */}
            <div style={styles.stepperBar}>
              <div style={{ ...styles.stepItem, ...styles.stepItemActive }}>
                <div style={{ ...styles.stepCircle, background: '#d97706', color: '#ffffff' }}>1</div>
                <div>
                  <div style={styles.stepItemTitle}>Coordinator Details</div>
                  <div style={styles.stepItemSub}>Add contact person</div>
                </div>
              </div>
              <div style={styles.stepDivider} />
              <div style={{ ...styles.stepItem, ...styles.stepItemActive }}>
                <div style={{ ...styles.stepCircle, background: '#d97706', color: '#ffffff' }}>2</div>
                <div>
                  <div style={styles.stepItemTitle}>Pride Award Nomination</div>
                  <div style={styles.stepItemSub}>Nominate outstanding students</div>
                </div>
              </div>
              <div style={styles.stepDivider} />
              <div style={styles.stepItem}>
                <div style={{ ...styles.stepCircle, background: '#94a3b8', color: '#ffffff' }}>3</div>
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

              {/* ANNUAL QUOTA NOTICE BANNER */}
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
                      Annual Quota: Max 2 Students per School / Academic Year
                    </h4>
                    <p style={{ margin: '3px 0 0 0', fontSize: '0.86rem', color: '#b45309', lineHeight: 1.4 }}>
                      Each partner school can nominate a maximum of <strong>2 students per year</strong> for the Technik Pride Award (e.g. 1 Junior &amp; 1 Senior, or up to 2 total).
                    </p>
                  </div>
                </div>

                <div style={{
                  background: '#ffffff',
                  border: '1.5px solid #f59e0b',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '30px',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  color: '#b45309',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 8px rgba(217, 119, 6, 0.12)'
                }}>
                  <Award size={16} color="#d97706" />
                  <span>2026 Quota Status: <strong>{submittedRoster.filter(r => r.track.includes('Pride')).length} / 2 Used</strong></span>
                </div>
              </div>

              {/* SUCCESS TOAST BANNER */}
              {formSubmitted && lastSubmittedType === 'pride' && (
                <div style={styles.successBanner}>
                  <CheckCircle2 size={24} color="#16a34a" />
                  <div>
                    <h4 style={styles.successBannerTitle}>Pride Award Nomination Submitted Successfully!</h4>
                    <p style={styles.successBannerSub}>
                      Nominated students have been added to St. Xavier International School roster. Confirmation email sent to <strong>{coordinator.email}</strong>.
                    </p>
                  </div>
                  <button onClick={() => setActiveTab('roster')} style={styles.resetFormBtn}>
                    View Enrolled Students List &rarr;
                  </button>
                </div>
              )}

              <form onSubmit={(e) => handleSubmitForm(e, 'pride')}>
                
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
                        required
                        style={styles.textInput}
                        value={coordinator.name}
                        onChange={(e) => setCoordinator({ ...coordinator, name: e.target.value })}
                        placeholder="Enter coordinator name"
                      />
                    </div>

                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>Designation <span style={styles.reqStar}>*</span></label>
                      <input 
                        type="text" 
                        required
                        style={styles.textInput}
                        value={coordinator.designation}
                        onChange={(e) => setCoordinator({ ...coordinator, designation: e.target.value })}
                        placeholder="Enter designation"
                      />
                    </div>

                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>Mobile Number <span style={styles.reqStar}>*</span></label>
                      <input 
                        type="tel" 
                        required
                        style={styles.textInput}
                        value={coordinator.mobile}
                        onChange={(e) => setCoordinator({ ...coordinator, mobile: e.target.value })}
                        placeholder="Enter mobile number"
                      />
                    </div>

                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>Email ID <span style={styles.reqStar}>*</span></label>
                      <input 
                        type="email" 
                        required
                        style={styles.textInput}
                        value={coordinator.email}
                        onChange={(e) => setCoordinator({ ...coordinator, email: e.target.value })}
                        placeholder="Enter email address"
                      />
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
                        onClick={() => setSelectedLevelFilter('junior')}
                      >
                        Grade 3 to 5 (Jr Level)
                      </button>

                      <button 
                        type="button"
                        style={{
                          ...styles.levelBtn,
                          ...(selectedLevelFilter === 'senior' ? styles.levelBtnActiveBlue : {})
                        }}
                        onClick={() => setSelectedLevelFilter('senior')}
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
                              required
                              placeholder="Enter student name"
                              style={styles.textInput}
                              value={student.name}
                              onChange={(e) => handleStudentChange(student.id, 'name', e.target.value)}
                            />
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
                              style={styles.selectInput}
                              value={student.gender}
                              onChange={(e) => handleStudentChange(student.id, 'gender', e.target.value)}
                            >
                              <option value="Select Gender">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
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
                              style={styles.textInput}
                              value={student.achievementTitle}
                              onChange={(e) => handleStudentChange(student.id, 'achievementTitle', e.target.value)}
                            />
                          </div>

                          <div style={styles.fieldCol}>
                            <label style={styles.fieldLabel}>Brief Description <span style={styles.reqStar}>*</span></label>
                            <textarea 
                              placeholder="Describe the achievement (Max 300 characters)"
                              style={styles.textAreaInput}
                              value={student.description}
                              onChange={(e) => handleStudentChange(student.id, 'description', e.target.value)}
                              maxLength={300}
                            />
                          </div>

                          <div style={styles.fieldCol}>
                            <label style={styles.fieldLabel}>Supporting Document / Photo</label>
                            <div style={styles.fileUploadBox}>
                              <input 
                                type="file" 
                                id={`file-${student.id}`} 
                                style={{ display: 'none' }}
                                onChange={(e) => {
                                  if (e.target.files[0]) {
                                    handleStudentChange(student.id, 'fileName', e.target.files[0].name);
                                  }
                                }}
                              />
                              <label htmlFor={`file-${student.id}`} style={styles.fileChooseBtn}>
                                Choose File
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
                      disabled={submittedRoster.filter(r => r.track.includes('Pride')).length + studentList.length >= 2}
                      style={{
                        ...styles.addAnotherBtnGold,
                        ...(submittedRoster.filter(r => r.track.includes('Pride')).length + studentList.length >= 2 ? {
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
                        {submittedRoster.filter(r => r.track.includes('Pride')).length + studentList.length >= 2
                          ? 'MAX QUOTA REACHED (2/2 NOMINATIONS PER YEAR)'
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
                      onChange={(e) => setDeclaration(e.target.checked)}
                      style={styles.checkboxInput}
                    />
                    <span>
                      We hereby confirm that the information provided is true and correct. We have obtained the consent from the students and parents/guardians to nominate them for the Technik Pride Award.
                    </span>
                  </label>
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
                    style={styles.submitReviewBtnGold}
                  >
                    <span>Submit Pride Award Nomination</span>
                    <ArrowRight size={18} />
                  </button>
                </div>

              </form>
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* OPTION 3: OLYMPIAD REGISTRATION VIEW                                      */}
      {/* ========================================================================= */}
      {activeTab === 'olympiad-reg' && (
        <section style={styles.sectionPadding}>
          <div className="container">
            
            {/* Stepper Progress Bar */}
            <div style={styles.stepperBar}>
              <div style={{ ...styles.stepItem, ...styles.stepItemActive }}>
                <div style={{ ...styles.stepCircle, background: '#ea580c', color: '#ffffff' }}>1</div>
                <div>
                  <div style={styles.stepItemTitle}>Coordinator Details</div>
                  <div style={styles.stepItemSub}>Add contact person</div>
                </div>
              </div>
              <div style={styles.stepDivider} />
              <div style={{ ...styles.stepItem, ...styles.stepItemActive }}>
                <div style={{ ...styles.stepCircle, background: '#ea580c', color: '#ffffff' }}>2</div>
                <div>
                  <div style={styles.stepItemTitle}>Olympiad Registration</div>
                  <div style={styles.stepItemSub}>Register students for 8 tracks</div>
                </div>
              </div>
              <div style={styles.stepDivider} />
              <div style={styles.stepItem}>
                <div style={{ ...styles.stepCircle, background: '#94a3b8', color: '#ffffff' }}>3</div>
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

              {/* SUCCESS TOAST BANNER */}
              {formSubmitted && lastSubmittedType === 'olympiad' && (
                <div style={styles.successBanner}>
                  <CheckCircle2 size={24} color="#16a34a" />
                  <div>
                    <h4 style={styles.successBannerTitle}>Olympiad Registration Submitted Successfully!</h4>
                    <p style={styles.successBannerSub}>
                      Students have been registered into St. Xavier International School roster. Confirmation email sent to <strong>{coordinator.email}</strong>.
                    </p>
                  </div>
                  <button onClick={() => setActiveTab('roster')} style={styles.resetFormBtn}>
                    View Enrolled Students List &rarr;
                  </button>
                </div>
              )}

              <form onSubmit={(e) => handleSubmitForm(e, 'olympiad')}>
                
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
                        required
                        style={styles.textInput}
                        value={coordinator.name}
                        onChange={(e) => setCoordinator({ ...coordinator, name: e.target.value })}
                        placeholder="Enter coordinator name"
                      />
                    </div>

                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>Designation <span style={styles.reqStar}>*</span></label>
                      <input 
                        type="text" 
                        required
                        style={styles.textInput}
                        value={coordinator.designation}
                        onChange={(e) => setCoordinator({ ...coordinator, designation: e.target.value })}
                        placeholder="Enter designation"
                      />
                    </div>

                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>Mobile Number <span style={styles.reqStar}>*</span></label>
                      <input 
                        type="tel" 
                        required
                        style={styles.textInput}
                        value={coordinator.mobile}
                        onChange={(e) => setCoordinator({ ...coordinator, mobile: e.target.value })}
                        placeholder="Enter mobile number"
                      />
                    </div>

                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>Email ID <span style={styles.reqStar}>*</span></label>
                      <input 
                        type="email" 
                        required
                        style={styles.textInput}
                        value={coordinator.email}
                        onChange={(e) => setCoordinator({ ...coordinator, email: e.target.value })}
                        placeholder="Enter email address"
                      />
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
                        onClick={() => setSelectedLevelFilter('junior')}
                      >
                        Grade 3 to 5 (Jr Level)
                      </button>

                      <button 
                        type="button"
                        style={{
                          ...styles.levelBtn,
                          ...(selectedLevelFilter === 'senior' ? styles.levelBtnActiveBlue : {})
                        }}
                        onClick={() => setSelectedLevelFilter('senior')}
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
                              required
                              placeholder="Enter student name"
                              style={styles.textInput}
                              value={student.name}
                              onChange={(e) => handleStudentChange(student.id, 'name', e.target.value)}
                            />
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
                              style={styles.selectInput}
                              value={student.gender}
                              onChange={(e) => handleStudentChange(student.id, 'gender', e.target.value)}
                            >
                              <option value="Select Gender">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
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
                      onChange={(e) => setDeclaration(e.target.checked)}
                      style={styles.checkboxInput}
                    />
                    <span>
                      We hereby confirm that the information provided is true and correct. We have obtained the consent from the students and parents/guardians to register them for the Technik Olympiad.
                    </span>
                  </label>
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
                    style={styles.submitReviewBtnOrange}
                  >
                    <span>Register Students for Olympiad</span>
                    <ArrowRight size={18} />
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
  tabNavBtnActiveDark: {
    background: '#ffffff',
    color: '#041026',
    borderColor: '#ffffff',
    boxShadow: '0 4px 14px rgba(255, 255, 255, 0.25)',
  },

  /* STEPPER PROGRESS BAR (1 -> 2 -> 3) */
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
  },
  stepItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  stepItemActive: {
    opacity: 1,
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
  },
  backBtn: {
    background: '#ffffff',
    border: '1px solid #cbd5e1',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    color: '#0f172a',
    fontWeight: 700,
    fontSize: '0.88rem',
    cursor: 'pointer',
  },
  submitReviewBtnGold: {
    background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
    color: '#041026',
    border: 'none',
    padding: '0.85rem 2rem',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '0.92rem',
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 14px rgba(217, 119, 6, 0.3)',
  },
  submitReviewBtnOrange: {
    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    color: '#ffffff',
    border: 'none',
    padding: '0.85rem 2rem',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '0.92rem',
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 14px rgba(234, 88, 12, 0.3)',
  },

  /* STUDENTS LIST ROSTER VIEW STYLES */
  rosterCardWrapper: {
    background: '#ffffff',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    padding: '2rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
  },
  rosterHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '1.75rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #f1f5f9',
  },
  rosterTitle: {
    fontSize: '1.45rem',
    fontWeight: 900,
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
    padding: '0.65rem 1.1rem',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '0.82rem',
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  actionBtnGold: {
    background: '#fbbf24',
    color: '#041026',
    border: 'none',
    padding: '0.65rem 1.1rem',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '0.82rem',
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
  },

  rosterControlRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  rosterSearchBox: {
    display: 'flex',
    alignItems: 'center',
    background: '#f8fafc',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    padding: '0.5rem 0.85rem',
    flex: 1,
    maxWidth: '380px',
  },
  rosterSearchInput: {
    border: 'none',
    background: 'transparent',
    outline: 'none',
    fontSize: '0.88rem',
    width: '100%',
  },
  rosterFilterGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  filterLabel: {
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#64748b',
  },
  selectFilter: {
    padding: '0.5rem 0.85rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '0.85rem',
    background: '#ffffff',
    color: '#0f172a',
    outline: 'none',
  },

  tableResponsive: {
    overflowX: 'auto',
  },
  rosterTable: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
  },
  tableHeaderRow: {
    background: '#f1f5f9',
    borderBottom: '2px solid #cbd5e1',
  },
  thCell: {
    padding: '0.85rem 1rem',
    fontSize: '0.78rem',
    fontWeight: 800,
    color: '#475569',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    fontFamily: 'var(--font-heading)',
  },
  tableBodyRow: {
    borderBottom: '1px solid #e2e8f0',
    transition: 'background 0.2s ease',
  },
  tdCell: {
    padding: '0.95rem 1rem',
    fontSize: '0.88rem',
    color: '#334155',
  },
  tdCellBold: {
    padding: '0.95rem 1rem',
    fontSize: '0.9rem',
    fontWeight: 700,
    color: '#0f172a',
  },
  avatarCircle: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: '#041026',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '0.82rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackBadgeBlue: {
    background: '#e0f2fe',
    color: '#0369a1',
    padding: '0.2rem 0.6rem',
    borderRadius: '6px',
    fontSize: '0.78rem',
    fontWeight: 700,
  },
  trackBadgeGold: {
    background: '#fef3c7',
    color: '#b45309',
    padding: '0.2rem 0.6rem',
    borderRadius: '6px',
    fontSize: '0.78rem',
    fontWeight: 700,
  },
  rosterStatusTag: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.25rem 0.65rem',
    borderRadius: '20px',
    fontSize: '0.78rem',
    fontWeight: 700,
  },
  tableActionBtn: {
    background: '#ffffff',
    border: '1px solid #cbd5e1',
    padding: '0.35rem 0.75rem',
    borderRadius: '6px',
    fontSize: '0.78rem',
    fontWeight: 700,
    color: '#0284c7',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
  },

  /* DIRECTORY STYLES */
  searchBarRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    background: '#ffffff',
    border: '1px solid #cbd5e1',
    padding: '0.65rem 1rem',
    borderRadius: '10px',
    flex: 1,
    maxWidth: '450px',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: '0.9rem',
  },
  filterGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  directoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  schoolCard: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '14px',
    padding: '1.5rem',
    boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
  },
  schoolCardHeader: {
    display: 'flex',
    gap: '0.85rem',
    alignItems: 'flex-start',
  },
  schoolIconCircle: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    background: '#eff6ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  schoolName: {
    fontSize: '1.05rem',
    fontWeight: 800,
    color: '#0f172a',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.2rem',
  },
  schoolLocation: {
    fontSize: '0.78rem',
    color: '#64748b',
    display: 'flex',
    alignItems: 'center',
  },
  schoolDivider: {
    height: '1px',
    background: '#f1f5f9',
    margin: '1rem 0',
  },
  schoolMetaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.25rem',
  },
  metaLabel: {
    fontSize: '0.72rem',
    color: '#64748b',
    display: 'block',
  },
  metaVal: {
    fontSize: '0.92rem',
    fontWeight: 800,
    color: '#0f172a',
  },
  verifiedBadge: {
    fontSize: '0.75rem',
    fontWeight: 700,
    color: '#059669',
    display: 'flex',
    alignItems: 'center',
  },
  viewStudentsBtn: {
    width: '100%',
    background: '#f8fafc',
    border: '1px solid #cbd5e1',
    color: '#2563eb',
    fontWeight: 800,
    fontSize: '0.78rem',
    fontFamily: 'var(--font-heading)',
    padding: '0.65rem',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* MODAL STYLES */
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(15, 23, 42, 0.75)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '1.5rem',
  },
  modalBox: {
    background: '#ffffff',
    borderRadius: '20px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
    overflow: 'hidden',
  },
  modalHeader: {
    padding: '1.5rem',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    background: '#f8fafc',
  },
  modalTitle: {
    fontSize: '1.25rem',
    fontWeight: 800,
    color: '#0f172a',
  },
  modalSub: {
    fontSize: '0.82rem',
    color: '#64748b',
  },
  closeBtn: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#64748b',
  },
  modalBody: {
    padding: '1.5rem',
    maxHeight: '400px',
    overflowY: 'auto',
  },
  modalListHeading: {
    fontSize: '0.88rem',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '1rem',
  },
  studentTable: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  studentRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 1rem',
    background: '#f8fafc',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
  },
  stName: {
    fontSize: '0.9rem',
    fontWeight: 700,
    color: '#0f172a',
  },
  stGrade: {
    fontSize: '0.75rem',
    color: '#64748b',
  },
  stTrackPill: {
    fontSize: '0.75rem',
    fontWeight: 700,
    background: '#e0f2fe',
    color: '#0284c7',
    padding: '0.2rem 0.6rem',
    borderRadius: '6px',
  },
  stStagePill: {
    fontSize: '0.75rem',
    fontWeight: 700,
    background: '#fef3c7',
    color: '#b45309',
    padding: '0.2rem 0.6rem',
    borderRadius: '6px',
  },
  modalFooter: {
    padding: '1rem 1.5rem',
    borderTop: '1px solid #e2e8f0',
    background: '#f8fafc',
    textAlign: 'right',
  },
  modalCloseAction: {
    background: '#041026',
    color: '#ffffff',
    border: 'none',
    padding: '0.6rem 1.25rem',
    borderRadius: '8px',
    fontWeight: 700,
    fontSize: '0.85rem',
    cursor: 'pointer',
  }
};
