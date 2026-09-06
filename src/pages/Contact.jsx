import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import contactGirlImg from '../assets/contact_banner_girl_sign.jpg';
import {
  Phone,
  Mail,
  MapPin,
  Headset,
  Send,
  MessageCircle,
  Users,
  GraduationCap,
  Lightbulb,
  Building2,
  Handshake,
  Volume2,
  HelpCircle,
  Plus,
  Minus,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Accordion open/close state
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
  };

  // FAQ List
  const faqs = [
    {
      q: "How can my school partner with Technik Olympiad?",
      a: "Schools can fill out the School Registration form or contact our institutional care team directly via phone (+91 95004 28800) or email. We provide complete hosting toolkits and school coordinator dashboards."
    },
    {
      q: "Which classes can participate?",
      a: "Technik Olympiad conducts programs for students from Play School up to Class 12, tailored into Primary, Junior, and Senior categories."
    },
    {
      q: "How to nominate students for Technik Pride Award?",
      a: "Schools or parents can submit student achievement profiles under the Technik Pride Award page. Outstanding academic, innovation, and leadership achievements are recognized."
    },
    {
      q: "Is there any registration fee?",
      a: "Registration details and nominal examination fees vary by Olympiad track and school affiliation level. Detailed fee structures are available on the Olympiad catalog."
    },
    {
      q: "When are the Olympiad registrations open?",
      a: "Registrations for 2026 are currently open for all 6 core Olympiads (Robotics, Coding, AI, English, Art, and Mental Maths)."
    },
    {
      q: "How can we collaborate or sponsor?",
      a: "Educational institutions, technology organizations, and corporate CSR partners can reach out through the 'Sponsorship & Collaboration' category or email corporate@technikolympiad.com."
    },
    {
      q: "How can I check my result or download my certificate?",
      a: "Results and official verified digital certificates can be checked anytime using your Registration Number on the Result page."
    },
    {
      q: "Whom do I contact for media enquiries?",
      a: "Press and media representatives can contact our communications team at info@technikolympiad.com or select 'Media Enquiries' in the contact form."
    }
  ];

  return (
    <div style={styles.page}>
      
      {/* 1. HERO BANNER SECTION */}
      <section style={styles.heroSection}>
        <div style={styles.heroBgWrapper}>
          <img 
            src={contactGirlImg} 
            alt="Schoolgirl holding whiteboard sign" 
            style={styles.heroBgImg} 
          />
          <div style={styles.heroBgOverlay} />
        </div>

        <div className="container" style={styles.heroContainer}>
          {/* Breadcrumb */}
          <div style={styles.breadcrumbRow}>
            <Link to="/" style={styles.breadcrumbLink}>Home</Link>
            <span style={styles.breadcrumbSep}>&gt;</span>
            <span style={styles.breadcrumbCurrent}>Contact Us</span>
          </div>

          <div style={styles.heroContentGrid}>
            
            {/* Left Content */}
            <div style={styles.heroLeftCol}>
              <h1 style={styles.heroMainTitle}>
                Contact <span style={{ color: '#fbbf24' }}>Us</span>
              </h1>
              <h2 style={styles.heroSubTitle}>We're Here to Help</h2>
              <p style={styles.heroDesc}>
                Have a question, need support, or want to partner with us? We'd love to hear from you. Reach out to our team and we'll get back to you as soon as possible.
              </p>
            </div>

            {/* Right Action Icons Circle Column */}
            <div style={styles.heroRightCol}>
              <div style={styles.heroFeatureRow}>
                <div style={styles.featureCircleIcon}>
                  <MessageCircle size={18} color="#38bdf8" />
                </div>
                <span style={styles.featureText}>Ask</span>
              </div>

              <div style={styles.heroFeatureRow}>
                <div style={styles.featureCircleIcon}>
                  <Users size={18} color="#38bdf8" />
                </div>
                <span style={styles.featureText}>Connect</span>
              </div>

              <div style={styles.heroFeatureRow}>
                <div style={styles.featureCircleIcon}>
                  <GraduationCap size={18} color="#38bdf8" />
                </div>
                <span style={styles.featureText}>Collaborate</span>
              </div>

              <div style={styles.heroFeatureRow}>
                <div style={styles.featureCircleIcon}>
                  <Lightbulb size={18} color="#38bdf8" />
                </div>
                <span style={styles.featureText}>Create Opportunities</span>
              </div>

              {/* Tagline */}
              <div style={styles.scriptTaglineBox}>
                <span style={styles.scriptTaglineText}>Your Queries Our Priority</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. 4 TOP CONTACT INFO CARDS ROW */}
      <section style={styles.cardsSectionPadding}>
        <div className="container">
          <div style={styles.topCardsGrid}>
            
            {/* Card 1: Call Us */}
            <div style={styles.topInfoCard}>
              <div style={styles.cardIconCircleBlue}>
                <Phone size={22} color="#ffffff" />
              </div>
              <h3 style={styles.cardTitle}>Call Us</h3>
              <a href="tel:+919500428800" style={styles.cardHighlightText}>
                +91 95004 28800
              </a>
              <p style={styles.cardSubText}>
                Mon - Sat, 9:00 AM - 6:00 PM (IST)
              </p>
            </div>

            {/* Card 2: Email Us */}
            <div style={styles.topInfoCard}>
              <div style={styles.cardIconCircleBlue}>
                <Mail size={22} color="#ffffff" />
              </div>
              <h3 style={styles.cardTitle}>Email Us</h3>
              <a href="mailto:info@technikolympiad.com" style={styles.cardHighlightText}>
                info@technikolympiad.com
              </a>
              <p style={styles.cardSubText}>
                We usually respond within 24 hours.
              </p>
            </div>

            {/* Card 3: Our Office */}
            <div style={styles.topInfoCard}>
              <div style={styles.cardIconCircleBlue}>
                <MapPin size={22} color="#ffffff" />
              </div>
              <h3 style={styles.cardTitle}>Our Office</h3>
              <span style={styles.cardCompanyText}>
                Technik Olympiad Private Limited
              </span>
              <p style={styles.cardSubText}>
                Vijayawada, Andhra Pradesh <br />
                India - 520007
              </p>
            </div>

            {/* Card 4: Support for */}
            <div style={styles.topInfoCard}>
              <div style={styles.cardIconCircleBlue}>
                <Headset size={22} color="#ffffff" />
              </div>
              <h3 style={styles.cardTitle}>Support for</h3>
              <div style={styles.supportOptionsList}>
                <span>Students &nbsp;|&nbsp; Schools</span>
                <span>Partners &nbsp;|&nbsp; Media</span>
                <span>General Enquiries</span>
              </div>
            </div>

          </div>

          {/* 3. MIDDLE TWO-COLUMN SECTION (FORM + MAP) */}
          <div style={styles.middleTwoColGrid}>
            
            {/* LEFT COL: SEND US A MESSAGE FORM */}
            <div style={styles.formContainerCard}>
              <div style={styles.sectionHeaderRow}>
                <div style={styles.sectionIconBadge}>
                  <Send size={22} color="#1d4ed8" />
                </div>
                <div>
                  <h3 style={styles.sectionTitle}>Send Us a Message</h3>
                  <p style={styles.sectionSub}>Fill in the form below and we'll get back to you soon.</p>
                </div>
              </div>

              {submitted ? (
                <div style={styles.successBox}>
                  <CheckCircle2 size={48} color="#16a34a" />
                  <h4 style={styles.successTitle}>Thank You, {formData.name}!</h4>
                  <p style={styles.successDesc}>
                    Your message has been received. Our team will contact you at <strong>{formData.email}</strong> shortly.
                  </p>
                  <button 
                    style={styles.resetBtn}
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={styles.contactForm}>
                  <div style={styles.formRow2Col}>
                    {/* Your Name */}
                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>
                        Your Name <span style={styles.reqStar}>*</span>
                      </label>
                      <input 
                        type="text" 
                        placeholder="Enter your name"
                        style={styles.textInput}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    {/* Your Email */}
                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>
                        Your Email <span style={styles.reqStar}>*</span>
                      </label>
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        style={styles.textInput}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div style={styles.formRow2Col}>
                    {/* Phone Number */}
                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="Enter your phone number"
                        style={styles.textInput}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    {/* Subject */}
                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>
                        Subject <span style={styles.reqStar}>*</span>
                      </label>
                      <select 
                        style={styles.selectInput}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="Student Enquiry">Student Enquiry</option>
                        <option value="School Partnership">School Partnership</option>
                        <option value="Sponsorship & Collaboration">Sponsorship & Collaboration</option>
                        <option value="Media Enquiries">Media Enquiries</option>
                        <option value="General Support">General Support</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div style={styles.fieldCol}>
                    <label style={styles.fieldLabel}>
                      Your Message <span style={styles.reqStar}>*</span>
                    </label>
                    <textarea 
                      placeholder="Type your message here..."
                      style={styles.textAreaInput}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <button type="submit" style={styles.sendMsgBtn}>
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT COL: OUR LOCATION EMBEDDED MAP */}
            <div style={styles.mapContainerCard}>
              <div style={styles.sectionHeaderRow}>
                <div style={styles.sectionIconBadge}>
                  <MapPin size={22} color="#1d4ed8" />
                </div>
                <div>
                  <h3 style={styles.sectionTitle}>Our Location</h3>
                  <p style={styles.sectionSub}>Visit us at our registered office.</p>
                </div>
              </div>

              {/* Map View Frame */}
              <div style={styles.mapFrameWrapper}>
                <iframe 
                  title="Technik Olympiad Headquarters Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.432857416487!2d80.6482!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff5b0a55555%3A0x8888888888888888!2sVijayawada%2C%20Andhra%20Pradesh%20520007!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: '12px' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Custom Overlay Location Pin Badge */}
                <div style={styles.mapPinBadgeOverlay}>
                  <div style={styles.pinBadgeTitle}>Technik Olympiad Private Limited</div>
                  <div style={styles.pinBadgeAddress}>Vijayawada, Andhra Pradesh 520007, India</div>
                </div>
              </div>
            </div>

          </div>

          {/* 4. QUICK ENQUIRIES CATEGORY BAR */}
          <div style={styles.quickEnquiriesWrapper}>
            <div style={styles.sectionHeaderRow}>
              <div style={styles.sectionIconBadge}>
                <MessageCircle size={22} color="#1d4ed8" />
              </div>
              <div>
                <h3 style={styles.sectionTitle}>Quick Enquiries</h3>
                <p style={styles.sectionSub}>Choose a category to get faster support.</p>
              </div>
            </div>

            <div style={styles.quickPillsGrid}>
              
              {/* Category 1 */}
              <div 
                style={styles.quickPillCard}
                onClick={() => setFormData({ ...formData, subject: 'Student Enquiry' })}
              >
                <div style={styles.pillLeftGroup}>
                  <GraduationCap size={18} color="#2563eb" />
                  <span style={styles.pillTitle}>Student Enquiry</span>
                </div>
                <ArrowRight size={16} color="#2563eb" />
              </div>

              {/* Category 2 */}
              <div 
                style={styles.quickPillCard}
                onClick={() => setFormData({ ...formData, subject: 'School Partnership' })}
              >
                <div style={styles.pillLeftGroup}>
                  <Building2 size={18} color="#2563eb" />
                  <span style={styles.pillTitle}>School Partnership</span>
                </div>
                <ArrowRight size={16} color="#2563eb" />
              </div>

              {/* Category 3 */}
              <div 
                style={styles.quickPillCard}
                onClick={() => setFormData({ ...formData, subject: 'Sponsorship & Collaboration' })}
              >
                <div style={styles.pillLeftGroup}>
                  <Handshake size={18} color="#2563eb" />
                  <span style={styles.pillTitle}>Sponsorship & Collaboration</span>
                </div>
                <ArrowRight size={16} color="#2563eb" />
              </div>

              {/* Category 4 */}
              <div 
                style={styles.quickPillCard}
                onClick={() => setFormData({ ...formData, subject: 'Media Enquiries' })}
              >
                <div style={styles.pillLeftGroup}>
                  <Volume2 size={18} color="#2563eb" />
                  <span style={styles.pillTitle}>Media Enquiries</span>
                </div>
                <ArrowRight size={16} color="#2563eb" />
              </div>

              {/* Category 5 */}
              <div 
                style={styles.quickPillCard}
                onClick={() => setFormData({ ...formData, subject: 'General Support' })}
              >
                <div style={styles.pillLeftGroup}>
                  <Headset size={18} color="#2563eb" />
                  <span style={styles.pillTitle}>General Support</span>
                </div>
                <ArrowRight size={16} color="#2563eb" />
              </div>

            </div>
          </div>

          {/* 5. FREQUENTLY ASKED QUESTIONS ACCORDION */}
          <div style={styles.faqSectionWrapper}>
            <div style={styles.faqHeaderRow}>
              <div style={styles.sectionHeaderRow}>
                <div style={styles.sectionIconBadge}>
                  <HelpCircle size={22} color="#1d4ed8" />
                </div>
                <div>
                  <h3 style={styles.sectionTitle}>Frequently Asked Questions</h3>
                  <p style={styles.sectionSub}>Find quick answers to common queries.</p>
                </div>
              </div>
              
              <Link to="/faq" style={styles.viewAllFaqsBtn}>
                <span>View All FAQs</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div style={styles.faqGrid}>
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  style={{
                    ...styles.faqCard,
                    borderColor: openFaq === idx ? '#2563eb' : '#e2e8f0',
                    background: openFaq === idx ? '#f8fafc' : '#ffffff',
                  }}
                  onClick={() => toggleFaq(idx)}
                >
                  <div style={styles.faqCardTopRow}>
                    <div style={styles.faqTitleGroup}>
                      <ArrowRight size={14} color="#2563eb" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <h4 style={styles.faqQuestion}>{faq.q}</h4>
                    </div>
                    <button style={styles.faqToggleBtn}>
                      {openFaq === idx ? <Minus size={16} color="#2563eb" /> : <Plus size={16} color="#0c1e45" />}
                    </button>
                  </div>

                  {openFaq === idx && (
                    <div style={styles.faqAnswerBox}>
                      <p style={styles.faqAnswerText}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

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
    paddingBottom: '1.25rem',
  },

  /* 1. HERO BANNER SECTION */
  heroSection: {
    position: 'relative',
    minHeight: '360px',
    background: '#041026',
    color: '#ffffff',
    overflow: 'hidden',
    padding: '1.8rem 0 3.5rem 0',
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
    objectPosition: '50% 32%',
  },
  heroBgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, rgba(4, 16, 38, 0.96) 0%, rgba(4, 16, 38, 0.78) 35%, rgba(4, 16, 38, 0.15) 50%, rgba(4, 16, 38, 0.75) 65%, rgba(4, 16, 38, 0.96) 100%)',
  },
  heroContainer: {
    position: 'relative',
    zIndex: 2,
  },
  breadcrumbRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.8rem',
    marginBottom: '0.5rem',
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
    fontWeight: 600,
  },

  heroContentGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  heroLeftCol: {
    maxWidth: '520px',
  },
  heroMainTitle: {
    fontSize: '2.8rem',
    fontWeight: 900,
    lineHeight: '1.05',
    color: '#ffffff',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.15rem',
  },
  heroSubTitle: {
    fontSize: '1.4rem',
    fontWeight: 800,
    color: '#ffffff',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.35rem',
  },
  heroDesc: {
    fontSize: '0.88rem',
    color: '#cbd5e1',
    lineHeight: '1.45',
  },

  heroRightCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.35rem',
    marginTop: '0',
  },
  heroFeatureRow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
    padding: '0.25rem 0.75rem',
    background: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    borderRadius: '30px',
    backdropFilter: 'blur(10px)',
  },
  featureCircleIcon: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: 'rgba(56, 189, 248, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    fontSize: '0.8rem',
    fontWeight: 700,
    color: '#ffffff',
    fontFamily: 'var(--font-heading)',
  },
  scriptTaglineBox: {
    marginTop: '0.35rem',
    textAlign: 'right',
  },
  scriptTaglineText: {
    fontSize: '1.15rem',
    fontStyle: 'italic',
    fontWeight: 700,
    color: '#fbbf24',
    fontFamily: '"Georgia", cursive, serif',
    textShadow: '0 2px 8px rgba(0,0,0,0.8)',
  },

  /* 2. TOP CONTACT CARDS ROW */
  cardsSectionPadding: {
    padding: '0 0 1rem 0',
    marginTop: '-3.2rem',
    position: 'relative',
    zIndex: 10,
  },
  topCardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '0.85rem',
  },
  topInfoCard: {
    background: '#ffffff',
    borderRadius: '14px',
    padding: '1.1rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    border: '1px solid #e2e8f0',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
  },
  cardIconCircleBlue: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.5rem',
    boxShadow: '0 3px 10px rgba(29, 78, 216, 0.22)',
  },
  cardTitle: {
    fontSize: '1rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.3rem',
  },
  cardHighlightText: {
    fontSize: '0.88rem',
    fontWeight: 800,
    color: '#1d4ed8',
    textDecoration: 'none',
    marginBottom: '0.2rem',
  },
  cardCompanyText: {
    fontSize: '0.84rem',
    fontWeight: 800,
    color: '#0c1e45',
    marginBottom: '0.15rem',
  },
  cardSubText: {
    fontSize: '0.8rem',
    color: '#64748b',
    lineHeight: '1.35',
  },
  supportOptionsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.15rem',
    fontSize: '0.8rem',
    fontWeight: 700,
    color: '#334155',
  },

  /* 3. MIDDLE TWO-COLUMN SECTION */
  middleTwoColGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1rem',
    marginTop: '1rem',
  },

  /* Form Container */
  formContainerCard: {
    background: '#ffffff',
    borderRadius: '14px',
    padding: '1.25rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 3px 12px rgba(0,0,0,0.025)',
  },
  sectionHeaderRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    marginBottom: '0.85rem',
  },
  sectionIconBadge: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: '#eff6ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  sectionTitle: {
    fontSize: '1.15rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    lineHeight: '1.2',
  },
  sectionSub: {
    fontSize: '0.8rem',
    color: '#64748b',
  },

  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  formRow2Col: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '0.75rem',
  },
  fieldCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  fieldLabel: {
    fontSize: '0.78rem',
    fontWeight: 700,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
  },
  reqStar: {
    color: '#dc2626',
  },
  textInput: {
    width: '100%',
    padding: '0.55rem 0.75rem',
    fontSize: '0.82rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    outline: 'none',
    boxSizing: 'border-box',
  },
  selectInput: {
    width: '100%',
    padding: '0.55rem 0.75rem',
    fontSize: '0.82rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    outline: 'none',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
  },
  textAreaInput: {
    width: '100%',
    minHeight: '85px',
    padding: '0.55rem 0.75rem',
    fontSize: '0.82rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    outline: 'none',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  },
  sendMsgBtn: {
    width: '100%',
    background: '#002b82',
    color: '#ffffff',
    border: 'none',
    padding: '0.65rem 1.1rem',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '0.85rem',
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.4rem',
    boxShadow: '0 3px 10px rgba(0, 43, 130, 0.2)',
    marginTop: '0.15rem',
  },

  successBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '1.5rem 1rem',
    gap: '0.65rem',
  },
  successTitle: {
    fontSize: '1.2rem',
    fontWeight: 900,
    color: '#0c1e45',
  },
  successDesc: {
    fontSize: '0.85rem',
    color: '#475569',
    lineHeight: '1.45',
  },
  resetBtn: {
    background: '#2563eb',
    color: '#ffffff',
    border: 'none',
    padding: '0.55rem 1.1rem',
    borderRadius: '8px',
    fontWeight: 700,
    fontSize: '0.82rem',
    cursor: 'pointer',
    marginTop: '0.35rem',
  },

  /* Map Container */
  mapContainerCard: {
    background: '#ffffff',
    borderRadius: '14px',
    padding: '1.25rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 3px 12px rgba(0,0,0,0.025)',
    display: 'flex',
    flexDirection: 'column',
  },
  mapFrameWrapper: {
    position: 'relative',
    width: '100%',
    height: '280px',
    borderRadius: '10px',
    overflow: 'hidden',
    marginTop: '0.25rem',
  },
  mapPinBadgeOverlay: {
    position: 'absolute',
    top: '0.75rem',
    left: '0.75rem',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(8px)',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '0.5rem 0.75rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    maxWidth: '220px',
  },
  pinBadgeTitle: {
    fontSize: '0.78rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
  },
  pinBadgeAddress: {
    fontSize: '0.7rem',
    color: '#64748b',
    marginTop: '0.1rem',
  },

  /* 4. QUICK ENQUIRIES CATEGORY BAR */
  quickEnquiriesWrapper: {
    background: '#ffffff',
    borderRadius: '14px',
    padding: '1.25rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 3px 12px rgba(0,0,0,0.025)',
    marginTop: '1rem',
  },
  quickPillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '0.6rem',
    marginTop: '0.75rem',
  },
  quickPillCard: {
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '0.6rem 0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  pillLeftGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.45rem',
  },
  pillTitle: {
    fontSize: '0.8rem',
    fontWeight: 800,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
  },

  /* 5. FREQUENTLY ASKED QUESTIONS */
  faqSectionWrapper: {
    background: '#ffffff',
    borderRadius: '14px',
    padding: '1.25rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 3px 12px rgba(0,0,0,0.025)',
    marginTop: '1rem',
  },
  faqHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  viewAllFaqsBtn: {
    color: '#2563eb',
    fontSize: '0.8rem',
    fontWeight: 800,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
    fontFamily: 'var(--font-heading)',
  },
  faqGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
    gap: '0.65rem',
    marginTop: '0.85rem',
  },
  faqCard: {
    borderRadius: '8px',
    padding: '0.65rem 0.85rem',
    border: '1px solid #e2e8f0',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  faqCardTopRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0.5rem',
  },
  faqTitleGroup: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.45rem',
  },
  faqQuestion: {
    fontSize: '0.84rem',
    fontWeight: 800,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    lineHeight: '1.3',
  },
  faqToggleBtn: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  faqAnswerBox: {
    marginTop: '0.5rem',
    paddingTop: '0.5rem',
    borderTop: '1px solid #e2e8f0',
  },
  faqAnswerText: {
    fontSize: '0.82rem',
    color: '#475569',
    lineHeight: '1.45',
  },
};
