import React, { useState, useEffect } from 'react';
import { getTimeRemaining } from '../utils/helpers';

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  if (timeLeft.total <= 0) {
    return (
      <div className="inline-flex items-center gap-2 px-6 py-3 bg-kerala-500 rounded-xl">
        <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
        <span className="text-white font-bold">Event is Live!</span>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-3 sm:gap-4">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-lg">
            <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <span className="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400">
            {unit.label}
          </span>
          {index < timeUnits.length - 1 && (
            <span className="absolute hidden sm:block text-2xl font-bold text-kerala-500" style={{ marginLeft: '5rem' }}>
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default Countdown;