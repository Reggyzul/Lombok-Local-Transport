export interface TourTier {
  busType: string;
  capacity: string;
  pricePerPerson: string;
  hotelDetails: string;
  notes: string;
}

export interface TourPackage {
  id: string;
  title: string;
  categoryKey: 'domestik' | 'internasional';
  duration: string;
  route: string[];
  routeDisplay: string;
  image: string;
  badge: string;
  minPrice: string;
  tiers: TourTier[];
  highlights: string[];
  includes: string[];
  excludes: string[];
}

export const TOUR_PACKAGES: TourPackage[] = [
  // 1. SENARU & AIR TERJUN RINJANI
  {
    id: 'tour-senaru',
    title: 'PAKET WISATA SENARU & AIR TERJUN RINJANI',
    categoryKey: 'domestik',
    duration: 'Full Day',
    route: ['Desa Adat Senaru', 'Air Terjun Sendang Gile', 'Air Terjun Tiu Kelep', 'Pintu Gerbang Rinjani', 'Pusat Kuliner Khas'],
    routeDisplay: 'Mataram/Airport/Bangsal - Senaru - Sendang Gile - Tiu Kelep',
    image: '/dest_lombok.avif',
    badge: 'Wisata Air Terjun & Alam',
    minPrice: 'Hubungi Kami',
    tiers: [
      {
        busType: 'Toyota Avanza / Innova / Hiace',
        capacity: '2 - 15 Orang',
        pricePerPerson: 'Konsultasikan via WA',
        hotelDetails: 'Tanpa Menginap / Custom Sesuai Rencana',
        notes: 'Termasuk Tiket Masuk & Pemandu Lokal Air Terjun'
      }
    ],
    highlights: [
      'Menikmati kesegaran Air Terjun Sendang Gile & Air Terjun Tiu Kelep yang megah di kaki Gunung Rinjani',
      'Trekking asri menyusuri hutan tropis dan aliran sungai alami',
      'Mengunjungi Desa Adat Tradisional Senaru di Lombok Utara',
      'Sangat cocok untuk wisatawan keluarga, rombongan, dan pencinta alam'
    ],
    includes: [
      'Kendaraan AC Prima (Avanza / Innova / Hiace)',
      'Sopir Lokal Berpengalaman + BBM',
      'Antar-Jemput Hotel / Pelabuhan / Bandara',
      'Tiket Masuk Wisata & Parkir'
    ],
    excludes: [
      'Pengeluaran Pribadi & Tipping Sopir / Guide'
    ]
  },

  // 2. SEMBALUN HIGHLAND
  {
    id: 'tour-sembalun',
    title: 'PAKET WISATA SEMBALUN HIGHLAND & RINJANI VIEW',
    categoryKey: 'domestik',
    duration: 'Full Day',
    route: ['Bukit Selong', 'Desa Adat Beleq Sembalun', 'Kebun Stroberi Sembalun', 'Pusuk Sembalun Rinjani View', 'Taman Bunga Sembalun'],
    routeDisplay: 'Mataram/Airport - Sembalun - Bukit Selong - Pusuk Sembalun',
    image: '/gallery_senggigi.avif',
    badge: 'Wisata Pegunungan Sejuk',
    minPrice: 'Hubungi Kami',
    tiers: [
      {
        busType: 'Toyota Avanza / Toyota Innova / Toyota Hiace',
        capacity: '2 - 15 Orang',
        pricePerPerson: 'Konsultasikan via WA',
        hotelDetails: 'Pilihan Resort Sembalun / Hotel Mataram / Senggigi',
        notes: 'Udara Sejuk Pegunungan & Spot Foto Instagramable Panorama Rinjani'
      }
    ],
    highlights: [
      'Panorama lembah Sembalun dan sawah petak-petak dari puncak Bukit Selong',
      'Pemandangan megah Gunung Rinjani dari Pusuk Sembalun',
      'Wisata petik stroberi segar langsung di kebun petani Sembalun',
      'Sejarah dan rumah adat tradisional Desa Adat Beleq'
    ],
    includes: [
      'Mobil AC Terawat + Driver Lokal BBM',
      'Tiket Masuk Seluruh Objek Wisata Sembalun',
      'Air Mineral Selama Perjalanan'
    ],
    excludes: [
      'Pengeluaran Pribadi & Makan Siang'
    ]
  },

  // 3. KUTA MANDALIKA & PANTAI SELATAN
  {
    id: 'tour-mandalika',
    title: 'PAKET WISATA KUTA MANDALIKA & PANTAI SELATAN',
    categoryKey: 'domestik',
    duration: 'Full Day',
    route: ['Sirkuit Internasional Mandalika', 'Pantai Kuta Mandalika', 'Pantai Tanjung Aan', 'Bukit Merese Sunset', 'Desa Adat Sade / Sukarara'],
    routeDisplay: 'Airport/Mataram - Sirkuit Mandalika - Tanjung Aan - Bukit Merese',
    image: '/dest_lombok.avif',
    badge: 'Pantai & Sirkuit Mandalika',
    minPrice: 'Hubungi Kami',
    tiers: [
      {
        busType: 'Toyota Avanza / Innova / Hiace Premio',
        capacity: '2 - 15 Orang',
        pricePerPerson: 'Konsultasikan via WA',
        hotelDetails: 'Resort Kuta Mandalika / Hotel Mataram',
        notes: 'Sunset Eksotis di Bukit Merese & Wisata Bahari Pasir Merica'
      }
    ],
    highlights: [
      'Mengunjungi kawasan Sirkuit Internasional Pertamina Mandalika',
      'Menikmati keunikan pasir merica di Pantai Tanjung Aan dan bukit karang',
      'Melihat panorama sunset spektakuler samudera Hindia dari atas Bukit Merese',
      'Belajar kebudayaan suku Sasak dan kain tenun tradisional di Desa Sade / Sukarara'
    ],
    includes: [
      'Transportasi AC Bersih + Driver BBM',
      'Antar-Jemput Bandara BIZAM atau Hotel',
      'Parkir dan Donasi Kawasan Wisata'
    ],
    excludes: [
      'Pengeluaran Pribadi & Makan'
    ]
  },

  // 4. PELABUHAN BANGSAL & GILI ISLANDS TRANSFER
  {
    id: 'tour-bangsal-gili',
    title: 'TRANSFER PELABUHAN BANGSAL & JELAJAH GILI',
    categoryKey: 'internasional',
    duration: 'One Way / Full Day',
    route: ['Lombok Airport (BIZAM)', 'Mataram / Senggigi', 'Pelabuhan Bangsal', 'Pelabuhan Teluk Nara', 'Gili Trawangan / Meno / Air'],
    routeDisplay: 'Airport BIZAM / Mataram - Pelabuhan Bangsal (Gili Ferry Point)',
    image: '/gallery_senggigi.avif',
    badge: 'Airport & Harbor Transfer',
    minPrice: 'Hubungi Kami',
    tiers: [
      {
        busType: 'Toyota Avanza / Toyota Innova / Toyota Hiace',
        capacity: '2 - 15 Orang',
        pricePerPerson: 'Konsultasikan via WA',
        hotelDetails: 'Transfer Menuju / Dari Pelabuhan',
        notes: 'Pintu Masuk Utama Menuju 3 Gili (Trawangan, Meno, Air)'
      }
    ],
    highlights: [
      'Layanan penjemputan tepat waktu dari Bandara Internasional Lombok (BIZAM) ke Pelabuhan Bangsal',
      'Layanan antar-jemput dari hotel kawasan Senggigi / Mataram / Senaru menuju Pelabuhan Bangsal',
      'Kapasitas armada fleksibel untuk rombongan keluarga atau pasangan dengan banyak bagasi',
      'Driver ramah siap membantu kelancaran penyeberangan tiket kapal/boat'
    ],
    includes: [
      'Mobil AC Nyaman + Driver Berpengalaman BBM',
      'Antar-Jemput Door-to-Door Tepat Waktu',
      'Bantuan Angkat Bagasi'
    ],
    excludes: [
      'Tiket Kapal / Speedboat Penyeberangan Gili'
    ]
  },

  // 5. TETEBATU NATURE & WATERFALL
  {
    id: 'tour-tetebatu',
    title: 'PAKET WISATA TETEBATU NATURE & RICE TERRACE',
    categoryKey: 'domestik',
    duration: 'Full Day',
    route: ['Desa Wisata Tetebatu', 'Sawah Terasering Bertingkat', 'Air Terjun Sarang Walet', 'Hutan Monyet Hitam (Black Monkey Forest)', 'Pedesaan Lombok Timur'],
    routeDisplay: 'Mataram/Airport/Kuta - Tetebatu - Sarang Walet - Rice Terrace',
    image: '/dest_lombok.avif',
    badge: 'Desa Wisata Dunia UNWTO',
    minPrice: 'Hubungi Kami',
    tiers: [
      {
        busType: 'Toyota Avanza / Innova / Hiace',
        capacity: '2 - 15 Orang',
        pricePerPerson: 'Konsultasikan via WA',
        hotelDetails: 'Tanpa Menginap / Custom Trip',
        notes: 'Suasana Alam Pedesaan Asri & Udara Segar di Kaki Selatan Rinjani'
      }
    ],
    highlights: [
      'Mengeksplor keindahan persawahan terasering hijau berlatar belakang Gunung Rinjani',
      'Trekking menyusuri gua dan Air Terjun Sarang Walet yang eksotis',
      'Melihat habitat monyet hitam endemik (black monkey) di kawasan hutan lindung',
      'Menikmati kopi lokal dan keramahan masyarakat desa Tetebatu'
    ],
    includes: [
      'Mobil AC + Driver BBM Seharian',
      'Antar-Jemput Lokasi Fleksibel',
      'Parkir dan Retribusi Wisata'
    ],
    excludes: [
      'Pengeluaran Pribadi'
    ]
  },

  // 6. CUSTOM TRIP & PRIVATE LOMBOK TOUR
  {
    id: 'tour-custom-lombok',
    title: 'CUSTOM TRIP & PERJALANAN SESUAI TUJUAN',
    categoryKey: 'internasional',
    duration: 'Fleksibel (1 - 7 Hari)',
    route: ['Pantai Pink (Tangsi)', 'Gili Nanggu Sekotong', 'Kota Mataram', 'Pelabuhan Lembar', 'Pelabuhan Kayangan', 'Seluruh Wilayah Lombok'],
    routeDisplay: 'Rute Fleksibel Sesuai Rencana Perjalanan Wisata Anda',
    image: '/dest_lombok.avif',
    badge: 'Custom Tour & Private Trip',
    minPrice: 'Hubungi Kami',
    tiers: [
      {
        busType: 'Toyota Avanza / Toyota Innova / Toyota Hiace',
        capacity: '2 - 15 Orang',
        pricePerPerson: 'Konsultasikan via WA',
        hotelDetails: 'Sesuai Pilihan Tamu',
        notes: 'Bebas Mengatur Itinerary Perjalanan dan Jam Penjemputan'
      }
    ],
    highlights: [
      'Pelanggan bebas menentukan tujuan perjalanan sesuai kebutuhan dan rencana wisata',
      'Didampingi driver lokal yang menguasai seluruh rute, spot kuliner, dan destinasi tersembunyi di Lombok',
      'Pilihan sewa harian dengan driver profesional untuk perjalanan wisata, keluarga, bisnis, atau dinas',
      'Proses konsultasi dan booking mudah langsung melalui WhatsApp Official'
    ],
    includes: [
      'Armada Pilihan (Avanza / Innova / Hiace) Kondisi Bersih & Prima',
      'Driver Lokal Berpengalaman + BBM',
      'Konsultasi Rekomendasi Rute Wisata Terbaik'
    ],
    excludes: [
      'Tiket Destinasi Khusus / Penyeberangan Kapal & Pengeluaran Pribadi'
    ]
  }
];
