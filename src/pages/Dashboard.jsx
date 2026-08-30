import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Calendar, CheckCircle2, ChevronRight, FileDown, Lock, ShieldCheck, Sparkles, BookOpen, Compass, Plus, TrendingUp, Zap, Clock, Activity, BarChart2 } from 'lucide-react';

export default function Dashboard({ registrations, onUpdateStage, onLoadDemoData }) {
  const [activeRegId, setActiveRegId] = useState(registrations.length > 0 ? registrations[0].id : null);
  
  React.useEffect(() => {
    if (registrations.length > 0 && !activeRegId) {
      setActiveRegId(registrations[0].id);
    }
  }, [registrations, activeRegId]);

  const activeReg = registrations.find(r => r.id === activeRegId) || registrations[0];

  const stages = [
    { num: 1, label: "School Qualifier", reward: "Participation Certificate" },
    { num: 2, label: "District Honors", reward: "Bronze/Silver Medal & Merit Certificate" },
    { num: 3, label: "State Finalist", reward: "₹5,000 Cash Prize & Gold Medal" },
    { num: 4, label: "National Champion", reward: "₹50,000 Grand Prize & Champion Trophy" }
  ];

  const handleStageClick = (regId, stageNum) => {
    onUpdateStage(regId, stageNum);
  };

  const [downloadingCert, setDownloadingCert] = useState(null);

  const simulateDownload = (certName) => {
    setDownloadingCert(certName);
    setTimeout(() => {
      setDownloadingCert(null);
      alert(`Successfully downloaded mock PDF: ${certName.replace(/\s+/g, '_')}_Certificate.pdf`);
    }, 1500);
  };

  // Skill analytics mock metrics
  const skillMetrics = [
    { skill: "Logic & Structure", score: 88, color: "var(--accent)" },
    { skill: "Computational Speed", score: 82, color: "var(--secondary)" },
    { skill: "Accuracy Rate", score: 94, color: "var(--success)" },
    { skill: "Problem Solving", score: 90, color: "var(--gold)" }
  ];

  // Exam schedule events
  const scheduleEvents = [
    { title: "Skill Compass Diagnostic", date: "Completed", status: "Done", badge: "badge-indigo" },
    { title: "Mock Exam 1 (Diagnostic)", date: "Sep 12, 2026", status: "Passed (86%)", badge: "badge-cyan" },
    { title: "Mock Exam 2 (Proctored)", date: "Sep 28, 2026", status: "Upcoming", badge: "badge-purple" },
    { title: "National Qualifier Exam", date: "Oct 18, 2026", status: "Scheduled", badge: "badge-gold" }
  ];

  return (
    <div style={styles.page}>
      <header className="container" style={styles.header}>
        <h1 style={styles.title}>Student <span className="text-gradient">Dashboard</span></h1>
        <p style={styles.subtitle}>Track your qualifiers, monitor skill growth graphs, view exam schedules, and download unlocked awards.</p>
      </header>

      <main className="container">
        {registrations.length === 0 ? (
          /* Empty State */
          <div className="glass-card" style={styles.emptyCard}>
            <div style={styles.emptyIconContainer}>
              <Award size={48} color="var(--text-muted)" />
            </div>
            
            <h2 style={styles.emptyTitle}>No Registered Tracks Yet</h2>
            <p style={styles.emptyDesc}>
              You have not registered for any Olympiad tracks. Take the Skill Compass quiz to find your recommended matches, or browse all options in our Catalog.
            </p>

            <div style={styles.emptyActions}>
              <Link to="/skill-compass" className="btn btn-primary">
                <Compass size={16} />
                Find My Track
              </Link>
              <Link to="/catalog" className="btn btn-ghost">
                <BookOpen size={16} />
                Browse Catalog
              </Link>
              <button onClick={onLoadDemoData} className="btn btn-ghost" style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}>
                <Sparkles size={16} />
                Load Demo Data
              </button>
            </div>
          </div>
        ) : (
          /* Dashboard Main Layout */
          <div style={styles.dashGrid} className="dashboard-grid">
            
            {/* Left Column */}
            <div style={styles.mainCol}>
              {/* Tab Selector if multiple tracks */}
              {registrations.length > 1 && (
                <div style={styles.tabsContainer}>
                  {registrations.map((reg) => (
                    <button
                      key={reg.id}
                      onClick={() => setActiveRegId(reg.id)}
                      style={{
                        ...styles.tabBtn,
                        borderColor: activeReg.id === reg.id ? 'var(--primary)' : 'var(--border-subtle)',
                        background: activeReg.id === reg.id ? 'rgba(15, 23, 42, 0.05)' : '#ffffff',
                        color: activeReg.id === reg.id ? 'var(--text-primary)' : 'var(--text-secondary)'
                      }}
                    >
                      {reg.track}
                    </button>
                  ))}
                </div>
              )}

              {/* Progress Stage Tracker Card */}
              <div className="glass-card" style={styles.progressCard}>
                <div style={styles.cardHeader}>
                  <div>
                    <span className="badge badge-purple" style={{ marginBottom: '0.5rem' }}>Active Track</span>
                    <h2 style={styles.trackTitle}>{activeReg.track}</h2>
                    <p style={styles.studentInfo}>Student: <strong>{activeReg.studentName}</strong> | Class: {activeReg.grade}</p>
                  </div>
                  <span style={styles.regIdBadge}>{activeReg.id}</span>
                </div>

                <div style={styles.stagesInstruction}>
                  <Sparkles size={14} color="var(--accent)" />
                  <span>Interactive Stage Flow: Click on nodes to simulate advancing and unlocking certificates.</span>
                </div>

                {/* Horizontal Progress Node Bar */}
                <div className="stage-tracker" style={{ margin: '3rem 0' }}>
                  <div 
                    className="stage-tracker-progress" 
                    style={{ width: `${((activeReg.stage - 1) / (stages.length - 1)) * 100}%` }}
                  />
                  {stages.map((stage) => {
                    const isActive = activeReg.stage === stage.num;
                    const isCompleted = activeReg.stage > stage.num;
                    
                    return (
                      <div 
                        key={stage.num}
                        className={`stage-node ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                        onClick={() => handleStageClick(activeReg.id, stage.num)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="stage-dot">
                          {stage.num}
                        </div>
                        <span className="stage-label">{stage.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* NEW SECTION: SKILL COMPASS ANALYTICS & PREPARATION GROWTH */}
              <div className="glass-card" style={styles.analyticsCard}>
                <div style={styles.analyticsHeader}>
                  <div>
                    <span className="badge badge-indigo" style={{ marginBottom: '0.35rem' }}>SKILL COMPASS ANALYTICS</span>
                    <h3 style={styles.analyticsTitle}>Preparation Growth & Skill Metrics</h3>
                  </div>
                  <div style={styles.prepReadinessBadge}>
                    <Zap size={16} color="var(--secondary)" />
                    <span>78% Exam Ready</span>
                  </div>
                </div>

                <div style={styles.analyticsGrid} className="dashboard-analytics-grid">
                  {/* Skill Breakdown Metrics */}
                  <div style={styles.metricsBox}>
                    <h4 style={styles.boxTitle}>Cognitive Skill Breakdown</h4>
                    <div style={styles.skillsList}>
                      {skillMetrics.map((m, idx) => (
                        <div key={idx} style={styles.skillItem}>
                          <div style={styles.skillRowHeader}>
                            <span style={styles.skillName}>{m.skill}</span>
                            <span style={{ ...styles.skillScore, color: m.color }}>{m.score}%</span>
                          </div>
                          <div style={styles.barBg}>
                            <div style={{ ...styles.barFill, width: `${m.score}%`, background: m.color }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual SVG Preparation Progress Graph */}
                  <div style={styles.graphBox}>
                    <h4 style={styles.boxTitle}>4-Week Preparation Score Curve</h4>
                    <div style={styles.svgWrapper}>
                      <svg viewBox="0 0 300 120" style={styles.svgChart}>
                        {/* Grid lines */}
                        <line x1="0" y1="30" x2="300" y2="30" stroke="#f1f5f9" strokeWidth="1" />
                        <line x1="0" y1="60" x2="300" y2="60" stroke="#f1f5f9" strokeWidth="1" />
                        <line x1="0" y1="90" x2="300" y2="90" stroke="#f1f5f9" strokeWidth="1" />

                        {/* Curve fill area */}
                        <polygon 
                          points="20,95 90,75 170,50 250,20 250,110 20,110" 
                          fill="rgba(37, 99, 235, 0.08)" 
                        />
                        
                        {/* Score Line */}
                        <polyline 
                          fill="none" 
                          stroke="var(--accent)" 
                          strokeWidth="3" 
                          points="20,95 90,75 170,50 250,20" 
                        />

                        {/* Points */}
                        <circle cx="20" cy="95" r="4" fill="var(--accent)" />
                        <circle cx="90" cy="75" r="4" fill="var(--accent)" />
                        <circle cx="170" cy="50" r="4" fill="var(--accent)" />
                        <circle cx="250" cy="20" r="5" fill="var(--secondary)" />

                        {/* Labels */}
                        <text x="15" y="115" fontSize="10" fill="#64748b">Wk 1 (55%)</text>
                        <text x="85" y="115" fontSize="10" fill="#64748b">Wk 2 (68%)</text>
                        <text x="165" y="115" fontSize="10" fill="#64748b">Wk 3 (79%)</text>
                        <text x="240" y="115" fontSize="10" fill="var(--secondary)" fontWeight="bold">Wk 4 (88%)</text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Awards and Certificates Grid */}
              <div style={styles.awardsSection}>
                <h3 style={styles.sectionHeading}>Unlocked Awards & Achievements</h3>
                
                <div style={styles.awardsGrid} className="dashboard-awards-grid">
                  {stages.map((stage) => {
                    const isUnlocked = activeReg.stage >= stage.num;
                    
                    return (
                      <div 
                        key={stage.num}
                        className="glass-card"
                        style={{
                          ...styles.awardCard,
                          borderColor: isUnlocked ? 'var(--border-glow)' : 'var(--border-subtle)',
                          background: '#ffffff',
                          opacity: isUnlocked ? 1 : 0.65
                        }}
                      >
                        <div style={styles.awardCardTop}>
                          <div style={{
                            ...styles.awardIconWrapper,
                            background: isUnlocked ? 'rgba(217, 119, 6, 0.08)' : 'rgba(15,23,42,0.03)',
                            borderColor: isUnlocked ? 'var(--gold)' : 'var(--border-subtle)'
                          }}>
                            {isUnlocked ? <Award size={20} color="var(--gold)" /> : <Lock size={20} color="var(--text-muted)" />}
                          </div>
                          
                          {isUnlocked ? (
                            <span className="badge badge-indigo">Unlocked</span>
                          ) : (
                            <span className="badge" style={{ background: '#f1f5f9', color: 'var(--text-muted)' }}>Locked</span>
                          )}
                        </div>

                        <h4 style={styles.awardCardTitle}>{stage.reward}</h4>
                        <p style={styles.awardCardDesc}>Awarded to students passing the {stage.label} level.</p>
                        
                        {isUnlocked ? (
                          <button 
                            onClick={() => simulateDownload(stage.reward)} 
                            className="btn btn-ghost btn-mini" 
                            style={styles.downloadBtn}
                            disabled={downloadingCert !== null}
                          >
                            {downloadingCert === stage.reward ? (
                              <>Simulating Download...</>
                            ) : (
                              <>
                                <FileDown size={14} />
                                Download PDF
                              </>
                            )}
                          </button>
                        ) : (
                          <button className="btn btn-disabled btn-mini" style={styles.downloadBtn} disabled>
                            <Lock size={12} />
                            Locked
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div style={styles.sideCol}>
              {/* Exam & Mock Schedule Card */}
              <div className="glass-card" style={styles.statsCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <Calendar size={18} color="var(--accent)" />
                  <h3 style={styles.sideCardHeader}>Exam & Mock Schedule</h3>
                </div>

                <div style={styles.scheduleList}>
                  {scheduleEvents.map((evt, idx) => (
                    <div key={idx} style={styles.scheduleItem}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={styles.scheduleTitle}>{evt.title}</span>
                        <span className={`badge ${evt.badge}`} style={{ fontSize: '0.65rem' }}>{evt.status}</span>
                      </div>
                      <span style={styles.scheduleDate}>{evt.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Details Card */}
              <div className="glass-card" style={styles.statsCard}>
                <h3 style={styles.sideCardHeader}>Registration Summary</h3>

                <div style={styles.statBox}>
                  <div style={styles.statHeader}>
                    <Calendar size={16} color="var(--accent)" />
                    <span style={styles.statTitle}>Qualifier Exam Date</span>
                  </div>
                  <span style={styles.statVal}>October 18, 2026</span>
                  <span style={styles.statSub}>Online proctored | 2 Hours</span>
                </div>

                <div style={styles.statDivider} />

                <div style={styles.statBox}>
                  <div style={styles.statHeader}>
                    <BookOpen size={16} color="var(--primary)" />
                    <span style={styles.statTitle}>Syllabus Progress</span>
                  </div>
                  
                  <div style={styles.progressTrackerWrapper}>
                    <div style={styles.progressBarBg}>
                      <div style={{ ...styles.progressBarFill, width: '42%' }} />
                    </div>
                    <span style={styles.progressPercent}>42% Complete</span>
                  </div>
                  <span style={styles.statSub}>12 of 28 study modules finished</span>
                </div>

                <div style={styles.statDivider} />

                <div style={styles.statBox}>
                  <div style={styles.statHeader}>
                    <ShieldCheck size={16} color="var(--success)" />
                    <span style={styles.statTitle}>Registration Details</span>
                  </div>
                  
                  <div style={styles.regDetailsList}>
                    <div style={styles.detailRow}>
                      <span style={styles.detailLabel}>Format</span>
                      <span style={styles.detailValText}>{activeReg.regType}</span>
                    </div>
                    <div style={styles.detailRow}>
                      <span style={styles.detailLabel}>School</span>
                      <span style={styles.detailValText} title={activeReg.school}>{activeReg.school.substring(0, 16)}...</span>
                    </div>
                    <div style={styles.detailRow}>
                      <span style={styles.detailLabel}>Registered on</span>
                      <span style={styles.detailValText}>{activeReg.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/catalog" className="btn btn-ghost" style={styles.registerMoreBtn}>
                <Plus size={16} />
                Register for Another Track
              </Link>
            </div>
            
          </div>
        )}
      </main>
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
  emptyCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '4rem 2rem',
    maxWidth: '650px',
    margin: '0 auto',
    background: '#ffffff',
  },
  emptyIconContainer: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: '#f1f5f9',
    border: '1px solid var(--border-subtle)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  emptyTitle: {
    fontSize: '1.75rem',
    marginBottom: '0.75rem',
  },
  emptyDesc: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    maxWidth: '460px',
    lineHeight: '1.6',
    marginBottom: '2.5rem',
  },
  emptyActions: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  dashGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '2rem',
    alignItems: 'start',
  },
  mainCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  sideCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  tabsContainer: {
    display: 'flex',
    gap: '0.5rem',
    overflowX: 'auto',
    paddingBottom: '0.25rem',
  },
  tabBtn: {
    padding: '0.5rem 1.25rem',
    borderRadius: '8px',
    border: '1px solid',
    cursor: 'pointer',
    fontFamily: 'var(--font-heading)',
    fontWeight: 600,
    fontSize: '0.85rem',
    whiteSpace: 'nowrap',
    transition: 'all var(--transition-fast)',
  },
  progressCard: {
    padding: '2.5rem',
    border: '1px solid var(--border-subtle)',
    background: '#ffffff',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottom: '1px solid var(--border-subtle)',
    paddingBottom: '1.5rem',
    marginBottom: '1.5rem',
  },
  trackTitle: {
    fontSize: '1.75rem',
    lineHeight: '1.2',
  },
  studentInfo: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    marginTop: '0.25rem',
  },
  regIdBadge: {
    fontSize: '0.75rem',
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    color: 'var(--text-muted)',
    border: '1px solid var(--border-subtle)',
    padding: '0.25rem 0.5rem',
    borderRadius: '6px',
    background: '#f1f5f9',
  },
  stagesInstruction: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.75rem',
    color: 'var(--text-secondary)',
    background: 'rgba(37, 99, 235, 0.04)',
    border: '1px solid rgba(37, 99, 235, 0.15)',
    borderRadius: '6px',
    padding: '0.5rem 0.75rem',
  },

  /* Analytics Section Styles */
  analyticsCard: {
    padding: '2rem',
    background: '#ffffff',
    border: '1px solid var(--border-subtle)',
    textAlign: 'left',
  },
  analyticsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  analyticsTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
  },
  prepReadinessBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: '0.35rem 0.85rem',
    borderRadius: '50px',
    background: 'rgba(249, 115, 22, 0.08)',
    border: '1px solid rgba(249, 115, 22, 0.3)',
    color: 'var(--secondary)',
    fontWeight: 700,
    fontSize: '0.8rem',
    fontFamily: 'var(--font-heading)',
  },
  analyticsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1.5rem',
  },
  metricsBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  boxTitle: {
    fontSize: '0.95rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  skillItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  skillRowHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.8rem',
  },
  skillName: {
    color: 'var(--text-secondary)',
    fontWeight: 500,
  },
  skillScore: {
    fontWeight: 700,
  },
  barBg: {
    height: '6px',
    background: '#f1f5f9',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width var(--transition-slow)',
  },
  graphBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  svgWrapper: {
    width: '100%',
    padding: '0.5rem',
    background: '#f8fafc',
    borderRadius: '10px',
    border: '1px solid var(--border-subtle)',
  },
  svgChart: {
    width: '100%',
    height: '120px',
  },
  scheduleList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
  },
  scheduleItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
    padding: '0.75rem 0.85rem',
    borderRadius: '8px',
    background: '#f8fafc',
    border: '1px solid var(--border-subtle)',
    textAlign: 'left',
  },
  scheduleTitle: {
    fontSize: '0.85rem',
    fontWeight: 600,
    color: 'var(--text-primary)',
  },
  scheduleDate: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
  },

  awardsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    textAlign: 'left',
  },
  sectionHeading: {
    fontSize: '1.4rem',
    fontWeight: 600,
    fontFamily: 'var(--font-heading)',
  },
  awardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1rem',
  },
  awardCard: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '190px',
  },
  awardCardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  awardIconWrapper: {
    width: '38px',
    height: '38px',
    borderRadius: '8px',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  awardCardTitle: {
    fontSize: '1.1rem',
    fontWeight: 700,
    marginBottom: '0.35rem',
  },
  awardCardDesc: {
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
    marginBottom: '1.25rem',
  },
  downloadBtn: {
    marginTop: 'auto',
    width: '100%',
  },
  statsCard: {
    padding: '2rem',
    border: '1px solid var(--border-subtle)',
    background: '#ffffff',
  },
  sideCardHeader: {
    fontSize: '1.2rem',
    fontFamily: 'var(--font-heading)',
    fontWeight: 600,
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  statHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    fontWeight: 600,
    marginBottom: '0.75rem',
  },
  statTitle: {
    fontFamily: 'var(--font-heading)',
  },
  statVal: {
    fontSize: '1.35rem',
    fontWeight: 800,
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-heading)',
  },
  statSub: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    marginTop: '0.2rem',
  },
  statDivider: {
    height: '1px',
    background: 'var(--border-subtle)',
    margin: '1.5rem 0',
  },
  progressTrackerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  progressBarBg: {
    height: '6px',
    background: '#f1f5f9',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    background: 'linear-gradient(90deg, var(--accent), var(--secondary))',
    borderRadius: '4px',
  },
  progressPercent: {
    fontSize: '0.85rem',
    fontWeight: 600,
    color: 'var(--text-secondary)',
  },
  regDetailsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.8rem',
  },
  detailLabel: {
    color: 'var(--text-muted)',
  },
  detailValText: {
    fontWeight: 600,
    color: 'var(--text-secondary)',
  },
  registerMoreBtn: {
    width: '100%',
    padding: '0.8rem',
  }
};

// Add responsive styling for analytics grid
const styleSheet = document.createElement("style");
styleSheet.innerText += `
  @media (min-width: 1024px) {
    .dashboard-grid {
      grid-template-columns: 2.2fr 1fr !important;
    }
  }
  @media (min-width: 640px) {
    .dashboard-awards-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    .dashboard-analytics-grid {
      grid-template-columns: 1fr 1fr !important;
    }
  }
`;
document.head.appendChild(styleSheet);
