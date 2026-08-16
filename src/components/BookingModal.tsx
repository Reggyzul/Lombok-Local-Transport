import React, { useState, useEffect } from 'react';
import { Car } from '../types';
import { CARS } from '../data/cars';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, MapPin, User, Phone, CheckCircle2, Sparkles, Award, Users, Navigation } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface BookingModalProps {
  car: Car | null;
  onClose: () => void;
  lang: 'ID' | 'EN';
  onCarChange?: (car: Car) => void;
}

export default function BookingModal({ car, onClose, lang, onCarChange }: BookingModalProps) {
  const [routeCategory, setRouteCategory] = useState<'car_rental' | 'airport_transfer' | 'harbor_transfer' | 'tour_trip'>('car_rental');
  const [selectedCarId, setSelectedCarId] = useState<string>(car?.id || 'avanza');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [passengers, setPassengers] = useState(lang === 'EN' ? '4 Passengers' : '4 Orang');
  const [departureDate, setDepartureDate] = useState('');
  const [pickupTime, setPickupTime] = useState(lang === 'EN' ? '08:00 AM' : '08:00 (Pagi)');
  const [pickupAddress, setPickupAddress] = useState('');
  const [destinationTrip, setDestinationTrip] = useState('');
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const t = TRANSLATIONS[lang];
  const isEN = lang === 'EN';

  useEffect(() => {
    if (car) {
      setSelectedCarId(car.id);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [car]);

  if (!car) return null;

  const currentSelectedCar = CARS.find(c => c.id === selectedCarId) || car;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !departureDate || !pickupAddress) {
      alert(isEN ? 'Please complete all required fields (*)!' : 'Mohon lengkapi semua kolom yang wajib diisi (*)!');
      return;
    }

    const waNumber = '6281999344480';

    let serviceType = isEN ? 'Car Rental' : 'Rental Mobil';
    if (routeCategory === 'airport_transfer') serviceType = isEN ? 'Airport Transfer (BIZAM)' : 'Airport Transfer (BIZAM)';
    if (routeCategory === 'harbor_transfer') serviceType = isEN ? 'Harbor Transfer (Bangsal/Gili)' : 'Pelabuhan Transfer (Bangsal/Gili)';
    if (routeCategory === 'tour_trip') serviceType = isEN ? 'Tourism Tour / Custom Trip' : 'Transportasi Wisata / Custom Trip';

    // Format requested by user:
    // Tanggal perjalanan → Jumlah penumpang → Kendaraan yang diinginkan → Lokasi penjemputan → Tujuan perjalanan
    const textTemplate = isEN
      ? `Hello Lombok Local Transport, I would like to book a transport service:

📋 *BOOKING DETAILS:*
• Service: *${serviceType}*
• Travel Date: *${departureDate}*
• Passengers: *${passengers}*
• Vehicle: *${currentSelectedCar.name}*
• Pickup Location: *${pickupAddress}*
• Destination: *${destinationTrip || 'Senaru / Sembalun / Mandalika / Bangsal / Custom'}*
• Pickup Time: *${pickupTime}*

👤 *CUSTOMER CONTACT:*
• Name: *${name}*
• WhatsApp: *${phone}*
• Notes: *${notes || '-'}*

Please confirm availability and price quote. Thank you!`
      : `Halo Lombok Local Transport, saya ingin memesan layanan transportasi:

📋 *FORMAT PEMESANAN:*
• Layanan: *${serviceType}*
• Tanggal Perjalanan: *${departureDate}*
• Jumlah Penumpang: *${passengers}*
• Kendaraan yang Diinginkan: *${currentSelectedCar.name}*
• Lokasi Penjemputan: *${pickupAddress}*
• Tujuan Perjalanan: *${destinationTrip || 'Senaru / Sembalun / Mandalika / Bangsal / Custom'}*
• Jam Penjemputan: *${pickupTime}*

👤 *DATA PEMESAN:*
• Nama: *${name}*
• No. WhatsApp: *${phone}*
• Catatan Tambahan: *${notes || '-'}*

Mohon informasi ketersediaan armada dan penawaran harga terbaik. Terima kasih!`;

    const encodedText = encodeURIComponent(textTemplate);
    const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodedText}`;
    
    window.open(waUrl, '_blank', 'noreferrer');
    setIsBooked(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-start pt-24 sm:pt-28 pb-6 px-3 sm:px-6 overflow-hidden">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-0"
          id="booking-backdrop"
        />

        {/* Modal Panel Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 z-10 my-auto border border-slate-200 max-h-[calc(100vh-8.5rem)]"
          id="booking-modal-panel"
        >
          
          {/* LEFT SIDEBAR: CAR & COMPANY PREVIEW */}
          <div className="lg:col-span-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-white p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden text-left">
            <div className="space-y-5 relative z-10">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-extrabold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Lombok Local Transport</span>
              </div>

              <div>
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                  {currentSelectedCar.name}
                </h3>
                <p className="font-sans text-xs text-emerald-400 font-bold mt-0.5">
                  {currentSelectedCar.category} ({currentSelectedCar.seats} {isEN ? 'Seats' : 'Kursi'})
                </p>
              </div>

              {/* Car Photo */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-slate-800/80 aspect-[16/10] p-2 flex items-center justify-center">
                <img
                  src={currentSelectedCar.image}
                  alt={currentSelectedCar.name}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>

              {/* Specs & Facility List */}
              <div className="space-y-2 text-xs text-slate-300 border-t border-white/10 pt-4">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">{isEN ? 'Capacity:' : 'Kapasitas:'}</span>
                  <span className="font-semibold text-white">{currentSelectedCar.seats} {isEN ? 'Seats' : 'Kursi'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">{isEN ? 'Amenities:' : 'Fasilitas:'}</span>
                  <span className="font-semibold text-emerald-400">Full AC, Bersih, Wangi</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">{isEN ? 'Driver Service:' : 'Layanan:'}</span>
                  <span className="font-semibold text-emerald-300">{isEN ? 'Local Experienced Driver' : 'Sopir Lokal Berpengalaman'}</span>
                </div>
              </div>

              {/* Motto Card */}
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-left space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-extrabold text-[11px] uppercase tracking-wide">
                  <Award className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>{t.hero_motto}</span>
                </div>
                <p className="font-sans text-[11px] text-slate-300 leading-relaxed font-medium">
                  {t.about_desc_1}
                </p>
              </div>

            </div>

            {/* Footer Trust Info */}
            <div className="pt-4 border-t border-white/10 mt-6 text-[10px] text-slate-400 font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{isEN ? 'Direct WhatsApp Response: 081999344480' : 'Respon Cepat WhatsApp: 081999344480'}</span>
            </div>
          </div>

          {/* RIGHT SIDEBAR: BOOKING FORM */}
          <div className="lg:col-span-8 p-6 sm:p-8 bg-white max-h-[80vh] overflow-y-auto relative text-left">
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white transition-all flex items-center justify-center shadow-2xl cursor-pointer z-50 hover:scale-110 border-2 border-white"
              id="close-booking-modal"
              title={isEN ? 'Close Modal' : 'Tutup Modal'}
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {!isBooked ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Header Title */}
                <div>
                  <h4 className="font-display font-black text-xl sm:text-2xl text-[#0f172a] uppercase tracking-tight">
                    {t.modal_title}
                  </h4>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed font-medium mt-1">
                    {t.modal_desc}
                  </p>
                </div>

                {/* 1. SELECT SERVICE TYPE */}
                <div className="space-y-3 pt-1">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 block">
                    1. {isEN ? 'SELECT SERVICE CATEGORY' : 'PILIH JENIS LAYANAN'}
                  </span>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      type="button"
                      onClick={() => setRouteCategory('car_rental')}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        routeCategory === 'car_rental'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium'
                      }`}
                    >
                      <span className="text-[11px] font-bold block">{isEN ? 'Car Rental' : 'Rental Mobil'}</span>
                      <span className="text-[9px] text-slate-500 block">Harian / Wisata</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRouteCategory('airport_transfer')}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        routeCategory === 'airport_transfer'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium'
                      }`}
                    >
                      <span className="text-[11px] font-bold block">{isEN ? 'Airport Transfer' : 'Antar Jemput BIZAM'}</span>
                      <span className="text-[9px] text-slate-500 block">Bandara Lombok</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRouteCategory('harbor_transfer')}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        routeCategory === 'harbor_transfer'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium'
                      }`}
                    >
                      <span className="text-[11px] font-bold block">{isEN ? 'Harbor Transfer' : 'Pelabuhan Bangsal'}</span>
                      <span className="text-[9px] text-slate-500 block">Penyeberangan Gili</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRouteCategory('tour_trip')}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        routeCategory === 'tour_trip'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium'
                      }`}
                    >
                      <span className="text-[11px] font-bold block">{isEN ? 'Tour / Custom' : 'Wisata / Custom'}</span>
                      <span className="text-[9px] text-slate-500 block">Senaru, Mandalika, dll.</span>
                    </button>
                  </div>
                </div>

                {/* 2. CHOOSE FLEET */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 block">
                    2. {isEN ? 'CHOOSE VEHICLE' : 'PILIH ARMADA KENDARAAN'}
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {CARS.map(c => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => {
                          setSelectedCarId(c.id);
                          if (onCarChange) onCarChange(c);
                        }}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          selectedCarId === c.id
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-500'
                            : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <span className="text-xs font-bold block">{c.name}</span>
                        <span className="text-[10px] text-slate-500 block">{c.seats} {isEN ? 'Seats' : 'Kursi'}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. TRIP & PASSENGER DATA */}
                <div className="space-y-4 pt-2 border-t border-slate-100">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 block">
                    3. {isEN ? 'TRIP & PASSENGER DETAILS' : 'DETAIL PERJALANAN & DATA PEMESAN'}
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{t.modal_field_date} *</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{isEN ? 'Passenger Count' : 'Jumlah Penumpang'} *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        placeholder={isEN ? "Example: 4 Passengers" : "Contoh: 4 Orang"}
                        className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{t.modal_field_address} *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={pickupAddress}
                        onChange={(e) => setPickupAddress(e.target.value)}
                        placeholder={isEN ? "Airport BIZAM / Bangsal Port / Hotel..." : "Bandara BIZAM / Pelabuhan Bangsal / Hotel..."}
                        className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{isEN ? 'Trip Destination' : 'Tujuan Perjalanan'}</span>
                      </label>
                      <input
                        type="text"
                        value={destinationTrip}
                        onChange={(e) => setDestinationTrip(e.target.value)}
                        placeholder={isEN ? "Senaru / Sembalun / Mandalika / Bangsal..." : "Senaru / Sembalun / Mandalika / Bangsal / Custom..."}
                        className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{t.modal_field_name} *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={isEN ? "Your Full Name..." : "Nama Pemesan..."}
                        className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{t.modal_field_phone} *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={isEN ? "Example: 081999344480" : "Contoh: 081999344480"}
                        className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
                      />
                    </div>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-display font-black text-xs uppercase py-4 rounded-2xl shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 tracking-wider"
                  >
                    <span>{t.modal_btn_confirm}</span>
                  </button>
                </div>

              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display font-black text-2xl text-[#0d1b37] uppercase">
                  {isEN ? 'Reservation Draft Sent!' : 'Format Pemesanan Terkirim!'}
                </h4>
                <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium max-w-md mx-auto">
                  {isEN 
                    ? 'Thank you! You have been redirected to Lombok Local Transport WhatsApp (081999344480). We will respond promptly.' 
                    : 'Terima kasih! Anda telah terhubung langsung dengan WhatsApp Lombok Local Transport (081999344480). Tim kami akan segera merespons pemesanan Anda.'}
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase cursor-pointer"
                >
                  {isEN ? 'Close Window' : 'Tutup Jendela'}
                </button>
              </div>
            )}

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
