import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    <header style={styles.headerWrapper}>
      {/* Top Utility Bar */}
      <div style={styles.topUtilityBar}>
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
        <div style={styles.navContainer}>
          {/* Logo */}
          <Link to="/" style={styles.logo} onClick={() => setIsOpen(false)}>
            <div style={styles.logoGearBox}>
              <svg viewBox="0 0 100 100" width="38" height="38">
                <path d="M50,15 A35,35 0 1,0 50,85 A35,35 0 1,0 50,15 Z" fill="none" stroke="#2563eb" strokeWidth="6" strokeDasharray="6 4" />
                <circle cx="50" cy="50" r="28" fill="#0f172a" />
                <path d="M40,35 L60,35 L60,42 L53,42 L53,65 L47,65 L47,42 L40,42 Z" fill="#f97316" />
                <polygon points="50,22 55,30 45,30" fill="#fbbf24" />
              </svg>
            </div>
            <div style={styles.logoTextGroup}>
              <div style={styles.brandTitle}>
                TECHNIK <span style={{ color: '#f97316' }}>OLYMPIAD</span>
              </div>
              <div style={styles.brandSubtitle}>PRIVATE LIMITED</div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="desktop-nav-menu" style={styles.desktopNav}>
            <Link 
              to="/" 
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
              style={styles.dropdownWrapper}
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to="/about" 
                style={{
                  ...styles.navLink,
                  color: isActive('/about') ? '#f97316' : '#0f172a',
                  fontWeight: isActive('/about') ? 700 : 600,
                }}
              >
                <span>ABOUT US</span>
                <ChevronDown size={13} style={{ marginLeft: '2px' }} />
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

            <Link 
              to="/catalog" 
              style={{
                ...styles.navLink,
                color: isActive('/catalog') ? '#f97316' : '#0f172a',
                fontWeight: isActive('/catalog') ? 700 : 600,
              }}
            >
              OLYMPIADS <ChevronDown size={13} />
            </Link>

            <Link 
              to="/awards" 
              style={{
                ...styles.navLink,
                color: isActive('/awards') ? '#f97316' : '#0f172a',
                fontWeight: isActive('/awards') ? 700 : 600,
              }}
            >
              TECHNIK PRIDE AWARD <ChevronDown size={13} />
            </Link>

            <Link 
              to="/catalog" 
              style={styles.navLink}
            >
              FOR SCHOOLS <ChevronDown size={13} />
            </Link>

            <Link 
              to="/skill-compass" 
              style={styles.navLink}
            >
              FOR STUDENTS <ChevronDown size={13} />
            </Link>

            <Link 
              to="/about" 
              style={styles.navLink}
            >
              MEDIA <ChevronDown size={13} />
            </Link>

            <Link 
              to="/about" 
              style={styles.navLink}
            >
              CONTACT US
            </Link>

            <Link 
              to="/register" 
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
            <div style={styles.mobileLinks}>
              <Link to="/" style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>HOME</Link>
              <Link to="/about" style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>ABOUT US</Link>
              <Link to="/catalog" style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>OLYMPIADS</Link>
              <Link to="/awards" style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>TECHNIK PRIDE AWARD</Link>
              <Link to="/catalog" style={styles.mobileNavLink} onClick={() => setIsOpen(false)}>FOR SCHOOLS</Link>
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
    maxWidth: '100%',
    padding: '0 2.5rem',
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
    height: '74px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #e2e8f0',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '100%',
    padding: '0 2.5rem',
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
    fontSize: '1.25rem',
    fontWeight: 900,
    fontFamily: 'var(--font-heading)',
    color: '#0b1d3a',
    letterSpacing: '-0.02em',
    lineHeight: '1',
  },
  brandSubtitle: {
    fontSize: '0.62rem',
    fontWeight: 700,
    color: '#64748b',
    letterSpacing: '0.18em',
    marginTop: '0.15rem',
  },
  desktopNav: {
    display: 'none',
    alignItems: 'center',
    gap: '0.75rem',
    height: '100%',
  },
  dropdownWrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  navLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.2rem',
    fontSize: '0.8rem',
    fontFamily: 'var(--font-heading)',
    fontWeight: 600,
    color: '#0f172a',
    textDecoration: 'none',
    padding: '0.5rem 0.35rem',
    whiteSpace: 'nowrap',
    letterSpacing: '0.02em',
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
    fontSize: '0.8rem',
    fontFamily: 'var(--font-heading)',
    padding: '0.6rem 1.25rem',
    borderRadius: '6px',
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
    whiteSpace: 'nowrap',
    marginLeft: '0.35rem',
    letterSpacing: '0.03em',
  },
  mobileMenuButton: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  mobileDrawer: {
    position: 'absolute',
    top: '108px',
    left: 0,
    right: 0,
    background: '#ffffff',
    borderBottom: '2px solid #0f172a',
    padding: '1rem',
    zIndex: 999,
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
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

// Add responsive CSS styling
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @media (min-width: 992px) {
    #mobile-nav-toggle {
      display: none !important;
    }
    .desktop-nav-menu {
      display: flex !important;
    }
  }
  @media (max-width: 991px) {
    .desktop-nav-menu {
      display: none !important;
    }
    #mobile-nav-toggle {
      display: flex !important;
    }
  }
`;
document.head.appendChild(styleSheet);
