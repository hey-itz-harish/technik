import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  RefreshCw,
  AlertCircle,
  XCircle,
  Clock,
  Mail,
  CheckCircle2,
  Calendar,
  FileText,
  ShieldCheck,
  HelpCircle,
  Info
} from 'lucide-react';

export default function RefundPolicy() {
  const nonRefundableCases = [
    'Changes their mind after successful registration',
    'Does not attend or participate',
    'Provides incorrect registration information',
    'Misses the scheduled examination/event',
    'Is disqualified for violating applicable rules'
  ];

  const refundSteps = [
    { label: 'Student Name', desc: 'Full name as registered in Olympiad or Award' },
    { label: 'Registration Number', desc: 'Unique registration / application reference' },
    { label: 'Payment / Txn Reference', desc: 'Bank or payment gateway transaction ID' },
    { label: 'Amount Paid & Reason', desc: 'Exact payment amount and detailed explanation' }
  ];

  return (
    <div style={styles.page}>
      {/* 1. HERO BANNER */}
      <section style={styles.heroSection}>
        <div className="container" style={styles.heroContainer}>
          <div style={styles.eyebrowRow}>
            <span style={styles.eyebrowBadge}>
              <RefreshCw size={14} color="#38bdf8" />
              PAYMENT & REFUNDS
            </span>
          </div>

          <h1 style={styles.heroTitle}>
            Refund & <span style={{ color: '#38bdf8' }}>Cancellation Policy</span>
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
            <Link to="/terms" style={styles.legalTab}>
              <FileText size={15} />
              <span>Terms & Conditions</span>
            </Link>
            <Link to="/refund-policy" style={{ ...styles.legalTab, ...styles.legalTabActive }}>
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

          {/* Notice Card */}
          <div style={styles.introCard}>
            <div style={styles.introHeader}>
              <Info size={20} color="#38bdf8" style={{ flexShrink: 0 }} />
              <span style={styles.introLead}>
                Registration fees paid for Technik Olympiad programs are generally non-refundable once registration has been successfully confirmed, except in the circumstances specifically stated below.
              </span>
            </div>
          </div>

          {/* 1. Duplicate or Excess Payment */}
          <div style={styles.policyCard}>
            <div style={styles.cardHeader}>
              <div style={styles.iconBoxCyan}>
                <RefreshCw size={20} color="#38bdf8" />
              </div>
              <div>
                <h2 style={styles.cardTitle}>1. Duplicate or Excess Payment</h2>
                <p style={styles.cardSub}>Overpayments and multiple technical deductions</p>
              </div>
            </div>
            <p style={styles.cardParagraph}>
              If the same registration is charged more than once because of a payment or technical issue, the verified duplicate amount will be eligible for refund.
            </p>
          </div>

          {/* 2. Failed Transactions */}
          <div style={styles.policyCard}>
            <div style={styles.cardHeader}>
              <div style={styles.iconBoxAmber}>
                <AlertCircle size={20} color="#f97316" />
              </div>
              <div>
                <h2 style={styles.cardTitle}>2. Failed Transactions</h2>
                <p style={styles.cardSub}>Debits without corresponding registration creation</p>
              </div>
            </div>
            <p style={styles.cardParagraph}>
              If an amount is debited but registration is not successfully completed, participants should first allow the normal banking/payment-gateway reconciliation period.
            </p>
            <p style={styles.cardParagraph}>
              If the payment is confirmed as received by Technik but no corresponding registration was created, the matter will be reviewed and an appropriate resolution or refund will be provided.
            </p>
          </div>

          {/* 3. Cancellation by Technik */}
          <div style={styles.policyCard}>
            <div style={styles.cardHeader}>
              <div style={styles.iconBoxGreen}>
                <CheckCircle2 size={20} color="#22c55e" />
              </div>
              <div>
                <h2 style={styles.cardTitle}>3. Cancellation by Technik</h2>
                <p style={styles.cardSub}>Program cancellations without suitable alternatives</p>
              </div>
            </div>
            <p style={styles.cardParagraph}>
              If Technik cancels a paid program and does not provide a suitable alternative, eligible participants may receive a refund of the applicable registration fee.
            </p>
          </div>

          {/* 4. Change of Mind / Non-Attendance */}
          <div style={styles.policyCard}>
            <div style={styles.cardHeader}>
              <div style={styles.iconBoxRed}>
                <XCircle size={20} color="#ef4444" />
              </div>
              <div>
                <h2 style={styles.cardTitle}>4. Change of Mind / Non-Attendance</h2>
                <p style={styles.cardSub}>Circumstances where refunds will ordinarily not be provided</p>
              </div>
            </div>
            <p style={styles.cardParagraph}>
              Refunds will ordinarily not be provided where a participant:
            </p>
            <div style={styles.bulletList}>
              {nonRefundableCases.map((item, idx) => (
                <div key={idx} style={styles.bulletItem}>
                  <XCircle size={16} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={styles.bulletText}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Rescheduling */}
          <div style={styles.policyCard}>
            <div style={styles.cardHeader}>
              <div style={styles.iconBoxPurple}>
                <Clock size={20} color="#a855f7" />
              </div>
              <div>
                <h2 style={styles.cardTitle}>5. Rescheduling</h2>
                <p style={styles.cardSub}>Transfers to revised dates</p>
              </div>
            </div>
            <p style={styles.cardParagraph}>
              Where an examination or event is rescheduled rather than cancelled, registration will normally be transferred to the revised date instead of being refunded.
            </p>
          </div>

          {/* 6. Refund Requests Process & Contact */}
          <div style={styles.refundProcessCard}>
            <div style={styles.cardHeader}>
              <div style={styles.iconBoxOrange}>
                <Mail size={22} color="#f97316" />
              </div>
              <div>
                <h2 style={styles.cardTitle}>6. How to Submit a Refund Request</h2>
                <p style={styles.cardSub}>Submit requests directly to our support desk with the following required details</p>
              </div>
            </div>

            <div style={styles.stepsGrid} className="refund-steps-grid">
              {refundSteps.map((step, sIdx) => (
                <div key={sIdx} style={styles.stepCard}>
                  <div style={styles.stepBadge}>{sIdx + 1}</div>
                  <div>
                    <div style={styles.stepLabel}>{step.label}</div>
                    <div style={styles.stepDesc}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.emailBox} className="refund-email-box">
              <div style={styles.emailBoxText}>
                Send eligible refund requests to:
              </div>
              <a href="mailto:info@technikolympiad.com" style={styles.emailLink} className="refund-email-link">
                <Mail size={18} />
                <span>info@technikolympiad.com</span>
              </a>
            </div>

            <p style={styles.processingNote}>
              * Approved refunds will be processed through the appropriate payment method/payment gateway and may take the applicable banking processing time to appear in your account.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

// Responsive CSS
if (typeof document !== 'undefined') {
  const styleId = 'refund-responsive-styles';
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
        .refund-steps-grid {
          grid-template-columns: 1fr !important;
        }
        .refund-email-box {
          flex-direction: column !important;
          align-items: stretch !important;
          text-align: center !important;
          gap: 0.75rem !important;
        }
        .refund-email-link {
          justify-content: center !important;
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
    fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
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
    padding: '1.5rem 1.75rem',
    boxShadow: '0 6px 20px rgba(2, 132, 199, 0.06)'
  },
  introHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.85rem'
  },
  introLead: {
    fontSize: '1rem',
    color: '#0f172a',
    lineHeight: 1.6,
    fontWeight: 600
  },
  policyCard: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '14px',
    padding: '2rem',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.25rem'
  },
  iconBoxCyan: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    background: '#f0f9ff',
    border: '1px solid #bae6fd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  iconBoxAmber: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    background: '#fff7ed',
    border: '1px solid #ffedd5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  iconBoxGreen: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    background: '#f0fdf4',
    border: '1px solid #bbf7d0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  iconBoxRed: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    background: '#fef2f2',
    border: '1px solid #fecaca',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  iconBoxPurple: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    background: '#faf5ff',
    border: '1px solid #e9d5ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  iconBoxOrange: {
    width: '46px',
    height: '46px',
    borderRadius: '10px',
    background: '#fff7ed',
    border: '1px solid #ffedd5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 800,
    color: '#0f172a',
    margin: '0 0 0.2rem 0'
  },
  cardSub: {
    fontSize: '0.84rem',
    color: '#64748b',
    margin: 0
  },
  cardParagraph: {
    fontSize: '0.94rem',
    color: '#334155',
    lineHeight: 1.7,
    margin: '0 0 0.85rem 0'
  },
  bulletList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.65rem',
    marginTop: '0.5rem'
  },
  bulletItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.65rem',
    padding: '0.65rem 0.85rem',
    background: '#f8fafc',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  },
  bulletText: {
    fontSize: '0.9rem',
    color: '#334155',
    lineHeight: 1.5
  },
  refundProcessCard: {
    background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    border: '1px solid #0284c7',
    borderRadius: '16px',
    padding: '2rem 2.25rem',
    boxShadow: '0 12px 32px rgba(2, 132, 199, 0.25)',
    color: '#ffffff'
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem',
    marginTop: '1.25rem',
    marginBottom: '1.5rem'
  },
  stepCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    padding: '0.9rem 1rem',
    background: 'rgba(255, 255, 255, 0.12)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  },
  stepBadge: {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    background: '#f97316',
    color: '#ffffff',
    fontSize: '0.75rem',
    fontWeight: 800,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  stepLabel: {
    fontSize: '0.86rem',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: '0.2rem'
  },
  stepDesc: {
    fontSize: '0.78rem',
    color: '#e0f2fe',
    lineHeight: 1.4
  },
  emailBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
    padding: '1rem 1.25rem',
    background: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    marginBottom: '1rem'
  },
  emailBoxText: {
    fontSize: '0.92rem',
    color: '#ffffff',
    fontWeight: 600
  },
  emailLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.55rem 1.1rem',
    background: '#f97316',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '0.88rem',
    fontWeight: 700
  },
  processingNote: {
    fontSize: '0.82rem',
    color: '#bae6fd',
    fontStyle: 'italic',
    lineHeight: 1.5,
    margin: 0
  }
};
