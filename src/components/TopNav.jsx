import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trophy, Compass, BookOpen, UserPlus, LayoutDashboard, Home, ShieldCheck } from 'lucide-react';

export default function TopNav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
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
        <div style={styles.desktopNav}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  ...styles.navLink,
                  color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                  borderBottom: active ? '2px solid var(--accent)' : '2px solid transparent',
                  background: active ? 'rgba(37, 99, 235, 0.04)' : 'transparent',
                }}
              >
                <Icon size={16} />
                {item.name}
              </Link>
            );
          })}
          <Link to="/register" className="btn btn-orange btn-mini" style={{ marginLeft: '1rem' }}>
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
                    color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                    backgroundColor: active ? 'rgba(37, 99, 235, 0.05)' : 'transparent',
                    borderLeft: active ? '4px solid var(--accent)' : '4px solid transparent',
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={20} />
                  {item.name}
                </Link>
              );
            })}
            <Link
              to="/register"
              className="btn btn-orange"
              style={{ margin: '1.5rem 1rem 0 1rem' }}
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
    background: 'rgba(255, 255, 255, 0.85)',
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
  },
  logoText: {
    color: 'var(--text-primary)',
  },
  desktopNav: {
    display: 'none',
    alignItems: 'center',
    gap: '0.5rem',
    height: '100%',
    '@media (min-width: 768px)': {
      display: 'flex',
    },
  },
  navLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-heading)',
    fontWeight: 500,
    padding: '0.5rem 0.85rem',
    borderRadius: '6px 6px 0 0',
    transition: 'all var(--transition-fast)',
    height: '70px',
  },
  mobileMenuButton: {
    background: 'transparent',
    border: 'none',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (min-width: 768px)': {
      display: 'none',
    },
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
  },
};

// Add raw CSS styling to override inline lack of media queries
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @media (min-width: 768px) {
    #mobile-nav-toggle {
      display: none !important;
    }
    nav div:nth-child(2) {
      display: flex !important;
    }
  }
  @media (max-width: 767px) {
    nav div:nth-child(2) {
      display: none !important;
    }
  }
`;
document.head.appendChild(styleSheet);
