import React from 'react';
import ParticleBackground from './ParticleBackground';
import Countdown from './Countdown';
import { upcomingEvent } from '../data/events';

function Hero({ onNavigate }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-kerala-500/10 via-transparent to-accent-blue/10 dark:from-kerala-500/5 dark:to-accent-blue/5"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-950"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kerala-500/10 dark:bg-kerala-500/20 border border-kerala-500/30 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-kerala-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-kerala-600 dark:text-kerala-400">
            KTU's Premier Innovation Cell
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-slide-up">
          <span className="text-gray-900 dark:text-white">IEDC PRN –</span>
          <br />
          <span className="gradient-text">Ignite Innovation</span>
          <br />
          <span className="text-gray-900 dark:text-white">in Kollam</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Hackathons, Workshops, Expos for{' '}
          <span className="text-kerala-500 font-semibold">KTU Engineers</span>
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-kerala-500">1000+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Innovators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-accent-blue">50+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Events</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-accent-orange">₹25L+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Prizes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-accent-pink">15+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Startups</div>
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Next Event: <span className="font-semibold text-kerala-500">{upcomingEvent.title}</span>
          </p>
          <Countdown targetDate={upcomingEvent.date} />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => onNavigate('events')}
            className="group px-8 py-4 bg-kerala-500 hover:bg-kerala-600 text-white rounded-xl font-bold text-lg transition-all duration-300 btn-shine glow-green-hover flex items-center justify-center gap-3"
          >
            <span>Upcoming Events</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="px-8 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Watch Story</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;