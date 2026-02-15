import React, { useState } from 'react';
import { validateEmail, validatePhone, formatCurrency } from '../utils/helpers';

const skillOptions = [
  'C', 'C++', 'Python', 'JavaScript', 'Java',
  'Assembly', 'SQL', 'PL/SQL', 'React', 'Node.js',
  'Machine Learning', 'Data Science', 'IoT',
  'UI/UX Design', 'Project Management', 'Other'
];

function RegistrationModal({ event, onClose, onSuccess }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    college: 'PRN College of Engineering, Kollam',
    department: '',
    year: '',
    teamSize: '1',
    teamName: '',
    skills: [],
    experience: '',
    motivation: '',
    agree: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSkillToggle = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const validateStep = (stepNumber) => {
    const newErrors = {};

    if (stepNumber === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address';
      if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
      else if (!validatePhone(formData.phone)) newErrors.phone = 'Invalid phone number';
      if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp number is required';
      else if (!validatePhone(formData.whatsapp)) newErrors.whatsapp = 'Invalid WhatsApp number';
    }

    if (stepNumber === 2) {
      if (!formData.department) newErrors.department = 'Select your department';
      if (!formData.year) newErrors.year = 'Select your year';
      if (formData.skills.length === 0) newErrors.skills = 'Select at least one skill';
    }

    if (stepNumber === 3) {
      if (!formData.agree) newErrors.agree = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    // Simulate API call (replace with actual Firebase/Google Sheets integration)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const registrationData = {
        ...formData,
        eventId: event.id,
        eventTitle: event.title,
        registrationId: `IEDC-${Date.now()}`,
        registeredAt: new Date().toISOString(),
      };

      onSuccess(registrationData);
    } catch (error) {
      console.error('Registration failed:', error);
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Register for Event
              </h2>
              <p className="text-kerala-500 font-medium mt-1">{event.title}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-2 mt-6">
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm transition-colors ${
                  step >= s ? 'bg-kerala-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                }`}>
                  {step > s ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : s}
                </div>
                {s < 3 && (
                  <div className={`flex-1 h-1 rounded-full transition-colors ${
                    step > s ? 'bg-kerala-500' : 'bg-gray-200 dark:bg-gray-700'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Personal Info</span>
            <span>Details</span>
            <span>Confirm</span>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border ${
                    errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                  } text-gray-900 dark:text-white focus:ring-2 focus:ring-kerala-500 transition-all`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border ${
                    errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                  } text-gray-900 dark:text-white focus:ring-2 focus:ring-kerala-500 transition-all`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border ${
                      errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                    } text-gray-900 dark:text-white focus:ring-2 focus:ring-kerala-500 transition-all`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border ${
                      errors.whatsapp ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                    } text-gray-900 dark:text-white focus:ring-2 focus:ring-kerala-500 transition-all`}
                  />
                  {errors.whatsapp && <p className="mt-1 text-sm text-red-500">{errors.whatsapp}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  College/Institution
                </label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Your college name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-kerala-500 transition-all"
                />
              </div>
            </div>
          )}

          {/* Step 2: Event Details */}
          {step === 2 && (
            <div className="space-y-5 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Department *
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border ${
                      errors.department ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                    } text-gray-900 dark:text-white focus:ring-2 focus:ring-kerala-500 transition-all`}
                  >
                    <option value="">Select Department</option>
                    <option value="CSE">Computer Science & Engineering</option>
                    <option value="ECE">Electronics & Communication</option>
                    <option value="EEE">Electrical & Electronics</option>
                    <option value="ME">Mechanical Engineering</option>
                    <option value="CE">Civil Engineering</option>
                    <option value="IT">Information Technology</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.department && <p className="mt-1 text-sm text-red-500">{errors.department}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Year of Study *
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border ${
                      errors.year ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                    } text-gray-900 dark:text-white focus:ring-2 focus:ring-kerala-500 transition-all`}
                  >
                    <option value="">Select Year</option>
                    <option value="1">First Year</option>
                    <option value="2">Second Year</option>
                    <option value="3">Third Year</option>
                    <option value="4">Final Year</option>
                    <option value="PG">Post Graduate</option>
                  </select>
                  {errors.year && <p className="mt-1 text-sm text-red-500">{errors.year}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Team Size
                  </label>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-kerala-500 transition-all"
                  >
                    {[1, 2, 3, 4, 5].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Member' : 'Members'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Team Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="Your awesome team name"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-kerala-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Skills *
                </label>
                <div className="flex flex-wrap gap-2">
                  {skillOptions.map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => handleSkillToggle(skill)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        formData.skills.includes(skill)
                          ? 'bg-kerala-500 text-white shadow-lg shadow-kerala-500/30'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-kerala-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
                {errors.skills && <p className="mt-2 text-sm text-red-500">{errors.skills}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Why do you want to participate? (Optional)
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us your motivation..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-kerala-500 transition-all resize-none"
                ></textarea>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              {/* Summary */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Registration Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Event</span>
                    <span className="font-medium text-gray-900 dark:text-white">{event.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Name</span>
                    <span className="font-medium text-gray-900 dark:text-white">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Email</span>
                    <span className="font-medium text-gray-900 dark:text-white">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Team Size</span>
                    <span className="font-medium text-gray-900 dark:text-white">{formData.teamSize} member(s)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Skills</span>
                    <span className="font-medium text-gray-900 dark:text-white text-right max-w-[60%]">
                      {formData.skills.join(', ')}
                    </span>
                  </div>
                  <hr className="border-gray-200 dark:border-gray-700" />
                  <div className="flex justify-between text-lg">
                    <span className="font-bold text-gray-900 dark:text-white">Registration Fee</span>
                    <span className="font-bold text-kerala-500">
                      {event.registrationFee === 0 ? 'FREE' : formatCurrency(event.registrationFee)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Notice */}
              {event.registrationFee > 0 && (
                <div className="bg-accent-orange/10 border border-accent-orange/30 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Payment Information</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        After confirmation, you'll be redirected to Razorpay for secure payment. 
                        Your spot will be confirmed once payment is complete.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Terms Agreement */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 rounded border-gray-300 text-kerala-500 focus:ring-kerala-500"
                />
                <label htmlFor="agree" className="text-sm text-gray-600 dark:text-gray-400">
                  I agree to the{' '}
                  <a href="#" className="text-kerala-500 hover:underline">Terms & Conditions</a>
                  {' '}and{' '}
                  <a href="#" className="text-kerala-500 hover:underline">Privacy Policy</a>. 
                  I consent to receive updates via WhatsApp and email.
                </label>
              </div>
              {errors.agree && <p className="text-sm text-red-500">{errors.agree}</p>}
              {errors.submit && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-red-600 dark:text-red-400 text-sm">
                  {errors.submit}
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex-1 py-3 rounded-xl font-bold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex-1 py-3 rounded-xl font-bold text-white bg-kerala-500 hover:bg-kerala-600 transition-colors btn-shine"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3 rounded-xl font-bold text-white bg-kerala-500 hover:bg-kerala-600 transition-colors btn-shine disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="loader w-5 h-5 border-2 border-white/30 border-t-white"></span>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Registration</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationModal;