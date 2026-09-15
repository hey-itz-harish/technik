import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import handshakeImg from '../assets/handshake_card_img.jpg';
import {
  Lightbulb,
  TrendingUp,
  GraduationCap,
  Sparkles,
  Medal,
  Building2,
  CheckCircle2,
  ArrowRight,
  Users,
  BookOpen,
  Handshake,
  Users2,
  ShieldCheck
} from 'lucide-react';

export default function ForSchools() {
  const navigate = useNavigate();

  const handlePartnerAction = () => {
    navigate('/register?level=school');
  };

  return (
    <div style={styles.page}>

      {/* =========================================================== */}
      {/* 1. HERO SECTION                                              */}
      {/* =========================================================== */}
      <section style={styles.heroSection}>
        <div style={styles.heroBgWrapper}>
          <img src={handshakeImg} alt="Teacher and students shaking hands in partnership" style={styles.heroBgImg} />
          <div style={styles.heroBgOverlay} />
        </div>

        <div style={styles.heroContainer} className="for-schools-hero-container">

          <div style={styles.breadcrumbRow}>
            <Link to="/" style={styles.breadcrumbLink}>Home</Link>
            <span style={styles.breadcrumbSep}>&gt;</span>
            <span style={styles.breadcrumbLink}>For Schools</span>
            <span style={styles.breadcrumbSep}>&gt;</span>
            <span style={styles.breadcrumbCurrent}>Partner With Us</span>
          </div>

          <div style={styles.heroContentGrid} className="for-schools-hero-grid">

            {/* Left: Heading + Copy + CTA */}
            <div style={styles.heroLeftCol} className="for-schools-hero-fade-in">
              <div style={styles.heroBadge}>
                <ShieldCheck size={14} color="#fbbf24" />
                <span>OFFICIAL SCHOOL PARTNERSHIP PROGRAM</span>
              </div>

              <h1 style={styles.heroTitle}>
                Partner With<br />
                <span style={styles.heroTitleGold}>
                  Technik Olympiad
                  <svg width="100%" height="12" viewBox="0 0 300 12" style={styles.heroTitleSwash} preserveAspectRatio="none">
                    <path d="M2 8 Q 150 -4 298 7" stroke="#fbbf24" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.85" />
                  </svg>
                </span>
              </h1>
              <h2 style={styles.heroSubtitle}>
                Empower Your Students. Create Opportunities. Celebrate Achievement.
              </h2>
              <p style={styles.heroDesc}>
                Schools can partner with Technik Olympiad to provide students access to future-ready
                Olympiads and recognition opportunities. Together, let's build confident, creative
                and future-ready learners.
              </p>
              <button type="button" onClick={handlePartnerAction} style={styles.heroCta} className="for-schools-hero-cta-btn">
                BECOME A PARTNER SCHOOL <ArrowRight size={18} />
              </button>
            </div>

            {/* Right: Floating Feature Pills + Script Tagline (over the image) */}
            <div style={styles.heroRightCol} className="for-schools-hero-right">
              <div style={styles.heroFeatureRow} className="for-schools-hero-fade-in" data-delay="1">
                <div style={styles.featureCircleIcon}><Lightbulb size={16} color="#fbbf24" /></div>
                <span style={styles.featureText}>Recognise Talent</span>
              </div>
              <div style={styles.heroFeatureRow} className="for-schools-hero-fade-in" data-delay="2">
                <div style={styles.featureCircleIcon}><TrendingUp size={16} color="#fbbf24" /></div>
                <span style={styles.featureText}>Build Future Skills</span>
              </div>
              <div style={styles.heroFeatureRow} className="for-schools-hero-fade-in" data-delay="3">
                <div style={styles.featureCircleIcon}><GraduationCap size={16} color="#fbbf24" /></div>
                <span style={styles.featureText}>Create Opportunities</span>
              </div>
              <div style={styles.heroFeatureRow} className="for-schools-hero-fade-in" data-delay="4">
                <div style={styles.featureCircleIcon}><Sparkles size={16} color="#fbbf24" /></div>
                <span style={styles.featureText}>Inspire Lifelong Learning</span>
              </div>

              <div style={styles.scriptTaglineBox} className="for-schools-hero-fade-in" data-delay="5">
                <span style={styles.scriptTaglineText}>Together for a</span>
                <span style={styles.scriptTaglineText}>Brighter Tomorrow</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* 2. PARTNERSHIP OPPORTUNITIES                                 */}
      {/* =========================================================== */}
      <section style={styles.opportunitiesSection}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeaderCenter}>
            <span style={styles.eyebrow}>PARTNERSHIP OPPORTUNITIES</span>
            <h2 style={styles.sectionTitle}>
              How Your School Can <span style={{ color: '#2563eb' }}>Partner With Us</span>
            </h2>
          </div>

          <div style={styles.opportunityGrid} className="for-schools-opportunity-grid">

            {/* Card 1: Partner School */}
            <div style={{ ...styles.oppCard, background: '#eaf3ff', border: '1px solid #d3e6fd' }}>
              <div style={{ ...styles.oppIconCircle, background: '#dbeafe' }}>
                <GraduationCap size={26} color="#1d4ed8" />
              </div>
              <h3 style={styles.oppTitle}>Technik Olympiad<br />Partner School</h3>
              <ul style={styles.oppList}>
                <li><CheckCircle2 size={15} color="#16a34a" /> Register students for Technik Olympiads</li>
                <li><CheckCircle2 size={15} color="#16a34a" /> Coordinate participation at school level</li>
                <li><CheckCircle2 size={15} color="#16a34a" /> Access results and certificates</li>
                <li><CheckCircle2 size={15} color="#16a34a" /> Receive academic support and resources</li>
              </ul>
              <button type="button" onClick={handlePartnerAction} style={{ ...styles.oppArrowBtn, background: '#1d4ed8' }}>
                <ArrowRight size={18} color="#ffffff" />
              </button>
            </div>

            {/* Card 2: Technik Pride Award */}
            <div style={{ ...styles.oppCard, background: '#fff7ec', border: '1px solid #fde3c2' }}>
              <div style={{ ...styles.oppIconCircle, background: '#fef0d5' }}>
                <Medal size={26} color="#d97706" />
              </div>
              <h3 style={styles.oppTitle}>Technik Pride Award</h3>
              <ul style={styles.oppList}>
                <li><CheckCircle2 size={15} color="#16a34a" /> Nominate deserving students for recognition</li>
                <li><CheckCircle2 size={15} color="#16a34a" /> Celebrate student achievements at district/state level</li>
                <li><CheckCircle2 size={15} color="#16a34a" /> Students featured in Pride Book</li>
                <li><CheckCircle2 size={15} color="#16a34a" /> Special honours from eminent guests</li>
              </ul>
              <button type="button" onClick={handlePartnerAction} style={{ ...styles.oppArrowBtn, background: '#f59e0b' }}>
                <ArrowRight size={18} color="#ffffff" />
              </button>
            </div>

            {/* Card 3: Hosting Partner */}
            <div style={{ ...styles.oppCard, background: '#eefdf5', border: '1px solid #c9f2dc' }}>
              <div style={{ ...styles.oppIconCircle, background: '#d3f8e4' }}>
                <Building2 size={26} color="#059669" />
              </div>
              <h3 style={styles.oppTitle}>Hosting Partner</h3>
              <ul style={styles.oppList}>
                <li><CheckCircle2 size={15} color="#16a34a" /> School Level Partner</li>
                <li><CheckCircle2 size={15} color="#16a34a" /> District Level Partner</li>
                <li><CheckCircle2 size={15} color="#16a34a" /> Pride Award Partner</li>
                <li><CheckCircle2 size={15} color="#16a34a" /> Event Partner</li>
                <li><CheckCircle2 size={15} color="#16a34a" /> Collaborate with us to conduct Olympiads and award events</li>
              </ul>
              <button type="button" onClick={handlePartnerAction} style={{ ...styles.oppArrowBtn, background: '#059669' }}>
                <ArrowRight size={18} color="#ffffff" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* 3. WHY PARTNER WITH US                                       */}
      {/* =========================================================== */}
      <section style={styles.whySection}>
        <div style={styles.sectionContainer}>
          <div style={styles.whyHeaderRow} className="for-schools-why-header">
            <h2 style={styles.whyTitle}>
              <span style={styles.whyTitleBar} /> Why Partner With Technik Olympiad?
            </h2>
            <div style={styles.scriptTagline} className="for-schools-script-tagline">
              <span>Stronger</span>
              <span>Schools</span>
              <span style={{ position: 'relative' }}>
                Brighter Futures
                <svg width="100%" height="10" viewBox="0 0 160 10" style={styles.scriptUnderline} preserveAspectRatio="none">
                  <path d="M2 7 Q 80 -3 158 6" stroke="#f97316" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          </div>

          <div style={styles.whyIconGrid} className="for-schools-why-grid">
            {[
              { icon: Users, label: 'Nationally Recognised Platform' },
              { icon: TrendingUp, label: 'Enhances School Reputation' },
              { icon: Lightbulb, label: 'Encourages Innovation & Creativity' },
              { icon: Medal, label: 'Provides Recognition for Students' },
              { icon: BookOpen, label: 'Access to Learning Resources' },
              { icon: Handshake, label: 'Opportunities for Collaboration' },
              { icon: Users2, label: 'Contributes to a Brighter Generation' },
            ].map((item, idx) => (
              <div key={idx} style={styles.whyIconItem}>
                <div style={styles.whyIconCircle}>
                  <item.icon size={26} color="#1d4ed8" />
                </div>
                <span style={styles.whyIconLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#f8fafc',
    color: '#0f172a',
  },

  sectionContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
    boxSizing: 'border-box',
  },

  /* =========================================================== */
  /* 1. HERO                                                      */
  /* =========================================================== */
  heroSection: {
    position: 'relative',
    minHeight: '520px',
    background: '#041026',
    color: '#ffffff',
    overflow: 'hidden',
    padding: '1.8rem 0 3rem 0',
    display: 'flex',
    alignItems: 'center',
  },
  heroBgWrapper: {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
  },
  heroBgImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: '50% 42%',
  },
  heroBgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, rgba(4, 16, 38, 0.97) 0%, rgba(4, 16, 38, 0.88) 32%, rgba(4, 16, 38, 0.45) 58%, rgba(4, 16, 38, 0.72) 100%)',
  },
  heroContainer: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
    boxSizing: 'border-box',
  },
  breadcrumbRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.8rem',
    marginBottom: '1.75rem',
  },
  breadcrumbLink: {
    color: '#94a3b8',
    textDecoration: 'none',
    fontWeight: 500,
  },
  breadcrumbSep: {
    color: '#64748b',
    fontSize: '0.75rem',
  },
  breadcrumbCurrent: {
    color: '#ffffff',
    fontWeight: 700,
  },
  heroContentGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
  heroLeftCol: {
    maxWidth: '540px',
  },
  heroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
    background: 'rgba(251, 191, 36, 0.1)',
    border: '1px solid rgba(251, 191, 36, 0.4)',
    backdropFilter: 'blur(8px)',
    color: '#fbbf24',
    fontSize: '0.72rem',
    fontWeight: 800,
    letterSpacing: '0.08em',
    padding: '0.4rem 0.9rem',
    borderRadius: '30px',
    marginBottom: '1.1rem',
  },
  heroTitle: {
    fontSize: '2.85rem',
    fontWeight: 900,
    lineHeight: '1.12',
    color: '#ffffff',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.9rem',
    textShadow: '0 4px 20px rgba(0,0,0,0.55)',
  },
  heroTitleGold: {
    position: 'relative',
    display: 'inline-block',
    background: 'linear-gradient(135deg, #fde68a 0%, #fbbf24 55%, #f59e0b 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    filter: 'drop-shadow(0 4px 16px rgba(245, 158, 11, 0.35))',
  },
  heroTitleSwash: {
    display: 'block',
    marginTop: '-2px',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#f1f5f9',
    marginBottom: '1rem',
    lineHeight: '1.4',
    textShadow: '0 2px 10px rgba(0,0,0,0.5)',
  },
  heroDesc: {
    fontSize: '0.95rem',
    color: '#cbd5e1',
    lineHeight: '1.65',
    marginBottom: '1.75rem',
    textShadow: '0 2px 8px rgba(0,0,0,0.5)',
  },
  heroCta: {
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    color: '#0f172a',
    border: 'none',
    padding: '0.9rem 1.75rem',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '0.9rem',
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6rem',
    boxShadow: '0 6px 20px rgba(245, 158, 11, 0.35)',
    letterSpacing: '0.02em',
  },
  heroRightCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.5rem',
  },
  heroFeatureRow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.4rem 0.9rem',
    background: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    borderRadius: '30px',
    backdropFilter: 'blur(10px)',
  },
  featureCircleIcon: {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    background: 'rgba(251, 191, 36, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  featureText: {
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#ffffff',
    fontFamily: 'var(--font-heading)',
    whiteSpace: 'nowrap',
  },
  scriptTaglineBox: {
    marginTop: '0.6rem',
    textAlign: 'right',
  },
  scriptTaglineText: {
    display: 'block',
    fontSize: '1.2rem',
    fontStyle: 'italic',
    fontWeight: 700,
    color: '#fbbf24',
    fontFamily: '"Georgia", cursive, serif',
    textShadow: '0 2px 8px rgba(0,0,0,0.8)',
    lineHeight: '1.3',
  },

  /* =========================================================== */
  /* 2. PARTNERSHIP OPPORTUNITIES                                 */
  /* =========================================================== */
  opportunitiesSection: {
    padding: '3.5rem 0',
    background: '#ffffff',
  },
  sectionHeaderCenter: {
    textAlign: 'center',
    marginBottom: '2.5rem',
  },
  eyebrow: {
    display: 'inline-block',
    fontSize: '0.78rem',
    fontWeight: 800,
    color: '#2563eb',
    letterSpacing: '0.08em',
    marginBottom: '0.5rem',
  },
  sectionTitle: {
    fontSize: '1.9rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
  },
  opportunityGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
  },
  oppCard: {
    borderRadius: '16px',
    padding: '2rem 1.75rem',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  oppIconCircle: {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.25rem',
  },
  oppTitle: {
    fontSize: '1.2rem',
    fontWeight: 800,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    marginBottom: '1.1rem',
    lineHeight: '1.35',
  },
  oppList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 2.5rem 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.7rem',
    flex: 1,
  },
  oppArrowBtn: {
    position: 'absolute',
    bottom: '1.75rem',
    left: '1.75rem',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  },

  /* =========================================================== */
  /* 3. WHY PARTNER WITH US                                       */
  /* =========================================================== */
  whySection: {
    padding: '3.5rem 0 5rem 0',
    background: '#f8fafc',
  },
  whyHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '2.5rem',
  },
  whyTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1.5rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    margin: 0,
  },
  whyTitleBar: {
    width: '5px',
    height: '28px',
    background: '#fbbf24',
    borderRadius: '3px',
    display: 'inline-block',
  },
  scriptTagline: {
    fontFamily: 'Georgia, serif',
    fontStyle: 'italic',
    fontWeight: 700,
    fontSize: '1.15rem',
    color: '#1e3a8a',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    textAlign: 'right',
    lineHeight: '1.3',
  },
  scriptUnderline: {
    display: 'block',
    marginTop: '-2px',
  },
  whyIconGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '1rem',
    alignItems: 'start',
  },
  whyIconItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '0.65rem',
  },
  whyIconCircle: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: '#eaf3ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  whyIconLabel: {
    fontSize: '0.8rem',
    fontWeight: 700,
    color: '#1e293b',
    lineHeight: '1.35',
    maxWidth: '130px',
  }
};

// Responsive styles
if (typeof document !== 'undefined') {
  let styleSheet = document.getElementById('for-schools-responsive-styles');
  if (!styleSheet) {
    styleSheet = document.createElement('style');
    styleSheet.id = 'for-schools-responsive-styles';
    document.head.appendChild(styleSheet);
  }
  styleSheet.innerText = `
    @keyframes forSchoolsHeroFadeIn {
      from { opacity: 0; transform: translateY(14px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .for-schools-hero-fade-in {
      opacity: 0;
      animation: forSchoolsHeroFadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .for-schools-hero-fade-in[data-delay="1"] { animation-delay: 0.15s; }
    .for-schools-hero-fade-in[data-delay="2"] { animation-delay: 0.28s; }
    .for-schools-hero-fade-in[data-delay="3"] { animation-delay: 0.41s; }
    .for-schools-hero-fade-in[data-delay="4"] { animation-delay: 0.54s; }
    .for-schools-hero-fade-in[data-delay="5"] { animation-delay: 0.68s; }

    .for-schools-hero-cta-btn {
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }
    .for-schools-hero-cta-btn:hover {
      transform: translateY(-2px) scale(1.03);
      box-shadow: 0 10px 28px rgba(245, 158, 11, 0.55);
    }

    @media (max-width: 991px) {
      .for-schools-hero-grid {
        flex-direction: column !important;
        align-items: flex-start !important;
      }
      .for-schools-hero-right {
        align-items: flex-start !important;
        width: 100% !important;
      }
      .for-schools-hero-right > div:last-child {
        text-align: left !important;
      }
      .for-schools-opportunity-grid {
        grid-template-columns: 1fr !important;
      }
      .for-schools-why-grid {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
    @media (max-width: 640px) {
      .for-schools-hero-right {
        flex-direction: row !important;
        flex-wrap: wrap !important;
      }
      .for-schools-why-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 1.5rem 0.75rem !important;
      }
      .for-schools-why-header {
        flex-direction: column !important;
        align-items: flex-start !important;
      }
      .for-schools-script-tagline {
        align-items: flex-start !important;
        text-align: left !important;
      }
    }
  `;
}
