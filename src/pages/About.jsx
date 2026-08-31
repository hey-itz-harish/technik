import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Bot, 
  Code, 
  Brain, 
  Palette, 
  BookOpen, 
  School, 
  Award, 
  GraduationCap, 
  Laptop, 
  Target, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Rocket,
  CheckCircle2
} from 'lucide-react';

export default function About() {
  const whatWeDoList = [
    {
      icon: Trophy,
      emoji: '🏆',
      title: 'Olympiad Examinations & Assessments',
      desc: 'Structured examinations and talent assessments designed to gauge and foster academic competence.',
      badge: 'CORE'
    },
    {
      icon: Bot,
      emoji: '🤖',
      title: 'Robotics & Technology Education',
      desc: 'Hands-on exposure to robotics, engineering principles, and cutting-edge tech fundamentals.',
      badge: 'FOUNDATION'
    },
    {
      icon: Code,
      emoji: '💻',
      title: 'Coding & Generative AI Competitions',
      desc: 'Future-ready competitions pushing computational thinking and AI application skills.',
      badge: 'FUTURE-TECH'
    },
    {
      icon: Brain,
      emoji: '🧠',
      title: 'Mental Maths & Logical Thinking',
      desc: 'Speed calculation, problem-solving, and cognitive dexterity development programs.',
      badge: 'COGNITIVE'
    },
    {
      icon: Palette,
      emoji: '🎨',
      title: 'Art & Creativity Competitions',
      desc: 'Encouraging creative expressions, visual arts, and innovative artistic representation.',
      badge: 'CREATIVE'
    },
    {
      icon: BookOpen,
      emoji: '📚',
      title: 'English & Academic Olympiads',
      desc: 'Mastery of language, grammar, comprehension, and fundamental school academics.',
      badge: 'ACADEMIC'
    },
    {
      icon: School,
      emoji: '🏫',
      title: 'School-Level Educational Events',
      desc: 'Collaborative school events bringing together students to compete and collaborate.',
      badge: 'OUTREACH'
    },
    {
      icon: Award,
      emoji: '🥇',
      title: 'Student Awards & Recognition',
      desc: 'Prestigious trophies, medals, certificates, and state/national rank honors.',
      badge: 'HONORS'
    },
    {
      icon: GraduationCap,
      emoji: '👩‍🏫',
      title: 'Workshops & Training Programs',
      desc: 'Interactive learning workshops led by educators to build practical skills.',
      badge: 'SKILLING'
    },
    {
      icon: Laptop,
      emoji: '💻',
      title: 'Digital Learning & Online Assessments',
      desc: 'Seamless, secure, and intuitive digital assessment platform for students everywhere.',
      badge: 'PLATFORM'
    }
  ];

  return (
    <div style={styles.page}>
      {/* Hero Header */}
      <section style={styles.heroSection}>
        <div className="container" style={styles.heroContainer}>
          <div style={styles.badgeContainer}>
            <div style={styles.mockupBadge}>
              <Sparkles size={14} color="var(--accent)" style={{ marginRight: '0.4rem' }} />
              About Technik Olympiad Pvt. Ltd.
            </div>
          </div>

          <h1 style={styles.heroTitle}>
            Empowering & Celebrating <br />
            <span style={{ color: 'var(--secondary)' }}>School Champions</span>
          </h1>

          <p style={styles.heroSubtext}>
            Technik Olympiad Private Limited is an education-focused organization dedicated to 
            identifying, encouraging, and celebrating the talents and achievements of school students.
          </p>

          <div style={styles.taglineCard}>
            <span style={styles.taglineText}>
              Technik Olympiad – <strong>Discover. Compete. Excel. Get Recognised.</strong>
            </span>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section style={styles.journeySection}>
        <div className="container">
          <div style={styles.journeyGrid} className="about-grid-2">
            <div style={styles.journeyContent}>
              <span className="badge badge-indigo" style={{ marginBottom: '1rem' }}>OUR JOURNEY</span>
              <h2 style={styles.sectionTitle}>From Robotics Education to Comprehensive Academic Excellence</h2>
              
              <p style={styles.paragraphText}>
                Founded in <strong>2018</strong>, Technik began its journey with a focus on introducing 
                <span style={styles.highlightText}> robotics and technology education</span> to school students. 
                Over the years, our vision has expanded beyond robotics to create a broader platform for 
                <em> academic excellence, innovation, creativity, logical thinking, and skill development</em>.
              </p>

              <p style={styles.paragraphText}>
                Today, <strong>Technik Olympiad Private Limited</strong> works towards creating meaningful 
                opportunities for students from <strong>Class 3 to Class 8</strong> through Olympiads, 
                talent assessments, educational competitions, workshops, training programs, certifications, 
                and student recognition initiatives.
              </p>

              <div style={styles.quickStatsRow}>
                <div style={styles.quickStatItem}>
                  <h3 style={styles.quickStatVal}>2018</h3>
                  <span style={styles.quickStatLbl}>Established Year</span>
                </div>
                <div style={styles.quickStatDivider}></div>
                <div style={styles.quickStatItem}>
                  <h3 style={styles.quickStatVal}>Class 3 - 8</h3>
                  <span style={styles.quickStatLbl}>Student Focus</span>
                </div>
                <div style={styles.quickStatDivider}></div>
                <div style={styles.quickStatItem}>
                  <h3 style={styles.quickStatVal}>10+</h3>
                  <span style={styles.quickStatLbl}>Initiative Domains</span>
                </div>
              </div>
            </div>

            <div style={styles.journeyVisualCard} className="glass-card">
              <div style={styles.visualBadge}>
                <Rocket size={24} color="var(--accent)" />
              </div>
              <h3 style={styles.visualTitle}>Evolution Timeline</h3>
              
              <div style={styles.timelineList}>
                <div style={styles.timelineItem}>
                  <div style={styles.timelineDot}></div>
                  <div>
                    <h4 style={styles.timelineYear}>2018 - The Spark</h4>
                    <p style={styles.timelineDesc}>Pioneered robotics and hands-on technology education for young learners.</p>
                  </div>
                </div>

                <div style={styles.timelineItem}>
                  <div style={styles.timelineDot}></div>
                  <div>
                    <h4 style={styles.timelineYear}>Expansion Era</h4>
                    <p style={styles.timelineDesc}>Extended into Coding, Mental Maths, AI, English, Art, and STEM competitions.</p>
                  </div>
                </div>

                <div style={styles.timelineItem}>
                  <div style={{ ...styles.timelineDot, background: 'var(--secondary)' }}></div>
                  <div>
                    <h4 style={styles.timelineYear}>Today & Beyond</h4>
                    <p style={styles.timelineDesc}>Full-suite educational platform discovering & honoring future innovators nationwide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section style={styles.missionSection}>
        <div className="container">
          <div style={styles.missionCard} className="glass-card">
            <div style={styles.missionHeader}>
              <div style={styles.missionIconBox}>
                <Target size={28} color="var(--accent)" />
              </div>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '0.25rem' }}>CORE PURPOSE</span>
                <h2 style={styles.missionTitle}>Our Mission</h2>
              </div>
            </div>

            <blockquote style={styles.missionQuote}>
              “Our mission is to provide every student with an opportunity to 
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}> discover their potential</span>, 
              <span style={{ color: 'var(--secondary)', fontWeight: 700 }}> demonstrate their talent</span>, 
              <span style={{ color: 'var(--primary)', fontWeight: 700 }}> compete with confidence</span>, and 
              <span style={{ color: 'var(--gold)', fontWeight: 700 }}> receive recognition for their achievements</span>.”
            </blockquote>

            <p style={styles.missionBody}>
              We believe that every school and every student has something special to contribute. 
              Through structured competitions and recognition programs, Technik aims to create a platform where 
              <strong> participation, achievement, and excellence are celebrated</strong>.
            </p>

            <div style={styles.missionPillars}>
              <div style={styles.pillarItem}>
                <CheckCircle2 size={18} color="var(--accent)" />
                <span>Discover Potential</span>
              </div>
              <div style={styles.pillarItem}>
                <CheckCircle2 size={18} color="var(--secondary)" />
                <span>Demonstrate Talent</span>
              </div>
              <div style={styles.pillarItem}>
                <CheckCircle2 size={18} color="var(--primary)" />
                <span>Compete with Confidence</span>
              </div>
              <div style={styles.pillarItem}>
                <CheckCircle2 size={18} color="var(--gold)" />
                <span>Receive Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section style={styles.whatWeDoSection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <span className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>PORTFOLIO OF EXCELLENCE</span>
            <h2 style={styles.sectionTitleCenter}>What We Do</h2>
            <p style={styles.sectionSubtitle}>
              Empowering students across diverse streams of logic, tech, arts, and academics.
            </p>
          </div>

          <div style={styles.grid10} className="about-grid-do">
            {whatWeDoList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="glass-card glass-card-hover" style={styles.doCard}>
                  <div style={styles.doCardTop}>
                    <span style={styles.emojiSpan}>{item.emoji}</span>
                    <span className="badge" style={styles.itemBadge}>{item.badge}</span>
                  </div>
                  
                  <div style={styles.doHeader}>
                    <div style={styles.doIconContainer}>
                      <IconComp size={20} color="var(--accent)" />
                    </div>
                    <h3 style={styles.doTitle}>{item.title}</h3>
                  </div>
                  
                  <p style={styles.doDesc}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section style={styles.visionSection}>
        <div className="container">
          <div style={styles.visionBox} className="glass-card">
            <div style={styles.visionIconCircle}>
              <ShieldCheck size={32} color="var(--secondary)" />
            </div>

            <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>OUR VISION</span>

            <h2 style={styles.visionQuoteText}>
              “To become a trusted educational platform that discovers, develops, and celebrates the potential of every student.”
            </h2>

            <p style={styles.visionBody}>
              From our beginnings in robotics education to our vision of building a comprehensive 
              student excellence platform, <strong>Technik is committed to shaping confident, capable, creative, and future-ready learners.</strong>
            </p>

            <div style={styles.ctaRow}>
              <Link to="/register" className="btn btn-orange">
                Register for Olympiads <ArrowRight size={16} />
              </Link>
              <Link to="/catalog" className="btn btn-ghost">
                Explore Programs
              </Link>
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
    paddingBottom: '4rem',
  },
  heroSection: {
    padding: '4.5rem 0 3rem 0',
    textAlign: 'center',
  },
  heroContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  badgeContainer: {
    marginBottom: '1.25rem',
  },
  mockupBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    background: '#ffffff',
    border: '1px solid var(--border-subtle)',
    borderRadius: '50px',
    padding: '0.4rem 1.25rem',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#2563eb',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)',
  },
  heroTitle: {
    fontSize: '3.5rem',
    lineHeight: '1.15',
    fontWeight: 800,
    marginBottom: '1.25rem',
    maxWidth: '850px',
    color: 'var(--primary)',
    fontFamily: 'var(--font-heading)',
  },
  heroSubtext: {
    fontSize: '1.15rem',
    color: 'var(--text-secondary)',
    maxWidth: '740px',
    marginBottom: '2rem',
    lineHeight: '1.65',
  },
  taglineCard: {
    background: 'rgba(37, 99, 235, 0.05)',
    border: '1px solid rgba(37, 99, 235, 0.15)',
    borderRadius: '50px',
    padding: '0.75rem 1.75rem',
    display: 'inline-block',
  },
  taglineText: {
    fontSize: '0.95rem',
    color: 'var(--primary)',
    letterSpacing: '0.01em',
  },
  journeySection: {
    padding: '3.5rem 0',
  },
  journeyGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '2.5rem',
    alignItems: 'center',
  },
  journeyContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  sectionTitle: {
    fontSize: '2.25rem',
    fontWeight: 800,
    marginBottom: '1.25rem',
    color: 'var(--primary)',
    lineHeight: '1.25',
  },
  paragraphText: {
    fontSize: '1.05rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.7',
    marginBottom: '1.25rem',
  },
  highlightText: {
    color: 'var(--accent)',
    fontWeight: 600,
  },
  quickStatsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    marginTop: '1.5rem',
    padding: '1.25rem 1.5rem',
    background: '#ffffff',
    borderRadius: '12px',
    border: '1px solid var(--border-subtle)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
    width: '100%',
  },
  quickStatItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  quickStatVal: {
    fontSize: '1.35rem',
    fontWeight: 800,
    color: 'var(--accent)',
  },
  quickStatLbl: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    fontWeight: 500,
  },
  quickStatDivider: {
    width: '1px',
    height: '35px',
    background: 'var(--border-subtle)',
  },
  journeyVisualCard: {
    padding: '2rem',
    background: '#ffffff',
    border: '1px solid var(--border-subtle)',
    borderRadius: '16px',
  },
  visualBadge: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    background: 'rgba(37, 99, 235, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  visualTitle: {
    fontSize: '1.35rem',
    fontWeight: 700,
    marginBottom: '1.5rem',
    color: 'var(--primary)',
  },
  timelineList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    position: 'relative',
  },
  timelineItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
  },
  timelineDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: 'var(--accent)',
    marginTop: '5px',
    flexShrink: 0,
  },
  timelineYear: {
    fontSize: '0.95rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '0.2rem',
  },
  timelineDesc: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
  },
  missionSection: {
    padding: '3.5rem 0',
  },
  missionCard: {
    padding: '3rem',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    borderRadius: '20px',
    border: '1px solid var(--border-subtle)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
  },
  missionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    marginBottom: '1.75rem',
  },
  missionIconBox: {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    background: 'rgba(37, 99, 235, 0.08)',
    border: '1px solid rgba(37, 99, 235, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  missionTitle: {
    fontSize: '2rem',
    fontWeight: 800,
    color: 'var(--primary)',
  },
  missionQuote: {
    fontSize: '1.35rem',
    lineHeight: '1.6',
    fontWeight: 500,
    color: 'var(--primary)',
    fontFamily: 'var(--font-heading)',
    paddingLeft: '1.5rem',
    borderLeft: '4px solid var(--accent)',
    marginBottom: '1.75rem',
  },
  missionBody: {
    fontSize: '1.05rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.75',
    marginBottom: '2rem',
  },
  missionPillars: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
  },
  pillarItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    padding: '0.85rem 1rem',
    background: '#ffffff',
    borderRadius: '10px',
    border: '1px solid var(--border-subtle)',
    fontSize: '0.9rem',
    fontWeight: 600,
    color: 'var(--text-primary)',
  },
  whatWeDoSection: {
    padding: '3.5rem 0',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionTitleCenter: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: 'var(--primary)',
    marginBottom: '0.75rem',
  },
  sectionSubtitle: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  grid10: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
  },
  doCard: {
    padding: '1.75rem',
    background: '#ffffff',
    borderRadius: '16px',
    border: '1px solid var(--border-subtle)',
    display: 'flex',
    flexDirection: 'column',
  },
  doCardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  emojiSpan: {
    fontSize: '1.75rem',
  },
  itemBadge: {
    background: 'rgba(15, 23, 42, 0.05)',
    color: 'var(--primary)',
    borderColor: 'rgba(15, 23, 42, 0.1)',
    fontSize: '0.7rem',
  },
  doHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '0.75rem',
  },
  doIconContainer: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    background: 'rgba(37, 99, 235, 0.06)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  doTitle: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    lineHeight: '1.3',
  },
  doDesc: {
    fontSize: '0.88rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    flexGrow: 1,
  },
  visionSection: {
    padding: '3.5rem 0 2rem 0',
  },
  visionBox: {
    padding: '3.5rem 2.5rem',
    textAlign: 'center',
    background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.04) 0%, rgba(249, 115, 22, 0.04) 100%)',
    borderRadius: '24px',
    border: '1px solid var(--border-subtle)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  visionIconCircle: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: '#ffffff',
    boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.25rem',
  },
  visionQuoteText: {
    fontSize: '1.85rem',
    fontWeight: 700,
    color: 'var(--primary)',
    maxWidth: '800px',
    marginBottom: '1.5rem',
    fontStyle: 'italic',
    lineHeight: '1.4',
  },
  visionBody: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    maxWidth: '720px',
    lineHeight: '1.7',
    marginBottom: '2.5rem',
  },
  ctaRow: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }
};

// Responsive styles injection
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @media (max-width: 991px) {
    .about-grid-2 {
      grid-template-columns: 1fr !important;
    }
    .about-grid-do {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    .missionPillars-responsive {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  @media (max-width: 600px) {
    .about-grid-do {
      grid-template-columns: 1fr !important;
    }
  }
`;
document.head.appendChild(styleSheet);
