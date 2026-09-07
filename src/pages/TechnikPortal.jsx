import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Trophy, 
  Users, 
  School, 
  Search, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Download, 
  UserCheck, 
  Award, 
  Sparkles, 
  FileText, 
  ChevronRight, 
  Building, 
  Bot, 
  Code, 
  Cpu, 
  RefreshCw, 
  ExternalLink,
  Lock,
  LogOut,
  Sliders,
  Check,
  Zap,
  Mail,
  KeyRound,
  UserPlus,
  ArrowRight,
  X,
  AlertCircle
} from 'lucide-react';

export default function TechnikPortal() {
  const navigate = useNavigate();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('technik_admin_authenticated') === 'true';
  });

  // Login Flow State: 'credentials' | 'otp'
  const [authStep, setAuthStep] = useState('credentials');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [otpValue, setOtpValue] = useState('');
  const [authError, setAuthError] = useState('');
  const [isSendingOtp, setIsSendingOtp] = useState(false);

  // Active Main Tab: 'pride-nominations' | 'olympiad-registrations' | 'admin-users'
  const [activeTab, setActiveTab] = useState('pride-nominations');

  // Filter & Search State
  const [searchTerm, setSearchTerm] = useState('');
  const [gradeFilter, setGradeFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [trackFilter, setTrackFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');

  // Modal State for "+ Add User"
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newAdminUser, setNewAdminUser] = useState({
    name: '',
    email: '',
    mobile: '',
    role: 'Regional Olympiad Admin',
    zone: 'South Zone (Chennai)'
  });

  // Roster of Technik Conducting Professionals & Admins
  const [adminUsersList, setAdminUsersList] = useState([
    {
      id: 'ADM-101',
      name: 'Dr. Arvind Swaminathan',
      email: 'arvind.s@technikolympiad.com',
      mobile: '+91 98401 11223',
      role: 'Super Admin',
      zone: 'Central Headquarters',
      status: 'Active & Verified',
      addedDate: '01 Aug 2026'
    },
    {
      id: 'ADM-102',
      name: 'Prof. Rajeshwari Verma',
      email: 'rajeshwari.v@technikolympiad.com',
      mobile: '+91 98102 33445',
      role: 'Regional Olympiad Admin',
      zone: 'North Zone (Delhi)',
      status: 'Active & Verified',
      addedDate: '15 Aug 2026'
    },
    {
      id: 'ADM-103',
      name: 'Er. Sandeep Kulkarni',
      email: 'sandeep.k@technikolympiad.com',
      mobile: '+91 97203 55667',
      role: 'Pride Award Evaluator',
      zone: 'West Zone (Mumbai)',
      status: 'Active & Verified',
      addedDate: '20 Aug 2026'
    }
  ]);

  // Live State for Pride Award Nominations
  const [prideNominations, setPrideNominations] = useState([
    {
      id: 'PRIDE-901',
      studentName: 'Aarav Sharma',
      schoolName: 'St. Xavier International School',
      schoolCity: 'Chennai',
      grade: 'Grade 4',
      level: 'Junior Level',
      category: 'Innovation & Robotics',
      achievementTitle: 'Built Autonomous Solar Trash Collector Bot',
      submissionDate: '04 Sep 2026',
      proofFile: 'aarav_robotics_cert.pdf',
      status: 'Pending Review'
    },
    {
      id: 'PRIDE-902',
      studentName: 'Kavya Raman',
      schoolName: 'St. Xavier International School',
      schoolCity: 'Chennai',
      grade: 'Grade 7',
      level: 'Senior Level',
      category: 'AI & Machine Learning',
      achievementTitle: 'Developed Plant Disease Detection Web App',
      submissionDate: '05 Sep 2026',
      proofFile: 'kavya_ai_project.pdf',
      status: 'Approved'
    },
    {
      id: 'PRIDE-903',
      studentName: 'Rohan Gupta',
      schoolName: 'Greenwood High International',
      schoolCity: 'Bengaluru',
      grade: 'Grade 5',
      level: 'Junior Level',
      category: 'Mental Arithmetic Speed',
      achievementTitle: 'National Mental Math Champion (Under 11)',
      submissionDate: '06 Sep 2026',
      proofFile: 'rohan_math_award.pdf',
      status: 'Pending Review'
    },
    {
      id: 'PRIDE-904',
      studentName: 'Diya Patel',
      schoolName: 'Greenwood High International',
      schoolCity: 'Bengaluru',
      grade: 'Grade 8',
      level: 'Senior Level',
      category: 'Generative AI & Art',
      achievementTitle: 'Published AI-Assisted Interactive Comic Book',
      submissionDate: '06 Sep 2026',
      proofFile: 'diya_ai_art.pdf',
      status: 'Approved'
    },
    {
      id: 'PRIDE-905',
      studentName: 'Siddharth M.',
      schoolName: 'Delhi Public School',
      schoolCity: 'Hyderabad',
      grade: 'Grade 3',
      level: 'Junior Level',
      category: 'Algorithmic Problem Solving',
      achievementTitle: 'Solved 150+ Complex Logic Puzzles in 30 Mins',
      submissionDate: '07 Sep 2026',
      proofFile: 'siddharth_cert.pdf',
      status: 'Award Issued'
    },
    {
      id: 'PRIDE-906',
      studentName: 'Ananya Roy',
      schoolName: 'Delhi Public School',
      schoolCity: 'Hyderabad',
      grade: 'Grade 6',
      level: 'Senior Level',
      category: 'STEM Leadership',
      achievementTitle: 'Founded School Girls-Who-Code Robotics Club',
      submissionDate: '07 Sep 2026',
      proofFile: 'ananya_leadership.pdf',
      status: 'Pending Review'
    }
  ]);

  // Live State for Olympiad Registered Students
  const [olympiadRegistrations, setOlympiadRegistrations] = useState([
    {
      rollNo: 'TOK-2026-4011',
      studentName: 'Aarav Sharma',
      schoolName: 'St. Xavier International School',
      grade: 'Grade 4',
      track: 'Robotics & Hardware Olympiad',
      examCenter: 'Chennai Main Tech Hub',
      registeredDate: '02 Sep 2026',
      paymentStatus: 'Paid',
      verificationStatus: 'Hall Ticket Issued'
    },
    {
      rollNo: 'TOK-2026-7022',
      studentName: 'Kavya Raman',
      schoolName: 'St. Xavier International School',
      grade: 'Grade 7',
      track: 'Coding & Algorithms Olympiad',
      examCenter: 'Chennai Main Tech Hub',
      registeredDate: '03 Sep 2026',
      paymentStatus: 'Paid',
      verificationStatus: 'Hall Ticket Issued'
    },
    {
      rollNo: 'TOK-2026-5033',
      studentName: 'Rohan Gupta',
      schoolName: 'Greenwood High International',
      grade: 'Grade 5',
      track: 'Mental Maths & Logic Olympiad',
      examCenter: 'Bengaluru Digital Center',
      registeredDate: '04 Sep 2026',
      paymentStatus: 'Paid',
      verificationStatus: 'Hall Ticket Issued'
    },
    {
      rollNo: 'TOK-2026-8044',
      studentName: 'Diya Patel',
      schoolName: 'Greenwood High International',
      grade: 'Grade 8',
      track: 'AI & Machine Learning Olympiad',
      examCenter: 'Bengaluru Digital Center',
      registeredDate: '04 Sep 2026',
      paymentStatus: 'Paid',
      verificationStatus: 'Hall Ticket Issued'
    },
    {
      rollNo: 'TOK-2026-3055',
      studentName: 'Siddharth M.',
      schoolName: 'Delhi Public School',
      grade: 'Grade 3',
      track: 'Mental Maths & Logic Olympiad',
      examCenter: 'Hyderabad Cyber Hub',
      registeredDate: '05 Sep 2026',
      paymentStatus: 'Paid',
      verificationStatus: 'Hall Ticket Issued'
    },
    {
      rollNo: 'TOK-2026-6066',
      studentName: 'Ananya Roy',
      schoolName: 'Delhi Public School',
      grade: 'Grade 6',
      track: 'Coding & Algorithms Olympiad',
      examCenter: 'Hyderabad Cyber Hub',
      registeredDate: '05 Sep 2026',
      paymentStatus: 'Paid',
      verificationStatus: 'Verified'
    }
  ]);

  // Demo Credentials Auto-Fill
  const handleAutoFillCredentials = () => {
    setLoginEmail('admin@technikolympiad.com');
    setLoginPassword('Technik#2026');
    setAuthError('');
  };

  // Submit Credentials -> Move to OTP
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      setAuthError('Please enter your official admin email and password.');
      return;
    }
    setAuthError('');
    setIsSendingOtp(true);
    setTimeout(() => {
      setIsSendingOtp(false);
      setAuthStep('otp');
      setOtpValue('849201'); // Pre-fill demo OTP for fast testing
    }, 600);
  };

  // Submit OTP Verification -> Unlock Portal
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (!otpValue || otpValue.trim().length < 4) {
      setAuthError('Please enter valid 6-digit OTP code received on email.');
      return;
    }
    sessionStorage.setItem('technik_admin_authenticated', 'true');
    setIsAuthenticated(true);
    setAuthError('');
  };

  // Logout Handler
  const handleLogout = () => {
    sessionStorage.removeItem('technik_admin_authenticated');
    setIsAuthenticated(false);
    setAuthStep('credentials');
    setLoginEmail('');
    setLoginPassword('');
    setOtpValue('');
  };

  // Submit "+ Add User" Form
  const handleCreateUserSubmit = (e) => {
    e.preventDefault();
    if (!newAdminUser.name || !newAdminUser.email) {
      alert('Please provide Full Name and Official Email.');
      return;
    }
    const created = {
      id: `ADM-${Math.floor(100 + Math.random() * 900)}`,
      name: newAdminUser.name,
      email: newAdminUser.email,
      mobile: newAdminUser.mobile || '+91 98000 12345',
      role: newAdminUser.role,
      zone: newAdminUser.zone,
      status: 'Active & Verified',
      addedDate: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    };
    setAdminUsersList([created, ...adminUsersList]);
    setShowAddUserModal(false);
    setNewAdminUser({
      name: '',
      email: '',
      mobile: '',
      role: 'Regional Olympiad Admin',
      zone: 'South Zone (Chennai)'
    });
    alert(`Successfully registered new Technik Conducting Professional: ${created.name} (${created.id})`);
  };

  // Action Handlers
  const handleApproveNomination = (id) => {
    setPrideNominations(prev =>
      prev.map(item => item.id === id ? { ...item, status: 'Approved' } : item)
    );
    alert(`Nomination ${id} approved successfully!`);
  };

  const handleIssueAward = (id) => {
    setPrideNominations(prev =>
      prev.map(item => item.id === id ? { ...item, status: 'Award Issued' } : item)
    );
    alert(`Technik Pride Award & Certificate issued for ${id}!`);
  };

  // Filter Logic
  const filteredPride = prideNominations.filter(item => {
    const matchesSearch = 
      item.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.schoolName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = gradeFilter === 'All' || item.grade === gradeFilter;
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
    const matchesYear = yearFilter === 'All' || item.submissionDate.includes(yearFilter);
    return matchesSearch && matchesGrade && matchesStatus && matchesYear;
  });

  const filteredOlympiad = olympiadRegistrations.filter(item => {
    const matchesSearch = 
      item.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.schoolName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = gradeFilter === 'All' || item.grade === gradeFilter;
    const matchesTrack = trackFilter === 'All' || item.track.includes(trackFilter);
    const matchesYear = yearFilter === 'All' || item.registeredDate.includes(yearFilter);
    return matchesSearch && matchesGrade && matchesTrack && matchesYear;
  });

  const totalPrideCount = prideNominations.length;
  const pendingPrideCount = prideNominations.filter(i => i.status === 'Pending Review').length;
  const totalOlympiadCount = olympiadRegistrations.length;

  // =========================================================================
  // VIEW 1: UNAUTHENTICATED LOGIN & EMAIL OTP VERIFICATION SCREEN
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div style={styles.loginPageOverlay}>
        <div style={styles.loginCard}>
          
          {/* Header */}
          <div style={styles.loginHeader}>
            <div style={styles.loginLogoBox}>
              <ShieldCheck size={32} color="#2563eb" />
            </div>
            <h2 style={styles.loginTitle}>Technik Olympiad Conducting Professionals</h2>
            <p style={styles.loginSub}>
              Authorized Access for Official Olympiad Conductors, Regional Coordinators &amp; Super Admins
            </p>
          </div>

          {authError && (
            <div style={styles.errorBox}>
              <AlertCircle size={16} color="#ef4444" style={{ marginRight: '6px' }} />
              <span>{authError}</span>
            </div>
          )}

          {/* STEP 1: ADMIN CREDENTIALS INPUT */}
          {authStep === 'credentials' && (
            <form onSubmit={handleSendOtp} style={styles.loginForm}>
              <div style={styles.formField}>
                <label style={styles.formLabel}>Official Admin Email Address</label>
                <div style={styles.inputWrapper}>
                  <Mail size={16} color="#2563eb" style={{ marginLeft: '12px' }} />
                  <input
                    type="email"
                    placeholder="e.g. admin@technikolympiad.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    style={styles.authInput}
                    required
                  />
                </div>
              </div>

              <div style={styles.formField}>
                <label style={styles.formLabel}>Security Password</label>
                <div style={styles.inputWrapper}>
                  <Lock size={16} color="#2563eb" style={{ marginLeft: '12px' }} />
                  <input
                    type="password"
                    placeholder="Enter security password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    style={styles.authInput}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <button
                  type="button"
                  onClick={handleAutoFillCredentials}
                  style={styles.demoFillBtn}
                >
                  <Sparkles size={13} color="#2563eb" /> Auto-Fill Demo Credentials
                </button>
              </div>

              <button
                type="submit"
                disabled={isSendingOtp}
                style={styles.primaryAuthBtn}
              >
                <span>{isSendingOtp ? 'Sending Email OTP...' : 'Send Verification OTP to Email'}</span>
                <ArrowRight size={18} />
              </button>
            </form>
          )}

          {/* STEP 2: EMAIL OTP VERIFICATION */}
          {authStep === 'otp' && (
            <form onSubmit={handleVerifyOtp} style={styles.loginForm}>
              <div style={styles.otpNoticeBox}>
                <Mail size={18} color="#2563eb" />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>OTP Code Sent to Email</div>
                  <div style={{ fontSize: '0.78rem', color: '#0284c7', fontWeight: 600 }}>{loginEmail}</div>
                </div>
              </div>

              <div style={styles.formField}>
                <label style={styles.formLabel}>Enter 6-Digit Verification OTP</label>
                <div style={styles.inputWrapper}>
                  <KeyRound size={18} color="#2563eb" style={{ marginLeft: '12px' }} />
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="e.g. 849201"
                    value={otpValue}
                    onChange={(e) => setOtpValue(e.target.value)}
                    style={{ ...styles.authInput, letterSpacing: '0.25em', fontSize: '1.1rem', fontWeight: 800 }}
                    required
                  />
                </div>
                <span style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '0.35rem', display: 'block' }}>
                  Demo OTP code pre-filled for testing: <strong>849201</strong>
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <button
                  type="button"
                  onClick={() => setAuthStep('credentials')}
                  style={styles.secondaryAuthBtn}
                >
                  &larr; Back to Email
                </button>
              </div>

              <button
                type="submit"
                style={{ ...styles.primaryAuthBtn, background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
              >
                <CheckCircle2 size={18} />
                <span>Verify OTP &amp; Access Technik Portal</span>
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: AUTHENTICATED TECHNIK PORTAL DASHBOARD
  // =========================================================================
  return (
    <div className="technik-admin-portal" style={styles.container}>
      
      {/* Top Header Banner (Role Switcher Removed as requested) */}
      <div style={styles.headerCard}>
        <div style={styles.headerContent}>
          <div style={styles.headerTitleGroup}>
            <div style={styles.adminBadge}>
              <ShieldCheck size={14} color="#f97316" />
              <span>TECHNIK OFFICIAL CONDUCTING PROFESSIONALS PORTAL</span>
            </div>
            <h1 style={styles.headerTitle}>
              Technik Olympiad Conducting Portal
            </h1>
            <p style={styles.headerDesc}>
              Centralized management system for official Technik Olympiad conducting professionals, regional admins, and pride award evaluation committees.
            </p>
          </div>

          {/* Top Actions: "+ Add User" & "Sign Out" */}
          <div style={styles.headerActionsBox}>
            <button 
              onClick={() => setShowAddUserModal(true)}
              style={styles.addUserHeaderBtn}
            >
              <UserPlus size={16} />
              <span>+ Add User</span>
            </button>

            <button 
              onClick={handleLogout}
              style={styles.signOutHeaderBtn}
            >
              <LogOut size={15} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Analytics Summary Bar */}
      <div style={styles.metricsGrid}>
        <div style={styles.metricCard}>
          <div style={{ ...styles.metricIcon, background: 'rgba(249, 115, 22, 0.15)', color: '#f97316' }}>
            <Trophy size={24} />
          </div>
          <div>
            <div style={styles.metricVal}>{totalPrideCount}</div>
            <div style={styles.metricLbl}>Pride Award Nominations</div>
          </div>
        </div>

        <div style={styles.metricCard}>
          <div style={{ ...styles.metricIcon, background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8' }}>
            <UserCheck size={24} />
          </div>
          <div>
            <div style={styles.metricVal}>{totalOlympiadCount}</div>
            <div style={styles.metricLbl}>Olympiad Registered Students</div>
          </div>
        </div>

        <div style={styles.metricCard}>
          <div style={{ ...styles.metricIcon, background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>
            <Clock size={24} />
          </div>
          <div>
            <div style={styles.metricVal}>{pendingPrideCount}</div>
            <div style={styles.metricLbl}>Pending Admin Approvals</div>
          </div>
        </div>

        <div style={styles.metricCard}>
          <div style={{ ...styles.metricIcon, background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
            <Users size={24} />
          </div>
          <div>
            <div style={styles.metricVal}>{adminUsersList.length}</div>
            <div style={styles.metricLbl}>Conducting Professionals</div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={styles.tabBar}>
        <button 
          onClick={() => setActiveTab('pride-nominations')}
          style={{
            ...styles.tabBtn,
            borderBottom: activeTab === 'pride-nominations' ? '3px solid #f97316' : '3px solid transparent',
            color: activeTab === 'pride-nominations' ? '#f97316' : '#64748b',
            fontWeight: activeTab === 'pride-nominations' ? 700 : 600
          }}
        >
          <Trophy size={16} style={{ marginRight: '6px' }} />
          Pride Award Nominated Students ({totalPrideCount})
        </button>

        <button 
          onClick={() => setActiveTab('olympiad-registrations')}
          style={{
            ...styles.tabBtn,
            borderBottom: activeTab === 'olympiad-registrations' ? '3px solid #38bdf8' : '3px solid transparent',
            color: activeTab === 'olympiad-registrations' ? '#38bdf8' : '#64748b',
            fontWeight: activeTab === 'olympiad-registrations' ? 700 : 600
          }}
        >
          <UserCheck size={16} style={{ marginRight: '6px' }} />
          Olympiad Registered Students ({totalOlympiadCount})
        </button>

        <button 
          onClick={() => setActiveTab('admin-users')}
          style={{
            ...styles.tabBtn,
            borderBottom: activeTab === 'admin-users' ? '3px solid #10b981' : '3px solid transparent',
            color: activeTab === 'admin-users' ? '#10b981' : '#64748b',
            fontWeight: activeTab === 'admin-users' ? 700 : 600
          }}
        >
          <Users size={16} style={{ marginRight: '6px' }} />
          Conducting Professionals &amp; Admins ({adminUsersList.length})
        </button>
      </div>

      {/* Filter Control Bar */}
      {activeTab !== 'admin-users' && (
        <div style={styles.filterBar}>
          <div style={styles.searchWrapper}>
            <Search size={16} color="#94a3b8" style={{ marginLeft: '10px' }} />
            <input 
              type="text" 
              placeholder="Search by student name, school name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
          </div>

          <div style={styles.filterGroup}>
            <span style={styles.filterLabel}><Filter size={13} /> Grade:</span>
            <select 
              value={gradeFilter} 
              onChange={(e) => setGradeFilter(e.target.value)}
              style={styles.selectInput}
            >
              <option value="All">All Grades</option>
              <option value="Grade 3">Grade 3</option>
              <option value="Grade 4">Grade 4</option>
              <option value="Grade 5">Grade 5</option>
              <option value="Grade 6">Grade 6</option>
              <option value="Grade 7">Grade 7</option>
              <option value="Grade 8">Grade 8</option>
            </select>

            <span style={styles.filterLabel}>Year:</span>
            <select 
              value={yearFilter} 
              onChange={(e) => setYearFilter(e.target.value)}
              style={styles.selectInput}
            >
              <option value="All">All Years</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>

            {activeTab === 'pride-nominations' ? (
              <>
                <span style={styles.filterLabel}>Status:</span>
                <select 
                  value={statusFilter} 
                  onChange={(e) => setStatusFilter(e.target.value)}
                  style={styles.selectInput}
                >
                  <option value="All">All Statuses</option>
                  <option value="Pending Review">Pending Review</option>
                  <option value="Approved">Approved</option>
                  <option value="Award Issued">Award Issued</option>
                </select>
              </>
            ) : (
              <>
                <span style={styles.filterLabel}>Track:</span>
                <select 
                  value={trackFilter} 
                  onChange={(e) => setTrackFilter(e.target.value)}
                  style={styles.selectInput}
                >
                  <option value="All">All Tracks</option>
                  <option value="Robotics">Robotics</option>
                  <option value="Coding">Coding</option>
                  <option value="Mental Maths">Mental Maths</option>
                  <option value="AI">AI &amp; Machine Learning</option>
                </select>
              </>
            )}
          </div>
        </div>
      )}

      {/* TAB CONTENT 1: PRIDE AWARD NOMINATIONS */}
      {activeTab === 'pride-nominations' && (
        <div style={styles.tableCard}>
          <div style={styles.tableHeader}>
            <h3 style={styles.tableTitle}>
              <Trophy size={18} color="#f97316" style={{ marginRight: '8px' }} />
              Students Nominated for Technik Pride Award
            </h3>
            <span style={styles.tableSubtitle}>Review school submissions, examine achievement proof files, and issue awards.</span>
          </div>

          <div style={styles.tableResponsive}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.thRow}>
                  <th style={styles.th}>ID &amp; Student Name</th>
                  <th style={styles.th}>School &amp; Location</th>
                  <th style={styles.th}>Grade / Level</th>
                  <th style={styles.th}>Achievement Category</th>
                  <th style={styles.th}>Proof Document</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Admin Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPride.length === 0 ? (
                  <tr>
                    <td colSpan="7" style={styles.emptyTd}>No nominated students found matching filter criteria.</td>
                  </tr>
                ) : (
                  filteredPride.map((item) => (
                    <tr key={item.id} style={styles.tr}>
                      <td style={styles.td}>
                        <div style={styles.studentNameText}>{item.studentName}</div>
                        <div style={styles.subText}>{item.id}</div>
                      </td>
                      <td style={styles.td}>
                        <div style={styles.schoolNameText}>{item.schoolName}</div>
                        <div style={styles.subText}>{item.schoolCity}</div>
                      </td>
                      <td style={styles.td}>
                        <span style={styles.gradeBadge}>{item.grade}</span>
                        <div style={styles.subText}>{item.level}</div>
                      </td>
                      <td style={styles.td}>
                        <div style={styles.categoryText}>{item.category}</div>
                        <div style={styles.achievementDesc} title={item.achievementTitle}>{item.achievementTitle}</div>
                      </td>
                      <td style={styles.td}>
                        <a href={`#${item.proofFile}`} onClick={(e) => { e.preventDefault(); alert(`Viewing proof document: ${item.proofFile}`); }} style={styles.fileLink}>
                          <FileText size={13} style={{ marginRight: '4px' }} />
                          {item.proofFile}
                        </a>
                      </td>
                      <td style={styles.td}>
                        {item.status === 'Approved' && (
                          <span style={{ ...styles.statusBadge, background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                            <CheckCircle2 size={12} style={{ marginRight: '4px' }} /> Approved
                          </span>
                        )}
                        {item.status === 'Award Issued' && (
                          <span style={{ ...styles.statusBadge, background: 'rgba(249, 115, 22, 0.15)', color: '#f97316', border: '1px solid rgba(249, 115, 22, 0.3)' }}>
                            <Award size={12} style={{ marginRight: '4px' }} /> Award Issued
                          </span>
                        )}
                        {item.status === 'Pending Review' && (
                          <span style={{ ...styles.statusBadge, background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                            <Clock size={12} style={{ marginRight: '4px' }} /> Pending Review
                          </span>
                        )}
                      </td>
                      <td style={styles.td}>
                        <div style={styles.actionBtnGroup}>
                          {item.status === 'Pending Review' && (
                            <button 
                              onClick={() => handleApproveNomination(item.id)}
                              style={styles.approveBtn}
                              title="Approve Nomination"
                            >
                              <Check size={13} /> Approve
                            </button>
                          )}
                          {(item.status === 'Approved' || item.status === 'Pending Review') && (
                            <button 
                              onClick={() => handleIssueAward(item.id)}
                              style={styles.awardBtn}
                              title="Issue Pride Award"
                            >
                              <Trophy size={13} /> Issue Award
                            </button>
                          )}
                          {item.status === 'Award Issued' && (
                            <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>Completed</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: OLYMPIAD REGISTERED STUDENTS */}
      {activeTab === 'olympiad-registrations' && (
        <div style={styles.tableCard}>
          <div style={styles.tableHeader}>
            <h3 style={styles.tableTitle}>
              <UserCheck size={18} color="#38bdf8" style={{ marginRight: '8px' }} />
              Students Registered for Technik Olympiad
            </h3>
            <span style={styles.tableSubtitle}>Verified list of student entries registered for upcoming Olympiad tracks.</span>
          </div>

          <div style={styles.tableResponsive}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.thRow}>
                  <th style={styles.th}>Roll Number &amp; Student</th>
                  <th style={styles.th}>School Name</th>
                  <th style={styles.th}>Grade</th>
                  <th style={styles.th}>Olympiad Competition Track</th>
                  <th style={styles.th}>Exam Hub</th>
                  <th style={styles.th}>Verification &amp; Hall Ticket</th>
                </tr>
              </thead>
              <tbody>
                {filteredOlympiad.length === 0 ? (
                  <tr>
                    <td colSpan="6" style={styles.emptyTd}>No registered students found matching filter criteria.</td>
                  </tr>
                ) : (
                  filteredOlympiad.map((item) => (
                    <tr key={item.rollNo} style={styles.tr}>
                      <td style={styles.td}>
                        <div style={styles.studentNameText}>{item.studentName}</div>
                        <div style={styles.rollNoBadge}>{item.rollNo}</div>
                      </td>
                      <td style={styles.td}>
                        <div style={styles.schoolNameText}>{item.schoolName}</div>
                        <div style={styles.subText}>Reg: {item.registeredDate}</div>
                      </td>
                      <td style={styles.td}>
                        <span style={styles.gradeBadge}>{item.grade}</span>
                      </td>
                      <td style={styles.td}>
                        <div style={styles.trackText}>{item.track}</div>
                      </td>
                      <td style={styles.td}>
                        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>{item.examCenter}</div>
                      </td>
                      <td style={styles.td}>
                        <span style={{ ...styles.statusBadge, background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                          <CheckCircle2 size={12} style={{ marginRight: '4px' }} /> {item.verificationStatus}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB CONTENT 3: ADMIN USERS ROSTER */}
      {activeTab === 'admin-users' && (
        <div style={styles.tableCard}>
          <div style={{ ...styles.tableHeader, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={styles.tableTitle}>
                <Users size={18} color="#10b981" style={{ marginRight: '8px' }} />
                Registered Technik Conducting Professionals &amp; Admins
              </h3>
              <span style={styles.tableSubtitle}>Authorized administrators and exam conducting officers for Technik Olympiad.</span>
            </div>
            <button 
              onClick={() => setShowAddUserModal(true)}
              style={styles.addUserBtnSmall}
            >
              <UserPlus size={14} /> + Add User
            </button>
          </div>

          <div style={styles.tableResponsive}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.thRow}>
                  <th style={styles.th}>Admin ID &amp; Full Name</th>
                  <th style={styles.th}>Official Email &amp; Contact</th>
                  <th style={styles.th}>Access Role</th>
                  <th style={styles.th}>Assigned Zone</th>
                  <th style={styles.th}>Date Registered</th>
                  <th style={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {adminUsersList.map((usr) => (
                  <tr key={usr.id} style={styles.tr}>
                    <td style={styles.td}>
                      <div style={styles.studentNameText}>{usr.name}</div>
                      <div style={styles.subText}>{usr.id}</div>
                    </td>
                    <td style={styles.td}>
                      <div style={styles.schoolNameText}>{usr.email}</div>
                      <div style={styles.subText}>{usr.mobile}</div>
                    </td>
                    <td style={styles.td}>
                      <span style={{
                        display: 'inline-block',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: usr.role.includes('Super') ? '#f97316' : '#2563eb',
                        background: usr.role.includes('Super') ? '#ffedd5' : '#dbeafe',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px'
                      }}>
                        {usr.role}
                      </span>
                    </td>
                    <td style={styles.td}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>{usr.zone}</div>
                    </td>
                    <td style={styles.td}>
                      <div style={styles.subText}>{usr.addedDate}</div>
                    </td>
                    <td style={styles.td}>
                      <span style={{ ...styles.statusBadge, background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                        <CheckCircle2 size={12} style={{ marginRight: '4px' }} /> {usr.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: "+ ADD USER" (Add Technik Conducting Professional / Admin)       */}
      {/* ========================================================================= */}
      {showAddUserModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.addUserModalCard}>
            
            <div style={styles.modalHeaderRow}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <UserPlus size={20} color="#f97316" />
                <h3 style={styles.modalHeaderTitle}>Add Technik Conducting Professional / Admin</h3>
              </div>
              <button 
                onClick={() => setShowAddUserModal(false)}
                style={styles.closeModalBtn}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateUserSubmit} style={styles.modalForm}>
              <div style={styles.formField}>
                <label style={styles.formLabel}>Full Name <span style={{ color: '#ef4444' }}>*</span></label>
                <input 
                  type="text"
                  placeholder="e.g. Dr. Sunita Kulkarni"
                  value={newAdminUser.name}
                  onChange={(e) => setNewAdminUser({ ...newAdminUser, name: e.target.value })}
                  style={styles.modalInput}
                  required
                />
              </div>

              <div style={styles.formField}>
                <label style={styles.formLabel}>Official Email Address <span style={{ color: '#ef4444' }}>*</span></label>
                <input 
                  type="email"
                  placeholder="e.g. sunita.k@technikolympiad.com"
                  value={newAdminUser.email}
                  onChange={(e) => setNewAdminUser({ ...newAdminUser, email: e.target.value })}
                  style={styles.modalInput}
                  required
                />
              </div>

              <div style={styles.formField}>
                <label style={styles.formLabel}>Mobile Number</label>
                <input 
                  type="text"
                  placeholder="e.g. +91 98450 67890"
                  value={newAdminUser.mobile}
                  onChange={(e) => setNewAdminUser({ ...newAdminUser, mobile: e.target.value })}
                  style={styles.modalInput}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={styles.formField}>
                  <label style={styles.formLabel}>Assigned Access Role</label>
                  <select 
                    value={newAdminUser.role}
                    onChange={(e) => setNewAdminUser({ ...newAdminUser, role: e.target.value })}
                    style={styles.modalSelect}
                  >
                    <option value="Super Admin">Super Admin</option>
                    <option value="Regional Olympiad Admin">Regional Olympiad Admin</option>
                    <option value="Pride Award Evaluator">Pride Award Evaluator</option>
                    <option value="Exam Center Inspector">Exam Center Inspector</option>
                  </select>
                </div>

                <div style={styles.formField}>
                  <label style={styles.formLabel}>Assigned Zone / Region</label>
                  <select 
                    value={newAdminUser.zone}
                    onChange={(e) => setNewAdminUser({ ...newAdminUser, zone: e.target.value })}
                    style={styles.modalSelect}
                  >
                    <option value="South Zone (Chennai)">South Zone (Chennai)</option>
                    <option value="North Zone (Delhi)">North Zone (Delhi)</option>
                    <option value="West Zone (Mumbai)">West Zone (Mumbai)</option>
                    <option value="East Zone (Kolkata)">East Zone (Kolkata)</option>
                    <option value="Central Headquarters">Central Headquarters</option>
                  </select>
                </div>
              </div>

              <div style={styles.modalFooterRow}>
                <button 
                  type="button" 
                  onClick={() => setShowAddUserModal(false)}
                  style={styles.cancelBtn}
                >
                  Cancel
                </button>

                <button 
                  type="submit"
                  style={styles.submitUserBtn}
                >
                  <UserPlus size={16} />
                  <span>Register &amp; Issue Passcode</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}

const styles = {
  // Login Screen Styles (White & Royal Blue Theme)
  loginPageOverlay: {
    minHeight: '85vh',
    background: 'linear-gradient(135deg, #eff6ff 0%, #e0f2fe 50%, #f8fafc 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2.5rem 1rem',
    fontFamily: 'Inter, sans-serif',
  },
  loginCard: {
    background: '#ffffff',
    border: '1px solid #cbd5e1',
    borderRadius: '24px',
    padding: '2.5rem',
    maxWidth: '480px',
    width: '100%',
    boxShadow: '0 20px 45px rgba(37, 99, 235, 0.12), 0 4px 15px rgba(0, 0, 0, 0.05)',
  },
  loginHeader: {
    textAlign: 'center',
    marginBottom: '1.75rem',
  },
  loginLogoBox: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: '#eff6ff',
    border: '2px solid #2563eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem auto',
    boxShadow: '0 4px 15px rgba(37, 99, 235, 0.25)',
  },
  loginTitle: {
    fontSize: '1.35rem',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '0.4rem',
    fontFamily: 'var(--font-heading, sans-serif)',
  },
  loginSub: {
    fontSize: '0.82rem',
    color: '#475569',
    lineHeight: '1.4',
  },
  errorBox: {
    background: '#fef2f2',
    border: '1px solid #fecaca',
    borderRadius: '10px',
    padding: '0.65rem 0.9rem',
    fontSize: '0.82rem',
    color: '#991b1b',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.25rem',
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  formField: {
    marginBottom: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
  },
  formLabel: {
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#1e293b',
    marginBottom: '0.4rem',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    background: '#f8fafc',
    border: '1.5px solid #cbd5e1',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'border 0.2s ease',
  },
  authInput: {
    width: '100%',
    background: 'transparent',
    border: 'none',
    padding: '0.75rem 0.85rem',
    color: '#0f172a',
    fontSize: '0.9rem',
    fontWeight: 600,
    outline: 'none',
  },
  demoFillBtn: {
    background: 'transparent',
    border: 'none',
    color: '#2563eb',
    fontSize: '0.78rem',
    fontWeight: 700,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
    padding: 0,
  },
  primaryAuthBtn: {
    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    padding: '0.85rem 1.25rem',
    fontSize: '0.9rem',
    fontWeight: 800,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
    transition: 'all 0.2s ease',
  },
  secondaryAuthBtn: {
    background: '#f1f5f9',
    color: '#334155',
    border: '1px solid #cbd5e1',
    borderRadius: '10px',
    padding: '0.65rem 1rem',
    fontSize: '0.8rem',
    fontWeight: 700,
    cursor: 'pointer',
  },
  otpNoticeBox: {
    background: '#f0f9ff',
    border: '1px solid #bae6fd',
    borderRadius: '12px',
    padding: '0.85rem 1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.25rem',
  },

  // Authenticated Portal Dashboard Styles
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '2rem 1.5rem',
    minHeight: '85vh',
    fontFamily: 'Inter, sans-serif',
  },
  headerCard: {
    background: 'linear-gradient(135deg, #041026 0%, #0f172a 100%)',
    borderRadius: '16px',
    padding: '2rem',
    color: '#ffffff',
    marginBottom: '1.5rem',
    boxShadow: '0 10px 30px rgba(4, 16, 38, 0.25)',
    border: '1px solid rgba(56, 189, 248, 0.2)',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
  headerTitleGroup: {
    maxWidth: '800px',
  },
  adminBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.72rem',
    fontWeight: 800,
    color: '#f97316',
    background: 'rgba(249, 115, 22, 0.12)',
    padding: '0.3rem 0.75rem',
    borderRadius: '20px',
    border: '1px solid rgba(249, 115, 22, 0.3)',
    letterSpacing: '0.08em',
    marginBottom: '0.75rem',
  },
  headerTitle: {
    fontSize: '1.75rem',
    fontWeight: 800,
    fontFamily: 'var(--font-heading, sans-serif)',
    marginBottom: '0.5rem',
    color: '#ffffff',
  },
  headerDesc: {
    fontSize: '0.88rem',
    color: '#94a3b8',
    lineHeight: '1.5',
  },
  headerActionsBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  addUserHeaderBtn: {
    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    color: '#ffffff',
    border: 'none',
    padding: '0.65rem 1.25rem',
    borderRadius: '10px',
    fontSize: '0.85rem',
    fontWeight: 800,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    boxShadow: '0 4px 14px rgba(249, 115, 22, 0.4)',
  },
  signOutHeaderBtn: {
    background: 'rgba(239, 68, 68, 0.15)',
    color: '#fca5a5',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    padding: '0.65rem 1rem',
    borderRadius: '10px',
    fontSize: '0.82rem',
    fontWeight: 700,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  metricCard: {
    background: '#ffffff',
    borderRadius: '12px',
    padding: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  },
  metricIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  metricVal: {
    fontSize: '1.4rem',
    fontWeight: 800,
    color: '#0f172a',
    lineHeight: '1.1',
  },
  metricLbl: {
    fontSize: '0.78rem',
    fontWeight: 600,
    color: '#64748b',
    marginTop: '0.2rem',
  },
  tabBar: {
    display: 'flex',
    gap: '1.5rem',
    borderBottom: '2px solid #e2e8f0',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
  },
  tabBtn: {
    background: 'transparent',
    border: 'none',
    padding: '0.75rem 0.5rem',
    fontSize: '0.92rem',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'all 0.2s ease',
  },
  filterBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    background: '#ffffff',
    padding: '1rem 1.25rem',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    marginBottom: '1.5rem',
  },
  searchWrapper: {
    display: 'flex',
    alignItems: 'center',
    background: '#f8fafc',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    flex: '1 1 300px',
    maxWidth: '450px',
  },
  searchInput: {
    border: 'none',
    background: 'transparent',
    padding: '0.6rem 0.75rem',
    fontSize: '0.85rem',
    width: '100%',
    outline: 'none',
  },
  filterGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    flexWrap: 'wrap',
  },
  filterLabel: {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#64748b',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.2rem',
  },
  selectInput: {
    padding: '0.5rem 0.75rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '0.82rem',
    outline: 'none',
    background: '#ffffff',
    color: '#0f172a',
    fontWeight: 500,
  },
  tableCard: {
    background: '#ffffff',
    borderRadius: '14px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
    overflow: 'hidden',
  },
  tableHeader: {
    padding: '1.25rem 1.5rem',
    borderBottom: '1px solid #f1f5f9',
    background: '#f8fafc',
  },
  tableTitle: {
    fontSize: '1.05rem',
    fontWeight: 800,
    color: '#0f172a',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.2rem',
  },
  tableSubtitle: {
    fontSize: '0.78rem',
    color: '#64748b',
  },
  tableResponsive: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
  },
  thRow: {
    background: '#f1f5f9',
    borderBottom: '1px solid #e2e8f0',
  },
  th: {
    padding: '0.85rem 1.25rem',
    fontSize: '0.75rem',
    fontWeight: 700,
    color: '#475569',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  tr: {
    borderBottom: '1px solid #f1f5f9',
    transition: 'background 0.15s ease',
  },
  td: {
    padding: '1rem 1.25rem',
    verticalAlign: 'middle',
  },
  studentNameText: {
    fontWeight: 700,
    fontSize: '0.9rem',
    color: '#0f172a',
  },
  schoolNameText: {
    fontWeight: 600,
    fontSize: '0.85rem',
    color: '#1e293b',
  },
  subText: {
    fontSize: '0.75rem',
    color: '#64748b',
    marginTop: '0.15rem',
  },
  gradeBadge: {
    display: 'inline-block',
    fontSize: '0.72rem',
    fontWeight: 700,
    color: '#0284c7',
    background: '#e0f2fe',
    padding: '0.2rem 0.5rem',
    borderRadius: '6px',
  },
  rollNoBadge: {
    display: 'inline-block',
    fontSize: '0.72rem',
    fontWeight: 800,
    color: '#d97706',
    background: '#fef3c7',
    padding: '0.2rem 0.5rem',
    borderRadius: '6px',
    marginTop: '0.2rem',
  },
  categoryText: {
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#0f172a',
  },
  achievementDesc: {
    fontSize: '0.75rem',
    color: '#475569',
    maxWidth: '260px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  trackText: {
    fontSize: '0.85rem',
    fontWeight: 700,
    color: '#2563eb',
  },
  fileLink: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '0.78rem',
    fontWeight: 600,
    color: '#2563eb',
    textDecoration: 'none',
  },
  statusBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '0.72rem',
    fontWeight: 700,
    padding: '0.25rem 0.6rem',
    borderRadius: '12px',
    whiteSpace: 'nowrap',
  },
  actionBtnGroup: {
    display: 'flex',
    gap: '0.4rem',
    alignItems: 'center',
  },
  approveBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.2rem',
    background: '#10b981',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    padding: '0.35rem 0.65rem',
    fontSize: '0.72rem',
    fontWeight: 700,
    cursor: 'pointer',
  },
  awardBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.2rem',
    background: '#f97316',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    padding: '0.35rem 0.65rem',
    fontSize: '0.72rem',
    fontWeight: 700,
    cursor: 'pointer',
  },
  addUserBtnSmall: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
    background: '#10b981',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.45rem 0.85rem',
    fontSize: '0.78rem',
    fontWeight: 700,
    cursor: 'pointer',
  },
  emptyTd: {
    padding: '3rem',
    textAlign: 'center',
    color: '#64748b',
    fontSize: '0.9rem',
    fontWeight: 500,
  },

  // Modal Styles
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(15, 23, 42, 0.75)',
    backdropFilter: 'blur(8px)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
  },
  addUserModalCard: {
    background: '#ffffff',
    borderRadius: '20px',
    maxWidth: '520px',
    width: '100%',
    padding: '2rem',
    boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
    border: '1px solid #e2e8f0',
  },
  modalHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #f1f5f9',
  },
  modalHeaderTitle: {
    fontSize: '1.15rem',
    fontWeight: 800,
    color: '#0f172a',
    margin: 0,
  },
  closeModalBtn: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#64748b',
    padding: '0.2rem',
  },
  modalForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  modalInput: {
    width: '100%',
    padding: '0.65rem 0.85rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '0.85rem',
    outline: 'none',
    color: '#0f172a',
  },
  modalSelect: {
    width: '100%',
    padding: '0.65rem 0.85rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '0.82rem',
    outline: 'none',
    background: '#ffffff',
    color: '#0f172a',
    fontWeight: 500,
  },
  modalFooterRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.75rem',
    marginTop: '1.5rem',
    paddingTop: '1rem',
    borderTop: '1px solid #f1f5f9',
  },
  cancelBtn: {
    background: '#f1f5f9',
    color: '#475569',
    border: 'none',
    borderRadius: '8px',
    padding: '0.65rem 1.1rem',
    fontSize: '0.82rem',
    fontWeight: 700,
    cursor: 'pointer',
  },
  submitUserBtn: {
    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.65rem 1.25rem',
    fontSize: '0.85rem',
    fontWeight: 800,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)',
  }
};
