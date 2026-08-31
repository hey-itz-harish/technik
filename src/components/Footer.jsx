import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Trophy
} from 'lucide-react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container">
        
        {/* Top Brand Header */}
        <div style={styles.brandHeader}>
          <Link to="/" style={styles.logo}>
            <div style={styles.logoGearBox}>
              <svg viewBox="0 0 100 100" width="34" height="34">
                <path d="M50,15 A35,35 0 1,0 50,85 A35,35 0 1,0 50,15 Z" fill="none" stroke="#38bdf8" strokeWidth="6" strokeDasharray="6 4" />
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

          <div style={styles.socialsGroup}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialBtn} aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialBtn} aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={styles.socialBtn} aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialBtn} aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        <div style={styles.divider}></div>

        {/* 5 Column Navigation & Info */}
        <div style={styles.columnsGrid} className="footer-columns-grid">
          {/* Col 1 */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>QUICK LINKS</h4>
            <div style={styles.linkList}>
              <Link to="/about" style={styles.linkItem}>About Us</Link>
              <Link to="/catalog" style={styles.linkItem}>Olympiads</Link>
              <Link to="/awards" style={styles.linkItem}>Technik Pride Award</Link>
              <Link to="/dashboard" style={styles.linkItem}>Results</Link>
              <Link to="/dashboard" style={styles.linkItem}>Certificates</Link>
            </div>
          </div>

          {/* Col 2 */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>FOR SCHOOLS</h4>
            <div style={styles.linkList}>
              <Link to="/schools#register-school" style={styles.linkItem}>Register School</Link>
              <Link to="/dashboard" style={styles.linkItem}>School Login</Link>
              <Link to="/schools" style={styles.linkItem}>Hosting Partner</Link>
              <Link to="/schools" style={styles.linkItem}>School Benefits</Link>
              <Link to="/dashboard" style={styles.linkItem}>Coordinator Login</Link>
            </div>
          </div>

          {/* Col 3 */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>FOR STUDENTS</h4>
            <div style={styles.linkList}>
              <Link to="/register" style={styles.linkItem}>Olympiad Registration</Link>
              <Link to="/catalog" style={styles.linkItem}>Exam Schedule</Link>
              <Link to="/dashboard" style={styles.linkItem}>Results</Link>
              <Link to="/dashboard" style={styles.linkItem}>Hall Ticket</Link>
              <Link to="/dashboard" style={styles.linkItem}>Student Login</Link>
            </div>
          </div>

          {/* Col 4 */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>SUPPORT</h4>
            <div style={styles.linkList}>
              <Link to="/about" style={styles.linkItem}>FAQs</Link>
              <Link to="/about" style={styles.linkItem}>Contact Us</Link>
              <Link to="/about" style={styles.linkItem}>Privacy Policy</Link>
              <Link to="/about" style={styles.linkItem}>Terms & Conditions</Link>
              <Link to="/about" style={styles.linkItem}>Refund Policy</Link>
            </div>
          </div>

          {/* Col 5 */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>CONTACT US</h4>
            <div style={styles.contactList}>
              <div style={styles.contactItem}>
                <Phone size={14} color="#38bdf8" />
                <span>+91 98765 43210</span>
              </div>
              <div style={styles.contactItem}>
                <Mail size={14} color="#38bdf8" />
                <span>info@technikolympiad.com</span>
              </div>
              <div style={styles.contactItem}>
                <MapPin size={16} color="#f97316" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Technik Olympiad Pvt. Ltd. Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.divider}></div>

        {/* Bottom Copyright */}
        <div style={styles.bottomBar}>
          <p style={styles.copyrightText}>
            &copy; {new Date().getFullYear()} Technik Olympiad Private Limited. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#030c1e',
    color: '#cbd5e1',
    padding: '3rem 0 1.5rem 0',
    borderTop: '3px solid #f97316',
    marginTop: 'auto',
  },
  brandHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
    marginBottom: '1.5rem',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    textDecoration: 'none',
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
    fontSize: '1.2rem',
    fontWeight: 900,
    fontFamily: 'var(--font-heading)',
    color: '#ffffff',
    letterSpacing: '-0.02em',
    lineHeight: '1',
  },
  brandSubtitle: {
    fontSize: '0.6rem',
    fontWeight: 700,
    color: '#94a3b8',
    letterSpacing: '0.18em',
    marginTop: '0.15rem',
  },
  socialsGroup: {
    display: 'flex',
    gap: '0.65rem',
  },
  socialBtn: {
    width: '32px',
    height: '32px',
    borderRadius: '6px',
    background: 'rgba(255, 255, 255, 0.06)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  },
  divider: {
    height: '1px',
    background: 'rgba(255, 255, 255, 0.08)',
    margin: '1.5rem 0',
  },
  columnsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '1.5rem',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  colTitle: {
    fontSize: '0.82rem',
    fontWeight: 800,
    color: '#ffffff',
    letterSpacing: '0.08em',
    fontFamily: 'var(--font-heading)',
  },
  linkList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.55rem',
  },
  linkItem: {
    fontSize: '0.82rem',
    color: '#94a3b8',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
    fontSize: '0.82rem',
    color: '#cbd5e1',
  },
  bottomBar: {
    textAlign: 'center',
  },
  copyrightText: {
    fontSize: '0.78rem',
    color: '#64748b',
  }
};

// Add responsive CSS styling
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @media (max-width: 991px) {
    .footer-columns-grid {
      grid-template-columns: repeat(3, 1fr) !important;
    }
  }
  @media (max-width: 600px) {
    .footer-columns-grid {
      grid-template-columns: 1fr !important;
    }
  }
  footer a:hover {
    color: #38bdf8 !important;
  }
`;
document.head.appendChild(styleSheet);
