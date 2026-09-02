import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import heroStudentImg from '../assets/hero_student.jpg';
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
  Sparkles, 
  ShieldCheck, 
  HeartHandshake
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
          
          {/* Hero Left Content */}
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

          {/* Hero Visual Right: Student with Trophy & Feature Badges */}
          <div style={styles.heroRight}>
            <div style={styles.heroImageWrapper}>
              <img 
                src={heroStudentImg} 
                alt="Technik Student Achiever" 
                style={styles.heroStudentPhoto}
              />
              
              {/* Feature Badges Column overlay on right */}
              <div style={styles.floatingBadgesColumn}>
                <div style={styles.featureBadgePill}>
                  <div style={styles.badgeIconBg}>
                    <Trophy size={18} color="#2563eb" />
                  </div>
                  <div>
                    <h4 style={styles.featureBadgeTitle}>Discover</h4>
                    <p style={styles.featureBadgeSub}>Potential</p>
                  </div>
                </div>

                <div style={styles.featureBadgePill}>
                  <div style={styles.badgeIconBg}>
                    <HeartHandshake size={18} color="#2563eb" />
                  </div>
                  <div>
                    <h4 style={styles.featureBadgeTitle}>Compete</h4>
                    <p style={styles.featureBadgeSub}>With Confidence</p>
                  </div>
                </div>

                <div style={styles.featureBadgePill}>
                  <div style={styles.badgeIconBg}>
                    <ShieldCheck size={18} color="#2563eb" />
                  </div>
                  <div>
                    <h4 style={styles.featureBadgeTitle}>Achieve</h4>
                    <p style={styles.featureBadgeSub}>Excellence</p>
                  </div>
                </div>

                <div style={styles.featureBadgePill}>
                  <div style={styles.badgeIconBg}>
                    <Award size={18} color="#2563eb" />
                  </div>
                  <div>
                    <h4 style={styles.featureBadgeTitle}>Be Recognised</h4>
                    <p style={styles.featureBadgeSub}>Always</p>
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
          <div style={styles.statsCardGrid} className="home-stats-grid">
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
      <section style={{ ...styles.sectionPadding, background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={styles.sectionHeaderCenter}>
            <div style={styles.timelineHeaderRow}>
              <div style={styles.timelineHeaderLine} />
              <h2 style={styles.sectionTitleCenter}>OUR JOURNEY</h2>
              <div style={styles.timelineHeaderLine} />
            </div>
          </div>

          <div style={styles.timelineTrackContainer}>
            {/* Dotted horizontal track line behind nodes */}
            <div style={styles.timelineMainLine} />

            <div style={styles.timelineGrid} className="about-timeline-grid">
              
              {/* Timeline Item 1 */}
              <div style={styles.timelineNodeCard}>
                <div style={{ ...styles.nodeYearPill, background: '#2563eb' }}>2018</div>
                <div style={styles.nodeDotBlue} />
                <div style={styles.timelineCardBody}>
                  <div style={styles.nodeIconBox}>
                    <Bot size={28} color="#2563eb" />
                  </div>
                  <h3 style={styles.nodeTitle}>The Beginning</h3>
                  <p style={styles.nodeDesc}>
                    Technik began its journey in 2018 with a vision to facilitate robotics education for school students.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div style={styles.timelineNodeCard}>
                <div style={{ ...styles.nodeYearPill, background: '#059669' }}>Growing Beyond</div>
                <div style={styles.nodeDotGreen} />
                <div style={styles.timelineCardBody}>
                  <div style={styles.nodeIconBox}>
                    <TrendingUp size={28} color="#059669" />
                  </div>
                  <p style={{ ...styles.nodeDesc, marginTop: '0.75rem' }}>
                    Our vision expanded beyond robotics to include multiple disciplines and talent areas to support holistic student development.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div style={styles.timelineNodeCard}>
                <div style={{ ...styles.nodeYearPill, background: '#ea580c' }}>2026</div>
                <div style={styles.nodeDotOrange} />
                <div style={styles.timelineCardBody}>
                  <div style={styles.nodeIconBox}>
                    <img src={logoImg} alt="Technik Logo" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
                  </div>
                  <h3 style={styles.nodeTitle}>Technik Olympiad<br />Private Limited</h3>
                  <p style={styles.nodeDesc}>
                    Registered as Technik Olympiad Private Limited with a mission to build a strong educational ecosystem across 5 States + Puducherry.
                  </p>
                </div>
              </div>

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
    padding: '3.5rem 0 4.5rem 0',
    borderBottom: '1px solid #e2e8f0',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2.5rem',
    alignItems: 'center',
  },
  heroLeft: {
    display: 'flex',
    flexDirection: 'column',
  },
  heroTitle: {
    fontSize: '2.85rem',
    fontWeight: 900,
    color: '#0b1d3a',
    letterSpacing: '-0.02em',
    marginBottom: '0.35rem',
    fontFamily: 'var(--font-heading)',
  },
  yellowLine: {
    width: '55px',
    height: '4px',
    background: '#fbbf24',
    borderRadius: '2px',
    marginBottom: '1.25rem',
  },
  heroSubtext: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#475569',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    maxWidth: '520px',
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
    alignItems: 'center',
  },
  heroImageWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    maxWidth: '100%',
  },
  heroStudentPhoto: {
    width: '320px',
    height: '310px',
    objectFit: 'cover',
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
    border: '4px solid #ffffff',
  },
  floatingBadgesColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
  },
  featureBadgePill: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(8px)',
    border: '1px solid #e2e8f0',
    borderRadius: '50px',
    padding: '0.55rem 1.1rem',
    boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
    minWidth: '180px',
  },
  badgeIconBg: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: '#eff6ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    border: '1px solid rgba(37,99,235,0.15)',
  },
  featureBadgeTitle: {
    fontSize: '0.82rem',
    fontWeight: 800,
    color: '#0f172a',
    lineHeight: '1.1',
  },
  featureBadgeSub: {
    fontSize: '0.7rem',
    color: '#64748b',
    fontWeight: 500,
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
    fontSize: '0.98rem',
    fontWeight: 800,
    color: '#0f172a',
    lineHeight: '1.2',
  },
  statLbl: {
    fontSize: '0.74rem',
    color: '#64748b',
    fontWeight: 500,
  },
  sectionPadding: {
    padding: '4rem 0',
  },
  aboutPromiseGrid: {
    display: 'grid',
    gridTemplateColumns: '1.35fr 0.65fr',
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
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
  },
  promiseTitle: {
    fontSize: '0.88rem',
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
    marginBottom: '3.5rem',
  },
  timelineHeaderRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.25rem',
  },
  timelineHeaderLine: {
    width: '70px',
    height: '2px',
    background: '#fbbf24',
  },
  sectionTitleCenter: {
    fontSize: '1.85rem',
    fontWeight: 900,
    color: '#0f172a',
    letterSpacing: '0.04em',
    fontFamily: 'var(--font-heading)',
  },
  timelineTrackContainer: {
    position: 'relative',
    maxWidth: '1080px',
    margin: '0 auto',
  },
  timelineMainLine: {
    position: 'absolute',
    top: '38px',
    left: '12%',
    right: '12%',
    height: '2px',
    borderTop: '2px dashed #cbd5e1',
    zIndex: 1,
  },
  timelineGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2.5rem',
    position: 'relative',
    zIndex: 2,
  },
  timelineNodeCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  nodeYearPill: {
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '0.78rem',
    padding: '0.35rem 1.1rem',
    borderRadius: '6px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
    marginBottom: '0.75rem',
    zIndex: 3,
  },
  nodeDotBlue: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#ffffff',
    border: '3px solid #2563eb',
    marginBottom: '1.5rem',
    zIndex: 3,
  },
  nodeDotGreen: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#ffffff',
    border: '3px solid #059669',
    marginBottom: '1.5rem',
    zIndex: 3,
  },
  nodeDotOrange: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#ffffff',
    border: '3px solid #ea580c',
    marginBottom: '1.5rem',
    zIndex: 3,
  },
  timelineCardBody: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    padding: '1.75rem 1.5rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
    width: '100%',
    minHeight: '220px',
  },
  nodeIconBox: {
    width: '68px',
    height: '68px',
    borderRadius: '50%',
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  nodeTitle: {
    fontSize: '1rem',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '0.5rem',
    lineHeight: '1.3',
  },
  nodeDesc: {
    fontSize: '0.82rem',
    color: '#64748b',
    lineHeight: '1.6',
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
    padding: 0.75rem 1.35rem;
    border-radius: 6px;
    text-decoration: none;
    letter-spacing: 0.04em;
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    transition: background 0.3s ease, transform 0.3s ease;
  }
  .btn-navy-promise:hover {
    background: #09204a;
    transform: translateY(-2px);
  }
  @media (max-width: 991px) {
    .about-promise-grid {
      grid-template-columns: 1fr !important;
    }
    .about-timeline-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    .timelineMainLine {
      display: none !important;
    }
  }
`;
document.head.appendChild(styleSheet);
