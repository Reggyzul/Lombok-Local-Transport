import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
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
    <div className="pt-24 sm:pt-28 bg-[#fbfdfc] text-left font-sans">
      
      {/* 1. Header Banner */}
      <div className="relative py-20 sm:py-28 bg-slate-950 text-white text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('/Gambar/bangsal.avif')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/95" />
        
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>24/7 Island Concierge</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-['Outfit'] font-black tracking-tight text-white mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200">Touch</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a question about a route, need a custom quote for a private group charter, or ready to secure your ride across Lombok?
          </p>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Form (col-span-7) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-7 sm:p-10 shadow-lg shadow-slate-200/50 relative overflow-hidden">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wider uppercase mb-3">
              Fast Response Form
            </div>
            <h2 className="text-2xl sm:text-3xl font-['Outfit'] font-bold text-slate-900 mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Fill out this quick form and your reservation details will automatically open in WhatsApp for immediate confirmation by our driver team.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm font-sans border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+62 8..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm font-sans border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/50 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm font-sans border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Planned Travel Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm font-sans border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/50 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lombok Airport / Hotel"
                    value={formData.pickup}
                    onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm font-sans border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Destination / Route
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Senaru / Bangsal / Kuta"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm font-sans border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Trip Notes / Special Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="Number of passengers, luggage details, or specific pick-up timing..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm font-sans border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/50 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-['Outfit'] font-bold text-sm uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Submit &amp; Open in WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Right: Contact Details & Google Map (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-slate-200/80 rounded-3xl p-7 shadow-lg shadow-slate-200/50 space-y-5">
              <h3 className="text-xl font-['Outfit'] font-bold text-slate-900 flex items-center gap-2">
                <span>Direct Contact Details</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Base Office:</strong>
                    <span>Karang Bajo, Bayan District, North Lombok Regency, West Nusa Tenggara 83354</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">WhatsApp / Call:</strong>
                    <a href="https://wa.me/6281999344480" className="text-emerald-700 hover:text-emerald-800 font-bold">
                      +62 819-9934-4480
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Email Support:</strong>
                    <a href="mailto:lomboklocaltransport@gmail.com" className="text-emerald-700 hover:text-emerald-800">
                      lomboklocaltransport@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Service Hours:</strong>
                    <span>24 Hours Daily (Airport Transfers &amp; Island-Wide Charters)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-7 shadow-lg shadow-slate-200/50 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-['Outfit'] font-bold text-slate-900">
                  Google Maps Location
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">Plus Code: PCQG+37W</span>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-56 bg-slate-100 shadow-inner">
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
                className="inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:text-emerald-800 font-bold"
              >
                <span>Open in Google Maps App</span>
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
