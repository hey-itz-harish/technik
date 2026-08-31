import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  BookOpen, 
  Award, 
  MapPin, 
  Trophy, 
  ArrowRight, 
  Bot, 
  TrendingUp, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  Star,
  Medal,
  Lightbulb,
  Compass
} from 'lucide-react';

export default function About() {
  const statsList = [
    { icon: Calendar, val: "2018", label: "Our Journey Began", color: "#2563eb" },
    { icon: Users, val: "Play School to Class 12", label: "Eligible Students", color: "#059669" },
    { icon: BookOpen, val: "6+ Olympiads", label: "Future-Ready Subjects", color: "#d97706" },
    { icon: Award, val: "School · District · State", label: "Recognition Levels", color: "#f97316" },
    { icon: MapPin, val: "5 States + Puducherry", label: "Our Focus Region", color: "#dc2626" }
  ];

  return (
    <div style={styles.page}>
      
      {/* ABOUT HERO BANNER */}
      <section style={styles.heroSection}>
        <div className="container" style={styles.heroContainer}>
          
          <div style={styles.heroLeft}>
            <h1 style={styles.heroTitle}>ABOUT TECHNIK</h1>
            <div style={styles.yellowLine}></div>

            <p style={styles.heroSubtext}>
              Empowering young minds to discover, develop, compete, achieve and be recognised.
            </p>

            {/* Breadcrumb */}
            <div style={styles.breadcrumb}>
              <Link to="/" style={styles.breadLink}>Home</Link>
              <span style={styles.breadSep}>&gt;</span>
              <span style={styles.breadLink}>About Us</span>
              <span style={styles.breadSep}>&gt;</span>
              <span style={styles.breadActive}>About Technik</span>
            </div>
          </div>

          {/* Hero Visual Right */}
          <div style={styles.heroRight}>
            <div style={styles.heroVisualCard}>
              
              {/* Student Trophy Box */}
              <div style={styles.trophyBox}>
                <div style={styles.trophyIconCircle}>
                  <Trophy size={48} color="#fbbf24" />
                </div>
                <div style={styles.proudBadge}>
                  <Award size={13} color="#0f172a" />
                  <span>PROUD ACHIEVER</span>
                </div>
                <div style={styles.brandTag}>TECHNIK OLYMPIAD</div>
              </div>

              {/* Floating Badges List */}
              <div style={styles.badgesStack}>
                <div style={styles.floatingBadgeCard}>
                  <div style={{ ...styles.badgeIconCircle, background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb' }}>
                    <Trophy size={16} />
                  </div>
                  <div>
                    <h4 style={styles.badgeTitle}>Discover</h4>
                    <p style={styles.badgeSub}>Potential</p>
                  </div>
                </div>

                <div style={styles.floatingBadgeCard}>
                  <div style={{ ...styles.badgeIconCircle, background: 'rgba(245, 158, 11, 0.1)', color: '#d97706' }}>
                    <Lightbulb size={16} />
                  </div>
                  <div>
                    <h4 style={styles.badgeTitle}>Compete</h4>
                    <p style={styles.badgeSub}>With Confidence</p>
                  </div>
                </div>

                <div style={styles.floatingBadgeCard}>
                  <div style={{ ...styles.badgeIconCircle, background: 'rgba(5, 150, 105, 0.1)', color: '#059669' }}>
                    <Medal size={16} />
                  </div>
                  <div>
                    <h4 style={styles.badgeTitle}>Achieve</h4>
                    <p style={styles.badgeSub}>Excellence</p>
                  </div>
                </div>

                <div style={styles.floatingBadgeCard}>
                  <div style={{ ...styles.badgeIconCircle, background: 'rgba(234, 88, 12, 0.1)', color: '#ea580c' }}>
                    <Star size={16} />
                  </div>
                  <div>
                    <h4 style={styles.badgeTitle}>Be Recognised</h4>
                    <p style={styles.badgeSub}>Always</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* STATS FLOATING BAR */}
      <section style={styles.statsSection}>
        <div className="container">
          <div style={styles.statsCardGrid}>
            {statsList.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} style={styles.statCard}>
                  <div style={{ ...styles.statIconBox, color: stat.color, background: `${stat.color}12` }}>
                    <StatIcon size={22} />
                  </div>
                  <div>
                    <h3 style={styles.statVal}>{stat.val}</h3>
                    <p style={styles.statLbl}>{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT TECHNIK & PROMISE SECTION */}
      <section style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.aboutPromiseGrid} className="about-promise-grid">
            
            {/* About Technik Description */}
            <div style={styles.aboutTextBlock}>
              <h2 style={styles.sectionTitleLeft}>ABOUT TECHNIK</h2>
              <p style={styles.paragraphText}>
                Technik Olympiad Private Limited is an educational organisation committed to creating 
                meaningful opportunities for school students. We believe every student has unique abilities 
                and potential that deserve the right platform. Through Olympiads, talent assessments, 
                competitions and the prestigious Technik Pride Award, we encourage students to explore, 
                learn, compete and achieve.
              </p>
            </div>

            {/* The Technik Promise Card */}
            <div style={styles.promiseCard}>
              <h3 style={styles.promiseTitle}>THE TECHNIK PROMISE</h3>
              <p style={styles.promiseText}>
                Every student deserves an opportunity to shine.
              </p>
              <Link to="/catalog" className="btn-navy-promise">
                EXPLORE OUR PROGRAMS <ArrowRight size={15} style={{ marginLeft: '0.4rem' }} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* OUR JOURNEY TIMELINE */}
      <section style={{ ...styles.sectionPadding, background: '#f8fafc' }}>
        <div className="container">
          <div style={styles.sectionHeaderCenter}>
            <h2 style={styles.sectionTitleCenter}>OUR JOURNEY</h2>
            <div style={styles.yellowLineCenter}></div>
          </div>

          <div style={styles.timelineRow} className="about-timeline-row">
            
            {/* Timeline Item 1 */}
            <div style={styles.timelineCard}>
              <div style={{ ...styles.badgeYear, background: '#2563eb' }}>2018</div>
              <div style={styles.timelineIconBox}>
                <Bot size={32} color="#2563eb" />
              </div>
              <h3 style={styles.timelineTitle}>The Beginning</h3>
              <p style={styles.timelineDesc}>
                Technik began its journey in 2018 with a vision to facilitate robotics education for school students.
              </p>
            </div>

            <div style={styles.timelineConnector}></div>

            {/* Timeline Item 2 */}
            <div style={styles.timelineCard}>
              <div style={{ ...styles.badgeYear, background: '#059669' }}>Growing Beyond</div>
              <div style={styles.timelineIconBox}>
                <TrendingUp size={32} color="#059669" />
              </div>
              <h3 style={styles.timelineTitle}>Expanded Horizons</h3>
              <p style={styles.timelineDesc}>
                Our vision expanded beyond robotics to include multiple disciplines and support holistic student development.
              </p>
            </div>

            <div style={styles.timelineConnector}></div>

            {/* Timeline Item 3 */}
            <div style={styles.timelineCard}>
              <div style={{ ...styles.badgeYear, background: '#f97316' }}>2026</div>
              <div style={styles.timelineIconBox}>
                <Trophy size={32} color="#f97316" />
              </div>
              <h3 style={styles.timelineTitle}>Technik Olympiad Private Limited</h3>
              <p style={styles.timelineDesc}>
                Registered as Technik Olympiad Private Limited with a mission to build a strong educational ecosystem across 5 States + Puducherry.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#ffffff',
  },
  heroSection: {
    background: 'linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%)',
    padding: '4rem 0 4.5rem 0',
    borderBottom: '1px solid #e2e8f0',
  },
  heroContainer: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '3rem',
    alignItems: 'center',
  },
  heroLeft: {
    display: 'flex',
    flexDirection: 'column',
  },
  heroTitle: {
    fontSize: '2.75rem',
    fontWeight: 900,
    color: '#0b1d3a',
    letterSpacing: '-0.02em',
    marginBottom: '0.35rem',
    fontFamily: 'var(--font-heading)',
  },
  yellowLine: {
    width: '60px',
    height: '4px',
    background: '#fbbf24',
    borderRadius: '2px',
    marginBottom: '1.25rem',
  },
  heroSubtext: {
    fontSize: '1.15rem',
    fontWeight: 600,
    color: '#475569',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    maxWidth: '540px',
  },
  breadcrumb: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.82rem',
    color: '#64748b',
  },
  breadLink: {
    color: '#2563eb',
    textDecoration: 'none',
    fontWeight: 500,
  },
  breadSep: {
    color: '#94a3b8',
  },
  breadActive: {
    color: '#0f172a',
    fontWeight: 700,
  },
  heroRight: {
    display: 'flex',
    justifyContent: 'center',
  },
  heroVisualCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  trophyBox: {
    width: '200px',
    padding: '1.5rem 1rem',
    background: '#041026',
    border: '2px solid #fbbf24',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  trophyIconCircle: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    background: 'rgba(251, 191, 36, 0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.85rem',
  },
  proudBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    background: '#fbbf24',
    color: '#0f172a',
    fontWeight: 800,
    fontSize: '0.68rem',
    padding: '0.25rem 0.65rem',
    borderRadius: '4px',
    marginBottom: '0.4rem',
  },
  brandTag: {
    fontSize: '0.62rem',
    fontWeight: 700,
    color: '#94a3b8',
    letterSpacing: '0.1em',
  },
  badgesStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  floatingBadgeCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '0.6rem 1rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
    minWidth: '170px',
  },
  badgeIconCircle: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  badgeTitle: {
    fontSize: '0.82rem',
    fontWeight: 800,
    color: '#0f172a',
    lineHeight: '1.2',
  },
  badgeSub: {
    fontSize: '0.72rem',
    color: '#64748b',
  },
  statsSection: {
    marginTop: '-2rem',
    position: 'relative',
    zIndex: 10,
  },
  statsCardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '1rem',
    background: '#ffffff',
    padding: '1.5rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    border: '1px solid #e2e8f0',
  },
  statCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
  },
  statIconBox: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  statVal: {
    fontSize: '1rem',
    fontWeight: 800,
    color: '#0f172a',
    lineHeight: '1.2',
  },
  statLbl: {
    fontSize: '0.75rem',
    color: '#64748b',
    fontWeight: 500,
  },
  sectionPadding: {
    padding: '4.5rem 0',
  },
  aboutPromiseGrid: {
    display: 'grid',
    gridTemplateColumns: '1.4fr 0.6fr',
    gap: '2.5rem',
    alignItems: 'center',
  },
  aboutTextBlock: {
    display: 'flex',
    flexDirection: 'column',
  },
  sectionTitleLeft: {
    fontSize: '1.75rem',
    fontWeight: 900,
    color: '#0f172a',
    letterSpacing: '0.02em',
    marginBottom: '1rem',
    fontFamily: 'var(--font-heading)',
  },
  paragraphText: {
    fontSize: '0.96rem',
    color: '#475569',
    lineHeight: '1.75',
  },
  promiseCard: {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    border: '1px solid #cbd5e1',
    borderRadius: '16px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
  },
  promiseTitle: {
    fontSize: '0.95rem',
    fontWeight: 900,
    color: '#0f172a',
    letterSpacing: '0.05em',
    marginBottom: '0.75rem',
  },
  promiseText: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#1e293b',
    marginBottom: '1.5rem',
    lineHeight: '1.4',
  },
  sectionHeaderCenter: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionTitleCenter: {
    fontSize: '2rem',
    fontWeight: 900,
    color: '#0f172a',
    letterSpacing: '0.04em',
    marginBottom: '0.35rem',
    fontFamily: 'var(--font-heading)',
  },
  yellowLineCenter: {
    width: '60px',
    height: '4px',
    background: '#fbbf24',
    margin: '0 auto',
    borderRadius: '2px',
  },
  timelineRow: {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr auto 1fr',
    alignItems: 'center',
    gap: '1.5rem',
  },
  timelineCard: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    padding: '1.75rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
    position: 'relative',
  },
  badgeYear: {
    position: 'absolute',
    top: '-14px',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '0.75rem',
    padding: '0.25rem 0.85rem',
    borderRadius: '20px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  timelineIconBox: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0.5rem',
    marginBottom: '1rem',
  },
  timelineTitle: {
    fontSize: '1.1rem',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '0.5rem',
  },
  timelineDesc: {
    fontSize: '0.85rem',
    color: '#64748b',
    lineHeight: '1.6',
  },
  timelineConnector: {
    width: '30px',
    height: '2px',
    background: '#cbd5e1',
  }
};

// Add responsive CSS rules
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .btn-navy-promise {
    background: #041026;
    color: #ffffff;
    font-weight: 800;
    font-size: 0.8rem;
    font-family: var(--font-heading);
    padding: 0.7rem 1.25rem;
    border-radius: 6px;
    text-decoration: none;
    letterSpacing: 0.04em;
    display: inline-flex;
    align-items: center;
  }
  @media (max-width: 991px) {
    .about-promise-grid {
      grid-template-columns: 1fr !important;
    }
    .about-timeline-row {
      grid-template-columns: 1fr !important;
    }
    .timelineConnector {
      display: none !important;
    }
  }
`;
document.head.appendChild(styleSheet);
