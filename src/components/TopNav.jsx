import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import { 
  Menu, 
  X, 
  Trophy, 
  Mail, 
  Phone, 
  GraduationCap, 
  UserCheck, 
  ChevronDown, 
  Sparkles
} from 'lucide-react';

export default function TopNav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header style={styles.headerWrapper} className="site-header-animated">
      {/* Top Utility Bar */}
      <div style={styles.topUtilityBar} className="top-utility-bar">
        <div style={styles.topUtilityContainer}>
          <div style={styles.topContacts}>
            <a href="mailto:info@technikolympiad.com" style={styles.topContactItem}>
              <Mail size={13} color="#38bdf8" />
              <span>info@technikolympiad.com</span>
            </a>
            <span style={styles.topDivider}>|</span>
            <a href="tel:+919876543210" style={styles.topContactItem}>
              <Phone size={13} color="#38bdf8" />
              <span>+91 98765 43210</span>
            </a>
          </div>

          <div style={styles.topRightActions}>
            <Link to="/dashboard" style={styles.topAuthLink}>
              <GraduationCap size={13} color="#fbbf24" />
              <span>School Login</span>
            </Link>
            <span style={styles.topDivider}>|</span>
            <Link to="/dashboard" style={styles.topAuthLink}>
              <UserCheck size={13} color="#38bdf8" />
              <span>Student Login</span>
            </Link>
            <span style={styles.topDivider}>|</span>
            <div style={styles.topSocials}>
              <span style={styles.socialLabel}>Follow Us :</span>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={styles.nav}>
        <div style={styles.navContainer} className="main-nav-container">
          {/* Logo */}
          <Link to="/" style={styles.logo} onClick={() => setIsOpen(false)}>
            <div style={styles.logoGearBox}>
              <img 
                src={logoImg} 
                alt="Technik Olympiad Logo" 
                style={{ width: '42px', height: '42px', objectFit: 'contain' }} 
              />
            </div>
            <div style={styles.logoTextGroup}>
              <div style={styles.brandTitle} className="brand-title-text">
                TECHNIK <span style={{ color: '#f97316' }}>OLYMPIAD</span>
              </div>
              <div style={styles.brandSubtitle} className="brand-sub-text">PRIVATE LIMITED</div>
              <div style={{ fontSize: '0.52rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.04em', marginTop: '1px' }}>Discover | Compete | Achieve</div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="desktop-nav-menu" style={styles.desktopNav}>
            <Link 
              to="/" 
              className={`nav-item-link ${isActive('/') ? 'active-link' : ''}`}
              style={{
                ...styles.navLink,
                color: isActive('/') ? '#f97316' : '#0f172a',
                fontWeight: isActive('/') ? 700 : 600,
              }}
            >
              HOME
            </Link>

            {/* About Us Dropdown */}
            <div 
              className="dropdown-wrapper"
              style={styles.dropdownWrapper}
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/about" 
                className={`nav-item-link dropdown-trigger ${isActive('/about') ? 'active-link' : ''}`}
                style={{
                  ...styles.navLink,
                  color: isActive('/about') ? '#f97316' : '#0f172a',
                  fontWeight: isActive('/about') ? 700 : 600,
                }}
              >
                <span>ABOUT US</span>
                <ChevronDown size={13} className="chevron-icon" style={{ marginLeft: '2px' }} />
              </Link>
              {activeDropdown === 'about' && (
                <div style={styles.dropdownMenu}>
                  <Link to="/about" style={styles.dropdownItem}>About Technik</Link>
                  <Link to="/about" style={styles.dropdownItem}>Our Journey</Link>
                  <Link to="/about" style={styles.dropdownItem}>Vision & Mission</Link>
                  <Link to="/about" style={styles.dropdownItem}>Leadership</Link>
                  <Link to="/about" style={styles.dropdownItem}>Why Technik</Link>
                </div>
              )}
            </div>

            <div 
              className="dropdown-wrapper"
              style={styles.dropdownWrapper}
              onMouseEnter={() => setActiveDropdown('olympiads')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/catalog" 
                className={`nav-item-link dropdown-trigger ${isActive('/catalog') ? 'active-link' : ''}`}
                style={{
                  ...styles.navLink,
                  color: isActive('/catalog') ? '#f97316' : '#0f172a',
                  fontWeight: isActive('/catalog') ? 700 : 600,
                }}
              >
                <span>OLYMPIADS</span>
                <ChevronDown size={13} className="chevron-icon" style={{ marginLeft: '2px' }} />
              </Link>
              {activeDropdown === 'olympiads' && (
                <div style={styles.dropdownMenu}>
                  <Link to="/catalog" style={styles.dropdownItem}>Robotics Olympiad</Link>
                  <Link to="/catalog" style={styles.dropdownItem}>Generative AI Olympiad</Link>
                  <Link to="/catalog" style={styles.dropdownItem}>Coding Olympiad</Link>
                  <Link to="/catalog" style={styles.dropdownItem}>Technik Art Olympiad</Link>
                  <Link to="/catalog" style={styles.dropdownItem}>English Olympiad</Link>
                  <Link to="/catalog" style={styles.dropdownItem}>Mental Maths Olympiad</Link>
                </div>
              )}
            </div>

            <div 
              className="dropdown-wrapper"
              style={styles.dropdownWrapper}
              onMouseEnter={() => setActiveDropdown('awards')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/awards" 
                className={`nav-item-link dropdown-trigger ${isActive('/awards') ? 'active-link' : ''}`}
                style={{
                  ...styles.navLink,
                  color: isActive('/awards') ? '#f97316' : '#0f172a',
                  fontWeight: isActive('/awards') ? 700 : 600,
                }}
              >
                <span>TECHNIK PRIDE AWARD</span>
                <ChevronDown size={13} className="chevron-icon" style={{ marginLeft: '2px' }} />
              </Link>
              {activeDropdown === 'awards' && (
                <div style={styles.dropdownMenu}>
                  <Link to="/awards" style={styles.dropdownItem}>Award Overview</Link>
                  <Link to="/awards" style={styles.dropdownItem}>Recognition Levels</Link>
                  <Link to="/awards" style={styles.dropdownItem}>Apply for Award</Link>
                </div>
              )}
            </div>

            <div 
              className="dropdown-wrapper"
              style={styles.dropdownWrapper}
              onMouseEnter={() => setActiveDropdown('schools')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/schools" 
                className={`nav-item-link dropdown-trigger ${isActive('/schools') ? 'active-link' : ''}`}
                style={{
                  ...styles.navLink,
                  color: isActive('/schools') ? '#f97316' : '#0f172a',
                  fontWeight: isActive('/schools') ? 700 : 600,
                }}
              >
                <span>FOR SCHOOLS</span>
                <ChevronDown size={13} className="chevron-icon" style={{ marginLeft: '2px' }} />
              </Link>
              {activeDropdown === 'schools' && (
                <div style={styles.dropdownMenu}>
                  <Link to="/schools" style={styles.dropdownItem}>School Registration</Link>
                  <Link to="/schools" style={styles.dropdownItem}>Hosting Partner</Link>
                  <Link to="/schools" style={styles.dropdownItem}>School Benefits</Link>
                </div>
              )}
            </div>

            <div 
              className="dropdown-wrapper"
              style={styles.dropdownWrapper}
              onMouseEnter={() => setActiveDropdown('students')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/skill-compass" 
                className="nav-item-link dropdown-trigger"
                style={styles.navLink}
              >
                <span>FOR STUDENTS</span>
                <ChevronDown size={13} className="chevron-icon" style={{ marginLeft: '2px' }} />
              </Link>
              {activeDropdown === 'students' && (
                <div style={styles.dropdownMenu}>
                  <Link to="/skill-compass" style={styles.dropdownItem}>Skill Compass Test</Link>
                  <Link to="/catalog" style={styles.dropdownItem}>Track Selection</Link>
                  <Link to="/dashboard" style={styles.dropdownItem}>Student Portal</Link>
                </div>
              )}
            </div>

            <div 
              className="dropdown-wrapper"
              style={styles.dropdownWrapper}
              onMouseEnter={() => setActiveDropdown('media')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/media" 
                className={`nav-item-link dropdown-trigger ${isActive('/media') ? 'active-link' : ''}`}
                style={styles.navLink}
              >
                <span>MEDIA</span>
                <ChevronDown size={13} className="chevron-icon" style={{ marginLeft: '2px' }} />
              </Link>
              {activeDropdown === 'media' && (
                <div style={styles.dropdownMenu}>
                  <Link to="/media" style={styles.dropdownItem}>Press Releases</Link>
                  <Link to="/media" style={styles.dropdownItem}>Photo Gallery</Link>
                  <Link to="/media" style={styles.dropdownItem}>Event Highlights</Link>
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className={`nav-item-link ${isActive('/contact') ? 'active-link' : ''}`}
              style={styles.navLink}
            >
              CONTACT US
            </Link>

            <Link 
              to="/register" 
              className="pulse-register-btn"
              style={styles.registerBtn}
            >
              REGISTER NOW
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button style={styles.mobileMenuButton} onClick={() => setIsOpen(!isOpen)} id="mobile-nav-toggle">
            {isOpen ? <X size={24} color="#0f172a" /> : <Menu size={24} color="#0f172a" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div style={styles.mobileDrawer}>
            <div style={styles.mobileAuthRow}>
              <Link to="/dashboard" style={styles.mobileAuthBtnGold} onClick={() => setIsOpen(false)}>
                <GraduationCap size={14} style={{ marginRight: '0.35rem' }} /> School Login
              </Link>
              <Link to="/dashboard" style={styles.mobileAuthBtnBlue} onClick={() => setIsOpen(false)}>
                <UserCheck size={14} style={{ marginRight: '0.35rem' }} /> Student Login
              </Link>
            </div>
            
            <div style={styles.mobileLinks}>
              <Link to="/" style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>HOME</Link>
              <Link to="/about" style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>ABOUT US</Link>
              <Link to="/catalog" style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>OLYMPIADS</Link>
              <Link to="/awards" style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>TECHNIK PRIDE AWARD</Link>
              <Link to="/schools" style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>FOR SCHOOLS</Link>
              <Link to="/skill-compass" style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>FOR STUDENTS</Link>
              <Link to="/dashboard" style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>DASHBOARD</Link>
              <Link
                to="/register"
                style={styles.mobileRegisterBtn}
                onClick={() => setIsOpen(false)}
              >
                REGISTER NOW
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

const styles = {
  headerWrapper: {
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
  },
  topUtilityBar: {
    background: '#041026',
    color: '#cbd5e1',
    fontSize: '0.75rem',
    padding: '0.4rem 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
  },
  topUtilityContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 1.5rem',
  },
  topContacts: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  topContactItem: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    color: '#e2e8f0',
    textDecoration: 'none',
    fontWeight: 500,
  },
  topDivider: {
    color: 'rgba(255,255,255,0.2)',
    margin: '0 0.1rem',
  },
  topRightActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  topAuthLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 600,
  },
  topSocials: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginLeft: '0.25rem',
  },
  socialLabel: {
    color: '#94a3b8',
    fontSize: '0.72rem',
  },
  socialIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    borderRadius: '4px',
    background: '#2563eb',
    color: '#ffffff',
    textDecoration: 'none',
  },
  nav: {
    background: '#ffffff',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #e2e8f0',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 1.5rem',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    textDecoration: 'none',
    flexShrink: 0,
  },
  logoGearBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTextGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  brandTitle: {
    fontSize: '1.15rem',
    fontWeight: 900,
    fontFamily: 'var(--font-heading)',
    color: '#0b1d3a',
    letterSpacing: '-0.02em',
    lineHeight: '1',
  },
  brandSubtitle: {
    fontSize: '0.58rem',
    fontWeight: 700,
    color: '#64748b',
    letterSpacing: '0.16em',
    marginTop: '0.15rem',
  },
  desktopNav: {
    display: 'none',
    alignItems: 'center',
    gap: '0.45rem',
    height: '100%',
    flexShrink: 0,
  },
  dropdownWrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  navLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.15rem',
    fontSize: '0.78rem',
    fontFamily: 'var(--font-heading)',
    fontWeight: 600,
    color: '#0f172a',
    textDecoration: 'none',
    padding: '0.4rem 0.25rem',
    whiteSpace: 'nowrap',
    letterSpacing: '0.01em',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '180px',
    background: '#041026',
    borderTop: '3px solid #f97316',
    borderRadius: '0 0 8px 8px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    padding: '0.5rem 0',
    zIndex: 100,
  },
  dropdownItem: {
    display: 'block',
    padding: '0.6rem 1rem',
    color: '#ffffff',
    fontSize: '0.82rem',
    fontWeight: 500,
    textDecoration: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  registerBtn: {
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    color: '#0f172a',
    fontWeight: 800,
    fontSize: '0.78rem',
    fontFamily: 'var(--font-heading)',
    padding: '0.55rem 1.1rem',
    borderRadius: '6px',
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    marginLeft: '0.25rem',
    letterSpacing: '0.03em',
  },
  mobileMenuButton: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
  },
  mobileDrawer: {
    position: 'absolute',
    top: '70px',
    left: 0,
    right: 0,
    background: '#ffffff',
    borderBottom: '3px solid #f97316',
    padding: '1.25rem',
    zIndex: 999,
    boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
  },
  mobileAuthRow: {
    display: 'flex',
    gap: '0.75rem',
    marginBottom: '1rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #f1f5f9',
  },
  mobileAuthBtnGold: {
    flex: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fbbf24',
    color: '#0f172a',
    fontWeight: 700,
    fontSize: '0.8rem',
    padding: '0.6rem',
    borderRadius: '6px',
    textDecoration: 'none',
  },
  mobileAuthBtnBlue: {
    flex: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#2563eb',
    color: '#ffffff',
    fontWeight: 700,
    fontSize: '0.8rem',
    padding: '0.6rem',
    borderRadius: '6px',
    textDecoration: 'none',
  },
  mobileLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  mobileNavLink: {
    fontSize: '0.9rem',
    fontWeight: 700,
    color: '#0f172a',
    textDecoration: 'none',
    padding: '0.5rem 0',
    borderBottom: '1px solid #f1f5f9',
  },
  mobileRegisterBtn: {
    background: '#f97316',
    color: '#ffffff',
    fontWeight: 800,
    textAlign: 'center',
    padding: '0.75rem',
    borderRadius: '6px',
    textDecoration: 'none',
    marginTop: '0.5rem',
  }
};

// Add responsive CSS styling and animations
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes navSlideDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .site-header-animated {
    animation: navSlideDown 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .nav-item-link {
    position: relative;
    transition: color 0.25s ease;
  }

  .nav-item-link::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #f97316 0%, #fbbf24 100%);
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .nav-item-link:hover::after,
  .nav-item-link.active-link::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  .nav-item-link:hover {
    color: #f97316 !important;
  }

  .dropdown-wrapper .chevron-icon {
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
  }

  .dropdown-wrapper:hover .chevron-icon {
    transform: rotate(180deg);
    color: #f97316;
  }

  @keyframes registerPulseGlow {
    0%, 100% {
      box-shadow: 0 4px 14px rgba(245, 158, 11, 0.4), 0 0 0px rgba(245, 158, 11, 0);
      transform: scale(1);
    }
    50% {
      box-shadow: 0 6px 22px rgba(245, 158, 11, 0.75), 0 0 12px rgba(245, 158, 11, 0.5);
      transform: scale(1.02);
    }
  }

  .pulse-register-btn {
    animation: registerPulseGlow 3.5s ease-in-out infinite;
    transition: all 0.3s ease !important;
  }

  .pulse-register-btn:hover {
    transform: translateY(-2px) scale(1.05) !important;
    box-shadow: 0 8px 25px rgba(245, 158, 11, 0.85) !important;
  }

  @media (min-width: 992px) {
    #mobile-nav-toggle {
      display: none !important;
    }
    .desktop-nav-menu {
      display: flex !important;
    }
  }
  @media (min-width: 992px) and (max-width: 1240px) {
    .desktop-nav-menu {
      gap: 0.2rem !important;
    }
    .desktop-nav-menu a {
      font-size: 0.72rem !important;
      padding: 0.35rem 0.15rem !important;
    }
    .main-nav-container {
      padding: 0 0.85rem !important;
    }
    .brand-title-text {
      font-size: 1.05rem !important;
    }
  }
  @media (max-width: 991px) {
    .desktop-nav-menu {
      display: none !important;
    }
    #mobile-nav-toggle {
      display: flex !important;
    }
    .top-utility-bar {
      display: none !important;
    }
    .main-nav-container {
      padding: 0 1rem !important;
    }
    .brand-title-text {
      font-size: 1.05rem !important;
    }
    .brand-sub-text {
      font-size: 0.52rem !important;
    }
  }
`;
document.head.appendChild(styleSheet);
