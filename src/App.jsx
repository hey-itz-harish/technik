import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import SkillCompass from './pages/SkillCompass';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Awards from './pages/Awards';
import Verification from './pages/Verification';
import About from './pages/About';
import Schools from './pages/Schools';

function App() {
  // State for storing registrations
  const [registrations, setRegistrations] = useState([]);
  
  // State for pre-selecting a track during flow transitions
  const [selectedTrack, setSelectedTrack] = useState(null);

  // Load registrations from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('technik_registrations');
    if (saved) {
      try {
        setRegistrations(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse registrations:", e);
      }
    }
  }, []);

  // Save registration utility
  const handleRegisterSuccess = (newReg) => {
    const updated = [newReg, ...registrations];
    setRegistrations(updated);
    localStorage.setItem('technik_registrations', JSON.stringify(updated));
  };

  // Update registration progress stage (1 to 4)
  const handleUpdateStage = (regId, stageNum) => {
    const updated = registrations.map(reg => {
      if (reg.id === regId) {
        return { ...reg, stage: stageNum };
      }
      return reg;
    });
    setRegistrations(updated);
    localStorage.setItem('technik_registrations', JSON.stringify(updated));
  };

  // Preselect a track when clicking cards in Catalog/Compass
  const handleSelectTrack = (trackName) => {
    setSelectedTrack(trackName);
  };

  // Reset selected track state after form pre-population
  const clearSelectedTrack = () => {
    setSelectedTrack(null);
  };

  // Load demo registration data for testing dashboard directly
  const handleLoadDemoData = () => {
    const demoData = [
      {
        id: 'REG-528491',
        studentName: 'Aarav Sharma',
        grade: 'Grade 6',
        school: 'Delhi Public School',
        city: 'New Delhi',
        track: 'Coding & Algorithms',
        regType: 'One-time (All Levels)',
        fee: 599,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        stage: 2 // Stage 2 is district level (School Qualifier Certificate unlocked!)
      },
      {
        id: 'REG-892404',
        studentName: 'Aarav Sharma',
        grade: 'Grade 6',
        school: 'Delhi Public School',
        city: 'New Delhi',
        track: 'AI & Machine Learning',
        regType: 'Per Level',
        fee: 299,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        stage: 1 // School level
      }
    ];
    setRegistrations(demoData);
    localStorage.setItem('technik_registrations', JSON.stringify(demoData));
  };

  return (
    <Router>
      <div className="app-container">
        <TopNav />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog onSelectTrack={handleSelectTrack} />} />
            <Route path="/skill-compass" element={<SkillCompass onSelectTrack={handleSelectTrack} />} />
            <Route path="/register" element={
              <Register 
                selectedTrack={selectedTrack} 
                onRegisterSuccess={handleRegisterSuccess} 
                clearSelectedTrack={clearSelectedTrack}
              />
            } />
            <Route path="/awards" element={<Awards registrations={registrations} />} />
            <Route path="/about" element={<About />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/verify" element={<Verification registrations={registrations} />} />
            <Route path="/dashboard" element={
              <Dashboard 
                registrations={registrations} 
                onUpdateStage={handleUpdateStage}
                onLoadDemoData={handleLoadDemoData}
              />
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
