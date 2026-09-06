import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import heroStudentsImg from '../assets/technik_olympiad_hero_students.jpg';
import studentLookingUpImg from '../assets/student_looking_up_backpack.jpg';
import kalamImg from '../assets/kalam_speech_photo.jpg';
import achieverTrophyImg from '../assets/boy_proud_achiever.jpg';

import {
  Bot,
  Code,
  Brain,
  Palette,
  Mic,
  BookOpen,
  Calculator,
  Grid,
  Trophy,
  Users,
  Lightbulb,
  BarChart2,
  Star,
  Globe,
  Building2,
  Award,
  GraduationCap,
  ArrowRight,
  Play,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export default function Catalog({ onSelectTrack }) {
  const navigate = useNavigate();

  const handleTrackClick = (trackName) => {
    if (onSelectTrack) onSelectTrack(trackName);
    navigate('/register');
  };

  // 8 Olympiad Categories
  const categories = [
    {
      id: 'robotics',
      name: 'Robotics Olympiad',
      tagline: 'Design • Build • Innovate',
      icon: Bot,
      iconBg: '#eff6ff',
      iconColor: '#2563eb',
      badgeColor: '#3b82f6'
    },
    {
      id: 'coding',
      name: 'Coding Olympiad',
      tagline: 'Think • Code • Create',
      icon: Code,
      iconBg: '#ccfbf1',
      iconColor: '#0d9488',
      badgeColor: '#14b8a6'
    },
    {
      id: 'ai',
      name: 'AI Olympiad',
      tagline: 'Explore • Apply • Solve',
      icon: Brain,
      iconBg: '#f3e8ff',
      iconColor: '#9333ea',
      badgeColor: '#a855f7'
    },
    {
      id: 'art',
      name: 'Art Olympiad',
      tagline: 'Imagine • Express • Inspire',
      icon: Palette,
      iconBg: '#fce7f3',
      iconColor: '#db2777',
      badgeColor: '#ec4899'
    },
    {
      id: 'speaking',
      name: 'Speaking Olympiad',
      tagline: 'Speak • Lead • Influence',
      icon: Mic,
      iconBg: '#e0f2fe',
      iconColor: '#0284c7',
      badgeColor: '#38bdf8'
    },
    {
      id: 'english',
      name: 'English Olympiad',
      tagline: 'Read • Write • Excel',
      icon: BookOpen,
      iconBg: '#e0e7ff',
      iconColor: '#4338ca',
      badgeColor: '#6366f1'
    },
    {
      id: 'abacus',
      name: 'Abacus Olympiad',
      tagline: 'Practice • Improve • Excel',
      icon: Grid,
      iconBg: '#fef3c7',
      iconColor: '#d97706',
      badgeColor: '#f59e0b'
    },
    {
      id: 'mental-math',
      name: 'Mental Maths Olympiad',
      tagline: 'Calculate • Sharpen • Succeed',
      icon: Calculator,
      iconBg: '#ede9fe',
      iconColor: '#7c3aed',
      badgeColor: '#8b5cf6'
    }
  ];

  // Why Technik Olympiad Benefits
  const benefits = [
    { title: 'Nationally Recognised', icon: Trophy },
    { title: 'Open to All School Boards', icon: Users },
    { title: 'Builds Real-World Skills', icon: Lightbulb },
    { title: 'Enhances Academic Growth', icon: BarChart2 },
    { title: 'Certificates, Medals & Recognition', icon: Star },
    { title: 'Platform for Future Opportunities', icon: Users }
  ];

  // 5 Step Process
  const steps = [
    {
      num: 1,
      title: 'Register',
      desc: 'Schools/Students enroll for the Olympiad',
      color: '#ef4444',
      bg: '#fee2e2',
      icon: BookOpen
    },
    {
      num: 2,
      title: 'Prepare',
      desc: 'Learn with resources and practice',
      color: '#3b82f6',
      bg: '#dbeafe',
      icon: BookOpen
    },
    {
      num: 3,
      title: 'Compete',
      desc: 'Appear for Olympiad at respective levels',
      color: '#10b981',
      bg: '#d1fae5',
      icon: CheckCircle2
    },
    {
      num: 4,
      title: 'Results',
      desc: 'Get performance and certificates',
      color: '#a855f7',
      bg: '#f3e8ff',
      icon: BarChart2
    },
    {
      num: 5,
      title: 'Be Recognised',
      desc: 'Top performers receive medals and special honours',
      color: '#f59e0b',
      bg: '#fef3c7',
      icon: Star
    }
  ];

  return (
    <div style={styles.page}>
      
      {/* 1. HERO BANNER SECTION */}
      <section style={styles.heroSection}>
        <div className="container" style={styles.heroContainer}>
          <div style={styles.heroGrid}>
            
            {/* Left Hero Content */}
            <div style={styles.heroLeftCol}>
              <span style={styles.heroEyebrow}>
                India's Emerging Student Talent Platform
              </span>
              <h1 style={styles.heroMainTitle}>
                TECHNIK <br />
                <span style={{ color: '#fbbf24' }}>OLYMPIAD</span>
              </h1>
              <h2 style={styles.heroSubTitle}>
                Explore &bull; Learn &bull; Compete &bull; Grow
              </h2>
              <p style={styles.heroDesc}>
                A national level Olympiad to discover and develop the next generation of innovators, creators and leaders.
              </p>

              <div style={styles.heroCtaRow}>
                <Link to="/register" style={styles.primaryYellowBtn}>
                  <span>REGISTER NOW</span>
                  <ArrowRight size={16} />
                </Link>
                <button 
                  style={styles.watchVideoBtn}
                  onClick={() => alert("Introductory video coming soon!")}
                >
                  <Play size={16} fill="#ffffff" color="#ffffff" />
                  <span>Watch Our Video</span>
                </button>
              </div>
            </div>

            {/* Right Hero Image Column */}
            <div style={styles.heroRightCol}>
              <div style={styles.heroImgWrapper}>
                <img 
                  src={heroStudentsImg} 
                  alt="School children working on robotics lab" 
                  style={styles.heroImg} 
                />
                
                {/* Floating Top-Right Feature Badges */}
                <div style={styles.floatingBadgesCol}>
                  <div style={styles.floatingBadgePill}>
                    <div style={styles.badgeIconCircle}>
                      <Lightbulb size={14} color="#38bdf8" />
                    </div>
                    <div>
                      <div style={styles.badgeTitle}>Learn</div>
                      <div style={styles.badgeSub}>Beyond Books</div>
                    </div>
                  </div>

                  <div style={styles.floatingBadgePill}>
                    <div style={styles.badgeIconCircle}>
                      <Users size={14} color="#38bdf8" />
                    </div>
                    <div>
                      <div style={styles.badgeTitle}>Compete</div>
                      <div style={styles.badgeSub}>With Confidence</div>
                    </div>
                  </div>

                  <div style={styles.floatingBadgePill}>
                    <div style={styles.badgeIconCircle}>
                      <BarChart2 size={14} color="#38bdf8" />
                    </div>
                    <div>
                      <div style={styles.badgeTitle}>Build</div>
                      <div style={styles.badgeSub}>a Brighter Future</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Script Tagline */}
                <div style={styles.heroQuoteBox}>
                  <div style={styles.heroQuoteScript}>
                    "Today's Young Learners <br /> Tomorrow's Changemakers"
                  </div>
                  <div style={styles.heroQuoteTag}>
                    &ldquo;Innovation begins with curious minds.&rdquo;
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DISCOVER YOUR PASSION (8 CATEGORIES) */}
      <section style={styles.sectionPadding}>
        <div className="container">
          
          <div style={styles.categoryHeaderRow}>
            <div>
              <div style={styles.eyebrowRow}>
                <div style={styles.eyebrowLine} />
                <span style={styles.eyebrowText}>OUR OLYMPIAD CATEGORIES</span>
              </div>
              <h2 style={styles.sectionTitleWithUnderline}>
                Discover Your Passion
              </h2>
            </div>
            
            <div style={styles.categoryHeaderRight}>
              <span style={styles.categoryHeaderSub}>
                Multiple Domains. One Mission. A Brighter Tomorrow.
              </span>
              <Link to="/catalog" style={styles.viewAllLink}>
                <span>View All Details</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* 8 Categories Grid */}
          <div style={styles.categoriesGrid}>
            {categories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div 
                  key={cat.id}
                  style={styles.categoryCard}
                  onClick={() => handleTrackClick(cat.name)}
                >
                  <div style={{ ...styles.catIconBox, background: cat.iconBg }}>
                    <IconComp size={24} color={cat.iconColor} />
                  </div>
                  <h3 style={styles.catName}>{cat.name}</h3>
                  <p style={styles.catTagline}>{cat.tagline}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. WHY TECHNIK OLYMPIAD? SECTION */}
      <section style={{ ...styles.sectionPadding, background: '#ffffff', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={styles.whyGrid}>
            
            {/* Left Image Card */}
            <div style={styles.whyImgCard}>
              <img 
                src={studentLookingUpImg} 
                alt="Smiling student looking up with backpack" 
                style={styles.whyImg} 
              />
              <div style={styles.whyScriptOverlay}>
                <span style={styles.whyScriptText}>Every Child Has A Brighter Tomorrow</span>
              </div>
            </div>

            {/* Right Content & 6 Benefits Grid */}
            <div style={styles.whyContentCol}>
              <span style={styles.whyEyebrow}>
                WHY <span style={{ color: '#d97706' }}>TECHNIK OLYMPIAD?</span>
              </span>
              <h2 style={styles.whyMainTitle}>
                More than a competition &ndash; a movement for young minds.
              </h2>

              <div style={styles.benefitsGrid}>
                {benefits.map((b, idx) => {
                  const BIcon = b.icon;
                  return (
                    <div key={idx} style={styles.benefitCard}>
                      <div style={styles.benefitIconBadge}>
                        <BIcon size={20} color="#1d4ed8" />
                      </div>
                      <span style={styles.benefitTitle}>{b.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. STATS BAR & SCHOOL PARTNER BANNER */}
      <section style={styles.statsSection}>
        <div className="container">
          <div style={styles.statsBannerGrid}>
            
            {/* Stats Items Row */}
            <div style={styles.statsRowGrid}>
              
              <div style={styles.statItem}>
                <Globe size={28} color="#2563eb" />
                <div>
                  <div style={styles.statNumber}>5 States + 1 UT</div>
                  <div style={styles.statLabel}>Our Reach</div>
                </div>
              </div>

              <div style={styles.statItem}>
                <Building2 size={28} color="#2563eb" />
                <div>
                  <div style={styles.statNumber}>Thousands</div>
                  <div style={styles.statLabel}>of Schools</div>
                </div>
              </div>

              <div style={styles.statItem}>
                <Users size={28} color="#2563eb" />
                <div>
                  <div style={styles.statNumber}>Lakh+ Students</div>
                  <div style={styles.statLabel}>Our Aspiration</div>
                </div>
              </div>

              <div style={styles.statItem}>
                <Award size={28} color="#2563eb" />
                <div>
                  <div style={styles.statNumber}>8 Olympiad Categories</div>
                  <div style={styles.statLabel}>One Unified Platform</div>
                </div>
              </div>

            </div>

            {/* Right Yellow Partner Card */}
            <Link to="/register?level=school" style={styles.yellowPartnerCard}>
              <div style={styles.partnerCardLeft}>
                <GraduationCap size={28} color="#0c1e45" />
                <div>
                  <div style={styles.partnerSub}>Are you a School?</div>
                  <div style={styles.partnerTitle}>Partner with Us</div>
                </div>
              </div>
              <ArrowRight size={20} color="#0c1e45" />
            </Link>

          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS SECTION */}
      <section style={styles.sectionPadding}>
        <div className="container">
          
          <div style={styles.eyebrowRow}>
            <div style={styles.eyebrowLine} />
            <span style={styles.eyebrowText}>HOW IT WORKS?</span>
          </div>
          <h2 style={styles.sectionMainTitle}>From Registration to Recognition</h2>

          <div style={styles.howWorksGrid}>
            
            {/* Left 5-Step Flow */}
            <div style={styles.stepperContainer}>
              <div style={styles.stepsRow}>
                {steps.map((step, idx) => {
                  return (
                    <div key={step.num} style={styles.stepCard}>
                      <div style={styles.stepHeaderRow}>
                        <div style={{ ...styles.stepNumCircle, background: step.color }}>
                          {step.num}
                        </div>
                        {idx < steps.length - 1 && (
                          <span style={styles.stepArrowRight}>&rarr;</span>
                        )}
                      </div>

                      <div style={{ ...styles.stepIconBox, background: step.bg, borderColor: step.color }}>
                        <step.icon size={18} color={step.color} />
                      </div>
                      <h4 style={styles.stepTitle}>{step.title}</h4>
                      <p style={styles.stepDesc}>{step.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right APJ Abdul Kalam Quote Card */}
            <div style={styles.kalamQuoteCard}>
              <div style={styles.kalamOverlay} />
              <img 
                src={kalamImg} 
                alt="Dr. A.P.J. Abdul Kalam" 
                style={styles.kalamImg} 
              />
              <div style={styles.kalamContent}>
                <blockquote style={styles.kalamQuoteText}>
                  &ldquo;Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.&rdquo;
                </blockquote>
                <div style={styles.kalamAuthor}>
                  &mdash; Dr. A.P.J. Abdul Kalam
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. LATEST NEWS & CELEBRATING ACHIEVERS BANNER */}
      <section style={{ ...styles.sectionPadding, paddingTop: '0' }}>
        <div className="container">
          <div style={styles.newsAndAchieversGrid}>
            
            {/* Left: Latest News */}
            <div style={styles.newsCardWrapper}>
              <div style={styles.newsHeaderRow}>
                <div style={styles.eyebrowRow}>
                  <div style={styles.eyebrowLine} />
                  <span style={styles.eyebrowText}>LATEST NEWS &amp; UPDATES</span>
                </div>
                <Link to="/media" style={styles.newsViewAll}>
                  <span>View All</span>
                  <ArrowRight size={12} />
                </Link>
              </div>

              <div style={styles.newsList}>
                <div style={styles.newsItemRow}>
                  <div style={styles.newsItemTitleGroup}>
                    <ChevronRight size={14} color="#2563eb" />
                    <span style={styles.newsItemTitle}>Registrations for 2026 are now open!</span>
                  </div>
                  <span style={styles.newsItemDate}>Aug 15, 2026</span>
                </div>

                <div style={styles.newsItemRow}>
                  <div style={styles.newsItemTitleGroup}>
                    <ChevronRight size={14} color="#2563eb" />
                    <span style={styles.newsItemTitle}>Technik Olympiad expands to 5 States + Puducherry</span>
                  </div>
                  <span style={styles.newsItemDate}>Jul 28, 2026</span>
                </div>

                <div style={styles.newsItemRow}>
                  <div style={styles.newsItemTitleGroup}>
                    <ChevronRight size={14} color="#2563eb" />
                    <span style={styles.newsItemTitle}>New AI Olympiad category announced</span>
                  </div>
                  <span style={styles.newsItemDate}>Jul 10, 2026</span>
                </div>

                <div style={styles.newsItemRow}>
                  <div style={styles.newsItemTitleGroup}>
                    <ChevronRight size={14} color="#2563eb" />
                    <span style={styles.newsItemTitle}>Partner with us &ndash; School Registration open</span>
                  </div>
                  <span style={styles.newsItemDate}>Jun 25, 2026</span>
                </div>
              </div>
            </div>

            {/* Right: Celebrating Young Achievers Banner */}
            <div style={styles.achieverBannerCard}>
              <img 
                src={achieverTrophyImg} 
                alt="Young girl student holding gold trophy" 
                style={styles.achieverBannerImg} 
              />
              <div style={styles.achieverBannerOverlay} />
              
              <div style={styles.achieverBannerContent}>
                <div style={styles.achieverScriptTop}>
                  Small Steps <br /> Big Achievements
                </div>
                <div style={styles.achieverMainTitle}>
                  Celebrating <br /> Young Achievers <br /> Across India
                </div>

                <Link to="/register" style={styles.achieverYellowBtn}>
                  <span>REGISTER NOW</span>
                  <ArrowRight size={14} />
                </Link>
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
    paddingBottom: '2rem',
  },
  sectionPadding: {
    padding: '2.5rem 0',
  },

  /* Eyebrow Utility */
  eyebrowRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    marginBottom: '0.35rem',
  },
  eyebrowLine: {
    width: '18px',
    height: '3px',
    backgroundColor: '#f97316',
    borderRadius: '2px',
  },
  eyebrowText: {
    fontSize: '0.78rem',
    fontWeight: 900,
    color: '#f97316',
    letterSpacing: '0.05em',
    fontFamily: 'var(--font-heading)',
  },
  sectionMainTitle: {
    fontSize: '1.6rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    marginBottom: '1.25rem',
  },

  /* 1. HERO BANNER */
  heroSection: {
    position: 'relative',
    background: 'linear-gradient(135deg, #041026 0%, #0c2045 100%)',
    color: '#ffffff',
    padding: '2rem 0 2.5rem 0',
    overflow: 'hidden',
  },
  heroContainer: {
    position: 'relative',
    zIndex: 2,
  },
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.5rem',
    alignItems: 'center',
  },
  heroLeftCol: {
    maxWidth: '500px',
  },
  heroEyebrow: {
    fontSize: '0.82rem',
    color: '#93c5fd',
    fontWeight: 600,
    display: 'block',
    marginBottom: '0.5rem',
  },
  heroMainTitle: {
    fontSize: '3.2rem',
    fontWeight: 900,
    lineHeight: '1.05',
    color: '#ffffff',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.35rem',
  },
  heroSubTitle: {
    fontSize: '1.35rem',
    fontWeight: 800,
    color: '#ffffff',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.65rem',
  },
  heroDesc: {
    fontSize: '0.88rem',
    color: '#cbd5e1',
    lineHeight: '1.5',
    marginBottom: '1.25rem',
  },
  heroCtaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
    flexWrap: 'wrap',
  },
  primaryYellowBtn: {
    background: '#fbbf24',
    color: '#0c1e45',
    textDecoration: 'none',
    padding: '0.65rem 1.25rem',
    borderRadius: '8px',
    fontWeight: 900,
    fontSize: '0.85rem',
    fontFamily: 'var(--font-heading)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    boxShadow: '0 4px 14px rgba(251, 191, 36, 0.3)',
  },
  watchVideoBtn: {
    background: 'transparent',
    color: '#ffffff',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    padding: '0.65rem 1.1rem',
    borderRadius: '30px',
    fontWeight: 700,
    fontSize: '0.82rem',
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
  },

  heroRightCol: {
    position: 'relative',
  },
  heroImgWrapper: {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    height: '340px',
    boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
  },
  heroImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
  },
  floatingBadgesCol: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.45rem',
    zIndex: 3,
  },
  floatingBadgePill: {
    background: 'rgba(4, 16, 38, 0.85)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '30px',
    padding: '0.3rem 0.75rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.45rem',
  },
  badgeIconCircle: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: 'rgba(56, 189, 248, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeTitle: {
    fontSize: '0.72rem',
    fontWeight: 800,
    color: '#ffffff',
    lineHeight: '1.1',
  },
  badgeSub: {
    fontSize: '0.65rem',
    color: '#94a3b8',
  },

  heroQuoteBox: {
    position: 'absolute',
    bottom: '0.85rem',
    right: '0.85rem',
    textAlign: 'right',
    zIndex: 3,
    background: 'rgba(4, 16, 38, 0.75)',
    backdropFilter: 'blur(6px)',
    padding: '0.5rem 0.85rem',
    borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.15)',
  },
  heroQuoteScript: {
    fontSize: '0.95rem',
    fontStyle: 'italic',
    color: '#38bdf8',
    fontFamily: '"Georgia", cursive, serif',
    fontWeight: 700,
    lineHeight: '1.2',
  },
  heroQuoteTag: {
    fontSize: '0.75rem',
    color: '#fbbf24',
    fontStyle: 'italic',
    marginTop: '0.2rem',
  },

  /* 2. DISCOVER YOUR PASSION */
  categoryHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '1.25rem',
  },
  sectionTitleWithUnderline: {
    fontSize: '1.75rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    position: 'relative',
    display: 'inline-block',
  },
  categoryHeaderRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.25rem',
  },
  categoryHeaderSub: {
    fontSize: '0.84rem',
    color: '#64748b',
  },
  viewAllLink: {
    fontSize: '0.82rem',
    fontWeight: 800,
    color: '#2563eb',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
    fontFamily: 'var(--font-heading)',
  },

  categoriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
    gap: '0.85rem',
  },
  categoryCard: {
    background: '#ffffff',
    borderRadius: '12px',
    padding: '1.1rem 0.75rem',
    textAlign: 'center',
    border: '1px solid #e2e8f0',
    boxShadow: '0 3px 12px rgba(0,0,0,0.025)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  catIconBox: {
    width: '46px',
    height: '46px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.65rem',
  },
  catName: {
    fontSize: '0.85rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.25rem',
    lineHeight: '1.25',
  },
  catTagline: {
    fontSize: '0.68rem',
    color: '#64748b',
    fontWeight: 600,
    lineHeight: '1.3',
  },

  /* 3. WHY TECHNIK OLYMPIAD? */
  whyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    alignItems: 'center',
  },
  whyImgCard: {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    height: '320px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  },
  whyImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
  },
  whyScriptOverlay: {
    position: 'absolute',
    bottom: '1.25rem',
    right: '1rem',
    textAlign: 'right',
    maxWidth: '180px',
  },
  whyScriptText: {
    fontSize: '1.3rem',
    fontStyle: 'italic',
    fontWeight: 700,
    color: '#fbbf24',
    fontFamily: '"Georgia", cursive, serif',
    textShadow: '0 2px 8px rgba(0,0,0,0.8)',
    lineHeight: '1.2',
  },

  whyContentCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  whyEyebrow: {
    fontSize: '0.78rem',
    fontWeight: 900,
    color: '#2563eb',
    letterSpacing: '0.05em',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.35rem',
  },
  whyMainTitle: {
    fontSize: '1.4rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    marginBottom: '1.25rem',
    lineHeight: '1.3',
  },

  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '0.75rem',
  },
  benefitCard: {
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    padding: '0.75rem 0.85rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
  },
  benefitIconBadge: {
    width: '34px',
    height: '34px',
    borderRadius: '8px',
    background: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
  },
  benefitTitle: {
    fontSize: '0.78rem',
    fontWeight: 800,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    lineHeight: '1.25',
  },

  /* 4. STATS BAR & SCHOOL PARTNER */
  statsSection: {
    background: '#ffffff',
    padding: '1.25rem 0',
    borderBottom: '1px solid #e2e8f0',
  },
  statsBannerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1rem',
    alignItems: 'center',
  },
  statsRowGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
    gap: '0.85rem',
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
  },
  statNumber: {
    fontSize: '0.85rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    lineHeight: '1.2',
  },
  statLabel: {
    fontSize: '0.72rem',
    color: '#64748b',
  },
  yellowPartnerCard: {
    background: '#fbbf24',
    borderRadius: '10px',
    padding: '0.85rem 1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textDecoration: 'none',
    boxShadow: '0 4px 14px rgba(251, 191, 36, 0.3)',
  },
  partnerCardLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  partnerSub: {
    fontSize: '0.75rem',
    fontWeight: 700,
    color: '#0c1e45',
  },
  partnerTitle: {
    fontSize: '0.95rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
  },

  /* 5. HOW IT WORKS */
  howWorksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.25rem',
    alignItems: 'stretch',
  },
  stepperContainer: {
    background: '#ffffff',
    borderRadius: '14px',
    padding: '1.25rem 0.85rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 3px 12px rgba(0,0,0,0.025)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  stepsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '0.35rem',
    alignItems: 'flex-start',
    width: '100%',
  },
  stepCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    boxSizing: 'border-box',
  },
  stepHeaderRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    marginBottom: '0.4rem',
  },
  stepNumCircle: {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    color: '#ffffff',
    fontSize: '0.72rem',
    fontWeight: 900,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  stepArrowRight: {
    position: 'absolute',
    right: '-0.3rem',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '0.85rem',
    color: '#cbd5e1',
    fontWeight: 'bold',
    zIndex: 1,
  },
  stepIconBox: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid',
    marginBottom: '0.45rem',
  },
  stepTitle: {
    fontSize: '0.78rem',
    fontWeight: 900,
    color: '#0c1e45',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.2rem',
    lineHeight: '1.2',
  },
  stepDesc: {
    fontSize: '0.68rem',
    color: '#64748b',
    lineHeight: '1.25',
  },

  /* Kalam Quote Card */
  kalamQuoteCard: {
    position: 'relative',
    borderRadius: '14px',
    overflow: 'hidden',
    background: '#041026',
    display: 'flex',
    alignItems: 'center',
    padding: '1.25rem',
    minHeight: '200px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
  },
  kalamOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, #041026 0%, #041026 50%, rgba(4,16,38,0.4) 100%)',
    zIndex: 2,
  },
  kalamImg: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    width: '50%',
    objectFit: 'cover',
    objectPosition: 'center top',
    zIndex: 1,
  },
  kalamContent: {
    position: 'relative',
    zIndex: 3,
    maxWidth: '240px',
  },
  kalamQuoteText: {
    fontSize: '0.88rem',
    fontStyle: 'italic',
    color: '#ffffff',
    lineHeight: '1.45',
    marginBottom: '0.65rem',
  },
  kalamAuthor: {
    fontSize: '0.75rem',
    fontWeight: 700,
    color: '#fbbf24',
    fontFamily: 'var(--font-heading)',
  },

  /* 6. LATEST NEWS & ACHIEVERS */
  newsAndAchieversGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.25rem',
    alignItems: 'stretch',
  },
  newsCardWrapper: {
    background: '#ffffff',
    borderRadius: '14px',
    padding: '1.25rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 3px 12px rgba(0,0,0,0.025)',
  },
  newsHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.85rem',
  },
  newsViewAll: {
    fontSize: '0.78rem',
    fontWeight: 800,
    color: '#2563eb',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.2rem',
  },
  newsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.65rem',
  },
  newsItemRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0',
    borderBottom: '1px dashed #e2e8f0',
  },
  newsItemTitleGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.35rem',
  },
  newsItemTitle: {
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#0c1e45',
  },
  newsItemDate: {
    fontSize: '0.72rem',
    color: '#94a3b8',
    fontWeight: 600,
  },

  /* Achievers Banner */
  achieverBannerCard: {
    position: 'relative',
    borderRadius: '14px',
    overflow: 'hidden',
    background: '#041026',
    padding: '1.25rem',
    minHeight: '220px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
  },
  achieverBannerImg: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
  },
  achieverBannerOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, rgba(4, 16, 38, 0.92) 0%, rgba(4, 16, 38, 0.65) 50%, rgba(4, 16, 38, 0.2) 100%)',
  },
  achieverBannerContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '220px',
  },
  achieverScriptTop: {
    fontSize: '1rem',
    fontStyle: 'italic',
    fontWeight: 700,
    color: '#38bdf8',
    fontFamily: '"Georgia", cursive, serif',
    lineHeight: '1.2',
    marginBottom: '0.35rem',
  },
  achieverMainTitle: {
    fontSize: '1.15rem',
    fontWeight: 900,
    color: '#ffffff',
    fontFamily: 'var(--font-heading)',
    lineHeight: '1.2',
    marginBottom: '0.85rem',
  },
  achieverYellowBtn: {
    background: '#fbbf24',
    color: '#0c1e45',
    textDecoration: 'none',
    padding: '0.45rem 0.85rem',
    borderRadius: '6px',
    fontWeight: 900,
    fontSize: '0.78rem',
    fontFamily: 'var(--font-heading)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
  },
};
