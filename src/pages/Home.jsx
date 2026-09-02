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
  Phone
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
          <div style={styles.heroLeft}>
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

            <div style={styles.heroActions} className="hero-stagger-7">
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
          >
            <div 
              style={{
                ...styles.heroVisualFrame,
                transform: `perspective(1000px) rotateY(${mouseTilt.x}deg) rotateX(${mouseTilt.y}deg)`,
                transition: mouseTilt.x === 0 ? 'transform 0.6s ease' : 'transform 0.1s ease-out',
              }}
              className="hero-badge-card-frame"
            >
              <div style={styles.orbitRing} className="orbit-ring-pulse"></div>
              
              {/* Floating Orbit Badges with tooltips */}
              <div 
                style={{ ...styles.orbitBadge, top: '2%', left: '2%' }} 
                className="orbit-badge-item orbit-badge-1"
                data-tooltip="Robotics & AI"
              >
                <Bot size={18} color="#38bdf8" />
              </div>
              <div 
                style={{ ...styles.orbitBadge, top: '22%', right: '-10px' }} 
                className="orbit-badge-item orbit-badge-2"
                data-tooltip="Coding & Logic"
              >
                <Code size={18} color="#fbbf24" />
              </div>
              <div 
                style={{ ...styles.orbitBadge, bottom: '22%', left: '-10px' }} 
                className="orbit-badge-item orbit-badge-3"
                data-tooltip="Mental Maths"
              >
                <Calculator size={18} color="#4ade80" />
              </div>
              <div 
                style={{ ...styles.orbitBadge, bottom: '2%', right: '5%' }} 
                className="orbit-badge-item orbit-badge-4"
                data-tooltip="Creativity & Art"
              >
                <Palette size={18} color="#f472b6" />
              </div>

              {/* Student Achiever Illustration Box */}
              <div style={styles.achieverBox} className="achiever-box-floating">
                <div className="shield-logo-wrapper">
                  <img 
                    src={logoImg} 
                    alt="Technik Emblem" 
                    className="shield-logo-img"
                    style={{ width: '130px', height: '130px', objectFit: 'contain', margin: '0 auto 0.75rem auto', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))' }} 
                  />
                  <div className="shield-shine-sweep"></div>
                </div>
                <div style={styles.achieverRibbon}>
                  <Award size={13} color="#0f172a" style={{ flexShrink: 0 }} />
                  <span style={{ whiteSpace: 'nowrap' }}>INNOVATE • COMPETE • EXCEL</span>
                </div>
                <div style={styles.achieverOrgText}>
                  TECHNIK OLYMPIAD
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS FLOATING BAR */}
      <section style={styles.statsSection} className="reveal-on-scroll">
        <div className="container">
          <div style={styles.statsCardGrid} className="home-stats-grid">
            {statsList.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} style={styles.statCard} className="stat-card-item">
                  <div style={{ ...styles.statIconBox, color: stat.color, background: `${stat.color}12` }}>
                    <StatIcon size={22} />
                  </div>
                  <div>
                    <h3 style={styles.statVal}>
                      <AnimatedStatNumber val={stat.val} />
                    </h3>
                    <p style={styles.statLbl}>{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR OLYMPIADS SECTION */}
      <section style={styles.sectionPadding} className="reveal-on-scroll">
        <div className="container">
          <div style={styles.sectionHeaderCenter}>
            <h2 style={styles.sectionTitle}>OUR OLYMPIADS</h2>
            <div style={styles.goldLine}></div>
            <p style={styles.sectionSubtitle}>
              Explore the world of knowledge, innovation and excellence
            </p>
          </div>

          <div style={styles.olympiadGrid} className="home-olympiad-grid">
            {olympiadsList.map((item, idx) => {
              const TrackIcon = item.icon;
              return (
                <div key={idx} style={styles.olympiadCard} className="glass-card-hover">
                  <div style={{ ...styles.trackIconBox, background: item.bgColor, color: item.color }}>
                    <TrackIcon size={28} />
                  </div>
                  <h3 style={styles.olympiadTitle}>{item.title}</h3>
                  <p style={styles.olympiadDesc}>{item.desc}</p>
                  <Link to="/catalog" style={{ ...styles.viewDetailsBtn, background: item.color }}>
                    VIEW DETAILS
                  </Link>
                </div>
              );
            })}
          </div>

          <div style={styles.centerActionRow}>
            <Link to="/catalog" className="btn-navy-lg">
              VIEW ALL OLYMPIADS
            </Link>
          </div>
        </div>
      </section>

      {/* TECHNIK PRIDE AWARD BANNER */}
      <section style={styles.awardSection}>
        <div className="container">
          <div style={styles.awardBanner}>
            <div style={styles.awardLeft}>
              <div style={styles.awardTrophyFrame}>
                <Trophy size={64} color="#fbbf24" />
                <div style={styles.awardTag}>TECHNIK PRIDE AWARD</div>
              </div>
            </div>

            <div style={styles.awardCenter}>
              <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>NATIONAL RECOGNITION</span>
              <h2 style={styles.awardBannerTitle}>TECHNIK PRIDE AWARD</h2>
              <p style={styles.awardBannerSubtitle}>Celebrating Every Young Achiever</p>
              <p style={styles.awardBannerDesc}>
                The Technik Pride Award is a prestigious recognition initiative created to celebrate 
                outstanding achievements of school students. Our vision is simple – Every achiever deserves recognition.
              </p>
              <Link to="/awards" className="btn-hero-gold" style={{ alignSelf: 'flex-start' }}>
                EXPLORE AWARD
              </Link>
            </div>

            <div style={styles.awardRight}>
              <div style={styles.awardFeatureBadge}>
                <Award size={20} color="#fbbf24" />
                <span>MULTIPLE CATEGORIES</span>
              </div>
              <div style={styles.awardFeatureBadge}>
                <Trophy size={20} color="#fbbf24" />
                <span>3 LEVELS OF RECOGNITION</span>
              </div>
              <div style={styles.awardFeatureBadge}>
                <Star size={20} color="#fbbf24" />
                <span>PRESTIGIOUS AWARDS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-COLUMN SEGMENTS SECTION */}
      <section style={styles.sectionPadding}>
        <div className="container">
          <div style={styles.segmentGrid} className="home-segment-grid">
            
            {/* For Students */}
            <div style={styles.segmentCard}>
              <div style={styles.segmentBodyFlex}>
                <div style={styles.segmentLeftContent}>
                  <div style={{ ...styles.segmentHeader, borderLeft: '4px solid #2563eb' }}>
                    <h3 style={styles.segmentTitle}>FOR STUDENTS</h3>
                    <p style={styles.segmentSubtitle}>Your journey starts here!</p>
                  </div>

                  <div style={styles.segmentChecklist}>
                    <div style={styles.checkItem}>
                      <CheckCircle2 size={16} color="#2563eb" />
                      <span>Register for Olympiads</span>
                    </div>
                    <div style={styles.checkItem}>
                      <CheckCircle2 size={16} color="#2563eb" />
                      <span>View Exam Schedule</span>
                    </div>
                    <div style={styles.checkItem}>
                      <CheckCircle2 size={16} color="#2563eb" />
                      <span>Check Results & Rank</span>
                    </div>
                    <div style={styles.checkItem}>
                      <CheckCircle2 size={16} color="#2563eb" />
                      <span>Download Certificates</span>
                    </div>
                    <div style={styles.checkItem}>
                      <CheckCircle2 size={16} color="#2563eb" />
                      <span>Apply for Awards</span>
                    </div>
                  </div>

                  <Link to="/dashboard" style={{ ...styles.segmentBtn, background: '#2563eb' }}>
                    STUDENT LOGIN
                  </Link>
                </div>

                <div style={styles.segmentRightImgBox}>
                  <img src={studentCardImg} alt="For Students" style={styles.segmentCardImg} />
                </div>
              </div>
            </div>

            {/* For Schools */}
            <div style={styles.segmentCard}>
              <div style={styles.segmentBodyFlex}>
                <div style={styles.segmentLeftContent}>
                  <div style={{ ...styles.segmentHeader, borderLeft: '4px solid #059669' }}>
                    <h3 style={styles.segmentTitle}>FOR SCHOOLS</h3>
                    <p style={styles.segmentSubtitle}>Partner with us and empower your students.</p>
                  </div>

                  <div style={styles.segmentChecklist}>
                    <div style={styles.checkItem}>
                      <CheckCircle2 size={16} color="#059669" />
                      <span>Register Your School</span>
                    </div>
                    <div style={styles.checkItem}>
                      <CheckCircle2 size={16} color="#059669" />
                      <span>Bulk Student Registration</span>
                    </div>
                    <div style={styles.checkItem}>
                      <CheckCircle2 size={16} color="#059669" />
                      <span>Access Coordinator Dashboard</span>
                    </div>
                    <div style={styles.checkItem}>
                      <CheckCircle2 size={16} color="#059669" />
                      <span>Track Performance & Results</span>
                    </div>
                    <div style={styles.checkItem}>
                      <CheckCircle2 size={16} color="#059669" />
                      <span>Awards & Recognitions</span>
                    </div>
                  </div>

                  <Link to="/register" style={{ ...styles.segmentBtn, background: '#059669' }}>
                    SCHOOL LOGIN
                  </Link>
                </div>

                <div style={styles.segmentRightImgBox}>
                  <img src={schoolCardImg} alt="For Schools" style={styles.segmentCardImg} />
                </div>
              </div>
            </div>

            {/* Hosting Partner */}
            <div style={styles.segmentCard}>
              <div style={styles.segmentBodyFlex}>
                <div style={styles.segmentLeftContent}>
                  <div style={{ ...styles.segmentHeader, borderLeft: '4px solid #ea580c' }}>
                    <h3 style={styles.segmentTitle}>HOSTING PARTNER</h3>
                    <p style={styles.segmentSubtitle}>Host events and be a part of our mission.</p>
                  </div>

                  <div style={styles.segmentChecklist}>
                    <div style={styles.checkItem}>
                      <CheckCircle2 size={16} color="#ea580c" />
                      <span>School Level Events</span>
                    </div>
                    <div style={styles.checkItem}>
                      <CheckCircle2 size={16} color="#ea580c" />
                      <span>District Level Events</span>
                    </div>
                    <div style={styles.checkItem}>
                      <CheckCircle2 size={16} color="#ea580c" />
                      <span>Award Ceremonies</span>
                    </div>
                    <div style={styles.checkItem}>
                      <CheckCircle2 size={16} color="#ea580c" />
                      <span>Workshops & More</span>
                    </div>
                    <div style={styles.checkItem}>
                      <CheckCircle2 size={16} color="#ea580c" />
                      <span>Institutional Recognition</span>
                    </div>
                  </div>

                  <Link to="/about" style={{ ...styles.segmentBtn, background: '#ea580c' }}>
                    APPLY NOW
                  </Link>
                </div>

                <div style={styles.segmentRightImgBox}>
                  <img src={handshakeCardImg} alt="Hosting Partner" style={styles.segmentCardImg} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BOTTOM 3-GRID (UPCOMING EVENTS / LATEST NEWS / TOP ACHIEVERS) */}
      <section style={{ ...styles.sectionPadding, background: '#f8fafc' }}>
        <div className="container">
          <div style={styles.bottomGrid3} className="home-bottom-grid3">
            
            {/* Upcoming Events */}
            <div style={styles.bottomBox}>
              <div style={styles.boxHeader}>
                <h3 style={styles.boxTitle}>UPCOMING EVENTS</h3>
                <Link to="/catalog" style={styles.viewAllText}>View all</Link>
              </div>

              <div style={styles.eventsList}>
                <div style={styles.eventRow}>
                  <div>
                    <h4 style={styles.eventTitle}>Robotics Olympiad 2026</h4>
                    <p style={styles.eventDate}>15 Sep - 15 Oct 2026</p>
                  </div>
                  <span style={styles.badgeSoon}>Coming Soon</span>
                </div>

                <div style={styles.eventRow}>
                  <div>
                    <h4 style={styles.eventTitle}>Generative AI Olympiad 2026</h4>
                    <p style={styles.eventDate}>20 Sep - 20 Oct 2026</p>
                  </div>
                  <span style={styles.badgeSoon}>Coming Soon</span>
                </div>

                <div style={styles.eventRow}>
                  <div>
                    <h4 style={styles.eventTitle}>Coding Olympiad 2026</h4>
                    <p style={styles.eventDate}>10 Oct - 10 Nov 2026</p>
                  </div>
                  <span style={styles.badgeSoon}>Coming Soon</span>
                </div>
              </div>

              <Link to="/catalog" style={styles.fullWidthBtn}>
                VIEW ALL EVENTS
              </Link>
            </div>

            {/* Latest News */}
            <div style={styles.bottomBox}>
              <div style={styles.boxHeader}>
                <h3 style={styles.boxTitle}>LATEST NEWS</h3>
                <Link to="/about" style={styles.viewAllText}>View all</Link>
              </div>

              <div style={styles.newsList}>
                <div style={styles.newsItemWithThumb}>
                  <img src={news1Img} alt="News 1" style={styles.newsThumbImg} />
                  <div>
                    <h4 style={styles.newsHeadline}>Technik Pride Award Nominations Open for 2026</h4>
                    <p style={styles.newsDate}>01 Aug 2026</p>
                  </div>
                </div>
                <div style={styles.newsItemWithThumb}>
                  <img src={news2Img} alt="News 2" style={styles.newsThumbImg} />
                  <div>
                    <h4 style={styles.newsHeadline}>District Level Olympiad Dates Announced</h4>
                    <p style={styles.newsDate}>28 Jul 2026</p>
                  </div>
                </div>
                <div style={styles.newsItemWithThumb}>
                  <img src={news3Img} alt="News 3" style={styles.newsThumbImg} />
                  <div>
                    <h4 style={styles.newsHeadline}>Congratulations to All State Toppers! Results Live</h4>
                    <p style={styles.newsDate}>25 Jul 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Achievers */}
            <div style={styles.bottomBox}>
              <div style={styles.boxHeader}>
                <h3 style={styles.boxTitle}>TOP ACHIEVERS</h3>
                <Link to="/awards" style={styles.viewAllText}>View all</Link>
              </div>

              <div style={styles.achieversList}>
                <div style={styles.achieverRow}>
                  <div style={styles.achieverAvatarWrapper}>
                    <img src={achiever1Img} alt="Rohan S." style={styles.achieverPhoto} />
                    <div style={styles.rankBadgeGold}>1</div>
                  </div>
                  <div>
                    <h4 style={styles.achieverName}>Rohan S.</h4>
                    <p style={styles.achieverDetails}>Class 8 · Robotics Olympiad</p>
                  </div>
                </div>

                <div style={styles.achieverRow}>
                  <div style={styles.achieverAvatarWrapper}>
                    <img src={achiever2Img} alt="Ananya R." style={styles.achieverPhoto} />
                    <div style={styles.rankBadgeSilver}>2</div>
                  </div>
                  <div>
                    <h4 style={styles.achieverName}>Ananya R.</h4>
                    <p style={styles.achieverDetails}>Class 7 · AI Olympiad</p>
                  </div>
                </div>

                <div style={styles.achieverRow}>
                  <div style={styles.achieverAvatarWrapper}>
                    <img src={achiever3Img} alt="Vihaan K." style={styles.achieverPhoto} />
                    <div style={styles.rankBadgeBronze}>3</div>
                  </div>
                  <div>
                    <h4 style={styles.achieverName}>Vihaan K.</h4>
                    <p style={styles.achieverDetails}>Class 6 · Coding Olympiad</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={styles.trustBarSection}>
        <div className="container">
          <div style={styles.trustGrid} className="home-trust-grid">
            <div style={styles.trustItem}>
              <ShieldCheck size={18} color="#2563eb" />
              <span>Trusted by Thousands of Schools</span>
            </div>
            <div style={styles.trustItem}>
              <Award size={18} color="#2563eb" />
              <span>Recognizing Young Talent</span>
            </div>
            <div style={styles.trustItem}>
              <Sparkles size={18} color="#2563eb" />
              <span>Future-Ready Olympiads</span>
            </div>
            <div style={styles.trustItem}>
              <CheckCircle size={18} color="#2563eb" />
              <span>Certificates with QR Verification</span>
            </div>
            <div style={styles.trustItem}>
              <Users size={18} color="#2563eb" />
              <span>Transparent Exam Process</span>
            </div>
            <div style={styles.trustItem}>
              <Phone size={18} color="#2563eb" />
              <span>Dedicated Support</span>
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
  },
  heroSection: {
    background: 'linear-gradient(135deg, #030c1e 0%, #081d3d 50%, #06152e 100%)',
    color: '#ffffff',
    padding: '4.5rem 0 5rem 0',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContainer: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '3rem',
    alignItems: 'center',
  },
  heroLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  heroEyebrow: {
    marginBottom: '0.5rem',
  },
  eyebrowYellow: {
    fontSize: '0.88rem',
    fontWeight: 800,
    color: '#fbbf24',
    letterSpacing: '0.12em',
    fontFamily: 'var(--font-heading)',
  },
  heroTitle: {
    fontSize: '3.25rem',
    fontWeight: 900,
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    marginBottom: '0.75rem',
    fontFamily: 'var(--font-heading)',
    color: '#ffffff',
  },
  heroSlogan: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#38bdf8',
    marginBottom: '1rem',
    letterSpacing: '0.01em',
  },
  heroDesc: {
    fontSize: '0.98rem',
    color: '#94a3b8',
    lineHeight: '1.65',
    marginBottom: '1.5rem',
    maxWidth: '560px',
  },
  heroBadgeCapsule: {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '50px',
    padding: '0.4rem 1.25rem',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '2rem',
  },
  heroActions: {
    display: 'flex',
    gap: '0.85rem',
    flexWrap: 'wrap',
  },
  heroRight: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  heroVisualFrame: {
    width: '380px',
    height: '380px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  orbitRing: {
    position: 'absolute',
    inset: '-10px',
    borderRadius: '50%',
    border: '2px stroke rgba(56, 189, 248, 0.2)',
    boxShadow: '0 0 30px rgba(37,99,235,0.3)',
  },
  orbitBadge: {
    position: 'absolute',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: '#041026',
    border: '1px solid rgba(255,255,255,0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 6px 16px rgba(0,0,0,0.5)',
    zIndex: 10,
  },
  achieverBox: {
    width: '260px',
    padding: '1.75rem 1rem',
    background: 'rgba(15, 23, 42, 0.9)',
    border: '2px solid #fbbf24',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatarCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'rgba(251, 191, 36, 0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  achieverRibbon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.35rem',
    background: '#fbbf24',
    color: '#0f172a',
    fontWeight: 800,
    fontSize: '0.64rem',
    padding: '0.4rem 0.6rem',
    borderRadius: '6px',
    marginBottom: '0.5rem',
    whiteSpace: 'nowrap',
    width: '95%',
    boxSizing: 'border-box',
    letterSpacing: '0.02em',
  },
  achieverOrgText: {
    fontSize: '0.65rem',
    fontWeight: 700,
    color: '#94a3b8',
    letterSpacing: '0.1em',
  },
  statsSection: {
    marginTop: '-2.5rem',
    position: 'relative',
    zIndex: 10,
  },
  statsCardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '1rem',
    background: '#ffffff',
    padding: '1.5rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    border: '1px solid #e2e8f0',
  },
  statCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
  },
  statIconBox: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  statVal: {
    fontSize: '1rem',
    fontWeight: 800,
    color: '#0f172a',
    lineHeight: '1.2',
  },
  statLbl: {
    fontSize: '0.75rem',
    color: '#64748b',
    fontWeight: 500,
  },
  sectionPadding: {
    padding: '4.5rem 0',
  },
  sectionHeaderCenter: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 900,
    color: '#0f172a',
    letterSpacing: '0.04em',
    marginBottom: '0.35rem',
    fontFamily: 'var(--font-heading)',
  },
  goldLine: {
    width: '60px',
    height: '4px',
    background: '#f59e0b',
    margin: '0 auto 0.75rem auto',
    borderRadius: '2px',
  },
  sectionSubtitle: {
    fontSize: '1rem',
    color: '#64748b',
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
    padding: '3rem',
    color: '#ffffff',
    display: 'grid',
    gridTemplateColumns: '0.5fr 1.5fr 1fr',
    gap: '2rem',
    alignItems: 'center',
    border: '1px solid rgba(251, 191, 36, 0.3)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
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
  },
  awardCenter: {
    display: 'flex',
    flexDirection: 'column',
  },
  awardBannerTitle: {
    fontSize: '2rem',
    fontWeight: 900,
    color: '#ffffff',
    marginBottom: '0.25rem',
  },
  awardBannerSubtitle: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#fbbf24',
    marginBottom: '0.75rem',
  },
  awardBannerDesc: {
    fontSize: '0.9rem',
    color: '#cbd5e1',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
  awardRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
  },
  awardFeatureBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '10px',
    padding: '0.85rem 1rem',
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#ffffff',
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
  newsList: {
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

  .shield-logo-wrapper {
    position: relative;
    display: inline-block;
  }

  .shield-shine-sweep {
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transform: skewX(-25deg);
    animation: shieldShine 4s ease-in-out infinite 1s;
  }

  @keyframes shieldShine {
    0%, 65% { left: -100%; }
    100% { left: 200%; }
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

  @media (max-width: 991px) {
    .home-hero-container {
      grid-template-columns: 1fr !important;
      gap: 2.5rem !important;
    }
    .home-hero-title {
      font-size: 2.15rem !important;
      line-height: 1.15 !important;
    }
    .home-stats-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    .home-olympiad-grid, .home-segment-grid, .home-bottom-grid3 {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    .home-trust-grid {
      grid-template-columns: repeat(3, 1fr) !important;
    }
  }
  @media (max-width: 600px) {
    .home-stats-grid {
      grid-template-columns: 1fr !important;
    }
    .home-olympiad-grid, .home-segment-grid, .home-bottom-grid3, .home-trust-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;
document.head.appendChild(styleSheet);
