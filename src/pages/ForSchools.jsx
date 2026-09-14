import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import handshakeImg from '../assets/handshake_card_img.jpg';
import ctaBoyImg from '../assets/hero_student_back.jpg';
import {
  Lightbulb,
  TrendingUp,
  GraduationCap,
  Sparkles,
  Medal,
  Building2,
  Building,
  CheckCircle2,
  ArrowRight,
  Users,
  BookOpen,
  Handshake,
  Users2,
  User,
  X,
  CheckCircle,
  ShieldCheck
} from 'lucide-react';

export default function ForSchools() {

  // ===========================================================
  // PARTNER SCHOOL REGISTRATION FORM STATE
  // ===========================================================
  const [schoolDetails, setSchoolDetails] = useState({
    schoolName: '', board: '', state: '', district: '', city: '',
    address: '', principalName: '', principalMobile: '', principalEmail: ''
  });

  const [coordinatorDetails, setCoordinatorDetails] = useState({
    name: '', designation: '', mobile: '', email: ''
  });

  const partnershipOptions = [
    'Technik Olympiad Partner School',
    'Technik Pride Award',
    'School Level Hosting Partner',
    'District Level Hosting Partner',
    'Pride Award Partner',
    'Event Partner'
  ];
  const [selectedInterests, setSelectedInterests] = useState([]);

  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (option) => {
    setSelectedInterests((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const handleSubmitInterest = (e) => {
    e.preventDefault();

    if (!schoolDetails.schoolName || !schoolDetails.board || !schoolDetails.state ||
        !schoolDetails.district || !schoolDetails.city || !schoolDetails.address ||
        !schoolDetails.principalName || !schoolDetails.principalMobile || !schoolDetails.principalEmail) {
      setFormError('Please fill in all required School Details fields.');
      return;
    }
    if (!coordinatorDetails.name || !coordinatorDetails.mobile || !coordinatorDetails.email) {
      setFormError('Please fill in all required Coordinator Details fields.');
      return;
    }

    setFormError('');
    setSubmitted(true);
  };

  const handleCloseSuccess = () => {
    setSubmitted(false);
    setSchoolDetails({ schoolName: '', board: '', state: '', district: '', city: '', address: '', principalName: '', principalMobile: '', principalEmail: '' });
    setCoordinatorDetails({ name: '', designation: '', mobile: '', email: '' });
    setSelectedInterests([]);
  };

  const scrollToForm = () => {
    document.getElementById('partner-registration-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
              <button type="button" onClick={scrollToForm} style={styles.heroCta} className="for-schools-hero-cta-btn">
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
              <button type="button" onClick={scrollToForm} style={{ ...styles.oppArrowBtn, background: '#1d4ed8' }}>
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
              <button type="button" onClick={scrollToForm} style={{ ...styles.oppArrowBtn, background: '#f59e0b' }}>
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
              <button type="button" onClick={scrollToForm} style={{ ...styles.oppArrowBtn, background: '#059669' }}>
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

      {/* =========================================================== */}
      {/* 4. DARK CTA BANNER WITH STATS                                */}
      {/* =========================================================== */}
      <section style={styles.ctaBanner}>
        <div style={styles.ctaBgWrapper}>
          <img src={ctaBoyImg} alt="Student looking towards the future" style={styles.ctaBgImg} />
          <div style={styles.ctaBgOverlay} />
        </div>

        <div style={styles.ctaContainer} className="for-schools-cta-container">
          <div style={styles.ctaLeftScript}>
            <span style={{ color: '#ffffff' }}>Let's Create</span><br />
            <span style={{ color: '#fbbf24' }}>More Opportunities</span><br />
            <span style={{ color: '#ffffff' }}>for Every Child</span>
          </div>

          <div style={styles.ctaCenterCol}>
            <h3 style={styles.ctaCenterTitle}>Join a Growing Network of Progressive Schools</h3>
            <p style={styles.ctaCenterDesc}>
              Be a part of a movement that recognises talent, encourages innovation, and shapes the leaders of tomorrow.
            </p>
            <button type="button" onClick={scrollToForm} style={styles.ctaButtonGold}>
              BECOME A PARTNER SCHOOL <ArrowRight size={16} />
            </button>
          </div>

          <div style={styles.ctaStatsRow} className="for-schools-cta-stats">
            <div style={styles.ctaStatItem}>
              <div style={styles.ctaStatIconCircle}><Building size={20} color="#0f172a" /></div>
              <div style={styles.ctaStatNumber}>5</div>
              <div style={styles.ctaStatLabel}>States + 1 UT</div>
            </div>
            <div style={styles.ctaStatItem}>
              <div style={styles.ctaStatIconCircle}><Users size={20} color="#0f172a" /></div>
              <div style={styles.ctaStatNumber}>Thousands</div>
              <div style={styles.ctaStatLabel}>of Schools</div>
            </div>
            <div style={styles.ctaStatItem}>
              <div style={styles.ctaStatIconCircle}><GraduationCap size={20} color="#0f172a" /></div>
              <div style={styles.ctaStatNumber}>Lakh+</div>
              <div style={styles.ctaStatLabel}>Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* 5. PARTNER SCHOOL REGISTRATION FORM                          */}
      {/* =========================================================== */}
      <section id="partner-registration-form" style={styles.formSection}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.formTitle}>Partner School Registration</h2>
          <p style={styles.formSubtitle}>Fill in the details below to express your interest in partnering with Technik Olympiad.</p>

          <form onSubmit={handleSubmitInterest} style={styles.formCard}>
            {formError && <div style={styles.formErrorAlert}>{formError}</div>}

            <div style={styles.formColumnsGrid} className="for-schools-form-columns">

              {/* Column 1: School Details */}
              <div style={styles.formColumn}>
                <div style={styles.formColHeader}>
                  <Building2 size={18} color="#1d4ed8" />
                  <span>School Details</span>
                </div>

                <div style={styles.formFieldGrid} className="for-schools-field-grid">
                  <div style={{ ...styles.fieldGroup, gridColumn: '1 / -1' }}>
                    <label style={styles.fieldLabel}>School Name <span style={styles.req}>*</span></label>
                    <input type="text" style={styles.input} placeholder="Enter school name"
                      value={schoolDetails.schoolName}
                      onChange={(e) => setSchoolDetails({ ...schoolDetails, schoolName: e.target.value })} />
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.fieldLabel}>Board <span style={styles.req}>*</span></label>
                    <select style={styles.select} value={schoolDetails.board}
                      onChange={(e) => setSchoolDetails({ ...schoolDetails, board: e.target.value })}>
                      <option value="">Select Board</option>
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                      <option value="State Board">State Board</option>
                      <option value="IB">IB</option>
                      <option value="IGCSE">IGCSE</option>
                    </select>
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.fieldLabel}>State <span style={styles.req}>*</span></label>
                    <select style={styles.select} value={schoolDetails.state}
                      onChange={(e) => setSchoolDetails({ ...schoolDetails, state: e.target.value })}>
                      <option value="">Select State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Delhi">Delhi</option>
                    </select>
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.fieldLabel}>District <span style={styles.req}>*</span></label>
                    <input type="text" style={styles.input} placeholder="Enter district"
                      value={schoolDetails.district}
                      onChange={(e) => setSchoolDetails({ ...schoolDetails, district: e.target.value })} />
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.fieldLabel}>City <span style={styles.req}>*</span></label>
                    <input type="text" style={styles.input} placeholder="Enter city"
                      value={schoolDetails.city}
                      onChange={(e) => setSchoolDetails({ ...schoolDetails, city: e.target.value })} />
                  </div>

                  <div style={{ ...styles.fieldGroup, gridColumn: '1 / -1' }}>
                    <label style={styles.fieldLabel}>School Address <span style={styles.req}>*</span></label>
                    <input type="text" style={styles.input} placeholder="Enter complete address"
                      value={schoolDetails.address}
                      onChange={(e) => setSchoolDetails({ ...schoolDetails, address: e.target.value })} />
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.fieldLabel}>Principal Name <span style={styles.req}>*</span></label>
                    <input type="text" style={styles.input} placeholder="Enter principal name"
                      value={schoolDetails.principalName}
                      onChange={(e) => setSchoolDetails({ ...schoolDetails, principalName: e.target.value })} />
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.fieldLabel}>Principal Mobile <span style={styles.req}>*</span></label>
                    <input type="tel" style={styles.input} placeholder="Enter mobile number"
                      value={schoolDetails.principalMobile}
                      onChange={(e) => setSchoolDetails({ ...schoolDetails, principalMobile: e.target.value })} />
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.fieldLabel}>Principal Email <span style={styles.req}>*</span></label>
                    <input type="email" style={styles.input} placeholder="Enter email address"
                      value={schoolDetails.principalEmail}
                      onChange={(e) => setSchoolDetails({ ...schoolDetails, principalEmail: e.target.value })} />
                  </div>
                </div>
              </div>

              {/* Column 2: Coordinator Details */}
              <div style={styles.formColumn}>
                <div style={styles.formColHeader}>
                  <User size={18} color="#1d4ed8" />
                  <span>Coordinator Details</span>
                </div>

                <div style={styles.formFieldGrid} className="for-schools-field-grid">
                  <div style={styles.fieldGroup}>
                    <label style={styles.fieldLabel}>Coordinator Name <span style={styles.req}>*</span></label>
                    <input type="text" style={styles.input} placeholder="Enter coordinator name"
                      value={coordinatorDetails.name}
                      onChange={(e) => setCoordinatorDetails({ ...coordinatorDetails, name: e.target.value })} />
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.fieldLabel}>Designation</label>
                    <input type="text" style={styles.input} placeholder="Enter designation"
                      value={coordinatorDetails.designation}
                      onChange={(e) => setCoordinatorDetails({ ...coordinatorDetails, designation: e.target.value })} />
                  </div>

                  <div style={{ ...styles.fieldGroup, gridColumn: '1 / -1' }}>
                    <label style={styles.fieldLabel}>Mobile Number <span style={styles.req}>*</span></label>
                    <input type="tel" style={styles.input} placeholder="Enter mobile number"
                      value={coordinatorDetails.mobile}
                      onChange={(e) => setCoordinatorDetails({ ...coordinatorDetails, mobile: e.target.value })} />
                  </div>

                  <div style={{ ...styles.fieldGroup, gridColumn: '1 / -1' }}>
                    <label style={styles.fieldLabel}>Email ID <span style={styles.req}>*</span></label>
                    <input type="email" style={styles.input} placeholder="Enter email address"
                      value={coordinatorDetails.email}
                      onChange={(e) => setCoordinatorDetails({ ...coordinatorDetails, email: e.target.value })} />
                  </div>
                </div>
              </div>

              {/* Column 3: Partnership Interest */}
              <div style={styles.formColumn}>
                <div style={styles.formColHeader}>
                  <Handshake size={18} color="#1d4ed8" />
                  <span>Partnership Interest</span>
                </div>
                <p style={styles.interestHint}>Select the partnership option(s) you are interested in:</p>

                <div style={styles.interestList}>
                  {partnershipOptions.map((option) => (
                    <label key={option} style={styles.interestCheckRow}>
                      <input
                        type="checkbox"
                        checked={selectedInterests.includes(option)}
                        onChange={() => toggleInterest(option)}
                        style={styles.interestCheckbox}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            <div style={styles.formActionsRow}>
              <button type="submit" style={styles.submitInterestBtn}>
                SUBMIT INTEREST <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* SUCCESS CONFIRMATION MODAL */}
      {submitted && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalCard}>
            <button type="button" onClick={handleCloseSuccess} style={styles.modalCloseBtn}>
              <X size={18} />
            </button>
            <div style={styles.modalSuccessIcon}>
              <CheckCircle size={40} color="#ffffff" />
            </div>
            <h3 style={styles.modalTitle}>Thank You for Your Interest!</h3>
            <p style={styles.modalDesc}>
              We've received {schoolDetails.schoolName || 'your school'}'s partnership interest. Our team will reach out to
              <strong> {coordinatorDetails.email || 'your coordinator email'}</strong> within 2-3 business days.
            </p>
            <button type="button" onClick={handleCloseSuccess} style={styles.modalActionBtn}>
              Close
            </button>
          </div>
        </div>
      )}

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
    padding: '3.5rem 0',
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
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1.75rem 1rem',
  },
  whyIconItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '0.75rem',
  },
  whyIconCircle: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: '#eaf3ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whyIconLabel: {
    fontSize: '0.85rem',
    fontWeight: 700,
    color: '#1e293b',
    lineHeight: '1.35',
    maxWidth: '140px',
  },

  /* =========================================================== */
  /* 4. CTA BANNER                                                */
  /* =========================================================== */
  ctaBanner: {
    position: 'relative',
    minHeight: '340px',
    background: '#041026',
    color: '#ffffff',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    padding: '3rem 0',
  },
  ctaBgWrapper: {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
  },
  ctaBgImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 30%',
  },
  ctaBgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(120deg, rgba(4, 16, 38, 0.95) 0%, rgba(4, 16, 38, 0.88) 40%, rgba(4, 16, 38, 0.55) 70%, rgba(4, 16, 38, 0.85) 100%)',
  },
  ctaContainer: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: '1fr 1.4fr 1fr',
    gap: '2rem',
    alignItems: 'center',
  },
  ctaLeftScript: {
    fontFamily: 'Georgia, serif',
    fontStyle: 'italic',
    fontSize: '1.3rem',
    fontWeight: 700,
    lineHeight: '1.4',
  },
  ctaCenterCol: {
    textAlign: 'center',
  },
  ctaCenterTitle: {
    fontSize: '1.4rem',
    fontWeight: 800,
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.65rem',
    lineHeight: '1.35',
  },
  ctaCenterDesc: {
    fontSize: '0.88rem',
    color: '#cbd5e1',
    lineHeight: '1.55',
    marginBottom: '1.25rem',
  },
  ctaButtonGold: {
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    color: '#0f172a',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '0.82rem',
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
  },
  ctaStatsRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  ctaStatItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '12px',
    padding: '0.75rem 0.5rem',
  },
  ctaStatIconCircle: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: '#fbbf24',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.4rem',
  },
  ctaStatNumber: {
    fontSize: '1.15rem',
    fontWeight: 900,
    color: '#fbbf24',
    fontFamily: 'var(--font-heading)',
  },
  ctaStatLabel: {
    fontSize: '0.72rem',
    color: '#e2e8f0',
    fontWeight: 600,
  },

  /* =========================================================== */
  /* 5. REGISTRATION FORM                                         */
  /* =========================================================== */
  formSection: {
    padding: '3.5rem 0 5rem 0',
    background: '#f8fafc',
  },
  formTitle: {
    fontSize: '1.6rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.4rem',
  },
  formSubtitle: {
    fontSize: '0.88rem',
    color: '#64748b',
    marginBottom: '1.75rem',
  },
  formCard: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
    boxSizing: 'border-box',
  },
  formErrorAlert: {
    background: '#fef2f2',
    border: '1px solid #fca5a5',
    color: '#991b1b',
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    fontSize: '0.85rem',
    fontWeight: 600,
    marginBottom: '1.5rem',
  },
  formColumnsGrid: {
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr 1fr',
    gap: '2rem',
  },
  formColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  formColHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1rem',
    fontWeight: 800,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    marginBottom: '1.1rem',
    paddingBottom: '0.6rem',
    borderBottom: '1px solid #f1f5f9',
  },
  formFieldGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
  },
  fieldLabel: {
    fontSize: '0.78rem',
    fontWeight: 700,
    color: '#334155',
  },
  req: {
    color: '#ef4444',
  },
  input: {
    width: '100%',
    height: '38px',
    padding: '0 0.7rem',
    borderRadius: '7px',
    border: '1px solid #cbd5e1',
    fontSize: '0.83rem',
    color: '#0f172a',
    outline: 'none',
    background: '#ffffff',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  },
  select: {
    width: '100%',
    height: '38px',
    padding: '0 0.6rem',
    borderRadius: '7px',
    border: '1px solid #cbd5e1',
    fontSize: '0.83rem',
    color: '#0f172a',
    outline: 'none',
    background: '#ffffff',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  },
  interestHint: {
    fontSize: '0.78rem',
    color: '#64748b',
    marginBottom: '0.85rem',
    lineHeight: '1.4',
  },
  interestList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.65rem',
  },
  interestCheckRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.55rem',
    fontSize: '0.83rem',
    color: '#334155',
    cursor: 'pointer',
    lineHeight: '1.4',
  },
  interestCheckbox: {
    marginTop: '2px',
    accentColor: '#0c1e45',
    cursor: 'pointer',
    flexShrink: 0,
  },
  formActionsRow: {
    marginTop: '2rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #f1f5f9',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  submitInterestBtn: {
    background: '#0c1e45',
    color: '#ffffff',
    border: 'none',
    padding: '0.85rem 2rem',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '0.88rem',
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6rem',
    boxShadow: '0 6px 18px rgba(12, 30, 69, 0.3)',
  },

  /* SUCCESS MODAL */
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(15, 23, 42, 0.75)',
    backdropFilter: 'blur(6px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '1.5rem',
  },
  modalCard: {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '2.75rem 2.25rem',
    maxWidth: '460px',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)',
  },
  modalCloseBtn: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: '#f1f5f9',
    border: 'none',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#64748b',
  },
  modalSuccessIcon: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: '#10b981',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.25rem auto',
    boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
  },
  modalTitle: {
    fontSize: '1.3rem',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '0.6rem',
    fontFamily: 'var(--font-heading)',
  },
  modalDesc: {
    fontSize: '0.88rem',
    color: '#475569',
    lineHeight: '1.55',
    marginBottom: '1.75rem',
  },
  modalActionBtn: {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '10px',
    background: '#0c1e45',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '0.88rem',
    fontFamily: 'var(--font-heading)',
    border: 'none',
    cursor: 'pointer',
  }
};

// Responsive tweaks
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
      .for-schools-cta-container {
        grid-template-columns: 1fr !important;
        text-align: center !important;
        gap: 1.5rem !important;
      }
      .for-schools-cta-stats {
        flex-direction: row !important;
        justify-content: center !important;
        flex-wrap: wrap !important;
      }
      .for-schools-cta-stats > div {
        flex: 1 1 140px !important;
      }
      .for-schools-form-columns {
        grid-template-columns: 1fr !important;
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
      .for-schools-field-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `;
}
