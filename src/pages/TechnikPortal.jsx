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
  Zap
} from 'lucide-react';

export default function TechnikPortal() {
  const navigate = useNavigate();

  // Admin Role State: 'super-admin' | 'olympiad-admin'
  const [adminRole, setAdminRole] = useState('super-admin');

  // Active Main Tab: 'pride-nominations' | 'olympiad-registrations' | 'schools-directory'
  const [activeTab, setActiveTab] = useState('pride-nominations');

  // Filter & Search State
  const [searchTerm, setSearchTerm] = useState('');
  const [gradeFilter, setGradeFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [trackFilter, setTrackFilter] = useState('All');

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

  // Handle Approve Nomination Action
  const handleApproveNomination = (id) => {
    setPrideNominations(prev =>
      prev.map(item => item.id === id ? { ...item, status: 'Approved' } : item)
    );
    alert(`Nomination ${id} approved successfully!`);
  };

  // Handle Issue Award Action
  const handleIssueAward = (id) => {
    setPrideNominations(prev =>
      prev.map(item => item.id === id ? { ...item, status: 'Award Issued' } : item)
    );
    alert(`Technik Pride Award & Certificate issued for ${id}!`);
  };

  // Filter Pride Nominations
  const filteredPride = prideNominations.filter(item => {
    const matchesSearch = 
      item.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.schoolName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = gradeFilter === 'All' || item.grade === gradeFilter;
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
    return matchesSearch && matchesGrade && matchesStatus;
  });

  // Filter Olympiad Registrations
  const filteredOlympiad = olympiadRegistrations.filter(item => {
    const matchesSearch = 
      item.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.schoolName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = gradeFilter === 'All' || item.grade === gradeFilter;
    const matchesTrack = trackFilter === 'All' || item.track.includes(trackFilter);
    return matchesSearch && matchesGrade && matchesTrack;
  });

  const totalPrideCount = prideNominations.length;
  const pendingPrideCount = prideNominations.filter(i => i.status === 'Pending Review').length;
  const approvedPrideCount = prideNominations.filter(i => i.status === 'Approved' || i.status === 'Award Issued').length;
  const totalOlympiadCount = olympiadRegistrations.length;

  return (
    <div className="technik-admin-portal" style={styles.container}>
      {/* Top Header Banner */}
      <div style={styles.headerCard}>
        <div style={styles.headerContent}>
          <div style={styles.headerTitleGroup}>
            <div style={styles.adminBadge}>
              <ShieldCheck size={14} color="#f97316" />
              <span>TECHNIK OFFICIAL ADMIN PORTAL</span>
            </div>
            <h1 style={styles.headerTitle}>
              Technik Super Admin & Olympiad Portal
            </h1>
            <p style={styles.headerDesc}>
              Centralized command center for Super Admins and Olympiad Regional Coordinators to review student nominations, verify Olympiad registrations, and issue Technik Pride Awards.
            </p>
          </div>

          {/* Role Switcher */}
          <div style={styles.roleBox}>
            <span style={styles.roleLabel}>Active Role:</span>
            <div style={styles.roleToggleGroup}>
              <button 
                onClick={() => setAdminRole('super-admin')}
                style={{
                  ...styles.roleBtn,
                  background: adminRole === 'super-admin' ? '#f97316' : 'transparent',
                  color: adminRole === 'super-admin' ? '#ffffff' : '#cbd5e1',
                }}
              >
                Super Admin
              </button>
              <button 
                onClick={() => setAdminRole('olympiad-admin')}
                style={{
                  ...styles.roleBtn,
                  background: adminRole === 'olympiad-admin' ? '#38bdf8' : 'transparent',
                  color: adminRole === 'olympiad-admin' ? '#0f172a' : '#cbd5e1',
                }}
              >
                Olympiad Admin
              </button>
            </div>
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
            <School size={24} />
          </div>
          <div>
            <div style={styles.metricVal}>64</div>
            <div style={styles.metricLbl}>Partner Participating Schools</div>
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
      </div>

      {/* Filter Control Bar */}
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
                <option value="AI">AI & Machine Learning</option>
              </select>
            </>
          )}
        </div>
      </div>

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
                  <th style={styles.th}>ID & Student Name</th>
                  <th style={styles.th}>School & Location</th>
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
                  <th style={styles.th}>Roll Number & Student</th>
                  <th style={styles.th}>School Name</th>
                  <th style={styles.th}>Grade</th>
                  <th style={styles.th}>Olympiad Competition Track</th>
                  <th style={styles.th}>Exam Hub</th>
                  <th style={styles.th}>Verification & Hall Ticket</th>
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
    </div>
  );
}

const styles = {
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
  roleBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.4rem',
  },
  roleLabel: {
    fontSize: '0.75rem',
    fontWeight: 600,
    color: '#94a3b8',
  },
  roleToggleGroup: {
    display: 'flex',
    background: 'rgba(255, 255, 255, 0.08)',
    padding: '0.25rem',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  roleBtn: {
    border: 'none',
    padding: '0.4rem 0.85rem',
    borderRadius: '7px',
    fontSize: '0.78rem',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
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
  emptyTd: {
    padding: '3rem',
    textAlign: 'center',
    color: '#64748b',
    fontSize: '0.9rem',
    fontWeight: 500,
  }
};
