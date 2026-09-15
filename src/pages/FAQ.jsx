import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  Search,
  Plus,
  Minus,
  Sparkles,
  BookOpen,
  Award,
  Building2,
  Phone,
  Mail,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  FileText
} from 'lucide-react';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'about', label: 'About Technik Olympiad', icon: BookOpen },
    { id: 'olympiad', label: 'Technik Olympiad', icon: Sparkles },
    { id: 'pride', label: 'Technik Pride Award', icon: Award },
    { id: 'partnerships', label: 'Schools & Partnerships', icon: Building2 }
  ];

  const faqData = [
    // 1. About Technik Olympiad
    {
      id: 'about-1',
      category: 'about',
      categoryLabel: 'About Technik Olympiad',
      q: 'What is Technik Olympiad?',
      a: 'Technik Olympiad is an educational initiative of Technik Olympiad Private Limited designed to provide school students with opportunities to explore, learn, compete and demonstrate their skills through future-ready Olympiads and recognition programs.'
    },
    {
      id: 'about-2',
      category: 'about',
      categoryLabel: 'About Technik Olympiad',
      q: 'Who can participate?',
      a: 'Eligibility depends on the specific Olympiad or program. Technik initiatives are designed for students from Play School to Class 12, as applicable to each program.'
    },
    {
      id: 'about-3',
      category: 'about',
      categoryLabel: 'About Technik Olympiad',
      q: 'Which school boards can participate?',
      a: 'Students from recognised school boards, including State Board/Matric, CBSE, CISCE/ICSE, IB and other recognised educational systems, may participate subject to the eligibility requirements of the respective program.'
    },

    // 2. Technik Olympiad
    {
      id: 'oly-1',
      category: 'olympiad',
      categoryLabel: 'Technik Olympiad',
      q: 'What Olympiads are offered?',
      a: 'Technik currently plans eight Olympiads: Robotics Olympiad, Coding Olympiad, AI Olympiad, Art Olympiad, Speaking Olympiad, English Olympiad, Abacus Olympiad and Mental Maths Olympiad.',
      linkText: 'Explore Olympiad Tracks',
      linkUrl: '/catalog'
    },
    {
      id: 'oly-2',
      category: 'olympiad',
      categoryLabel: 'Technik Olympiad',
      q: 'How can students register?',
      a: 'Students may participate through their school or through the registration process made available by Technik for the relevant Olympiad.',
      linkText: 'Register Now',
      linkUrl: '/register'
    },
    {
      id: 'oly-3',
      category: 'olympiad',
      categoryLabel: 'Technik Olympiad',
      q: 'How can I check my result?',
      a: 'Visit For Result → Check Result and enter the required registration details.',
      linkText: 'Check Result',
      linkUrl: '/results'
    },
    {
      id: 'oly-4',
      category: 'olympiad',
      categoryLabel: 'Technik Olympiad',
      q: 'How do I verify an award or certificate?',
      a: 'Use For Result → Verify Certificate or Verify Pride Award, as applicable, and enter the requested verification details.',
      linkText: 'Verify Certificate',
      linkUrl: '/results'
    },

    // 3. Technik Pride Award
    {
      id: 'pride-1',
      category: 'pride',
      categoryLabel: 'Technik Pride Award',
      q: 'What is the Technik Pride Award?',
      a: 'Technik Pride Award is a student recognition initiative designed to celebrate achievements, talents and potential beyond conventional academic performance.',
      linkText: 'Learn About Pride Award',
      linkUrl: '/awards'
    },
    {
      id: 'pride-2',
      category: 'pride',
      categoryLabel: 'Technik Pride Award',
      q: 'Who can be nominated?',
      a: 'Eligible students from Play School to Class 12 may be nominated according to the rules announced for the applicable Technik Pride Award program.'
    },
    {
      id: 'pride-3',
      category: 'pride',
      categoryLabel: 'Technik Pride Award',
      q: 'Who can nominate students?',
      a: 'Participating schools can nominate eligible students through the official nomination process.',
      linkText: 'School Portal Nomination',
      linkUrl: '/schools'
    },
    {
      id: 'pride-4',
      category: 'pride',
      categoryLabel: 'Technik Pride Award',
      q: 'How does the selection process work?',
      a: 'The process follows: School Nomination → Presentation → Evaluation → Winners → Award Function',
      isProcess: true
    },
    {
      id: 'pride-5',
      category: 'pride',
      categoryLabel: 'Technik Pride Award',
      q: 'Does nomination guarantee an award?',
      a: 'No. Nomination provides an opportunity to participate in the selection process. Final recognition is subject to evaluation and the applicable award rules.'
    },

    // 4. Schools & Partnerships
    {
      id: 'partner-1',
      category: 'partnerships',
      categoryLabel: 'Schools & Partnerships',
      q: 'How can our school partner with Technik?',
      a: 'Schools can visit For Schools → Partner With Us and submit their details and partnership interest.',
      linkText: 'Partner With Us',
      linkUrl: '/for-schools'
    },
    {
      id: 'partner-2',
      category: 'partnerships',
      categoryLabel: 'Schools & Partnerships',
      q: 'What partnership opportunities are available?',
      a: 'Schools may participate as a Technik Olympiad Partner School or explore opportunities including School Level Partner, District Level Partner, Pride Award Partner and Event Partner.'
    },
    {
      id: 'partner-3',
      category: 'partnerships',
      categoryLabel: 'Schools & Partnerships',
      q: 'How can we contact Technik?',
      a: 'Email info@technikolympiad.com or call +91 95004 28800.',
      isContact: true
    }
  ];

  // Filter questions based on category and search query
  const filteredFaqs = faqData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      query === '' ||
      item.q.toLowerCase().includes(query) ||
      item.a.toLowerCase().includes(query) ||
      item.categoryLabel.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  const toggleAccordion = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div style={styles.page}>
      {/* 1. HERO HEADER */}
      <section style={styles.heroSection}>
        <div className="container" style={styles.heroContainer}>
          <div style={styles.eyebrowRow}>
            <span style={styles.eyebrowBadge}>
              <HelpCircle size={14} color="#0284c7" />
              SUPPORT CENTER
            </span>
          </div>

          <h1 style={styles.heroTitle}>
            Frequently Asked <span style={{ color: '#0284c7' }}>Questions</span>
          </h1>

          <p style={styles.heroSubtitle}>
            Find instant answers to common questions about Technik Olympiads, student registrations,
            the Technik Pride Award, results verification, and school partnerships.
          </p>

          {/* Quick Search Bar */}
          <div style={styles.searchBarWrapper}>
            <div style={styles.searchBar}>
              <Search size={20} color="#64748b" style={{ marginLeft: '1rem', flexShrink: 0 }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions by keyword (e.g. Olympiad, Pride Award, Results, Partner)..."
                style={styles.searchInput}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={styles.clearSearchBtn}
                >
                  ✕
                </button>
              )}
            </div>
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
            <Link to="/refund-policy" style={styles.legalTab}>
              <Award size={15} />
              <span>Refund Policy</span>
            </Link>
            <Link to="/faq" style={{ ...styles.legalTab, ...styles.legalTabActive }}>
              <HelpCircle size={15} />
              <span>FAQs</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section style={styles.mainSection}>
        <div className="container" style={styles.contentContainer}>

          {/* Category Filter Pills */}
          <div style={styles.categoryPillsRow} className="faq-pills-row">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'all' 
                ? faqData.length 
                : faqData.filter(f => f.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    ...styles.categoryPill,
                    ...(isActive ? styles.categoryPillActive : {})
                  }}
                >
                  <Icon size={16} color={isActive ? '#ffffff' : '#0284c7'} />
                  <span>{cat.label}</span>
                  <span style={{
                    ...styles.categoryCountBadge,
                    background: isActive ? 'rgba(255,255,255,0.25)' : 'rgba(2, 132, 199, 0.12)',
                    color: isActive ? '#ffffff' : '#0284c7'
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Links to Policies */}
          <div style={styles.policyQuickBar}>
            <span style={styles.policyQuickBarLabel}>Looking for Legal Policies?</span>
            <div style={styles.policyQuickLinks}>
              <Link to="/privacy" style={styles.policyQuickLink}>
                <ShieldCheck size={14} color="#0284c7" />
                <span>Privacy Policy</span>
              </Link>
              <span style={styles.dotSeparator}>•</span>
              <Link to="/terms" style={styles.policyQuickLink}>
                <FileText size={14} color="#0284c7" />
                <span>Terms & Conditions</span>
              </Link>
              <span style={styles.dotSeparator}>•</span>
              <Link to="/refund-policy" style={styles.policyQuickLink}>
                <Award size={14} color="#0284c7" />
                <span>Refund Policy</span>
              </Link>
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div style={styles.faqListWrapper}>
            {filteredFaqs.length === 0 ? (
              <div style={styles.emptyStateCard}>
                <HelpCircle size={48} color="#64748b" />
                <h3 style={styles.emptyStateTitle}>No matching questions found</h3>
                <p style={styles.emptyStateText}>
                  We couldn't find any questions matching "{searchQuery}". Try searching with different keywords or browse all categories.
                </p>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  style={styles.resetBtn}
                >
                  View All Questions
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    style={{
                      ...styles.faqCard,
                      borderColor: isOpen ? '#0284c7' : '#e2e8f0',
                      background: '#ffffff',
                      boxShadow: isOpen ? '0 6px 20px rgba(2, 132, 199, 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.02)'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(faq.id)}
                      style={styles.faqQuestionBtn}
                      className="faq-question-btn"
                      aria-expanded={isOpen}
                    >
                      <div style={styles.faqQuestionLeft} className="faq-question-left">
                        <div style={{
                          ...styles.faqIndexBadge,
                          background: isOpen ? '#0284c7' : '#f0f9ff',
                          color: isOpen ? '#ffffff' : '#0284c7'
                        }}>
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </div>
                        <div style={styles.faqQuestionContent}>
                          <span style={styles.faqCategoryTag}>{faq.categoryLabel}</span>
                          <h3 
                            className="faq-question-text"
                            style={{
                              ...styles.faqQuestionText,
                              color: isOpen ? '#0284c7' : '#0f172a'
                            }}
                          >
                            {faq.q}
                          </h3>
                        </div>
                      </div>

                      <div style={{
                        ...styles.toggleIconBox,
                        background: isOpen ? '#e0f2fe' : '#f8fafc',
                        color: isOpen ? '#0284c7' : '#64748b'
                      }}>
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div style={styles.faqAnswerContainer} className="faq-answer-container">
                        <div style={styles.faqAnswerDivider} />
                        
                        {/* Process Display if applicable */}
                        {faq.isProcess ? (
                          <div style={styles.processBox}>
                            <p style={styles.faqAnswerText}>{faq.a}</p>
                            <div style={styles.processStepsRow} className="faq-process-steps-row">
                              {['School Nomination', 'Presentation', 'Evaluation', 'Winners', 'Award Function'].map((step, sIdx) => (
                                <React.Fragment key={step}>
                                  <div style={styles.processStepPill} className="faq-process-step-pill">
                                    <span style={styles.stepNum}>{sIdx + 1}</span>
                                    <span>{step}</span>
                                  </div>
                                  {sIdx < 4 && (
                                    <div className="faq-chevron-divider">
                                      <ChevronRight size={16} color="#f97316" />
                                    </div>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        ) : faq.isContact ? (
                          <div style={styles.contactAnswerBox}>
                            <p style={styles.faqAnswerText}>{faq.a}</p>
                            <div style={styles.contactActionButtonsRow} className="faq-contact-buttons-row">
                              <a href="mailto:info@technikolympiad.com" style={styles.contactActionBtn} className="faq-contact-action-btn">
                                <Mail size={16} color="#38bdf8" />
                                <span>Email: info@technikolympiad.com</span>
                              </a>
                              <a href="tel:+919500428800" style={styles.contactActionBtn} className="faq-contact-action-btn">
                                <Phone size={16} color="#22c55e" />
                                <span>Call: +91 95004 28800</span>
                              </a>
                            </div>
                          </div>
                        ) : (
                          <p style={styles.faqAnswerText}>{faq.a}</p>
                        )}

                        {/* Direct Link if available */}
                        {faq.linkUrl && (
                          <div style={styles.faqLinkRow}>
                            <Link to={faq.linkUrl} style={styles.faqActionLink}>
                              <span>{faq.linkText || 'Learn More'}</span>
                              <ArrowRight size={14} />
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* 3. BOTTOM HELP / CONTACT BANNER */}
          <div style={styles.helpBanner} className="faq-help-banner">
            <div style={styles.helpBannerLeft} className="faq-help-banner-left">
              <div style={styles.helpBannerIconBox}>
                <Phone size={28} color="#f97316" />
              </div>
              <div>
                <h3 style={styles.helpBannerTitle}>Still Have Questions?</h3>
                <p style={styles.helpBannerText}>
                  Our dedicated support team is here to assist schools, coordinators, parents, and students.
                </p>
              </div>
            </div>
            <div style={styles.helpBannerActions} className="faq-help-banner-actions">
              <a href="mailto:info@technikolympiad.com" style={styles.helpBannerEmailBtn}>
                <Mail size={16} />
                <span>info@technikolympiad.com</span>
              </a>
              <a href="tel:+919500428800" style={styles.helpBannerPhoneBtn}>
                <Phone size={16} />
                <span>+91 95004 28800</span>
              </a>
              <Link to="/contact" style={styles.helpBannerContactBtn}>
                <span>Contact Page</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

// Responsive CSS
if (typeof document !== 'undefined') {
  const styleId = 'faq-responsive-styles';
  if (!document.getElementById(styleId)) {
    const st = document.createElement('style');
    st.id = styleId;
    st.innerHTML = `
      @media (max-width: 768px) {
        .faq-pills-row {
          justify-content: flex-start !important;
          overflow-x: auto !important;
          padding-bottom: 0.65rem !important;
          flex-wrap: nowrap !important;
          -webkit-overflow-scrolling: touch;
        }
        .faq-question-btn {
          padding: 1rem 0.85rem !important;
          gap: 0.65rem !important;
        }
        .faq-question-left {
          gap: 0.65rem !important;
        }
        .faq-question-text {
          font-size: 0.92rem !important;
        }
        .faq-answer-container {
          padding: 0 0.85rem 1.25rem 0.85rem !important;
        }
        .faq-process-steps-row {
          flex-direction: column !important;
          align-items: stretch !important;
          gap: 0.5rem !important;
        }
        .faq-chevron-divider {
          display: flex;
          justify-content: center;
          transform: rotate(90deg);
        }
        .faq-contact-buttons-row {
          flex-direction: column !important;
        }
        .faq-contact-action-btn {
          width: 100% !important;
          justify-content: center !important;
        }
        .faq-help-banner {
          flex-direction: column !important;
          align-items: stretch !important;
          padding: 1.5rem 1.25rem !important;
          gap: 1.25rem !important;
        }
        .faq-help-banner-left {
          flex-direction: column !important;
          text-align: center !important;
          align-items: center !important;
        }
        .faq-help-banner-actions {
          flex-direction: column !important;
          width: 100% !important;
        }
        .faq-help-banner-actions a {
          width: 100% !important;
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
    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
    fontWeight: 900,
    color: '#0f172a',
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
    marginBottom: '0.75rem'
  },
  heroSubtitle: {
    fontSize: '0.96rem',
    color: '#475569',
    lineHeight: 1.6,
    maxWidth: '720px',
    margin: '0 auto 1.75rem auto'
  },
  searchBarWrapper: {
    maxWidth: '680px',
    margin: '0 auto 1.75rem auto'
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    background: '#ffffff',
    border: '1px solid #bae6fd',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(2, 132, 199, 0.08)',
    transition: 'border-color 0.2s ease'
  },
  searchInput: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: '#0f172a',
    padding: '0.9rem 1rem',
    fontSize: '0.95rem'
  },
  clearSearchBtn: {
    background: 'transparent',
    border: 'none',
    color: '#64748b',
    fontSize: '1rem',
    padding: '0 1.2rem',
    cursor: 'pointer'
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
    maxWidth: '920px',
    margin: '0 auto'
  },
  categoryPillsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.65rem',
    justifyContent: 'center',
    marginBottom: '1.75rem'
  },
  categoryPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.6rem 1.1rem',
    borderRadius: '10px',
    background: '#ffffff',
    border: '1px solid #bae6fd',
    color: '#475569',
    fontSize: '0.85rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  categoryPillActive: {
    background: '#0284c7',
    borderColor: '#0369a1',
    color: '#ffffff',
    boxShadow: '0 4px 14px rgba(2, 132, 199, 0.25)'
  },
  categoryCountBadge: {
    fontSize: '0.72rem',
    fontWeight: 800,
    padding: '0.15rem 0.45rem',
    borderRadius: '999px'
  },
  policyQuickBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '0.75rem',
    background: '#ffffff',
    border: '1px solid #bae6fd',
    borderRadius: '10px',
    padding: '0.75rem 1.25rem',
    marginBottom: '2rem',
    fontSize: '0.84rem'
  },
  policyQuickBarLabel: {
    color: '#64748b',
    fontWeight: 500
  },
  policyQuickLinks: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.65rem'
  },
  policyQuickLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    color: '#0284c7',
    textDecoration: 'none',
    fontWeight: 600
  },
  dotSeparator: {
    color: '#cbd5e1'
  },
  faqListWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '3rem'
  },
  faqCard: {
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    overflow: 'hidden',
    transition: 'all 0.25s ease'
  },
  faqQuestionBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.25rem 1.5rem',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    gap: '1rem'
  },
  faqQuestionLeft: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    flex: 1
  },
  faqIndexBadge: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    fontWeight: 800,
    flexShrink: 0,
    marginTop: '0.1rem'
  },
  faqQuestionContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  faqCategoryTag: {
    fontSize: '0.72rem',
    fontWeight: 700,
    color: '#0284c7',
    textTransform: 'uppercase',
    letterSpacing: '0.06em'
  },
  faqQuestionText: {
    fontSize: '1.02rem',
    fontWeight: 700,
    margin: 0,
    lineHeight: 1.4
  },
  toggleIconBox: {
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'all 0.2s ease'
  },
  faqAnswerContainer: {
    padding: '0 1.5rem 1.5rem 1.5rem'
  },
  faqAnswerDivider: {
    height: '1px',
    background: '#e2e8f0',
    marginBottom: '1rem'
  },
  faqAnswerText: {
    fontSize: '0.94rem',
    color: '#334155',
    lineHeight: 1.7,
    margin: 0
  },
  processBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  processStepsRow: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.5rem',
    padding: '0.85rem',
    background: '#f8fafc',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  },
  processStepPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
    padding: '0.35rem 0.75rem',
    background: '#ffffff',
    border: '1px solid #bae6fd',
    borderRadius: '6px',
    fontSize: '0.8rem',
    color: '#0f172a',
    fontWeight: 600
  },
  stepNum: {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    background: '#0284c7',
    color: '#ffffff',
    fontSize: '0.65rem',
    fontWeight: 800,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contactAnswerBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  contactActionButtonsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem'
  },
  contactActionBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.55rem 0.95rem',
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '6px',
    color: '#0f172a',
    textDecoration: 'none',
    fontSize: '0.84rem',
    fontWeight: 600,
    transition: 'all 0.2s ease'
  },
  faqLinkRow: {
    marginTop: '1rem',
    display: 'flex'
  },
  faqActionLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
    color: '#0284c7',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: 700
  },
  emptyStateCard: {
    padding: '3.5rem 2rem',
    textAlign: 'center',
    background: '#ffffff',
    borderRadius: '12px',
    border: '1px dashed #bae6fd',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem'
  },
  emptyStateTitle: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#0f172a',
    margin: 0
  },
  emptyStateText: {
    fontSize: '0.9rem',
    color: '#64748b',
    maxWidth: '480px',
    margin: 0,
    lineHeight: 1.5
  },
  resetBtn: {
    padding: '0.65rem 1.25rem',
    borderRadius: '8px',
    background: '#0284c7',
    color: '#ffffff',
    border: 'none',
    fontWeight: 700,
    cursor: 'pointer',
    fontSize: '0.85rem'
  },
  helpBanner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1.5rem',
    background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    border: '1px solid #0284c7',
    borderRadius: '16px',
    padding: '2rem 2.25rem',
    boxShadow: '0 12px 32px rgba(2, 132, 199, 0.25)'
  },
  helpBannerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    maxWidth: '520px'
  },
  helpBannerIconBox: {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  helpBannerTitle: {
    fontSize: '1.2rem',
    fontWeight: 800,
    color: '#ffffff',
    margin: '0 0 0.35rem 0'
  },
  helpBannerText: {
    fontSize: '0.88rem',
    color: '#e0f2fe',
    margin: 0,
    lineHeight: 1.5
  },
  helpBannerActions: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.75rem'
  },
  helpBannerEmailBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.65rem 1.1rem',
    background: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: 600
  },
  helpBannerPhoneBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.65rem 1.1rem',
    background: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: 600
  },
  helpBannerContactBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
    padding: '0.65rem 1.1rem',
    background: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    color: '#0284c7',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: 700
  }
};
