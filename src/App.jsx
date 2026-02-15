import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventsDashboard from './components/EventsDashboard';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import SuccessModal from './components/SuccessModal';
import PWAPrompt from './components/PWAPrompt';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [registrationData, setRegistrationData] = useState(null);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev);
  }, [setDarkMode]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const navigateTo = useCallback((page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openRegistration = useCallback((event) => {
    setSelectedEvent(event);
    setShowRegistration(true);
  }, []);

  const closeRegistration = useCallback(() => {
    setShowRegistration(false);
    setSelectedEvent(null);
  }, []);

  const handleRegistrationSuccess = useCallback((data) => {
    setRegistrationData(data);
    setShowRegistration(false);
    setShowSuccess(true);
  }, []);

  const closeSuccess = useCallback(() => {
    setShowSuccess(false);
    setRegistrationData(null);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (showRegistration || showSuccess || isMenuOpen) ? 'hidden' : 'auto';
  }, [showRegistration, showSuccess, isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (showRegistration) closeRegistration();
        if (showSuccess) closeSuccess();
        if (isMenuOpen) setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showRegistration, showSuccess, isMenuOpen, closeRegistration, closeSuccess]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={navigateTo} />
            <EventsDashboard onRegister={openRegistration} />
          </>
        );
      case 'events':
        return <EventsDashboard onRegister={openRegistration} fullPage />;
      case 'about':
        return <About />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      case 'blog':
        return <Blog />;
      default:
        return (
          <>
            <Hero onNavigate={navigateTo} />
            <EventsDashboard onRegister={openRegistration} />
          </>
        );
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white font-poppins transition-colors duration-300">
        <Header
          currentPage={currentPage}
          onNavigate={navigateTo}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        
        <main>
          {renderPage()}
        </main>
        
        <Footer onNavigate={navigateTo} />

        {showRegistration && selectedEvent && (
          <RegistrationModal
            event={selectedEvent}
            onClose={closeRegistration}
            onSuccess={handleRegistrationSuccess}
          />
        )}

        {showSuccess && (
          <SuccessModal
            data={registrationData}
            onClose={closeSuccess}
          />
        )}

        <PWAPrompt />
      </div>
    </div>
  );
}

export default App;