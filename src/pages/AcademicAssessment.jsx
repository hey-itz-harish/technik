import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Users,
  GraduationCap,
  BarChart3,
  Blocks,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Download,
  Building2,
  CheckCircle2,
  X,
  FileText,
  Star,
  Award,
  Sparkles,
  TrendingUp,
  Target,
  Brain,
  HelpCircle,
  Clock,
  Check,
  School
} from 'lucide-react';

import heroStudentsImg from '../assets/assessment_hero_students.jpg';
import studentWritingImg from '../assets/student_writing_notebook.jpg';
import schoolCampusImg from '../assets/modern_school_campus.jpg';

export default function AcademicAssessment() {
  // FAQ accordion state: track which questions are open
  const [openFaqs, setOpenFaqs] = useState({ 0: true, 2: true });

  // Modal states
  const [selectedStage, setSelectedStage] = useState(null);
  const [showSampleReport, setShowSampleReport] = useState(false);
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [brochureEmail, setBrochureEmail] = useState('');
  const [brochureSent, setBrochureSent] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const stagesData = [
    {
      id: 'early-years',
      title: 'Early Years Assessment',
      pill: 'Playschool – UKG',
      pillColor: '#fef3c7',
      pillTextColor: '#b45309',
      desc: 'Foundational learning, developmental milestones and school readiness.',
      icon: Blocks,
      subjects: ['Sensory & Motor Skills', 'Phonics & Pre-Reading', 'Basic Numeracy', 'Pattern Recognition'],
      format: 'Interactive Play-based Observation & Visual Assessment Sheets',
      duration: '30 Minutes per session',
      target: 'Ages 3 – 5 years (Playschool, LKG, UKG)',
      outcomes: 'Early identification of cognitive orientation, motor coordination, and curiosity index.'
    },
    {
      id: 'primary',
      title: 'Primary School Assessment',
      pill: 'Classes 1 – 5',
      pillColor: '#e0f2fe',
      pillTextColor: '#0369a1',
      desc: 'Build strong fundamentals and essential learning skills.',
      icon: BookOpen,
      subjects: ['Foundational Mathematics', 'English Reading & Grammar', 'Environmental Science', 'Logical Reasoning'],
      format: 'Visual Objective Papers with real-world puzzle scenarios',
      duration: '45 Minutes per subject',
      target: 'Classes 1 to 5',
      outcomes: 'Mastery of fundamental arithmetic, reading fluency, and spatial logic.'
    },
    {
      id: 'middle',
      title: 'Middle School Assessment',
      pill: 'Classes 6 – 8',
      pillColor: '#fef9c3',
      pillTextColor: '#854d0e',
      desc: 'Strengthen subject understanding, analytical thinking and confidence.',
      icon: Users,
      subjects: ['Integrated Science', 'Applied Mathematics', 'English Language', 'Social Science', 'Computational Thinking'],
      format: 'Case-based Questions, Analytical Problem Solving & Multiple Choice',
      duration: '60 Minutes per paper',
      target: 'Classes 6 to 8',
      outcomes: 'Diagnostic mapping of conceptual application and investigative thinking.'
    },
    {
      id: 'secondary',
      title: 'Secondary School Assessment',
      pill: 'Classes 9 – 10',
      pillColor: '#ffedd5',
      pillTextColor: '#c2410c',
      desc: 'Deepen subject knowledge and prepare for higher academic goals.',
      icon: GraduationCap,
      subjects: ['Physics, Chemistry & Biology', 'Higher Mathematics', 'Advanced English', 'Social Studies', 'AI & Technology'],
      format: 'Standardized Diagnostic Board-aligned Assessment & Critical Reasoning',
      duration: '90 Minutes per paper',
      target: 'Classes 9 and 10',
      outcomes: 'Strengths-to-stream alignment, board exam readiness, and learning gap remediation.'
    },
    {
      id: 'senior-secondary',
      title: 'Senior Secondary Assessment',
      pill: 'Classes 11 – 12',
      pillColor: '#fce7f3',
      pillTextColor: '#be185d',
      desc: 'Stream-focused assessment and academic progression insights.',
      icon: BarChart3,
      subjects: ['Science Stream (PCM/PCB)', 'Commerce Stream', 'Humanities Stream', 'Aptitude & General Studies'],
      format: 'Higher-Order Thinking Skills (HOTS), Case Studies & Stream Mastery',
      duration: '90 Minutes per stream paper',
      target: 'Classes 11 and 12',
      outcomes: 'Career pathway aptitude matching, university entrance readiness, and competitive skill mapping.'
    }
  ];

  const handleBrochureSubmit = (e) => {
    e.preventDefault();
    if (!brochureEmail) return;
    setBrochureSent(true);
    setTimeout(() => {
      setBrochureSent(false);
      setShowBrochureModal(false);
      setBrochureEmail('');
    }, 2500);
  };

  return (
    <div className="academic-assessment-page" style={styles.pageWrapper}>
      {/* =========================================================================
          SECTION 1: HERO BANNER (NAVY BLUE THEME WITH SCRIPT ACCENT & BOTTOM RIBBON)
         ========================================================================= */}
      <section style={styles.heroSection} className="assessment-hero">
        <div style={styles.heroGlowOverlay}></div>
        <div style={styles.heroContainer}>
          <div style={styles.heroGrid} className="hero-grid-responsive">
            {/* Left Content */}
            <div style={styles.heroLeft}>
              <div style={styles.heroEyebrow}>
                <span style={styles.eyebrowDot}></span>
                TECHNIK OLYMPIAD PRIVATE LIMITED
              </div>

              <h1 style={styles.heroTitle} className="hero-title-responsive">
                Technik Academic <br />
                Assessment
              </h1>

              <div style={styles.heroSubtitleRow}>
                <p style={styles.heroSubtitle}>
                  Every Stage of Learning. Every Step of Progress.
                </p>
              </div>

              <p style={styles.heroDescription}>
                A structured academic assessment initiative designed for learners from Playschool to Class 12.
                Understand academic strengths, identify learning gaps and support continuous improvement through
                age-appropriate assessments and meaningful performance insights.
              </p>

              <div style={styles.heroBtnGroup}>
                <button
                  onClick={() => scrollToSection('stages-section')}
                  style={styles.heroPrimaryBtn}
                  className="hero-primary-btn"
                >
                  <span>Explore Assessment</span>
                  <ArrowRight size={17} />
                </button>

                <Link to="/for-schools" style={styles.heroSecondaryBtn} className="hero-secondary-btn">
                  <span>Partner With Us</span>
                </Link>
              </div>
            </div>

            {/* Right Banner with Cursive Script and Students Photo */}
            <div style={styles.heroRight} className="hero-right-responsive">
              <div style={styles.cursiveBanner}>
                <span style={styles.cursiveText} className="cursive-gold-script">
                  From First Steps to Future Goals
                </span>
              </div>

              <div style={styles.heroImageCard} className="hero-image-glow">
                <img
                  src={heroStudentsImg}
                  alt="Students from Playschool to Class 12 with books and laptop"
                  style={styles.heroImg}
                />
                <div style={styles.imageCornerAccent}></div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STAGES DOCKED RIBBON */}
        <div style={styles.heroDockedRibbon} className="hero-docked-ribbon">
          <div style={styles.ribbonContainer}>
            <div
              style={styles.ribbonItem}
              className="ribbon-item"
              onClick={() => {
                setSelectedStage(stagesData[0]);
                scrollToSection('stages-section');
              }}
            >
              <div style={styles.ribbonIconCircle}>
                <Blocks size={18} color="#f59e0b" />
              </div>
              <div style={styles.ribbonTextGroup}>
                <span style={styles.ribbonLabel}>Playschool</span>
                <span style={styles.ribbonSub}>UKG</span>
              </div>
            </div>

            <div style={styles.ribbonSeparator}></div>

            <div
              style={styles.ribbonItem}
              className="ribbon-item"
              onClick={() => {
                setSelectedStage(stagesData[1]);
                scrollToSection('stages-section');
              }}
            >
              <div style={styles.ribbonIconCircle}>
                <BookOpen size={18} color="#38bdf8" />
              </div>
              <div style={styles.ribbonTextGroup}>
                <span style={styles.ribbonLabel}>Classes</span>
                <span style={styles.ribbonSub}>1 – 5</span>
              </div>
            </div>

            <div style={styles.ribbonSeparator}></div>

            <div
              style={styles.ribbonItem}
              className="ribbon-item"
              onClick={() => {
                setSelectedStage(stagesData[2]);
                scrollToSection('stages-section');
              }}
            >
              <div style={styles.ribbonIconCircle}>
                <Users size={18} color="#facc15" />
              </div>
              <div style={styles.ribbonTextGroup}>
                <span style={styles.ribbonLabel}>Classes</span>
                <span style={styles.ribbonSub}>6 – 8</span>
              </div>
            </div>

            <div style={styles.ribbonSeparator}></div>

            <div
              style={styles.ribbonItem}
              className="ribbon-item"
              onClick={() => {
                setSelectedStage(stagesData[3]);
                scrollToSection('stages-section');
              }}
            >
              <div style={styles.ribbonIconCircle}>
                <GraduationCap size={18} color="#fb923c" />
              </div>
              <div style={styles.ribbonTextGroup}>
                <span style={styles.ribbonLabel}>Classes</span>
                <span style={styles.ribbonSub}>9 – 10</span>
              </div>
            </div>

            <div style={styles.ribbonSeparator}></div>

            <div
              style={styles.ribbonItem}
              className="ribbon-item"
              onClick={() => {
                setSelectedStage(stagesData[4]);
                scrollToSection('stages-section');
              }}
            >
              <div style={styles.ribbonIconCircle}>
                <BarChart3 size={18} color="#f472b6" />
              </div>
              <div style={styles.ribbonTextGroup}>
                <span style={styles.ribbonLabel}>Classes</span>
                <span style={styles.ribbonSub}>11 – 12</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT SECTION ("What is Technik Academic Assessment?")
         ========================================================================= */}
      <section style={styles.aboutSection} id="about-section">
        <div style={styles.contentContainer}>
          <div style={styles.aboutGrid} className="about-grid-responsive">
            {/* Left Content */}
            <div style={styles.aboutLeft}>
              <div style={styles.sectionBadge}>ABOUT</div>
              <h2 style={styles.sectionHeading}>
                What is Technik Academic Assessment?
              </h2>
              <p style={styles.aboutBody}>
                Technik Academic Assessment is an educational assessment initiative by
                <strong> Technik Olympiad Private Limited</strong>. It is designed to help students,
                parents and schools understand learning progress, identify strengths and highlight
                areas for improvement through structured, age-appropriate assessments.
              </p>
              <p style={{ ...styles.aboutBody, marginTop: '1rem', color: '#64748b' }}>
                Every assessment is aligned with modern pedagogy, combining cognitive evaluation,
                foundational clarity, and conceptual application to guide each learner toward
                their full potential.
              </p>

              <button
                onClick={() => scrollToSection('stages-section')}
                style={styles.knowMoreBtn}
                className="know-more-btn"
              >
                <span>Know More</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Photo with Script Accent */}
            <div style={styles.aboutRight}>
              <div style={styles.aboutCursiveBanner}>
                <span style={styles.cursiveTextAbout} className="cursive-gold-script">
                  Better Understanding. Brighter Futures.
                </span>
              </div>
              <div style={styles.aboutImageWrapper} className="about-image-wrapper">
                <img
                  src={studentWritingImg}
                  alt="Student girl writing in notebook"
                  style={styles.aboutImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ASSESSMENT STAGES ("A Complete Assessment Journey...")
         ========================================================================= */}
      <section style={styles.stagesSection} id="stages-section">
        <div style={styles.contentContainer}>
          <div style={styles.stagesHeaderRow}>
            <div>
              <div style={styles.sectionBadge}>ASSESSMENT STAGES</div>
              <h2 style={styles.sectionHeading}>
                A Complete Assessment Journey<br className="desktop-break" /> from Playschool to Class 12
              </h2>
            </div>
            <button
              onClick={() => scrollToSection('stages-grid')}
              style={styles.viewAllStagesLink}
              className="view-stages-link"
            >
              <span>View All Stages</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* 5 Cards Row */}
          <div style={styles.stagesCardsGrid} id="stages-grid" className="stages-cards-grid">
            {stagesData.map((stage) => {
              const IconComp = stage.icon;
              return (
                <div
                  key={stage.id}
                  style={styles.stageCard}
                  className="stage-card-item"
                  onClick={() => setSelectedStage(stage)}
                >
                  <div style={styles.cardIconBox}>
                    <IconComp size={24} color="#f59e0b" />
                  </div>

                  <h3 style={styles.stageCardTitle}>{stage.title}</h3>

                  <div
                    style={{
                      ...styles.stagePill,
                      backgroundColor: stage.pillColor,
                      color: stage.pillTextColor,
                    }}
                  >
                    {stage.pill}
                  </div>

                  <p style={styles.stageCardDesc}>{stage.desc}</p>

                  <div style={styles.cardFooterLink}>
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HOW IT WORKS ("A Simple and Transparent Process")
         ========================================================================= */}
      <section style={styles.howItWorksSection} id="how-it-works">
        <div style={styles.contentContainer}>
          <div style={styles.howItWorksHeader}>
            <div>
              <div style={styles.sectionBadgeGold}>HOW IT WORKS</div>
              <h2 style={styles.sectionHeadingWhite}>
                A Simple and Transparent Process
              </h2>
            </div>
            <Link to="/for-schools" style={styles.learnMoreLinkWhite} className="learn-more-link-white">
              <span>Learn More</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* 5 Connected Process Steps */}
          <div style={styles.stepsFlowContainer} className="steps-flow-container">
            {/* Step 01 */}
            <div style={styles.stepItem} className="step-item">
              <div style={styles.stepCircleOuter}>
                <div style={styles.stepCircle}>01</div>
              </div>
              <h4 style={styles.stepTitle}>School Registration</h4>
              <p style={styles.stepSubtitle}>
                Schools register and select eligible classes.
              </p>
            </div>

            <div style={styles.stepArrow} className="step-arrow">
              <span>›</span>
            </div>

            {/* Step 02 */}
            <div style={styles.stepItem} className="step-item">
              <div style={styles.stepCircleOuter}>
                <div style={styles.stepCircle}>02</div>
              </div>
              <h4 style={styles.stepTitle}>Student Enrolment</h4>
              <p style={styles.stepSubtitle}>
                Students are enrolled through the school.
              </p>
            </div>

            <div style={styles.stepArrow} className="step-arrow">
              <span>›</span>
            </div>

            {/* Step 03 */}
            <div style={styles.stepItem} className="step-item">
              <div style={styles.stepCircleOuter}>
                <div style={styles.stepCircle}>03</div>
              </div>
              <h4 style={styles.stepTitle}>Assessment</h4>
              <p style={styles.stepSubtitle}>
                Students complete the assessment.
              </p>
            </div>

            <div style={styles.stepArrow} className="step-arrow">
              <span>›</span>
            </div>

            {/* Step 04 */}
            <div style={styles.stepItem} className="step-item">
              <div style={styles.stepCircleOuter}>
                <div style={styles.stepCircle}>04</div>
              </div>
              <h4 style={styles.stepTitle}>Evaluation</h4>
              <p style={styles.stepSubtitle}>
                Responses are evaluated with quality checks.
              </p>
            </div>

            <div style={styles.stepArrow} className="step-arrow">
              <span>›</span>
            </div>

            {/* Step 05 */}
            <div style={styles.stepItem} className="step-item">
              <div style={styles.stepCircleOuter}>
                <div style={styles.stepCircleGold}>05</div>
              </div>
              <h4 style={styles.stepTitleGold}>Results & Skill Compass</h4>
              <p style={styles.stepSubtitle}>
                Students receive results and detailed performance reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: TECHNIK SKILL COMPASS ("More than a Score...")
         ========================================================================= */}
      <section style={styles.skillCompassSection} id="skill-compass-section">
        <div style={styles.contentContainer}>
          <div style={styles.skillCompassGrid} className="skill-compass-grid-responsive">
            {/* Left Column: Heading and Description */}
            <div style={styles.compassLeft}>
              <div style={styles.sectionBadge}>TECHNIK SKILL COMPASS</div>
              <h2 style={styles.sectionHeading}>
                More than a Score.<br />
                A Clearer Direction.
              </h2>
              <p style={styles.compassBody}>
                The <strong>Technik Skill Compass</strong> provides age-appropriate performance reports
                with subject-wise insights, strengths, learning areas and recommendations to support
                continuous improvement.
              </p>
              <button
                onClick={() => setShowSampleReport(true)}
                style={styles.sampleReportBtn}
                className="sample-report-btn"
              >
                <span>View Sample Report</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Center Column: Realistic Laptop Mockup with Report Interface */}
            <div style={styles.compassCenter}>
              <div style={styles.laptopMockup} className="laptop-mockup-frame">
                {/* Laptop Camera dot */}
                <div style={styles.laptopBezel}>
                  <div style={styles.cameraDot}></div>
                </div>

                {/* Laptop Display Screen */}
                <div style={styles.laptopScreen}>
                  {/* Report Header Bar */}
                  <div style={styles.reportNavHeader}>
                    <div style={styles.reportBrandTitle}>
                      <CompassIcon size={14} color="#0284c7" />
                      <span>Technik Skill Compass</span>
                    </div>
                    <span style={styles.reportDateBadge}>Class 6 • Annual Assessment</span>
                  </div>

                  {/* Report Body */}
                  <div style={styles.reportContentArea}>
                    {/* Student Info Row */}
                    <div style={styles.reportStudentRow}>
                      <div style={styles.studentAvatarCircle}>
                        <img
                          src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=120&auto=format&fit=crop&q=80"
                          alt="Student Avatar"
                          style={styles.avatarImg}
                        />
                      </div>
                      <div style={styles.studentInfoMeta}>
                        <div style={styles.studentNameText}>Aaradhya Sharma</div>
                        <div style={styles.studentDetailsSub}>Roll No: TAA-2026-6042 • Section A</div>
                      </div>
                      {/* Overall Circular Score Ring */}
                      <div style={styles.scoreDialBox}>
                        <div style={styles.scoreDialRing}>
                          <span style={styles.scoreDialValue}>82%</span>
                        </div>
                        <span style={styles.scoreDialLabel}>Overall Score</span>
                      </div>
                    </div>

                    {/* Subject Bars Grid */}
                    <div style={styles.subjectBarsContainer}>
                      <div style={styles.subjectBarRow}>
                        <span style={styles.subjectName}>Mathematics</span>
                        <div style={styles.progressBarTrack}>
                          <div style={{ ...styles.progressBarFill, width: '85%' }}></div>
                        </div>
                        <span style={styles.subjectScore}>85%</span>
                      </div>

                      <div style={styles.subjectBarRow}>
                        <span style={styles.subjectName}>Science</span>
                        <div style={styles.progressBarTrack}>
                          <div style={{ ...styles.progressBarFill, width: '78%' }}></div>
                        </div>
                        <span style={styles.subjectScore}>78%</span>
                      </div>

                      <div style={styles.subjectBarRow}>
                        <span style={styles.subjectName}>English</span>
                        <div style={styles.progressBarTrack}>
                          <div style={{ ...styles.progressBarFill, width: '80%' }}></div>
                        </div>
                        <span style={styles.subjectScore}>80%</span>
                      </div>

                      <div style={styles.subjectBarRow}>
                        <span style={styles.subjectName}>Social Science</span>
                        <div style={styles.progressBarTrack}>
                          <div style={{ ...styles.progressBarFill, width: '75%' }}></div>
                        </div>
                        <span style={styles.subjectScore}>75%</span>
                      </div>

                      <div style={styles.subjectBarRow}>
                        <span style={styles.subjectName}>Computer Science</span>
                        <div style={styles.progressBarTrack}>
                          <div style={{ ...styles.progressBarFill, width: '80%' }}></div>
                        </div>
                        <span style={styles.subjectScore}>80%</span>
                      </div>
                    </div>

                    {/* Mini Strengths & Areas Row */}
                    <div style={styles.miniHighlightsRow}>
                      <div style={styles.miniHighlightBoxGreen}>
                        <div style={styles.highlightBadgeHeader}>
                          <TrendingUp size={11} color="#059669" />
                          <span>Strengths</span>
                        </div>
                        <div style={styles.highlightPills}>
                          <span style={styles.miniTag}>• Conceptual understanding</span>
                          <span style={styles.miniTag}>• Problem-solving</span>
                        </div>
                      </div>

                      <div style={styles.miniHighlightBoxOrange}>
                        <div style={styles.highlightBadgeHeader}>
                          <Target size={11} color="#ea580c" />
                          <span>Areas for Improvement</span>
                        </div>
                        <div style={styles.highlightPills}>
                          <span style={styles.miniTag}>• Time management</span>
                          <span style={styles.miniTag}>• Application questions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base Stand */}
                <div style={styles.laptopBase}>
                  <div style={styles.laptopNotch}></div>
                </div>
              </div>
            </div>

            {/* Right Column: For Students, Parents, Schools */}
            <div style={styles.compassRight}>
              <h3 style={styles.audienceTitle}>
                For Students, Parents and Schools
              </h3>

              <div style={styles.audienceList}>
                {/* Students */}
                <div style={styles.audienceCard} className="audience-card-hover">
                  <div style={styles.audienceIconBox}>
                    <GraduationCap size={20} color="#b45309" />
                  </div>
                  <div>
                    <h4 style={styles.audienceRole}>Students</h4>
                    <p style={styles.audienceText}>
                      Understand strengths, identify learning gaps and set clear goals.
                    </p>
                  </div>
                </div>

                {/* Parents */}
                <div style={styles.audienceCard} className="audience-card-hover">
                  <div style={styles.audienceIconBox}>
                    <Users size={20} color="#b45309" />
                  </div>
                  <div>
                    <h4 style={styles.audienceRole}>Parents</h4>
                    <p style={styles.audienceText}>
                      Track academic progress and support learning with confidence.
                    </p>
                  </div>
                </div>

                {/* Schools */}
                <div style={styles.audienceCard} className="audience-card-hover">
                  <div style={styles.audienceIconBox}>
                    <School size={20} color="#b45309" />
                  </div>
                  <div>
                    <h4 style={styles.audienceRole}>Schools</h4>
                    <p style={styles.audienceText}>
                      Access class-level insights to support teaching plans and academic improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: SCHOOL PARTNERSHIP BANNER (CALL TO ACTION)
         ========================================================================= */}
      <section style={styles.partnershipSection}>
        <div style={styles.contentContainer}>
          <div style={styles.partnershipBanner} className="partnership-banner-responsive">
            {/* Campus Photo Left */}
            <div style={styles.partnershipImgBox}>
              <img
                src={schoolCampusImg}
                alt="Modern School Campus"
                style={styles.campusImg}
              />
            </div>

            {/* Right Call To Action Content */}
            <div style={styles.partnershipContent}>
              <div style={styles.partnershipEyebrow}>
                SCHOOL PARTNERSHIP
              </div>

              <h2 style={styles.partnershipTitle}>
                Partner With Technik Academic Assessment
              </h2>

              <p style={styles.partnershipSubtitle}>
                Bring structured academic assessments and meaningful learning insights to your school.
                Join us to support better learning outcomes for your students.
              </p>

              <div style={styles.partnershipBtnGroup}>
                <Link to="/for-schools" style={styles.partnershipPrimaryBtn} className="partner-primary-btn">
                  <span>School Partnership Enquiry</span>
                  <ArrowRight size={16} />
                </Link>

                <button
                  onClick={() => setShowBrochureModal(true)}
                  style={styles.partnershipSecondaryBtn}
                  className="partner-secondary-btn"
                >
                  <Download size={16} />
                  <span>Download Information Brochure</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: FREQUENTLY ASKED QUESTIONS (2-COLUMN ACCORDION)
         ========================================================================= */}
      <section style={styles.faqSection} id="faq-section">
        <div style={styles.contentContainer}>
          <div style={styles.faqHeaderRow}>
            <div>
              <div style={styles.sectionBadge}>FREQUENTLY ASKED QUESTIONS</div>
              <h2 style={styles.sectionHeading}>Quick Answers</h2>
            </div>
            <Link to="/faq" style={styles.viewAllFaqsLink} className="view-faqs-link">
              <span>View All FAQs</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div style={styles.faqTwoColGrid} className="faq-grid-responsive">
            {/* Left Column Questions */}
            <div style={styles.faqCol}>
              {/* Question 1 */}
              <div style={styles.faqCard} className="faq-accordion-item">
                <button
                  style={styles.faqQuestionBtn}
                  onClick={() => toggleFaq(0)}
                  aria-expanded={!!openFaqs[0]}
                >
                  <span style={styles.faqQuestionText}>What is Technik Academic Assessment?</span>
                  {openFaqs[0] ? <ChevronUp size={18} color="#0c1e45" /> : <ChevronDown size={18} color="#64748b" />}
                </button>
                {openFaqs[0] && (
                  <div style={styles.faqAnswerBox}>
                    <p style={styles.faqAnswerText}>
                      Technik Academic Assessment is an all-inclusive diagnostic assessment initiative
                      designed for students from Playschool to Class 12. It measures foundational understanding,
                      conceptual mastery, analytical thinking, and learning gap diagnostics rather than rote
                      memorization.
                    </p>
                  </div>
                )}
              </div>

              {/* Question 2 */}
              <div style={styles.faqCard} className="faq-accordion-item">
                <button
                  style={styles.faqQuestionBtn}
                  onClick={() => toggleFaq(1)}
                  aria-expanded={!!openFaqs[1]}
                >
                  <span style={styles.faqQuestionText}>Which classes are eligible?</span>
                  {openFaqs[1] ? <ChevronUp size={18} color="#0c1e45" /> : <ChevronDown size={18} color="#64748b" />}
                </button>
                {openFaqs[1] && (
                  <div style={styles.faqAnswerBox}>
                    <p style={styles.faqAnswerText}>
                      All students from Playschool, LKG, UKG up to Class 12 across recognized state, CBSE,
                      ICSE, Cambridge, and international educational boards are eligible to participate.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column Questions */}
            <div style={styles.faqCol}>
              {/* Question 3 */}
              <div style={styles.faqCard} className="faq-accordion-item">
                <button
                  style={styles.faqQuestionBtn}
                  onClick={() => toggleFaq(2)}
                  aria-expanded={!!openFaqs[2]}
                >
                  <span style={styles.faqQuestionText}>How will students receive their results?</span>
                  {openFaqs[2] ? <ChevronUp size={18} color="#0c1e45" /> : <ChevronDown size={18} color="#64748b" />}
                </button>
                {openFaqs[2] && (
                  <div style={styles.faqAnswerBox}>
                    <p style={styles.faqAnswerText}>
                      Each student receives a personalized Technik Skill Compass diagnostic performance report.
                      The report is accessible digitally through the official Technik student/parent portal and
                      distributed as an official hardcopy report card through their school.
                    </p>
                  </div>
                )}
              </div>

              {/* Question 4 */}
              <div style={styles.faqCard} className="faq-accordion-item">
                <button
                  style={styles.faqQuestionBtn}
                  onClick={() => toggleFaq(3)}
                  aria-expanded={!!openFaqs[3]}
                >
                  <span style={styles.faqQuestionText}>Can schools register their students together?</span>
                  {openFaqs[3] ? <ChevronUp size={18} color="#0c1e45" /> : <ChevronDown size={18} color="#64748b" />}
                </button>
                {openFaqs[3] && (
                  <div style={styles.faqAnswerBox}>
                    <p style={styles.faqAnswerText}>
                      Yes, schools can easily onboard and register entire cohorts or selected classes through
                      the official School Coordinator Portal using convenient Excel bulk upload or online class rosters.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE MODAL: STAGE DETAILS MODAL
         ========================================================================= */}
      {selectedStage && (
        <div style={styles.modalOverlay} onClick={() => setSelectedStage(null)}>
          <div style={styles.modalBox} onClick={(e) => e.stopPropagation()} className="modal-content-animated">
            <div style={styles.modalHeader}>
              <div style={styles.modalHeaderTitleGroup}>
                <div style={styles.modalIconWrap}>
                  <selectedStage.icon size={24} color="#f59e0b" />
                </div>
                <div>
                  <h3 style={styles.modalStageTitle}>{selectedStage.title}</h3>
                  <span style={{ ...styles.stagePill, backgroundColor: selectedStage.pillColor, color: selectedStage.pillTextColor }}>
                    {selectedStage.pill}
                  </span>
                </div>
              </div>
              <button
                style={styles.modalCloseBtn}
                onClick={() => setSelectedStage(null)}
                aria-label="Close dialog"
              >
                <X size={20} color="#64748b" />
              </button>
            </div>

            <div style={styles.modalBody}>
              <p style={styles.modalDesc}>{selectedStage.desc}</p>

              <div style={styles.modalInfoGrid}>
                <div style={styles.modalInfoCard}>
                  <div style={styles.infoLabel}>TARGET LEARNER GROUP</div>
                  <div style={styles.infoVal}>{selectedStage.target}</div>
                </div>

                <div style={styles.modalInfoCard}>
                  <div style={styles.infoLabel}>ASSESSMENT DURATION</div>
                  <div style={styles.infoVal}>{selectedStage.duration}</div>
                </div>
              </div>

              <div style={styles.modalSection}>
                <h4 style={styles.modalSectionTitle}>Subjects & Competencies Evaluated:</h4>
                <div style={styles.subjectsTagsList}>
                  {selectedStage.subjects.map((subj, idx) => (
                    <span key={idx} style={styles.subjectChip}>
                      <Check size={12} color="#059669" /> {subj}
                    </span>
                  ))}
                </div>
              </div>

              <div style={styles.modalSection}>
                <h4 style={styles.modalSectionTitle}>Assessment Format & Methodology:</h4>
                <p style={styles.modalText}>{selectedStage.format}</p>
              </div>

              <div style={styles.modalSection}>
                <h4 style={styles.modalSectionTitle}>Learning Outcomes & Deliverables:</h4>
                <p style={styles.modalText}>{selectedStage.outcomes}</p>
              </div>
            </div>

            <div style={styles.modalFooter}>
              <Link
                to="/register"
                style={styles.modalActionBtn}
                onClick={() => setSelectedStage(null)}
              >
                <span>Register for {selectedStage.pill}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          INTERACTIVE MODAL: SAMPLE REPORT MODAL
         ========================================================================= */}
      {showSampleReport && (
        <div style={styles.modalOverlay} onClick={() => setShowSampleReport(false)}>
          <div style={{ ...styles.modalBox, maxWidth: '680px' }} onClick={(e) => e.stopPropagation()} className="modal-content-animated">
            <div style={styles.modalHeader}>
              <div>
                <h3 style={styles.modalStageTitle}>Sample Technik Skill Compass Report</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>
                  A glimpse of the diagnostic performance analysis received by students.
                </p>
              </div>
              <button
                style={styles.modalCloseBtn}
                onClick={() => setShowSampleReport(false)}
                aria-label="Close dialog"
              >
                <X size={20} color="#64748b" />
              </button>
            </div>

            <div style={styles.modalBody}>
              <div style={styles.sampleReportFullBox}>
                <div style={styles.sampleReportHeader}>
                  <div>
                    <h4 style={{ margin: 0, color: '#0c1e45', fontSize: '1.2rem', fontWeight: 800 }}>Aaradhya Sharma</h4>
                    <p style={{ margin: '0.2rem 0 0 0', color: '#64748b', fontSize: '0.85rem' }}>Class 6 • Central Public School • Reg: TAA-2026-6042</p>
                  </div>
                  <div style={styles.overallScoreBadge}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0284c7' }}>82%</span>
                    <span style={{ fontSize: '0.65rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Overall Score</span>
                  </div>
                </div>

                <div style={{ marginTop: '1.2rem' }}>
                  <h5 style={{ margin: '0 0 0.6rem 0', fontSize: '0.88rem', color: '#0f172a', fontWeight: 700 }}>Subject Competency Breakdown</h5>
                  {[
                    { name: 'Mathematics', score: '85%' },
                    { name: 'Science & Inquiry', score: '78%' },
                    { name: 'English Reading & Grammar', score: '80%' },
                    { name: 'Social Studies & World View', score: '75%' },
                    { name: 'Computational & Logical Thinking', score: '80%' }
                  ].map((sub, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid #f1f5f9' }}>
                      <span style={{ fontSize: '0.85rem', color: '#334155', fontWeight: 600 }}>{sub.name}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flex: 1, maxWidth: '200px', margin: '0 1rem' }}>
                        <div style={{ flex: 1, height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: sub.score, height: '100%', background: 'linear-gradient(90deg, #0284c7 0%, #38bdf8 100%)', borderRadius: '4px' }}></div>
                        </div>
                      </div>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>{sub.score}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.2rem' }}>
                  <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#166534', fontWeight: 700, fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                      <TrendingUp size={14} /> Key Strengths
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.75rem', color: '#15803d', lineHeight: 1.5 }}>
                      <li>Strong numerical reasoning</li>
                      <li>High reading comprehension speed</li>
                      <li>Systematic approach in word problems</li>
                    </ul>
                  </div>

                  <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '8px', padding: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#9a3412', fontWeight: 700, fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                      <Target size={14} /> Actionable Focus Areas
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.75rem', color: '#c2410c', lineHeight: 1.5 }}>
                      <li>Practice timed application questions</li>
                      <li>Review multi-step science experiments</li>
                      <li>Expand vocabulary in argumentative writing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.modalFooter}>
              <Link to="/skill-compass" style={styles.modalActionBtn} onClick={() => setShowSampleReport(false)}>
                <span>Explore Full Skill Compass Interactive Tool</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          INTERACTIVE MODAL: BROCHURE DOWNLOAD
         ========================================================================= */}
      {showBrochureModal && (
        <div style={styles.modalOverlay} onClick={() => setShowBrochureModal(false)}>
          <div style={{ ...styles.modalBox, maxWidth: '460px' }} onClick={(e) => e.stopPropagation()} className="modal-content-animated">
            <div style={styles.modalHeader}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Download size={20} color="#b45309" />
                </div>
                <div>
                  <h3 style={{ margin: 0, color: '#0c1e45', fontSize: '1.15rem', fontWeight: 800 }}>Information Brochure</h3>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>Technik Academic Assessment 2026-27</p>
                </div>
              </div>
              <button
                style={styles.modalCloseBtn}
                onClick={() => setShowBrochureModal(false)}
                aria-label="Close dialog"
              >
                <X size={20} color="#64748b" />
              </button>
            </div>

            <div style={styles.modalBody}>
              {brochureSent ? (
                <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                  <CheckCircle2 size={46} color="#16a34a" style={{ margin: '0 auto 0.8rem' }} />
                  <h4 style={{ color: '#0c1e45', fontSize: '1.1rem', fontWeight: 800, margin: '0 0 0.4rem' }}>Brochure Sent Successfully!</h4>
                  <p style={{ color: '#64748b', fontSize: '0.88rem', margin: 0 }}>
                    We have dispatched the complete official brochure to <strong>{brochureEmail}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBrochureSubmit}>
                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5, margin: '0 0 1rem' }}>
                    Enter your school or official email address to immediately receive the comprehensive syllabus breakdown, school hosting framework, and fee schedule.
                  </p>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                      Official Email Address:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="principal@school.edu.in"
                      value={brochureEmail}
                      onChange={(e) => setBrochureEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        border: '1.5px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        color: '#0f172a',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '0.85rem',
                      background: 'linear-gradient(135deg, #f2b744 0%, #eab308 100%)',
                      color: '#0c1e45',
                      fontWeight: 800,
                      fontSize: '0.92rem',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      boxShadow: '0 4px 14px rgba(242, 183, 68, 0.4)',
                    }}
                  >
                    <Download size={16} />
                    <span>Download Official PDF Brochure</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Icon helper for report brand
function CompassIcon({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

/* ============================================================================
   STYLES DEFINITIONS (PIXEL-PERFECT ACCORDING TO USER MOCKUP)
   ============================================================================ */
const styles = {
  pageWrapper: {
    backgroundColor: '#ffffff',
    color: '#0f172a',
    fontFamily: 'var(--font-sans, "Inter", sans-serif)',
    overflowX: 'hidden',
  },
  contentContainer: {
    width: '100%',
    maxWidth: '1240px',
    margin: '0 auto',
    padding: '0 1.5rem',
  },

  /* ---------------- HERO STYLES ---------------- */
  heroSection: {
    backgroundColor: '#08142c',
    position: 'relative',
    color: '#ffffff',
    paddingTop: '3.5rem',
    paddingBottom: '0',
    overflow: 'hidden',
    backgroundImage: 'radial-gradient(circle at 85% 20%, rgba(30, 64, 175, 0.35) 0%, transparent 60%)',
  },
  heroGlowOverlay: {
    position: 'absolute',
    top: '-50px',
    left: '10%',
    width: '350px',
    height: '350px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(242, 183, 68, 0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  heroContainer: {
    width: '100%',
    maxWidth: '1240px',
    margin: '0 auto',
    padding: '0 1.5rem 2.8rem',
  },
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1.05fr 1.15fr',
    gap: '2.5rem',
    alignItems: 'center',
  },
  heroLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    zIndex: 2,
  },
  heroEyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
    color: '#fbbf24',
    fontSize: '0.78rem',
    fontWeight: 800,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  eyebrowDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#fbbf24',
    display: 'inline-block',
  },
  heroTitle: {
    fontFamily: '"Playfair Display", Georgia, serif',
    fontSize: '3.2rem',
    fontWeight: 700,
    lineHeight: 1.1,
    color: '#ffffff',
    margin: '0 0 1rem 0',
    letterSpacing: '-0.02em',
  },
  heroSubtitleRow: {
    marginBottom: '1rem',
  },
  heroSubtitle: {
    fontSize: '1.22rem',
    fontWeight: 700,
    color: '#f8fafc',
    margin: 0,
    letterSpacing: '-0.01em',
  },
  heroDescription: {
    fontSize: '0.95rem',
    lineHeight: 1.65,
    color: '#94a3b8',
    margin: '0 0 2rem 0',
    maxWidth: '520px',
  },
  heroBtnGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  heroPrimaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6rem',
    backgroundColor: '#f2b744',
    color: '#08142c',
    fontSize: '0.92rem',
    fontWeight: 800,
    padding: '0.85rem 1.65rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    boxShadow: '0 4px 16px rgba(242, 183, 68, 0.35)',
  },
  heroSecondaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: '0.92rem',
    fontWeight: 700,
    padding: '0.85rem 1.65rem',
    borderRadius: '8px',
    border: '1.5px solid rgba(255, 255, 255, 0.45)',
    textDecoration: 'none',
    transition: 'all 0.25s ease',
  },
  heroRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  },
  cursiveBanner: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '0.65rem',
  },
  cursiveText: {
    fontFamily: '"Caveat", cursive',
    fontSize: '2.35rem',
    fontWeight: 700,
    color: '#f5c05c',
    letterSpacing: '0.02em',
    textShadow: '0 2px 10px rgba(245, 192, 92, 0.25)',
  },
  heroImageCard: {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 20px 45px rgba(0, 0, 0, 0.45)',
    border: '2px solid rgba(255, 255, 255, 0.12)',
    width: '100%',
  },
  heroImg: {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'cover',
  },
  imageCornerAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '16px',
    boxShadow: 'inset 0 0 25px rgba(8, 20, 44, 0.3)',
    pointerEvents: 'none',
  },

  /* DOCKED RIBBON STRIP UNDER HERO */
  heroDockedRibbon: {
    width: '100%',
    backgroundColor: '#050d1e',
    borderTop: '1px solid rgba(255, 255, 255, 0.12)',
    padding: '0.85rem 0',
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
  },
  ribbonContainer: {
    width: '100%',
    maxWidth: '1240px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflowX: 'auto',
    gap: '0.5rem',
  },
  ribbonItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.55rem 1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  ribbonIconCircle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  ribbonTextGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  ribbonLabel: {
    fontSize: '0.78rem',
    fontWeight: 600,
    color: '#cbd5e1',
  },
  ribbonSub: {
    fontSize: '0.88rem',
    fontWeight: 800,
    color: '#ffffff',
  },
  ribbonSeparator: {
    width: '1px',
    height: '28px',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },

  /* ---------------- ABOUT SECTION ---------------- */
  aboutSection: {
    padding: '5rem 0',
    backgroundColor: '#ffffff',
  },
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: '1.15fr 1fr',
    gap: '3.5rem',
    alignItems: 'center',
  },
  aboutLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  sectionBadge: {
    fontSize: '0.78rem',
    fontWeight: 800,
    color: '#ea580c',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    marginBottom: '0.75rem',
  },
  sectionBadgeGold: {
    fontSize: '0.78rem',
    fontWeight: 800,
    color: '#fbbf24',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    marginBottom: '0.75rem',
  },
  sectionHeading: {
    fontFamily: '"Playfair Display", Georgia, serif',
    fontSize: '2.4rem',
    fontWeight: 700,
    color: '#0c1e45',
    lineHeight: 1.22,
    margin: '0 0 1.25rem 0',
    letterSpacing: '-0.02em',
  },
  sectionHeadingWhite: {
    fontFamily: '"Playfair Display", Georgia, serif',
    fontSize: '2.4rem',
    fontWeight: 700,
    color: '#ffffff',
    lineHeight: 1.22,
    margin: '0 0 0.5rem 0',
    letterSpacing: '-0.02em',
  },
  aboutBody: {
    fontSize: '1rem',
    lineHeight: 1.75,
    color: '#475569',
    margin: 0,
  },
  knowMoreBtn: {
    marginTop: '2rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6rem',
    backgroundColor: '#f2b744',
    color: '#0c1e45',
    fontSize: '0.9rem',
    fontWeight: 800,
    padding: '0.8rem 1.6rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    boxShadow: '0 4px 14px rgba(242, 183, 68, 0.3)',
  },
  aboutRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    maxWidth: '540px',
    margin: '0 auto',
  },
  aboutCursiveBanner: {
    width: '100%',
    textAlign: 'right',
    marginBottom: '0.85rem',
  },
  aboutImageWrapper: {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 16px 36px rgba(12, 30, 69, 0.12)',
    width: '100%',
  },
  aboutImg: {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'cover',
  },
  cursiveTextAbout: {
    fontFamily: '"Caveat", cursive',
    fontSize: '2.15rem',
    fontWeight: 700,
    color: '#d97706',
    letterSpacing: '0.01em',
    lineHeight: 1.2,
    display: 'inline-block',
  },

  /* ---------------- ASSESSMENT STAGES SECTION ---------------- */
  stagesSection: {
    padding: '5rem 0',
    backgroundColor: '#f8fafc',
    borderTop: '1px solid #e2e8f0',
    borderBottom: '1px solid #e2e8f0',
  },
  stagesHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '2.5rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  viewAllStagesLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
    color: '#0c1e45',
    fontWeight: 700,
    fontSize: '0.92rem',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem 0',
  },
  stagesCardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '1.25rem',
  },
  stageCard: {
    backgroundColor: '#ffffff',
    borderRadius: '14px',
    padding: '1.6rem 1.25rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 16px rgba(12, 30, 69, 0.04)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    position: 'relative',
  },
  cardIconBox: {
    width: '52px',
    height: '52px',
    borderRadius: '12px',
    backgroundColor: '#fffbeb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  stageCardTitle: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.05rem',
    fontWeight: 700,
    color: '#0c1e45',
    margin: '0 0 0.65rem 0',
    lineHeight: 1.3,
  },
  stagePill: {
    fontSize: '0.74rem',
    fontWeight: 800,
    padding: '0.28rem 0.75rem',
    borderRadius: '20px',
    display: 'inline-block',
    marginBottom: '0.85rem',
    letterSpacing: '0.02em',
  },
  stageCardDesc: {
    fontSize: '0.82rem',
    color: '#64748b',
    lineHeight: 1.55,
    margin: '0 0 1.25rem 0',
    flexGrow: 1,
  },
  cardFooterLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    color: '#0c1e45',
    fontSize: '0.82rem',
    fontWeight: 700,
    transition: 'all 0.2s ease',
  },

  /* ---------------- HOW IT WORKS SECTION ---------------- */
  howItWorksSection: {
    padding: '5rem 0',
    backgroundColor: '#08142c',
    color: '#ffffff',
  },
  howItWorksHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '3.5rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  learnMoreLinkWhite: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
    color: '#fbbf24',
    fontWeight: 700,
    fontSize: '0.92rem',
    textDecoration: 'none',
  },
  stepsFlowContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '0.75rem',
  },
  stepItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 0.5rem',
  },
  stepCircleOuter: {
    marginBottom: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepCircle: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    color: '#08142c',
    fontSize: '1.25rem',
    fontWeight: 800,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.25)',
  },
  stepCircleGold: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: '#f2b744',
    color: '#08142c',
    fontSize: '1.25rem',
    fontWeight: 900,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 25px rgba(242, 183, 68, 0.45)',
  },
  stepTitle: {
    fontSize: '0.98rem',
    fontWeight: 700,
    color: '#ffffff',
    margin: '0 0 0.5rem 0',
    lineHeight: 1.3,
  },
  stepTitleGold: {
    fontSize: '0.98rem',
    fontWeight: 800,
    color: '#f2b744',
    margin: '0 0 0.5rem 0',
    lineHeight: 1.3,
  },
  stepSubtitle: {
    fontSize: '0.82rem',
    color: '#94a3b8',
    lineHeight: 1.5,
    margin: 0,
  },
  stepArrow: {
    fontSize: '1.8rem',
    color: 'rgba(255, 255, 255, 0.35)',
    fontWeight: 300,
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'center',
  },

  /* ---------------- TECHNIK SKILL COMPASS SECTION ---------------- */
  skillCompassSection: {
    padding: '5.5rem 0',
    backgroundColor: '#ffffff',
  },
  skillCompassGrid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 1.6fr 1.1fr',
    gap: '2.5rem',
    alignItems: 'center',
  },
  compassLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  compassBody: {
    fontSize: '0.96rem',
    lineHeight: 1.7,
    color: '#475569',
    margin: '0 0 1.85rem 0',
  },
  sampleReportBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6rem',
    backgroundColor: '#f2b744',
    color: '#0c1e45',
    fontSize: '0.9rem',
    fontWeight: 800,
    padding: '0.85rem 1.65rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    boxShadow: '0 4px 15px rgba(242, 183, 68, 0.32)',
  },

  /* LAPTOP FRAME MOCKUP */
  compassCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  laptopMockup: {
    width: '100%',
    maxWidth: '520px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  laptopBezel: {
    width: '100%',
    backgroundColor: '#1e293b',
    borderRadius: '14px 14px 0 0',
    padding: '8px 12px 6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#475569',
  },
  laptopScreen: {
    width: '100%',
    backgroundColor: '#ffffff',
    border: '3px solid #1e293b',
    borderTop: 'none',
    borderBottom: 'none',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
    overflow: 'hidden',
  },
  reportNavHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.55rem 0.85rem',
    backgroundColor: '#f8fafc',
    borderBottom: '1px solid #e2e8f0',
  },
  reportBrandTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.78rem',
    fontWeight: 800,
    color: '#0c1e45',
  },
  reportDateBadge: {
    fontSize: '0.65rem',
    fontWeight: 600,
    color: '#64748b',
    backgroundColor: '#e2e8f0',
    padding: '0.15rem 0.45rem',
    borderRadius: '4px',
  },
  reportContentArea: {
    padding: '0.85rem 1rem 1rem',
  },
  reportStudentRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    paddingBottom: '0.75rem',
    borderBottom: '1px solid #f1f5f9',
    marginBottom: '0.75rem',
  },
  studentAvatarCircle: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '2px solid #0284c7',
    flexShrink: 0,
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  studentInfoMeta: {
    flex: 1,
  },
  studentNameText: {
    fontSize: '0.92rem',
    fontWeight: 800,
    color: '#0c1e45',
  },
  studentDetailsSub: {
    fontSize: '0.7rem',
    color: '#64748b',
  },
  scoreDialBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  scoreDialRing: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: 'conic-gradient(#0284c7 0% 82%, #e2e8f0 82% 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px',
  },
  scoreDialValue: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 900,
    color: '#0284c7',
  },
  scoreDialLabel: {
    fontSize: '0.62rem',
    color: '#64748b',
    fontWeight: 700,
    marginTop: '0.15rem',
  },
  subjectBarsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    marginBottom: '0.85rem',
  },
  subjectBarRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '0.74rem',
  },
  subjectName: {
    width: '105px',
    color: '#334155',
    fontWeight: 600,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  progressBarTrack: {
    flex: 1,
    height: '6px',
    backgroundColor: '#f1f5f9',
    borderRadius: '3px',
    margin: '0 0.5rem',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#0284c7',
    borderRadius: '3px',
  },
  subjectScore: {
    width: '32px',
    textAlign: 'right',
    fontWeight: 700,
    color: '#0f172a',
  },
  miniHighlightsRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.5rem',
  },
  miniHighlightBoxGreen: {
    backgroundColor: '#f0fdf4',
    border: '1px solid #bbf7d0',
    borderRadius: '6px',
    padding: '0.45rem',
  },
  miniHighlightBoxOrange: {
    backgroundColor: '#fff7ed',
    border: '1px solid #fed7aa',
    borderRadius: '6px',
    padding: '0.45rem',
  },
  highlightBadgeHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    fontSize: '0.66rem',
    fontWeight: 800,
    textTransform: 'uppercase',
    marginBottom: '0.2rem',
  },
  highlightPills: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.15rem',
  },
  miniTag: {
    fontSize: '0.65rem',
    color: '#334155',
    lineHeight: 1.3,
  },
  laptopBase: {
    width: '115%',
    height: '14px',
    backgroundColor: '#94a3b8',
    borderRadius: '0 0 16px 16px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0 12px 25px rgba(0, 0, 0, 0.25)',
  },
  laptopNotch: {
    width: '60px',
    height: '4px',
    backgroundColor: '#cbd5e1',
    borderRadius: '0 0 4px 4px',
  },

  /* COMPASS RIGHT COLUMN */
  compassRight: {
    display: 'flex',
    flexDirection: 'column',
  },
  audienceTitle: {
    fontFamily: '"Playfair Display", Georgia, serif',
    fontSize: '1.45rem',
    fontWeight: 700,
    color: '#0c1e45',
    margin: '0 0 1.5rem 0',
    lineHeight: 1.3,
  },
  audienceList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  audienceCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1.15rem',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
    transition: 'all 0.25s ease',
  },
  audienceIconBox: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    backgroundColor: '#fef3c7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  audienceRole: {
    fontSize: '0.98rem',
    fontWeight: 800,
    color: '#0c1e45',
    margin: '0 0 0.25rem 0',
  },
  audienceText: {
    fontSize: '0.84rem',
    color: '#64748b',
    lineHeight: 1.5,
    margin: 0,
  },

  /* ---------------- PARTNERSHIP SECTION ---------------- */
  partnershipSection: {
    padding: '3rem 0',
    backgroundColor: '#ffffff',
  },
  partnershipBanner: {
    backgroundColor: '#08142c',
    borderRadius: '18px',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: '1fr 1.25fr',
    boxShadow: '0 20px 45px rgba(8, 20, 44, 0.22)',
  },
  partnershipImgBox: {
    position: 'relative',
    minHeight: '260px',
  },
  campusImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  partnershipContent: {
    padding: '3rem 3rem 3rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: '#ffffff',
  },
  partnershipEyebrow: {
    fontSize: '0.78rem',
    fontWeight: 800,
    color: '#fbbf24',
    letterSpacing: '0.12em',
    marginBottom: '0.75rem',
    textTransform: 'uppercase',
  },
  partnershipTitle: {
    fontFamily: '"Playfair Display", Georgia, serif',
    fontSize: '2rem',
    fontWeight: 700,
    color: '#ffffff',
    lineHeight: 1.25,
    margin: '0 0 0.85rem 0',
    letterSpacing: '-0.01em',
  },
  partnershipSubtitle: {
    fontSize: '0.92rem',
    color: '#cbd5e1',
    lineHeight: 1.6,
    margin: '0 0 1.85rem 0',
    maxWidth: '560px',
  },
  partnershipBtnGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  partnershipPrimaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.55rem',
    backgroundColor: '#f2b744',
    color: '#08142c',
    fontSize: '0.88rem',
    fontWeight: 800,
    padding: '0.8rem 1.45rem',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'all 0.25s ease',
    boxShadow: '0 4px 14px rgba(242, 183, 68, 0.35)',
  },
  partnershipSecondaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.55rem',
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: '0.88rem',
    fontWeight: 700,
    padding: '0.8rem 1.45rem',
    borderRadius: '8px',
    border: '1.5px solid rgba(255, 255, 255, 0.4)',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
  },

  /* ---------------- FAQ SECTION ---------------- */
  faqSection: {
    padding: '5rem 0',
    backgroundColor: '#f8fafc',
    borderTop: '1px solid #e2e8f0',
  },
  faqHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '2.5rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  viewAllFaqsLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
    color: '#0c1e45',
    fontWeight: 700,
    fontSize: '0.92rem',
    textDecoration: 'none',
  },
  faqTwoColGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
  },
  faqCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  faqCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
    overflow: 'hidden',
    transition: 'border-color 0.2s ease',
  },
  faqQuestionBtn: {
    width: '100%',
    padding: '1.15rem 1.35rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
  },
  faqQuestionText: {
    fontSize: '0.98rem',
    fontWeight: 700,
    color: '#0c1e45',
  },
  faqAnswerBox: {
    padding: '0 1.35rem 1.25rem',
    borderTop: '1px solid #f8fafc',
  },
  faqAnswerText: {
    fontSize: '0.88rem',
    lineHeight: 1.65,
    color: '#475569',
    margin: 0,
  },

  /* ---------------- MODAL STYLES ---------------- */
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(8, 20, 44, 0.65)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '1rem',
  },
  modalBox: {
    backgroundColor: '#ffffff',
    borderRadius: '18px',
    width: '100%',
    maxWidth: '560px',
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.28)',
  },
  modalHeader: {
    padding: '1.35rem 1.65rem',
    borderBottom: '1px solid #f1f5f9',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalHeaderTitleGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
  },
  modalIconWrap: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    backgroundColor: '#fef3c7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalStageTitle: {
    fontSize: '1.25rem',
    fontWeight: 800,
    color: '#0c1e45',
    margin: '0 0 0.25rem 0',
  },
  modalCloseBtn: {
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    backgroundColor: '#f1f5f9',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  modalBody: {
    padding: '1.65rem',
  },
  modalDesc: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: '#334155',
    margin: '0 0 1.25rem 0',
  },
  modalInfoGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  modalInfoCard: {
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    padding: '0.85rem',
  },
  infoLabel: {
    fontSize: '0.68rem',
    fontWeight: 800,
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '0.25rem',
  },
  infoVal: {
    fontSize: '0.85rem',
    fontWeight: 700,
    color: '#0c1e45',
  },
  modalSection: {
    marginBottom: '1.25rem',
  },
  modalSectionTitle: {
    fontSize: '0.85rem',
    fontWeight: 700,
    color: '#0f172a',
    margin: '0 0 0.5rem 0',
  },
  subjectsTagsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  subjectChip: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    backgroundColor: '#f0fdf4',
    border: '1px solid #bbf7d0',
    color: '#166534',
    fontSize: '0.78rem',
    fontWeight: 600,
    padding: '0.35rem 0.75rem',
    borderRadius: '20px',
  },
  modalText: {
    fontSize: '0.88rem',
    color: '#475569',
    lineHeight: 1.6,
    margin: 0,
  },
  modalFooter: {
    padding: '1.15rem 1.65rem',
    borderTop: '1px solid #f1f5f9',
    backgroundColor: '#f8fafc',
    borderRadius: '0 0 18px 18px',
  },
  modalActionBtn: {
    width: '100%',
    padding: '0.85rem',
    backgroundColor: '#f2b744',
    color: '#0c1e45',
    fontWeight: 800,
    fontSize: '0.92rem',
    borderRadius: '8px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 14px rgba(242, 183, 68, 0.35)',
  },

  /* SAMPLE REPORT PREVIEW IN MODAL */
  sampleReportFullBox: {
    backgroundColor: '#ffffff',
    border: '1.5px solid #e2e8f0',
    borderRadius: '12px',
    padding: '1.25rem',
    boxShadow: '0 6px 18px rgba(0,0,0,0.04)',
  },
  sampleReportHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '1rem',
    borderBottom: '1.5px solid #f1f5f9',
  },
  overallScoreBadge: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f9ff',
    border: '1.5px solid #bae6fd',
    borderRadius: '10px',
    padding: '0.45rem 0.85rem',
  },
};

// Responsive CSS Injection
if (typeof document !== 'undefined') {
  const assessmentStyleId = 'academic-assessment-responsive-styles';
  if (!document.getElementById(assessmentStyleId)) {
    const styleEl = document.createElement('style');
    styleEl.id = assessmentStyleId;
    styleEl.innerText = `
      .hero-primary-btn:hover {
        transform: translateY(-2px);
        background-color: #eab308 !important;
        box-shadow: 0 8px 24px rgba(242, 183, 68, 0.5) !important;
      }
      .hero-secondary-btn:hover {
        background-color: rgba(255, 255, 255, 0.12) !important;
        border-color: #ffffff !important;
      }
      .know-more-btn:hover, .sample-report-btn:hover, .partner-primary-btn:hover {
        transform: translateY(-2px);
        background-color: #eab308 !important;
        box-shadow: 0 8px 22px rgba(242, 183, 68, 0.45) !important;
      }
      .partner-secondary-btn:hover {
        background-color: rgba(255, 255, 255, 0.12) !important;
        border-color: #ffffff !important;
      }
      .stage-card-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 16px 36px rgba(12, 30, 69, 0.12) !important;
        border-color: #cbd5e1 !important;
      }
      .stage-card-item:hover .cardFooterLink {
        color: #ea580c !important;
      }
      .ribbon-item:hover {
        background-color: rgba(255, 255, 255, 0.08) !important;
      }
      .audience-card-hover:hover {
        border-color: #f2b744 !important;
        box-shadow: 0 6px 20px rgba(242, 183, 68, 0.12) !important;
        transform: translateX(4px);
      }
      .view-stages-link:hover, .view-faqs-link:hover, .learn-more-link-white:hover {
        color: #f59e0b !important;
      }
      .faq-accordion-item:hover {
        border-color: #cbd5e1 !important;
      }

      @keyframes modalPopUp {
        from {
          opacity: 0;
          transform: scale(0.94) translateY(10px);
        }
        to {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }
      .modal-content-animated {
        animation: modalPopUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      @media (max-width: 1024px) {
        .stages-cards-grid {
          grid-template-columns: repeat(3, 1fr) !important;
        }
        .skill-compass-grid-responsive {
          grid-template-columns: 1fr !important;
          gap: 3rem !important;
        }
        .hero-grid-responsive {
          grid-template-columns: 1fr !important;
          gap: 2.5rem !important;
        }
        .hero-title-responsive {
          font-size: 2.6rem !important;
        }
        .about-grid-responsive {
          grid-template-columns: 1fr !important;
        }
        .partnership-banner-responsive {
          grid-template-columns: 1fr !important;
        }
      }

      @media (max-width: 768px) {
        .stages-cards-grid {
          grid-template-columns: 1fr !important;
        }
        .steps-flow-container {
          flex-direction: column !important;
          align-items: center !important;
          gap: 1.5rem !important;
        }
        .step-arrow {
          transform: rotate(90deg);
          margin: 0 !important;
        }
        .faq-grid-responsive {
          grid-template-columns: 1fr !important;
        }
        .desktop-break {
          display: none !important;
        }
        .hero-title-responsive {
          font-size: 2.2rem !important;
        }
      }
    `;
    document.head.appendChild(styleEl);
  }
}
