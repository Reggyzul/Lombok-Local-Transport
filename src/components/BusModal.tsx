import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Users, CheckCircle2, MessageCircle } from 'lucide-react';

interface BusOption {
  id: string;
  nameEN: string;
  nameID: string;
  seatsDisplay: string;
  badge: string;
  descriptionEN: string;
  descriptionID: string;
  featuresEN: string[];
  featuresID: string[];
}

interface BusModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'ID' | 'EN';
}

export const BUS_OPTIONS: BusOption[] = [
  {
    id: 'hiace-commuter',
    nameEN: 'Toyota Hiace Commuter',
    nameID: 'Toyota Hiace Commuter',
    seatsDisplay: '15 Seats',
    badge: '15 Kursi',
    descriptionEN: 'Toyota Hiace Commuter with 15 comfortable seats, ideal for family trips, corporate transfers, and tour groups across Lombok.',
    descriptionID: 'Toyota Hiace Commuter dengan 15 kursi penumpang nyaman, cocok untuk rombongan keluarga, dinas, dan wisata di Lombok.',
    featuresEN: [
      '15 Ergonomic Passenger Seats',
      'Full Central Ducting Cold AC',
      'Audio & Multimedia System',
      'Spacious Cabin & Luggage Space',
      'Experienced Local Lombok Driver'
    ],
    featuresID: [
      '15 Kursi Penumpang Ergonomis',
      'Full AC Central Ducting Dingin',
      'Sistem Audio & Multimedia',
      'Kabin Bersih & Bagasi Lapang',
      'Sopir Lokal Lombok Berpengalaman'
    ]
  },
  {
    id: 'hiace-premio',
    nameEN: 'Toyota Hiace Premio',
    nameID: 'Toyota Hiace Premio',
    seatsDisplay: '12 - 14 Seats',
    badge: 'Executive Premio',
    descriptionEN: 'Executive Toyota Hiace Premio offering maximum luxury, spacious legroom, and modern comfort for long-distance scenic travel in Lombok.',
    descriptionID: 'Toyota Hiace Premio eksekutif dengan kenyamanan mewah, legroom ekstra lega, dan suspensi nyaman untuk perjalanan keliling Lombok.',
    featuresEN: [
      '12 - 14 Executive Reclining Seats',
      'Super Silent Cabin & Soft Suspension',
      'Full Multi-Zone Air Conditioning',
      'USB Charging Ports per Seat Row',
      'Professional Licensed Tourism Driver'
    ],
    featuresID: [
      '12 - 14 Kursi Reclining Eksekutif',
      'Kabin Senyap & Suspensi Nyaman',
      'Full AC Multi-Zone Dingin Merata',
      'Port Charger USB di Setiap Baris',
      'Driver Pariwisata Lokal Ramah'
    ]
  }
];

export default function BusModal({ isOpen, onClose, lang = 'EN' }: BusModalProps) {
  if (!isOpen) return null;

  const isEN = lang === 'EN';

  const handleWhatsAppBooking = (busName: string, seatsDisplay: string) => {
    const waNumber = '6281999344480';
    const message = isEN
      ? `Hello Lombok Local Transport, I am interested in booking group transport: ${busName} (${seatsDisplay}). Please inform price quote & date availability. Thank you!`
      : `Halo Lombok Local Transport, saya berminat memesan transportasi rombongan: ${busName} (${seatsDisplay}). Mohon informasi penawaran harga & ketersediaan tanggal. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 text-left my-8"
        >
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white p-6 sm:p-8 flex items-center justify-between border-b border-slate-800">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-600/90 text-white font-extrabold text-[10px] uppercase tracking-widest">
                <Users className="w-3.5 h-3.5" />
                <span>{isEN ? 'GROUP TRANSPORTATION' : 'TRANSPORTASI ROMBONGAN'}</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                {isEN ? 'Toyota Hiace Group Options' : 'Pilihan Toyota Hiace Rombongan'}
              </h2>
              <p className="font-sans text-xs text-slate-300 font-medium">
                {isEN ? 'Spacious vehicles for family tours, corporate events, and group trips in Lombok.' : 'Kendaraan lega untuk wisata rombongan, keluarga, dan acara perusahaan di Lombok.'}
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content: Options */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6 bg-slate-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BUS_OPTIONS.map((bus) => {
                const name = isEN ? bus.nameEN : bus.nameID;
                const desc = isEN ? bus.descriptionEN : bus.descriptionID;
                const features = isEN ? bus.featuresEN : bus.featuresID;

                return (
                  <div
                    key={bus.id}
                    className="bg-white rounded-2xl border border-slate-200 p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5"
                  >
                    <div className="space-y-4">
                      {/* Header Badge & Title */}
                      <div className="space-y-2">
                        <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider border border-emerald-200">
                          {bus.badge}
                        </div>

                        <h3 className="font-display font-black text-xl text-[#0d1b37] uppercase">
                          {name}
                        </h3>
                        <span className="font-sans text-xs font-bold text-emerald-700 block">
                          {isEN ? 'Capacity:' : 'Kapasitas:'} {bus.seatsDisplay}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                        {desc}
                      </p>

                      {/* Features Checklist */}
                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block">
                          {isEN ? 'Key Features:' : 'Fasilitas Utama:'}
                        </span>
                        <ul className="space-y-1.5">
                          {features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* WA Booking Action Button */}
                    <div className="pt-3">
                      <button
                        onClick={() => handleWhatsAppBooking(name, bus.seatsDisplay)}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-display font-extrabold text-xs uppercase py-3.5 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>{isEN ? 'Book via WhatsApp' : 'Pesan via WhatsApp'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="bg-white p-4 sm:p-5 border-t border-slate-200 text-center flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>📍 Karang Bajo, Bayan, Lombok Utara, NTB 83354 • WA: 081999344480</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold uppercase cursor-pointer"
            >
              {isEN ? 'Close' : 'Tutup'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
