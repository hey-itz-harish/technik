import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Globe, Mail, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        
        {/* Main Content Row */}
        <div style={styles.topRow}>
          {/* Brand Info */}
          <div style={styles.brandGroup}>
            <Link to="/" style={styles.logo}>
              <div style={styles.logoHex}>
                <Trophy size={15} color="var(--accent)" />
              </div>
              <span style={styles.logoText}>
                Technik <span style={{ color: 'var(--secondary)' }}>Olympiad</span>
              </span>
            </Link>
            <p style={styles.tagline}>
              Discover. Compete. Excel. Empowering next-generation student innovators.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div style={styles.navLinksGroup}>
            <Link to="/" style={styles.footerLink}>Home</Link>
            <Link to="/about" style={styles.footerLink}>About Us</Link>
            <Link to="/catalog" style={styles.footerLink}>Olympiads</Link>
            <Link to="/skill-compass" style={styles.footerLink}>Skill Compass</Link>
            <Link to="/register" style={styles.footerLink}>Register</Link>
            <Link to="/awards" style={styles.footerLink}>Awards</Link>
            <Link to="/dashboard" style={styles.footerLink}>Dashboard</Link>
          </div>
        </div>

        {/* Divider */}
        <div style={styles.divider}></div>

        {/* Bottom Row */}
        <div style={styles.bottomRow}>
          <p style={styles.copyright}>
            &copy; {new Date().getFullYear()} Technik Olympiad Private Limited. All rights reserved.
          </p>

          <div style={styles.socials}>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.socialBtn} 
              aria-label="Facebook"
              className="footer-social-btn"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.socialBtn} 
              aria-label="Twitter"
              className="footer-social-btn"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.socialBtn} 
              aria-label="Linkedin"
              className="footer-social-btn"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#ffffff',
    borderTop: '1px solid var(--border-subtle)',
    padding: '1.5rem 0 1.25rem 0',
    marginTop: 'auto',
    boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.02)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.25rem',
  },
  brandGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
  },
  logo: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontWeight: 800,
    fontSize: '1.15rem',
    fontFamily: 'var(--font-heading)',
    letterSpacing: '-0.02em',
  },
  logoHex: {
    width: '26px',
    height: '26px',
    background: 'rgba(37, 99, 235, 0.08)',
    border: '1px solid var(--accent)',
    borderRadius: '7px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: 'var(--text-primary)',
  },
  tagline: {
    fontSize: '0.82rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
    maxWidth: '450px',
  },
  navLinksGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    flexWrap: 'wrap',
  },
  footerLink: {
    fontSize: '0.86rem',
    fontWeight: 500,
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    transition: 'color var(--transition-fast)',
  },
  divider: {
    height: '1px',
    background: 'var(--border-subtle)',
    width: '100%',
  },
  bottomRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  copyright: {
    fontSize: '0.78rem',
    color: 'var(--text-muted)',
    fontWeight: 400,
  },
  socials: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
  },
  socialBtn: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    background: 'rgba(15, 23, 42, 0.04)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-secondary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all var(--transition-fast)',
  },
};

// Add responsive and hover styling overrides
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .footer-social-btn:hover {
    background: rgba(37, 99, 235, 0.1) !important;
    color: var(--accent) !important;
    border-color: var(--accent) !important;
    transform: translateY(-2px);
  }
  footer a:hover {
    color: var(--accent) !important;
  }
`;
document.head.appendChild(styleSheet);
