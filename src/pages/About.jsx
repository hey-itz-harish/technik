import React from 'react';
import { Link } from 'react-router-dom';
import heroStudentBackImg from '../assets/hero_student_back.jpg';
import studentBackpackImg from '../assets/dark_forest_rocky_path.jpg';
import prideTrophy3DImg from '../assets/pride_trophy_3d.jpg';
import olympiadRocket3DImg from '../assets/olympiad_rocket_3d.jpg';
import {
  Lightbulb,
  Users,
  Target,
  Trophy,
  Rocket,
  BarChart2,
  Building2,
  Globe,
  ShieldCheck,
  MapPin,
  Star,
  ArrowRight,
  Eye
} from 'lucide-react';

export default function About() {
  return (
    <div style={styles.page}>

      {/* 1. HERO BANNER SECTION */}
      <section style={styles.heroSection}>
        <div style={styles.heroBgImageWrapper}>
          <img
            src={heroStudentBackImg}
            alt="Student looking at mountains sunrise"
            style={styles.heroBgImg}
          />
          <div style={styles.heroBgOverlay} />
        </div>

        <div className="container" style={styles.heroContainer}>
          {/* Left Text & Values Block (Right side left completely open for background image) */}
          <div style={styles.heroLeftContent}>
            {/* Eyebrow */}
            <div style={styles.eyebrowRowHero}>
              <div style={styles.eyebrowLineHero} />
              <span style={styles.heroEyebrow}>ABOUT US</span>
            </div>

            {/* Title */}
            <h1 style={styles.heroTitle}>
              <span style={{ color: '#fbbf24', display: 'block' }}>Empowering</span>
              <span style={{ color: '#ffffff', display: 'block' }}>Young Minds</span>
            </h1>

            {/* SubHeading */}
            <h3 style={styles.heroSubHeading}>
              To discover, develop, compete, achieve and be recognised.
            </h3>

            {/* Paragraph */}
            <p style={styles.heroDesc}>
              Technik Olympiad is committed to creating meaningful opportunities for school students through Olympiads, talent recognition and educational initiatives.
            </p>

            {/* 4 Value Pills */}
            <div style={styles.heroValuesRow}>
              <div style={styles.heroValuePill}>
                <Lightbulb size={16} color="#fbbf24" />
                <span>Innovate</span>
              </div>
              <div style={styles.heroValuePill}>
                <Users size={16} color="#fbbf24" />
                <span>Compete</span>
              </div>
              <div style={styles.heroValuePill}>
                <Target size={16} color="#fbbf24" />
                <span>Achieve</span>
              </div>
              <div style={styles.heroValuePill}>
                <Trophy size={16} color="#fbbf24" />
                <span>Be Recognised</span>
              </div>
            </div>
          </div>

          {/* Right Bottom Taglines Block */}
          <div style={styles.heroRightBottom}>
            <div style={styles.heroTaglinePill}>
              <span style={styles.heroTaglineSparkle}>✦</span>
              <span style={styles.heroTaglineText}>A Brighter Tomorrow Begins Here!</span>
            </div>
            <div style={styles.heroTaglinePillGold}>
              <span style={styles.heroTaglineSparkle}>✦</span>
              <span style={styles.heroTaglineTextGold}>Nurturing Potential • Creating Change</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT TECHNIK SECTION */}
      <section style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.aboutTechnikGrid}>
            {/* Left Narrative */}
            <div style={styles.narrativeCol}>
              <div style={styles.eyebrowRowVertical}>
                <div style={styles.eyebrowLineVertical} />
                <span style={styles.eyebrowText}>ABOUT TECHNIK</span>
              </div>

              <h2 style={styles.sectionMainTitle}>
                A STRONGER TOMORROW <br />
                <span style={{ color: '#0c1e45' }}>FOR </span>
                <span style={{ color: '#f97316' }}>EVERY LEARNER</span>
              </h2>

              <p style={styles.narrativePara}>
                Technik began its journey in <strong>2018</strong>, with a vision to facilitate robotics education for school students. In <strong>2026</strong>, the journey evolved into <strong>Technik Olympiad Private Limited</strong>, expanding its focus to create meaningful opportunities for students through Olympiads, talent recognition and educational initiatives.
              </p>
              <p style={styles.narrativePara}>
                Today, Technik focuses on students from <strong>Play School to Class 12</strong> across <strong>5 States + 1 Union Territory</strong>, through two key initiatives.
              </p>
            </div>

            {/* Right Initiative Cards */}
            <div style={styles.initiativesCol}>
              {/* Technik Pride Award Card */}
              <div style={styles.initiativeCardPride}>
                <div style={styles.img3DWrapper}>
                  <img
                    src={prideTrophy3DImg}
                    alt="Technik Pride Award 3D Golden Trophy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  />
                </div>
                <h3 style={styles.initCardTitleGold}>TECHNIK PRIDE AWARD</h3>
                <p style={styles.initCardDesc}>
                  Celebrating and recognising the achievements, talents and potential of school students.
                </p>
                <Link to="/awards" style={styles.initBtnGold}>
                  <span>EXPLORE TECHNIK PRIDE AWARD</span>
                  <ArrowRight size={15} style={{ flexShrink: 0 }} />
                </Link>
              </div>

              {/* Technik Olympiad Card */}
              <div style={styles.initiativeCardOlympiad}>
                <div style={styles.img3DWrapper}>
                  <img
                    src={olympiadRocket3DImg}
                    alt="Technik Olympiad 3D Blue Rocket"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  />
                </div>
                <h3 style={styles.initCardTitleBlue}>TECHNIK OLYMPIAD</h3>
                <p style={styles.initCardDesc}>
                  Providing students opportunities to discover, learn and compete through future-ready Olympiads.
                </p>
                <Link to="/catalog" style={styles.initBtnBlue}>
                  <span>EXPLORE TECHNIK OLYMPIAD</span>
                  <ArrowRight size={15} style={{ flexShrink: 0 }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR JOURNEY TIMELINE SECTION */}
      <section style={{ ...styles.sectionPadding, background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={styles.eyebrowRow}>
            <div style={styles.eyebrowLine} />
            <span style={styles.eyebrowText}>OUR JOURNEY</span>
          </div>

          <h2 style={styles.sectionMainTitle}>A JOURNEY OF PURPOSE</h2>

          <div style={styles.timelineGrid}>
            {/* 2018 */}
            <div style={styles.timelineNodeCard}>
              <div style={{ ...styles.timelineIconCircle, background: '#1e3a8a' }}>
                <Rocket size={22} color="#ffffff" />
              </div>
              <h3 style={styles.timelineYear}>2018</h3>
              <h4 style={styles.timelineNodeTitle}>The Beginning</h4>
              <p style={styles.timelineNodeDesc}>
                Technik was founded to facilitate robotics education for school students.
              </p>
            </div>

            <div style={styles.timelineArrow}>&rarr;</div>

            {/* 2020 */}
            <div style={styles.timelineNodeCard}>
              <div style={{ ...styles.timelineIconCircle, background: '#1e3a8a' }}>
                <Users size={22} color="#ffffff" />
              </div>
              <h3 style={styles.timelineYear}>2020</h3>
              <h4 style={styles.timelineNodeTitle}>Expanding Reach</h4>
              <p style={styles.timelineNodeDesc}>
                Conducted workshops, training programs and school engagement initiatives.
              </p>
            </div>

            <div style={styles.timelineArrow}>&rarr;</div>

            {/* 2023 */}
            <div style={styles.timelineNodeCard}>
              <div style={{ ...styles.timelineIconCircle, background: '#1e3a8a' }}>
                <BarChart2 size={22} color="#ffffff" />
              </div>
              <h3 style={styles.timelineYear}>2023</h3>
              <h4 style={styles.timelineNodeTitle}>Growing Together</h4>
              <p style={styles.timelineNodeDesc}>
                Reached more students and schools, strengthening our presence across South India.
              </p>
            </div>

            <div style={styles.timelineArrow}>&rarr;</div>

            {/* 2026 */}
            <div style={styles.timelineNodeCard}>
              <div style={{ ...styles.timelineIconCircle, background: '#d97706' }}>
                <Building2 size={22} color="#ffffff" />
              </div>
              <h3 style={styles.timelineYear}>2026</h3>
              <h4 style={styles.timelineNodeTitle}>A New Chapter</h4>
              <p style={styles.timelineNodeDesc}>
                Registered as Technik Olympiad Private Limited, with a broader vision and greater opportunities.
              </p>
            </div>

            <div style={styles.timelineArrow}>&rarr;</div>

            {/* Beyond 2026 */}
            <div style={styles.timelineNodeCard}>
              <div style={{ ...styles.timelineIconCircle, background: '#1e3a8a' }}>
                <Globe size={22} color="#ffffff" />
              </div>
              <h3 style={styles.timelineYear}>Beyond 2026</h3>
              <h4 style={styles.timelineNodeTitle}>Greater Impact</h4>
              <p style={styles.timelineNodeDesc}>
                Continuing our mission to empower every learner and create a brighter, future-ready generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR VISION & MISSION SECTION */}
      <section style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.eyebrowRow}>
            <div style={styles.eyebrowLine} />
            <span style={styles.eyebrowText}>OUR VISION & MISSION</span>
          </div>

          <div style={styles.vmGrid}>
            {/* Left Cards */}
            <div style={styles.vmCardsCol}>
              {/* Vision Card */}
              <div style={styles.vmCard}>
                <div style={styles.vmIconCircleBlue}>
                  <Eye size={24} color="#2563eb" />
                </div>
                <div>
                  <h3 style={styles.vmCardTitle}>OUR VISION</h3>
                  <blockquote style={styles.vmQuote}>
                    "To be a trusted platform that empowers every student to realise their potential and build a brighter tomorrow."
                  </blockquote>
                </div>
              </div>

              {/* Mission Card */}
              <div style={styles.vmCard}>
                <div style={styles.vmIconCircleOrange}>
                  <Target size={24} color="#f97316" />
                </div>
                <div>
                  <h3 style={styles.vmCardTitle}>OUR MISSION</h3>
                  <blockquote style={styles.vmQuote}>
                    "To design and deliver impactful Olympiads, talent recognition programs and educational initiatives that inspire students to learn, innovate and excel."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Right Journey Image Card */}
            <div style={styles.vmImgCard}>
              <img
                src={studentBackpackImg}
                alt="Student backpacker walking towards mountains"
                style={styles.vmImg}
              />
              <div style={styles.vmImgTag}>
                <span style={styles.vmScriptWhite}>Learning Today,</span>
                <br />
                <span style={styles.vmScriptSub}>A Brighter Tomorrow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR LEADERSHIP SECTION */}
      <section style={{ ...styles.sectionPadding, background: '#ffffff', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={styles.eyebrowRow}>
            <div style={styles.eyebrowLine} />
            <span style={styles.eyebrowText}>OUR LEADERSHIP</span>
          </div>

          <div style={styles.leadershipGrid}>
            {/* Leader 1 */}
            <div style={styles.leaderCard}>
              <div style={{ ...styles.leaderAvatar, background: '#fef3c7' }}>
                <Users size={32} color="#d97706" />
              </div>
              <h3 style={styles.leaderName}>Vaishnavi Tungala</h3>
              <span style={styles.leaderRole}>Director</span>
              <p style={styles.leaderBio}>
                Guiding our vision and growth with a passion for education and student empowerment.
              </p>
            </div>

            {/* Leader 2 */}
            <div style={styles.leaderCard}>
              <div style={{ ...styles.leaderAvatar, background: '#e0f2fe' }}>
                <Users size={32} color="#0284c7" />
              </div>
              <h3 style={styles.leaderName}>Lakshmi Tungala</h3>
              <span style={styles.leaderRole}>Director</span>
              <p style={styles.leaderBio}>
                Supporting innovation and impactful initiatives for a brighter future.
              </p>
            </div>

            {/* Leader 3 */}
            <div style={styles.leaderCard}>
              <div style={{ ...styles.leaderAvatar, background: '#f1f5f9' }}>
                <Users size={32} color="#0c1e45" />
              </div>
              <h3 style={styles.leaderName}>Hariharasudan Sivashanmugam</h3>
              <span style={styles.leaderRole}>CEO & Managing Director</span>
              <p style={styles.leaderBio}>
                Driving strategy and execution to create meaningful opportunities for every learner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY TECHNIK SECTION */}
      <section style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.eyebrowRow}>
            <div style={styles.eyebrowLine} />
            <span style={styles.eyebrowText}>WHY TECHNIK</span>
          </div>

          <div style={styles.whyGrid}>
            {/* Box 1 */}
            <div style={styles.whyCard}>
              <div style={styles.whyIconCircle}>
                <Users size={18} color="#0c1e45" />
              </div>
              <h4 style={styles.whyTitle}>Student-Centric Approach</h4>
            </div>

            {/* Box 2 */}
            <div style={styles.whyCard}>
              <div style={styles.whyIconCircle}>
                <ShieldCheck size={18} color="#0c1e45" />
              </div>
              <h4 style={styles.whyTitle}>Trusted by Schools</h4>
            </div>

            {/* Box 3 */}
            <div style={styles.whyCard}>
              <div style={styles.whyIconCircle}>
                <Lightbulb size={18} color="#0c1e45" />
              </div>
              <h4 style={styles.whyTitle}>Future-Ready Programs</h4>
            </div>

            {/* Box 4 */}
            <div style={styles.whyCard}>
              <div style={styles.whyIconCircle}>
                <Trophy size={18} color="#0c1e45" />
              </div>
              <h4 style={styles.whyTitle}>Recognition for Every Talent</h4>
            </div>

            {/* Box 5 */}
            <div style={styles.whyCard}>
              <div style={styles.whyIconCircle}>
                <MapPin size={18} color="#0c1e45" />
              </div>
              <h4 style={styles.whyTitle}>
                Regional Focus <br />
                <span style={{ fontSize: '0.76rem', color: '#64748b', fontWeight: 600 }}>5 States + 1 UT</span>
              </h4>
            </div>

            {/* Box 6 */}
            <div style={styles.whyCard}>
              <div style={styles.whyIconCircle}>
                <Star size={18} color="#0c1e45" />
              </div>
              <h4 style={styles.whyTitle}>Committed to Excellence</h4>
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
    paddingBottom: '2.15rem',
  },
  sectionPadding: {
    padding: '2.15rem 0',
  },

  eyebrowRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.4rem',
  },
  eyebrowLine: {
    width: '24px',
    height: '3px',
    background: '#f97316',
    borderRadius: '2px',
  },
  eyebrowRowVertical: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    marginBottom: '0.4rem',
  },
  eyebrowLineVertical: {
    width: '3px',
    height: '24px',
    background: '#f97316',
    borderRadius: '2px',
  },
  eyebrowText: {
    fontSize: '0.82rem',
    fontWeight: 800,
    color: '#f97316',
    letterSpacing: '0.1em',
  },
  sectionMainTitle: {
    fontSize: '1.8rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.65rem',
  },

  /* 1. HERO SECTION */
  heroSection: {
    position: 'relative',
    minHeight: '340px',
    display: 'flex',
    alignItems: 'center',
    background: '#04102d',
    color: '#ffffff',
    overflow: 'hidden',
    padding: '1.75rem 0',
  },
  heroBgImageWrapper: {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
  },
  heroBgImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
    transform: 'scale(1.15)',
    transformOrigin: 'center top',
  },
  heroBgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, rgba(4, 16, 45, 0.95) 0%, rgba(4, 16, 45, 0.75) 45%, rgba(4, 16, 45, 0.15) 100%)',
  },
  heroContainer: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    gap: '1.25rem',
    padding: '0 1rem',
  },
  heroLeftContent: {
    maxWidth: '580px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: '1 1 340px',
    marginLeft: '-0.5rem',
  },
  heroRightBottom: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.5rem',
    flex: '0 1 auto',
    paddingBottom: '0.25rem',
  },
  eyebrowRowHero: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    marginBottom: '0.4rem',
  },
  eyebrowLineHero: {
    width: '28px',
    height: '3px',
    background: '#fbbf24',
    borderRadius: '2px',
  },
  heroEyebrow: {
    fontSize: '0.82rem',
    fontWeight: 800,
    color: '#fbbf24',
    letterSpacing: '0.14em',
  },
  heroTitle: {
    fontSize: '2.4rem',
    fontWeight: 900,
    lineHeight: '1.1',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.4rem',
  },
  heroSubHeading: {
    fontSize: '1.05rem',
    color: '#ffffff',
    fontWeight: 600,
    marginBottom: '0.4rem',
    lineHeight: '1.4',
  },
  heroDesc: {
    fontSize: '0.9rem',
    color: '#cbd5e1',
    lineHeight: '1.5',
    marginBottom: '0.85rem',
  },

  /* Values Pills Row */
  heroValuesRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  heroValuePill: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: '0.35rem 0.8rem',
    background: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    borderRadius: '20px',
    backdropFilter: 'blur(8px)',
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#ffffff',
    fontFamily: 'var(--font-heading)',
  },

  /* Taglines Bar */
  heroTaglinesBar: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
    alignItems: 'center',
  },
  heroTaglinePill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: '0.35rem 0.85rem',
    background: 'rgba(251, 191, 36, 0.12)',
    border: '1px solid rgba(251, 191, 36, 0.4)',
    borderRadius: '30px',
    backdropFilter: 'blur(8px)',
  },
  heroTaglineSparkle: {
    color: '#fbbf24',
    fontSize: '0.85rem',
  },
  heroTaglineText: {
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#fbbf24',
    fontStyle: 'italic',
    fontFamily: '"Georgia", serif',
  },
  heroTaglinePillGold: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: '0.35rem 0.85rem',
    background: 'rgba(249, 115, 22, 0.15)',
    border: '1px solid rgba(249, 115, 22, 0.45)',
    borderRadius: '30px',
    backdropFilter: 'blur(8px)',
  },
  heroTaglineTextGold: {
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#ffedd5',
    fontStyle: 'italic',
    fontFamily: '"Georgia", serif',
  },

  /* 2. ABOUT TECHNIK SECTION */
  aboutTechnikGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.25rem',
    alignItems: 'center',
  },
  narrativeCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.65rem',
  },
  narrativePara: {
    fontSize: '0.9rem',
    color: '#475569',
    lineHeight: '1.5',
  },
  initiativesCol: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem',
  },
  initiativeCardPride: {
    background: 'linear-gradient(180deg, #ffffff 0%, #fffbeb 100%)',
    border: '1px solid #fde68a',
    borderRadius: '16px',
    padding: '1.25rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '0.6rem',
    boxShadow: '0 8px 25px -8px rgba(217, 119, 6, 0.1)',
    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
  },
  initiativeCardOlympiad: {
    background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)',
    border: '1px solid #bae6fd',
    borderRadius: '16px',
    padding: '1.25rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '0.6rem',
    boxShadow: '0 8px 25px -8px rgba(37, 99, 235, 0.1)',
    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
  },
  img3DWrapper: {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    background: '#ffffff',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
    border: '2px solid #ffffff',
    overflow: 'hidden',
    flexShrink: 0,
  },
  initCardTitleGold: {
    fontSize: '1.05rem',
    fontWeight: 900,
    color: '#78350f',
    fontFamily: 'var(--font-heading)',
    letterSpacing: '0.01em',
  },
  initCardTitleBlue: {
    fontSize: '1.05rem',
    fontWeight: 900,
    color: '#1e3a8a',
    fontFamily: 'var(--font-heading)',
    letterSpacing: '0.01em',
  },
  initCardDesc: {
    fontSize: '0.85rem',
    color: '#475569',
    lineHeight: '1.4',
    fontWeight: 500,
    flexGrow: 1,
  },
  initBtnGold: {
    width: '100%',
    boxSizing: 'border-box',
    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    color: '#ffffff',
    padding: '0.65rem 1rem',
    borderRadius: '10px',
    fontWeight: 800,
    fontSize: '0.82rem',
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(217, 119, 6, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.4rem',
    fontFamily: 'var(--font-heading)',
    textAlign: 'center',
    lineHeight: '1.25',
  },
  initBtnBlue: {
    width: '100%',
    boxSizing: 'border-box',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #04102d 100%)',
    color: '#ffffff',
    padding: '0.65rem 1rem',
    borderRadius: '10px',
    fontWeight: 800,
    fontSize: '0.82rem',
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(4, 16, 45, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.4rem',
    fontFamily: 'var(--font-heading)',
    textAlign: 'center',
    lineHeight: '1.25',
  },

  /* 3. TIMELINE SECTION */
  timelineGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.75rem',
    marginTop: '1.25rem',
    flexWrap: 'wrap',
  },
  timelineNodeCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    flex: '1 1 140px',
    gap: '0.3rem',
  },
  timelineIconCircle: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    marginBottom: '0.35rem',
  },
  timelineYear: {
    fontSize: '1.1rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
  },
  timelineNodeTitle: {
    fontSize: '0.9rem',
    fontWeight: 800,
    color: '#2563eb',
    fontFamily: 'var(--font-heading)',
  },
  timelineNodeDesc: {
    fontSize: '0.8rem',
    color: '#64748b',
    lineHeight: '1.4',
  },
  timelineArrow: {
    fontSize: '1.4rem',
    color: '#94a3b8',
    fontWeight: 'bold',
  },

  /* 4. VISION & MISSION SECTION */
  vmGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    alignItems: 'center',
  },
  vmCardsCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  vmCard: {
    background: '#ffffff',
    borderRadius: '14px',
    padding: '1.25rem 1.5rem',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
    border: '1px solid #e2e8f0',
  },
  vmIconCircleBlue: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    background: '#eff6ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  vmIconCircleOrange: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    background: '#fff7ed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  vmCardTitle: {
    fontSize: '1.1rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.35rem',
  },
  vmQuote: {
    fontSize: '0.9rem',
    color: '#475569',
    lineHeight: '1.5',
    fontStyle: 'italic',
  },

  vmImgCard: {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    height: '280px',
  },
  vmImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  vmImgTag: {
    position: 'absolute',
    bottom: '1.25rem',
    left: '1.25rem',
    textAlign: 'left',
    fontFamily: '"Georgia", cursive, serif',
    fontStyle: 'italic',
  },
  vmScriptWhite: {
    fontSize: '1.25rem',
    color: '#ffffff',
    textShadow: '0 2px 8px rgba(0,0,0,0.8)',
  },
  vmScriptSub: {
    fontSize: '1.35rem',
    color: '#fbbf24',
    fontWeight: 700,
    textShadow: '0 2px 8px rgba(0,0,0,0.8)',
  },

  /* 5. LEADERSHIP SECTION */
  leadershipGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.25rem',
    marginTop: '1rem',
  },
  leaderCard: {
    background: '#ffffff',
    borderRadius: '14px',
    padding: '1.5rem 1.25rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
    border: '1px solid #e2e8f0',
  },
  leaderAvatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.35rem',
  },
  leaderName: {
    fontSize: '1.1rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
  },
  leaderRole: {
    fontSize: '0.82rem',
    fontWeight: 800,
    color: '#2563eb',
    letterSpacing: '0.05em',
  },
  leaderBio: {
    fontSize: '0.85rem',
    color: '#64748b',
    lineHeight: '1.45',
    marginTop: '0.2rem',
  },

  /* 6. WHY TECHNIK SECTION */
  whyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
    gap: '0.75rem',
  },
  whyCard: {
    background: '#ffffff',
    borderRadius: '12px',
    padding: '1rem 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '0.5rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
    border: '1px solid #e2e8f0',
  },
  whyIconCircle: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: '#f1f5f9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  whyTitle: {
    fontSize: '0.8rem',
    fontWeight: 800,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    lineHeight: '1.3',
  },
};

