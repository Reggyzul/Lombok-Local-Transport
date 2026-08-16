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
    category: 'Practical MPV',
    pricePerDay: 0,
    priceDisplay: 'Contact Us',
    image: '/Gambar/avanza.avif',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Petrol',
    includeList: [
      'Practical choice for families & solo travelers',
      'Accommodates up to 6–7 passengers comfortably',
      'Dual blower air conditioning for a cool ride',
      'Clean, fresh & well-maintained interior',
      'Friendly, punctual, and licensed local driver'
    ],
    description: 'A practical vehicle choice for family vacations or private travel with smaller group sizes exploring Lombok.',
    rating: 4.9,
    reviewsCount: 142,
    specifications: [
      { label: 'Capacity', value: '6 - 7 Passengers' },
      { label: 'Ideal For', value: 'Private Trips, Family Tours & Airport Transfers' },
      { label: 'Services', value: 'With Driver / Daily Rental / Drop-Off' }
    ]
  },

  // 2. TOYOTA INNOVA
  {
    id: 'innova',
    name: 'Toyota Innova',
    category: 'Comfortable MPV',
    pricePerDay: 0,
    priceDisplay: 'Contact Us',
    image: '/Gambar/innova3.avif',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Diesel / Petrol',
    includeList: [
      'Superior ride comfort for long-distance scenic travel',
      'Smooth suspension & quiet premium cabin acoustics',
      'Multi-zone air conditioning across all seating rows',
      'Generous luggage capacity for suitcases & gear',
      'Experienced driver for mountain & coastal roads'
    ],
    description: 'A higher-comfort vehicle ideal for long-distance scenic journeys and family holidays across Lombok.',
    rating: 5.0,
    reviewsCount: 168,
    specifications: [
      { label: 'Capacity', value: '7 Passengers' },
      { label: 'Key Feature', value: 'Long-Distance Comfort & Family Touring' },
      { label: 'Services', value: 'Sembalun, Senaru, Mandalika, Airport Transfer' }
    ]
  },

  // 3. TOYOTA HIACE
  {
    id: 'hiace',
    name: 'Toyota Hiace',
    category: 'Group Transportation',
    pricePerDay: 0,
    priceDisplay: 'Contact Us',
    image: '/Gambar/hiace.avif',
    seats: 15,
    transmission: 'Manual',
    fuel: 'Diesel',
    includeList: [
      'Spacious seating capacity for 12–15 passengers',
      'Ergonomic reclining seats & generous legroom',
      'Central ducting cold air conditioning at each row',
      'High-quality audio & multimedia entertainment',
      'Professional group driver experienced in Lombok tours'
    ],
    description: 'Perfect for group journeys, extended family vacations, and tour groups requiring higher seating capacity across Lombok.',
    rating: 5.0,
    reviewsCount: 195,
    specifications: [
      { label: 'Capacity', value: '12 - 15 Passengers' },
      { label: 'Suitable For', value: 'Group Tours, Family Gatherings & Corporate' },
      { label: 'Amenities', value: 'Full AC Ducting, Audio, Reclining Seats' }
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Mr. David & Family',
    roleEN: 'Family Vacation - Australia',
    roleID: 'Family Vacation - Australia',
    textEN: 'Outstanding service from Lombok Local Transport! The Toyota Innova was spotless and extremely comfortable for our journey to Sembalun and Senaru. The driver knew every scenic viewpoint and was punctual and welcoming.',
    textID: 'Outstanding service from Lombok Local Transport! The Toyota Innova was spotless and extremely comfortable for our journey to Sembalun and Senaru. The driver knew every scenic viewpoint and was punctual and welcoming.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    carModelEN: 'Toyota Innova',
    carModelID: 'Toyota Innova',
    dateEN: 'August 2026',
    dateID: 'August 2026'
  },
  {
    id: 'testi-2',
    name: 'Ms. Sarah & Travel Group',
    roleEN: 'Group Holiday - Singapore',
    roleID: 'Group Holiday - Singapore',
    textEN: 'We booked the Toyota Hiace for our group transfer from Lombok International Airport to Bangsal Port for the Gili Islands and Kuta Mandalika. Very roomy, freezing cold AC, and WhatsApp communication was seamless!',
    textID: 'We booked the Toyota Hiace for our group transfer from Lombok International Airport to Bangsal Port for the Gili Islands and Kuta Mandalika. Very roomy, freezing cold AC, and WhatsApp communication was seamless!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    carModelEN: 'Toyota Hiace',
    carModelID: 'Toyota Hiace',
    dateEN: 'July 2026',
    dateID: 'July 2026'
  },
  {
    id: 'testi-3',
    name: 'Hendrik & Partner',
    roleEN: 'Couples Road Trip - Germany',
    roleID: 'Couples Road Trip - Germany',
    textEN: 'Rented the Toyota Avanza for 3 days exploring Senaru waterfalls, Tetebatu rice terraces, and Senggigi beach. Reliable local transport partner in Lombok with helpful driver sharing authentic local tips.',
    textID: 'Rented the Toyota Avanza for 3 days exploring Senaru waterfalls, Tetebatu rice terraces, and Senggigi beach. Reliable local transport partner in Lombok with helpful driver sharing authentic local tips.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    carModelEN: 'Toyota Avanza',
    carModelID: 'Toyota Avanza',
    dateEN: 'June 2026',
    dateID: 'June 2026'
  }
];
