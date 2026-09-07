import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import CreativeLoader from './components/CreativeLoader';
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
import TechnikPortal from './pages/TechnikPortal';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';

function AppContent({ registrations, selectedTrack, setSelectedTrack, handleRegisterSuccess }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 650);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="app-container">
      {isLoading && <CreativeLoader />}
      <TopNav />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/admin" element={<TechnikPortal />} />
          <Route path="/technik-portal" element={<TechnikPortal />} />
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
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [registrations, setRegistrations] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

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
      <AppContent 
        registrations={registrations}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
        handleRegisterSuccess={handleRegisterSuccess}
      />
    </Router>
  );
}

export default App;
