import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
import ForSchools from './pages/ForSchools';
import MfaSetup from './pages/MfaSetup';
import ActivationPending from './pages/ActivationPending';
import CodeVerification from './pages/CodeVerification';
import Login from './pages/Login';
import TechnikPortal from './pages/TechnikPortal';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';

function AppContent({ registrations, selectedTrack, setSelectedTrack, handleRegisterSuccess }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Force every fresh tab to land on Home, regardless of the URL it was
  // opened with (typed address, bookmark, shared link). sessionStorage is
  // scoped to this one tab and is wiped when the tab closes, so a brand-new
  // tab always sees no flag here — even though the exact same site is still
  // "open" in other tabs, or was open a minute ago in a tab that's since
  // been closed. Once this runs, subsequent in-app navigation (Link clicks,
  // navigate() calls) is untouched, since the flag is already set by then.
  useEffect(() => {
    const hasSessionStarted = sessionStorage.getItem('technik_tab_session_started');
    if (!hasSessionStarted) {
      sessionStorage.setItem('technik_tab_session_started', 'true');
      if (location.pathname !== '/') {
        navigate('/', { replace: true });
      }
    }
    // Deliberately empty deps — this must run exactly once, on this tab's
    // very first render, not on every route change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Route path="/for-schools" element={<ForSchools />} />
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
          <Route path="/activation-pending" element={<ActivationPending />} />
          <Route path="/mfa-setup" element={<MfaSetup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/school-login" element={<Login />} />
          <Route path="/verify-code" element={<CodeVerification />} />
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
