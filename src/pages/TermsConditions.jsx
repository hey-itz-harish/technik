import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  CheckCircle,
  AlertTriangle,
  Award,
  Calendar,
  Shield,
  Copyright,
  Clock,
  HelpCircle,
  ShieldCheck,
  Scale
} from 'lucide-react';

export default function TermsConditions() {
  const sections = [
    {
      id: 'registration',
      num: '1',
      title: 'Registration',
      icon: CheckCircle,
      iconColor: '#38bdf8',
      content: (
        <>
          <p style={styles.paragraph}>
            Participants must provide accurate and complete information during registration or nomination.
          </p>
          <div style={styles.warningBox}>
            <AlertTriangle size={18} color="#f97316" style={{ flexShrink: 0 }} />
            <span style={styles.warningText}>
              Incorrect, misleading, duplicate or fraudulent information may result in rejection or cancellation of registration, nomination, result, certificate or award.
            </span>
          </div>
        </>
      )
    },
    {
      id: 'eligibility',
      num: '2',
      title: 'Eligibility',
      icon: Shield,
      iconColor: '#22c55e',
      content: (
        <p style={styles.paragraph}>
          Eligibility varies according to the Olympiad, Pride Award or other program. Participants must meet the requirements announced for the relevant program.
        </p>
      )
    },
    {
      id: 'rules',
      num: '3',
      title: 'Olympiad Rules',
      icon: Scale,
      iconColor: '#eab308',
      content: (
        <>
          <p style={styles.paragraph}>
            Participants must comply with the instructions, examination rules, schedules and other guidelines communicated by Technik.
          </p>
          <p style={styles.paragraph}>
            Technik reserves the right to take appropriate action in cases involving malpractice, impersonation, misconduct or violation of competition rules.
          </p>
        </>
      )
    },
    {
      id: 'pride-award',
      num: '4',
      title: 'Pride Award',
      icon: Award,
      iconColor: '#f97316',
      content: (
        <>
          <p style={styles.paragraph}>
            A nomination does not automatically guarantee selection or recognition.
          </p>
          <p style={styles.paragraph}>
            Selection may involve presentation and evaluation processes established for the relevant award program.
          </p>
          <p style={styles.paragraph}>
            The decision made through the authorised evaluation and award process will be treated as final, subject to any formal review mechanism announced by Technik.
          </p>
        </>
      )
    },
    {
      id: 'results-certificates',
      num: '5',
      title: 'Results & Certificates',
      icon: FileText,
      iconColor: '#a855f7',
      content: (
        <>
          <p style={styles.paragraph}>
            Results will be published through the official channels determined by Technik.
          </p>
          <p style={styles.paragraph}>
            Participants are responsible for providing correct information for certificates. Requests for corrections may be subject to verification and applicable timelines or charges.
          </p>
        </>
      )
    },
    {
      id: 'schedule-changes',
      num: '6',
      title: 'Schedule Changes',
      icon: Clock,
      iconColor: '#38bdf8',
      content: (
        <>
          <p style={styles.paragraph}>
            Dates, venues, formats and schedules may be modified where necessary due to operational requirements, school requirements, government directions, safety considerations, force majeure or circumstances beyond Technik's reasonable control.
          </p>
          <p style={styles.paragraph}>
            Participants and schools will be informed of material changes through appropriate communication channels.
          </p>
        </>
      )
    },
    {
      id: 'intellectual-property',
      num: '7',
      title: 'Intellectual Property',
      icon: Copyright,
      iconColor: '#f43f5e',
      content: (
        <p style={styles.paragraph}>
          The Technik name, website content, educational materials, question papers, designs, graphics, program materials and other proprietary content may not be reproduced, distributed or commercially used without written permission, except where otherwise permitted by law.
        </p>
      )
    },
    {
      id: 'limitation',
      num: '8',
      title: 'Limitation',
      icon: ShieldCheck,
      iconColor: '#64748b',
      content: (
        <p style={styles.paragraph}>
          Technik will make reasonable efforts to conduct its programs as announced but will not be responsible for delays or disruptions caused by circumstances beyond its reasonable control.
        </p>
      )
    }
  ];

  return (
    <div style={styles.page}>
      {/* 1. HERO BANNER */}
      <section style={styles.heroSection}>
        <div className="container" style={styles.heroContainer}>
          <div style={styles.eyebrowRow}>
            <span style={styles.eyebrowBadge}>
              <Scale size={14} color="#f97316" />
              TERMS OF SERVICE
            </span>
          </div>

          <h1 style={styles.heroTitle}>
            Terms & <span style={{ color: '#f97316' }}>Conditions</span>
          </h1>

          <div style={styles.metaRow}>
            <span style={styles.metaItem}>
              <Calendar size={14} color="#94a3b8" />
              Last Updated: <strong>September 2026</strong>
            </span>
            <span style={styles.metaDot}>•</span>
            <span style={styles.metaItem}>
              Technik Olympiad Private Limited
            </span>
          </div>

          {/* Legal Navigation Tabs */}
          <div style={styles.legalNavTabs} className="legal-tabs-bar">
            <Link to="/privacy" style={styles.legalTab}>
              <ShieldCheck size={15} />
              <span>Privacy Policy</span>
            </Link>
            <Link to="/terms" style={{ ...styles.legalTab, ...styles.legalTabActive }}>
              <FileText size={15} />
              <span>Terms & Conditions</span>
            </Link>
            <Link to="/refund-policy" style={styles.legalTab}>
              <Award size={15} />
              <span>Refund Policy</span>
            </Link>
            <Link to="/faq" style={styles.legalTab}>
              <HelpCircle size={15} />
              <span>FAQs</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. MAIN TERMS CONTENT */}
      <section style={styles.mainSection}>
        <div className="container" style={styles.contentContainer}>

          {/* Introduction Card */}
          <div style={styles.introCard}>
            <p style={styles.introLead}>
              By accessing the Technik Olympiad website or registering for any Technik Olympiad Private Limited program, you agree to the applicable terms and conditions outlined below.
            </p>
            <p style={styles.introDesc}>
              Please read these terms carefully before registering students, schools, or nominating participants for awards.
            </p>
          </div>

          {/* Sections List */}
          <div style={styles.sectionsList}>
            {sections.map((sec) => {
              const Icon = sec.icon;
              return (
                <div key={sec.id} style={styles.sectionCard}>
                  <div style={styles.sectionHeader}>
                    <div style={{ ...styles.sectionIconBox, background: `${sec.iconColor}15`, borderColor: `${sec.iconColor}40` }}>
                      <Icon size={22} color={sec.iconColor} />
                    </div>
                    <div>
                      <h2 style={styles.sectionTitle}>{sec.num}. {sec.title}</h2>
                    </div>
                  </div>
                  <div style={styles.sectionBody}>
                    {sec.content}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}

// Responsive CSS
if (typeof document !== 'undefined') {
  const styleId = 'terms-responsive-styles';
  if (!document.getElementById(styleId)) {
    const st = document.createElement('style');
    st.id = styleId;
    st.innerHTML = `
      @media (max-width: 768px) {
        .legal-tabs-bar {
          justify-content: flex-start !important;
          overflow-x: auto !important;
          padding: 0.35rem !important;
          flex-wrap: nowrap !important;
          max-width: 100% !important;
          -webkit-overflow-scrolling: touch;
        }
      }
    `;
    document.head.appendChild(st);
  }
}

const styles = {
  page: {
    background: '#f8fafc',
    color: '#1e293b',
    minHeight: '100vh',
    fontFamily: 'var(--font-sans, system-ui, -apple-system, sans-serif)'
  },
  heroSection: {
    background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #f8fafc 100%)',
    padding: '4rem 1rem 2.5rem 1rem',
    borderBottom: '1px solid #fed7aa',
    textAlign: 'center'
  },
  heroContainer: {
    maxWidth: '860px',
    margin: '0 auto'
  },
  eyebrowRow: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem'
  },
  eyebrowBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
    padding: '0.35rem 0.9rem',
    borderRadius: '999px',
    background: '#fff7ed',
    border: '1px solid #fed7aa',
    color: '#ea580c',
    fontSize: '0.78rem',
    fontWeight: 800,
    letterSpacing: '0.08em',
    textTransform: 'uppercase'
  },
  heroTitle: {
    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
    fontWeight: 900,
    color: '#0f172a',
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
    marginBottom: '0.75rem'
  },
  metaRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '0.65rem',
    fontSize: '0.88rem',
    color: '#64748b',
    marginBottom: '2rem'
  },
  metaItem: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem'
  },
  metaDot: {
    color: '#cbd5e1'
  },
  legalNavTabs: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    background: '#ffffff',
    padding: '0.35rem',
    borderRadius: '12px',
    border: '1px solid #fed7aa',
    boxShadow: '0 2px 8px rgba(234, 88, 12, 0.08)'
  },
  legalTab: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
    padding: '0.55rem 1.1rem',
    borderRadius: '8px',
    color: '#475569',
    textDecoration: 'none',
    fontSize: '0.84rem',
    fontWeight: 600,
    transition: 'all 0.2s ease'
  },
  legalTabActive: {
    background: '#ea580c',
    border: '1px solid #c2410c',
    color: '#ffffff'
  },
  mainSection: {
    padding: '3rem 1rem 5rem 1rem'
  },
  contentContainer: {
    maxWidth: '860px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.75rem'
  },
  introCard: {
    background: '#ffffff',
    border: '1px solid #fed7aa',
    borderRadius: '14px',
    padding: '1.75rem 2rem',
    boxShadow: '0 6px 20px rgba(234, 88, 12, 0.06)'
  },
  introLead: {
    fontSize: '1.02rem',
    color: '#0f172a',
    lineHeight: 1.7,
    marginTop: 0,
    marginBottom: '0.85rem',
    fontWeight: 700
  },
  introDesc: {
    fontSize: '0.94rem',
    color: '#475569',
    lineHeight: 1.6,
    margin: 0
  },
  sectionsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  sectionCard: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '14px',
    padding: '2rem',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.25rem'
  },
  sectionIconBox: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: 800,
    color: '#0f172a',
    margin: 0
  },
  sectionBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem'
  },
  paragraph: {
    fontSize: '0.95rem',
    color: '#334155',
    lineHeight: 1.7,
    margin: 0
  },
  warningBox: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    padding: '0.85rem 1.1rem',
    background: '#fff7ed',
    border: '1px solid #ffedd5',
    borderRadius: '8px',
    marginTop: '0.35rem'
  },
  warningText: {
    fontSize: '0.88rem',
    color: '#c2410c',
    lineHeight: 1.5,
    fontWeight: 600
  }
};
