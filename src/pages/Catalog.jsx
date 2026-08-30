import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hash, Calculator, Code, Cpu, BookOpen, Palette, Bot, Mic, ArrowRight } from 'lucide-react';

export default function Catalog({ onSelectTrack }) {
  const navigate = useNavigate();

  const tracks = [
    {
      id: "abacus",
      name: "Abacus Championship",
      description: "Build exceptional numerical speed, mental processing, and structural visualization skills.",
      levels: ["Beginner", "Intermediate", "Expert"],
      icon: Hash,
      color: "var(--accent)",
      badgeStyle: "badge-cyan"
    },
    {
      id: "mental-math",
      name: "Mental Math Arena",
      description: "Master rapid mental arithmetic calculations without devices. Solve formulas in split seconds.",
      levels: ["Intermediate", "Advance", "Expert"],
      icon: Calculator,
      color: "var(--primary)",
      badgeStyle: "badge-indigo"
    },
    {
      id: "coding",
      name: "Coding & Algorithms",
      description: "Develop computational problem-solving, structural data design, and algorithmic coding in Python/JS.",
      levels: ["Intermediate", "Advance", "Expert"],
      icon: Code,
      color: "var(--secondary)",
      badgeStyle: "badge-purple"
    },
    {
      id: "robotics",
      name: "Robotics & Hardware",
      description: "Dive into electronic circuit design, autonomous hardware, sensor logic, and physical programming.",
      levels: ["Intermediate", "Advance", "Expert"],
      icon: Cpu,
      color: "var(--accent)",
      badgeStyle: "badge-cyan"
    },
    {
      id: "english",
      name: "English & Creative Writing",
      description: "Master advanced grammar mechanics, expressive literature, prose writing, and speed reading.",
      levels: ["Intermediate", "Advance", "Expert"],
      icon: BookOpen,
      color: "var(--primary)",
      badgeStyle: "badge-indigo"
    },
    {
      id: "art",
      name: "Digital & Classical Art",
      description: "Explore digital illustration, classical shading, perspective layout, and spatial design.",
      levels: ["Beginner", "Intermediate", "Expert"],
      icon: Palette,
      color: "var(--gold)",
      badgeStyle: "badge-gold"
    },
    {
      id: "ai",
      name: "AI & Machine Learning",
      description: "Understand machine learning pipelines, LLM fine-tuning, neural networks, and generative AI ethics.",
      levels: ["Advance", "Expert"],
      icon: Bot,
      color: "var(--secondary)",
      badgeStyle: "badge-purple"
    },
    {
      id: "public-speaking",
      name: "Public Speaking & Debate",
      description: "Hone oratorical persuasion, vocal modulation, impromptu argumentation, and formal panel debates.",
      levels: ["Intermediate", "Advance", "Expert"],
      icon: Mic,
      color: "var(--accent)",
      badgeStyle: "badge-cyan"
    }
  ];

  const handleRegister = (trackName) => {
    onSelectTrack(trackName);
    navigate('/register');
  };

  return (
    <div style={styles.page}>
      <header className="container" style={styles.header}>
        <h1 style={styles.title}>Olympiad <span className="text-gradient">Catalog</span></h1>
        <p style={styles.subtitle}>
          Select from our 8 specialized tracks. Click any track to choose your level and register for the national qualifiers.
        </p>
      </header>

      <main className="container">
        <div className="catalog-grid" style={styles.grid}>
          {tracks.map((track) => {
            const TrackIcon = track.icon;
            return (
              <div 
                key={track.id} 
                className="glass-card glass-card-hover" 
                style={styles.card}
                onClick={() => handleRegister(track.name)}
              >
                <div style={styles.cardTop}>
                  <div style={{ ...styles.iconWrapper, borderColor: track.color, background: `rgba(${track.color === 'var(--accent)' ? '6,182,212' : track.color === 'var(--primary)' ? '99,102,241' : track.color === 'var(--secondary)' ? '168,85,247' : '251,191,36'}, 0.1)` }}>
                    <TrackIcon size={22} style={{ color: track.color }} />
                  </div>
                  
                  <span className={`badge ${track.badgeStyle}`}>
                    {track.levels.length} Levels
                  </span>
                </div>

                <h3 style={styles.cardTitle}>{track.name}</h3>
                <p style={styles.cardDesc}>{track.description}</p>

                {/* Level Pips */}
                <div style={styles.pipsContainer}>
                  <span style={styles.pipLabel}>Levels:</span>
                  <div style={styles.pips}>
                    {track.levels.map((lvl, index) => (
                      <span 
                        key={index} 
                        style={styles.pip} 
                        title={`${lvl} level`}
                      >
                        {lvl}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={styles.ctaRow}>
                  <span style={{ ...styles.ctaLink, color: track.color }}>
                    Select Track & Register
                    <ArrowRight size={14} style={{ transition: 'transform 0.2s ease' }} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

const styles = {
  page: {
    padding: '3rem 0',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  title: {
    fontSize: '2.75rem',
    marginBottom: '0.75rem',
  },
  subtitle: {
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    margin: '0 auto',
    fontSize: '1.05rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1.5rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    height: '100%',
    justifyContent: 'space-between',
    padding: '1.75rem',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.25rem',
  },
  iconWrapper: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: '1.35rem',
    marginBottom: '0.5rem',
    fontWeight: 700,
  },
  cardDesc: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  pipsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1.5rem',
    background: 'rgba(255,255,255,0.02)',
    padding: '0.5rem 0.75rem',
    borderRadius: '8px',
    border: '1px solid var(--border-subtle)',
  },
  pipLabel: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  pips: {
    display: 'flex',
    gap: '0.4rem',
    flexWrap: 'wrap',
  },
  pip: {
    fontSize: '0.75rem',
    padding: '0.15rem 0.5rem',
    borderRadius: '4px',
    background: 'rgba(255,255,255,0.05)',
    color: 'var(--text-secondary)',
    fontWeight: 500,
  },
  ctaRow: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 'auto',
    borderTop: '1px solid var(--border-subtle)',
    paddingTop: '1rem',
  },
  ctaLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    fontSize: '0.85rem',
    fontWeight: 600,
  }
};

// Add responsive media query overrides for catalog grid
const styleSheet = document.createElement("style");
styleSheet.innerText += `
  @media (min-width: 640px) {
    .catalog-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  @media (min-width: 1024px) {
    .catalog-grid {
      grid-template-columns: repeat(3, 1fr) !important;
    }
  }
  .glass-card-hover:hover span svg {
    transform: translateX(4px);
  }
`;
document.head.appendChild(styleSheet);
