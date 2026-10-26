import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, ExternalLink } from 'lucide-react';

interface ContactInfoBoxProps {
  onNavigate: (page: string) => void;
}

export default function ContactInfoBox({ onNavigate }: ContactInfoBoxProps) {
  return (
    <section 
      id="section_contact_info" 
      className="py-16 sm:py-20 bg-slate-100/90 text-center font-sans border-t border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
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
          
          {/* Address with Direct Google Maps Link */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2 flex flex-col justify-between group hover:border-emerald-500 transition-colors">
            <div>
              <div className="flex items-center gap-2 text-[#0766ad] font-heading font-bold text-xs uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>Base Office</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Karang Bajo, Bayan, North Lombok Regency, West Nusa Tenggara 83354
              </p>
            </div>
            <a 
              href="https://maps.app.goo.gl/XyuUg3998NsscnDdA" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-emerald-700 hover:text-emerald-800 transition-colors pt-2 border-t border-slate-100"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct ke Google Maps</span>
              <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
            </a>
          </div>

          {/* WhatsApp / Phone */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2 flex flex-col justify-between group hover:border-emerald-500 transition-colors">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 font-heading font-bold text-xs uppercase tracking-wider mb-1">
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
              <span className="text-[11px] text-slate-400 block mt-0.5">24 Hours Active</span>
            </div>
            <a 
              href="https://wa.me/6281999344480" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-emerald-700 hover:text-emerald-800 transition-colors pt-2 border-t border-slate-100"
            >
              <span>Chat WhatsApp</span>
              <ArrowRight className="w-3 h-3 ml-auto opacity-70" />
            </a>
          </div>

          {/* Email */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2 flex flex-col justify-between group hover:border-amber-500 transition-colors">
            <div>
              <div className="flex items-center gap-2 text-amber-600 font-heading font-bold text-xs uppercase tracking-wider mb-1">
                <Mail className="w-4 h-4 shrink-0" />
                <span>Official Email</span>
              </div>
              <a 
                href="mailto:lomboklocaltransport@gmail.com" 
                className="text-xs font-bold text-slate-900 hover:text-[#0766ad] block transition-colors break-all"
              >
                lomboklocaltransport@gmail.com
              </a>
              <span className="text-[11px] text-slate-400 block mt-0.5">Fast Response &amp; Invoice</span>
            </div>
            <a 
              href="mailto:lomboklocaltransport@gmail.com" 
              className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-amber-700 hover:text-amber-800 transition-colors pt-2 border-t border-slate-100"
            >
              <span>Kirim Email</span>
              <ArrowRight className="w-3 h-3 ml-auto opacity-70" />
            </a>
          </div>

        </div>

        {/* Quick Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('home')}
            className="px-5 py-2 rounded-full border border-slate-300 hover:border-[#0766ad] bg-white text-slate-700 hover:text-[#0766ad] font-heading font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer"
          >
            Home
          </button>

          <button
            onClick={() => onNavigate('payment')}
            className="px-5 py-2 rounded-full border border-slate-300 hover:border-amber-500 bg-white text-slate-700 hover:text-amber-600 font-heading font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer"
          >
            Payment Policy
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2 rounded-full border border-slate-300 hover:border-emerald-600 bg-white text-slate-700 hover:text-emerald-600 font-heading font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer"
          >
            Contact &amp; Location
          </button>

          <a
            href="https://maps.app.goo.gl/XyuUg3998NsscnDdA"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
}
