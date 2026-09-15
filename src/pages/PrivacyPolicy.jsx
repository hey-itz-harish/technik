import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Users,
  Camera,
  Share2,
  Server,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle2,
  HelpCircle,
  Award
} from 'lucide-react';

export default function PrivacyPolicy() {

  const collectedItems = [
    'Student name, class/category and school details',
    'Registration or nomination information',
    'Parent/guardian information where required',
    'School, principal and coordinator details',
    'Email address and mobile number',
    'Photographs and documents submitted for participation or recognition',
    'Olympiad participation, scores, results, certificates and awards',
    'Payment and transaction-related information',
    'Enquiries and communications submitted through the website',
    'Basic technical information relating to website usage'
  ];

  const usageItems = [
    'Process Olympiad registrations and Pride Award nominations',
    'Administer competitions, evaluations and educational programs',
    'Communicate schedules, results and important announcements',
    'Generate certificates, awards and participation records',
    'Verify certificates and awards',
    'Provide support to students, parents and schools',
    'Manage school and institutional partnerships',
    'Process payments and maintain transaction records',
    'Improve our programs, services and website',
    'Meet applicable legal and regulatory requirements'
  ];

  return (
    <div style={styles.page}>
      {/* 1. HERO BANNER */}
      <section style={styles.heroSection}>
        <div className="container" style={styles.heroContainer}>
          <div style={styles.eyebrowRow}>
            <span style={styles.eyebrowBadge}>
              <ShieldCheck size={14} color="#38bdf8" />
              LEGAL & PRIVACY
            </span>
          </div>

          <h1 style={styles.heroTitle}>
            Privacy <span style={{ color: '#38bdf8' }}>Policy</span>
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
            <Link to="/privacy" style={{ ...styles.legalTab, ...styles.legalTabActive }}>
              <ShieldCheck size={15} />
              <span>Privacy Policy</span>
            </Link>
            <Link to="/terms" style={styles.legalTab}>
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

      {/* 2. MAIN POLICY CONTENT */}
      <section style={styles.mainSection}>
        <div className="container" style={styles.contentContainer}>

          {/* Introduction Card */}
          <div style={styles.introCard}>
            <p style={styles.introLead}>
              <strong>Technik Olympiad Private Limited</strong> (“Technik”, “we”, “our” or “us”) respects the privacy of students, parents, schools, teachers, coordinators, partners and visitors who use our website and services.
            </p>
            <p style={styles.introDesc}>
              This Privacy Policy explains how we collect, use, disclose, and protect personal information when you register for Olympiads, nominate students for the Technik Pride Award, verify certificates, or use our digital platforms.
            </p>
          </div>

          {/* Section 1: Information We May Collect */}
          <div style={styles.policySectionCard}>
            <div style={styles.sectionHeader}>
              <div style={styles.sectionIconBox}>
                <Eye size={22} color="#38bdf8" />
              </div>
              <div>
                <h2 style={styles.sectionTitle}>1. Information We May Collect</h2>
                <p style={styles.sectionSubtitle}>Data collected depending on the service, registration, or nomination being made</p>
              </div>
            </div>

            <div style={styles.listGrid}>
              {collectedItems.map((item, idx) => (
                <div key={idx} style={styles.listItemCard}>
                  <CheckCircle2 size={16} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={styles.listItemText}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: How We Use Information */}
          <div style={styles.policySectionCard}>
            <div style={styles.sectionHeader}>
              <div style={styles.sectionIconBox}>
                <Server size={22} color="#f97316" />
              </div>
              <div>
                <h2 style={styles.sectionTitle}>2. How We Use Information</h2>
                <p style={styles.sectionSubtitle}>Purposes for processing educational and institutional records</p>
              </div>
            </div>

            <div style={styles.listGrid}>
              {usageItems.map((item, idx) => (
                <div key={idx} style={styles.listItemCard}>
                  <CheckCircle2 size={16} color="#f97316" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={styles.listItemText}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Children's Privacy */}
          <div style={styles.policySectionCard}>
            <div style={styles.sectionHeader}>
              <div style={styles.sectionIconBox}>
                <Users size={22} color="#22c55e" />
              </div>
              <div>
                <h2 style={styles.sectionTitle}>3. Children's Privacy</h2>
                <p style={styles.sectionSubtitle}>Safeguarding student details submitted by schools and guardians</p>
              </div>
            </div>

            <p style={styles.paragraphText}>
              Because many participants are minors, appropriate information may be collected through schools, parents or guardians as applicable. Schools, parents and guardians submitting information about a child should ensure that they have the necessary authority or consent to provide such information.
            </p>
          </div>

          {/* Section 4: Photographs and Recognition */}
          <div style={styles.policySectionCard}>
            <div style={styles.sectionHeader}>
              <div style={styles.sectionIconBox}>
                <Camera size={22} color="#eab308" />
              </div>
              <div>
                <h2 style={styles.sectionTitle}>4. Photographs and Recognition</h2>
                <p style={styles.sectionSubtitle}>Guidelines for awards, publications, and certificates</p>
              </div>
            </div>

            <p style={styles.paragraphText}>
              Photographs, achievements or related information may be used for certificates, Pride Book features, event recognition or promotional/publicity purposes only where appropriate permission or consent has been obtained.
            </p>
          </div>

          {/* Section 5: Data Sharing */}
          <div style={styles.policySectionCard}>
            <div style={styles.sectionHeader}>
              <div style={styles.sectionIconBox}>
                <Share2 size={22} color="#a855f7" />
              </div>
              <div>
                <h2 style={styles.sectionTitle}>5. Data Sharing</h2>
                <p style={styles.sectionSubtitle}>Strict policy against selling personal information</p>
              </div>
            </div>

            <p style={styles.paragraphText}>
              We do not sell personal information. Information may be shared with authorised service providers, educational partners, event partners or authorities where reasonably necessary to provide our services or comply with legal obligations.
            </p>
          </div>

          {/* Section 6: Data Security */}
          <div style={styles.policySectionCard}>
            <div style={styles.sectionHeader}>
              <div style={styles.sectionIconBox}>
                <Lock size={22} color="#ef4444" />
              </div>
              <div>
                <h2 style={styles.sectionTitle}>6. Data Security</h2>
                <p style={styles.sectionSubtitle}>Administrative and technical safeguards</p>
              </div>
            </div>

            <p style={styles.paragraphText}>
              Reasonable administrative and technical safeguards are used to protect information under our control. However, no internet-based system can guarantee absolute security.
            </p>
          </div>

          {/* Section 7: Contact Info Card */}
          <div style={styles.contactCard} className="legal-contact-card">
            <div style={styles.contactHeader}>
              <h3 style={styles.contactTitle}>7. Contact For Privacy Queries</h3>
              <p style={styles.contactSub}>If you have questions, feedback, or requests regarding this Privacy Policy:</p>
            </div>

            <div style={styles.contactInfoGrid} className="legal-contact-grid">
              <div style={styles.contactInfoBox}>
                <MapPin size={20} color="#f97316" />
                <div>
                  <div style={styles.contactLabel}>Company & Location</div>
                  <div style={styles.contactValue}>Technik Olympiad Private Limited<br />Vijayawada, Andhra Pradesh, India</div>
                </div>
              </div>

              <div style={styles.contactInfoBox}>
                <Mail size={20} color="#38bdf8" />
                <div>
                  <div style={styles.contactLabel}>Email Address</div>
                  <a href="mailto:info@technikolympiad.com" style={styles.contactLink}>info@technikolympiad.com</a>
                </div>
              </div>

              <div style={styles.contactInfoBox}>
                <Phone size={20} color="#22c55e" />
                <div>
                  <div style={styles.contactLabel}>Telephone Hotline</div>
                  <a href="tel:+919500428800" style={styles.contactLink}>+91 95004 28800</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

// Responsive CSS
if (typeof document !== 'undefined') {
  const styleId = 'privacy-responsive-styles';
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
        .legal-contact-grid {
          grid-template-columns: 1fr !important;
        }
        .legal-contact-card {
          padding: 1.5rem 1.25rem !important;
        }
      }
    `;
    document.head.appendChild(st);
  }
}

const styles = {
  page: {
    background: '#f0f9ff',
    color: '#1e293b',
    minHeight: '100vh',
    fontFamily: 'var(--font-sans, system-ui, -apple-system, sans-serif)'
  },
  heroSection: {
    background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #f0f9ff 100%)',
    padding: '4rem 1rem 2.5rem 1rem',
    borderBottom: '1px solid #7dd3fc',
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
    background: '#e0f2fe',
    border: '1px solid #7dd3fc',
    color: '#0284c7',
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
    color: '#475569',
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
    border: '1px solid #bae6fd',
    boxShadow: '0 2px 8px rgba(2, 132, 199, 0.08)'
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
    background: '#0284c7',
    border: '1px solid #0369a1',
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
    border: '1px solid #bae6fd',
    borderRadius: '14px',
    padding: '1.75rem 2rem',
    boxShadow: '0 6px 20px rgba(2, 132, 199, 0.06)'
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
  policySectionCard: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '14px',
    padding: '2rem',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '1.5rem'
  },
  sectionIconBox: {
    width: '46px',
    height: '46px',
    borderRadius: '10px',
    background: '#f0f9ff',
    border: '1px solid #bae6fd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: 800,
    color: '#0f172a',
    margin: '0 0 0.25rem 0'
  },
  sectionSubtitle: {
    fontSize: '0.85rem',
    color: '#64748b',
    margin: 0
  },
  listGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '0.75rem'
  },
  listItemCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    padding: '0.85rem 1rem',
    background: '#f8fafc',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  },
  listItemText: {
    fontSize: '0.92rem',
    color: '#334155',
    lineHeight: 1.5
  },
  paragraphText: {
    fontSize: '0.95rem',
    color: '#334155',
    lineHeight: 1.7,
    margin: 0
  },
  contactCard: {
    background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    border: '1px solid #0284c7',
    borderRadius: '16px',
    padding: '2rem 2.25rem',
    boxShadow: '0 12px 32px rgba(2, 132, 199, 0.25)',
    color: '#ffffff'
  },
  contactHeader: {
    marginBottom: '1.5rem'
  },
  contactTitle: {
    fontSize: '1.25rem',
    fontWeight: 800,
    color: '#ffffff',
    margin: '0 0 0.35rem 0'
  },
  contactSub: {
    fontSize: '0.88rem',
    color: '#e0f2fe',
    margin: 0
  },
  contactInfoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1.25rem'
  },
  contactInfoBox: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.85rem',
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.12)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  },
  contactLabel: {
    fontSize: '0.75rem',
    fontWeight: 700,
    color: '#bae6fd',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    marginBottom: '0.2rem'
  },
  contactValue: {
    fontSize: '0.9rem',
    color: '#ffffff',
    lineHeight: 1.4
  },
  contactLink: {
    fontSize: '0.92rem',
    fontWeight: 700,
    color: '#ffffff',
    textDecoration: 'underline'
  }
};
