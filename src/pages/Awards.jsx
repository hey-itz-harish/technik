import React from 'react';
import { Link } from 'react-router-dom';
import exactHeroBoyImg from '../assets/exact_hero_boy.jpg';
import prideTrophyHighres from '../assets/pride_trophy_highres.jpg';
import aiRobot1080p from '../assets/ai_robot_1080p.jpg';
import kalamSpeechPhoto from '../assets/kalam_speech_photo.jpg';
import ctaStudentImg from '../assets/cta_student_hero.jpg';
import certGraphic from '../assets/cert_graphic.jpg';
import prideBookGraphic from '../assets/pride_book_graphic.jpg';
import specialHonoursGraphic from '../assets/special_honours_graphic.jpg';
import schoolCardImg from '../assets/school_card_img.jpg';
import handshakeCardImg from '../assets/handshake_card_img.jpg';
import news1Img from '../assets/news1.jpg';
import news2Img from '../assets/news2.jpg';
import news3Img from '../assets/news3.jpg';
import {
  Trophy,
  Award,
  Star,
  ArrowRight,
  Users,
  Building2,
  MapPin,
  Lightbulb,
  Target,
  Medal,
  GraduationCap,
  FileText,
  TrendingUp,
  Sparkles,
  Shield
} from 'lucide-react';

export default function Awards() {
  return (
    <div style={styles.page}>

      {/* 1. HERO BANNER SECTION (Blue Background with Horizontal Stage Floor, Center Spotlight & Confetti) */}
      <section style={styles.heroSection} className="stage-hero-bg">

        {/* Celebratory Confetti Shower */}
        <div className="confetti-container">
          <div className="confetti-piece" style={{ left: '4%', background: '#fbbf24', animationDelay: '0s' }} />
          <div className="confetti-piece" style={{ left: '12%', background: '#38bdf8', animationDelay: '0.8s' }} />
          <div className="confetti-piece" style={{ left: '22%', background: '#f43f5e', animationDelay: '1.6s' }} />
          <div className="confetti-piece" style={{ left: '32%', background: '#4ade80', animationDelay: '0.4s' }} />
          <div className="confetti-piece" style={{ left: '44%', background: '#c084fc', animationDelay: '2.2s' }} />
          <div className="confetti-piece" style={{ left: '54%', background: '#fbbf24', animationDelay: '1.1s' }} />
          <div className="confetti-piece" style={{ left: '65%', background: '#f59e0b', animationDelay: '2.8s' }} />
          <div className="confetti-piece" style={{ left: '76%', background: '#38bdf8', animationDelay: '0.5s' }} />
          <div className="confetti-piece" style={{ left: '86%', background: '#f43f5e', animationDelay: '1.9s' }} />
          <div className="confetti-piece" style={{ left: '94%', background: '#4ade80', animationDelay: '3.2s' }} />
        </div>

        <div className="container awards-hero-container" style={styles.heroContainer}>
          
          {/* Left Hero Text Block */}
          <div style={styles.heroLeft} className="awards-hero-left">
            <div style={styles.heroEyebrowRow}>
              <span style={styles.heroEyebrowGold}>EVERY STUDENT</span>
            </div>

            <h1 style={styles.heroMainHeading} className="awards-hero-heading">
              <span style={{ color: '#ffffff', display: 'block' }}>DESERVES A</span>
              <span style={{ color: '#fbbf24', display: 'block' }}>MOMENT OF PRIDE.</span>
            </h1>

            <div style={styles.heroValuesTagline}>
              <span style={{ color: '#38bdf8', fontWeight: 800 }}>Innovate. </span>
              <span style={{ color: '#fbbf24', fontWeight: 800 }}>Compete. </span>
              <span style={{ color: '#4ade80', fontWeight: 800 }}>Achieve. </span>
              <span style={{ color: '#ffffff', fontWeight: 800 }}>Be Recognised.</span>
            </div>

            <p style={styles.heroDesc}>
              Technik Olympiad is an educational initiative committed to identifying, encouraging and celebrating the unique talents and achievements of school students.
            </p>
          </div>

          {/* Center Horizontal Fixed 3-Star Stage Display & Accents */}
          <div style={styles.heroCenter3dStage} className="awards-hero-center">
            {/* Left Tech Accent */}
            <div style={styles.heroLeftDesignAccent}>
              <div style={styles.techNodeBlue} />
              <div style={styles.techLineCyan} />
              <Sparkles size={18} color="#38bdf8" className="sparkle-particle" />
            </div>

            {/* 3 Horizontal Fixed Gold Stars Setup */}
            <div style={styles.threeStarsGroup}>
              {/* Left Star */}
              <div style={styles.starLeftWrapper} className="star-side-horizontal">
                <svg width="52" height="52" viewBox="0 0 24 24" fill="url(#starGoldGrad)">
                  <defs>
                    <linearGradient id="starGoldGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="50%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              {/* Center Main Star */}
              <div style={styles.starMainWrapper} className="star-main-horizontal">
                <svg width="96" height="96" viewBox="0 0 24 24" fill="url(#starGoldMainGrad)">
                  <defs>
                    <linearGradient id="starGoldMainGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="30%" stopColor="#fde047" />
                      <stop offset="65%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#b45309" />
                    </linearGradient>
                  </defs>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              {/* Right Star */}
              <div style={styles.starRightWrapper} className="star-side-horizontal">
                <svg width="52" height="52" viewBox="0 0 24 24" fill="url(#starGoldGrad)">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>

            {/* Right Tech Accent */}
            <div style={styles.heroRightDesignAccent}>
              <Sparkles size={20} color="#fbbf24" className="sparkle-particle" />
              <div style={styles.techLineGold} />
              <div style={styles.techNodeGold} />
            </div>
          </div>

          {/* Right Hero Stack of 4 Badges & Handwritten Script */}
          <div style={styles.heroRight} className="awards-hero-right">
            <div style={styles.badgesColumn} className="awards-badges-col">
              <div style={styles.badgeRow}>
                <div style={styles.badgeCircleIcon}>
                  <Shield size={18} color="#ffffff" />
                </div>
                <div style={styles.badgeTextGroup}>
                  <span style={styles.badgeTitle}>Discover</span>
                  <span style={styles.badgeSub}>Potential</span>
                </div>
              </div>

              <div style={styles.badgeRow}>
                <div style={styles.badgeCircleIcon}>
                  <Users size={18} color="#ffffff" />
                </div>
                <div style={styles.badgeTextGroup}>
                  <span style={styles.badgeTitle}>Compete</span>
                  <span style={styles.badgeSub}>With Confidence</span>
                </div>
              </div>

              <div style={styles.badgeRow}>
                <div style={styles.badgeCircleIcon}>
                  <Target size={18} color="#ffffff" />
                </div>
                <div style={styles.badgeTextGroup}>
                  <span style={styles.badgeTitle}>Achieve</span>
                  <span style={styles.badgeSub}>Excellence</span>
                </div>
              </div>

              <div style={styles.badgeRow}>
                <div style={styles.badgeCircleIcon}>
                  <Trophy size={18} color="#ffffff" />
                </div>
                <div style={styles.badgeTextGroup}>
                  <span style={styles.badgeTitle}>Be Recognised</span>
                  <span style={styles.badgeSub}>Always</span>
                </div>
              </div>
            </div>

            {/* Handwritten Script Tag */}
            <div style={styles.heroHandwrittenScript} className="awards-script-text">
              <span style={styles.scriptGoldMain}>A Brighter</span>
              <br />
              <span style={styles.scriptGoldSub}>Tomorrow</span>
              <br />
              <span style={styles.scriptGoldTag}>Begins Here!</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. HIGHLIGHT STATS BAR (4 Columns) */}
      <section style={styles.statsBarSection}>
        <div className="container">
          <div style={styles.statsBarBox} className="awards-stats-box">
            {/* Stat 1 */}
            <div style={styles.statCol}>
              <div style={styles.statIconBadge}>
                <Users size={26} color="#2563eb" />
              </div>
              <div>
                <h4 style={styles.statMainTitle}>Play School to Class 12</h4>
                <p style={styles.statSubText}>All Boards Welcome</p>
                <p style={styles.statSmallText}>(Matric, CBSE, ICSE, IB and others)</p>
              </div>
            </div>

            <div style={styles.statDivider} className="awards-stat-divider" />

            {/* Stat 2 */}
            <div style={styles.statCol}>
              <div style={styles.statIconBadge}>
                <Building2 size={26} color="#2563eb" />
              </div>
              <div>
                <h4 style={styles.statMainTitle}>Nominated by Schools</h4>
                <p style={styles.statSubText}>Max 2 Students / School / Year</p>
              </div>
            </div>

            <div style={styles.statDivider} className="awards-stat-divider" />

            {/* Stat 3 */}
            <div style={styles.statCol}>
              <div style={styles.statIconBadge}>
                <Users size={26} color="#2563eb" />
              </div>
              <div>
                <h4 style={styles.statMainTitle}>Recognise Every Talent</h4>
                <p style={styles.statSubText}>Academics, Creativity, Leadership and More</p>
              </div>
            </div>

            <div style={styles.statDivider} className="awards-stat-divider" />

            {/* Stat 4 */}
            <div style={styles.statCol}>
              <div style={styles.statIconBadge}>
                <MapPin size={26} color="#2563eb" />
              </div>
              <div>
                <h4 style={styles.statMainTitle}>Across 5 States + 1 UT</h4>
                <p style={styles.statSubText}>Building a Brighter Generation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT, KALAM CARD & OBJECTIVES GRID */}
      <section style={styles.mainGridSection}>
        <div className="container">
          <div style={styles.threeColGrid} className="awards-three-col-grid">
            
            {/* Col 1: ABOUT TECHNIK PRIDE AWARD */}
            <div style={styles.aboutCol}>
              <div style={styles.eyebrowRow}>
                <div style={styles.eyebrowLine} />
                <span style={styles.eyebrowText}>ABOUT TECHNIK PRIDE AWARD</span>
              </div>

              <h2 style={styles.aboutHeading}>
                Recognition<br />Creates Lifelong Impact.
              </h2>

              <p style={styles.aboutPara}>
                Technik Pride Award is a prestigious initiative to celebrate the achievements, talents and potential of school students from Play School to Class 12 across all boards (Matric, CBSE, ICSE, IB and others). Schools nominate students who present their achievements through a brief presentation to a panel of eminent jury members. The best students are recognised at a grand award function with certificates, special honours and state-level recognition.
              </p>
            </div>

            {/* Col 2: DR. A.P.J. ABDUL KALAM QUOTE CARD */}
            <div style={styles.kalamCardWrapper}>
              <div style={styles.kalamCardContainer}>
                {/* Upper Quote & Portrait Area */}
                <div style={styles.kalamTopContent}>
                  <div style={styles.kalamQuoteSide}>
                    <p style={styles.kalamQuoteText}>
                      “Dream, Dream, Dream. Dreams transform into thoughts and thoughts result in action.”
                    </p>
                    <span style={styles.kalamAuthorText}>— Dr. A.P.J. Abdul Kalam</span>
                  </div>
                  <div style={styles.kalamImgSide}>
                    <img
                      src={kalamSpeechPhoto}
                      alt="Dr. A.P.J. Abdul Kalam"
                      style={styles.kalamPortraitImg}
                    />
                  </div>
                </div>

                {/* Bottom Bronze/Gold Banner */}
                <div style={styles.kalamBottomBanner}>
                  <div style={styles.kalamInspiredText}>Inspired by the vision of</div>
                  <div style={styles.kalamNameTitle}>Dr. A.P.J. Abdul Kalam</div>
                  <div style={styles.kalamSubTitle}>Celebrating Young Achievers</div>
                </div>
              </div>
            </div>

            {/* Col 3: OUR OBJECTIVES */}
            <div style={styles.objectivesCol}>
              <div style={styles.eyebrowRow}>
                <div style={styles.eyebrowLine} />
                <span style={styles.eyebrowText}>OUR OBJECTIVES</span>
              </div>

              <div style={styles.objectivesList}>
                <div style={styles.objectiveItem}>
                  <div style={styles.objIconCircle}>
                    <Trophy size={18} color="#2563eb" />
                  </div>
                  <span style={styles.objText}>Recognise and celebrate student achievements</span>
                </div>

                <div style={styles.objectiveItem}>
                  <div style={styles.objIconCircle}>
                    <Lightbulb size={18} color="#2563eb" />
                  </div>
                  <span style={styles.objText}>Encourage innovation, creativity and leadership</span>
                </div>

                <div style={styles.objectiveItem}>
                  <div style={styles.objIconCircle}>
                    <Target size={18} color="#2563eb" />
                  </div>
                  <span style={styles.objText}>Build confidence and inspire greater goals</span>
                </div>

                <div style={styles.objectiveItem}>
                  <div style={styles.objIconCircle}>
                    <Users size={18} color="#2563eb" />
                  </div>
                  <span style={styles.objText}>Provide a platform for holistic development</span>
                </div>

                <div style={styles.objectiveItem}>
                  <div style={styles.objIconCircle}>
                    <Star size={18} color="#2563eb" />
                  </div>
                  <span style={styles.objText}>Create role models for future generations</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE SELECTION PROCESS */}
      <section style={styles.processSection}>
        <div className="container">
          <div style={styles.eyebrowRow}>
            <div style={styles.eyebrowLine} />
            <span style={styles.eyebrowText}>THE SELECTION PROCESS</span>
          </div>

          <div style={styles.processFlexRow}>
            {/* Step 1: School Nominations */}
            <div style={styles.processStepCard}>
              <div style={{ ...styles.stepCircleIcon, background: '#ffe4e6', border: '2.5px solid #f43f5e' }}>
                <Building2 size={30} color="#e11d48" />
              </div>
              <div style={styles.stepTitleBox}>
                <span style={styles.stepMainTitle}>School</span>
                <span style={styles.stepSubTitle}>Nominations</span>
              </div>
            </div>

            <div style={styles.processArrow}>
              <ArrowRight size={22} color="#38bdf8" />
            </div>

            {/* Step 2: Presentation */}
            <div style={styles.processStepCard}>
              <div style={{ ...styles.stepCircleIcon, background: '#dbeafe', border: '2.5px solid #3b82f6' }}>
                <FileText size={30} color="#2563eb" />
              </div>
              <div style={styles.stepTitleBox}>
                <span style={styles.stepMainTitle}>Presentation</span>
              </div>
            </div>

            <div style={styles.processArrow}>
              <ArrowRight size={22} color="#38bdf8" />
            </div>

            {/* Step 3: Evaluation */}
            <div style={styles.processStepCard}>
              <div style={{ ...styles.stepCircleIcon, background: '#dcfce7', border: '2.5px solid #22c55e' }}>
                <Users size={30} color="#16a34a" />
              </div>
              <div style={styles.stepTitleBox}>
                <span style={styles.stepMainTitle}>Evaluation</span>
              </div>
            </div>

            <div style={styles.processArrow}>
              <ArrowRight size={22} color="#38bdf8" />
            </div>

            {/* Step 4: Winners */}
            <div style={styles.processStepCard}>
              <div style={{ ...styles.stepCircleIcon, background: '#f3e8ff', border: '2.5px solid #a855f7' }}>
                <Medal size={30} color="#9333ea" />
              </div>
              <div style={styles.stepTitleBox}>
                <span style={styles.stepMainTitle}>Winners</span>
              </div>
            </div>

            <div style={styles.processArrow}>
              <ArrowRight size={22} color="#38bdf8" />
            </div>

            {/* Step 5: Award Function */}
            <div style={styles.processStepCard}>
              <div style={{ ...styles.stepCircleIcon, background: '#fef3c7', border: '2.5px solid #f59e0b' }}>
                <Users size={30} color="#d97706" />
              </div>
              <div style={styles.stepTitleBox}>
                <span style={styles.stepMainTitle}>Award Function</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AWARDS & RECOGNITION AND KEY BENEFITS */}
      <section style={styles.bottomGridSection}>
        <div className="container">
          <div style={styles.twoColBottomGrid}>

            {/* Left Box: AWARDS & RECOGNITION */}
            <div style={styles.awardsCol}>
              <div style={styles.eyebrowRow}>
                <div style={styles.eyebrowLine} />
                <span style={styles.eyebrowText}>AWARDS & RECOGNITION</span>
              </div>

              <div style={styles.awardsCardContainer}>
                <div style={styles.awardsThreeGrid}>
                  {/* Item 1: Certificate */}
                  <div style={styles.awardItemBox}>
                    <div style={styles.awardGraphicWrap}>
                      <Award size={34} color="#d97706" />
                    </div>
                    <h4 style={styles.awardItemTitle}>Certificate</h4>
                    <p style={styles.awardItemSub}>Recognised Certificate for All Participants</p>
                  </div>

                  <div style={styles.awardItemDivider} />

                  {/* Item 2: Pride Book */}
                  <div style={styles.awardItemBox}>
                    <div style={styles.awardGraphicWrap}>
                      <Star size={34} color="#d97706" />
                    </div>
                    <h4 style={styles.awardItemTitle}>Pride Book</h4>
                    <p style={styles.awardItemSub}>Half-page feature with photo & write-up</p>
                  </div>

                  <div style={styles.awardItemDivider} />

                  {/* Item 3: Special Honours */}
                  <div style={styles.awardItemBox}>
                    <div style={{ ...styles.awardGraphicWrap, background: '#eff6ff', border: '1px solid #dbeafe' }}>
                      <Medal size={34} color="#2563eb" />
                    </div>
                    <h4 style={styles.awardItemTitle}>Special Honours</h4>
                    <p style={styles.awardItemSub}>From Eminent Chief Guests</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: KEY BENEFITS */}
            <div style={styles.benefitsCol}>
              <div style={styles.eyebrowRow}>
                <div style={styles.eyebrowLine} />
                <span style={styles.eyebrowText}>KEY BENEFITS</span>
              </div>

              <div style={styles.benefitsCardContainer}>
                <div style={styles.benefitsFlexRow}>
                  {/* Left list */}
                  <div style={styles.benefitsListGroup}>
                    <div style={styles.benefitRow}>
                      <div style={styles.benefitIconCircle}>
                        <GraduationCap size={16} color="#2563eb" />
                      </div>
                      <span style={styles.benefitText}>Boosts confidence and self-esteem</span>
                    </div>

                    <div style={styles.benefitRow}>
                      <div style={styles.benefitIconCircle}>
                        <Medal size={16} color="#2563eb" />
                      </div>
                      <span style={styles.benefitText}>Encourages overall personality development</span>
                    </div>

                    <div style={styles.benefitRow}>
                      <div style={styles.benefitIconCircle}>
                        <TrendingUp size={16} color="#2563eb" />
                      </div>
                      <span style={styles.benefitText}>Recognition at state-level platform</span>
                    </div>

                    <div style={styles.benefitRow}>
                      <div style={styles.benefitIconCircle}>
                        <Users size={16} color="#2563eb" />
                      </div>
                      <span style={styles.benefitText}>Inspires students to achieve greater goals</span>
                    </div>

                    <div style={styles.benefitRow}>
                      <div style={styles.benefitIconCircle}>
                        <Star size={16} color="#2563eb" />
                      </div>
                      <span style={styles.benefitText}>Builds a culture of excellence in schools</span>
                    </div>
                  </div>

                  {/* Right script text without border box */}
                  <div style={styles.scriptBadgeGroup}>
                    <span style={styles.scriptTextMain}>Every</span>
                    <span style={styles.scriptTextMiddle}>Achievement</span>
                    <span style={styles.scriptTextBottom}>Matters</span>
                    <div style={styles.scriptUnderline} />
                  </div>
                </div>
              </div>
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

  /* HERO STYLES */
  heroSection: {
    background: 'linear-gradient(135deg, #020b24 0%, #061742 100%)',
    color: '#ffffff',
    padding: '1.75rem 0 1rem 0',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  heroLeft: {
    flex: '1 1 520px',
    maxWidth: '650px',
  },
  heroEyebrowRow: {
    marginBottom: '0.3rem',
  },
  heroEyebrowGold: {
    fontSize: '0.95rem',
    fontWeight: 900,
    color: '#fbbf24',
    letterSpacing: '0.08em',
  },
  heroMainHeading: {
    fontSize: '2.8rem',
    fontWeight: 900,
    lineHeight: '1.1',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.75rem',
  },
  heroValuesTagline: {
    fontSize: '1.15rem',
    marginBottom: '0.75rem',
  },
  heroDesc: {
    fontSize: '0.92rem',
    color: '#cbd5e1',
    lineHeight: '1.55',
  },

  heroCenter3dStage: {
    flex: '1 1 320px',
    maxWidth: '360px',
    height: '240px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  threeStarsGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.25rem',
    zIndex: 3,
    position: 'relative',
  },
  starLeftWrapper: {
    display: 'inline-block',
  },
  starMainWrapper: {
    display: 'inline-block',
  },
  starRightWrapper: {
    display: 'inline-block',
  },
  heroLeftDesignAccent: {
    position: 'absolute',
    left: '10px',
    top: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    zIndex: 1,
  },
  heroRightDesignAccent: {
    position: 'absolute',
    right: '10px',
    bottom: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    zIndex: 1,
  },
  techNodeBlue: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#38bdf8',
    boxShadow: '0 0 10px #38bdf8',
  },
  techLineCyan: {
    width: '2px',
    height: '30px',
    background: 'linear-gradient(to bottom, #38bdf8, transparent)',
  },
  techNodeGold: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#fbbf24',
    boxShadow: '0 0 10px #fbbf24',
  },
  techLineGold: {
    width: '2px',
    height: '30px',
    background: 'linear-gradient(to top, #fbbf24, transparent)',
  },

  heroRight: {
    flex: '1 1 240px',
    maxWidth: '260px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    alignItems: 'flex-end',
  },
  badgesColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.7rem',
    width: '100%',
  },
  badgeRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    justifyContent: 'flex-end',
  },
  badgeCircleIcon: {
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    border: '1.5px solid rgba(255, 255, 255, 0.4)',
    background: 'rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  badgeTextGroup: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'right',
  },
  badgeTitle: {
    fontSize: '0.9rem',
    fontWeight: 800,
    color: '#ffffff',
    fontFamily: 'var(--font-heading)',
  },
  badgeSub: {
    fontSize: '0.72rem',
    color: '#94a3b8',
  },

  heroHandwrittenScript: {
    fontFamily: '"Georgia", cursive, serif',
    fontStyle: 'italic',
    textAlign: 'right',
    lineHeight: '1.2',
  },
  scriptGoldMain: {
    fontSize: '1.2rem',
    color: '#fbbf24',
    fontWeight: 700,
  },
  scriptGoldSub: {
    fontSize: '1.3rem',
    color: '#fbbf24',
    fontWeight: 700,
  },
  scriptGoldTag: {
    fontSize: '1.2rem',
    color: '#fbbf24',
    fontWeight: 700,
  },

  /* 2. STATS HIGHLIGHT BAR */
  statsBarSection: {
    background: '#ffffff',
    padding: '0.75rem 0',
    borderBottom: '1px solid #e2e8f0',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
  },
  statsBarBox: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '0.6rem 1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  statCol: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    flex: '1 1 180px',
  },
  statIconBadge: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#eff6ff',
    border: '1px solid #bfdbfe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  statMainTitle: {
    fontSize: '0.92rem',
    fontWeight: 800,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.1rem',
  },
  statSubText: {
    fontSize: '0.78rem',
    fontWeight: 600,
    color: '#475569',
  },
  statSmallText: {
    fontSize: '0.7rem',
    color: '#64748b',
  },
  statDivider: {
    width: '1px',
    height: '36px',
    background: '#cbd5e1',
  },

  /* 3. MAIN 3-COLUMN SECTION */
  mainGridSection: {
    padding: '1.5rem 0 1rem 0',
  },
  threeColGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    alignItems: 'stretch',
  },
  aboutCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  eyebrowRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    marginBottom: '0.5rem',
  },
  eyebrowLine: {
    width: '20px',
    height: '3px',
    background: '#fbbf24',
    borderRadius: '2px',
  },
  eyebrowText: {
    fontSize: '0.78rem',
    fontWeight: 900,
    color: '#d97706',
    letterSpacing: '0.08em',
    fontFamily: 'var(--font-heading)',
  },
  aboutHeading: {
    fontSize: '2rem',
    fontWeight: 900,
    color: '#1e3a8a',
    fontFamily: 'var(--font-heading)',
    lineHeight: '1.15',
    marginBottom: '0.65rem',
  },
  aboutPara: {
    fontSize: '0.92rem',
    color: '#475569',
    lineHeight: '1.55',
  },

  /* KALAM QUOTE CARD */
  kalamCardWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kalamCardContainer: {
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid #d1d5db',
    boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
    background: '#ffffff',
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  kalamTopContent: {
    background: '#f6f3ed',
    padding: '1.1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.85rem',
  },
  kalamQuoteSide: {
    flex: '1 1 auto',
  },
  kalamQuoteText: {
    fontFamily: '"Georgia", serif',
    fontStyle: 'italic',
    fontSize: '0.92rem',
    color: '#1e293b',
    lineHeight: '1.4',
    fontWeight: 700,
    marginBottom: '0.5rem',
  },
  kalamAuthorText: {
    fontSize: '0.82rem',
    fontWeight: 800,
    color: '#475569',
    display: 'block',
  },
  kalamImgSide: {
    width: '125px',
    height: '145px',
    flexShrink: 0,
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  kalamPortraitImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  kalamBottomBanner: {
    background: 'linear-gradient(180deg, #4a2c0d 0%, #311c06 100%)',
    padding: '0.65rem 0.85rem',
    textAlign: 'center',
    color: '#ffffff',
  },
  kalamInspiredText: {
    fontSize: '0.8rem',
    color: '#fef08a',
    fontWeight: 600,
    fontFamily: '"Georgia", serif',
    fontStyle: 'italic',
  },
  kalamNameTitle: {
    fontSize: '1.15rem',
    fontWeight: 900,
    color: '#fbbf24',
    fontFamily: 'var(--font-heading)',
    margin: '0.1rem 0',
  },
  kalamSubTitle: {
    fontSize: '0.82rem',
    color: '#ffffff',
    fontWeight: 600,
  },

  /* OBJECTIVES */
  objectivesCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  objectivesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    marginTop: '0.35rem',
  },
  objectiveItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: '#ffffff',
    padding: '0.6rem 0.85rem',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
  },
  objIconCircle: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: '#eff6ff',
    border: '1px solid #bfdbfe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  objText: {
    fontSize: '0.88rem',
    fontWeight: 700,
    color: '#1e293b',
    fontFamily: 'var(--font-heading)',
  },

  /* 4. THE SELECTION PROCESS */
  processSection: {
    padding: '1.5rem 0',
    background: '#ffffff',
    borderTop: '1px solid #e2e8f0',
    borderBottom: '1px solid #e2e8f0',
  },
  processFlexRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem',
    marginTop: '1rem',
    flexWrap: 'wrap',
  },
  processStepCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '0.6rem',
    flex: '1 1 120px',
  },
  stepCircleIcon: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  },
  stepTitleBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stepMainTitle: {
    fontSize: '0.92rem',
    fontWeight: 900,
    color: '#1e293b',
    fontFamily: 'var(--font-heading)',
  },
  stepSubTitle: {
    fontSize: '0.92rem',
    fontWeight: 900,
    color: '#1e293b',
    fontFamily: 'var(--font-heading)',
  },
  processArrow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#38bdf8',
  },

  /* 5. AWARDS & RECOGNITION AND KEY BENEFITS */
  bottomGridSection: {
    padding: '1.25rem 0 1rem 0',
  },
  twoColBottomGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.5rem',
  },
  awardsCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  awardsCardContainer: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '1.25rem 1.5rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
    marginTop: '0.35rem',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  awardsThreeGrid: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: '1.25rem',
    width: '100%',
  },
  awardItemBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    flex: '1 1 100px',
    justifyContent: 'flex-start',
  },
  awardGraphicWrap: {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    background: '#fffbeb',
    border: '1px solid #fef3c7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.6rem',
    flexShrink: 0,
  },
  awardItemTitle: {
    fontSize: '0.95rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.25rem',
    minHeight: '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  awardItemSub: {
    fontSize: '0.76rem',
    color: '#64748b',
    lineHeight: '1.3',
    margin: 0,
    maxWidth: '130px',
  },
  awardItemDivider: {
    width: '1px',
    alignSelf: 'stretch',
    background: '#e2e8f0',
  },

  benefitsCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  benefitsCardContainer: {
    background: '#fffdf5',
    borderRadius: '16px',
    padding: '1.25rem 1.5rem',
    border: '1px solid #fef08a',
    boxShadow: '0 4px 16px rgba(245, 158, 11, 0.04)',
    marginTop: '0.35rem',
    flex: 1,
  },
  benefitsFlexRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.25rem',
    flexWrap: 'wrap',
    height: '100%',
  },
  benefitsListGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    flex: '1 1 190px',
  },
  benefitRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
  },
  benefitIconCircle: {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    background: '#dbeafe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  benefitText: {
    fontSize: '0.86rem',
    fontWeight: 700,
    color: '#1e293b',
    fontFamily: 'var(--font-heading)',
  },
  scriptBadgeGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    fontFamily: '"Georgia", serif',
    fontStyle: 'italic',
    textAlign: 'right',
    paddingRight: '0.35rem',
    flexShrink: 0,
  },
  scriptTextMain: {
    fontSize: '1.5rem',
    fontWeight: 900,
    lineHeight: 1.15,
    color: '#1e3a8a',
  },
  scriptTextMiddle: {
    fontSize: '1.6rem',
    fontWeight: 900,
    lineHeight: 1.15,
    color: '#d97706',
  },
  scriptTextBottom: {
    fontSize: '1.7rem',
    fontWeight: 900,
    lineHeight: 1.15,
    color: '#1e3a8a',
  },
  scriptUnderline: {
    width: '95px',
    height: '3px',
    background: '#f59e0b',
    borderRadius: '2px',
    marginTop: '3px',
  },
};

// Add responsive CSS styling
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @media (max-width: 991px) {
    .awards-hero-container {
      flex-direction: column !important;
      align-items: center !important;
      text-align: center !important;
      gap: 1.75rem !important;
    }
    .awards-hero-left {
      flex: 1 1 100% !important;
      max-width: 100% !important;
      text-align: center !important;
    }
    .awards-hero-heading {
      font-size: clamp(2rem, 6vw, 2.6rem) !important;
    }
    .awards-hero-center {
      max-width: 100% !important;
      margin: 0 auto !important;
    }
    .awards-hero-right {
      max-width: 100% !important;
      align-items: center !important;
      text-align: center !important;
    }
    .awards-badges-col {
      align-items: center !important;
    }
    .awards-badges-col .badgeRow {
      justify-content: center !important;
    }
    .awards-script-text {
      text-align: center !important;
    }
    .awards-three-col-grid {
      grid-template-columns: 1fr !important;
    }
  }
  @media (max-width: 640px) {
    .awards-hero-heading {
      font-size: clamp(1.75rem, 7vw, 2.1rem) !important;
    }
    .awards-stats-box {
      flex-direction: column !important;
      align-items: stretch !important;
      gap: 1rem !important;
    }
    .awards-stat-divider {
      display: none !important;
    }
    .awards-three-col-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;
document.head.appendChild(styleSheet);
