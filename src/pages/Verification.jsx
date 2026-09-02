import React, { useState } from 'react';
import logoImg from '../assets/logo.png';
import { ShieldCheck, Search, FileSignature, Calendar, Building2, User, Trophy, AlertCircle } from 'lucide-react';

export default function Verification({ registrations }) {
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

  // List of active IDs in registrations to help the user test easily
  const activeIds = registrations.map(reg => reg.id);

  return (
    <div style={styles.page}>
      <header className="container" style={styles.header}>
        <span className="badge badge-indigo" style={{ marginBottom: '1rem' }}>SECURE VERIFICATION</span>
        <h1 style={styles.title}>Award & Certificate <span className="text-gradient">Verification</span></h1>
        <p style={styles.subtitle}>
          Validate the authenticity of official Technik Olympiad qualifications, certificates, and student credentials.
        </p>
      </header>

      <main className="container" style={styles.container}>
        
        {/* Search Panel */}
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

          {/* Helper details */}
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
                No registration records found locally. Please go to the **Dashboard** and click **Load Demo Data** or fill out the **Register** form to create verifyable certificate records!
              </p>
            )}
          </div>
        </div>

        {/* Verification Result Sheet */}
        {searched && (
          <div style={styles.resultContainer} className="verification-result-container">
            {searchResult ? (
              /* Genuine Certificate Screen */
              <div className="glass-card" style={styles.successSheet}>
                <div style={styles.successHeader}>
                  <div style={styles.badgeWrapper}>
                    <img 
                      src={logoImg} 
                      alt="Technik Seal" 
                      style={{ width: '48px', height: '48px', objectFit: 'contain' }} 
                    />
                    <div style={{ textAlign: 'left' }}>
                      <h3 style={styles.verifBadgeTitle}>VERIFIED GENUINE</h3>
                      <p style={styles.verifBadgeSub}>Official Technik Olympiad Registry Record</p>
                    </div>
                  </div>
                  <span style={styles.verifCode}>{searchResult.id}</span>
                </div>

                <div style={styles.sheetDivider} />

                {/* Print Sheet body */}
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
              /* Invalid Certificate Screen */
              <div className="glass-card" style={styles.errorSheet}>
                <div style={styles.errorIconWrapper}>
                  <AlertCircle size={32} color="#dc2626" />
                </div>
                <h3 style={styles.errorTitle}>Verification Failed</h3>
                <p style={styles.errorDesc}>
                  The Certificate ID <strong>"{searchId}"</strong> could not be validated. The code is either expired, input incorrectly, or not yet registered.
                </p>
                <div style={styles.errorTip}>
                  <strong>Tips:</strong> Ensure the formatting matches `REG-XXXXXX` exactly (including the hyphen). If you haven't done so, click one of the suggested chips above to test.
                </div>
              </div>
            )}
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
    marginBottom: '3rem',
  },
  title: {
    fontSize: '2.75rem',
    marginBottom: '0.75rem',
  },
  subtitle: {
    color: 'var(--text-secondary)',
    maxWidth: '650px',
    margin: '0 auto',
    fontSize: '1.05rem',
  },
  container: {
    maxWidth: '700px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  searchCard: {
    padding: '2.5rem',
    border: '1px solid var(--border-subtle)',
    background: '#ffffff',
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
    transition: 'all var(--transition-fast)',
    ':hover': {
      background: '#e2e8f0',
      borderColor: 'var(--accent)'
    }
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
    boxShadow: '0 10px 30px -10px rgba(220, 38, 38, 0.05)',
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

// Add responsive styling for sheets
const styleSheet = document.createElement("style");
styleSheet.innerText += `
  @media (min-width: 640px) {
    .verification-sheet-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
`;
document.head.appendChild(styleSheet);
