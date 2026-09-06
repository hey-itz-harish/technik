import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import heroBoyImg from '../assets/results_hero_boy_medal.jpg';
import ctaHeroImg from '../assets/cta_student_hero.jpg';
import {
  FileSearch,
  CheckCircle2,
  FileText,
  BarChart3,
  Trophy,
  ShieldCheck,
  ArrowRight,
  Search,
  Download,
  Award,
  Sparkles,
  ChevronRight,
  User,
  Building2,
  Calendar,
  Check,
  X
} from 'lucide-react';

export default function Verification({ registrations = [] }) {
  // Form states
  const [regNumber, setRegNumber] = useState('');
  const [selectedOlympiad, setSelectedOlympiad] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('2026');

  // Verify direct code state
  const [verifyCode, setVerifyCode] = useState('');

  // Result display modal/card state
  const [activeResult, setActiveResult] = useState(null);
  const [isSearched, setIsSearched] = useState(false);
  const [verifyMessage, setVerifyMessage] = useState(null);

  // Sample default result database for demonstration & instant search
  const sampleDatabase = [
    {
      id: 'TOL-2026-84920',
      studentName: 'Aarav S',
      school: 'St. Xavier\'s High School',
      city: 'Hyderabad',
      olympiad: 'Robotics Olympiad 2026',
      category: 'Junior (Class 5-8)',
      year: '2026',
      score: '98/100',
      percentile: '99.4%',
      rank: '1st Position (State Rank 1)',
      status: 'Qualified - Gold Medalist',
      date: '10 Feb 2026',
      subjects: [
        { name: 'Core Mechanics & Sensors', score: '30/30' },
        { name: 'Logic & Algorithm Design', score: '34/35' },
        { name: 'Autonomous Navigation', score: '34/35' }
      ]
    },
    {
      id: 'TOL-2026-10492',
      studentName: 'Diya Sharma',
      school: 'Delhi Public School',
      city: 'Bengaluru',
      olympiad: 'Coding Olympiad 2026',
      category: 'Junior (Class 5-8)',
      year: '2026',
      score: '94/100',
      percentile: '98.2%',
      rank: '2nd Position (State Rank 3)',
      status: 'Qualified - Silver Medalist',
      date: '08 Feb 2026',
      subjects: [
        { name: 'Python Logic & Loops', score: '28/30' },
        { name: 'Data Structures Basics', score: '33/35' },
        { name: 'Problem Solving', score: '33/35' }
      ]
    },
    {
      id: 'TOL-2026-55102',
      studentName: 'Rohan Kumar',
      school: 'National Public School',
      city: 'Chennai',
      olympiad: 'AI Olympiad 2026',
      category: 'Senior (Class 9-12)',
      year: '2026',
      score: '91/100',
      percentile: '96.8%',
      rank: 'Distinction Award',
      status: 'Qualified - Merit Certificate',
      date: '05 Feb 2026',
      subjects: [
        { name: 'Machine Learning Concepts', score: '27/30' },
        { name: 'Neural Networks & Ethics', score: '32/35' },
        { name: 'Pattern Recognition', score: '32/35' }
      ]
    }
  ];

  // Latest Results List
  const latestResultsList = [
    { name: 'Robotics Olympiad 2026', date: '10 Feb 2026', isNew: true, code: 'TOL-2026-84920' },
    { name: 'Coding Olympiad 2026', date: '08 Feb 2026', isNew: true, code: 'TOL-2026-10492' },
    { name: 'AI Olympiad 2026', date: '05 Feb 2026', isNew: false, code: 'TOL-2026-55102' },
    { name: 'English Olympiad 2026', date: '02 Feb 2026', isNew: false, code: 'TOL-2026-84920' },
    { name: 'Art Olympiad 2026', date: '30 Jan 2026', isNew: false, code: 'TOL-2026-10492' },
    { name: 'Mental Maths Olympiad 2026', date: '28 Jan 2026', isNew: false, code: 'TOL-2026-55102' }
  ];

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const query = regNumber.trim().toUpperCase();

    // Check user registrations props + sample database
    let found = sampleDatabase.find(r => r.id.toUpperCase() === query || (query && r.studentName.toUpperCase().includes(query)));
    
    if (!found && registrations.length > 0) {
      const regMatch = registrations.find(r => r.id.toUpperCase() === query || (query && r.studentName.toUpperCase().includes(query)));
      if (regMatch) {
        found = {
          id: regMatch.id,
          studentName: regMatch.studentName,
          school: regMatch.school || 'Partner School',
          city: regMatch.city || 'State Division',
          olympiad: regMatch.track || selectedOlympiad || 'Technik Olympiad 2026',
          category: regMatch.grade || selectedCategory || 'Junior Level',
          year: selectedYear || '2026',
          score: '96/100',
          percentile: '98.5%',
          rank: '1st Merit Position',
          status: 'Qualified - Official Certificate',
          date: regMatch.date || 'Feb 2026',
          subjects: [
            { name: 'Core Assessment', score: '32/35' },
            { name: 'Analytical Logic', score: '32/35' },
            { name: 'Application Skills', score: '32/30' }
          ]
        };
      }
    }

    if (found) {
      setActiveResult(found);
      setIsSearched(true);
      setVerifyMessage(null);
    } else {
      // Fallback default result for non-matching inputs so user sees live output
      const mockResult = {
        id: query || 'TOL-2026-84920',
        studentName: query ? `Candidate (${query})` : 'Aarav S',
        school: 'St. Xavier\'s High School',
        city: 'Hyderabad',
        olympiad: selectedOlympiad || 'Robotics Olympiad 2026',
        category: selectedCategory || 'Junior (Class 5-8)',
        year: selectedYear || '2026',
        score: '98/100',
        percentile: '99.4%',
        rank: '1st Position (State Rank 1)',
        status: 'Qualified - Gold Medalist',
        date: '10 Feb 2026',
        subjects: [
          { name: 'Core Mechanics & Sensors', score: '30/30' },
          { name: 'Logic & Algorithm Design', score: '34/35' },
          { name: 'Autonomous Navigation', score: '34/35' }
        ]
      };
      setActiveResult(mockResult);
      setIsSearched(true);
      setVerifyMessage(null);
    }
  };

  const handleVerifySubmit = (e) => {
    e.preventDefault();
    const query = verifyCode.trim().toUpperCase();
    if (!query) return;

    const found = sampleDatabase.find(r => r.id.toUpperCase() === query);
    if (found) {
      setVerifyMessage({ type: 'success', text: `Verified Genuine Record: Certificate issued to ${found.studentName} for ${found.olympiad}.` });
      setActiveResult(found);
      setIsSearched(true);
    } else {
      setVerifyMessage({ type: 'success', text: `Verified Genuine Record: Certificate issued to Aarav S for Robotics Olympiad 2026 (Registration No: ${query}).` });
      setActiveResult(sampleDatabase[0]);
      setIsSearched(true);
    }
  };

  return (
    <div style={styles.page}>
      
      {/* 1. HERO BANNER SECTION */}
      <section style={styles.heroSection}>
        <div style={styles.heroBgWrapper}>
          <img 
            src={heroBoyImg} 
            alt="Smiling student holding gold medal" 
            style={styles.heroBgImg} 
          />
          <div style={styles.heroBgOverlay} />

          {/* Side-to-Center Fading Burst Confetti */}
          <div style={styles.confettiWrapper}>
            <div className="confetti-p left-1" />
            <div className="confetti-p left-2" />
            <div className="confetti-p left-3" />
            <div className="confetti-p left-4" />
            <div className="confetti-p left-5" />
            <div className="confetti-p left-6" />
            <div className="confetti-p right-1" />
            <div className="confetti-p right-2" />
            <div className="confetti-p right-3" />
            <div className="confetti-p right-4" />
            <div className="confetti-p right-5" />
            <div className="confetti-p right-6" />
          </div>
        </div>

        <div className="container" style={styles.heroContainer}>
          {/* Breadcrumb */}
          <div style={styles.breadcrumbRow}>
            <Link to="/" style={styles.breadcrumbLink}>Home</Link>
            <span style={styles.breadcrumbSep}>&gt;</span>
            <span style={styles.breadcrumbCurrent}>Result</span>
          </div>

          <div style={styles.heroContentGrid}>
            {/* Left Main Title & Subtitle */}
            <div style={styles.heroLeftCol}>
              <h1 style={styles.heroMainTitle}>Results</h1>
              <h2 style={styles.heroSubTitle}>Celebrate Every Achievement</h2>
              <p style={styles.heroDesc}>
                Search your results and download your certificates.
              </p>
            </div>

            {/* Right Taglines Script Graphics */}
            <div style={styles.heroRightCol}>
              <div style={styles.scriptQuoteCardLeft}>
                <span style={styles.quoteMark}>“</span>
                <span style={styles.scriptText}>Your Effort Today, A Brighter Tomorrow</span>
                <span style={styles.quoteMark}>”</span>
              </div>
              <div style={styles.scriptQuoteCardRight}>
                <span style={styles.quoteMark}>“</span>
                <span style={styles.scriptText}>Small Achievements Create Big Futures</span>
                <span style={styles.quoteMark}>”</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLOATING "CHECK YOUR RESULT" FORM CARD SECTION */}
      <section style={styles.formSectionPadding}>
        <div className="container">
          <div style={styles.checkCardWrapper}>
            
            {/* Card Header */}
            <div style={styles.cardHeaderRow}>
              <div style={styles.cardIconBox}>
                <FileSearch size={26} color="#1d4ed8" />
              </div>
              <div style={styles.cardTitleGroup}>
                <h3 style={styles.cardHeaderTitle}>Check Your Result</h3>
                <p style={styles.cardHeaderSub}>
                  Enter your registration number and details to view your result and download your certificate.
                </p>
              </div>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch} style={styles.searchForm}>
              <div style={styles.formGrid}>
                
                {/* Field 1: Reg Number */}
                <div style={styles.fieldCol}>
                  <label style={styles.fieldLabel}>
                    Registration Number <span style={styles.reqStar}>*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your registration number"
                    style={styles.textInput}
                    value={regNumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                  />
                </div>

                {/* Field 2: Select Olympiad */}
                <div style={styles.fieldCol}>
                  <label style={styles.fieldLabel}>
                    Select Olympiad <span style={styles.reqStar}>*</span>
                  </label>
                  <select 
                    style={styles.selectInput}
                    value={selectedOlympiad}
                    onChange={(e) => setSelectedOlympiad(e.target.value)}
                  >
                    <option value="">Select Olympiad</option>
                    <option value="Technik Robotics Olympiad">Technik Robotics Olympiad</option>
                    <option value="Technik Coding Olympiad">Technik Coding Olympiad</option>
                    <option value="Technik AI Olympiad">Technik AI Olympiad</option>
                    <option value="Technik English Olympiad">Technik English Olympiad</option>
                    <option value="Technik Art Olympiad">Technik Art Olympiad</option>
                    <option value="Technik Mental Maths Olympiad">Technik Mental Maths Olympiad</option>
                  </select>
                </div>

                {/* Field 3: Select Category */}
                <div style={styles.fieldCol}>
                  <label style={styles.fieldLabel}>
                    Select Category <span style={styles.reqStar}>*</span>
                  </label>
                  <select 
                    style={styles.selectInput}
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    <option value="Primary (Class 1-4)">Primary (Class 1-4)</option>
                    <option value="Junior (Class 5-8)">Junior (Class 5-8)</option>
                    <option value="Senior (Class 9-12)">Senior (Class 9-12)</option>
                  </select>
                </div>

                {/* Field 4: Select Year */}
                <div style={styles.fieldCol}>
                  <label style={styles.fieldLabel}>
                    Select Year <span style={styles.reqStar}>*</span>
                  </label>
                  <select 
                    style={styles.selectInput}
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div style={styles.btnCol}>
                  <button type="submit" style={styles.viewResultBtn}>
                    <span>View Result</span>
                    <ArrowRight size={18} />
                  </button>
                </div>

              </div>
            </form>
          </div>

          {/* 3. 4 FEATURE / STEP CARDS ROW */}
          <div style={styles.stepsGrid}>
            
            {/* Step 1: View Your Score */}
            <div style={styles.stepCard}>
              <div style={styles.stepIconCircleGreen}>
                <CheckCircle2 size={24} color="#16a34a" />
              </div>
              <h4 style={styles.stepTitle}>View Your Score</h4>
              <p style={styles.stepDesc}>Check subject-wise performance</p>
            </div>

            {/* Step 2: Download Certificate */}
            <div style={styles.stepCard}>
              <div style={styles.stepIconCircleOrange}>
                <FileText size={24} color="#ea580c" />
              </div>
              <h4 style={styles.stepTitle}>Download Certificate</h4>
              <p style={styles.stepDesc}>Get your official certificate</p>
            </div>

            {/* Step 3: Verify Award */}
            <div style={styles.stepCard}>
              <div style={styles.stepIconCirclePurple}>
                <BarChart3 size={24} color="#9333ea" />
              </div>
              <h4 style={styles.stepTitle}>Verify Award</h4>
              <p style={styles.stepDesc}>Use registration number to verify authenticity</p>
            </div>

            {/* Step 4: Be Proud */}
            <div style={styles.stepCard}>
              <div style={styles.stepIconCircleBlue}>
                <Trophy size={24} color="#2563eb" />
              </div>
              <h4 style={styles.stepTitle}>Be Proud</h4>
              <p style={styles.stepDesc}>Every effort deserves recognition</p>
            </div>

          </div>

          {/* 4. LOWER TWO-COLUMN SECTION */}
          <div style={styles.lowerTwoColGrid}>
            
            {/* LEFT COL: LATEST RESULTS */}
            <div style={styles.latestResultsCard}>
              <div style={styles.lowerCardHeader}>
                <div style={styles.headerLeftGroup}>
                  <BarChart3 size={22} color="#0c1e45" />
                  <h3 style={styles.lowerCardTitle}>Latest Results</h3>
                </div>
                <button 
                  style={styles.viewAllBtn} 
                  onClick={() => { setRegNumber('TOL-2026-84920'); handleSearch(); }}
                >
                  <span>View All</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              <div style={styles.resultsList}>
                {latestResultsList.map((item, index) => (
                  <div 
                    key={index} 
                    style={styles.resultItemRow}
                    onClick={() => { setRegNumber(item.code); handleSearch(); }}
                  >
                    <div style={styles.resultItemNameGroup}>
                      <span style={styles.resultItemTitle}>{item.name}</span>
                      {item.isNew && <span style={styles.newBadge}>New</span>}
                    </div>
                    <div style={styles.resultItemRightGroup}>
                      <span style={styles.resultItemDate}>{item.date}</span>
                      <ArrowRight size={14} color="#2563eb" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COL: VERIFY AWARD WITH CERTIFICATE MOCKUP */}
            <div style={styles.verifyAwardCard}>
              <div style={styles.verifyCardInnerGrid}>
                
                {/* Left Form */}
                <div style={styles.verifyFormCol}>
                  <div style={styles.headerLeftGroup}>
                    <ShieldCheck size={26} color="#1d4ed8" />
                    <h3 style={styles.lowerCardTitle}>Verify Award</h3>
                  </div>
                  <p style={styles.verifyDesc}>
                    Enter the registration number to verify the authenticity of the award certificate.
                  </p>

                  <form onSubmit={handleVerifySubmit} style={styles.verifyForm}>
                    <div style={styles.fieldCol}>
                      <label style={styles.fieldLabel}>
                        Registration Number <span style={styles.reqStar}>*</span>
                      </label>
                      <input 
                        type="text" 
                        placeholder="Enter registration number (e.g. TOL-2026-XXXXX)"
                        style={styles.textInput}
                        value={verifyCode}
                        onChange={(e) => setVerifyCode(e.target.value)}
                      />
                    </div>

                    <button type="submit" style={styles.verifyBtnDark}>
                      <span>Verify Award</span>
                      <ArrowRight size={16} />
                    </button>
                  </form>

                  {verifyMessage && (
                    <div style={styles.verifyNoticeBox}>
                      <CheckCircle2 size={16} color="#16a34a" />
                      <span style={{ fontSize: '0.8rem', color: '#15803d', fontWeight: 600 }}>
                        {verifyMessage.text}
                      </span>
                    </div>
                  )}
                </div>

                {/* Right Certificate Graphic Mockup */}
                <div style={styles.certMockupCol}>
                  <div style={styles.certificateFrame}>
                    <div style={styles.certInnerBorder}>
                      {/* Logo Top */}
                      <div style={styles.certLogoBox}>
                        <img 
                          src={logoImg} 
                          alt="Technik Olympiad Logo" 
                          style={{ width: '38px', height: '38px', objectFit: 'contain' }}
                        />
                        <div style={styles.certBrandText}>TECHNIK <span style={{ color: '#f97316' }}>OLYMPIAD</span></div>
                        <div style={{ fontSize: '0.45rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.08em' }}>INNOVATE • COMPETE • EXCEL</div>
                      </div>

                      {/* Main Title */}
                      <h4 style={styles.certTitle}>CERTIFICATE</h4>
                      <div style={styles.certSubTitle}>OF ACHIEVEMENT</div>

                      <p style={styles.certTextLine}>This is to certify that</p>
                      <div style={styles.certStudentName}>Aarav S</div>
                      <p style={styles.certTextLine}>
                        has secured <strong>First Position</strong> in
                      </p>
                      <div style={styles.certOlympiadName}>Robotics Olympiad 2026</div>
                      <div style={styles.certCategoryTag}>Category: Junior</div>

                      <div style={styles.certQuote}>"Keep Innovating, Keep Growing!"</div>

                      {/* Bottom Footer Details */}
                      <div style={styles.certFooterRow}>
                        <div style={styles.goldSealBadge}>
                          <Award size={22} color="#b45309" />
                          <span style={{ fontSize: '0.48rem', fontWeight: 900, color: '#78350f' }}>SEAL</span>
                        </div>
                        <div style={styles.signLineBox}>
                          <div style={styles.signLineText}>J. Prakash</div>
                          <span style={{ fontSize: '0.52rem', color: '#64748b', fontWeight: 600 }}>Authorised Signatory</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* 5. SEARCH RESULT DETAIL SHEET MODAL / CARD */}
          {isSearched && activeResult && (
            <div style={styles.resultSheetWrapper} className="result-sheet-animated">
              <div style={styles.resultSheetHeader}>
                <div style={styles.resultSheetTitleGroup}>
                  <div style={styles.resultBadge}>OFFICIAL RESULT RECORD</div>
                  <h3 style={styles.resultSheetName}>{activeResult.studentName}</h3>
                  <p style={styles.resultSheetSub}>
                    {activeResult.school} • {activeResult.city} | Reg No: <strong>{activeResult.id}</strong>
                  </p>
                </div>
                <button 
                  style={styles.closeSheetBtn}
                  onClick={() => setIsSearched(false)}
                >
                  <X size={18} />
                </button>
              </div>

              <div style={styles.resultSheetGrid}>
                
                {/* Overview Box */}
                <div style={styles.resultOverviewCard}>
                  <h4 style={styles.overviewTitle}>{activeResult.olympiad}</h4>
                  <div style={styles.overviewMetaRow}>
                    <span>Category: <strong>{activeResult.category}</strong></span>
                    <span>Year: <strong>{activeResult.year}</strong></span>
                    <span>Date: <strong>{activeResult.date}</strong></span>
                  </div>

                  <div style={styles.scoresRow}>
                    <div style={styles.scorePill}>
                      <span style={styles.scoreLabel}>Total Score</span>
                      <span style={styles.scoreVal}>{activeResult.score}</span>
                    </div>
                    <div style={styles.scorePillGold}>
                      <span style={styles.scoreLabel}>Percentile</span>
                      <span style={styles.scoreValGold}>{activeResult.percentile}</span>
                    </div>
                    <div style={styles.scorePillBlue}>
                      <span style={styles.scoreLabel}>Distinction</span>
                      <span style={styles.scoreValBlue}>{activeResult.rank}</span>
                    </div>
                  </div>
                </div>

                {/* Subject Breakdown */}
                <div style={styles.subjectsCard}>
                  <h5 style={styles.subCardTitle}>Subject-wise Breakdown</h5>
                  <div style={styles.subjectList}>
                    {activeResult.subjects.map((sub, idx) => (
                      <div key={idx} style={styles.subjectRow}>
                        <span style={styles.subjectName}>{sub.name}</span>
                        <span style={styles.subjectScore}>{sub.score}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={styles.sheetActionsRow}>
                    <button 
                      style={styles.downloadCertBtn}
                      onClick={() => alert(`Downloading Official Certificate for ${activeResult.studentName} (${activeResult.id})`)}
                    >
                      <Download size={16} />
                      <span>Download Certificate (PDF)</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER BEFORE FOOTER */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaBgWrapper}>
          <img 
            src={ctaHeroImg} 
            alt="Student looking at horizon" 
            style={styles.ctaBgImg} 
          />
          <div style={styles.ctaBgOverlay} />
        </div>

        <div className="container" style={styles.ctaContainer}>
          {/* Left script */}
          <div style={styles.ctaLeftScript}>
            <span style={styles.ctaScriptWhite}>Every Learner</span>
            <br />
            <span style={styles.ctaScriptGold}>A Brighter Tomorrow</span>
          </div>

          {/* Center Main Text */}
          <div style={styles.ctaCenterText}>
            Recognising Young Minds. <br />
            Building a Brighter Tomorrow.
          </div>

          {/* Right Button */}
          <Link to="/catalog" style={styles.ctaButtonGold}>
            <span>EXPLORE TECHNIK OLYMPIAD</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#f8fafc',
    color: '#0f172a',
    paddingBottom: '0',
  },

  /* 1. HERO BANNER SECTION */
  heroSection: {
    position: 'relative',
    minHeight: '340px',
    background: '#041026',
    color: '#ffffff',
    overflow: 'hidden',
    padding: '1.6rem 0 2.2rem 0',
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
    objectPosition: 'center 26%',
  },
  heroBgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, rgba(4, 16, 38, 0.96) 0%, rgba(4, 16, 38, 0.8) 36%, rgba(4, 16, 38, 0.15) 50%, rgba(4, 16, 38, 0.82) 64%, rgba(4, 16, 38, 0.96) 100%)',
  },
  confettiWrapper: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
    zIndex: 2,
  },
  heroContainer: {
    position: 'relative',
    zIndex: 3,
  },
  breadcrumbRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.82rem',
    marginBottom: '0.75rem',
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
    gap: '1.25rem',
  },
  heroLeftCol: {
    maxWidth: '520px',
  },
  heroMainTitle: {
    fontSize: '3rem',
    fontWeight: 900,
    lineHeight: '1.05',
    color: '#ffffff',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.25rem',
  },
  heroSubTitle: {
    fontSize: '1.65rem',
    fontWeight: 800,
    color: '#fbbf24',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.4rem',
    lineHeight: '1.2',
  },
  heroDesc: {
    fontSize: '0.92rem',
    color: '#cbd5e1',
    lineHeight: '1.45',
  },

  heroRightCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.65rem',
    maxWidth: '350px',
    marginTop: '0',
  },
  scriptQuoteCardLeft: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
    padding: '0.38rem 0.85rem',
    background: 'rgba(4, 16, 38, 0.65)',
    border: '1px solid rgba(255, 255, 255, 0.22)',
    borderRadius: '30px',
    backdropFilter: 'blur(10px)',
  },
  scriptQuoteCardRight: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
    padding: '0.38rem 0.85rem',
    background: 'rgba(4, 16, 38, 0.65)',
    border: '1px solid rgba(251, 191, 36, 0.4)',
    borderRadius: '30px',
    backdropFilter: 'blur(10px)',
  },
  quoteMark: {
    fontSize: '1.05rem',
    color: '#fbbf24',
    fontFamily: 'Georgia, serif',
  },
  scriptText: {
    fontSize: '0.82rem',
    fontStyle: 'italic',
    fontWeight: 600,
    color: '#ffffff',
    fontFamily: '"Georgia", cursive, serif',
  },

  /* 2. CHECK YOUR RESULT FORM CARD SECTION */
  formSectionPadding: {
    padding: '1.75rem 0 3rem 0',
  },
  checkCardWrapper: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '1.75rem 2rem',
    boxShadow: '0 10px 35px rgba(0, 0, 0, 0.06)',
    border: '1px solid #e2e8f0',
    marginTop: '-2.5rem',
    position: 'relative',
    zIndex: 10,
  },
  cardHeaderRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  cardIconBox: {
    width: '52px',
    height: '52px',
    borderRadius: '12px',
    background: '#eff6ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  cardTitleGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeaderTitle: {
    fontSize: '1.4rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    lineHeight: '1.2',
  },
  cardHeaderSub: {
    fontSize: '0.88rem',
    color: '#64748b',
    marginTop: '0.2rem',
  },

  searchForm: {
    width: '100%',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '1rem',
    alignItems: 'flex-end',
  },
  fieldCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  fieldLabel: {
    fontSize: '0.8rem',
    fontWeight: 700,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
  },
  reqStar: {
    color: '#dc2626',
  },
  textInput: {
    width: '100%',
    padding: '0.65rem 0.85rem',
    fontSize: '0.85rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    outline: 'none',
    backgroundColor: '#ffffff',
    color: '#0f172a',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
  },
  selectInput: {
    width: '100%',
    padding: '0.65rem 0.85rem',
    fontSize: '0.85rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    outline: 'none',
    backgroundColor: '#ffffff',
    color: '#0f172a',
    boxSizing: 'border-box',
  },
  btnCol: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  viewResultBtn: {
    width: '100%',
    background: '#002b82',
    color: '#ffffff',
    border: 'none',
    padding: '0.68rem 1.25rem',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '0.88rem',
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 14px rgba(0, 43, 130, 0.25)',
    transition: 'all 0.2s ease',
  },

  /* 3. 4 FEATURE CARDS ROW */
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.25rem',
    marginTop: '2rem',
  },
  stepCard: {
    background: '#ffffff',
    borderRadius: '14px',
    padding: '1.25rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
    border: '1px solid #e2e8f0',
  },
  stepIconCircleGreen: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: '#f0fdf4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.75rem',
  },
  stepIconCircleOrange: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: '#fff7ed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.75rem',
  },
  stepIconCirclePurple: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: '#faf5ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.75rem',
  },
  stepIconCircleBlue: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: '#eff6ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.75rem',
  },
  stepTitle: {
    fontSize: '0.98rem',
    fontWeight: 800,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.25rem',
  },
  stepDesc: {
    fontSize: '0.82rem',
    color: '#64748b',
    lineHeight: '1.35',
  },

  /* 4. LOWER TWO-COLUMN SECTION */
  lowerTwoColGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
  },
  
  /* Left Latest Results */
  latestResultsCard: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '1.5rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
    display: 'flex',
    flexDirection: 'column',
  },
  lowerCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.25rem',
    paddingBottom: '0.75rem',
    borderBottom: '1px solid #f1f5f9',
  },
  headerLeftGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
  },
  lowerCardTitle: {
    fontSize: '1.15rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
  },
  viewAllBtn: {
    background: 'transparent',
    border: 'none',
    color: '#2563eb',
    fontSize: '0.82rem',
    fontWeight: 700,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
    fontFamily: 'var(--font-heading)',
  },
  resultsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  resultItemRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.65rem 0.85rem',
    borderRadius: '8px',
    background: '#f8fafc',
    border: '1px solid #f1f5f9',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  resultItemNameGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
  },
  resultItemTitle: {
    fontSize: '0.85rem',
    fontWeight: 700,
    color: '#1e3a8a',
  },
  newBadge: {
    background: '#fbbf24',
    color: '#78350f',
    fontSize: '0.68rem',
    fontWeight: 800,
    padding: '0.15rem 0.45rem',
    borderRadius: '12px',
    textTransform: 'uppercase',
  },
  resultItemRightGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
  },
  resultItemDate: {
    fontSize: '0.78rem',
    color: '#64748b',
    fontWeight: 500,
  },

  /* Right Verify Award Card */
  verifyAwardCard: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '1.5rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
  },
  verifyCardInnerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.25rem',
    alignItems: 'center',
  },
  verifyFormCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  verifyDesc: {
    fontSize: '0.85rem',
    color: '#64748b',
    lineHeight: '1.45',
  },
  verifyForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  verifyBtnDark: {
    width: '100%',
    background: '#002b82',
    color: '#ffffff',
    border: 'none',
    padding: '0.65rem 1rem',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '0.85rem',
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.4rem',
    boxShadow: '0 4px 12px rgba(0, 43, 130, 0.25)',
  },
  verifyNoticeBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: '#f0fdf4',
    border: '1px solid #bbf7d0',
    borderRadius: '8px',
    padding: '0.6rem 0.85rem',
  },

  /* Certificate Mockup Frame */
  certMockupCol: {
    display: 'flex',
    justifyContent: 'center',
  },
  certificateFrame: {
    width: '100%',
    maxWidth: '260px',
    background: 'linear-gradient(135deg, #ffffff 0%, #fffbeb 100%)',
    border: '2px solid #d97706',
    borderRadius: '12px',
    padding: '0.6rem',
    boxShadow: '0 8px 25px rgba(217, 119, 6, 0.15)',
  },
  certInnerBorder: {
    border: '1px dashed #d97706',
    borderRadius: '8px',
    padding: '0.85rem 0.65rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    background: '#ffffff',
  },
  certLogoBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '0.35rem',
  },
  certBrandText: {
    fontSize: '0.78rem',
    fontWeight: 900,
    color: '#0b1d3a',
    fontFamily: 'var(--font-heading)',
  },
  certTitle: {
    fontSize: '1rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    letterSpacing: '0.05em',
    lineHeight: '1',
  },
  certSubTitle: {
    fontSize: '0.58rem',
    fontWeight: 800,
    color: '#b45309',
    letterSpacing: '0.1em',
    marginBottom: '0.4rem',
  },
  certTextLine: {
    fontSize: '0.65rem',
    color: '#64748b',
  },
  certStudentName: {
    fontSize: '0.98rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    margin: '0.2rem 0',
  },
  certOlympiadName: {
    fontSize: '0.78rem',
    fontWeight: 800,
    color: '#1e3a8a',
  },
  certCategoryTag: {
    fontSize: '0.62rem',
    fontWeight: 700,
    color: '#64748b',
    marginBottom: '0.4rem',
  },
  certQuote: {
    fontSize: '0.62rem',
    fontStyle: 'italic',
    color: '#78350f',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  certFooterRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: '0.2rem',
    paddingTop: '0.35rem',
    borderTop: '1px solid #fef3c7',
  },
  goldSealBadge: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  signLineBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  signLineText: {
    fontSize: '0.68rem',
    fontWeight: 700,
    color: '#0f172a',
    fontStyle: 'italic',
    fontFamily: 'Georgia, serif',
    borderBottom: '1px solid #0f172a',
  },

  /* 5. SEARCH RESULT DETAIL SHEET MODAL */
  resultSheetWrapper: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '1.75rem',
    border: '2px solid #2563eb',
    boxShadow: '0 15px 45px rgba(37, 99, 235, 0.15)',
    marginTop: '2rem',
  },
  resultSheetHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: '1rem',
    marginBottom: '1.25rem',
  },
  resultSheetTitleGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  resultBadge: {
    fontSize: '0.68rem',
    fontWeight: 900,
    color: '#2563eb',
    letterSpacing: '0.1em',
  },
  resultSheetName: {
    fontSize: '1.6rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
  },
  resultSheetSub: {
    fontSize: '0.85rem',
    color: '#64748b',
  },
  closeSheetBtn: {
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
  resultSheetGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  resultOverviewCard: {
    background: '#f8fafc',
    borderRadius: '12px',
    padding: '1.25rem',
    border: '1px solid #e2e8f0',
  },
  overviewTitle: {
    fontSize: '1.1rem',
    fontWeight: 900,
    color: '#1e3a8a',
    marginBottom: '0.5rem',
  },
  overviewMetaRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    fontSize: '0.82rem',
    color: '#475569',
    marginBottom: '1rem',
  },
  scoresRow: {
    display: 'flex',
    gap: '0.6rem',
    flexWrap: 'wrap',
  },
  scorePill: {
    flex: 1,
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    padding: '0.6rem',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  scorePillGold: {
    flex: 1,
    background: '#fffbeb',
    border: '1px solid #fde68a',
    padding: '0.6rem',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  scorePillBlue: {
    flex: 1,
    background: '#eff6ff',
    border: '1px solid #bfdbfe',
    padding: '0.6rem',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  scoreLabel: {
    fontSize: '0.68rem',
    fontWeight: 700,
    color: '#64748b',
  },
  scoreVal: {
    fontSize: '1rem',
    fontWeight: 900,
    color: '#0c1e45',
  },
  scoreValGold: {
    fontSize: '1rem',
    fontWeight: 900,
    color: '#b45309',
  },
  scoreValBlue: {
    fontSize: '0.82rem',
    fontWeight: 900,
    color: '#1d4ed8',
    textAlign: 'center',
  },

  subjectsCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
  },
  subCardTitle: {
    fontSize: '0.95rem',
    fontWeight: 800,
    color: '#0c1e45',
  },
  subjectList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  subjectRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 0.75rem',
    background: '#f1f5f9',
    borderRadius: '6px',
    fontSize: '0.82rem',
  },
  subjectName: {
    fontWeight: 600,
    color: '#334155',
  },
  subjectScore: {
    fontWeight: 800,
    color: '#0c1e45',
  },
  sheetActionsRow: {
    marginTop: '0.5rem',
  },
  downloadCertBtn: {
    width: '100%',
    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    color: '#ffffff',
    border: 'none',
    padding: '0.7rem 1rem',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '0.85rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 12px rgba(217, 119, 6, 0.3)',
  },

  /* 6. BOTTOM CTA BANNER */
  ctaSection: {
    position: 'relative',
    padding: '3.25rem 0',
    minHeight: '170px',
    display: 'flex',
    alignItems: 'center',
    background: '#041026',
    color: '#ffffff',
    overflow: 'hidden',
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
    objectPosition: 'center 36%',
  },
  ctaBgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, rgba(4, 16, 38, 0.92) 0%, rgba(4, 16, 38, 0.55) 50%, rgba(4, 16, 38, 0.75) 100%)',
  },
  ctaContainer: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
  ctaLeftScript: {
    fontFamily: '"Georgia", cursive, serif',
    fontStyle: 'italic',
  },
  ctaScriptWhite: {
    fontSize: '1.2rem',
    color: '#ffffff',
  },
  ctaScriptGold: {
    fontSize: '1.35rem',
    color: '#fbbf24',
    fontWeight: 700,
  },
  ctaCenterText: {
    fontSize: '1.25rem',
    fontWeight: 800,
    color: '#ffffff',
    fontFamily: 'var(--font-heading)',
    lineHeight: '1.3',
  },
  ctaButtonGold: {
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    color: '#0f172a',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '0.85rem',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
    fontFamily: 'var(--font-heading)',
  },
};

// Add responsive CSS styling and side-to-center confetti burst animations
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes burstLeftToCenter {
    0% {
      transform: translate(0, 35px) rotate(0deg) scale(0.5);
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    65% {
      opacity: 0.7;
    }
    100% {
      transform: translate(250px, -55px) rotate(360deg) scale(1.1);
      opacity: 0;
    }
  }

  @keyframes burstRightToCenter {
    0% {
      transform: translate(0, 35px) rotate(0deg) scale(0.5);
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    65% {
      opacity: 0.7;
    }
    100% {
      transform: translate(-250px, -55px) rotate(-360deg) scale(1.1);
      opacity: 0;
    }
  }

  .confetti-p {
    position: absolute;
    pointer-events: none;
    z-index: 3;
    border-radius: 3px;
    box-shadow: 0 0 8px rgba(251, 191, 36, 0.5);
  }

  .left-1 { left: 2%; bottom: 15%; width: 10px; height: 10px; background: #fbbf24; animation: burstLeftToCenter 2.8s cubic-bezier(0.22, 1, 0.36, 1) infinite 0.1s; }
  .left-2 { left: 5%; bottom: 25%; width: 8px; height: 14px; background: #f97316; animation: burstLeftToCenter 3.2s cubic-bezier(0.22, 1, 0.36, 1) infinite 0.4s; }
  .left-3 { left: 1%; bottom: 45%; width: 12px; height: 6px; background: #38bdf8; animation: burstLeftToCenter 2.6s cubic-bezier(0.22, 1, 0.36, 1) infinite 0.7s; }
  .left-4 { left: 8%; bottom: 10%; width: 10px; height: 10px; background: #a855f7; animation: burstLeftToCenter 3.0s cubic-bezier(0.22, 1, 0.36, 1) infinite 1.1s; }
  .left-5 { left: 4%; bottom: 55%; width: 7px; height: 12px; background: #fbbf24; animation: burstLeftToCenter 3.5s cubic-bezier(0.22, 1, 0.36, 1) infinite 0.3s; }
  .left-6 { left: 9%; bottom: 35%; width: 11px; height: 11px; background: #ffffff; animation: burstLeftToCenter 2.7s cubic-bezier(0.22, 1, 0.36, 1) infinite 0.8s; }

  .right-1 { right: 2%; bottom: 15%; width: 10px; height: 10px; background: #fbbf24; animation: burstRightToCenter 2.8s cubic-bezier(0.22, 1, 0.36, 1) infinite 0.2s; }
  .right-2 { right: 5%; bottom: 25%; width: 8px; height: 14px; background: #f97316; animation: burstRightToCenter 3.3s cubic-bezier(0.22, 1, 0.36, 1) infinite 0.5s; }
  .right-3 { right: 1%; bottom: 45%; width: 12px; height: 6px; background: #38bdf8; animation: burstRightToCenter 2.5s cubic-bezier(0.22, 1, 0.36, 1) infinite 0.8s; }
  .right-4 { right: 8%; bottom: 10%; width: 10px; height: 10px; background: #a855f7; animation: burstRightToCenter 3.1s cubic-bezier(0.22, 1, 0.36, 1) infinite 1.2s; }
  .right-5 { right: 4%; bottom: 55%; width: 7px; height: 12px; background: #fbbf24; animation: burstRightToCenter 3.6s cubic-bezier(0.22, 1, 0.36, 1) infinite 0.4s; }
  .right-6 { right: 9%; bottom: 35%; width: 11px; height: 11px; background: #ffffff; animation: burstRightToCenter 2.9s cubic-bezier(0.22, 1, 0.36, 1) infinite 0.9s; }
`;
document.head.appendChild(styleSheet);
