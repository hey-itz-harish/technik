import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import { 
  ArrowLeft, 
  Sparkles, 
  Bell, 
  CheckCircle, 
  Clock, 
  Rocket, 
  ShieldCheck, 
  Bot, 
  Cpu, 
  Code, 
  Palette, 
  Award,
  Globe
} from 'lucide-react';

export default function ComingSoon() {
  const location = useLocation();

  // Determine section name based on current path
  const getPageTitle = (path) => {
    switch (path) {
      case '/catalog': return 'Olympiad Programs & Catalog';
      case '/skill-compass': return 'Student Skill Compass';
      case '/register': return 'School & Student Registration';
      case '/awards': return 'Technik Pride Award Portal';
      case '/schools': return 'School Partnership Portal';
      case '/verify': return 'Certificate Verification Engine';
      case '/dashboard': return 'Student & School Portal';
      default:
        const cleanPath = path.replace('/', '').replace(/-/g, ' ');
        return cleanPath ? cleanPath.toUpperCase() : 'PORTAL';
    }
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <div style={styles.container}>
      {/* Background Animated Elements */}
      <div style={styles.bgGlow1} />
      <div style={styles.bgGlow2} />
      <div style={styles.bgGridOverlay} />

      <div style={styles.card} className="coming-soon-card">
        {/* Floating Orbit Badges around logo */}
        <div style={styles.logoFrame}>
          <div style={styles.orbitBadge1} className="floating-badge-1">
            <Bot size={18} color="#38bdf8" />
          </div>
          <div style={styles.orbitBadge2} className="floating-badge-2">
            <Cpu size={18} color="#fbbf24" />
          </div>
          <div style={styles.orbitBadge3} className="floating-badge-3">
            <Code size={18} color="#4ade80" />
          </div>
          <div style={styles.orbitBadge4} className="floating-badge-4">
            <Palette size={18} color="#f472b6" />
          </div>

          <div style={styles.logoHalo} className="pulse-halo" />
          <img 
            src={logoImg} 
            alt="Technik Emblem" 
            style={styles.logoImg}
          />
        </div>

        {/* Eyebrow Badge */}
        <div style={styles.eyebrowCapsule}>
          <Rocket size={14} color="#fbbf24" style={{ marginRight: '0.4rem' }} />
          <span>SOMETHING EXTRAORDINARY IS COMING SOON</span>
        </div>

        {/* Dynamic Page Header */}
        <h1 style={styles.title}>
          <span style={styles.titleSub}>{pageTitle}</span>
          <span style={{ color: '#fbbf24', display: 'block', marginTop: '0.2rem' }}>
            LAUNCHING VERY SOON
          </span>
        </h1>

        <p style={styles.description}>
          Our team is currently putting the final touches on this portal to bring you a world-class, future-ready Olympiad experience. Stay tuned!
        </p>

        {/* Navigation Action Buttons */}
        <div style={styles.actionsGroup}>
          <Link to="/" style={styles.primaryBtn}>
            <ArrowLeft size={16} style={{ marginRight: '0.4rem' }} />
            BACK TO HOME
          </Link>
          <Link to="/about" style={styles.secondaryBtn}>
            <Sparkles size={16} color="#fbbf24" style={{ marginRight: '0.4rem' }} />
            ABOUT TECHNIK OLYMPIAD
          </Link>
        </div>

        {/* Trust Badges */}
        <div style={styles.footerTrustRow}>
          <div style={styles.trustItem}>
            <ShieldCheck size={14} color="#38bdf8" />
            <span>Trusted & Verified</span>
          </div>
          <div style={styles.trustDot}>•</div>
          <div style={styles.trustItem}>
            <Award size={14} color="#fbbf24" />
            <span>National Recognition</span>
          </div>
          <div style={styles.trustDot}>•</div>
          <div style={styles.trustItem}>
            <Globe size={14} color="#4ade80" />
            <span>Technik Olympiad Pvt. Ltd.</span>
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '85vh',
    background: 'linear-gradient(135deg, #020817 0%, #081d3d 50%, #030c1e 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 1.5rem',
    position: 'relative',
    overflow: 'hidden',
  },
  bgGlow1: {
    position: 'absolute',
    top: '-15%',
    left: '10%',
    width: '450px',
    height: '450px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  bgGlow2: {
    position: 'absolute',
    bottom: '-15%',
    right: '10%',
    width: '450px',
    height: '450px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  bgGridOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
    backgroundSize: '32px 32px',
    pointerEvents: 'none',
  },
  card: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '780px',
    width: '100%',
    background: 'rgba(15, 23, 42, 0.85)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '24px',
    padding: '3.5rem 2.5rem',
    textAlign: 'center',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 30px rgba(37, 99, 235, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoFrame: {
    position: 'relative',
    width: '130px',
    height: '130px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.75rem',
  },
  logoHalo: {
    position: 'absolute',
    inset: '-10px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%)',
  },
  logoImg: {
    width: '110px',
    height: '110px',
    objectFit: 'contain',
    position: 'relative',
    zIndex: 3,
    filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.4))',
  },
  orbitBadge1: {
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: '#041026',
    border: '1px solid rgba(56, 189, 248, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
  },
  orbitBadge2: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: '#041026',
    border: '1px solid rgba(251, 191, 36, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
  },
  orbitBadge3: {
    position: 'absolute',
    bottom: '-10px',
    left: '-10px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: '#041026',
    border: '1px solid rgba(74, 222, 128, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
  },
  orbitBadge4: {
    position: 'absolute',
    bottom: '-10px',
    right: '-10px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: '#041026',
    border: '1px solid rgba(244, 114, 182, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
  },
  eyebrowCapsule: {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'rgba(251, 191, 36, 0.1)',
    border: '1px solid rgba(251, 191, 36, 0.3)',
    color: '#fbbf24',
    padding: '0.4rem 1.2rem',
    borderRadius: '50px',
    fontSize: '0.78rem',
    fontWeight: 800,
    letterSpacing: '0.1em',
    marginBottom: '1rem',
    fontFamily: 'var(--font-heading)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 900,
    fontFamily: 'var(--font-heading)',
    color: '#ffffff',
    lineHeight: '1.15',
    marginBottom: '1rem',
  },
  titleSub: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#38bdf8',
    letterSpacing: '0.04em',
  },
  description: {
    color: '#94a3b8',
    fontSize: '1rem',
    lineHeight: '1.65',
    maxWidth: '580px',
    marginBottom: '2rem',
  },
  progressContainer: {
    width: '100%',
    maxWidth: '520px',
    marginBottom: '2.25rem',
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#cbd5e1',
    marginBottom: '0.5rem',
  },
  progressLabel: {
    color: '#94a3b8',
  },
  progressVal: {
    color: '#38bdf8',
  },
  track: {
    height: '10px',
    width: '100%',
    background: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  fillBar: {
    height: '100%',
    width: '88%',
    background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 50%, #fbbf24 100%)',
    borderRadius: '10px',
  },
  timerGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.85rem',
    marginBottom: '2.25rem',
  },
  timerBox: {
    background: 'rgba(4, 16, 38, 0.9)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '12px',
    padding: '0.85rem 1.25rem',
    minWidth: '78px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
  },
  timerNum: {
    fontSize: '1.75rem',
    fontWeight: 900,
    color: '#fbbf24',
    fontFamily: 'var(--font-heading)',
    lineHeight: '1',
  },
  timerLabel: {
    fontSize: '0.62rem',
    fontWeight: 800,
    color: '#94a3b8',
    letterSpacing: '0.1em',
    marginTop: '0.35rem',
  },
  timerColon: {
    fontSize: '1.5rem',
    fontWeight: 900,
    color: '#38bdf8',
    marginBottom: '0.85rem',
  },
  subscribeCard: {
    width: '100%',
    maxWidth: '520px',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    gap: '0.6rem',
    flexWrap: 'wrap',
  },
  input: {
    flex: '1',
    minWidth: '240px',
    background: 'rgba(4, 16, 38, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    borderRadius: '10px',
    padding: '0.8rem 1.1rem',
    color: '#ffffff',
    fontSize: '0.88rem',
    outline: 'none',
  },
  subscribeBtn: {
    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '0.82rem',
    fontFamily: 'var(--font-heading)',
    padding: '0.8rem 1.5rem',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    letterSpacing: '0.04em',
    display: 'inline-flex',
    alignItems: 'center',
    boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)',
  },
  successMsg: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
    background: 'rgba(74, 222, 128, 0.12)',
    border: '1px solid rgba(74, 222, 128, 0.3)',
    color: '#4ade80',
    padding: '0.85rem 1.25rem',
    borderRadius: '10px',
    fontSize: '0.88rem',
    fontWeight: 600,
  },
  actionsGroup: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '2.5rem',
  },
  primaryBtn: {
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    color: '#0f172a',
    fontWeight: 800,
    fontSize: '0.88rem',
    fontFamily: 'var(--font-heading)',
    padding: '0.85rem 1.8rem',
    borderRadius: '10px',
    textDecoration: 'none',
    boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
    display: 'inline-flex',
    alignItems: 'center',
  },
  secondaryBtn: {
    background: 'rgba(255, 255, 255, 0.06)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    color: '#ffffff',
    fontWeight: 700,
    fontSize: '0.88rem',
    fontFamily: 'var(--font-heading)',
    padding: '0.85rem 1.8rem',
    borderRadius: '10px',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
  },
  footerTrustRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    paddingTop: '1.5rem',
    width: '100%',
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.78rem',
    color: '#94a3b8',
    fontWeight: 600,
  },
  trustDot: {
    color: 'rgba(255, 255, 255, 0.2)',
  }
};

// Add CSS keyframe animations
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes floatBadge1 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(5deg); }
  }
  @keyframes floatBadge2 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(-6deg); }
  }
  @keyframes floatBadge3 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(8px) rotate(4deg); }
  }
  @keyframes floatBadge4 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(10px) rotate(-5deg); }
  }
  @keyframes haloPulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.1); }
  }
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  .floating-badge-1 { animation: floatBadge1 4s ease-in-out infinite; }
  .floating-badge-2 { animation: floatBadge2 4.5s ease-in-out infinite 0.5s; }
  .floating-badge-3 { animation: floatBadge3 3.8s ease-in-out infinite 1s; }
  .floating-badge-4 { animation: floatBadge4 4.2s ease-in-out infinite 1.5s; }
  .pulse-halo { animation: haloPulse 3s ease-in-out infinite; }
  
  .shimmer-bar {
    background: linear-gradient(90deg, #2563eb 0%, #38bdf8 40%, #fbbf24 80%, #2563eb 100%);
    background-size: 200% 100%;
    animation: shimmer 3s infinite linear;
  }
  @media (max-width: 600px) {
    .coming-soon-card {
      padding: 2.5rem 1.25rem !important;
    }
  }
`;
document.head.appendChild(styleSheet);
