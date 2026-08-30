import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Award, Play, Sparkles, TrendingUp, Layers, Users, BookOpen } from 'lucide-react';

export default function Home() {
  const features = [
    {
      title: "Guess Your Skill",
      desc: "Not sure where you excel? Take our 2-minute Skill Compass quiz to discover your ideal track.",
      badge: "SKILL COMPASS",
      link: "/skill-compass",
      color: "var(--accent)",
      icon: Compass
    },
    {
      title: "Study by Level",
      desc: "Access structured curriculum tailored for Grades 4-9 across multi-tier difficulty stages.",
      badge: "ADAPTIVE CURRICULUM",
      link: "/catalog",
      color: "var(--primary)",
      icon: Layers
    },
    {
      title: "Register in Minutes",
      desc: "Fast, secure online registration. Unlock study materials immediately upon transaction.",
      badge: "QUICK ACCESS",
      link: "/register",
      color: "var(--secondary)",
      icon: Play
    },
    {
      title: "Track Your Climb",
      desc: "Visualize your journey on the Stage Tracker: from School level up to State championships.",
      badge: "LIVE PIPELINE",
      link: "/dashboard",
      color: "var(--accent)",
      icon: TrendingUp
    },
    {
      title: "Own Your Wins",
      desc: "Earn prestigious physical medals, unlock digital PDF certificates, and win grand cash prizes.",
      badge: "GLOBAL RECOGNITION",
      link: "/dashboard",
      color: "var(--gold)",
      icon: Award
    }
  ];

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div className="container" style={styles.heroContainer}>
          
          {/* Custom Eyebrow Badge as seen in the mockup */}
          <div style={styles.badgeContainer}>
            <div style={styles.mockupBadge}>
              <span style={styles.badgeDot}></span>
              India's skill-based Olympiad platform
            </div>
          </div>
          
          {/* Main Hero Headline */}
          <h1 style={styles.heroTitle}>
            Find the skill you were <br />
            <span style={{ color: 'var(--secondary)' }}>born</span> to master.
          </h1>
          
          {/* Mockup Subtitle */}
          <p style={styles.heroSubtext}>
            One platform, eight Olympiads — Abacus to AI. Take the 2-minute Skill Compass, 
            register for the track that fits you, study the syllabus, and climb from School to State.
          </p>

          {/* Hero Actions */}
          <div style={styles.heroActions}>
            <Link to="/skill-compass" className="btn btn-primary">
              Take the Skill Compass
              <ArrowRight size={18} />
            </Link>
            <Link to="/catalog" className="btn btn-ghost">
              Browse Olympiads
            </Link>
          </div>

          {/* Floating UI Elements matching the mockup in a catchy way */}
          <div style={styles.floatingContainer} className="hero-floating-container">
            <div className="glass-card" style={styles.floatingCard1}>
              <span className="badge badge-gold" style={styles.floatingBadge}>Coding</span>
              <h4 style={styles.floatingTitle}>Logic streak: 6/8</h4>
              <p style={styles.floatingSubtitle}>Ready for Advance level</p>
            </div>
            
            <div className="glass-card" style={styles.floatingCard2}>
              <span className="badge badge-indigo" style={styles.floatingBadge}>Skill Compass</span>
              <h4 style={styles.floatingTitle}>92% match</h4>
              <p style={styles.floatingSubtitle}>Recommended: Coding & Algos</p>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="stats-grid-container" style={styles.statsGrid}>
            <div className="glass-card" style={styles.statCard}>
              <div style={{ ...styles.statIconWrapper, background: 'rgba(37, 99, 235, 0.06)', borderColor: 'var(--accent)' }}>
                <Users size={20} color="var(--accent)" />
              </div>
              <div>
                <h3 style={styles.statNumber}>52,480</h3>
                <p style={styles.statLabel}>Active Registrants</p>
              </div>
            </div>
            
            <div className="glass-card" style={styles.statCard}>
              <div style={{ ...styles.statIconWrapper, background: 'rgba(249, 115, 22, 0.06)', borderColor: 'var(--secondary)' }}>
                <TrendingUp size={20} color="var(--secondary)" />
              </div>
              <div>
                <h3 style={styles.statNumber}>₹15 Lakhs</h3>
                <p style={styles.statLabel}>Total Cash Prizes</p>
              </div>
            </div>

            <div className="glass-card" style={styles.statCard}>
              <div style={{ ...styles.statIconWrapper, background: 'rgba(217, 119, 6, 0.06)', borderColor: 'var(--gold)' }}>
                <Award size={20} color="var(--gold)" />
              </div>
              <div>
                <h3 style={styles.statNumber}>420+</h3>
                <p style={styles.statLabel}>Partner Schools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section style={styles.whyJoinSection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Why Participate in Technik Olympiad?</h2>
            <p style={styles.sectionSubtitle}>A comprehensive ecosystem built to evaluate, motivate, and reward student potential.</p>
          </div>

          <div className="why-join-grid-container" style={styles.whyJoinGrid}>
            {features.map((feat, index) => {
              const FeatIcon = feat.icon;
              return (
                <div 
                  key={index} 
                  className="glass-card glass-card-hover" 
                  style={{
                    ...styles.featureCard,
                    gridColumn: index === 3 || index === 4 ? 'span 3' : 'span 2',
                  }}
                >
                  <span className="badge" style={{ 
                    backgroundColor: `rgba(${feat.color === 'var(--accent)' ? '37,99,235' : feat.color === 'var(--primary)' ? '15,23,42' : feat.color === 'var(--secondary)' ? '249,115,22' : '217,119,6'}, 0.08)`,
                    color: feat.color,
                    borderColor: `rgba(${feat.color === 'var(--accent)' ? '37,99,235' : feat.color === 'var(--primary)' ? '15,23,42' : feat.color === 'var(--secondary)' ? '249,115,22' : '217,119,6'}, 0.2)`,
                    marginBottom: '1rem',
                    alignSelf: 'flex-start'
                  }}>
                    {feat.badge}
                  </span>
                  
                  <div style={styles.featureHeader}>
                    <div style={{ ...styles.featureIconContainer, borderColor: feat.color }}>
                      <FeatIcon size={20} style={{ color: feat.color }} />
                    </div>
                    <h3 style={styles.featureCardTitle}>{feat.title}</h3>
                  </div>
                  
                  <p style={styles.featureCardDesc}>{feat.desc}</p>
                  
                  <Link to={feat.link} style={{ ...styles.learnMoreLink, color: feat.color }}>
                    Get Started <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
  },
  heroSection: {
    padding: '5rem 0 4rem 0',
    position: 'relative',
    textAlign: 'center',
  },
  heroContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  badgeContainer: {
    marginBottom: '1.5rem',
  },
  mockupBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    background: '#ffffff',
    border: '1px solid var(--border-subtle)',
    borderRadius: '50px',
    padding: '0.4rem 1.25rem',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#2563eb',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)',
  },
  badgeDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'var(--secondary)',
    marginRight: '0.6rem',
    display: 'inline-block',
  },
  heroTitle: {
    fontSize: '3.75rem',
    lineHeight: '1.1',
    fontWeight: 800,
    marginBottom: '1.5rem',
    maxWidth: '850px',
    color: 'var(--primary)',
    fontFamily: 'var(--font-heading)',
  },
  heroSubtext: {
    fontSize: '1.15rem',
    color: 'var(--text-secondary)',
    maxWidth: '720px',
    marginBottom: '2.5rem',
    lineHeight: '1.65',
  },
  heroActions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '4rem',
    flexWrap: 'wrap',
  },
  floatingContainer: {
    position: 'relative',
    height: '200px',
    width: '100%',
    maxWidth: '600px',
    marginBottom: '5rem',
  },
  floatingCard1: {
    position: 'absolute',
    left: '5%',
    top: '10%',
    width: '260px',
    padding: '1.25rem',
    textAlign: 'left',
    background: '#ffffff',
    border: '1px solid var(--border-subtle)',
    transform: 'rotate(-3deg)',
    zIndex: 2,
    boxShadow: '0 20px 40px -15px rgba(0,0,0,0.06)',
  },
  floatingCard2: {
    position: 'absolute',
    right: '5%',
    top: '30%',
    width: '260px',
    padding: '1.25rem',
    textAlign: 'left',
    background: '#ffffff',
    border: '1px solid var(--border-subtle)',
    transform: 'rotate(2deg)',
    zIndex: 3,
    boxShadow: '0 20px 40px -15px rgba(0,0,0,0.06)',
  },
  floatingBadge: {
    marginBottom: '0.5rem',
    alignSelf: 'flex-start',
  },
  floatingTitle: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
  },
  floatingSubtitle: {
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
    marginTop: '0.2rem',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1.5rem',
    width: '100%',
    maxWidth: '900px',
    marginTop: '2rem',
  },
  statCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    textAlign: 'left',
    padding: '1.5rem',
    background: '#ffffff',
  },
  statIconWrapper: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statNumber: {
    fontSize: '1.75rem',
    fontWeight: 800,
    lineHeight: '1.2',
  },
  statLabel: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
  },
  whyJoinSection: {
    padding: '4rem 0',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '3.5rem',
  },
  sectionTitle: {
    fontSize: '2.25rem',
    marginBottom: '0.75rem',
  },
  sectionSubtitle: {
    color: 'var(--text-secondary)',
    maxWidth: '550px',
    margin: '0 auto',
  },
  whyJoinGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '1.5rem',
  },
  featureCard: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '260px',
  },
  featureHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '0.75rem',
  },
  featureIconContainer: {
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,0.8)',
  },
  featureCardTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
  },
  featureCardDesc: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    flexGrow: 1,
    marginBottom: '1.5rem',
  },
  learnMoreLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    fontSize: '0.85rem',
    fontWeight: 600,
    alignSelf: 'flex-start',
  },
};

// Add responsive media query overrides for grids and floating cards
const styleSheet = document.createElement("style");
styleSheet.innerText += `
  @media (min-width: 768px) {
    .why-join-grid-container {
      grid-template-columns: repeat(6, 1fr) !important;
    }
    .stats-grid-container {
      grid-template-columns: repeat(3, 1fr) !important;
    }
  }
  @media (max-width: 767px) {
    .why-join-grid-container {
      grid-template-columns: 1fr !important;
    }
    .why-join-grid-container > div {
      grid-column: span 1 !important;
    }
    .stats-grid-container {
      grid-template-columns: 1fr !important;
    }
    .hero-floating-container {
      display: flex !important;
      flex-direction: column !important;
      gap: 1rem !important;
      height: auto !important;
      align-items: center !important;
      margin-bottom: 2rem !important;
    }
    .hero-floating-container > div {
      position: static !important;
      transform: none !important;
      width: 100% !important;
      max-width: 320px !important;
    }
  }
`;
document.head.appendChild(styleSheet);
