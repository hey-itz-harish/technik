import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  School, 
  Users, 
  Trophy, 
  MapPin, 
  Search, 
  PlusCircle, 
  CheckCircle2, 
  Building, 
  BookOpen, 
  Award, 
  Bot, 
  Code, 
  Cpu, 
  Calculator, 
  Palette, 
  BookMarked,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Phone,
  Mail,
  UserCheck,
  X
} from 'lucide-react';

export default function Schools() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  const [activeModalSchool, setActiveModalSchool] = useState(null);
  
  // Registration Form State
  const [regForm, setRegForm] = useState({
    schoolName: '',
    principalName: '',
    coordinatorEmail: '',
    phone: '',
    city: '',
    state: 'Tamil Nadu',
    estimatedStudents: '100-250',
  });
  const [regSuccessMessage, setRegSuccessMessage] = useState('');

  // Initial Sample Schools Data
  const [schoolsList, setSchoolsList] = useState([
    {
      id: 'SCH-101',
      name: 'Delhi Public School',
      city: 'Chennai',
      state: 'Tamil Nadu',
      totalStudents: 420,
      verified: true,
      topTracks: ['Robotics', 'Coding & AI', 'Mental Maths'],
      students: [
        { name: 'Aarav Sharma', grade: 'Grade 6', track: 'Coding & Algorithms', stage: 'Stage 2 (District)' },
        { name: 'Kavya Raman', grade: 'Grade 8', track: 'Robotics Olympiad', stage: 'Stage 3 (State)' },
        { name: 'Rohan Gupta', grade: 'Grade 5', track: 'Mental Maths', stage: 'Stage 1 (School)' },
        { name: 'Diya Patel', grade: 'Grade 7', track: 'Generative AI', stage: 'Stage 2 (District)' }
      ]
    },
    {
      id: 'SCH-102',
      name: 'St. Joseph Higher Secondary School',
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      totalStudents: 385,
      verified: true,
      topTracks: ['Mental Maths', 'English', 'Robotics'],
      students: [
        { name: 'Vihaan K.', grade: 'Grade 6', track: 'Mental Maths', stage: 'Stage 3 (State)' },
        { name: 'Sanjana Nair', grade: 'Grade 7', track: 'English Olympiad', stage: 'Stage 2 (District)' },
        { name: 'Pranav Kumar', grade: 'Grade 4', track: 'Technik Art', stage: 'Stage 1 (School)' }
      ]
    },
    {
      id: 'SCH-103',
      name: 'Bharatiya Vidya Bhavan',
      city: 'Madurai',
      state: 'Tamil Nadu',
      totalStudents: 310,
      verified: true,
      topTracks: ['Coding', 'Technik Art', 'Generative AI'],
      students: [
        { name: 'Ananya R.', grade: 'Grade 7', track: 'Generative AI', stage: 'Stage 3 (State)' },
        { name: 'Karthik S.', grade: 'Grade 8', track: 'Coding & Algorithms', stage: 'Stage 2 (District)' }
      ]
    },
    {
      id: 'SCH-104',
      name: 'National Public School',
      city: 'Bengaluru',
      state: 'Karnataka',
      totalStudents: 540,
      verified: true,
      topTracks: ['Robotics', 'Generative AI', 'Coding'],
      students: [
        { name: 'Meera Reddy', grade: 'Grade 8', track: 'Generative AI', stage: 'Stage 3 (State)' },
        { name: 'Aditya V.', grade: 'Grade 6', track: 'Robotics Olympiad', stage: 'Stage 2 (District)' }
      ]
    },
    {
      id: 'SCH-105',
      name: 'Puducherry Central Vidyalaya',
      city: 'Puducherry',
      state: 'Puducherry',
      totalStudents: 275,
      verified: true,
      topTracks: ['English', 'Mental Maths', 'Technik Art'],
      students: [
        { name: 'Bala Chandran', grade: 'Grade 5', track: 'English Olympiad', stage: 'Stage 2 (District)' }
      ]
    },
    {
      id: 'SCH-106',
      name: 'DAV International School',
      city: 'Trichy',
      state: 'Tamil Nadu',
      totalStudents: 290,
      verified: true,
      topTracks: ['Mental Maths', 'Coding', 'Robotics'],
      students: [
        { name: 'Siddharth M.', grade: 'Grade 7', track: 'Mental Maths', stage: 'Stage 1 (School)' }
      ]
    }
  ]);

  const handleRegisterSchool = (e) => {
    e.preventDefault();
    if (!regForm.schoolName || !regForm.coordinatorEmail) return;

    const newSchool = {
      id: `SCH-${Math.floor(100 + Math.random() * 900)}`,
      name: regForm.schoolName,
      city: regForm.city || 'Chennai',
      state: regForm.state || 'Tamil Nadu',
      totalStudents: parseInt(regForm.estimatedStudents.split('-')[0]) || 120,
      verified: true,
      topTracks: ['Robotics', 'Coding', 'Mental Maths'],
      students: [
        { name: 'Sample Student 1', grade: 'Grade 6', track: 'Robotics Olympiad', stage: 'Stage 1 (School)' },
        { name: 'Sample Student 2', grade: 'Grade 7', track: 'Coding & Algorithms', stage: 'Stage 1 (School)' }
      ]
    };

    setSchoolsList([newSchool, ...schoolsList]);
    setRegSuccessMessage(`🎉 ${regForm.schoolName} successfully registered! Coordinator details sent to ${regForm.coordinatorEmail}.`);
    setRegForm({
      schoolName: '',
      principalName: '',
      coordinatorEmail: '',
      phone: '',
      city: '',
      state: 'Tamil Nadu',
      estimatedStudents: '100-250',
    });
  };

  const filteredSchools = schoolsList.filter((sch) => {
    const matchesSearch = sch.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          sch.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === 'All' || sch.city === selectedCity;
    return matchesSearch && matchesCity;
  });

  const totalStudentsCount = schoolsList.reduce((acc, curr) => acc + curr.totalStudents, 0);

  return (
    <div style={styles.page}>
      
      {/* HERO SECTION */}
      <section style={styles.heroSection}>
        <div className="container" style={styles.heroContainer}>
          <div style={styles.heroContent}>
            <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>INSTITUTIONAL PARTNERSHIP</span>
            <h1 style={styles.heroTitle}>FOR SCHOOLS & EDUCATORS</h1>
            <p style={styles.heroSubtitle}>
              Empower your students with structured Olympiads, bulk registrations, custom school leaderboards, 
              and state-level institutional recognition.
            </p>

            <div style={styles.quickActionBtns}>
              <a href="#register-school" className="btn-gold-action">
                <PlusCircle size={16} style={{ marginRight: '0.4rem' }} />
                REGISTER YOUR SCHOOL
              </a>
              <a href="#schools-directory" className="btn-blue-action">
                <Search size={16} style={{ marginRight: '0.4rem' }} />
                EXPLORE PARTNER DIRECTORY
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS OVERVIEW BAR */}
      <section style={styles.statsBarSection}>
        <div className="container">
          <div style={styles.statsGrid}>
            <div style={styles.statBox}>
              <School size={28} color="#2563eb" />
              <div>
                <h3 style={styles.statNum}>{schoolsList.length}+</h3>
                <p style={styles.statLbl}>Partner Schools</p>
              </div>
            </div>
            <div style={styles.statBox}>
              <Users size={28} color="#059669" />
              <div>
                <h3 style={styles.statNum}>{totalStudentsCount.toLocaleString()}+</h3>
                <p style={styles.statLbl}>Participating Students</p>
              </div>
            </div>
            <div style={styles.statBox}>
              <MapPin size={28} color="#d97706" />
              <div>
                <h3 style={styles.statNum}>5 States + Puducherry</h3>
                <p style={styles.statLbl}>Focus Region</p>
              </div>
            </div>
            <div style={styles.statBox}>
              <Trophy size={28} color="#f97316" />
              <div>
                <h3 style={styles.statNum}>₹15 Lakhs+</h3>
                <p style={styles.statLbl}>Awards & Recognitions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORY SECTION */}
      <section id="schools-directory" style={styles.sectionPadding}>
        <div className="container">
          
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>PARTICIPATING SCHOOLS DIRECTORY</h2>
            <div style={styles.goldLine}></div>
            <p style={styles.sectionSubtitle}>
              Search for your school to view student participation numbers, registered competitions, and performance achievements.
            </p>
          </div>

          {/* Search Bar & Filter */}
          <div style={styles.searchBarRow}>
            <div style={styles.searchBox}>
              <Search size={18} color="#64748b" style={{ marginRight: '0.5rem' }} />
              <input 
                type="text" 
                placeholder="Search by school name or city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchInput}
              />
            </div>

            <div style={styles.filterGroup}>
              <label style={styles.filterLabel}>Filter City:</label>
              <select 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
                style={styles.selectFilter}
              >
                <option value="All">All Cities</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Madurai">Madurai</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Trichy">Trichy</option>
              </select>
            </div>
          </div>

          {/* Directory Cards Grid */}
          <div style={styles.directoryGrid} className="schools-directory-grid">
            {filteredSchools.map((sch) => (
              <div key={sch.id} style={styles.schoolCard}>
                <div style={styles.schoolCardHeader}>
                  <div style={styles.schoolIconCircle}>
                    <Building size={20} color="#2563eb" />
                  </div>
                  <div>
                    <h3 style={styles.schoolName}>{sch.name}</h3>
                    <p style={styles.schoolLocation}>
                      <MapPin size={12} color="#64748b" style={{ marginRight: '3px' }} />
                      {sch.city}, {sch.state}
                    </p>
                  </div>
                </div>

                <div style={styles.schoolDivider}></div>

                <div style={styles.schoolMetaRow}>
                  <div>
                    <span style={styles.metaLabel}>Students Enrolled</span>
                    <h4 style={styles.metaVal}>{sch.totalStudents} Students</h4>
                  </div>
                  <span style={styles.verifiedBadge}>
                    <CheckCircle2 size={13} color="#059669" style={{ marginRight: '3px' }} /> Verified
                  </span>
                </div>

                <div style={styles.tracksRow}>
                  <span style={styles.trackTagLabel}>Top Tracks:</span>
                  {sch.topTracks.map((tr, i) => (
                    <span key={i} style={styles.trackPill}>{tr}</span>
                  ))}
                </div>

                <button 
                  onClick={() => setActiveModalSchool(sch)}
                  style={styles.viewStudentsBtn}
                >
                  SEE PARTICIPATING STUDENTS ({sch.students.length})
                  <ChevronRight size={14} style={{ marginLeft: '4px' }} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* NEW SCHOOL REGISTRATION FORM */}
      <section id="register-school" style={{ ...styles.sectionPadding, background: '#f8fafc' }}>
        <div className="container">
          <div style={styles.regFormCard}>
            <div style={styles.regFormHeader}>
              <h2 style={styles.regTitle}>REGISTER YOUR SCHOOL WITH TECHNIK</h2>
              <p style={styles.regSubtitle}>
                Enroll your school to receive bulk registration discounts, school coordinator login, 
                and official Technik Pride Award hosting privileges.
              </p>
            </div>

            {regSuccessMessage && (
              <div style={styles.successBanner}>
                {regSuccessMessage}
              </div>
            )}

            <form onSubmit={handleRegisterSchool} style={styles.formGrid}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>School Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. St. Xavier International School"
                  value={regForm.schoolName}
                  onChange={(e) => setRegForm({ ...regForm, schoolName: e.target.value })}
                  style={styles.formInput}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Principal / Director Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Dr. R. Sundaram"
                  value={regForm.principalName}
                  onChange={(e) => setRegForm({ ...regForm, principalName: e.target.value })}
                  style={styles.formInput}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Coordinator Email Address *</label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. olympiad@school.edu.in"
                  value={regForm.coordinatorEmail}
                  onChange={(e) => setRegForm({ ...regForm, coordinatorEmail: e.target.value })}
                  style={styles.formInput}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Contact Phone Number *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. +91 98765 12345"
                  value={regForm.phone}
                  onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                  style={styles.formInput}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel}>City *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Chennai"
                  value={regForm.city}
                  onChange={(e) => setRegForm({ ...regForm, city: e.target.value })}
                  style={styles.formInput}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel}>State / Region *</label>
                <select 
                  value={regForm.state}
                  onChange={(e) => setRegForm({ ...regForm, state: e.target.value })}
                  style={styles.formInput}
                >
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Telangana">Telangana</option>
                </select>
              </div>

              <div style={{ ...styles.formGroup, gridColumn: 'span 2' }}>
                <label style={styles.formLabel}>Estimated Student Participants</label>
                <select 
                  value={regForm.estimatedStudents}
                  onChange={(e) => setRegForm({ ...regForm, estimatedStudents: e.target.value })}
                  style={styles.formInput}
                >
                  <option value="50-100">50 - 100 Students</option>
                  <option value="100-250">100 - 250 Students</option>
                  <option value="250-500">250 - 500 Students</option>
                  <option value="500+">500+ Students (Institutional Partner)</option>
                </select>
              </div>

              <div style={{ gridColumn: 'span 2', textAlign: 'center', marginTop: '1rem' }}>
                <button type="submit" className="btn-submit-gold">
                  SUBMIT SCHOOL REGISTRATION
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* STUDENT BREAKDOWN MODAL */}
      {activeModalSchool && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalBox}>
            <div style={styles.modalHeader}>
              <div>
                <h3 style={styles.modalTitle}>{activeModalSchool.name}</h3>
                <p style={styles.modalSub}>{activeModalSchool.city}, {activeModalSchool.state} · Total: {activeModalSchool.totalStudents} Enrolled</p>
              </div>
              <button onClick={() => setActiveModalSchool(null)} style={styles.closeBtn}>
                <X size={20} />
              </button>
            </div>

            <div style={styles.modalBody}>
              <h4 style={styles.modalListHeading}>Participating Students Roster:</h4>
              <div style={styles.studentTable}>
                {activeModalSchool.students.map((st, i) => (
                  <div key={i} style={styles.studentRow}>
                    <div>
                      <h5 style={styles.stName}>{st.name}</h5>
                      <span style={styles.stGrade}>{st.grade}</span>
                    </div>
                    <span style={styles.stTrackPill}>{st.track}</span>
                    <span style={styles.stStagePill}>{st.stage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.modalFooter}>
              <button onClick={() => setActiveModalSchool(null)} style={styles.modalCloseAction}>
                Close Roster
              </button>
            </div>
          </div>
        </div>
      )}

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
    padding: '4rem 0 4.5rem 0',
  },
  heroContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '780px',
  },
  heroTitle: {
    fontSize: '2.75rem',
    fontWeight: 900,
    color: '#ffffff',
    fontFamily: 'var(--font-heading)',
    lineHeight: '1.15',
    marginBottom: '1rem',
  },
  heroSubtitle: {
    fontSize: '1.05rem',
    color: '#cbd5e1',
    lineHeight: '1.65',
    marginBottom: '2rem',
  },
  quickActionBtns: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  statsBarSection: {
    marginTop: '-2rem',
    position: 'relative',
    zIndex: 10,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1.25rem',
    background: '#ffffff',
    padding: '1.75rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    border: '1px solid #e2e8f0',
  },
  statBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  statNum: {
    fontSize: '1.25rem',
    fontWeight: 900,
    color: '#0f172a',
    lineHeight: '1.2',
  },
  statLbl: {
    fontSize: '0.78rem',
    color: '#64748b',
    fontWeight: 500,
  },
  sectionPadding: {
    padding: '4.5rem 0',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '2.5rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 900,
    color: '#0f172a',
    fontFamily: 'var(--font-heading)',
    marginBottom: '0.35rem',
  },
  goldLine: {
    width: '60px',
    height: '4px',
    background: '#fbbf24',
    margin: '0 auto 0.75rem auto',
    borderRadius: '2px',
  },
  sectionSubtitle: {
    fontSize: '0.96rem',
    color: '#64748b',
    maxWidth: '620px',
    margin: '0 auto',
  },
  searchBarRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1.5rem',
    marginBottom: '2rem',
    background: '#f8fafc',
    padding: '1rem 1.5rem',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    background: '#ffffff',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    padding: '0.6rem 1rem',
    flexGrow: 1,
    maxWidth: '500px',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: '0.9rem',
  },
  filterGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  filterLabel: {
    fontSize: '0.85rem',
    fontWeight: 700,
    color: '#0f172a',
  },
  selectFilter: {
    padding: '0.6rem 1rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    background: '#ffffff',
    fontSize: '0.85rem',
    fontWeight: 600,
    outline: 'none',
  },
  directoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
  },
  schoolCard: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
  },
  schoolCardHeader: {
    display: 'flex',
    gap: '0.85rem',
    alignItems: 'flex-start',
  },
  schoolIconCircle: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    background: 'rgba(37, 99, 235, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  schoolName: {
    fontSize: '1.05rem',
    fontWeight: 800,
    color: '#0f172a',
    lineHeight: '1.3',
  },
  schoolLocation: {
    fontSize: '0.78rem',
    color: '#64748b',
    display: 'flex',
    alignItems: 'center',
    marginTop: '0.2rem',
  },
  schoolDivider: {
    height: '1px',
    background: '#f1f5f9',
    margin: '1rem 0',
  },
  schoolMetaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  metaLabel: {
    fontSize: '0.72rem',
    color: '#94a3b8',
    display: 'block',
  },
  metaVal: {
    fontSize: '0.95rem',
    fontWeight: 800,
    color: '#0f172a',
  },
  verifiedBadge: {
    fontSize: '0.72rem',
    fontWeight: 700,
    background: 'rgba(5, 150, 105, 0.1)',
    color: '#059669',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    display: 'inline-flex',
    alignItems: 'center',
  },
  tracksRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    flexWrap: 'wrap',
    marginBottom: '1.25rem',
    flexGrow: 1,
  },
  trackTagLabel: {
    fontSize: '0.72rem',
    fontWeight: 700,
    color: '#64748b',
  },
  trackPill: {
    fontSize: '0.7rem',
    fontWeight: 600,
    background: '#f1f5f9',
    color: '#334155',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
  },
  viewStudentsBtn: {
    background: '#041026',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '0.75rem',
    padding: '0.65rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: '0.03em',
  },
  regFormCard: {
    maxWidth: '800px',
    margin: '0 auto',
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '20px',
    padding: '3rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  },
  regFormHeader: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  regTitle: {
    fontSize: '1.75rem',
    fontWeight: 900,
    color: '#0f172a',
    marginBottom: '0.5rem',
    fontFamily: 'var(--font-heading)',
  },
  regSubtitle: {
    fontSize: '0.9rem',
    color: '#64748b',
    lineHeight: '1.5',
  },
  successBanner: {
    background: 'rgba(5, 150, 105, 0.1)',
    border: '1px solid #059669',
    color: '#059669',
    padding: '1rem',
    borderRadius: '8px',
    fontWeight: 700,
    fontSize: '0.9rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.25rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  formLabel: {
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#0f172a',
  },
  formInput: {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '0.9rem',
    outline: 'none',
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(3, 12, 30, 0.75)',
    backdropFilter: 'blur(6px)',
    zIndex: 2000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
  },
  modalBox: {
    background: '#ffffff',
    borderRadius: '16px',
    maxWidth: '650px',
    width: '100%',
    padding: '2rem',
    boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: '1rem',
    marginBottom: '1.25rem',
  },
  modalTitle: {
    fontSize: '1.35rem',
    fontWeight: 900,
    color: '#0f172a',
  },
  modalSub: {
    fontSize: '0.82rem',
    color: '#64748b',
  },
  closeBtn: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#64748b',
  },
  modalBody: {
    marginBottom: '1.5rem',
  },
  modalListHeading: {
    fontSize: '0.9rem',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: '1rem',
  },
  studentTable: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    maxHeight: '300px',
    overflowY: 'auto',
  },
  studentRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.85rem 1rem',
    background: '#f8fafc',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
  },
  stName: {
    fontSize: '0.88rem',
    fontWeight: 800,
    color: '#0f172a',
  },
  stGrade: {
    fontSize: '0.75rem',
    color: '#64748b',
  },
  stTrackPill: {
    fontSize: '0.72rem',
    fontWeight: 700,
    background: 'rgba(37, 99, 235, 0.1)',
    color: '#2563eb',
    padding: '0.25rem 0.6rem',
    borderRadius: '6px',
  },
  stStagePill: {
    fontSize: '0.72rem',
    fontWeight: 700,
    background: 'rgba(249, 115, 22, 0.1)',
    color: '#f97316',
    padding: '0.25rem 0.6rem',
    borderRadius: '6px',
  },
  modalFooter: {
    textAlign: 'right',
  },
  modalCloseAction: {
    background: '#0f172a',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '0.8rem',
    padding: '0.6rem 1.25rem',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
  }
};

// Add button CSS styles
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .btn-gold-action {
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    color: #0f172a;
    font-weight: 800;
    font-size: 0.85rem;
    font-family: var(--font-heading);
    padding: 0.8rem 1.6rem;
    border-radius: 8px;
    text-decoration: none;
    box-shadow: 0 4px 14px rgba(245, 158, 11, 0.4);
    display: inline-flex;
    align-items: center;
  }
  .btn-blue-action {
    background: #2563eb;
    color: #ffffff;
    font-weight: 800;
    font-size: 0.85rem;
    font-family: var(--font-heading);
    padding: 0.8rem 1.6rem;
    border-radius: 8px;
    text-decoration: none;
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
    display: inline-flex;
    align-items: center;
  }
  .btn-submit-gold {
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    color: #0f172a;
    font-weight: 900;
    font-size: 0.88rem;
    font-family: var(--font-heading);
    padding: 0.85rem 2.25rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(245, 158, 11, 0.4);
  }
  @media (max-width: 991px) {
    .schools-directory-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  @media (max-width: 600px) {
    .schools-directory-grid {
      grid-template-columns: 1fr !important;
    }
    .formGrid-responsive {
      grid-template-columns: 1fr !important;
    }
  }
`;
document.head.appendChild(styleSheet);
