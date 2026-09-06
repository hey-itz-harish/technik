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
import MfaSetup from './pages/MfaSetup';
import Login from './pages/Login';

import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';

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

  const handleRegisterSuccess = (newReg) => {
    const updated = [newReg, ...registrations];
    setRegistrations(updated);
    localStorage.setItem('technik_registrations', JSON.stringify(updated));
  };

  return (
    <Router>
      <div className="app-container">
        <TopNav />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/catalog" element={<Catalog onSelectTrack={setSelectedTrack} />} />
            <Route path="/skill-compass" element={<ComingSoon />} />
            <Route 
              path="/register" 
              element={
                <Register 
                  selectedTrack={selectedTrack} 
                  onRegisterSuccess={handleRegisterSuccess} 
                  clearSelectedTrack={() => setSelectedTrack(null)} 
                />
              } 
            />
            <Route path="/dashboard" element={<Dashboard registrations={registrations} />} />
            <Route path="/mfa-setup" element={<MfaSetup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/school-login" element={<Login />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/verification" element={<Verification registrations={registrations} />} />
            <Route path="/results" element={<Verification registrations={registrations} />} />
            <Route path="/media" element={<ComingSoon />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ComingSoon />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
