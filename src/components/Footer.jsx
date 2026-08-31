import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.brandSection}>
          <div style={styles.logo}>
            <div style={styles.logoHex}>
              <Trophy size={14} color="#06b6d4" />
            </div>
            <span style={styles.logoText}>
              TECHNIK <span style={{ color: 'var(--secondary)' }}>OLYMPIAD</span>
            </span>
          </div>
          <p style={styles.tagline}>Empowering the next generation of innovators, creators, and computational thinkers.</p>
        </div>

        <div style={styles.quickLinks}>
          <Link to="/" style={styles.footerLink}>Home</Link>
          <Link to="/about" style={styles.footerLink}>About Us</Link>
          <Link to="/catalog" style={styles.footerLink}>Olympiads</Link>
          <Link to="/skill-compass" style={styles.footerLink}>Skill Compass</Link>
          <Link to="/register" style={styles.footerLink}>Register</Link>
          <Link to="/awards" style={styles.footerLink}>Awards</Link>
        </div>
        
        <div style={styles.linksSection}>
          <div style={styles.socials}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink} aria-label="Github">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink} aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink} aria-label="Linkedin">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
          <p style={styles.copyright}>&copy; {new Date().getFullYear()} Technik Olympiad Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: 'rgba(6, 4, 10, 0.9)',
    borderTop: '1px solid var(--border-subtle)',
    padding: '3rem 0 2rem 0',
    marginTop: 'auto',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign: 'left',
      alignItems: 'flex-start',
    }
  },
  brandSection: {
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontWeight: 800,
    fontSize: '1.1rem',
    fontFamily: 'var(--font-heading)',
  },
  logoHex: {
    width: '24px',
    height: '24px',
    background: 'rgba(6, 182, 212, 0.1)',
    border: '1px solid var(--accent)',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: 'var(--text-primary)',
  },
  tagline: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
  },
  quickLinks: {
    display: 'flex',
    gap: '1.25rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  footerLink: {
    color: 'var(--text-secondary)',
    fontSize: '0.85rem',
    transition: 'color var(--transition-fast)',
    textDecoration: 'none',
  },
  linksSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  socials: {
    display: 'flex',
    gap: '1rem',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-secondary)',
    transition: 'all var(--transition-fast)',
  },
  copyright: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
  }
};
