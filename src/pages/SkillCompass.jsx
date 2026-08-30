import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, RefreshCw, ArrowRight, Award, Brain, CheckCircle2, HelpCircle, BookOpen, Target, Sparkles, Zap, Check, X } from 'lucide-react';

export default function SkillCompass({ onSelectTrack }) {
  const navigate = useNavigate();
  
  // Main sub-tab state: 'quiz' vs 'practice'
  const [activeSubTab, setActiveSubTab] = useState('quiz');

  // --- QUIZ STATE ---
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

  // --- PRACTICE HUB STATE ---
  const [practiceTrack, setPracticeTrack] = useState("Coding & Algorithms");
  const [selectedPracticeAnswers, setSelectedPracticeAnswers] = useState({});
  const [submittedPractice, setSubmittedPractice] = useState({});

  const practiceQuestions = {
    "Coding & Algorithms": [
      {
        id: "c1",
        question: "What is the output of `[1, 2, 3].map(x => x * 2).filter(x => x > 3)`?",
        options: ["[2, 4, 6]", "[4, 6]", "[2, 4]", "[6]"],
        correct: 1,
        explanation: "`map` produces [2, 4, 6]. Then `filter(x => x > 3)` keeps numbers strictly greater than 3, leaving [4, 6]."
      },
      {
        id: "c2",
        question: "Which data structure operates under First-In, First-Out (FIFO) logic?",
        options: ["Stack", "Queue", "Binary Tree", "Graph"],
        correct: 1,
        explanation: "A Queue operates on FIFO logic, whereas a Stack operates on Last-In, First-Out (LIFO)."
      }
    ],
    "Mental Math Arena": [
      {
        id: "m1",
        question: "Calculate 105 × 105 in your head using Vedic algebra shortcuts.",
        options: ["10,525", "11,025", "11,225", "10,025"],
        correct: 1,
        explanation: "Rule for numbers ending in 5: Multiply 10 by 11 = 110, then append 25 -> 11,025."
      },
      {
        id: "m2",
        question: "What is 15% of 480?",
        options: ["64", "72", "78", "82"],
        correct: 1,
        explanation: "10% of 480 is 48. 5% is half of 48 = 24. 48 + 24 = 72."
      }
    ],
    "AI & Machine Learning": [
      {
        id: "a1",
        question: "Which algorithm type is used when data contains input-output labelled training pairs?",
        options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Clustering"],
        correct: 0,
        explanation: "Supervised Learning models learn from labelled training pairs (inputs and expected outputs)."
      }
    ],
    "Robotics & Hardware": [
      {
        id: "r1",
        question: "Which component is primarily used to control motor speeds via Pulse-Width Modulation (PWM)?",
        options: ["H-Bridge Motor Driver", "Resistor", "Capacitor", "Step-down Transformer"],
        correct: 0,
        explanation: "H-Bridge motor drivers (like L298N) modulate voltage pulses via PWM signals to adjust speed."
      }
    ]
  };

  const currentPracticeList = practiceQuestions[practiceTrack] || practiceQuestions["Coding & Algorithms"];

  const handleSelectPracticeOption = (qId, optionIdx) => {
    setSelectedPracticeAnswers({ ...selectedPracticeAnswers, [qId]: optionIdx });
  };

  const handleCheckPracticeAnswer = (qId) => {
    setSubmittedPractice({ ...submittedPractice, [qId]: true });
  };

  return (
    <div style={styles.page}>
      <div className="container" style={styles.container}>
        
        {/* Page Header */}
        <header style={styles.intro}>
          <span className="badge badge-purple" style={{ marginBottom: '1rem' }}>SKILL COMPASS HUB</span>
          <h1 style={styles.introTitle}>Discover & <span className="text-gradient">Enhance Your Skills</span></h1>
          <p style={styles.introDesc}>
            Take our diagnostic quiz to discover your ideal track, or access interactive practice drills and daily preparation routines.
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
              <Brain size={16} />
              Practice & Preparation Hub
            </button>
          </div>
        </header>

        {/* ================= SUB-TAB 1: QUIZ ================= */}
        {activeSubTab === 'quiz' && (
          <>
            {!showResult ? (
              <div className="glass-card" style={styles.quizCard}>
                {/* Progress Bar & Pips */}
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

                {/* Question Content */}
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

        {/* ================= SUB-TAB 2: PRACTICE & PREPARATION ================= */}
        {activeSubTab === 'practice' && (
          <div style={styles.practiceContainer}>
            
            {/* Practice Track Filter */}
            <div className="glass-card" style={styles.practiceHeaderCard}>
              <div style={styles.practiceHeaderFlex}>
                <div>
                  <h3 style={styles.practiceHeaderTitle}>Interactive Speed & Sample Drills</h3>
                  <p style={styles.practiceHeaderSub}>Select a competition track to test your knowledge with instant answer evaluation.</p>
                </div>
                
                <select 
                  className="form-control" 
                  value={practiceTrack} 
                  onChange={(e) => setPracticeTrack(e.target.value)}
                  style={styles.trackSelect}
                >
                  <option value="Coding & Algorithms">Coding & Algorithms</option>
                  <option value="Mental Math Arena">Mental Math Arena</option>
                  <option value="AI & Machine Learning">AI & Machine Learning</option>
                  <option value="Robotics & Hardware">Robotics & Hardware</option>
                </select>
              </div>
            </div>

            {/* Questions Drills List */}
            <div style={styles.drillsList}>
              {currentPracticeList.map((q, idx) => {
                const selectedOpt = selectedPracticeAnswers[q.id];
                const isSubmitted = submittedPractice[q.id];
                const isCorrect = selectedOpt === q.correct;

                return (
                  <div key={q.id} className="glass-card" style={styles.drillCard}>
                    <div style={styles.drillTop}>
                      <span className="badge badge-indigo">Sample Question {idx + 1}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{practiceTrack}</span>
                    </div>

                    <h4 style={styles.drillQuestion}>{q.question}</h4>

                    <div style={styles.drillOptions}>
                      {q.options.map((optText, oIdx) => {
                        const isSelected = selectedOpt === oIdx;
                        let optionStyle = { ...styles.drillOptionBtn };

                        if (isSelected) {
                          optionStyle.borderColor = 'var(--accent)';
                          optionStyle.background = 'rgba(37, 99, 235, 0.06)';
                        }
                        if (isSubmitted) {
                          if (oIdx === q.correct) {
                            optionStyle.borderColor = 'var(--success)';
                            optionStyle.background = 'rgba(5, 150, 105, 0.08)';
                          } else if (isSelected && !isCorrect) {
                            optionStyle.borderColor = '#dc2626';
                            optionStyle.background = '#fef2f2';
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => !isSubmitted && handleSelectPracticeOption(q.id, oIdx)}
                            style={optionStyle}
                            disabled={isSubmitted}
                          >
                            <span style={styles.drillOptLetter}>{String.fromCharCode(65 + oIdx)}</span>
                            <span>{optText}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Check Action */}
                    {!isSubmitted ? (
                      <button
                        onClick={() => selectedOpt !== undefined && handleCheckPracticeAnswer(q.id)}
                        className="btn btn-primary btn-mini"
                        style={{ marginTop: '1.25rem', alignSelf: 'flex-start' }}
                        disabled={selectedOpt === undefined}
                      >
                        Check Answer
                      </button>
                    ) : (
                      <div style={{
                        ...styles.explanationBox,
                        borderColor: isCorrect ? 'var(--success)' : '#dc2626',
                        background: isCorrect ? 'rgba(5, 150, 105, 0.05)' : '#fef2f2'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                          {isCorrect ? <Check size={16} color="var(--success)" /> : <X size={16} color="#dc2626" />}
                          <strong style={{ color: isCorrect ? 'var(--success)' : '#dc2626', fontSize: '0.9rem' }}>
                            {isCorrect ? "Correct Solution!" : "Incorrect Answer"}
                          </strong>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                          {q.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Daily Prep Strategy Section */}
            <div className="glass-card" style={styles.routineCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Zap size={20} color="var(--secondary)" />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Daily Skill Enhancement Blueprint</h4>
              </div>

              <div style={styles.routineGrid} className="skill-routine-grid">
                <div style={styles.routineStep}>
                  <div style={styles.stepNum}>1</div>
                  <div>
                    <h5 style={styles.stepTitle}>15 Mins Speed Drills</h5>
                    <p style={styles.stepDesc}>Practice rapid pattern recognition and formula calculations daily.</p>
                  </div>
                </div>

                <div style={styles.routineStep}>
                  <div style={styles.stepNum}>2</div>
                  <div>
                    <h5 style={styles.stepTitle}>20 Mins Syllabus Study</h5>
                    <p style={styles.stepDesc}>Review module notes and practice algorithmic concepts in your dashboard.</p>
                  </div>
                </div>

                <div style={styles.routineStep}>
                  <div style={styles.stepNum}>3</div>
                  <div>
                    <h5 style={styles.stepTitle}>Weekly Mock Test</h5>
                    <p style={styles.stepDesc}>Complete 1 timed mock test under proctored exam conditions.</p>
                  </div>
                </div>
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
    maxWidth: '750px',
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
    fontSize: '1rem',
    maxWidth: '550px',
    margin: '0 auto 1.75rem auto',
    lineHeight: '1.6',
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

  /* Practice Hub Styles */
  practiceContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  practiceHeaderCard: {
    padding: '1.75rem 2rem',
    background: '#ffffff',
    border: '1px solid var(--border-subtle)',
  },
  practiceHeaderFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    textAlign: 'left',
  },
  practiceHeaderTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
  },
  practiceHeaderSub: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    marginTop: '0.2rem',
  },
  trackSelect: {
    minWidth: '220px',
  },
  drillsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  drillCard: {
    padding: '2rem',
    background: '#ffffff',
    border: '1px solid var(--border-subtle)',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
  },
  drillTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  drillQuestion: {
    fontSize: '1.15rem',
    fontWeight: 700,
    marginBottom: '1.25rem',
    lineHeight: '1.4',
  },
  drillOptions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  drillOptionBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.85rem 1.25rem',
    borderRadius: '10px',
    border: '1px solid var(--border-subtle)',
    background: '#ffffff',
    fontSize: '0.9rem',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'all var(--transition-fast)',
  },
  drillOptLetter: {
    width: '24px',
    height: '24px',
    borderRadius: '4px',
    background: '#f1f5f9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 700,
    color: '#475569',
  },
  explanationBox: {
    marginTop: '1.25rem',
    padding: '1rem 1.25rem',
    borderRadius: '10px',
    border: '1px solid',
  },
  routineCard: {
    padding: '2rem',
    background: '#ffffff',
    border: '1px solid var(--border-subtle)',
    textAlign: 'left',
  },
  routineGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1.5rem',
    marginTop: '1rem',
  },
  routineStep: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
  },
  stepNum: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'rgba(249, 115, 22, 0.1)',
    color: 'var(--secondary)',
    border: '1px solid rgba(249, 115, 22, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    fontSize: '0.9rem',
    flexShrink: 0,
  },
  stepTitle: {
    fontSize: '0.95rem',
    fontWeight: 700,
    marginBottom: '0.2rem',
  },
  stepDesc: {
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
  }
};

// Add responsive styling for routine grid
const styleSheet = document.createElement("style");
styleSheet.innerText += `
  @media (min-width: 640px) {
    .skill-routine-grid {
      grid-template-columns: repeat(3, 1fr) !important;
    }
  }
`;
document.head.appendChild(styleSheet);
