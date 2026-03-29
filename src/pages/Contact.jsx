import '../pages/styles/contact.css';
import React, { useState } from 'react';

// Tailwind CSS should be configured in your project
// Add this to tailwind.config.js:
// colors: {
//   dark: { 900: '#050814', 800: '#0f172a', 700: '#1e293b' },
//   accent: { purple: '#8b5cf6', blue: '#3b82f6' }
// }

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.phone ||
      !formData.service || !formData.budget || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);

    // Format WhatsApp message
    const whatsappMessage = `*New Project Inquiry*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Budget:* ${formData.budget}%0A%0A` +
      `*Details:*%0A${formData.message}`;

    // Business WhatsApp number (replace with actual)
    const businessNumber = '9910811537';
    const url = `https://wa.me/${businessNumber}?text=${whatsappMessage}`;

    // Redirect after short delay for UX
    setTimeout(() => {
      window.open(url, '_blank');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="-bg-dark-900 text-white font-sans relative z-10">

      {/* Main Content */}
      <main className="flex flex-col items-center px-4 py-12 w-full max-w-7xl mx-auto">

        {/* Hero Text */}
        <div className="text-center mb-10 max-w-2xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Let's Build Something <br />
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Tell us about your project — we'll handle the rest.
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-lg glass-card rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
          {/* Decorative shine */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-2xl -mr-10 -mt-10"></div>

          <form onSubmit={handleWhatsApp} className="space-y-5 relative z-10">

            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full glass-input rounded-lg px-4 py-3 text-sm placeholder-gray-500"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full glass-input rounded-lg px-4 py-3 text-sm placeholder-gray-500"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label htmlFor="phone" className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1 234 567 8900"
                className="w-full glass-input rounded-lg px-4 py-3 text-sm placeholder-gray-500"
              />
            </div>

            {/* Service & Budget Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="service" className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">
                  Service Required
                </label>
                <div className="relative">
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full glass-input rounded-lg px-4 py-3 text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Automation">Automation</option>
                    <option value="Custom Project">Custom Project</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="budget" className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">
                  Project Budget
                </label>
                <div className="relative">
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full glass-input rounded-lg px-4 py-3 text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select budget</option>
                    <option value="< ₹10K">&lt; ₹10K</option>
                    <option value="₹10K–₹50K">₹10K–₹50K</option>
                    <option value="₹50K+">₹50K+</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label htmlFor="message" className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">
                Project Description
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                placeholder="Briefly describe your project requirements..."
                className="w-full glass-input rounded-lg px-4 py-3 text-sm placeholder-gray-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group relative overflow-hidden rounded-lg bg-gradient-to-r from-accent-purple to-accent-blue p-[1px] focus:outline-none focus:ring-2 focus:ring-accent-purple focus:ring-offset-2 focus:ring-offset-dark-900 disabled:opacity-70"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="relative flex items-center justify-center gap-2 bg-dark-800/90 group-hover:bg-transparent transition-colors duration-300 rounded-lg py-3.5">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-white font-medium tracking-wide">
                  {isSubmitting ? 'Redirecting...' : 'Send via WhatsApp'}
                </span>
              </div>
            </button>
          </form>

          {/* Trust Signals */}
          <div className="mt-6 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Fast response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <span>Trusted by clients</span>
            </div>
          </div>
        </div>

        {/* Secondary Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left w-full max-w-4xl">
          <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
            <div className="p-2 bg-dark-800 rounded-full border border-gray-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <span className="text-sm">info.sitegen@gmail.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
            <div className="p-2 bg-dark-800 rounded-full border border-gray-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <span className="text-sm">NOIDA SECTOR-62,UTTAR PRADESH</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-gray-600 text-xs relative z-10">
        © 2023 SiteGen Technology. All rights reserved.
      </footer>


    </div>
  );
};

export default App;
