import React from 'react';
import ShareButtons from './ShareButtons';
import { formatDate, formatCurrency, getSpotsRemaining, getRegistrationPercentage } from '../utils/helpers';

function EventCard({ event, onRegister, index }) {
  const spotsRemaining = getSpotsRemaining(event.spots, event.registered);
  const registrationPercentage = getRegistrationPercentage(event.spots, event.registered);
  const isAlmostFull = spotsRemaining < event.spots * 0.2;

  return (
    <div 
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100 dark:border-gray-700"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover img-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-kerala-500 text-white text-xs font-bold rounded-full">
            {event.category}
          </span>
        </div>

        {/* Featured Badge */}
        {event.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-accent-orange text-white text-xs font-bold rounded-full flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </span>
          </div>
        )}

        {/* Date Overlay */}
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-sm font-medium opacity-80">{formatDate(event.date)}</div>
          <div className="text-xs opacity-60">{event.time}</div>
        </div>

        {/* Prize Overlay */}
        <div className="absolute bottom-4 right-4">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
            {event.prize}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-kerala-500 transition-colors line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {event.shortDesc}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-3 mb-4 text-xs">
          <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {event.venue.split(',')[0]}
          </span>
          <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Team: {event.teamSize}
          </span>
        </div>

        {/* Registration Progress */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {event.registered} registered
            </span>
            <span className={`text-xs font-medium ${isAlmostFull ? 'text-red-500' : 'text-kerala-500'}`}>
              {spotsRemaining} spots left
            </span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-500 ${
                isAlmostFull ? 'bg-red-500' : 'bg-kerala-500'
              }`}
              style={{ width: `${registrationPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {event.registrationFee === 0 ? 'FREE' : formatCurrency(event.registrationFee)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ShareButtons event={event} />
            <button
              onClick={() => onRegister(event)}
              disabled={spotsRemaining === 0}
              className={`px-5 py-2 rounded-lg font-bold text-sm transition-all duration-300 btn-shine ${
                spotsRemaining === 0
                  ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed'
                  : 'bg-kerala-500 hover:bg-kerala-600 text-white glow-green-hover'
              }`}
            >
              {spotsRemaining === 0 ? 'Full' : 'Register'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;