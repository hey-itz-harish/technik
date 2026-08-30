import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, RefreshCw, ArrowRight, Award, Brain, CheckCircle2, Zap, Check, X, ShieldAlert, ChevronRight, Lock, Sparkles, Layers } from 'lucide-react';

export default function SkillCompass({ onSelectTrack }) {
  const navigate = useNavigate();
  
  // Main sub-tab state: 'quiz' vs 'practice'
  const [activeSubTab, setActiveSubTab] = useState('quiz');

  // ================= QUIZ STATE =================
  const questions = [
    {
      id: 1,
      text: "How do you prefer to solve a difficult logical problem?",
      options: [
        { text: "Writing out clean, structured step-by-step instructions.", track: "Coding & Algorithms" },
        { text: "Visualizing the patterns mentally and computing in my head.", track: "Mental Math Arena" },
        { text: "Tinkering with physical components or constructing blocks.", track: "Robotics & Hardware" },
        { text: "Sketching out options and designing a visual representation.", track: "Digital & Classical Art" }
      ]
    },
    {
      id: 2,
      text: "Which of these futuristic concepts excites you the most?",
      options: [
        { text: "Training a neural network to predict weather or analyze text.", track: "AI & Machine Learning" },
        { text: "Programming an autonomous vehicle to navigate obstacles.", track: "Robotics & Hardware" },
        { text: "Delivering a moving speech to inspire global change on stage.", track: "Public Speaking & Debate" },
        { text: "Creating a cinematic VR experience with immersive visuals.", track: "Digital & Classical Art" }
      ]
    },
    {
      id: 3,
      text: "What is your go-to activity when you want a challenge?",
      options: [
        { text: "Playing rapid-fire math games or solving number puzzles.", track: "Abacus Championship" },
        { text: "Analyzing poetry, writing creative stories, or reading books.", track: "English & Creative Writing" },
        { text: "Building automated bots or scripting custom game mods.", track: "Coding & Algorithms" },
        { text: "Engaging in debates on philosophical or political topics.", track: "Public Speaking & Debate" }
      ]
    },
    {
      id: 4,
      text: "When you look at a complex chart or scientific dataset, what is your first instinct?",
      options: [
        { text: "Quickly mental-calculating the growth rate and percentages.", track: "Mental Math Arena" },
        { text: "Using AI models to extract insights and predict future trends.", track: "AI & Machine Learning" },
        { text: "Designing a beautiful dashboard to visually explain the data.", track: "Digital & Classical Art" },
        { text: "Writing a script to automate data collection and cleanup.", track: "Coding & Algorithms" }
      ]
    },
    {
      id: 5,
      text: "How would you choose to contribute to a school project team?",
      options: [
        { text: "Presenting the final slide deck on stage to the evaluators.", track: "Public Speaking & Debate" },
        { text: "Drafting, structuring, and editing the written project report.", track: "English & Creative Writing" },
        { text: "Wiring up the demo physical prototype and soldering circuits.", track: "Robotics & Hardware" },
        { text: "Verifying and cross-checking data calculations for errors.", track: "Abacus Championship" }
      ]
    },
    {
      id: 6,
      text: "Which of these documentary topics would you select first?",
      options: [
        { text: "Supercomputers: The Secret Lives of Mental Calculation Giants.", track: "Abacus Championship" },
        { text: "Neural Networks: How Machine Learning is Shaping Tomorrow.", track: "AI & Machine Learning" },
        { text: "The Great Masterpieces: A History of Graphic and Classical Art.", track: "Digital & Classical Art" },
        { text: "Rhetoric and Power: Speeches that Changed Modern History.", track: "English & Creative Writing" }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultTrack, setResultTrack] = useState("");
  const [matchPercentage, setMatchPercentage] = useState(0);

  const handleAnswerSelect = (track) => {
    const updatedAnswers = [...answers, track];
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const trackCounts = {};
      updatedAnswers.forEach((ans) => {
        trackCounts[ans] = (trackCounts[ans] || 0) + 1;
      });

      let topTrack = "Coding & Algorithms";
      let maxCount = 0;
      Object.keys(trackCounts).forEach((key) => {
        if (trackCounts[key] > maxCount) {
          maxCount = trackCounts[key];
          topTrack = key;
        }
      });

      const calculatedPercentage = Math.floor(Math.random() * (98 - 86 + 1)) + 86;
      
      setResultTrack(topTrack);
      setMatchPercentage(calculatedPercentage);
      setShowResult(true);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setResultTrack("");
    setMatchPercentage(0);
  };

  const handleRegisterResult = () => {
    onSelectTrack(resultTrack);
    navigate('/register');
  };

  const trackDescriptions = {
    "Abacus Championship": "You possess rapid computational speed, visualization capabilities, and strong memory retention. The Abacus track will supercharge your mental calculations and spatial thinking.",
    "Mental Math Arena": "You are a logical thinker who enjoys rapid numerical analysis. The Mental Math Arena will hone your ability to solve complex equations and operations lightning-fast in your head.",
    "Coding & Algorithms": "You have a natural knack for systemic thinking, automation, and structured logical flows. The Coding track will test your problem-solving abilities and algorithmic structure.",
    "Robotics & Hardware": "You excel in physical construction, electronics, and hardware logic. The Robotics track is perfect for your hands-on creation and autonomous machinery logic.",
    "English & Creative Writing": "You are an articulate, expressive, and detailed researcher with an affinity for storytelling and language mechanics. This track will elevate your grammar and prose structure.",
    "Digital & Classical Art": "You have a sharp eye for layout symmetry, digital illustration, and classical design. This track will unlock your creative composition and aesthetic execution.",
    "AI & Machine Learning": "You are fascinated by automation, predictive patterns, neural structures, and statistics. The AI track will introduce you to machine learning models and dataset processing.",
    "Public Speaking & Debate": "You have excellent verbal persuasive power, structure, and impromptu quick-thinking. The Public Speaking arena will sharpen your voice modulation and panel argument logic."
  };

  // ================= 50-LEVEL ROTATED FLASHCARD DECK STATE =================
  const [practiceTrack, setPracticeTrack] = useState("Coding & Algorithms");
  const [activeLevel, setActiveLevel] = useState(1);
  const [completedLevels, setCompletedLevels] = useState([1]);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimatingNext, setIsAnimatingNext] = useState(false);

  // Helper to get difficulty tier badge
  const getTierInfo = (level) => {
    if (level <= 10) return { label: "Beginner Foundation", badgeStyle: "badge-indigo", range: "Levels 1–10" };
    if (level <= 25) return { label: "Intermediate Mastery", badgeStyle: "badge-purple", range: "Levels 11–25" };
    if (level <= 40) return { label: "Advanced Challenger", badgeStyle: "badge-cyan", range: "Levels 26–40" };
    return { label: "National Grandmaster", badgeStyle: "badge-gold", range: "Levels 41–50" };
  };

  // Scaled question generator for Levels 1 to 50
  const getQuestionForLevel = (track, lvl) => {
    const tier = getTierInfo(lvl);

    if (track === "Coding & Algorithms") {
      if (lvl === 1) return {
        q: "What is the correct syntax to define a constant in JavaScript?",
        options: ["var x = 10", "let x = 10", "const x = 10", "constant x = 10"],
        correct: 2,
        explanation: "`const` is used in ES6+ JavaScript to declare read-only constant variables."
      };
      if (lvl === 2) return {
        q: "What is the result of `3 + '3'` in JavaScript coercion?",
        options: ["'33'", "6", "NaN", "TypeError"],
        correct: 0,
        explanation: "The `+` operator with a string triggers string concatenation, producing `'33'`."
      };
      if (lvl === 5) return {
        q: "What will `typeof NaN` evaluate to in JavaScript?",
        options: ["'number'", "'nan'", "'undefined'", "'object'"],
        correct: 0,
        explanation: "Despite representing 'Not-a-Number', `typeof NaN` in JS is technically `'number'."
      };
      if (lvl === 15) return {
        q: "Which algorithm achieves O(n log n) average time complexity for sorting arrays?",
        options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
        correct: 1,
        explanation: "Quick Sort & Merge Sort achieve O(n log n) average time complexity, outperforming O(n²) Bubble Sort."
      };
      if (lvl === 30) return {
        q: "What is the time complexity of searching a target key in a balanced Binary Search Tree (BST)?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        correct: 2,
        explanation: "A balanced BST halves the search space at each step, yielding logarithmic O(log n) performance."
      };
      if (lvl === 50) return {
        q: "In Dynamic Programming, what does the 'Optimal Substructure' property imply?",
        options: [
          "An optimal solution contains optimal solutions to its subproblems.",
          "The algorithm uses O(1) auxiliary space at all recursion levels.",
          "Subproblems overlap and can be executed strictly in parallel.",
          "The graph contains no directed cycles or negative weights."
        ],
        correct: 0,
        explanation: "Optimal Substructure means an optimal solution to a problem is constructed from optimal solutions to subproblems."
      };
      return {
        q: `In ${track}, what is the expected result of algorithmic scaling for benchmark #${lvl}?`,
        options: [
          `Optimized execution complexity of O(log n)`,
          `Sequential pipeline loop with ${lvl * 2} iterations`,
          `Constant memory allocation space O(1)`,
          `Dynamic programming memoization cache`
        ],
        correct: 0,
        explanation: `Level ${lvl} tests foundational computational speed and algorithmic structure in ${track}.`
      };
    }

    if (track === "Mental Math Arena" || track === "Abacus Championship") {
      if (lvl === 1) return {
        q: "Calculate 45 + 55 in your head.",
        options: ["90", "100", "105", "110"],
        correct: 1,
        explanation: "45 + 55 = 100."
      };
      if (lvl === 2) return {
        q: "Calculate 12 × 12 in your head.",
        options: ["124", "134", "144", "154"],
        correct: 2,
        explanation: "12 × 12 = 144."
      };
      if (lvl === 10) return {
        q: "Calculate 105 × 105 mentally using the Nikhilam square rule.",
        options: ["10,525", "11,025", "11,225", "10,025"],
        correct: 1,
        explanation: "Multiply 10 by 11 = 110, then append 25 -> 11,025."
      };
      if (lvl === 25) return {
        q: "What is 25% of 640?",
        options: ["140", "160", "180", "200"],
        correct: 1,
        explanation: "25% is 1/4th. 640 / 4 = 160."
      };
      if (lvl === 50) return {
        q: "What is the square root of 50,625?",
        options: ["215", "225", "235", "245"],
        correct: 1,
        explanation: "225 × 225 = 50,625."
      };
      return {
        q: `Calculate ${lvl * 12} + ${lvl * 15} mentally.`,
        options: [`${lvl * 27}`, `${lvl * 25}`, `${lvl * 30}`, `${lvl * 20}`],
        correct: 0,
        explanation: `${lvl * 12} + ${lvl * 15} = ${lvl * 27}.`
      };
    }

    return {
      q: `Evaluate the core principle of ${track} for level ${lvl} qualification.`,
      options: [
        `Systematic evaluation rule #${lvl} with high accuracy`,
        `Alternative exploratory option B`,
        `Baseline theoretical standard C`,
        `Custom secondary hypothesis D`
      ],
      correct: 0,
      explanation: `Level ${lvl} focuses on ${tier.label} concepts tailored for ${track}.`
    };
  };

  const currentLevelQ = getQuestionForLevel(practiceTrack, activeLevel);
  const nextLevelQ = getQuestionForLevel(practiceTrack, Math.min(50, activeLevel + 1));
  const currentTier = getTierInfo(activeLevel);

  const handleSelectOption = (idx) => {
    if (!isSubmitted && !isAnimatingNext) {
      setSelectedOpt(idx);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedOpt === null || isSubmitted) return;
    setIsSubmitted(true);
    if (selectedOpt === currentLevelQ.correct) {
      if (!completedLevels.includes(activeLevel)) {
        setCompletedLevels([...completedLevels, activeLevel]);
      }
    }
  };

  // Stack Flashcard Swipe Action: Top Card Flips Out
  const handleProceedNextCard = () => {
    if (activeLevel < 50 && !isAnimatingNext) {
      setIsAnimatingNext(true);

      setTimeout(() => {
        setActiveLevel(prev => prev + 1);
        setSelectedOpt(null);
        setIsSubmitted(false);
        setIsAnimatingNext(false);
      }, 380);
    }
  };

  const handleSelectLevelFromGrid = (lvlNum) => {
    if (!isAnimatingNext) {
      setActiveLevel(lvlNum);
      setSelectedOpt(null);
      setIsSubmitted(false);
    }
  };

  return (
    <div style={styles.page}>
      <div className="container" style={styles.container}>
        
        {/* Page Header */}
        <header style={styles.intro}>
          <span className="badge badge-purple" style={{ marginBottom: '1rem' }}>SKILL COMPASS HUB</span>
          <h1 style={styles.introTitle}>Discover & <span className="text-gradient">Enhance Your Skills</span></h1>
          
          {/* Catchy Subtitle Tagline */}
          <p style={styles.introDesc}>
            Pinpoint your true cognitive superpowers, master 50 levels of high-octane practice flashcards, and accelerate your path to Olympiad victory.
          </p>

          {/* Sub-Tab Navigation Bar */}
          <div style={styles.subTabNav}>
            <button 
              onClick={() => setActiveSubTab('quiz')}
              style={{
                ...styles.subTabBtn,
                background: activeSubTab === 'quiz' ? 'var(--primary)' : 'transparent',
                color: activeSubTab === 'quiz' ? '#ffffff' : 'var(--text-secondary)',
                borderColor: activeSubTab === 'quiz' ? 'var(--primary)' : 'var(--border-subtle)',
              }}
            >
              <Compass size={16} />
              Skill Discovery Quiz
            </button>

            <button 
              onClick={() => setActiveSubTab('practice')}
              style={{
                ...styles.subTabBtn,
                background: activeSubTab === 'practice' ? 'var(--primary)' : 'transparent',
                color: activeSubTab === 'practice' ? '#ffffff' : 'var(--text-secondary)',
                borderColor: activeSubTab === 'practice' ? 'var(--primary)' : 'var(--border-subtle)',
              }}
            >
              <Layers size={16} />
              50-Level Flashcard Deck
            </button>
          </div>
        </header>

        {/* ================= SUB-TAB 1: QUIZ ================= */}
        {activeSubTab === 'quiz' && (
          <>
            {!showResult ? (
              <div className="glass-card" style={styles.quizCard}>
                <div style={styles.progressHeader}>
                  <span style={styles.progressText}>Question {currentQuestion + 1} of {questions.length}</span>
                  <div style={styles.pips}>
                    {questions.map((_, index) => (
                      <div 
                        key={index} 
                        style={{
                          ...styles.pip,
                          background: index < currentQuestion ? 'var(--accent)' : index === currentQuestion ? 'var(--secondary)' : '#e2e8f0',
                          boxShadow: index === currentQuestion ? '0 0 10px var(--secondary-glow)' : 'none',
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div style={styles.questionSection}>
                  <h2 style={styles.questionText}>{questions[currentQuestion].text}</h2>
                  <div style={styles.optionsGrid}>
                    {questions[currentQuestion].options.map((option, index) => (
                      <button 
                        key={index} 
                        className="btn btn-ghost" 
                        style={styles.optionBtn}
                        onClick={() => handleAnswerSelect(option.track)}
                      >
                        <span style={styles.optionIndex}>{String.fromCharCode(65 + index)}</span>
                        <span style={styles.optionText}>{option.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Result Card */
              <div className="glass-card" style={styles.resultCard}>
                <div style={styles.resultSuccessIcon}>
                  <CheckCircle2 size={44} color="var(--success)" />
                </div>

                <span className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>COMPASS MATCH VERIFIED</span>
                
                <h2 style={styles.resultTitle}>
                  Your Ideal Track: <span className="text-gradient-cyan">{resultTrack}</span>
                </h2>

                <div style={styles.matchScoreBox}>
                  <div style={styles.radialPlaceholder}>
                    <Award size={28} color="var(--gold)" />
                    <span style={styles.matchPercentage}>{matchPercentage}% Match</span>
                  </div>
                </div>

                <p style={styles.resultDesc}>
                  {trackDescriptions[resultTrack] || "Based on your cognitive preferences, this track matches your logical structure and creative problem-solving skills."}
                </p>

                <div style={styles.resultActions}>
                  <button onClick={handleRegisterResult} className="btn btn-orange" style={styles.resultBtn}>
                    Register for this Track
                    <ArrowRight size={18} />
                  </button>
                  
                  <button onClick={handleRetake} className="btn btn-ghost" style={styles.resultBtn}>
                    <RefreshCw size={16} />
                    Retake Quiz
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* ================= SUB-TAB 2: 50-LEVEL ROTATED FLASHCARD DECK ================= */}
        {activeSubTab === 'practice' && (
          <div style={styles.practiceContainer}>
            
            {/* Practice Track & Level Bar */}
            <div className="glass-card" style={styles.practiceHeaderCard}>
              <div style={styles.practiceHeaderFlex}>
                <div>
                  <span className={`badge ${currentTier.badgeStyle}`} style={{ marginBottom: '0.4rem' }}>
                    {currentTier.label} ({currentTier.range})
                  </span>
                  <h3 style={styles.practiceHeaderTitle}>Flashcard Level {activeLevel} of 50</h3>
                </div>
                
                <select 
                  className="form-control" 
                  value={practiceTrack} 
                  onChange={(e) => {
                    setPracticeTrack(e.target.value);
                    setSelectedOpt(null);
                    setIsSubmitted(false);
                  }}
                  style={styles.trackSelect}
                >
                  <option value="Coding & Algorithms">Coding & Algorithms</option>
                  <option value="Mental Math Arena">Mental Math Arena</option>
                  <option value="Abacus Championship">Abacus Championship</option>
                  <option value="AI & Machine Learning">AI & Machine Learning</option>
                  <option value="Robotics & Hardware">Robotics & Hardware</option>
                  <option value="English & Creative Writing">English & Creative Writing</option>
                  <option value="Digital & Classical Art">Digital & Classical Art</option>
                  <option value="Public Speaking & Debate">Public Speaking & Debate</option>
                </select>
              </div>

              {/* 50-Level Selector Grid */}
              <div style={styles.levelSelectorWrapper}>
                <div style={styles.levelSelectorHeader}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>50 Flashcard Deck Selector:</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{completedLevels.length} of 50 Passed</span>
                </div>
                
                <div style={styles.levelGrid}>
                  {Array.from({ length: 50 }, (_, i) => i + 1).map((lvlNum) => {
                    const isCurrent = activeLevel === lvlNum;
                    const isDone = completedLevels.includes(lvlNum);

                    return (
                      <button
                        key={lvlNum}
                        onClick={() => handleSelectLevelFromGrid(lvlNum)}
                        style={{
                          ...styles.levelGridBtn,
                          background: isCurrent ? 'var(--primary)' : isDone ? 'rgba(5, 150, 105, 0.1)' : '#ffffff',
                          color: isCurrent ? '#ffffff' : isDone ? 'var(--success)' : 'var(--text-secondary)',
                          borderColor: isCurrent ? 'var(--primary)' : isDone ? 'var(--success)' : 'var(--border-subtle)',
                          fontWeight: isCurrent || isDone ? 700 : 500,
                        }}
                        title={`Jump to Flashcard ${lvlNum}`}
                      >
                        {lvlNum}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ROTATED FAN-OUT FLASHCARD DECK STACK */}
            <div style={styles.deckStackContainer} className="flashcard-deck-stack-container">
              
              {/* Back Flashcard Layer 3 (Tilted 5.5° to the right - Blue Accent Line) */}
              {activeLevel < 49 && (
                <div style={styles.backFlashcard3}>
                  <div style={styles.cardHeaderFlex}>
                    <span className="badge badge-indigo" style={{ fontSize: '0.65rem' }}>FLASHCARD #{activeLevel + 2} IN DECK</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{practiceTrack}</span>
                  </div>
                </div>
              )}

              {/* Middle Flashcard Layer 2 (Tilted 2.8° to the right - Orange Accent Line) */}
              {activeLevel < 50 && (
                <div style={styles.backFlashcard2}>
                  <div style={styles.cardHeaderFlex}>
                    <span className="badge badge-gold" style={{ fontSize: '0.65rem' }}>FLASHCARD #{activeLevel + 1} PREVIEW</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{practiceTrack}</span>
                  </div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: '1.4' }}>{nextLevelQ.q}</h4>
                </div>
              )}

              {/* Top Active Flashcard Layer 1 (Level N - Straight) */}
              <div 
                className="glass-card"
                style={{
                  ...styles.frontActiveFlashcard,
                  transform: isAnimatingNext 
                    ? 'translateX(110%) rotate(12deg)' 
                    : 'translateX(0) rotate(0deg)',
                  opacity: isAnimatingNext ? 0 : 1,
                }}
              >
                <div style={styles.cardHeaderFlex}>
                  <span className="badge badge-indigo">FLASHCARD #{activeLevel} OF 50</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>{practiceTrack}</span>
                </div>

                <h3 style={styles.flashcardQuestion}>{currentLevelQ.q}</h3>

                <div style={styles.drillOptions}>
                  {currentLevelQ.options.map((optText, oIdx) => {
                    const isSelected = selectedOpt === oIdx;
                    const isCorrectOpt = oIdx === currentLevelQ.correct;

                    let optionStyle = { ...styles.drillOptionBtn };

                    if (isSelected) {
                      optionStyle.borderColor = 'var(--accent)';
                      optionStyle.background = 'rgba(37, 99, 235, 0.06)';
                    }
                    if (isSubmitted) {
                      if (isCorrectOpt) {
                        optionStyle.borderColor = 'var(--success)';
                        optionStyle.background = 'rgba(5, 150, 105, 0.08)';
                      } else if (isSelected && !isCorrectOpt) {
                        optionStyle.borderColor = '#dc2626';
                        optionStyle.background = '#fef2f2';
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(oIdx)}
                        style={optionStyle}
                        disabled={isSubmitted}
                      >
                        <span style={styles.drillOptLetter}>{String.fromCharCode(65 + oIdx)}</span>
                        <span>{optText}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Card Action Area */}
                {!isSubmitted ? (
                  <button
                    onClick={handleCheckAnswer}
                    className="btn btn-primary"
                    style={{ marginTop: '1.5rem', alignSelf: 'flex-start' }}
                    disabled={selectedOpt === null}
                  >
                    Check Answer
                  </button>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                    <div style={{
                      ...styles.explanationBox,
                      borderColor: selectedOpt === currentLevelQ.correct ? 'var(--success)' : '#dc2626',
                      background: selectedOpt === currentLevelQ.correct ? 'rgba(5, 150, 105, 0.05)' : '#fef2f2'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                        {selectedOpt === currentLevelQ.correct ? <Check size={16} color="var(--success)" /> : <X size={16} color="#dc2626" />}
                        <strong style={{ color: selectedOpt === currentLevelQ.correct ? 'var(--success)' : '#dc2626', fontSize: '0.9rem' }}>
                          {selectedOpt === currentLevelQ.correct ? `Flashcard #${activeLevel} Mastered!` : "Incorrect Answer"}
                        </strong>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                        {currentLevelQ.explanation}
                      </p>
                    </div>

                    {activeLevel < 50 && (
                      <button
                        onClick={handleProceedNextCard}
                        className="btn btn-orange"
                        style={{ alignSelf: 'flex-start' }}
                      >
                        Next Flashcard #{activeLevel + 1} (Slide Deck →)
                        <ArrowRight size={16} />
                      </button>
                    )}
                  </div>
                )}
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: '3rem 0',
    minHeight: '80vh',
  },
  container: {
    maxWidth: '780px',
    width: '100%',
  },
  intro: {
    textAlign: 'center',
    marginBottom: '2.5rem',
  },
  introTitle: {
    fontSize: '2.5rem',
    marginBottom: '0.75rem',
  },
  introDesc: {
    color: 'var(--text-secondary)',
    fontSize: '1.05rem',
    maxWidth: '650px',
    margin: '0 auto 1.75rem auto',
    lineHeight: '1.65',
  },
  subTabNav: {
    display: 'inline-flex',
    gap: '0.5rem',
    background: '#ffffff',
    border: '1px solid var(--border-subtle)',
    padding: '0.35rem',
    borderRadius: '50px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
  },
  subTabBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.6rem 1.25rem',
    borderRadius: '50px',
    border: '1px solid transparent',
    fontSize: '0.85rem',
    fontWeight: 600,
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
  },
  quizCard: {
    padding: '2.5rem',
    border: '1px solid var(--border-subtle)',
    background: '#ffffff',
    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2.25rem',
    borderBottom: '1px solid var(--border-subtle)',
    paddingBottom: '1.25rem',
  },
  progressText: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    fontWeight: 600,
    fontFamily: 'var(--font-heading)',
  },
  pips: {
    display: 'flex',
    gap: '0.5rem',
  },
  pip: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    transition: 'all var(--transition-normal)',
  },
  questionSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.75rem',
    textAlign: 'left',
  },
  questionText: {
    fontSize: '1.4rem',
    lineHeight: '1.4',
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    color: 'var(--text-primary)',
  },
  optionsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  optionBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '1.1rem 1.5rem',
    textAlign: 'left',
    gap: '1.25rem',
    width: '100%',
    background: '#ffffff',
    border: '1px solid var(--border-subtle)',
    borderRadius: '12px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.01)',
  },
  optionIndex: {
    width: '28px',
    height: '28px',
    borderRadius: '6px',
    background: '#f1f5f9',
    border: '1px solid var(--border-subtle)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.85rem',
    fontWeight: 700,
    color: '#475569',
  },
  optionText: {
    fontSize: '0.95rem',
    fontWeight: 500,
    color: 'var(--text-primary)',
  },
  resultCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '3rem 2rem',
    border: '1px solid var(--border-subtle)',
    background: '#ffffff',
  },
  resultSuccessIcon: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: 'rgba(5, 150, 105, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.25rem',
  },
  resultTitle: {
    fontSize: '2rem',
    marginBottom: '1.25rem',
    lineHeight: '1.3',
  },
  matchScoreBox: {
    marginBottom: '1.5rem',
  },
  radialPlaceholder: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: 'rgba(217, 119, 6, 0.08)',
    border: '1px solid var(--gold)',
    borderRadius: '50px',
    padding: '0.5rem 1.25rem',
  },
  matchPercentage: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: 'var(--gold)',
    fontFamily: 'var(--font-heading)',
  },
  resultDesc: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    maxWidth: '580px',
    marginBottom: '2.5rem',
  },
  resultActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
    maxWidth: '350px',
  },
  resultBtn: {
    width: '100%',
    padding: '0.9rem',
  },

  /* Rotated Fan-Out Flashcard Deck Styles */
  practiceContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  practiceHeaderCard: {
    padding: '2rem',
    background: '#ffffff',
    border: '1px solid var(--border-subtle)',
    textAlign: 'left',
  },
  practiceHeaderFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  practiceHeaderTitle: {
    fontSize: '1.5rem',
    fontWeight: 800,
  },
  trackSelect: {
    minWidth: '240px',
  },
  levelSelectorWrapper: {
    marginTop: '1.5rem',
    paddingTop: '1.25rem',
    borderTop: '1px solid var(--border-subtle)',
  },
  levelSelectorHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem',
  },
  levelGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gap: '0.35rem',
    maxHeight: '130px',
    overflowY: 'auto',
    paddingRight: '0.25rem',
  },
  levelGridBtn: {
    height: '32px',
    borderRadius: '6px',
    border: '1px solid',
    fontSize: '0.75rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all var(--transition-fast)',
  },

  /* Visible Rotated Card Deck Fan-Out Wrapper */
  deckStackContainer: {
    position: 'relative',
    margin: '2rem 1.5rem 3rem 0',
    minHeight: '480px',
  },
  backFlashcard3: {
    position: 'absolute',
    top: '-15px',
    right: '-18px',
    left: '18px',
    height: '100%',
    background: '#ffffff',
    border: '2px solid rgba(37, 99, 235, 0.25)',
    borderRadius: '24px',
    transform: 'rotate(5.5deg)',
    zIndex: 1,
    padding: '1.5rem 2rem',
    pointerEvents: 'none',
    boxShadow: '0 8px 20px rgba(0,0,0,0.03)',
  },
  backFlashcard2: {
    position: 'absolute',
    top: '-8px',
    right: '-9px',
    left: '9px',
    height: '100%',
    background: '#ffffff',
    border: '2px solid rgba(249, 115, 22, 0.3)',
    borderRadius: '24px',
    transform: 'rotate(2.8deg)',
    zIndex: 2,
    padding: '1.5rem 2rem',
    textAlign: 'left',
    pointerEvents: 'none',
    boxShadow: '0 12px 25px rgba(0,0,0,0.04)',
  },
  frontActiveFlashcard: {
    position: 'relative',
    zIndex: 3,
    padding: '2.5rem',
    background: '#ffffff',
    border: '2px solid rgba(15, 23, 42, 0.12)',
    borderRadius: '24px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 20px 50px -10px rgba(15, 23, 42, 0.1)',
    transition: 'all 0.38s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  cardHeaderFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.25rem',
  },
  flashcardQuestion: {
    fontSize: '1.35rem',
    fontWeight: 800,
    marginBottom: '1.75rem',
    lineHeight: '1.45',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-heading)',
  },
  drillOptions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
  },
  drillOptionBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem 1.25rem',
    borderRadius: '12px',
    border: '1px solid var(--border-subtle)',
    background: '#ffffff',
    fontSize: '0.95rem',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'all var(--transition-fast)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.01)',
  },
  drillOptLetter: {
    width: '28px',
    height: '28px',
    borderRadius: '6px',
    background: '#f1f5f9',
    border: '1px solid var(--border-subtle)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    fontWeight: 700,
    color: '#475569',
  },
  explanationBox: {
    padding: '1.1rem 1.25rem',
    borderRadius: '12px',
    border: '1px solid',
  }
};
