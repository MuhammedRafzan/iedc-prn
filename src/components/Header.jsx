import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'events', label: 'Events' },
  { id: 'about', label: 'About' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

function Header({ currentPage, onNavigate, isMenuOpen, toggleMenu, darkMode, toggleDarkMode }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kerala-500 to-kerala-700 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">IE</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-orange rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl tracking-tight">
                <span className="text-kerala-500">IEDC</span>{' '}
                <span className="text-gray-900 dark:text-white">PRN</span>
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Innovation Hub</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  currentPage === item.id
                    ? 'text-kerala-500'
                    : 'text-gray-600 dark:text-gray-300 hover:text-kerala-500 dark:hover:text-kerala-400'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-kerala-500 rounded-full"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            
            {/* CTA Button */}
            <button
              onClick={() => onNavigate('events')}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-kerala-500 hover:bg-kerala-600 text-white rounded-full font-medium text-sm transition-all duration-300 btn-shine glow-green-hover"
            >
              <span>Register Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-900 dark:bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-900 dark:bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-white dark:bg-gray-950 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col p-6 space-y-4">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-left text-2xl font-bold py-3 border-b border-gray-100 dark:border-gray-800 transition-all duration-300 ${
                currentPage === item.id
                  ? 'text-kerala-500'
                  : 'text-gray-900 dark:text-white hover:text-kerala-500'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => onNavigate('events')}
            className="mt-6 w-full py-4 bg-kerala-500 hover:bg-kerala-600 text-white rounded-xl font-bold text-lg transition-colors"
          >
            Register for Events
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;