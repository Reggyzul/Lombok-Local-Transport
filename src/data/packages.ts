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
  // 1. SENARU & RINJANI WATERFALLS
  {
    id: 'tour-senaru',
    title: 'SENARU WATERFALLS & RINJANI FOOTHILL TOUR',
    categoryKey: 'domestik',
    duration: 'Full Day',
    route: ['Senaru Traditional Village', 'Sendang Gile Waterfall', 'Tiu Kelep Waterfall', 'Rinjani National Park Gateway', 'Local Culinary Stop'],
    routeDisplay: 'Mataram/Airport/Bangsal - Senaru - Sendang Gile - Tiu Kelep',
    image: '/Gambar/senaru.jpg',
    badge: 'Waterfalls & Nature',
    minPrice: 'Contact Us',
    tiers: [
      {
        busType: 'Toyota Avanza / Toyota Innova / Toyota Hiace',
        capacity: '2 - 15 Persons',
        pricePerPerson: 'Consult via WhatsApp',
        hotelDetails: 'Day Trip / Tailored Itinerary',
        notes: 'Includes Entrance Tickets & Local Waterfall Guide'
      }
    ],
    highlights: [
      'Experience the majesty of Sendang Gile & Tiu Kelep waterfalls nestled in the tropical jungle of Mount Rinjani',
      'Trek through lush rainforest paths and natural river crossings',
      'Visit the ancient traditional Sasak village in Senaru, North Lombok',
      'Ideal for nature lovers, families, couples, and photography enthusiasts'
    ],
    includes: [
      'Full AC Vehicle (Toyota Avanza / Toyota Innova / Toyota Hiace)',
      'Experienced English-Friendly Local Driver + Fuel',
      'Hotel / Port / Airport Pickup & Drop-Off',
      'Attraction Entrance Tickets & Parking Fees'
    ],
    excludes: [
      'Personal Expenses & Driver / Guide Tipping'
    ]
  },

  // 2. SEMBALUN HIGHLAND
  {
    id: 'tour-sembalun',
    title: 'SEMBALUN HIGHLAND & RINJANI PANORAMA TOUR',
    categoryKey: 'domestik',
    duration: 'Full Day',
    route: ['Selong Hill Viewpoint', 'Beleq Ancient Sasak Village', 'Fresh Strawberry Picking Farm', 'Pusuk Sembalun Rinjani View', 'Sembalun Valley Flowers'],
    routeDisplay: 'Mataram/Airport - Sembalun Valley - Selong Hill - Pusuk Sembalun',
    image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&q=80&w=1200',
    badge: 'Cool Mountain Highland',
    minPrice: 'Contact Us',
    tiers: [
      {
        busType: 'Toyota Avanza / Toyota Innova / Toyota Hiace',
        capacity: '2 - 15 Persons',
        pricePerPerson: 'Consult via WhatsApp',
        hotelDetails: 'Day Trip / Sembalun Resort Drop-Off',
        notes: 'Crisp Mountain Breeze & Iconic Instagrammable Rinjani Photo Spots'
      }
    ],
    highlights: [
      'Breathtaking panorama of the colorful patchwork valley from the peak of Selong Hill',
      'Panoramic view of Mount Rinjani from Pusuk Sembalun pass',
      'Pick fresh organic strawberries directly at local hillside agro-farms',
      'Discover ancient architecture and heritage at Desa Beleq'
    ],
    includes: [
      'Well-Maintained AC Vehicle + Local Driver & Fuel',
      'Entrance Tickets to All Sembalun Attractions',
      'Complimentary Bottled Mineral Water'
    ],
    excludes: [
      'Personal Expenses & Lunch'
    ]
  },

  // 3. KUTA MANDALIKA & SOUTH BEACHES
  {
    id: 'tour-mandalika',
    title: 'KUTA MANDALIKA & SOUTH LOMBOK BEACH TOUR',
    categoryKey: 'domestik',
    duration: 'Full Day',
    route: ['Pertamina Mandalika International Circuit', 'Kuta Mandalika Beach', 'Tanjung Aan Beach', 'Merese Hill Sunset Point', 'Sade & Sukarara Traditional Weaving Villages'],
    routeDisplay: 'Airport/Mataram - Mandalika Circuit - Tanjung Aan - Merese Hill',
    image: '/Gambar/mandalika.jpg',
    badge: 'Beach & Mandalika Circuit',
    minPrice: 'Contact Us',
    tiers: [
      {
        busType: 'Toyota Avanza / Toyota Innova / Toyota Hiace',
        capacity: '2 - 15 Persons',
        pricePerPerson: 'Consult via WhatsApp',
        hotelDetails: 'Kuta Mandalika Resort / Mataram Hotel Drop-Off',
        notes: 'Exotic Sunset at Merese Hill & Unique Pepper-Sand Beach'
      }
    ],
    highlights: [
      'Visit the world-renowned Pertamina Mandalika International MotoGP Circuit',
      'Relax at Tanjung Aan Beach with its distinctive white pepper sand and turquoise waters',
      'Catch a spectacular sunset over the Indian Ocean from the rolling hills of Merese Hill',
      'Learn about authentic Sasak weaving culture at Sade and Sukarara villages'
    ],
    includes: [
      'Clean Air-Conditioned Vehicle + Driver & Fuel',
      'Airport (BIZAM) or Hotel Pickup & Drop-Off',
      'Parking & Tourism Area Donation Fees'
    ],
    excludes: [
      'Personal Expenses & Meals'
    ]
  },

  // 4. BANGSAL PORT & GILI ISLANDS TRANSFER
  {
    id: 'tour-bangsal-gili',
    title: 'BANGSAL HARBOR & GILI ISLANDS TRANSFER',
    categoryKey: 'internasional',
    duration: 'One Way / Full Day',
    route: ['Lombok Airport (BIZAM)', 'Mataram / Senggigi', 'Bangsal Harbor', 'Teluk Nara Speedboat Pier', 'Gili Trawangan / Meno / Air Connection'],
    routeDisplay: 'Airport BIZAM / Mataram - Bangsal Harbor (Gili Ferry Point)',
    image: '/Gambar/bangsal.jpg',
    badge: 'Airport & Harbor Transfer',
    minPrice: 'Contact Us',
    tiers: [
      {
        busType: 'Toyota Avanza / Toyota Innova / Toyota Hiace',
        capacity: '2 - 15 Persons',
        pricePerPerson: 'Consult via WhatsApp',
        hotelDetails: 'Direct Transfer to / from Port',
        notes: 'Main Gateway for Gili Trawangan, Gili Meno, and Gili Air'
      }
    ],
    highlights: [
      'Punctual door-to-door transfer from Lombok International Airport (BIZAM) to Bangsal Harbor',
      'Reliable transport from Senggigi, Mataram, or Senaru directly to the port',
      'Flexible vehicle sizing suitable for couples, families, or group tours with ample luggage',
      'Friendly local driver assisting with luggage and boat terminal navigation'
    ],
    includes: [
      'Comfortable AC Vehicle + Experienced Driver & Fuel',
      'Punctual Door-to-Door Pickup Service',
      'Luggage Handling Assistance'
    ],
    excludes: [
      'Public Boat / Private Speedboat Crossing Tickets'
    ]
  },

  // 5. TETEBATU NATURE & RICE TERRACES
  {
    id: 'tour-tetebatu',
    title: 'TETEBATU ECO-NATURE & RICE TERRACE TOUR',
    categoryKey: 'domestik',
    duration: 'Full Day',
    route: ['Tetebatu UNWTO Village', 'Cascading Rice Terraces', 'Sarang Walet Waterfall', 'Black Monkey Rainforest Sanctuary', 'East Lombok Countryside'],
    routeDisplay: 'Mataram/Airport/Kuta - Tetebatu - Sarang Walet - Rice Terraces',
    image: '/Gambar/tetebatu.jpg',
    badge: 'UNWTO Best Tourism Village',
    minPrice: 'Contact Us',
    tiers: [
      {
        busType: 'Toyota Avanza / Toyota Innova / Toyota Hiace',
        capacity: '2 - 15 Persons',
        pricePerPerson: 'Consult via WhatsApp',
        hotelDetails: 'Day Trip / Private Itinerary',
        notes: 'Tranquil Countryside & Fresh Mountain Air on the South Slope of Rinjani'
      }
    ],
    highlights: [
      'Wander through picturesque emerald terraced rice fields with Mount Rinjani backdrop',
      'Explore hidden caves and refreshing waters at Sarang Walet Waterfall',
      'Spot the rare endemic black monkeys in their protected tropical forest sanctuary',
      'Savor authentic local Lombok robusta coffee and village hospitality'
    ],
    includes: [
      'Full Day AC Vehicle + Local Driver & Fuel',
      'Flexible Pickup & Drop-Off Locations',
      'Parking & Village Entrance Retribution'
    ],
    excludes: [
      'Personal Expenses'
    ]
  },

  // 6. CUSTOM TRIP & PRIVATE LOMBOK TOUR
  {
    id: 'tour-custom-lombok',
    title: 'CUSTOM TRIP & TAILORED PRIVATE ITINERARY',
    categoryKey: 'internasional',
    duration: 'Flexible (1 - 7 Days)',
    route: ['Pink Beach (Tangsi)', 'Gili Nanggu & Sekotong', 'Mataram City', 'Lembar Ferry Port', 'Kayangan Port', 'Any Destination in Lombok'],
    routeDisplay: 'Flexible Itinerary Tailored to Your Personal Travel Plan',
    image: '/dest_lombok.avif',
    badge: 'Private & Custom Tour',
    minPrice: 'Contact Us',
    tiers: [
      {
        busType: 'Toyota Avanza / Toyota Innova / Toyota Hiace',
        capacity: '2 - 15 Persons',
        pricePerPerson: 'Consult via WhatsApp',
        hotelDetails: 'Client Selected Hotels / Resorts',
        notes: 'Full Freedom to Customize Stops, Timing, and Pickups'
      }
    ],
    highlights: [
      'Guests have total freedom to customize travel routes and schedule according to holiday plans',
      'Accompanied by a dedicated local driver who knows all shortcuts, hidden gems, and dining spots',
      'Daily rental option with professional driver for leisure, family vacations, or business trips',
      'Fast, straightforward consultation and booking directly via official WhatsApp'
    ],
    includes: [
      'Choice Fleet (Toyota Avanza / Toyota Innova / Toyota Hiace) in Spotless Condition',
      'Licensed Local Driver + Fuel',
      'Free Route Consultation & Recommendations'
    ],
    excludes: [
      'Special Attraction Tickets / Boat Charters & Personal Expenses'
    ]
  }
];
