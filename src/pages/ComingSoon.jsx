import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import { 
  ArrowLeft, 
  Sparkles, 
  Rocket, 
  ShieldCheck, 
  Bot, 
  Cpu, 
  Code, 
  Palette, 
  Award,
  Globe
} from 'lucide-react';

export default function ComingSoon({ title: customTitle, subtitle: customSubtitle, forceRegisterTheme = false }) {
  const location = useLocation();

  // Determine section name based on current path
  const getPageTitle = (path) => {
    if (customTitle) return customTitle;
    switch (path) {
      case '/catalog': return 'Olympiad Programs & Catalog';
      case '/skill-compass': return 'Student Skill Compass';
      case '/register': return 'Student Portal';
      case '/awards': return 'Technik Pride Award Portal';
      case '/schools': return 'School Partnership Portal';
      case '/verify': return 'Certificate Verification Engine';
      case '/dashboard': return 'Student & School Portal';
      case '/media': return 'Media Center & Press Releases';
      case '/contact': return 'Contact Us & Support Center';
      case '/faq': return 'Frequently Asked Questions';
      case '/privacy': return 'Privacy Policy & Terms';
      default:
        const cleanPath = path.replace('/', '').replace(/-/g, ' ');
        return cleanPath ? cleanPath.toUpperCase() : 'PORTAL';
    }
  };

  const pageTitle = getPageTitle(location.pathname);
  const isRegister = forceRegisterTheme || location.pathname === '/register';

  // Theme palettes: register (white + 3D yellow) and default (white + 3D blue)
  const theme = isRegister ? {
    containerBg: '#ffffff',
    bgGlow1: 'radial-gradient(circle, rgba(253, 224, 71, 0.45) 0%, transparent 70%)',
    bgGlow2: 'radial-gradient(circle, rgba(245, 158, 11, 0.35) 0%, transparent 70%)',
    gridOverlay: 'radial-gradient(rgba(234, 179, 8, 0.18) 1.5px, transparent 1.5px)',
    logoHalo: 'radial-gradient(circle, rgba(250, 204, 21, 0.5) 0%, transparent 70%)',
    badgeBg: 'linear-gradient(135deg, #ffffff 0%, #fffbeb 100%)',
    badgeBorder: 'rgba(245, 158, 11, 0.5)',
    badgeShadow: '0 8px 20px rgba(245, 158, 11, 0.25)',
    badgeIcons: {
      bot: '#d97706',
      cpu: '#b45309',
      code: '#92400e',
      palette: '#78350f'
    },
    eyebrowBg: 'linear-gradient(135deg, #fef08a 0%, #fde047 100%)',
    eyebrowBorder: '#facc15',
    eyebrowColor: '#78350f',
    eyebrowIcon: '#854d0e',
    titleSubColor: '#d97706',
    titleMainColor: '#0f172a',
    titleAccentColor: '#b45309',
    titleAccentShadow: 'none',
    descColor: '#334155',
    primaryBtnBg: 'linear-gradient(135deg, #fde047 0%, #f59e0b 100%)',
    primaryBtnColor: '#451a03',
    primaryBtnShadow: '0 10px 25px rgba(245, 158, 11, 0.4)',
    primaryBtnBorder: '1px solid #fef08a',
    secondaryBtnBg: '#ffffff',
    secondaryBtnBorder: '#fde047',
    secondaryBtnColor: '#854d0e',
    secondaryBtnIcon: '#d97706',
    trustTextColor: '#475569',
    trustIcons: {
      shield: '#d97706',
      award: '#b45309',
      globe: '#ca8a04'
    },
    trustDotColor: 'rgba(234, 179, 8, 0.3)',
    footerBorder: 'rgba(234, 179, 8, 0.2)'
  } : {
    containerBg: '#ffffff',
    bgGlow1: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, transparent 70%)',
    bgGlow2: 'radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%)',
    gridOverlay: 'radial-gradient(rgba(37, 99, 235, 0.15) 1.5px, transparent 1.5px)',
    logoHalo: 'radial-gradient(circle, rgba(56, 189, 248, 0.5) 0%, transparent 70%)',
    badgeBg: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
    badgeBorder: 'rgba(56, 189, 248, 0.5)',
    badgeShadow: '0 8px 20px rgba(37, 99, 235, 0.2)',
    badgeIcons: {
      bot: '#0284c7',
      cpu: '#2563eb',
      code: '#0369a1',
      palette: '#1d4ed8'
    },
    eyebrowBg: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
    eyebrowBorder: '#7dd3fc',
    eyebrowColor: '#0369a1',
    eyebrowIcon: '#0284c7',
    titleSubColor: '#0284c7',
    titleMainColor: '#0f172a',
    titleAccentColor: '#1d4ed8',
    titleAccentShadow: 'none',
    descColor: '#334155',
    primaryBtnBg: 'linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)',
    primaryBtnColor: '#ffffff',
    primaryBtnShadow: '0 10px 25px rgba(37, 99, 235, 0.35)',
    primaryBtnBorder: '1px solid #7dd3fc',
    secondaryBtnBg: '#ffffff',
    secondaryBtnBorder: '#38bdf8',
    secondaryBtnColor: '#1e40af',
    secondaryBtnIcon: '#0284c7',
    trustTextColor: '#475569',
    trustIcons: {
      shield: '#0284c7',
      award: '#2563eb',
      globe: '#0369a1'
    },
    trustDotColor: 'rgba(37, 99, 235, 0.3)',
    footerBorder: 'rgba(37, 99, 235, 0.2)'
  };

  return (
    <div style={{ ...styles.container, background: theme.containerBg }}>
      {/* Background Animated Light Orbs & Mesh Overlay */}
      <div style={{ ...styles.bgGlow1, background: theme.bgGlow1 }} className="animated-bg-orb orb-1" />
      <div style={{ ...styles.bgGlow2, background: theme.bgGlow2 }} className="animated-bg-orb orb-2" />
      <div style={{ ...styles.bgGridOverlay, backgroundImage: theme.gridOverlay }} />

      {/* Layered 3D Background Designs (Yellow for /register, Blue for other routes) */}
      <div style={styles.layered3dContainer}>
        <div style={isRegister ? styles.yellow3dCard1 : styles.blue3dCard1} className="float-3d-yellow-1" />
        <div style={isRegister ? styles.yellow3dCard2 : styles.blue3dCard2} className="float-3d-yellow-1-sub" />
        <div style={isRegister ? styles.yellow3dCard3 : styles.blue3dCard3} className="float-3d-yellow-2" />
        <div style={isRegister ? styles.yellow3dCard4 : styles.blue3dCard4} className="float-3d-yellow-2-sub" />
        <div style={isRegister ? styles.yellow3dOrb1 : styles.blue3dOrb1} className="float-3d-orb-1" />
        <div style={isRegister ? styles.yellow3dOrb2 : styles.blue3dOrb2} className="float-3d-orb-2" />
      </div>

      {/* Full-Screen Content Area (No inner boxed card background/border) */}
      <div style={styles.contentWrapper} className="coming-soon-wrapper">

        {/* Floating Orbit Badges around logo */}
        <div style={styles.logoFrame}>
          <div style={{ ...styles.orbitBadge1, background: theme.badgeBg, borderColor: theme.badgeBorder, boxShadow: theme.badgeShadow }} className="floating-badge-1" data-tooltip="Robotics">
            <Bot size={18} color={theme.badgeIcons.bot} />
          </div>
          <div style={{ ...styles.orbitBadge2, background: theme.badgeBg, borderColor: theme.badgeBorder, boxShadow: theme.badgeShadow }} className="floating-badge-2" data-tooltip="Logic">
            <Cpu size={18} color={theme.badgeIcons.cpu} />
          </div>
          <div style={{ ...styles.orbitBadge3, background: theme.badgeBg, borderColor: theme.badgeBorder, boxShadow: theme.badgeShadow }} className="floating-badge-3" data-tooltip="Coding">
            <Code size={18} color={theme.badgeIcons.code} />
          </div>
          <div style={{ ...styles.orbitBadge4, background: theme.badgeBg, borderColor: theme.badgeBorder, boxShadow: theme.badgeShadow }} className="floating-badge-4" data-tooltip="Creativity">
            <Palette size={18} color={theme.badgeIcons.palette} />
          </div>

          <div style={{ ...styles.logoHalo, background: theme.logoHalo }} className="pulse-halo" />
          <img 
            src={logoImg} 
            alt="Technik Emblem" 
            style={styles.logoImg}
          />
        </div>

        {/* Eyebrow Capsule */}
        <div style={{
          ...styles.eyebrowCapsule,
          background: theme.eyebrowBg,
          border: `1px solid ${theme.eyebrowBorder}`,
          color: theme.eyebrowColor,
          boxShadow: isRegister ? '0 6px 20px rgba(250, 204, 21, 0.35)' : '0 6px 20px rgba(56, 189, 248, 0.25)'
        }}>
          <Rocket size={14} color={theme.eyebrowIcon} style={{ marginRight: '0.4rem' }} />
          <span>SOMETHING EXTRAORDINARY IS COMING SOON</span>
        </div>

        {/* Dynamic Page Header */}
        <h1 style={{ ...styles.title, color: theme.titleMainColor }}>
          <span style={{ ...styles.titleSub, color: theme.titleSubColor }}>{pageTitle}</span>
          <span style={{ color: theme.titleAccentColor, display: 'block', marginTop: '0.3rem', textShadow: theme.titleAccentShadow }}>
            LAUNCHING VERY SOON
          </span>
        </h1>

        <p style={{ ...styles.description, color: theme.descColor }}>
          {customSubtitle || "Our team is currently putting the final touches on this portal to bring you a world-class, future-ready Olympiad experience. Stay tuned!"}
        </p>

        {/* Navigation Action Buttons */}
        <div style={styles.actionsGroup}>
          <Link 
            to="/" 
            style={{
              ...styles.primaryBtn,
              background: theme.primaryBtnBg,
              color: theme.primaryBtnColor,
              boxShadow: theme.primaryBtnShadow,
              border: theme.primaryBtnBorder
            }} 
            className={isRegister ? "btn-gold-hover" : "btn-blue-hover"}
          >
            <ArrowLeft size={16} style={{ marginRight: '0.4rem' }} />
            BACK TO HOME
          </Link>
          <Link 
            to="/about" 
            style={{
              ...styles.secondaryBtn,
              background: theme.secondaryBtnBg,
              border: `2px solid ${theme.secondaryBtnBorder}`,
              color: theme.secondaryBtnColor,
              boxShadow: isRegister ? '0 8px 20px rgba(234, 179, 8, 0.15)' : '0 8px 20px rgba(37, 99, 235, 0.15)'
            }} 
            className={isRegister ? "btn-glass-hover" : "btn-blue-glass-hover"}
          >
            <Sparkles size={16} color={theme.secondaryBtnIcon} style={{ marginRight: '0.4rem' }} />
            ABOUT TECHNIK OLYMPIAD
          </Link>
        </div>

        {/* Trust Badges */}
        <div style={{ ...styles.footerTrustRow, borderTopColor: theme.footerBorder }}>
          <div style={{ ...styles.trustItem, color: theme.trustTextColor }}>
            <ShieldCheck size={14} color={theme.trustIcons.shield} />
            <span>Trusted & Verified</span>
          </div>
          <div style={{ ...styles.trustDot, color: theme.trustDotColor }}>•</div>
          <div style={{ ...styles.trustItem, color: theme.trustTextColor }}>
            <Award size={14} color={theme.trustIcons.award} />
            <span>National Recognition</span>
          </div>
          <div style={{ ...styles.trustDot, color: theme.trustDotColor }}>•</div>
          <div style={{ ...styles.trustItem, color: theme.trustTextColor }}>
            <Globe size={14} color={theme.trustIcons.globe} />
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
    background: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 1.5rem',
    position: 'relative',
    overflow: 'hidden',
  },
  bgGlow1: {
    position: 'absolute',
    top: '-10%',
    left: '15%',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  bgGlow2: {
    position: 'absolute',
    bottom: '-10%',
    right: '15%',
    width: '420px',
    height: '420px',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  bgGridOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundSize: '32px 32px',
    pointerEvents: 'none',
  },
  layered3dContainer: {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: 1,
  },
  /* 3D Yellow Elements */
  yellow3dCard1: {
    position: 'absolute',
    top: '-8%',
    right: '-4%',
    width: '420px',
    height: '420px',
    borderRadius: '40px',
    background: 'linear-gradient(135deg, rgba(254, 240, 138, 0.85) 0%, rgba(251, 191, 36, 0.5) 100%)',
    border: '2px solid rgba(250, 204, 21, 0.8)',
    boxShadow: '0 30px 60px -12px rgba(234, 179, 8, 0.35), inset 0 2px 8px rgba(255, 255, 255, 0.9)',
    transform: 'perspective(1000px) rotateX(25deg) rotateY(-20deg) rotateZ(12deg)',
    pointerEvents: 'none',
  },
  yellow3dCard2: {
    position: 'absolute',
    top: '2%',
    right: '4%',
    width: '340px',
    height: '340px',
    borderRadius: '32px',
    background: 'linear-gradient(135deg, rgba(253, 224, 71, 0.65) 0%, rgba(245, 158, 11, 0.4) 100%)',
    border: '1.5px solid rgba(253, 224, 71, 0.9)',
    boxShadow: '0 20px 40px -10px rgba(245, 158, 11, 0.25)',
    transform: 'perspective(1000px) rotateX(20deg) rotateY(-15deg) rotateZ(6deg)',
    pointerEvents: 'none',
  },
  yellow3dCard3: {
    position: 'absolute',
    bottom: '-10%',
    left: '-5%',
    width: '450px',
    height: '450px',
    borderRadius: '48px',
    background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.45) 0%, rgba(254, 240, 138, 0.75) 100%)',
    border: '2px solid rgba(250, 204, 21, 0.7)',
    boxShadow: '0 30px 60px -15px rgba(234, 179, 8, 0.3), inset 0 2px 10px rgba(255, 255, 255, 0.9)',
    transform: 'perspective(1000px) rotateX(-20deg) rotateY(25deg) rotateZ(-10deg)',
    pointerEvents: 'none',
  },
  yellow3dCard4: {
    position: 'absolute',
    bottom: '-1%',
    left: '2%',
    width: '360px',
    height: '360px',
    borderRadius: '38px',
    background: 'linear-gradient(135deg, rgba(254, 240, 138, 0.65) 0%, rgba(245, 158, 11, 0.35) 100%)',
    border: '1.5px solid rgba(254, 240, 138, 0.9)',
    boxShadow: '0 20px 45px -10px rgba(245, 158, 11, 0.2)',
    transform: 'perspective(1000px) rotateX(-15deg) rotateY(18deg) rotateZ(-5deg)',
    pointerEvents: 'none',
  },
  yellow3dOrb1: {
    position: 'absolute',
    top: '18%',
    left: '10%',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'radial-gradient(circle at 35% 35%, #fef08a 0%, #f59e0b 70%, #d97706 100%)',
    boxShadow: '0 15px 35px rgba(245, 158, 11, 0.35), inset -5px -5px 15px rgba(180, 83, 9, 0.4), inset 5px 5px 15px rgba(255, 255, 255, 0.8)',
    pointerEvents: 'none',
  },
  yellow3dOrb2: {
    position: 'absolute',
    bottom: '20%',
    right: '8%',
    width: '95px',
    height: '95px',
    borderRadius: '50%',
    background: 'radial-gradient(circle at 35% 35%, #fffbeb 0%, #fde047 60%, #eab308 100%)',
    boxShadow: '0 12px 30px rgba(234, 179, 8, 0.3), inset -4px -4px 10px rgba(161, 98, 7, 0.4), inset 4px 4px 10px rgba(255, 255, 255, 0.9)',
    pointerEvents: 'none',
  },
  /* 3D Blue Elements */
  blue3dCard1: {
    position: 'absolute',
    top: '-8%',
    right: '-4%',
    width: '420px',
    height: '420px',
    borderRadius: '40px',
    background: 'linear-gradient(135deg, rgba(186, 230, 253, 0.85) 0%, rgba(56, 189, 248, 0.5) 100%)',
    border: '2px solid rgba(56, 189, 248, 0.8)',
    boxShadow: '0 30px 60px -12px rgba(37, 99, 235, 0.35), inset 0 2px 8px rgba(255, 255, 255, 0.9)',
    transform: 'perspective(1000px) rotateX(25deg) rotateY(-20deg) rotateZ(12deg)',
    pointerEvents: 'none',
  },
  blue3dCard2: {
    position: 'absolute',
    top: '2%',
    right: '4%',
    width: '340px',
    height: '340px',
    borderRadius: '32px',
    background: 'linear-gradient(135deg, rgba(125, 211, 252, 0.65) 0%, rgba(37, 99, 235, 0.4) 100%)',
    border: '1.5px solid rgba(125, 211, 252, 0.9)',
    boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.25)',
    transform: 'perspective(1000px) rotateX(20deg) rotateY(-15deg) rotateZ(6deg)',
    pointerEvents: 'none',
  },
  blue3dCard3: {
    position: 'absolute',
    bottom: '-10%',
    left: '-5%',
    width: '450px',
    height: '450px',
    borderRadius: '48px',
    background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.45) 0%, rgba(224, 242, 254, 0.75) 100%)',
    border: '2px solid rgba(56, 189, 248, 0.7)',
    boxShadow: '0 30px 60px -15px rgba(37, 99, 235, 0.3), inset 0 2px 10px rgba(255, 255, 255, 0.9)',
    transform: 'perspective(1000px) rotateX(-20deg) rotateY(25deg) rotateZ(-10deg)',
    pointerEvents: 'none',
  },
  blue3dCard4: {
    position: 'absolute',
    bottom: '-1%',
    left: '2%',
    width: '360px',
    height: '360px',
    borderRadius: '38px',
    background: 'linear-gradient(135deg, rgba(186, 230, 253, 0.65) 0%, rgba(37, 99, 235, 0.35) 100%)',
    border: '1.5px solid rgba(186, 230, 253, 0.9)',
    boxShadow: '0 20px 45px -10px rgba(37, 99, 235, 0.2)',
    transform: 'perspective(1000px) rotateX(-15deg) rotateY(18deg) rotateZ(-5deg)',
    pointerEvents: 'none',
  },
  blue3dOrb1: {
    position: 'absolute',
    top: '18%',
    left: '10%',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'radial-gradient(circle at 35% 35%, #e0f2fe 0%, #38bdf8 70%, #1d4ed8 100%)',
    boxShadow: '0 15px 35px rgba(37, 99, 235, 0.35), inset -5px -5px 15px rgba(30, 64, 175, 0.4), inset 5px 5px 15px rgba(255, 255, 255, 0.8)',
    pointerEvents: 'none',
  },
  blue3dOrb2: {
    position: 'absolute',
    bottom: '20%',
    right: '8%',
    width: '95px',
    height: '95px',
    borderRadius: '50%',
    background: 'radial-gradient(circle at 35% 35%, #f0f9ff 0%, #7dd3fc 60%, #2563eb 100%)',
    boxShadow: '0 12px 30px rgba(37, 99, 235, 0.3), inset -4px -4px 10px rgba(29, 78, 216, 0.4), inset 4px 4px 10px rgba(255, 255, 255, 0.9)',
    pointerEvents: 'none',
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '850px',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoFrame: {
    position: 'relative',
    width: '135px',
    height: '135px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.75rem',
  },
  logoHalo: {
    position: 'absolute',
    inset: '-10px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(251, 191, 36, 0.35) 0%, transparent 70%)',
  },
  logoImg: {
    width: '115px',
    height: '115px',
    objectFit: 'contain',
    position: 'relative',
    zIndex: 3,
    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))',
  },
  orbitBadge1: {
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)',
    border: '1px solid rgba(255, 255, 255, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
    boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
  },
  orbitBadge2: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)',
    border: '1px solid rgba(255, 255, 255, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
    boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
  },
  orbitBadge3: {
    position: 'absolute',
    bottom: '-10px',
    left: '-10px',
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)',
    border: '1px solid rgba(255, 255, 255, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
    boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
  },
  orbitBadge4: {
    position: 'absolute',
    bottom: '-10px',
    right: '-10px',
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)',
    border: '1px solid rgba(255, 255, 255, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
    boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
  },
  eyebrowCapsule: {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'rgba(251, 191, 36, 0.12)',
    border: '1px solid rgba(251, 191, 36, 0.4)',
    color: '#fbbf24',
    padding: '0.45rem 1.25rem',
    borderRadius: '50px',
    fontSize: '0.78rem',
    fontWeight: 800,
    letterSpacing: '0.1em',
    marginBottom: '1rem',
    fontFamily: 'var(--font-heading)',
  },
  title: {
    fontSize: '2.75rem',
    fontWeight: 900,
    fontFamily: 'var(--font-heading)',
    color: '#ffffff',
    lineHeight: '1.15',
    marginBottom: '1rem',
  },
  titleSub: {
    fontSize: '1.65rem',
    fontWeight: 700,
    color: '#38bdf8',
    letterSpacing: '0.04em',
  },
  description: {
    color: '#cbd5e1',
    fontSize: '1.05rem',
    lineHeight: '1.65',
    maxWidth: '620px',
    marginBottom: '2.25rem',
  },
  actionsGroup: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '3rem',
  },
  primaryBtn: {
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    color: '#0c2340',
    fontWeight: 800,
    fontSize: '0.88rem',
    fontFamily: 'var(--font-heading)',
    padding: '0.85rem 2rem',
    borderRadius: '12px',
    textDecoration: 'none',
    boxShadow: '0 6px 20px rgba(245, 158, 11, 0.35)',
    display: 'inline-flex',
    alignItems: 'center',
    letterSpacing: '0.04em',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
  },
  secondaryBtn: {
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    color: '#ffffff',
    fontWeight: 700,
    fontSize: '0.88rem',
    fontFamily: 'var(--font-heading)',
    padding: '0.85rem 2rem',
    borderRadius: '12px',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
    letterSpacing: '0.04em',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
  },
  footerTrustRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.25rem',
    flexWrap: 'wrap',
    borderTop: '1px solid rgba(255, 255, 255, 0.12)',
    paddingTop: '2rem',
    width: '100%',
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.45rem',
    fontSize: '0.82rem',
    color: '#cbd5e1',
    fontWeight: 600,
  },
  trustDot: {
    color: 'rgba(255, 255, 255, 0.25)',
  }
};

// Add CSS keyframe animations & button hover effects
if (typeof document !== 'undefined') {
  let styleSheet = document.getElementById('coming-soon-styles');
  if (!styleSheet) {
    styleSheet = document.createElement("style");
    styleSheet.id = 'coming-soon-styles';
    document.head.appendChild(styleSheet);
  }
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

    @keyframes float3dYellow1 {
      0%, 100% { transform: perspective(1000px) rotateX(25deg) rotateY(-20deg) rotateZ(12deg) translateY(0px); }
      50% { transform: perspective(1000px) rotateX(20deg) rotateY(-15deg) rotateZ(14deg) translateY(-14px); }
    }
    @keyframes float3dYellow2 {
      0%, 100% { transform: perspective(1000px) rotateX(-20deg) rotateY(25deg) rotateZ(-10deg) translateY(0px); }
      50% { transform: perspective(1000px) rotateX(-15deg) rotateY(20deg) rotateZ(-7deg) translateY(14px); }
    }
    @keyframes floatOrb1 {
      0%, 100% { transform: translateY(0px) scale(1); }
      50% { transform: translateY(-12px) scale(1.05); }
    }
    @keyframes floatOrb2 {
      0%, 100% { transform: translateY(0px) scale(1); }
      50% { transform: translateY(10px) scale(0.95); }
    }

    .floating-badge-1 { animation: floatBadge1 4s ease-in-out infinite; }
    .floating-badge-2 { animation: floatBadge2 4.5s ease-in-out infinite 0.5s; }
    .floating-badge-3 { animation: floatBadge3 3.8s ease-in-out infinite 1s; }
    .floating-badge-4 { animation: floatBadge4 4.2s ease-in-out infinite 1.5s; }
    .pulse-halo { animation: haloPulse 3s ease-in-out infinite; }

    .float-3d-yellow-1 { animation: float3dYellow1 7s ease-in-out infinite; }
    .float-3d-yellow-1-sub { animation: float3dYellow1 7.5s ease-in-out infinite 0.5s; }
    .float-3d-yellow-2 { animation: float3dYellow2 8s ease-in-out infinite 1s; }
    .float-3d-yellow-2-sub { animation: float3dYellow2 8.5s ease-in-out infinite 1.5s; }
    .float-3d-orb-1 { animation: floatOrb1 5s ease-in-out infinite; }
    .float-3d-orb-2 { animation: floatOrb2 6s ease-in-out infinite 0.5s; }

    .btn-gold-hover:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(245, 158, 11, 0.55) !important;
      background: linear-gradient(135deg, #fcd34d 0%, #fbbf24 100%) !important;
    }

    .btn-glass-hover:hover {
      transform: translateY(-2px);
      background: rgba(255, 255, 255, 0.95) !important;
      border-color: rgba(245, 158, 11, 0.8) !important;
      box-shadow: 0 8px 24px rgba(245, 158, 11, 0.25) !important;
    }

    .btn-blue-hover:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 28px rgba(37, 99, 235, 0.5) !important;
      background: linear-gradient(135deg, #60a5fa 0%, #1d4ed8 100%) !important;
    }

    .btn-blue-glass-hover:hover {
      transform: translateY(-2px);
      background: rgba(240, 249, 255, 0.95) !important;
      border-color: rgba(37, 99, 235, 0.8) !important;
      box-shadow: 0 8px 24px rgba(37, 99, 235, 0.25) !important;
    }

    @media (max-width: 600px) {
      .coming-soon-wrapper {
        padding: 1rem !important;
      }
    }
  `;
}
