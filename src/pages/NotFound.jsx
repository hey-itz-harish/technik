import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, GraduationCap } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.glow} />
      <div style={styles.card}>
        <div style={styles.badge}>404 ERROR</div>
        <h1 style={styles.title}>Page Not Found</h1>
        <p style={styles.subtitle}>
          The page you are looking for might have been moved, removed, or is temporarily unavailable.
        </p>

        <div style={styles.quickLinks}>
          <Link to="/" style={styles.primaryBtn}>
            <Home size={18} />
            <span>Back to Home</span>
          </Link>
          <Link to="/for-schools" style={styles.secondaryBtn}>
            <GraduationCap size={18} />
            <span>For Schools</span>
          </Link>
          <Link to="/catalog" style={styles.secondaryBtn}>
            <Compass size={18} />
            <span>Explore Programs</span>
          </Link>
        </div>

        <div style={styles.helpText}>
          Need assistance? <Link to="/contact" style={styles.contactLink}>Contact Support</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 1.5rem',
    position: 'relative',
    background: '#f8fafc',
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    width: '450px',
    height: '450px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    pointerEvents: 'none',
  },
  card: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '560px',
    width: '100%',
    textAlign: 'center',
    background: '#ffffff',
    borderRadius: '24px',
    padding: '3.5rem 2.5rem',
    boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.08)',
    border: '1px solid rgba(15, 23, 42, 0.08)',
  },
  badge: {
    display: 'inline-block',
    padding: '0.4rem 1rem',
    borderRadius: '50px',
    background: 'rgba(239, 68, 68, 0.1)',
    color: '#dc2626',
    fontWeight: 800,
    fontSize: '0.85rem',
    letterSpacing: '0.08em',
    marginBottom: '1.25rem',
    fontFamily: 'var(--font-heading)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 900,
    color: '#0f172a',
    marginBottom: '0.75rem',
    fontFamily: 'var(--font-heading)',
    lineHeight: '1.2',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: '1.6',
    marginBottom: '2.25rem',
  },
  quickLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
    marginBottom: '2rem',
  },
  primaryBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.9rem 1.5rem',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    color: '#ffffff',
    fontWeight: 700,
    fontSize: '0.95rem',
    textDecoration: 'none',
    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.2)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  secondaryBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.85rem 1.5rem',
    borderRadius: '12px',
    background: '#f1f5f9',
    color: '#334155',
    fontWeight: 600,
    fontSize: '0.92rem',
    textDecoration: 'none',
    transition: 'background 0.2s',
  },
  helpText: {
    fontSize: '0.88rem',
    color: '#94a3b8',
  },
  contactLink: {
    color: '#2563eb',
    fontWeight: 600,
    textDecoration: 'underline',
  }
};
