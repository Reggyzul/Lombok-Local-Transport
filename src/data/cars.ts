import { Car } from '../types';

export interface TestimonialItem {
  id: string;
  name: string;
  roleEN: string;
  roleID: string;
  textEN: string;
  textID: string;
  rating: number;
  image: string;
  carModelEN: string;
  carModelID: string;
  dateEN: string;
  dateID: string;
}

export const CARS: Car[] = [
  // 1. TOYOTA AVANZA
  {
    id: 'avanza',
    name: 'Toyota Avanza',
    category: 'MPV Praktis',
    pricePerDay: 0,
    priceDisplay: 'Hubungi Kami',
    image: '/Gambar/avanza.avif',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin',
    includeList: [
      'Pilihan praktis untuk keluarga & pribadi',
      'Kapasitas hingga 6-7 penumpang',
      'AC Double Blower sejuk dan dingin',
      'Interior bersih, harum & terawat',
      'Sopir lokal ramah & tepat waktu'
    ],
    description: 'Pilihan praktis untuk perjalanan keluarga maupun perjalanan pribadi dengan jumlah penumpang yang lebih sedikit.',
    rating: 4.9,
    reviewsCount: 142,
    specifications: [
      { label: 'Kapasitas', value: '6 - 7 Penumpang' },
      { label: 'Cocok Untuk', value: 'Perjalanan Pribadi, Keluarga & Airport' },
      { label: 'Layanan', value: 'Dengan Sopir / Sewa Harian / Drop-Off' }
    ]
  },

  // 2. TOYOTA INNOVA
  {
    id: 'innova',
    name: 'Toyota Innova',
    category: 'MPV Nyaman',
    pricePerDay: 0,
    priceDisplay: 'Hubungi Kami',
    image: '/Gambar/innova3.avif',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Diesel / Bensin',
    includeList: [
      'Kenyamanan ekstra untuk perjalanan jarak jauh',
      'Suspensi empuk & kabin senyap berkelas',
      'AC Dingin merata ke semua baris kursi',
      'Bagasi luas untuk koper & perlengkapan wisata',
      'Driver berpengalaman rute pegunungan & pantai'
    ],
    description: 'Pilihan kendaraan yang lebih nyaman untuk perjalanan jarak jauh maupun perjalanan wisata bersama keluarga.',
    rating: 5.0,
    reviewsCount: 168,
    specifications: [
      { label: 'Kapasitas', value: '7 Penumpang' },
      { label: 'Keunggulan', value: 'Kenyamanan Jarak Jauh & Wisata Keluarga' },
      { label: 'Layanan', value: 'Wisata Sembalun, Senaru, Mandalika, Bandara' }
    ]
  },

  // 3. TOYOTA HIACE
  {
    id: 'hiace',
    name: 'Toyota Hiace',
    category: 'Transportasi Rombongan',
    pricePerDay: 0,
    priceDisplay: 'Hubungi Kami',
    image: '/Gambar/hiace.avif',
    seats: 15,
    transmission: 'Manual',
    fuel: 'Diesel',
    includeList: [
      'Kapasitas lega untuk 12-15 penumpang',
      'Reclining seats & ruang kaki ekstra luas',
      'Full AC Ducting dingin di setiap baris',
      'Audio entertainment & multimedia',
      'Sopir profesional berpengalaman rombongan'
    ],
    description: 'Cocok untuk perjalanan bersama rombongan, wisata keluarga, maupun kebutuhan transportasi dengan kapasitas penumpang lebih banyak.',
    rating: 5.0,
    reviewsCount: 195,
    specifications: [
      { label: 'Kapasitas', value: '12 - 15 Penumpang' },
      { label: 'Peruntukan', value: 'Rombongan Keluarga, Tour Group & Kantor' },
      { label: 'Fasilitas', value: 'Full AC Ducting, Audio, Reclining Seats' }
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Bpk. Rizky Pratama & Keluarga',
    roleEN: 'Family Vacation - Jakarta',
    roleID: 'Wisata Keluarga - Jakarta',
    textEN: 'Excellent service from Lombok Local Transport! The Toyota Innova was very clean and comfortable for our trip to Sembalun and Senaru. The driver was knowledgeable, punctual, and very polite.',
    textID: 'Pelayanan sangat memuaskan dari Lombok Local Transport! Unit Toyota Innova sangat bersih dan nyaman untuk perjalanan kami sekeluarga ke Sembalun dan Senaru. Driver sangat menguasai rute dan ramah!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    carModelEN: 'Toyota Innova',
    carModelID: 'Toyota Innova',
    dateEN: 'August 2026',
    dateID: 'Agustus 2026'
  },
  {
    id: 'testi-2',
    name: 'Ibu Ratna & Rombongan',
    roleEN: 'Group Tour - Surabaya',
    roleID: 'Rombongan Wisata - Surabaya',
    textEN: 'We booked Toyota Hiace for group transfer from Lombok International Airport to Bangsal Port for Gili Trawangan and Kuta Mandalika. The ride was smooth, air conditioning very cold, and the price was transparent!',
    textID: 'Kami menyewa Toyota Hiace untuk rombongan dari Bandara BIZAM ke Pelabuhan Bangsal (menuju Gili Trawangan) dan Kuta Mandalika. Mobilnya lega, AC dingin, dan komunikasi via WhatsApp sangat responsif!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    carModelEN: 'Toyota Hiace',
    carModelID: 'Toyota Hiace',
    dateEN: 'July 2026',
    dateID: 'Juli 2026'
  },
  {
    id: 'testi-3',
    name: 'Hendrik & Partner',
    roleEN: 'Holiday Trip - Bandung',
    roleID: 'Liburan & Tour - Bandung',
    textEN: 'Used Toyota Avanza for 3 days exploring Senaru waterfalls, Tetebatu, and Senggigi beach. Reliable local transport partner in Lombok with helpful driver.',
    textID: 'Sewa Toyota Avanza 3 hari untuk eksplor air terjun di Senaru, sawah Tetebatu, dan Pantai Senggigi. Driver lokal sangat membantu memberikan rekomendasi kuliner dan spot foto terbaik.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    carModelEN: 'Toyota Avanza',
    carModelID: 'Toyota Avanza',
    dateEN: 'June 2026',
    dateID: 'Juni 2026'
  }
];
