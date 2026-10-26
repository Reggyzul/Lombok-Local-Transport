import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

interface ContactInfoBoxProps {
  onNavigate: (page: string) => void;
}

export default function ContactInfoBox({ onNavigate }: ContactInfoBoxProps) {
  return (
    <section 
      id="section_contact_info" 
      className="py-16 sm:py-20 bg-slate-100/90 text-center font-sans border-t border-slate-200"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Brand Emblem Logo with Pulse */}
        <div className="mb-5 flex justify-center">
          <div className="relative group cursor-pointer" onClick={() => onNavigate('home')}>
            <img
              src="/Gambar/logo.png"
              alt="Lombok Local Transport"
              className="w-28 sm:w-32 h-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Heading with Character */}
        <div className="mb-2">
          <span className="text-[11px] font-heading font-extrabold text-[#0766ad] uppercase tracking-widest block mb-1">
            24/7 Island Concierge &bull; Head Office
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 tracking-tight uppercase">
            CONTACT INFORMATION
          </h3>
        </div>

        {/* Divider */}
        <div className="w-12 h-1 bg-gradient-to-r from-[#0766ad] to-amber-500 mx-auto rounded-full my-4" />

        {/* Contact Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-6 text-left">
          
          {/* Address */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <div className="flex items-center gap-2 text-[#0766ad] font-heading font-bold text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Office Address</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Karang Bajo, Bayan, North Lombok Regency, West Nusa Tenggara 83354
            </p>
          </div>

          {/* WhatsApp / Phone */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <div className="flex items-center gap-2 text-emerald-600 font-heading font-bold text-xs uppercase tracking-wider">
              <Phone className="w-4 h-4 shrink-0" />
              <span>WhatsApp / Call</span>
            </div>
            <a 
              href="https://wa.me/6281999344480" 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs font-bold text-slate-900 hover:text-emerald-600 block transition-colors"
            >
              +62 819-9934-4480
            </a>
            <span className="text-[11px] text-slate-400 block">24 Hours Active</span>
          </div>

          {/* Email */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <div className="flex items-center gap-2 text-amber-600 font-heading font-bold text-xs uppercase tracking-wider">
              <Mail className="w-4 h-4 shrink-0" />
              <span>E-mail</span>
            </div>
            <a 
              href="mailto:lomboklocaltransport@gmail.com" 
              className="text-xs font-bold text-slate-900 hover:text-[#0766ad] block transition-colors break-all"
            >
              lomboklocaltransport@gmail.com
            </a>
            <span className="text-[11px] text-slate-400 block">Instant Quote Reply</span>
          </div>

        </div>

        {/* Quick Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('home')}
            className="px-6 py-2 rounded-full border border-slate-300 hover:border-[#0766ad] bg-white text-slate-700 hover:text-[#0766ad] font-heading font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer"
          >
            Home
          </button>

          <button
            onClick={() => onNavigate('payment')}
            className="px-6 py-2 rounded-full border border-slate-300 hover:border-amber-500 bg-white text-slate-700 hover:text-amber-600 font-heading font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer"
          >
            Payment Policy
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-2 rounded-full border border-slate-300 hover:border-emerald-600 bg-white text-slate-700 hover:text-emerald-600 font-heading font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer"
          >
            Contact &amp; Location
          </button>
        </div>

      </div>
    </section>
  );
}
