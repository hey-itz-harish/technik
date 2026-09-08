import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import heroStudentImg from '../assets/hero_student.jpg';
import studentCardImg from '../assets/student_card_img.jpg';
import schoolCardImg from '../assets/school_card_img.jpg';
import handshakeCardImg from '../assets/handshake_card_img.jpg';
import news1Img from '../assets/news1.jpg';
import news2Img from '../assets/news2.jpg';
import news3Img from '../assets/news3.jpg';
import achiever1Img from '../assets/achiever1.jpg';
import achiever2Img from '../assets/achiever2.jpg';
import achiever3Img from '../assets/achiever3.jpg';
import prideTrophy3DImg from '../assets/pride_trophy_3d.jpg';
import olympiadRocket3DImg from '../assets/olympiad_rocket_3d.jpg';
import resultMedalImg from '../assets/result_gold_medal_3d.jpg';
import {
  Trophy,
  ArrowRight,
  Sparkles,
  Calendar,
  Users,
  BookOpen,
  Award,
  MapPin,
  Bot,
  Cpu,
  Code,
  Palette,
  BookMarked,
  Calculator,
  CheckCircle2,
  School,
  Handshake,
  CheckCircle,
  ShieldCheck,
  Star,
  ExternalLink,
  Phone,
  Building2,
  Lightbulb,
  FileText,
  Shield,
  Rocket,
  QrCode,
  Headphones,
  Search
} from 'lucide-react';

// Helper component for count-up animated numbers
function AnimatedStatNumber({ val }) {
  const [displayVal, setDisplayVal] = useState(val);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Extract first continuous numeric sequence if present
    const match = val.match(/\d+/);
    if (!match) return;

    const targetNum = parseInt(match[0], 10);
    const prefix = val.substring(0, match.index);
    const suffix = val.substring(match.index + match[0].length);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startNum = 0;
          const duration = 1600; // ms
          const stepTime = 25;
          const totalSteps = duration / stepTime;
          const increment = targetNum / totalSteps;

          const timer = setInterval(() => {
            startNum += increment;
            if (startNum >= targetNum) {
              setDisplayVal(`${prefix}${targetNum}${suffix}`);
              clearInterval(timer);
            } else {
              setDisplayVal(`${prefix}${Math.floor(startNum)}${suffix}`);
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [val]);

  return <span ref={elementRef}>{displayVal}</span>;
}

export default function Home() {
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const heroVisualRef = useRef(null);

  // Setup scroll-reveal IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleMouseMoveHero = (e) => {
    if (!heroVisualRef.current) return;
    const rect = heroVisualRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMouseTilt({ x: x * 10, y: -y * 10 });
  };

  const handleMouseLeaveHero = () => {
    setMouseTilt({ x: 0, y: 0 });
  };

  const statsList = [
    { icon: Calendar, val: "2018", label: "Our Journey Began", color: "#2563eb" },
    { icon: Users, val: "Play School to Class 12", label: "Eligible Students", color: "#059669" },
    { icon: BookOpen, val: "6+ Olympiads", label: "Future-Ready Subjects", color: "#d97706" },
    { icon: Award, val: "School · District · State", label: "Recognition Levels", color: "#f97316" },
    { icon: MapPin, val: "5 States + Puducherry", label: "Our Focus Region", color: "#dc2626" }
  ];

  const olympiadsList = [
    {
      title: "Robotics Olympiad",
      desc: "Explore robotics, automation, machines, sensors and intelligent technologies.",
      icon: Bot,
      color: "#2563eb",
      bgColor: "rgba(37, 99, 235, 0.08)"
    },
    {
      title: "Generative AI Olympiad",
      desc: "Introducing students to the world of Artificial Intelligence and future technologies.",
      icon: Cpu,
      color: "#059669",
      bgColor: "rgba(5, 150, 105, 0.08)"
    },
    {
      title: "Coding Olympiad",
      desc: "Develop logical thinking, computational skills and problem-solving abilities.",
      icon: Code,
      color: "#ea580c",
      bgColor: "rgba(234, 88, 12, 0.08)"
    },
    {
      title: "Technik Art Olympiad",
      desc: "A platform for young creative minds to showcase artistic imagination and creativity.",
      icon: Palette,
      color: "#7c3aed",
      bgColor: "rgba(124, 58, 237, 0.08)"
    },
    {
      title: "English Olympiad",
      desc: "Develop and assess vocabulary, grammar, comprehension and language skills.",
      icon: BookMarked,
      color: "#0284c7",
      bgColor: "rgba(2, 132, 199, 0.08)"
    },
    {
      title: "Mental Maths Olympiad",
      desc: "Encouraging numerical ability, logical reasoning and quick calculation.",
      icon: Calculator,
      color: "#dc2626",
      bgColor: "rgba(220, 38, 38, 0.08)"
    }
  ];

  return (
    <div style={styles.page}>

      {/* HERO SECTION */}
      <section style={styles.heroSection}>
        <div className="container home-hero-container" style={styles.heroContainer}>
          <div style={styles.heroLeft} className="home-hero-left">
            <div style={styles.heroEyebrow} className="hero-stagger-1">
              <span style={styles.eyebrowYellow}>EVERY STUDENT</span>
            </div>

            <h1 style={styles.heroTitle} className="home-hero-title hero-stagger-2">
              DESERVES A <br />
              <span className="gold-sheen-text hero-stagger-3" style={{ display: 'inline-block' }}>MOMENT OF PRIDE.</span>
            </h1>

            <p style={styles.heroSlogan} className="hero-stagger-4">
              Discover. Compete. Achieve. Be Recognised.
            </p>

            <p style={styles.heroDesc} className="hero-stagger-5">
              Technik Olympiad Private Limited is an educational initiative committed to identifying,
              encouraging and celebrating the unique talents and achievements of school students.
            </p>

            <div style={styles.heroBadgeCapsule} className="hero-stagger-6 bounce-pill">
              <Sparkles size={14} color="#fbbf24" className="twinkle-sparkle" style={{ marginRight: '0.4rem' }} />
              For Students from Play School to Class 12
            </div>

            <div style={styles.heroActions} className="hero-stagger-7 home-hero-actions">
              <Link to="/register" className="btn-hero-gold">
                REGISTER YOUR SCHOOL
              </Link>
              <Link to="/catalog" className="btn-hero-blue">
                EXPLORE OLYMPIADS
              </Link>
              <Link to="/awards" className="btn-hero-outline">
                <Star size={15} color="#fbbf24" style={{ marginRight: '0.35rem' }} />
                TECHNIK PRIDE AWARD
              </Link>
            </div>
          </div>

          {/* Hero Visual Right with 3D Mouse Parallax */}
          <div
            style={styles.heroRight}
            ref={heroVisualRef}
            onMouseMove={handleMouseMoveHero}
            onMouseLeave={handleMouseLeaveHero}
            className="home-hero-right-col"
          >
            <div
              style={{
                ...styles.heroVisualFrame,
                transform: `perspective(1000px) rotateY(${mouseTilt.x}deg) rotateX(${mouseTilt.y}deg)`,
                transition: mouseTilt.x === 0 ? 'transform 0.6s ease' : 'transform 0.1s ease-out',
              }}
              className="hero-badge-card-frame home-hero-visual-frame"
            >
              <div style={styles.orbitRing} className="orbit-ring-pulse"></div>

              {/* Floating Orbit Badges with tooltips */}
              <div
                style={{ ...styles.orbitBadge, top: '0%', left: '0%' }}
                className="orbit-badge-item orbit-badge-1"
                data-tooltip="Robotics & AI"
              >
                <Bot size={20} color="#0284c7" />
              </div>
              <div
                style={{ ...styles.orbitBadge, top: '20%', right: '-15px' }}
                className="orbit-badge-item orbit-badge-2"
                data-tooltip="Coding & Logic"
              >
                <Code size={20} color="#d97706" />
              </div>
              <div
                style={{ ...styles.orbitBadge, bottom: '20%', left: '-15px' }}
                className="orbit-badge-item orbit-badge-3"
                data-tooltip="Mental Maths"
              >
                <Calculator size={20} color="#059669" />
              </div>
              <div
                style={{ ...styles.orbitBadge, bottom: '0%', right: '2%' }}
                className="orbit-badge-item orbit-badge-4"
                data-tooltip="Creativity & Art"
              >
                <Palette size={20} color="#c026d3" />
              </div>

              {/* Executive Student Achiever Emblem Card */}
              <div style={styles.achieverBox} className="achiever-box-floating">
                {/* Full-card shine sweep animation */}
                <div className="card-shine-sweep"></div>

                {/* Glowing Emblem Frame */}
                <div style={styles.emblemGlowContainer}>
                  <div className="shield-logo-wrapper" style={{
                    background: '#ffffff',
                    borderRadius: '50%',
                    padding: '14px',
                    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.35), 0 0 25px rgba(251, 191, 36, 0.4)',
                    border: '3px solid #fbbf24',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '160px',
                    height: '160px'
                  }}>
                    <img
                      src={logoImg}
                      alt="Technik Crest"
                      className="shield-logo-img"
                      style={{
                        width: '132px',
                        height: '132px',
                        objectFit: 'contain',
                        display: 'block'
                      }}
                    />
                  </div>
                </div>

                {/* Gold Crest Ribbon Badge */}
                <div style={styles.achieverRibbon}>
                  <Award size={14} color="#0b1d3a" style={{ flexShrink: 0 }} />
                  <span>INNOVATE • COMPETE • EXCEL</span>
                </div>

                {/* Subtitle Organization Label */}
                <div style={styles.achieverOrgText}>
                  <Star size={11} color="#fbbf24" style={{ marginRight: '0.3rem' }} />
                  TECHNIK OLYMPIAD
                  <Star size={11} color="#fbbf24" style={{ marginLeft: '0.3rem' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT STATS BAR (Image 2 Banner replacing Image 1 Banner) */}
      <section style={styles.statsBarSection}>
        <div className="container">
          <div style={styles.statsGridBar} className="home-stats-grid">
            {/* Stat 1 */}
            <div style={styles.statCardBar}>
              <div style={{ ...styles.statIconCircleBar, background: '#eff6ff' }}>
                <Calendar size={24} color="#2563eb" />
              </div>
              <div>
                <h4 style={styles.statTitleBar}>2018</h4>
                <p style={styles.statSubBar}>Our Journey Began</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div style={styles.statCardBar}>
              <div style={{ ...styles.statIconCircleBar, background: '#f0fdf4' }}>
                <Users size={24} color="#16a34a" />
              </div>
              <div>
                <h4 style={styles.statTitleBar}>Play School to Class 12</h4>
                <p style={styles.statSubBar}>Eligible Students</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div style={styles.statCardBar}>
              <div style={{ ...styles.statIconCircleBar, background: '#fff7ed' }}>
                <Building2 size={24} color="#ea580c" />
              </div>
              <div>
                <h4 style={styles.statTitleBar}>School • District • State</h4>
                <p style={styles.statSubBar}>Recognition Levels</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div style={styles.statCardBar}>
              <div style={{ ...styles.statIconCircleBar, background: '#fef2f2' }}>
                <MapPin size={24} color="#dc2626" />
              </div>
              <div>
                <h4 style={styles.statTitleBar}>5 States + 1 Union Territory</h4>
                <p style={styles.statSubBar}>Our Focus Region</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY INITIATIVES SECTION (TECHNIK PRIDE AWARD & TECHNIK OLYMPIAD) */}
      <section style={{ padding: '1.75rem 0 1rem 0' }} className="reveal-on-scroll">
        <div className="container">
          <div style={styles.initiativesGridHome} className="home-initiatives-grid">
            {/* Technik Pride Award Card */}
            <div style={styles.initiativeCardPrideHome}>
              <div style={styles.img3DWrapperHome}>
                <img 
                  src={prideTrophy3DImg} 
                  alt="Technik Pride Award 3D Golden Trophy" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} 
                />
              </div>
              <h3 style={styles.initCardTitleGoldHome}>TECHNIK PRIDE AWARD</h3>
              <p style={styles.initCardDescHome}>
                Celebrating and recognising the achievements, talents and potential of school students.
              </p>
              <Link to="/awards" style={styles.initBtnGoldHome}>
                EXPLORE TECHNIK PRIDE AWARD &rarr;
              </Link>
            </div>

            {/* Technik Olympiad Card */}
            <div style={styles.initiativeCardOlympiadHome}>
              <div style={styles.img3DWrapperHome}>
                <img 
                  src={olympiadRocket3DImg} 
                  alt="Technik Olympiad 3D Blue Rocket" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} 
                />
              </div>
              <h3 style={styles.initCardTitleBlueHome}>TECHNIK OLYMPIAD</h3>
              <p style={styles.initCardDescHome}>
                Providing students opportunities to discover, learn and compete through future-ready Olympiads.
              </p>
              <Link to="/catalog" style={styles.initBtnBlueHome}>
                EXPLORE TECHNIK OLYMPIAD &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* THREE ACTION CARDS (FOR SCHOOLS, HOSTING PARTNER, FOR RESULT) */}
      <section style={styles.actionCardsSection}>
        <div className="container">
          <div style={styles.threeActionGrid} className="home-action-cards-grid">

            {/* Card 1: FOR SCHOOLS */}
            <div style={styles.actionCardSchools}>
              {/* Header Zone */}
              <div>
                <h3 style={styles.schoolsTitle}>FOR SCHOOLS</h3>
                <p style={styles.actionSub}>Partner with us and empower your students.</p>
              </div>

              {/* Middle Body Zone (Checklist + Image) */}
              <div style={styles.cardMiddleBody} className="home-action-middle-body">
                <div style={styles.checkListAction}>
                  <div style={styles.checkItemAction}>
                    <CheckCircle2 size={17} color="#16a34a" style={{ flexShrink: 0 }} />
                    <span>Register Your School</span>
                  </div>
                  <div style={styles.checkItemAction}>
                    <CheckCircle2 size={17} color="#16a34a" style={{ flexShrink: 0 }} />
                    <span>Access Coordinator Dashboard</span>
                  </div>
                  <div style={styles.checkItemAction}>
                    <CheckCircle2 size={17} color="#16a34a" style={{ flexShrink: 0 }} />
                    <span>Track Performance & Results</span>
                  </div>
                  <div style={styles.checkItemAction}>
                    <CheckCircle2 size={17} color="#16a34a" style={{ flexShrink: 0 }} />
                    <span>Awards & Recognitions</span>
                  </div>
                </div>

                <div style={styles.actionCardImgCol} className="home-action-img-col">
                  <img src={schoolCardImg} alt="School Building" style={styles.cardBuildingImg} />
                </div>
              </div>

              {/* Footer Zone (Full Width Button) */}
              <div style={styles.cardFooterArea}>
                <Link to="/register?tab=school" style={styles.btnGreenAction}>
                  SCHOOL LOGIN &rarr;
                </Link>
              </div>
            </div>

            {/* Card 2: HOSTING PARTNER */}
            <div style={styles.actionCardPartner}>
              {/* Header Zone */}
              <div>
                <h3 style={styles.partnerTitle}>HOSTING PARTNER</h3>
                <p style={styles.actionSub}>Be a part of our mission and create impact in your region.</p>
              </div>

              {/* Middle Body Zone (Checklist + Image) */}
              <div style={styles.cardMiddleBody} className="home-action-middle-body">
                <div style={styles.checkListAction}>
                  <div style={styles.checkItemAction}>
                    <CheckCircle2 size={17} color="#ea580c" style={{ flexShrink: 0 }} />
                    <span>School Level Partner</span>
                  </div>
                  <div style={styles.checkItemAction}>
                    <CheckCircle2 size={17} color="#ea580c" style={{ flexShrink: 0 }} />
                    <span>District Level Partner</span>
                  </div>
                  <div style={styles.checkItemAction}>
                    <CheckCircle2 size={17} color="#ea580c" style={{ flexShrink: 0 }} />
                    <span>Pride Award Partner</span>
                  </div>
                  <div style={styles.checkItemAction}>
                    <CheckCircle2 size={17} color="#ea580c" style={{ flexShrink: 0 }} />
                    <span>Event Partner</span>
                  </div>
                </div>

                <div style={styles.actionCardImgCol} className="home-action-img-col">
                  <img src={handshakeCardImg} alt="Handshake Partnership" style={styles.cardHandshakeImg} />
                </div>
              </div>

              {/* Footer Zone (Full Width Button) */}
              <div style={styles.cardFooterArea}>
                <button
                  type="button"
                  disabled
                  style={{
                    ...styles.btnOrangeAction,
                    background: '#cbd5e1',
                    color: '#475569',
                    cursor: 'not-allowed',
                    opacity: 0.8,
                    boxShadow: 'none',
                    border: '1px solid #cbd5e1',
                    pointerEvents: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    fontWeight: 700
                  }}
                >
                  BECOME A PARTNER (COMING SOON)
                </button>
              </div>
            </div>

            {/* Card 3: FOR RESULT */}
            <div style={styles.actionCardResult}>
              {/* Header Zone */}
              <div>
                <h3 style={styles.resultTitle}>FOR RESULT</h3>
                <p style={styles.actionSub}>Access your results and verify your achievements.</p>
              </div>

              {/* Middle Body Zone (Checklist + Medal Graphic) */}
              <div style={styles.cardMiddleBody} className="home-action-middle-body">
                <div style={styles.checkListAction}>
                  <div style={styles.checkItemAction}>
                    <FileText size={17} color="#2563eb" style={{ flexShrink: 0 }} />
                    <span>Check Result</span>
                  </div>
                  <div style={styles.checkItemAction}>
                    <Search size={17} color="#2563eb" style={{ flexShrink: 0 }} />
                    <span>Verify Certificate</span>
                  </div>
                  <div style={styles.checkItemAction}>
                    <Trophy size={17} color="#2563eb" style={{ flexShrink: 0 }} />
                    <span>Verify Pride Award</span>
                  </div>
                </div>

                <div style={styles.actionCardImgCol} className="home-action-img-col">
                  <img src={resultMedalImg} alt="Winner Gold Medal" style={styles.cardMedalImg} />
                </div>
              </div>

              {/* Footer Zone (Full Width Button) */}
              <div style={styles.cardFooterArea}>
                <Link to="/verification" style={styles.btnBlueAction}>
                  GO TO RESULT &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS, LATEST NEWS & OUR FOCUS SECTION */}
      <section style={styles.eventsNewsFocusSection}>
        <div className="container">
          <div style={styles.threeGridRow} className="home-events-news-grid">

            {/* UPCOMING EVENTS */}
            <div style={styles.gridCardBox}>
              <div style={styles.cardHeaderRow}>
                <h3 style={styles.gridCardHeaderTitle}>UPCOMING EVENTS</h3>
              </div>

              <div style={styles.launchedSoonBox}>
                <div style={styles.launchedIconCircle}>
                  <Rocket size={28} color="#2563eb" />
                </div>
                <h4 style={styles.launchedTitle}>WILL BE LAUNCHED SOON</h4>
                <p style={styles.launchedDesc}>
                  Exciting new Olympiad events and competition schedules will be announced shortly. Stay tuned!
                </p>
                <span style={styles.badgeComingSoonLarge}>Coming Soon</span>
              </div>
            </div>

            {/* LATEST NEWS */}
            <div style={styles.gridCardBox}>
              <div style={styles.cardHeaderRow}>
                <h3 style={styles.gridCardHeaderTitle}>LATEST NEWS</h3>
                <Link to="/coming-soon" style={styles.viewAllLink}>View all</Link>
              </div>

              <div style={styles.newsList}>
                {/* News 1 */}
                <div style={styles.newsRowItem}>
                  <img src={news1Img} alt="News 1" style={styles.newsThumbImg} />
                  <div>
                    <h4 style={styles.newsItemTitle}>Technik Pride Award Nominations Open for 2026</h4>
                    <p style={styles.newsItemDate}>01 Aug 2026</p>
                  </div>
                </div>

                {/* News 2 */}
                <div style={styles.newsRowItem}>
                  <img src={news2Img} alt="News 2" style={styles.newsThumbImg} />
                  <div>
                    <h4 style={styles.newsItemTitle}>District Level Olympiad Dates Announced</h4>
                    <p style={styles.newsItemDate}>28 Jul 2026</p>
                  </div>
                </div>

                {/* News 3 */}
                <div style={styles.newsRowItem}>
                  <img src={news3Img} alt="News 3" style={styles.newsThumbImg} />
                  <div>
                    <h4 style={styles.newsItemTitle}>Congratulations to All State Toppers! Results Are Live Now</h4>
                    <p style={styles.newsItemDate}>25 Jul 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* OUR FOCUS */}
            <div style={styles.gridCardBox}>
              <div style={styles.cardHeaderRow}>
                <h3 style={styles.gridCardHeaderTitle}>OUR FOCUS</h3>
              </div>

              <div style={styles.focusMetricsGrid}>
                {/* Metric 1 */}
                <div style={styles.focusMetricItem}>
                  <Building2 size={32} color="#1e3a8a" />
                  <h4 style={styles.metricBigVal}>1000+</h4>
                  <p style={styles.metricSubLabel}>Partner Schools</p>
                </div>

                {/* Metric 2 */}
                <div style={styles.focusMetricItem}>
                  <Users size={32} color="#1e3a8a" />
                  <h4 style={styles.metricBigVal}>1 Lakh+</h4>
                  <p style={styles.metricSubLabel}>Students Reached</p>
                </div>

                {/* Metric 3 */}
                <div style={styles.focusMetricItem}>
                  <Trophy size={32} color="#1e3a8a" />
                  <h4 style={styles.metricBigVal}>Holistic</h4>
                  <p style={styles.metricSubLabel}>Student Development</p>
                </div>

                {/* Metric 4 */}
                <div style={styles.focusMetricItem}>
                  <MapPin size={32} color="#1e3a8a" />
                  <h4 style={styles.metricBigVal}>5 States + 1 UT</h4>
                  <p style={styles.metricSubLabel}>Our Presence</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST FEATURES BAR */}
      <section style={styles.trustFeaturesSection}>
        <div className="container">
          <div style={styles.trustFeaturesRow} className="home-trust-features-grid">

            {/* Feature 1 */}
            <div style={styles.trustFeatureCol}>
              <div style={styles.trustIconCircle}>
                <Shield size={24} color="#2563eb" />
              </div>
              <div style={styles.trustTextGroup}>
                <h5 style={styles.trustTitle}>Trusted by</h5>
                <p style={styles.trustSub}>Thousands of Schools</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div style={styles.trustFeatureCol}>
              <div style={styles.trustIconCircle}>
                <Lightbulb size={24} color="#2563eb" />
              </div>
              <div style={styles.trustTextGroup}>
                <h5 style={styles.trustTitle}>Future-Ready</h5>
                <p style={styles.trustSub}>Skills</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div style={styles.trustFeatureCol}>
              <div style={styles.trustIconCircle}>
                <FileText size={24} color="#2563eb" />
              </div>
              <div style={styles.trustTextGroup}>
                <h5 style={styles.trustTitle}>Transparent</h5>
                <p style={styles.trustSub}>Process</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div style={styles.trustFeatureCol}>
              <div style={styles.trustIconCircle}>
                <QrCode size={24} color="#2563eb" />
              </div>
              <div style={styles.trustTextGroup}>
                <h5 style={styles.trustTitle}>Certificates with</h5>
                <p style={styles.trustSub}>QR Verification</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div style={styles.trustFeatureCol}>
              <div style={styles.trustIconCircle}>
                <Headphones size={24} color="#2563eb" />
              </div>
              <div style={styles.trustTextGroup}>
                <h5 style={styles.trustTitle}>Dedicated</h5>
                <p style={styles.trustSub}>Support</p>
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
    minHeight: '100vh',
    background: '#ffffff',
    paddingBottom: '1.25rem',
  },
  heroSection: {
    background: 'linear-gradient(135deg, #0c2340 0%, #153a70 50%, #1e40af 100%)',
    color: '#ffffff',
    padding: '2.25rem 0 2rem 0',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContainer: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '1.75rem',
    alignItems: 'center',
  },
  heroLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  heroEyebrow: {
    marginBottom: '0.35rem',
  },
  eyebrowYellow: {
    fontSize: '0.85rem',
    fontWeight: 800,
    color: '#fbbf24',
    letterSpacing: '0.12em',
    fontFamily: 'var(--font-heading)',
  },
  heroTitle: {
    fontSize: '2.8rem',
    fontWeight: 900,
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    marginBottom: '0.5rem',
    fontFamily: 'var(--font-heading)',
    color: '#ffffff',
  },
  heroSlogan: {
    fontSize: '1.15rem',
    fontWeight: 700,
    color: '#38bdf8',
    marginBottom: '0.75rem',
    letterSpacing: '0.01em',
  },
  heroDesc: {
    fontSize: '0.92rem',
    color: '#cbd5e1',
    lineHeight: '1.55',
    marginBottom: '1rem',
    maxWidth: '560px',
  },
  heroBadgeCapsule: {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '50px',
    padding: '0.35rem 1.1rem',
    fontSize: '0.82rem',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '1.25rem',
  },
  heroActions: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  heroRight: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  heroVisualFrame: {
    width: '360px',
    height: '360px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(37,99,235,0.08) 50%, transparent 75%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  orbitRing: {
    position: 'absolute',
    inset: '-12px',
    borderRadius: '50%',
    border: '1.5px dashed rgba(148, 163, 184, 0.3)',
    boxShadow: '0 0 40px rgba(56, 189, 248, 0.2)',
  },
  orbitBadge: {
    position: 'absolute',
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    background: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)',
    zIndex: 5,
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  achieverBox: {
    width: '280px',
    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.96) 0%, rgba(30, 41, 59, 0.98) 100%)',
    border: '1px solid rgba(251, 191, 36, 0.4)',
    borderRadius: '24px',
    padding: '1.25rem 1rem 1rem 1rem',
    textAlign: 'center',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  emblemGlowContainer: {
    marginBottom: '0.85rem',
    position: 'relative',
  },
  achieverRibbon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.4rem',
    background: 'linear-gradient(90deg, #f59e0b 0%, #fbbf24 50%, #d97706 100%)',
    color: '#0b1d3a',
    fontWeight: 900,
    fontSize: '0.68rem',
    fontFamily: 'var(--font-heading)',
    padding: '0.45rem 0.75rem',
    borderRadius: '50px',
    marginBottom: '0.6rem',
    whiteSpace: 'nowrap',
    width: '100%',
    boxSizing: 'border-box',
    letterSpacing: '0.05em',
    boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
  },
  achieverOrgText: {
    fontSize: '0.72rem',
    fontWeight: 800,
    color: '#e2e8f0',
    letterSpacing: '0.14em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-heading)',
  },
  statsSection: {
    marginTop: '-2rem',
    position: 'relative',
    zIndex: 10,
  },
  statsCardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '0.85rem',
    background: '#ffffff',
    padding: '1.1rem 1.25rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    border: '1px solid #e2e8f0',
  },
  statCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  statIconBox: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  statVal: {
    fontSize: '0.95rem',
    fontWeight: 800,
    color: '#0f172a',
    lineHeight: '1.2',
  },
  statLbl: {
    fontSize: '0.72rem',
    color: '#64748b',
    fontWeight: 500,
  },
  sectionPadding: {
    padding: '2.5rem 0',
  },
  sectionHeaderCenter: {
    textAlign: 'center',
    marginBottom: '1.75rem',
  },
  sectionTitle: {
    fontSize: '1.85rem',
    fontWeight: 900,
    color: '#0f172a',
    letterSpacing: '0.04em',
    marginBottom: '0.25rem',
    fontFamily: 'var(--font-heading)',
  },
  goldLine: {
    width: '50px',
    height: '3px',
    background: '#f59e0b',
    margin: '0 auto 0.5rem auto',
    borderRadius: '2px',
  },
  sectionSubtitle: {
    fontSize: '0.95rem',
    color: '#64748b',
  },
  initiativesGridHome: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.25rem',
    maxWidth: '960px',
    margin: '0 auto',
  },
  initiativeCardPrideHome: {
    background: 'linear-gradient(180deg, #ffffff 0%, #fffbeb 100%)',
    border: '1px solid #fde68a',
    borderRadius: '20px',
    padding: '1.5rem 1.25rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '0.75rem',
    boxShadow: '0 8px 25px -8px rgba(217, 119, 6, 0.12)',
    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
  },
  initiativeCardOlympiadHome: {
    background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)',
    border: '1px solid #bae6fd',
    borderRadius: '20px',
    padding: '1.5rem 1.25rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '0.75rem',
    boxShadow: '0 8px 25px -8px rgba(37, 99, 235, 0.12)',
    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
  },
  img3DWrapperHome: {
    width: '100px',
    height: '100px',
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
  initCardTitleGoldHome: {
    fontSize: '1.1rem',
    fontWeight: 900,
    color: '#78350f',
    fontFamily: 'var(--font-heading)',
    letterSpacing: '0.01em',
  },
  initCardTitleBlueHome: {
    fontSize: '1.1rem',
    fontWeight: 900,
    color: '#1e3a8a',
    fontFamily: 'var(--font-heading)',
    letterSpacing: '0.01em',
  },
  initCardDescHome: {
    fontSize: '0.88rem',
    color: '#475569',
    lineHeight: '1.45',
    fontWeight: 500,
    flexGrow: 1,
  },
  initBtnGoldHome: {
    width: '100%',
    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    color: '#ffffff',
    padding: '0.65rem 1.1rem',
    borderRadius: '10px',
    fontWeight: 800,
    fontSize: '0.82rem',
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(217, 119, 6, 0.25)',
    display: 'inline-block',
    fontFamily: 'var(--font-heading)',
    textAlign: 'center',
  },
  initBtnBlueHome: {
    width: '100%',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #04102d 100%)',
    color: '#ffffff',
    padding: '0.65rem 1.1rem',
    borderRadius: '10px',
    fontWeight: 800,
    fontSize: '0.82rem',
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(4, 16, 45, 0.25)',
    display: 'inline-block',
    fontFamily: 'var(--font-heading)',
    textAlign: 'center',
  },
  statsBarSection: {
    background: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    padding: '0.85rem 0',
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
  },
  statsGridBar: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem',
    alignItems: 'center',
  },
  statCardBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.35rem',
  },
  statIconCircleBar: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  statTitleBar: {
    fontSize: '0.92rem',
    fontWeight: 800,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.1rem',
  },
  statSubBar: {
    fontSize: '0.78rem',
    color: '#64748b',
  },
  actionCardsSection: {
    padding: '1.5rem 0 1rem 0',
  },
  threeActionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.25rem',
    alignItems: 'stretch',
  },
  actionCardSchools: {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '1.75rem 1.5rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '1rem',
    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
  },
  actionCardPartner: {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '1.75rem 1.5rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '1rem',
    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
  },
  actionCardResult: {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '1.75rem 1.5rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '1rem',
    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
  },
  schoolsTitle: {
    fontSize: '1.3rem',
    fontWeight: 900,
    color: '#15803d',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.3rem',
    letterSpacing: '0.01em',
  },
  partnerTitle: {
    fontSize: '1.3rem',
    fontWeight: 900,
    color: '#ea580c',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.3rem',
    letterSpacing: '0.01em',
  },
  resultTitle: {
    fontSize: '1.3rem',
    fontWeight: 900,
    color: '#2563eb',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.3rem',
    letterSpacing: '0.01em',
  },
  actionSub: {
    fontSize: '0.85rem',
    color: '#64748b',
    marginBottom: '1rem',
    lineHeight: '1.45',
    minHeight: '2.5rem',
  },
  cardMiddleBody: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    flex: '1 1 auto',
    marginBottom: '1.25rem',
  },
  checkListAction: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    flex: '1 1 auto',
  },
  checkItemAction: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.55rem',
    fontSize: '0.86rem',
    fontWeight: 600,
    color: '#334155',
    lineHeight: '1.3',
  },
  actionCardImgCol: {
    flex: '0 0 105px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBuildingImg: {
    width: '105px',
    height: '95px',
    objectFit: 'cover',
    borderRadius: '14px',
    border: '1px solid #cbd5e1',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  },
  cardHandshakeImg: {
    width: '105px',
    height: '95px',
    objectFit: 'cover',
    borderRadius: '14px',
    border: '1px solid #cbd5e1',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  },
  cardMedalImg: {
    width: '105px',
    height: '105px',
    objectFit: 'contain',
    borderRadius: '14px',
    background: '#ffffff',
    padding: '4px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 14px rgba(37, 99, 235, 0.12)',
  },
  actionCardMedalCol: {
    flex: '0 0 105px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goldMedalWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  medalRibbon: {
    width: '28px',
    height: '36px',
    background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)',
    marginBottom: '-10px',
    zIndex: 1,
  },
  goldMedalCircle: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #fef08a 0%, #fbbf24 50%, #d97706 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 6px 16px rgba(217, 119, 6, 0.35)',
    border: '3px solid #fde047',
    zIndex: 2,
  },
  medalInnerCircle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '2px dashed #b45309',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  medalTLogo: {
    fontSize: '1.5rem',
    fontWeight: 900,
    color: '#78350f',
    fontFamily: 'var(--font-heading)',
  },
  cardFooterArea: {
    marginTop: 'auto',
    width: '100%',
  },
  btnGreenAction: {
    width: '100%',
    background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
    color: '#ffffff',
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    fontWeight: 800,
    fontSize: '0.85rem',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
    fontFamily: 'var(--font-heading)',
    boxShadow: '0 4px 14px rgba(21, 128, 61, 0.25)',
    boxSizing: 'border-box',
  },
  btnOrangeAction: {
    width: '100%',
    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    color: '#ffffff',
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    fontWeight: 800,
    fontSize: '0.85rem',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
    fontFamily: 'var(--font-heading)',
    boxShadow: '0 4px 14px rgba(234, 88, 12, 0.25)',
    boxSizing: 'border-box',
  },
  btnBlueAction: {
    width: '100%',
    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    color: '#ffffff',
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    fontWeight: 800,
    fontSize: '0.85rem',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
    fontFamily: 'var(--font-heading)',
    boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
    boxSizing: 'border-box',
  },

  /* EVENTS, NEWS & FOCUS STYLES */
  eventsNewsFocusSection: {
    padding: '1.5rem 0 2.5rem 0',
  },
  threeGridRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.5rem',
  },
  gridCardBox: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '1.5rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
  },
  cardHeaderRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1.25rem',
  },
  gridCardHeaderTitle: {
    fontSize: '1.1rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
  },
  viewAllLink: {
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#2563eb',
    textDecoration: 'none',
  },
  launchedSoonBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '1.75rem 1rem',
    background: 'linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%)',
    borderRadius: '14px',
    border: '1px dashed #bfdbfe',
    gap: '0.75rem',
  },
  launchedIconCircle: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: '#dbeafe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.15)',
  },
  launchedTitle: {
    fontSize: '1.15rem',
    fontWeight: 900,
    color: '#1e3a8a',
    fontFamily: 'var(--font-heading)',
    letterSpacing: '0.04em',
  },
  launchedDesc: {
    fontSize: '0.85rem',
    color: '#64748b',
    lineHeight: '1.5',
    maxWidth: '260px',
  },
  badgeComingSoonLarge: {
    fontSize: '0.78rem',
    fontWeight: 800,
    color: '#ea580c',
    background: '#fff7ed',
    border: '1px solid #ffedd5',
    padding: '0.35rem 0.85rem',
    borderRadius: '9999px',
  },
  newsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  newsRowItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
  },
  newsThumbImg: {
    width: '60px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '8px',
    flexShrink: 0,
  },
  newsItemTitle: {
    fontSize: '0.86rem',
    fontWeight: 800,
    color: '#0f172a',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.15rem',
    lineHeight: '1.3',
  },
  newsItemDate: {
    fontSize: '0.75rem',
    color: '#94a3b8',
  },
  focusMetricsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.25rem',
  },
  focusMetricItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '0.4rem',
    padding: '0.5rem',
  },
  metricBigVal: {
    fontSize: '1.25rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
  },
  metricSubLabel: {
    fontSize: '0.78rem',
    color: '#64748b',
  },

  /* TRUST FEATURES BAR STYLES */
  trustFeaturesSection: {
    background: '#ffffff',
    borderTop: '1px solid #e2e8f0',
    padding: '1.5rem 0',
  },
  trustFeaturesRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.25rem',
    flexWrap: 'wrap',
  },
  trustFeatureCol: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flex: '1 1 180px',
  },
  trustIconCircle: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    background: '#eff6ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  trustTextGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  trustTitle: {
    fontSize: '0.85rem',
    fontWeight: 800,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
  },
  trustSub: {
    fontSize: '0.82rem',
    fontWeight: 800,
    color: '#2563eb',
    fontFamily: 'var(--font-heading)',
  },
  olympiadGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
    marginBottom: '2.5rem',
  },
  olympiadCard: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    padding: '1.75rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
  },
  trackIconBox: {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.25rem',
  },
  olympiadTitle: {
    fontSize: '1.15rem',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '0.5rem',
  },
  olympiadDesc: {
    fontSize: '0.86rem',
    color: '#64748b',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  viewDetailsBtn: {
    fontSize: '0.78rem',
    fontWeight: 800,
    color: '#ffffff',
    padding: '0.55rem 1.25rem',
    borderRadius: '6px',
    textDecoration: 'none',
    letterSpacing: '0.04em',
  },
  centerActionRow: {
    textAlign: 'center',
  },
  awardSection: {
    padding: '2rem 0',
  },
  awardBanner: {
    background: 'linear-gradient(135deg, #030c1e 0%, #0b1d3a 100%)',
    borderRadius: '20px',
    padding: '2.5rem',
    color: '#ffffff',
    display: 'grid',
    gridTemplateColumns: '0.5fr 1.5fr 1fr',
    gap: '1.75rem',
    alignItems: 'center',
    border: '1px solid rgba(251, 191, 36, 0.3)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
    maxWidth: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  awardLeft: {
    display: 'flex',
    justifyContent: 'center',
  },
  awardTrophyFrame: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
  },
  awardTag: {
    fontSize: '0.68rem',
    fontWeight: 800,
    background: '#fbbf24',
    color: '#0f172a',
    padding: '0.25rem 0.65rem',
    borderRadius: '4px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  awardCenter: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
  },
  awardBannerTitle: {
    fontSize: '2rem',
    fontWeight: 900,
    color: '#ffffff',
    marginBottom: '0.25rem',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
  },
  awardBannerSubtitle: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#fbbf24',
    marginBottom: '0.75rem',
    wordBreak: 'break-word',
  },
  awardBannerDesc: {
    fontSize: '0.9rem',
    color: '#cbd5e1',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    wordBreak: 'break-word',
  },
  awardRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
    minWidth: 0,
  },
  awardFeatureBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '10px',
    padding: '0.75rem 1rem',
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#ffffff',
    minWidth: 0,
    wordBreak: 'break-word',
  },
  segmentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.75rem',
  },
  segmentCard: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
  },
  segmentBodyFlex: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  segmentLeftContent: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  },
  segmentRightImgBox: {
    width: '100px',
    height: '140px',
    flexShrink: 0,
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    alignSelf: 'center',
  },
  segmentCardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  segmentHeader: {
    paddingLeft: '0.85rem',
    marginBottom: '1rem',
  },
  segmentTitle: {
    fontSize: '1.1rem',
    fontWeight: 900,
    color: '#0f172a',
    marginBottom: '0.2rem',
  },
  segmentSubtitle: {
    fontSize: '0.78rem',
    color: '#64748b',
  },
  segmentChecklist: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  checkItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.82rem',
    color: '#334155',
    fontWeight: 500,
  },
  segmentBtn: {
    display: 'block',
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '0.8rem',
    padding: '0.65rem',
    borderRadius: '8px',
    textDecoration: 'none',
    letterSpacing: '0.04em',
    marginTop: 'auto',
  },
  bottomGrid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.75rem',
  },
  bottomBox: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
  },
  boxHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.25rem',
    borderBottom: '2px solid #f1f5f9',
    paddingBottom: '0.75rem',
  },
  boxTitle: {
    fontSize: '0.95rem',
    fontWeight: 900,
    color: '#0f172a',
    letterSpacing: '0.04em',
  },
  viewAllText: {
    fontSize: '0.78rem',
    fontWeight: 700,
    color: '#2563eb',
    textDecoration: 'none',
  },
  eventsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '1.25rem',
    flexGrow: 1,
  },
  eventRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '0.75rem',
    borderBottom: '1px dashed #e2e8f0',
  },
  eventTitle: {
    fontSize: '0.86rem',
    fontWeight: 700,
    color: '#0f172a',
  },
  eventDate: {
    fontSize: '0.75rem',
    color: '#64748b',
  },
  badgeOpen: {
    fontSize: '0.68rem',
    fontWeight: 700,
    background: 'rgba(5, 150, 105, 0.1)',
    color: '#059669',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    whiteSpace: 'nowrap',
  },
  badgeSoon: {
    fontSize: '0.68rem',
    fontWeight: 700,
    background: 'rgba(234, 88, 12, 0.1)',
    color: '#ea580c',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    whiteSpace: 'nowrap',
  },
  fullWidthBtn: {
    background: '#0f172a',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '0.78rem',
    textAlign: 'center',
    padding: '0.65rem',
    borderRadius: '6px',
    textDecoration: 'none',
    letterSpacing: '0.04em',
  },
  newsListSecondary: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  newsItemWithThumb: {
    display: 'flex',
    gap: '0.85rem',
    alignItems: 'center',
    paddingBottom: '0.75rem',
    borderBottom: '1px dashed #e2e8f0',
  },
  newsThumbImg: {
    width: '52px',
    height: '52px',
    borderRadius: '8px',
    objectFit: 'cover',
    flexShrink: 0,
  },
  newsHeadline: {
    fontSize: '0.84rem',
    fontWeight: 700,
    color: '#0f172a',
    lineHeight: '1.35',
    marginBottom: '0.2rem',
  },
  newsDate: {
    fontSize: '0.72rem',
    color: '#64748b',
  },
  achieversList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  achieverRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
    paddingBottom: '0.75rem',
    borderBottom: '1px dashed #e2e8f0',
  },
  achieverAvatarWrapper: {
    position: 'relative',
    width: '46px',
    height: '46px',
    flexShrink: 0,
  },
  achieverPhoto: {
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #e2e8f0',
  },
  rankBadgeGold: {
    position: 'absolute',
    bottom: '-2px',
    right: '-2px',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    background: '#fbbf24',
    color: '#0f172a',
    fontWeight: 900,
    fontSize: '0.7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ffffff',
  },
  rankBadgeSilver: {
    position: 'absolute',
    bottom: '-2px',
    right: '-2px',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    background: '#94a3b8',
    color: '#ffffff',
    fontWeight: 900,
    fontSize: '0.7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ffffff',
  },
  rankBadgeBronze: {
    position: 'absolute',
    bottom: '-2px',
    right: '-2px',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    background: '#d97706',
    color: '#ffffff',
    fontWeight: 900,
    fontSize: '0.7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ffffff',
  },
  achieverName: {
    fontSize: '0.88rem',
    fontWeight: 800,
    color: '#0f172a',
  },
  achieverDetails: {
    fontSize: '0.75rem',
    color: '#64748b',
  },
  trustBarSection: {
    background: '#ffffff',
    borderTop: '1px solid #e2e8f0',
    padding: '1.75rem 0',
  },
  trustGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '1rem',
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.78rem',
    fontWeight: 700,
    color: '#334155',
  }
};

// Add responsive CSS rules and rich micro-animations
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  /* STAGGERED FADE-UP ENTRANCES */
  @keyframes heroFadeUp {
    from {
      opacity: 0;
      transform: translateY(28px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .hero-stagger-1 { animation: heroFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both; }
  .hero-stagger-2 { animation: heroFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both; }
  .hero-stagger-3 { animation: heroFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both; }
  .hero-stagger-4 { animation: heroFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both; }
  .hero-stagger-5 { animation: heroFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both; }
  .hero-stagger-6 { animation: heroFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both; }
  .hero-stagger-7 { animation: heroFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both; }

  /* MOMENT OF PRIDE GRADIENT SHEEN SWEEP */
  @keyframes goldSheenSweep {
    0% { background-position: 200% center; }
    100% { background-position: -200% center; }
  }

  .gold-sheen-text {
    background: linear-gradient(90deg, #fbbf24 0%, #ffffff 25%, #fbbf24 50%, #f59e0b 100%);
    background-size: 200% auto;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    animation: goldSheenSweep 4.5s linear infinite;
  }

  /* SPARKLE TWINKLE */
  @keyframes sparkleRotate {
    0%, 100% { transform: rotate(0deg) scale(1); filter: drop-shadow(0 0 2px #fbbf24); }
    50% { transform: rotate(180deg) scale(1.3); filter: drop-shadow(0 0 8px #fbbf24); }
  }

  .twinkle-sparkle {
    animation: sparkleRotate 3s ease-in-out infinite;
  }

  /* BOUNCE PILL */
  @keyframes pillBounce {
    0% { opacity: 0; transform: translateY(20px) scale(0.9); }
    70% { transform: translateY(-4px) scale(1.02); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }

  .bounce-pill {
    animation: pillBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.55s both;
  }

  /* HERO CTA BUTTONS & SHIMMER */
  .btn-hero-gold, .btn-hero-blue, .btn-hero-outline {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease !important;
  }

  .btn-hero-gold::after, .btn-hero-blue::after, .btn-hero-outline::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -70%;
    width: 45px;
    height: 200%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
    transform: rotate(25deg);
    animation: buttonShimmerSweep 4.5s ease-in-out infinite;
  }

  @keyframes buttonShimmerSweep {
    0%, 75% { left: -70%; }
    100% { left: 170%; }
  }

  .btn-hero-gold {
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    color: #0f172a;
    font-weight: 800;
    font-size: 0.85rem;
    font-family: var(--font-heading);
    padding: 0.8rem 1.6rem;
    border-radius: 8px;
    text-decoration: none;
    boxShadow: 0 4px 14px rgba(245, 158, 11, 0.4);
    letter-spacing: 0.03em;
    display: inline-flex;
    align-items: center;
  }

  .btn-hero-gold:hover {
    transform: translateY(-3px) scale(1.04) !important;
    box-shadow: 0 8px 24px rgba(245, 158, 11, 0.7) !important;
  }

  .btn-hero-blue {
    background: #2563eb;
    color: #ffffff;
    font-weight: 800;
    font-size: 0.85rem;
    font-family: var(--font-heading);
    padding: 0.8rem 1.6rem;
    border-radius: 8px;
    text-decoration: none;
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
    letter-spacing: 0.03em;
    display: inline-flex;
    align-items: center;
  }

  .btn-hero-blue:hover {
    transform: translateY(-3px) scale(1.04) !important;
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.7) !important;
  }

  .btn-hero-outline {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
    font-weight: 800;
    font-size: 0.85rem;
    font-family: var(--font-heading);
    padding: 0.8rem 1.6rem;
    border-radius: 8px;
    text-decoration: none;
    letter-spacing: 0.03em;
    display: inline-flex;
    align-items: center;
  }

  .btn-hero-outline:hover {
    transform: translateY(-3px) scale(1.04) !important;
    background: rgba(255, 255, 255, 0.12) !important;
    border-color: rgba(251, 191, 36, 0.6) !important;
  }

  /* HERO BADGE CARD FLOAT & SHIELD SHINE */
  @keyframes badgeCardFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  .hero-badge-card-frame {
    transform-style: preserve-3d;
    will-change: transform;
  }

  .achiever-box-floating {
    animation: badgeCardFloat 5s ease-in-out infinite;
    position: relative;
    overflow: hidden;
  }

  .card-shine-sweep {
    position: absolute;
    top: -50%;
    left: -120%;
    width: 65%;
    height: 200%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transform: skewX(-25deg);
    animation: cardShineSweep 4s ease-in-out infinite 1s;
    pointer-events: none;
    z-index: 5;
  }

  @keyframes cardShineSweep {
    0%, 60% { left: -120%; }
    100% { left: 220%; }
  }

  /* ORBIT RADIAL GLOW PULSE */
  @keyframes orbitGlowBreathe {
    0%, 100% { opacity: 0.55; transform: scale(1); }
    50% { opacity: 0.85; transform: scale(1.06); }
  }

  .orbit-ring-pulse {
    animation: orbitGlowBreathe 4s ease-in-out infinite;
  }

  /* ASYNCHRONOUS FLOATING ORBIT ICONS WITH HOVER TOOLTIPS */
  @keyframes floatOrbit1 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-7px) rotate(5deg); }
  }
  @keyframes floatOrbit2 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-9px) rotate(-6deg); }
  }
  @keyframes floatOrbit3 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(7px) rotate(4deg); }
  }
  @keyframes floatOrbit4 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(8px) rotate(-5deg); }
  }

  .orbit-badge-1 { animation: floatOrbit1 4s ease-in-out infinite; }
  .orbit-badge-2 { animation: floatOrbit2 4.6s ease-in-out infinite 0.5s; }
  .orbit-badge-3 { animation: floatOrbit3 3.8s ease-in-out infinite 1s; }
  .orbit-badge-4 { animation: floatOrbit4 4.2s ease-in-out infinite 1.5s; }

  .orbit-badge-item {
    position: absolute;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .orbit-badge-item:hover {
    transform: scale(1.25) !important;
    z-index: 10;
    box-shadow: 0 8px 20px rgba(0,0,0,0.5);
  }

  .orbit-badge-item::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%) translateY(6px);
    background: #041026;
    color: #ffffff;
    font-size: 0.68rem;
    font-weight: 700;
    white-space: nowrap;
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .orbit-badge-item:hover::after {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  /* SCROLL-TRIGGERED REVEAL ANIMATIONS */
  .reveal-on-scroll {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.75s ease, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .reveal-on-scroll.reveal-active {
    opacity: 1;
    transform: translateY(0);
  }

  .stat-card-item {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .stat-card-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }

  .btn-navy-lg {
    background: #041026;
    color: #ffffff;
    font-weight: 800;
    font-size: 0.85rem;
    font-family: var(--font-heading);
    padding: 0.85rem 2.25rem;
    border-radius: 8px;
    text-decoration: none;
    letter-spacing: 0.05em;
    display: inline-block;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }

  .btn-navy-lg:hover {
    transform: translateY(-3px);
    background: #09204a;
  }

  /* RESPONSIVE BREAKPOINTS */
  @media (max-width: 991px) {
    .home-hero-container {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    .home-hero-left {
      align-items: center !important;
      text-align: center !important;
    }
    .home-hero-left .hero-stagger-1 {
      align-self: center !important;
    }
    .home-hero-title {
      font-size: clamp(2rem, 5.5vw, 2.5rem) !important;
      line-height: 1.15 !important;
      text-align: center !important;
    }
    .home-hero-actions {
      justify-content: center !important;
      width: 100% !important;
    }
    .home-hero-right-col {
      width: 100% !important;
      display: flex !important;
      justify-content: center !important;
      margin-top: 0.5rem !important;
    }
    .home-stats-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 0.75rem !important;
    }
    .home-initiatives-grid {
      grid-template-columns: 1fr !important;
      gap: 1.25rem !important;
    }
    .home-action-cards-grid {
      grid-template-columns: 1fr !important;
      gap: 1.25rem !important;
    }
    .home-events-news-grid {
      grid-template-columns: 1fr !important;
      gap: 1.25rem !important;
    }
    .home-trust-features-grid {
      display: grid !important;
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 1rem !important;
    }
  }

  @media (max-width: 640px) {
    .home-hero-container {
      padding: 0 1rem !important;
      gap: 1.5rem !important;
    }
    .home-hero-title {
      font-size: clamp(1.75rem, 7vw, 2.15rem) !important;
      line-height: 1.18 !important;
    }
    .home-hero-actions {
      flex-direction: column !important;
      width: 100% !important;
      gap: 0.65rem !important;
    }
    .home-hero-actions a {
      width: 100% !important;
      justify-content: center !important;
      box-sizing: border-box !important;
      padding: 0.75rem 1rem !important;
      text-align: center !important;
    }
    .home-hero-visual-frame {
      width: min(290px, 86vw) !important;
      height: min(290px, 86vw) !important;
      margin: 0 auto !important;
    }
    .home-hero-visual-frame .achiever-box-floating {
      width: min(230px, 72vw) !important;
      padding: 1rem 0.75rem !important;
    }
    .home-hero-visual-frame .shield-logo-wrapper {
      width: 110px !important;
      height: 110px !important;
      padding: 8px !important;
    }
    .home-hero-visual-frame .shield-logo-img {
      width: 90px !important;
      height: 90px !important;
    }
    .home-hero-visual-frame .orbit-badge-item {
      width: 36px !important;
      height: 36px !important;
    }
    .home-hero-visual-frame .orbit-badge-1 { top: 2% !important; left: 2% !important; }
    .home-hero-visual-frame .orbit-badge-2 { top: 22% !important; right: 0% !important; }
    .home-hero-visual-frame .orbit-badge-3 { bottom: 22% !important; left: 0% !important; }
    .home-hero-visual-frame .orbit-badge-4 { bottom: 2% !important; right: 2% !important; }

    .home-stats-grid {
      grid-template-columns: 1fr !important;
      gap: 0.6rem !important;
    }
    .home-action-middle-body {
      flex-direction: column-reverse !important;
      align-items: flex-start !important;
      gap: 1rem !important;
    }
    .home-action-img-col {
      width: 100% !important;
      display: flex !important;
      justify-content: center !important;
      margin-bottom: 0.25rem !important;
    }
    .home-action-img-col img {
      width: 100% !important;
      max-width: 220px !important;
      height: 120px !important;
      object-fit: cover !important;
    }
    .home-trust-features-grid {
      grid-template-columns: 1fr !important;
      gap: 0.85rem !important;
    }
  }
`;
document.head.appendChild(styleSheet);
