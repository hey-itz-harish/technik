import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trophy, Compass, BookOpen, UserPlus, LayoutDashboard, Home, Info } from 'lucide-react';

export default function TopNav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Info },
    { name: 'Olympiads', path: '/catalog', icon: BookOpen },
    { name: 'Skill Compass', path: '/skill-compass', icon: Compass },
    { name: 'Register', path: '/register', icon: UserPlus },
    { name: 'Awards', path: '/awards', icon: Trophy },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.navContainer}>
        {/* Logo */}
        <Link to="/" style={styles.logo} onClick={() => setIsOpen(false)}>
          <div style={styles.logoHex}>
            <Trophy size={18} color="var(--accent)" />
          </div>
          <span style={styles.logoText}>
            Technik <span style={{ color: 'var(--secondary)' }}>Olympiad</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="desktop-nav-menu" style={styles.desktopNav}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  ...styles.navLink,
                  color: active ? 'var(--accent)' : 'var(--text-secondary)',
                  fontWeight: active ? 600 : 500,
                  borderBottom: active ? '2px solid var(--accent)' : '2px solid transparent',
                  background: active ? 'rgba(37, 99, 235, 0.04)' : 'transparent',
                }}
              >
                <Icon size={15} style={{ flexShrink: 0 }} />
                <span>{item.name}</span>
              </Link>
            );
          })}
          <Link 
            to="/register" 
            className="btn btn-orange btn-mini" 
            style={{ marginLeft: '0.5rem', whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            Register Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button style={styles.mobileMenuButton} onClick={() => setIsOpen(!isOpen)} id="mobile-nav-toggle">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div style={styles.mobileDrawer}>
          <div style={styles.mobileLinks}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  style={{
                    ...styles.mobileNavLink,
                    color: active ? 'var(--accent)' : 'var(--text-secondary)',
                    backgroundColor: active ? 'rgba(37, 99, 235, 0.05)' : 'transparent',
                    borderLeft: active ? '4px solid var(--accent)' : '4px solid transparent',
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <Link
              to="/register"
              className="btn btn-orange"
              style={{ margin: '1.5rem 1rem 0 1rem', textAlign: 'center' }}
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid var(--border-subtle)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    height: '70px',
    display: 'flex',
    alignItems: 'center',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontWeight: 800,
    fontSize: '1.25rem',
    fontFamily: 'var(--font-heading)',
    letterSpacing: '-0.03em',
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  logoHex: {
    width: '32px',
    height: '32px',
    background: 'rgba(37, 99, 235, 0.08)',
    border: '1px solid var(--accent)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 10px rgba(37, 99, 235, 0.1)',
    flexShrink: 0,
  },
  logoText: {
    color: 'var(--text-primary)',
    whiteSpace: 'nowrap',
  },
  desktopNav: {
    display: 'none',
    alignItems: 'center',
    gap: '0.2rem',
    height: '100%',
  },
  navLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.86rem',
    fontFamily: 'var(--font-heading)',
    fontWeight: 500,
    padding: '0.4rem 0.65rem',
    borderRadius: '6px 6px 0 0',
    transition: 'all var(--transition-fast)',
    height: '70px',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  mobileMenuButton: {
    background: 'transparent',
    border: 'none',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileDrawer: {
    position: 'absolute',
    top: '70px',
    left: 0,
    right: 0,
    background: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid var(--border-subtle)',
    paddingBottom: '2rem',
    zIndex: 99,
    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
  },
  mobileLinks: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 0',
  },
  mobileNavLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem 1.5rem',
    fontSize: '1rem',
    fontFamily: 'var(--font-heading)',
    fontWeight: 500,
    transition: 'all var(--transition-fast)',
    whiteSpace: 'nowrap',
  },
};

// Add responsive CSS styling
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @media (min-width: 900px) {
    #mobile-nav-toggle {
      display: none !important;
    }
    .desktop-nav-menu {
      display: flex !important;
    }
  }
  @media (max-width: 899px) {
    .desktop-nav-menu {
      display: none !important;
    }
    #mobile-nav-toggle {
      display: flex !important;
    }
  }
`;
document.head.appendChild(styleSheet);
