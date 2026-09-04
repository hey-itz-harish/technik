import React from 'react';
import { Link } from 'react-router-dom';
import heroStudentImg from '../assets/hero_student.jpg';
import { Trophy, HeartHandshake, ShieldCheck, Award } from 'lucide-react';

export default function About() {
  return (
    <div style={styles.page}>
      
      {/* CREATIVE ANIMATED HERO SECTION */}
      <section style={styles.heroSection} className="about-hero-animated">
        {/* Animated Background Mesh Glow Orbs */}
        <div className="animated-bg-orb orb-1"></div>
        <div className="animated-bg-orb orb-2"></div>
        <div className="animated-bg-orb orb-3"></div>

        <div className="container about-hero-container" style={styles.heroContainer}>
          
          {/* Hero Left Content */}
          <div style={styles.heroLeft}>
            <span style={styles.heroBadge}>About Technik</span>
            <h1 style={styles.heroTitle}>Building confidence through competition, technology and recognition.</h1>
            <div style={styles.yellowLine}></div>

            <p style={styles.heroSubtext}>
              Technik began in 2018 with a focus on robotics education for school students and has evolved into Technik Olympiad Private Limited, creating broader academic and talent-development opportunities.
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

          {/* Hero Right Visual: Student Achiever Photo with Floating Feature Badges */}
          <div style={styles.heroRight}>
            <div style={styles.heroImageWrapper} className="hero-image-wrapper-flex">
              <img 
                src={heroStudentImg} 
                alt="Technik Student Achiever" 
                style={styles.heroStudentPhoto}
                className="hero-student-photo"
              />
              
              {/* Floating Feature Badges Column */}
              <div style={styles.floatingBadgesColumn} className="floating-badges-col">
                <div style={styles.featureBadgePill} className="floating-badge badge-anim-1">
                  <div style={styles.badgeIconBg}>
                    <Trophy size={18} color="#2563eb" />
                  </div>
                  <div>
                    <h4 style={styles.featureBadgeTitle}>Discover</h4>
                    <p style={styles.featureBadgeSub}>Potential</p>
                  </div>
                </div>

                <div style={styles.featureBadgePill} className="floating-badge badge-anim-2">
                  <div style={styles.badgeIconBg}>
                    <HeartHandshake size={18} color="#2563eb" />
                  </div>
                  <div>
                    <h4 style={styles.featureBadgeTitle}>Compete</h4>
                    <p style={styles.featureBadgeSub}>With Confidence</p>
                  </div>
                </div>

                <div style={styles.featureBadgePill} className="floating-badge badge-anim-3">
                  <div style={styles.badgeIconBg}>
                    <ShieldCheck size={18} color="#2563eb" />
                  </div>
                  <div>
                    <h4 style={styles.featureBadgeTitle}>Achieve</h4>
                    <p style={styles.featureBadgeSub}>Excellence</p>
                  </div>
                </div>

                <div style={styles.featureBadgePill} className="floating-badge badge-anim-4">
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

      {/* WHO WE ARE & VISION / MISSION SECTION */}
      <section style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.whoWeAreGrid} className="about-two-grid">
            
            {/* Who We Are Left Column */}
            <div style={styles.whoWeAreLeft}>
              <h2 style={styles.sectionTitle}>Who We Are</h2>
              <p style={styles.paragraphText}>
                Technik Olympiad Private Limited designs and conducts Olympiad examinations, academic competitions, student talent assessments, educational events, workshops and certification programmes.
              </p>
              <p style={{ ...styles.paragraphText, marginTop: '1.25rem' }}>
                Our aim is to make structured competition accessible to schools while recognising students not only for marks, but also for creativity, communication, discipline, innovation, leadership and presentation.
              </p>
            </div>

            {/* Vision & Mission Card Right Column */}
            <div style={styles.visionMissionCard}>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={styles.cardHeading}>Our Vision</h3>
                <p style={styles.cardText}>
                  To build a trusted student recognition and competition platform that connects schools, students, educators and industry experts across India.
                </p>
              </div>

              <div>
                <h3 style={styles.cardHeading}>Our Mission</h3>
                <p style={styles.cardText}>
                  To identify, encourage and celebrate student potential through transparent evaluation, meaningful competition and school partnerships.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section style={styles.whatWeDoSection}>
        <div className="container">
          <h2 style={styles.sectionTitle}>What We Do</h2>
          
          <div style={styles.cardsGrid} className="about-cards-grid">
            
            <div style={styles.whatWeDoCard} className="what-card-item">
              <div style={styles.cardIconHeader}>
                <Trophy size={22} color="#2563eb" />
              </div>
              <h3 style={styles.cardHeading}>Olympiad Programs</h3>
              <p style={styles.cardText}>
                Subject and skill-based competitions with structured levels and assessment.
              </p>
            </div>

            <div style={styles.whatWeDoCard} className="what-card-item">
              <div style={styles.cardIconHeader}>
                <Award size={22} color="#059669" />
              </div>
              <h3 style={styles.cardHeading}>Student Awards</h3>
              <p style={styles.cardText}>
                Recognition programmes including the Technik Pride Award.
              </p>
            </div>

            <div style={styles.whatWeDoCard} className="what-card-item">
              <div style={styles.cardIconHeader}>
                <ShieldCheck size={22} color="#ea580c" />
              </div>
              <h3 style={styles.cardHeading}>School Partnerships</h3>
              <p style={styles.cardText}>
                School-level and district-level hosting models, training and event support.
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
    background: 'linear-gradient(135deg, #0c2340 0%, #153a70 50%, #1e40af 100%)',
    padding: '4.5rem 0 5rem 0',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  heroContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2.5rem',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  },
  heroLeft: {
    display: 'flex',
    flexDirection: 'column',
  },
  heroBadge: {
    display: 'inline-block',
    padding: '0.4rem 1.1rem',
    background: 'linear-gradient(90deg, rgba(37, 99, 235, 0.25) 0%, rgba(99, 102, 241, 0.3) 100%)',
    border: '1px solid rgba(56, 189, 248, 0.35)',
    color: '#38bdf8',
    borderRadius: '50px',
    fontSize: '0.82rem',
    fontWeight: 700,
    marginBottom: '1.25rem',
    width: 'fit-content',
    letterSpacing: '0.04em',
    boxShadow: '0 0 15px rgba(56, 189, 248, 0.2)',
  },
  heroTitle: {
    fontSize: '2.75rem',
    fontWeight: 900,
    color: '#ffffff',
    letterSpacing: '-0.02em',
    lineHeight: '1.2',
    marginBottom: '0.5rem',
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
    fontSize: '1.05rem',
    fontWeight: 400,
    color: '#cbd5e1',
    lineHeight: '1.75',
    marginBottom: '1.75rem',
    maxWidth: '520px',
  },
  breadcrumb: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.45rem',
    fontSize: '0.82rem',
    color: '#94a3b8',
  },
  breadLink: {
    color: '#38bdf8',
    textDecoration: 'none',
    fontWeight: 500,
  },
  breadSep: {
    color: '#64748b',
  },
  breadActive: {
    color: '#ffffff',
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
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 35px rgba(37, 99, 235, 0.3)',
    border: '4px solid rgba(255, 255, 255, 0.95)',
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
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    borderRadius: '50px',
    padding: '0.55rem 1.1rem',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    minWidth: '180px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
    border: '1px solid rgba(37,99,235,0.2)',
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
  sectionPadding: {
    padding: '5rem 0',
  },
  whoWeAreGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '3rem',
    alignItems: 'flex-start',
  },
  whoWeAreLeft: {
    display: 'flex',
    flexDirection: 'column',
  },
  sectionTitle: {
    fontSize: '2.25rem',
    fontWeight: 900,
    color: '#0f172a',
    marginBottom: '1.5rem',
    fontFamily: 'var(--font-heading)',
  },
  paragraphText: {
    fontSize: '1.02rem',
    color: '#334155',
    lineHeight: '1.8',
  },
  visionMissionCard: {
    background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
    border: '1px solid #bae6fd',
    borderRadius: '24px',
    padding: '2.5rem 2rem',
    boxShadow: '0 12px 35px rgba(15, 23, 42, 0.05)',
  },
  cardHeading: {
    fontSize: '1.25rem',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '0.75rem',
    fontFamily: 'var(--font-heading)',
  },
  cardText: {
    fontSize: '0.96rem',
    color: '#475569',
    lineHeight: '1.7',
  },
  whatWeDoSection: {
    padding: '5rem 0 6rem 0',
    background: '#f8fafc',
    borderTop: '1px solid #e2e8f0',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    marginTop: '2rem',
  },
  whatWeDoCard: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '20px',
    padding: '2.25rem 1.75rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardIconHeader: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    background: '#f1f5f9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.25rem',
  }
};

// Responsive CSS rules and animated mesh backgrounds
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = `
    /* ANIMATED HERO BACKGROUND ORBS */
    @keyframes orbFloat1 {
      0%, 100% { transform: translate(0px, 0px) scale(1); }
      50% { transform: translate(30px, -20px) scale(1.15); }
    }
    @keyframes orbFloat2 {
      0%, 100% { transform: translate(0px, 0px) scale(1); }
      50% { transform: translate(-30px, 25px) scale(1.1); }
    }

    .animated-bg-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(70px);
      opacity: 0.45;
      pointer-events: none;
      z-index: 1;
    }

    .animated-bg-orb.orb-1 {
      width: 320px;
      height: 320px;
      background: #2563eb;
      top: -10%;
      left: 15%;
      animation: orbFloat1 8s ease-in-out infinite;
    }

    .animated-bg-orb.orb-2 {
      width: 380px;
      height: 380px;
      background: #4f46e5;
      bottom: -15%;
      right: 10%;
      animation: orbFloat2 10s ease-in-out infinite 1s;
    }

    .animated-bg-orb.orb-3 {
      width: 250px;
      height: 250px;
      background: #0284c7;
      top: 30%;
      right: 35%;
      animation: orbFloat1 7s ease-in-out infinite 2s;
    }

    /* FLOATING BADGES STAGGERED ANIMATIONS */
    @keyframes badgeFloat {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-6px); }
    }

    .floating-badge {
      animation: badgeFloat 4s ease-in-out infinite;
    }

    .badge-anim-1 { animation-delay: 0s; }
    .badge-anim-2 { animation-delay: 0.8s; }
    .badge-anim-3 { animation-delay: 1.6s; }
    .badge-anim-4 { animation-delay: 2.4s; }

    .floating-badge:hover {
      transform: translateY(-4px) scale(1.05) !important;
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.3) !important;
    }

    .what-card-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(15, 23, 42, 0.08) !important;
      border-color: #cbd5e1 !important;
    }

    @media (max-width: 991px) {
      .about-hero-container {
        grid-template-columns: 1fr !important;
        gap: 2.5rem !important;
      }
      .about-two-grid {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
      .about-cards-grid {
        grid-template-columns: 1fr !important;
        gap: 1.5rem !important;
      }
    }

    @media (max-width: 650px) {
      .hero-image-wrapper-flex {
        flex-direction: column !important;
        align-items: center !important;
        width: 100% !important;
      }
      .hero-student-photo {
        width: 100% !important;
        max-width: 300px !important;
        height: 250px !important;
      }
      .floating-badges-col {
        width: 100% !important;
        align-items: stretch !important;
      }
      .floating-badge {
        min-width: 100% !important;
        box-sizing: border-box !important;
      }
    }
  `;
  document.head.appendChild(styleSheet);
}
