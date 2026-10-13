import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ExternalLink } from 'lucide-react';
import ContactInfoBox from './ContactInfoBox';

interface ContactPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
}

export default function ContactPage({ onNavigateHome, onNavigatePage }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    pickup: '',
    destination: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `Hello Lombok Local Transport,
I would like to inquire / book a trip:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email || '-'}
- Travel Date: ${formData.date || '-'}
- Pickup: ${formData.pickup || '-'}
- Destination: ${formData.destination || '-'}
- Notes: ${formData.message || '-'}`;

    window.open(`https://wa.me/6281999344480?text=${encodeURIComponent(waText)}`, '_blank', 'noreferrer');
  };

  return (
    <div className="pt-24 sm:pt-28 bg-white text-left font-lato">
      
      {/* 1. Header Banner */}
      <div className="relative py-14 sm:py-20 bg-neutral-900 text-white text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: `url('/Gambar/bangsal.avif')` }}
        />
        <div className="absolute inset-0 bg-[#0766ad]/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-lato font-extrabold uppercase tracking-tight text-white mb-3">
            Get in Touch with Us
          </h1>
          <p className="text-sm sm:text-base text-neutral-100 max-w-2xl mx-auto leading-relaxed">
            Have questions about routes, car rentals, or airport transfers? We are here to help 24/7.
          </p>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Form (col-span-7) */}
          <div className="lg:col-span-7 bg-[#fcfcfc] border border-neutral-200 rounded-xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-lato font-bold text-[#111111] mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mb-6">
              Fill in your trip details below. Your request will open directly in WhatsApp for instant response!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-lato border border-neutral-300 rounded focus:outline-none focus:border-[#0766ad] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+62 8..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-lato border border-neutral-300 rounded focus:outline-none focus:border-[#0766ad] bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-lato border border-neutral-300 rounded focus:outline-none focus:border-[#0766ad] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Planned Travel Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-lato border border-neutral-300 rounded focus:outline-none focus:border-[#0766ad] bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lombok Airport / Hotel"
                    value={formData.pickup}
                    onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-lato border border-neutral-300 rounded focus:outline-none focus:border-[#0766ad] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Destination / Tour Route
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Senaru / Bangsal / Kuta"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-lato border border-neutral-300 rounded focus:outline-none focus:border-[#0766ad] bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Trip Notes / Special Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="Number of passengers, luggage, or specific timing..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-xs font-lato border border-neutral-300 rounded focus:outline-none focus:border-[#0766ad] bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#1eb956] text-white font-lato font-bold text-xs uppercase tracking-wider py-3 rounded shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit &amp; Open in WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Right: Contact Details & Google Map (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#fcfcfc] border border-neutral-200 rounded-xl p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-lato font-bold text-[#111111] uppercase tracking-wide">
                Direct Contact
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0766ad] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#111111]">Office Address:</strong>
                    <span>Karang Bajo, Bayan District, North Lombok Regency, West Nusa Tenggara 83354</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0766ad] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#111111]">WhatsApp / Call:</strong>
                    <a href="https://wa.me/6281999344480" className="text-[#0766ad] hover:underline font-bold">
                      +62 819-9934-4480
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0766ad] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#111111]">E-mail:</strong>
                    <a href="mailto:lomboklocaltransport@gmail.com" className="text-[#0766ad] hover:underline">
                      lomboklocaltransport@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#0766ad] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#111111]">Operating Hours:</strong>
                    <span>24 Hours Daily (Airport Transfers &amp; Private Tours)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-[#fcfcfc] border border-neutral-200 rounded-xl p-6 shadow-sm space-y-3">
              <h3 className="text-base font-lato font-bold text-[#111111] flex items-center justify-between">
                <span>Google Maps Location</span>
                <span className="text-[10px] font-mono text-neutral-500">PCQG+37W</span>
              </h3>

              <div className="relative rounded overflow-hidden border border-neutral-300 h-52 bg-neutral-100">
                <iframe
                  title="Office Map"
                  src="https://maps.google.com/maps?q=Lombok+Local+Transport,+Karang+Bajo,+Bayan,+Lombok+Utara,+Nusa+Tenggara+Barat+83354&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href="https://maps.app.goo.gl/xrvwq3sxJAApxUcX8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#0766ad] hover:text-[#ff6600] font-bold"
              >
                <span>View Full Map on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* 3. Bottom Contact Info Box */}
      <ContactInfoBox onNavigate={onNavigatePage} />

    </div>
  );
}
