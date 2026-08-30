import React, { useState } from 'react';
import { Trophy, Award, Gift, Star, ArrowRight, ShieldCheck, Search, FileSignature, Calendar, Building2, User, AlertCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Awards({ registrations = [] }) {
  // Main sub-tab toggle: 'prizes' vs 'verification'
  const [activeSubTab, setActiveSubTab] = useState('prizes');
  
  // Track selection state for prizes view
  const [selectedTrack, setSelectedTrack] = useState("Coding & Algorithms");

  // Verification state for lookup terminal
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    const query = searchId.trim().toUpperCase();
    if (!query) return;

    // Search in registrations state
    const match = registrations.find(reg => reg.id.toUpperCase() === query);
    setSearchResult(match || null);
    setSearched(true);
  };

  const getStageTitle = (stageNum) => {
    switch (stageNum) {
      case 1: return "School Qualifier - Merit Level";
      case 2: return "District Finalist - Distinction Level";
      case 3: return "State Champion - Honors Level";
      case 4: return "National Champion - Elite Level";
      default: return "Registered Candidate";
    }
  };

  const activeIds = registrations.map(reg => reg.id);

  const tracks = [
    "Abacus Championship",
    "Mental Math Arena",
    "Coding & Algorithms",
    "Robotics & Hardware",
    "English & Creative Writing",
    "Digital & Classical Art",
    "AI & Machine Learning",
    "Public Speaking & Debate"
  ];

  const prizes = [
    {
      level: "School Qualifier",
      rank: "Top 20% in School",
      reward: "Merit Certificate + Silver Badge",
      details: "Official digital qualification certificate validating logical skills, plus entry into the District stage.",
      icon: Award,
      badgeStyle: "badge-indigo",
      color: "var(--accent)"
    },
    {
      level: "District Championship",
      rank: "Top 3 in District",
      reward: "Silver Medal + Merit Certificate",
      details: "Prestigious physical silver medal shipped to school, alongside a printed Certificate of Distinction.",
      icon: Star,
      badgeStyle: "badge-purple",
      color: "var(--secondary)"
    },
    {
      level: "State Finals",
      rank: "Rank 1 in State",
      reward: "₹5,000 Cash + Gold Medal + Shield",
      details: "A cash scholarship of ₹5,000, physical Gold Medal, and State Champion Shield presented by delegates.",
      icon: Gift,
      badgeStyle: "badge-gold",
      color: "var(--gold)"
    },
    {
      level: "National Grand Arena",
      rank: "National Rank 1",
      reward: "₹50,000 + Champion Trophy + Travel",
      details: "Grand prize of ₹50,000, physical gold champion cup, and fully funded travel to the national awards ceremony.",
      icon: Trophy,
      badgeStyle: "badge-gold",
      color: "#b45309"
    }
  ];

  const trackCustomDetails = {
    "Abacus Championship": {
      focus: "Mental visualization & bead arithmetic speed",
      difficulty: "Expert",
      perk: "Specialist speed calculator badge & kit"
    },
    "Mental Math Arena": {
      focus: "Rapid non-device calculation & multiplication limits",
      difficulty: "Advanced",
      perk: "Mental Math master certificate endorsement"
    },
    "Coding & Algorithms": {
      focus: "Computational problem solving, syntax, & JS/Python efficiency",
      difficulty: "Advanced",
      perk: "Premium programming IDE credits and tech internship referals"
    },
    "Robotics & Hardware": {
      focus: "Autonomous sensor logic, breadboards & microprocessor circuits",
      difficulty: "Intermediate to Advanced",
      perk: "Technik Robotics Explorer Kit & microcontroller box"
    },
    "English & Creative Writing": {
      focus: "Syntactic structure, vocabulary, and creative story plotting",
      difficulty: "Advanced",
      perk: "Publication of winning essays in the Annual Technik Journal"
    },
    "Digital & Classical Art": {
      focus: "Digital graphics rendering, spatial layout, and structural illustration",
      difficulty: "Beginner to Expert",
      perk: "Drawing tablet discount coupons & public gallery display"
    },
    "AI & Machine Learning": {
      focus: "Neural logic, dataset training models, and transformer ethics",
      difficulty: "Advanced/Expert Only",
      perk: "Free access to AI GPU compute cloud and model mentorship"
    },
    "Public Speaking & Debate": {
      focus: "Impromptu argumentation, debate structure, and vocal modulation",
      difficulty: "Advanced",
      perk: "Elite Debate Council honorary membership badge"
    }
  };

  const custom = trackCustomDetails[selectedTrack] || trackCustomDetails["Coding & Algorithms"];

  return (
    <div style={styles.page}>
      <header className="container" style={styles.header}>
        <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>OFFICIAL HUB</span>
        <h1 style={styles.title}>Olympiad <span className="text-gradient">Awards & Verification</span></h1>
        <p style={styles.subtitle}>
          Explore official trophies, prizes, and physical medals per competition, or verify authentic credentials using a Certificate ID.
        </p>

        {/* Sub-Tab Navigation Bar */}
        <div style={styles.mainSubTabNav}>
          <button 
            onClick={() => setActiveSubTab('prizes')}
            style={{
              ...styles.mainSubTabBtn,
              background: activeSubTab === 'prizes' ? 'var(--primary)' : 'transparent',
              color: activeSubTab === 'prizes' ? '#ffffff' : 'var(--text-secondary)',
              borderColor: activeSubTab === 'prizes' ? 'var(--primary)' : 'var(--border-subtle)',
            }}
          >
            <Trophy size={16} />
            Prize Tiers & Medals
          </button>

          <button 
            onClick={() => setActiveSubTab('verification')}
            style={{
              ...styles.mainSubTabBtn,
              background: activeSubTab === 'verification' ? 'var(--primary)' : 'transparent',
              color: activeSubTab === 'verification' ? '#ffffff' : 'var(--text-secondary)',
              borderColor: activeSubTab === 'verification' ? 'var(--primary)' : 'var(--border-subtle)',
            }}
          >
            <ShieldCheck size={16} />
            Verify Award Credentials
          </button>
        </div>
      </header>

      {/* SUB-TAB 1: PRIZE TIERS & MEDALS GALLERY */}
      {activeSubTab === 'prizes' && (
        <>
          {/* Competition Track Selector Bar */}
          <section className="container" style={styles.selectorBar}>
            <div style={styles.selectorTabs}>
              {tracks.map((track) => (
                <button
                  key={track}
                  onClick={() => setSelectedTrack(track)}
                  style={{
                    ...styles.selectorTab,
                    borderColor: selectedTrack === track ? 'var(--secondary)' : 'var(--border-subtle)',
                    background: selectedTrack === track ? 'rgba(249, 115, 22, 0.05)' : '#ffffff',
                    color: selectedTrack === track ? 'var(--secondary)' : 'var(--text-primary)',
                  }}
                >
                  {track}
                </button>
              ))}
            </div>
          </section>

          {/* Gallery Main Container */}
          <main className="container" style={styles.mainContainer} className="awards-main-container">
            {/* Left Panel: Track specifics */}
            <div className="glass-card" style={styles.detailsCard}>
              <span className="badge badge-indigo" style={{ marginBottom: '1rem' }}>TRACK HIGHLIGHT</span>
              <h2 style={styles.detailsTitle}>{selectedTrack}</h2>
              
              <div style={styles.specList}>
                <div style={styles.specItem}>
                  <span style={styles.specLabel}>Evaluated Skills:</span>
                  <span style={styles.specValue}>{custom.focus}</span>
                </div>
                
                <div style={styles.specItem}>
                  <span style={styles.specLabel}>Complexity:</span>
                  <span style={styles.specValue}>{custom.difficulty}</span>
                </div>

                <div style={styles.specItem}>
                  <span style={styles.specLabel}>Exclusive Track Perks:</span>
                  <span style={{ ...styles.specValue, color: 'var(--secondary)', fontWeight: 600 }}>{custom.perk}</span>
                </div>
              </div>

              <div style={styles.adCard}>
                <Sparkles size={16} color="var(--gold)" />
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Top scoring students are invited to the National Gala in New Delhi to receive awards directly from international scientists.
                </p>
              </div>

              <Link to="/register" className="btn btn-orange" style={{ marginTop: '1.5rem', width: '100%' }}>
                Register for this Track
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Panel: Awards Tier Grid */}
            <div style={styles.tierSection}>
              <div style={styles.tierGrid} className="awards-tier-grid">
                {prizes.map((prize, idx) => {
                  const PrizeIcon = prize.icon;
                  return (
                    <div key={idx} className="glass-card" style={styles.prizeCard}>
                      <div style={styles.prizeCardTop}>
                        <div style={{
                          ...styles.iconWrapper,
                          borderColor: prize.color,
                          background: `rgba(${prize.color === 'var(--accent)' ? '37,99,235' : prize.color === 'var(--secondary)' ? '249,115,22' : '217,119,6'}, 0.06)`
                        }}>
                          <PrizeIcon size={20} style={{ color: prize.color }} />
                        </div>
                        
                        <span className={`badge ${prize.badgeStyle}`}>
                          {prize.level}
                        </span>
                      </div>

                      <h3 style={styles.prizeTitle}>{prize.reward}</h3>
                      <p style={styles.prizeRank}>Requirement: <strong>{prize.rank}</strong></p>
                      <p style={styles.prizeDesc}>{prize.details}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </main>
        </>
      )}

      {/* SUB-TAB 2: CERTIFICATE VERIFICATION TERMINAL */}
      {activeSubTab === 'verification' && (
        <main className="container" style={styles.verifContainer}>
          <div className="glass-card" style={styles.searchCard}>
            <h2 style={styles.searchCardTitle}>Certificate Validation Terminal</h2>
            <p style={styles.searchCardDesc}>
              Enter the 10-character Certificate ID (e.g., <strong>REG-528491</strong>) located on the bottom right of the student credentials sheet.
            </p>

            <form onSubmit={handleVerify} style={styles.searchForm}>
              <div style={styles.inputWrapper}>
                <Search size={18} style={styles.searchIcon} />
                <input 
                  type="text" 
                  className="form-control" 
                  style={styles.searchInput}
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  placeholder="e.g. REG-528491"
                />
              </div>
              
              <button type="submit" className="btn btn-primary" style={styles.searchBtn}>
                <ShieldCheck size={18} />
                Verify Credentials
              </button>
            </form>

            <div style={styles.helperSection}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>TEST SUGGESTIONS:</span>
              {activeIds.length > 0 ? (
                <div style={styles.testIds}>
                  {activeIds.map(id => (
                    <button 
                      key={id} 
                      onClick={() => { setSearchId(id); setSearchResult(null); setSearched(false); }}
                      style={styles.idChip}
                    >
                      {id}
                    </button>
                  ))}
                </div>
              ) : (
                <p style={styles.noIdsText}>
                  No registration records found locally. Please go to the <strong>Dashboard</strong> and click <strong>Load Demo Data</strong> or fill out the <strong>Register</strong> form to create verifyable certificate records!
                </p>
              )}
            </div>
          </div>

          {/* Result Sheet */}
          {searched && (
            <div style={styles.resultContainer} className="verification-result-container">
              {searchResult ? (
                <div className="glass-card" style={styles.successSheet}>
                  <div style={styles.successHeader}>
                    <div style={styles.badgeWrapper}>
                      <ShieldCheck size={28} color="var(--success)" />
                      <div style={{ textAlign: 'left' }}>
                        <h3 style={styles.verifBadgeTitle}>VERIFIED GENUINE</h3>
                        <p style={styles.verifBadgeSub}>Official Technik Olympiad Registry Record</p>
                      </div>
                    </div>
                    <span style={styles.verifCode}>{searchResult.id}</span>
                  </div>

                  <div style={styles.sheetDivider} />

                  <div style={styles.sheetBody}>
                    <div style={styles.sheetHeaderGroup}>
                      <h4 style={styles.sheetTitle}>Certificate of Accomplishment</h4>
                      <p style={styles.sheetSubtitle}>This document confirms that the credentials issued under Registry ID <strong>{searchResult.id}</strong> are authentic and officially recorded in the Technik Olympiad database.</p>
                    </div>

                    <div style={styles.sheetGrid} className="verification-sheet-grid">
                      <div style={styles.sheetItem}>
                        <span style={styles.sheetLabel}>
                          <User size={14} style={{ marginRight: '0.35rem' }} />
                          Recipient Student
                        </span>
                        <span style={styles.sheetValue}>{searchResult.studentName}</span>
                      </div>

                      <div style={styles.sheetItem}>
                        <span style={styles.sheetLabel}>
                          <Building2 size={14} style={{ marginRight: '0.35rem' }} />
                          School affiliation
                        </span>
                        <span style={styles.sheetValue}>{searchResult.school}, {searchResult.city}</span>
                      </div>

                      <div style={styles.sheetItem}>
                        <span style={styles.sheetLabel}>
                          <Trophy size={14} style={{ marginRight: '0.35rem' }} />
                          Olympiad Track
                        </span>
                        <span style={styles.sheetValue}>{searchResult.track} ({searchResult.grade})</span>
                      </div>

                      <div style={styles.sheetItem}>
                        <span style={styles.sheetLabel}>
                          <FileSignature size={14} style={{ marginRight: '0.35rem' }} />
                          Distinction Unlocked
                        </span>
                        <span style={{ ...styles.sheetValue, color: 'var(--success)', fontWeight: 700 }}>
                          {getStageTitle(searchResult.stage)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div style={styles.sheetDivider} />

                  <div style={styles.sheetFooter}>
                    <div style={styles.signatureBlock}>
                      <div style={styles.signatureLine}>Technik Registry</div>
                      <span style={styles.signatureSub}>Database Registrar</span>
                    </div>
                    
                    <div style={styles.dateBlock}>
                      <Calendar size={14} />
                      <span>Verified on: {searchResult.date}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="glass-card" style={styles.errorSheet}>
                  <div style={styles.errorIconWrapper}>
                    <AlertCircle size={32} color="#dc2626" />
                  </div>
                  <h3 style={styles.errorTitle}>Verification Failed</h3>
                  <p style={styles.errorDesc}>
                    The Certificate ID <strong>"{searchId}"</strong> could not be validated. The code is either expired, input incorrectly, or not yet registered.
                  </p>
                  <div style={styles.errorTip}>
                    <strong>Tips:</strong> Ensure the formatting matches `REG-XXXXXX` exactly. If you haven't done so, click one of the suggested chips above to test.
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
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
    marginBottom: '2.5rem',
  },
  title: {
    fontSize: '2.75rem',
    marginBottom: '0.75rem',
  },
  subtitle: {
    color: 'var(--text-secondary)',
    maxWidth: '650px',
    margin: '0 auto 2rem auto',
    fontSize: '1.05rem',
  },
  mainSubTabNav: {
    display: 'inline-flex',
    gap: '0.5rem',
    background: '#ffffff',
    border: '1px solid var(--border-subtle)',
    padding: '0.35rem',
    borderRadius: '50px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
  },
  mainSubTabBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.6rem 1.5rem',
    borderRadius: '50px',
    border: '1px solid transparent',
    fontSize: '0.9rem',
    fontWeight: 600,
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
  },
  selectorBar: {
    marginBottom: '2.5rem',
  },
  selectorTabs: {
    display: 'flex',
    gap: '0.5rem',
    overflowX: 'auto',
    paddingBottom: '0.5rem',
  },
  selectorTab: {
    padding: '0.6rem 1.25rem',
    borderRadius: '50px',
    border: '1px solid',
    fontWeight: 600,
    fontFamily: 'var(--font-heading)',
    fontSize: '0.85rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all var(--transition-fast)',
  },
  mainContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '2rem',
    alignItems: 'start',
  },
  detailsCard: {
    border: '1px solid var(--border-subtle)',
    background: '#ffffff',
    padding: '2.5rem',
  },
  detailsTitle: {
    fontSize: '1.75rem',
    fontWeight: 800,
    marginBottom: '1.5rem',
  },
  specList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    marginBottom: '2rem',
    borderBottom: '1px solid var(--border-subtle)',
    paddingBottom: '1.5rem',
  },
  specItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  specLabel: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    fontWeight: 700,
    letterSpacing: '0.05em',
  },
  specValue: {
    fontSize: '0.95rem',
    color: 'var(--text-primary)',
    lineHeight: '1.4',
  },
  adCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    background: 'rgba(217, 119, 6, 0.05)',
    border: '1px solid rgba(217, 119, 6, 0.15)',
    borderRadius: '10px',
    padding: '1rem',
  },
  tierSection: {
    flexGrow: 1,
  },
  tierGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1.5rem',
  },
  prizeCard: {
    background: '#ffffff',
    padding: '1.75rem',
    border: '1px solid var(--border-subtle)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '220px',
  },
  prizeCardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.25rem',
  },
  iconWrapper: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prizeTitle: {
    fontSize: '1.3rem',
    fontWeight: 800,
    color: 'var(--text-primary)',
    marginBottom: '0.25rem',
  },
  prizeRank: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    marginBottom: '0.75rem',
  },
  prizeDesc: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    lineHeight: '1.4',
  },

  /* Verification Sub-Tab Styles */
  verifContainer: {
    maxWidth: '700px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    margin: '0 auto',
  },
  searchCard: {
    padding: '2.5rem',
    border: '1px solid var(--border-subtle)',
    background: '#ffffff',
    textAlign: 'left',
  },
  searchCardTitle: {
    fontSize: '1.4rem',
    marginBottom: '0.5rem',
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
  },
  searchCardDesc: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
    marginBottom: '1.75rem',
  },
  searchForm: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  inputWrapper: {
    position: 'relative',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    minWidth: '240px',
  },
  searchIcon: {
    position: 'absolute',
    left: '1rem',
    color: 'var(--text-muted)',
  },
  searchInput: {
    paddingLeft: '2.5rem',
    width: '100%',
  },
  searchBtn: {
    padding: '0 1.5rem',
  },
  helperSection: {
    marginTop: '1.5rem',
    paddingTop: '1.25rem',
    borderTop: '1px solid var(--border-subtle)',
  },
  testIds: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
    marginTop: '0.5rem',
  },
  idChip: {
    padding: '0.3rem 0.75rem',
    borderRadius: '4px',
    background: '#f1f5f9',
    border: '1px solid var(--border-subtle)',
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#475569',
    cursor: 'pointer',
    fontFamily: 'var(--font-heading)',
  },
  noIdsText: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    marginTop: '0.4rem',
    lineHeight: '1.4',
  },
  resultContainer: {
    animation: 'fadeIn 0.3s ease-out',
  },
  successSheet: {
    border: '1px solid var(--success)',
    background: '#ffffff',
    padding: '2.5rem',
    boxShadow: '0 10px 30px -10px rgba(5, 150, 105, 0.08)',
  },
  successHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  badgeWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  verifBadgeTitle: {
    fontSize: '1.1rem',
    fontWeight: 800,
    color: 'var(--success)',
    lineHeight: '1.2',
  },
  verifBadgeSub: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
  },
  verifCode: {
    fontSize: '0.85rem',
    fontWeight: 700,
    fontFamily: 'var(--font-heading)',
    padding: '0.35rem 0.75rem',
    borderRadius: '6px',
    background: 'rgba(5, 150, 105, 0.06)',
    color: 'var(--success)',
    border: '1px solid rgba(5, 150, 105, 0.2)',
  },
  sheetDivider: {
    height: '1px',
    background: 'var(--border-subtle)',
    margin: '1.5rem 0',
  },
  sheetBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.75rem',
    textAlign: 'left',
  },
  sheetHeaderGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  sheetTitle: {
    fontSize: '1.35rem',
    fontWeight: 800,
    fontFamily: 'var(--font-heading)',
  },
  sheetSubtitle: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
  },
  sheetGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1.25rem',
  },
  sheetItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    textAlign: 'left',
  },
  sheetLabel: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '0.75rem',
    fontWeight: 700,
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  sheetValue: {
    fontSize: '1rem',
    color: 'var(--text-primary)',
    fontWeight: 600,
  },
  sheetFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
  signatureBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  signatureLine: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1rem',
    fontWeight: 700,
    borderBottom: '1px solid var(--text-primary)',
    paddingBottom: '0.25rem',
    fontStyle: 'italic',
  },
  signatureSub: {
    fontSize: '0.7rem',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  dateBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
  },
  errorSheet: {
    border: '1px solid #fca5a5',
    background: '#ffffff',
    padding: '2.5rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  errorIconWrapper: {
    width: '54px',
    height: '54px',
    borderRadius: '50%',
    background: 'rgba(220, 38, 38, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.25rem',
  },
  errorTitle: {
    fontSize: '1.35rem',
    color: '#dc2626',
    fontWeight: 700,
    marginBottom: '0.5rem',
  },
  errorDesc: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
    maxWidth: '420px',
    marginBottom: '1.5rem',
  },
  errorTip: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    background: '#fef2f2',
    border: '1px solid #fee2e2',
    borderRadius: '8px',
    padding: '0.75rem 1rem',
    maxWidth: '460px',
    lineHeight: '1.4',
  }
};
