import React from 'react';
import { Link } from 'react-router-dom';
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
  ExternalLink
} from 'lucide-react';

export default function Home() {
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
        <div className="container" style={styles.heroContainer}>
          <div style={styles.heroLeft}>
            <div style={styles.heroEyebrow}>
              <span style={styles.eyebrowYellow}>EVERY STUDENT</span>
            </div>

            <h1 style={styles.heroTitle}>
              DESERVES A <br />
              <span style={{ color: '#fbbf24' }}>MOMENT OF PRIDE.</span>
            </h1>

            <p style={styles.heroSlogan}>
              Discover. Compete. Achieve. Be Recognised.
            </p>

            <p style={styles.heroDesc}>
              Technik Olympiad Private Limited is an educational initiative committed to identifying, 
              encouraging and celebrating the unique talents and achievements of school students.
            </p>

            <div style={styles.heroBadgeCapsule}>
              <Sparkles size={14} color="#fbbf24" style={{ marginRight: '0.4rem' }} />
              For Students from Play School to Class 12
            </div>

            <div style={styles.heroActions}>
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

          {/* Hero Visual Right */}
          <div style={styles.heroRight}>
            <div style={styles.heroVisualFrame}>
              <div style={styles.orbitRing}></div>
              
              {/* Floating Orbit Badges */}
              <div style={{ ...styles.orbitBadge, top: '5%', left: '10%' }}>
                <Bot size={18} color="#38bdf8" />
              </div>
              <div style={{ ...styles.orbitBadge, top: '25%', right: '5%' }}>
                <Code size={18} color="#fbbf24" />
              </div>
              <div style={{ ...styles.orbitBadge, bottom: '25%', left: '5%' }}>
                <Calculator size={18} color="#4ade80" />
              </div>
              <div style={{ ...styles.orbitBadge, bottom: '10%', right: '15%' }}>
                <Palette size={18} color="#f472b6" />
              </div>

              {/* Student Achiever Illustration Box */}
              <div style={styles.achieverBox}>
                <div style={styles.avatarCircle}>
                  <Trophy size={48} color="#fbbf24" />
                </div>
                <div style={styles.achieverRibbon}>
                  <Award size={14} color="#0f172a" />
                  <span>PROUD ACHIEVER</span>
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
      <section style={styles.statsSection}>
        <div className="container">
          <div style={styles.statsCardGrid}>
            {statsList.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} style={styles.statCard}>
                  <div style={{ ...styles.statIconBox, color: stat.color, background: `${stat.color}12` }}>
                    <StatIcon size={22} />
                  </div>
                  <div>
                    <h3 style={styles.statVal}>{stat.val}</h3>
                    <p style={styles.statLbl}>{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR OLYMPIADS SECTION */}
      <section style={styles.sectionPadding}>
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

            {/* For Schools */}
            <div style={styles.segmentCard}>
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

            {/* Hosting Partner */}
            <div style={styles.segmentCard}>
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
                  <span style={styles.badgeOpen}>Registrations Open</span>
                </div>

                <div style={styles.eventRow}>
                  <div>
                    <h4 style={styles.eventTitle}>Generative AI Olympiad 2026</h4>
                    <p style={styles.eventDate}>20 Sep - 20 Oct 2026</p>
                  </div>
                  <span style={styles.badgeOpen}>Registrations Open</span>
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
                <div style={styles.newsItem}>
                  <h4 style={styles.newsHeadline}>Technik Pride Award Nominations Open for 2026</h4>
                  <p style={styles.newsDate}>01 Aug 2026</p>
                </div>
                <div style={styles.newsItem}>
                  <h4 style={styles.newsHeadline}>District Level Olympiad Dates Announced</h4>
                  <p style={styles.newsDate}>28 Jul 2026</p>
                </div>
                <div style={styles.newsItem}>
                  <h4 style={styles.newsHeadline}>Congratulations to All State Toppers! Results Are Live Now</h4>
                  <p style={styles.newsDate}>25 Jul 2026</p>
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
                  <div style={styles.rankBadgeGold}>1</div>
                  <div>
                    <h4 style={styles.achieverName}>Rohan S.</h4>
                    <p style={styles.achieverDetails}>Class 8 · Robotics Olympiad</p>
                  </div>
                </div>

                <div style={styles.achieverRow}>
                  <div style={styles.rankBadgeSilver}>2</div>
                  <div>
                    <h4 style={styles.achieverName}>Ananya R.</h4>
                    <p style={styles.achieverDetails}>Class 7 · AI Olympiad</p>
                  </div>
                </div>

                <div style={styles.achieverRow}>
                  <div style={styles.rankBadgeBronze}>3</div>
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
    width: '320px',
    height: '320px',
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
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    background: '#0a1936',
    border: '1px solid rgba(255,255,255,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  achieverBox: {
    width: '220px',
    padding: '1.75rem 1.25rem',
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
    gap: '0.35rem',
    background: '#fbbf24',
    color: '#0f172a',
    fontWeight: 800,
    fontSize: '0.72rem',
    padding: '0.3rem 0.85rem',
    borderRadius: '4px',
    marginBottom: '0.5rem',
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
    padding: '1.75rem',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
  },
  segmentHeader: {
    paddingLeft: '0.85rem',
    marginBottom: '1.5rem',
  },
  segmentTitle: {
    fontSize: '1.15rem',
    fontWeight: 900,
    color: '#0f172a',
    marginBottom: '0.2rem',
  },
  segmentSubtitle: {
    fontSize: '0.82rem',
    color: '#64748b',
  },
  segmentChecklist: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginBottom: '2rem',
    flexGrow: 1,
  },
  checkItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    fontSize: '0.86rem',
    color: '#334155',
    fontWeight: 500,
  },
  segmentBtn: {
    display: 'block',
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '0.82rem',
    padding: '0.75rem',
    borderRadius: '8px',
    textDecoration: 'none',
    letterSpacing: '0.04em',
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
  newsItem: {
    paddingBottom: '0.75rem',
    borderBottom: '1px dashed #e2e8f0',
  },
  newsHeadline: {
    fontSize: '0.86rem',
    fontWeight: 700,
    color: '#0f172a',
    lineHeight: '1.4',
    marginBottom: '0.2rem',
  },
  newsDate: {
    fontSize: '0.75rem',
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
  rankBadgeGold: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: '#fbbf24',
    color: '#0f172a',
    fontWeight: 900,
    fontSize: '0.88rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  rankBadgeSilver: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: '#94a3b8',
    color: '#ffffff',
    fontWeight: 900,
    fontSize: '0.88rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  rankBadgeBronze: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: '#d97706',
    color: '#ffffff',
    fontWeight: 900,
    fontSize: '0.88rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
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

// Add responsive CSS rules
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .btn-hero-gold {
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    color: #0f172a;
    font-weight: 800;
    font-size: 0.85rem;
    font-family: var(--font-heading);
    padding: 0.8rem 1.6rem;
    border-radius: 8px;
    text-decoration: none;
    box-shadow: 0 4px 14px rgba(245, 158, 11, 0.4);
    letter-spacing: 0.03em;
    display: inline-flex;
    align-items: center;
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
  }
  @media (max-width: 991px) {
    .home-olympiad-grid, .home-segment-grid, .home-bottom-grid3 {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    .home-trust-grid {
      grid-template-columns: repeat(3, 1fr) !important;
    }
  }
  @media (max-width: 600px) {
    .home-olympiad-grid, .home-segment-grid, .home-bottom-grid3, .home-trust-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;
document.head.appendChild(styleSheet);
