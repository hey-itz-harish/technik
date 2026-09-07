import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import { Cpu, Sparkles, Shield, Trophy } from 'lucide-react';

export default function CreativeLoader({ text = 'Initializing Technik Portal...' }) {
  const [progress, setProgress] = useState(15);
  const [statusIndex, setStatusIndex] = useState(0);

  const statusMessages = [
    'Initializing Technik Cyber Core...',
    'Loading Olympiad & School Roster...',
    'Syncing Student Nominations & Credentials...',
    'Optimizing High-Tech Experience...'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 95 ? 95 : prev + Math.floor(Math.random() * 15) + 8));
    }, 120);

    const statusTimer = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusMessages.length);
    }, 400);

    return () => {
      clearInterval(timer);
      clearInterval(statusTimer);
    };
  }, []);

  return (
    <div style={styles.overlay} className="creative-loader-backdrop">
      <div style={styles.loaderBox}>
        {/* Glowing Central Tech Ring */}
        <div style={styles.ringContainer}>
          <div style={styles.outerSpinRing} className="outer-spin-ring"></div>
          <div style={styles.innerPulseRing} className="inner-pulse-ring"></div>
          <div style={styles.logoWrapper}>
            <img src={logoImg} alt="Technik Logo" style={styles.logoImg} />
          </div>
        </div>

        {/* Brand Header */}
        <div style={styles.brandTitle}>
          TECHNIK <span style={{ color: '#f97316' }}>OLYMPIAD</span>
        </div>
        <div style={styles.brandSubtitle}>PRIVATE LIMITED</div>

        {/* Dynamic Status Text */}
        <div style={styles.statusText} className="status-text-pulse">
          <Sparkles size={14} color="#38bdf8" style={{ marginRight: '6px' }} />
          <span>{statusMessages[statusIndex]}</span>
        </div>

        {/* Cyber Progress Bar */}
        <div style={styles.progressTrack}>
          <div style={{ ...styles.progressBar, width: `${progress}%` }} className="progress-bar-glow"></div>
        </div>
        <div style={styles.progressPercent}>{progress}% READY</div>

        {/* Footer Badges */}
        <div style={styles.badgesRow}>
          <span style={styles.badge}><Shield size={12} color="#f59e0b" /> SECURE SSL</span>
          <span style={styles.badge}><Cpu size={12} color="#38bdf8" /> AI ENGINE</span>
          <span style={styles.badge}><Trophy size={12} color="#10b981" /> PRIDE AWARD</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at center, #0a1b3a 0%, #041026 100%)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
  },
  loaderBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '440px',
    width: '100%',
    background: 'rgba(15, 23, 42, 0.85)',
    border: '1px solid rgba(56, 189, 248, 0.2)',
    backdropFilter: 'blur(16px)',
    borderRadius: '24px',
    padding: '2.5rem 2rem',
    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 189, 248, 0.15)',
  },
  ringContainer: {
    position: 'relative',
    width: '90px',
    height: '90px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.25rem',
  },
  outerSpinRing: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    border: '3px solid transparent',
    borderTopColor: '#f97316',
    borderRightColor: '#38bdf8',
  },
  innerPulseRing: {
    position: 'absolute',
    width: '78%',
    height: '78%',
    borderRadius: '50%',
    border: '2px dashed rgba(245, 158, 11, 0.5)',
  },
  logoWrapper: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: '#041026',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 20px rgba(249, 115, 22, 0.4)',
    zIndex: 2,
  },
  logoImg: {
    width: '36px',
    height: '36px',
    objectFit: 'contain',
  },
  brandTitle: {
    fontSize: '1.25rem',
    fontWeight: 900,
    color: '#ffffff',
    letterSpacing: '-0.02em',
    fontFamily: 'var(--font-heading, sans-serif)',
  },
  brandSubtitle: {
    fontSize: '0.62rem',
    fontWeight: 800,
    color: '#94a3b8',
    letterSpacing: '0.22em',
    marginTop: '0.15rem',
    marginBottom: '1.25rem',
  },
  statusText: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '0.82rem',
    fontWeight: 600,
    color: '#38bdf8',
    marginBottom: '1rem',
    height: '24px',
  },
  progressTrack: {
    width: '100%',
    height: '6px',
    background: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom: '0.5rem',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  progressBar: {
    height: '100%',
    background: 'linear-gradient(90deg, #f97316 0%, #fbbf24 50%, #38bdf8 100%)',
    borderRadius: '10px',
    transition: 'width 0.15s ease-out',
  },
  progressPercent: {
    fontSize: '0.7rem',
    fontWeight: 800,
    color: '#94a3b8',
    letterSpacing: '0.12em',
    marginBottom: '1.25rem',
  },
  badgesRow: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
    fontSize: '0.65rem',
    fontWeight: 700,
    color: '#cbd5e1',
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '0.25rem 0.6rem',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
  }
};

// Add CSS keyframes dynamically
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerText = `
    @keyframes loaderOuterSpin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes loaderInnerPulse {
      0%, 100% { transform: scale(0.95); opacity: 0.6; }
      50% { transform: scale(1.08); opacity: 1; }
    }
    @keyframes loaderStatusFade {
      0%, 100% { opacity: 0.8; }
      50% { opacity: 1; transform: translateY(-1px); }
    }
    .outer-spin-ring {
      animation: loaderOuterSpin 1.2s linear infinite;
    }
    .inner-pulse-ring {
      animation: loaderInnerPulse 2s ease-in-out infinite;
    }
    .status-text-pulse {
      animation: loaderStatusFade 1.5s ease-in-out infinite;
    }
  `;
  document.head.appendChild(styleEl);
}
