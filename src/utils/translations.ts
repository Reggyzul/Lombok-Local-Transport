export interface TranslationSchema {
  // SEO & Head Metadata
  seo_title: string;
  seo_description: string;

  // Navigation
  nav_home: string;
  nav_about: string;
  nav_destinations: string;
  nav_rentals: string;
  nav_packages: string;
  nav_gallery: string;
  nav_contact: string;
  nav_book_btn: string;

  // Top Bar
  topbar_address: string;
  topbar_whatsapp: string;
  topbar_service: string;

  // Hero Section
  hero_explore: string;
  hero_title_1: string;
  hero_motto: string;
  hero_subtitle: string;
  hero_cta_wa: string;
  hero_cta_cars: string;
  search_dest_cat: string;
  search_travel_date: string;
  search_date_placeholder: string;
  search_btn: string;

  // Destinations Section & Page
  dest_tag: string;
  dest_title: string;
  dest_desc: string;
  dest_select_cat: string;
  dest_cat_subtitle: string;
  dest_cat_all: string;
  dest_cat_jabar: string;
  dest_cat_jateng: string;
  dest_cat_jatim: string;
  dest_cat_bali: string;
  dest_spots_label: string;
  dest_wa_consult: string;
  dest_view_all: string;
  dest_breadcrumb_home: string;
  dest_breadcrumb_page: string;

  // Package Tour Page
  pkg_tag: string;
  pkg_title: string;
  pkg_subtitle: string;
  pkg_filter_heading: string;
  pkg_filter_all: string;
  pkg_filter_domestik: string;
  pkg_filter_internasional: string;
  pkg_route_label: string;
  pkg_starting_from: string;
  pkg_per_person: string;
  pkg_detail_btn: string;
  pkg_modal_duration: string;
  pkg_modal_tier_title: string;
  pkg_modal_hotel: string;
  pkg_modal_notes: string;
  pkg_modal_highlights: string;
  pkg_modal_includes: string;
  pkg_modal_excludes: string;
  pkg_modal_selected: string;
  pkg_modal_wa_btn: string;

  // About Section & Page
  about_tag: string;
  about_title_1: string;
  about_title_2: string;
  about_desc_1: string;
  about_desc_2: string;
  about_read_more: string;
  about_read_less: string;
  about_badge: string;
  about_card_tag: string;
  about_card_sub: string;
  about_card_rating_label: string;

  // Vision
  vision_title: string;
  vision_1: string;
  vision_2: string;
  vision_3: string;

  // Mission
  mission_title: string;
  mission_1: string;
  mission_2: string;
  mission_3: string;
  mission_4: string;

  // Strengths
  strength_clean_title: string;
  strength_clean_desc: string;
  strength_driver_title: string;
  strength_driver_desc: string;
  strength_price_title: string;
  strength_price_desc: string;
  strength_time_title: string;
  strength_time_desc: string;

  // Cars Section
  cars_tag: string;
  cars_title: string;
  cars_desc: string;
  cars_seats: string;
  cars_transmission_auto: string;
  cars_transmission_manual: string;
  cars_included_label: string;
  cars_driver_friendly: string;
  cars_book_btn: string;

  // Steps
  steps_tag: string;
  steps_title: string;
  steps_desc: string;
  step_1_title: string;
  step_1_desc: string;
  step_2_title: string;
  step_2_desc: string;
  step_3_title: string;
  step_3_desc: string;

  // Testimonials
  testi_tag: string;
  testi_title: string;
  testi_desc: string;
  testi_rating_label: string;
  testi_rented_model: string;
  testi_btn_next: string;
  testi_btn_prev: string;

  // Booking Modal
  modal_title: string;
  modal_desc: string;
  modal_summary_base: string;
  modal_summary_total_days: string;
  modal_field_name: string;
  modal_field_phone: string;
  modal_field_date: string;
  modal_field_time: string;
  modal_field_duration: string;
  modal_field_extra_allin: string;
  modal_field_extra_detail: string;
  modal_field_address: string;
  modal_field_notes: string;
  modal_btn_confirm: string;
  modal_err_name: string;
  modal_err_phone: string;
  modal_err_address: string;

  // Footer Section
  footer_callout_badge: string;
  footer_callout_title: string;
  footer_callout_desc: string;
  footer_callout_wa_btn: string;
  footer_col1_desc: string;
  footer_motto_label: string;
  footer_motto_text: string;
  footer_address_title: string;
  footer_address_text: string;
  footer_wa_title: string;
  footer_quick_nav_title: string;
}

export const TRANSLATIONS: Record<'EN' | 'ID', TranslationSchema> = {
  EN: {
    // SEO & Head Metadata
    seo_title: "Lombok Local Transport | Car Rental & Tour Transport in Lombok",
    seo_description: "Lombok Local Transport - Local transportation and car rental service in Lombok (Avanza, Innova, Hiace). Serving airport transfers, Bangsal Port, Kuta Mandalika, Sembalun, Senaru, and Tetebatu.",

    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_destinations: "Routes & Services",
    nav_rentals: "Our Fleet",
    nav_packages: "Tour Routes",
    nav_gallery: "Gallery",
    nav_contact: "Contact & Address",
    nav_book_btn: "BOOK VIA WA",

    // Top Bar
    topbar_address: "📍 Karang Bajo, Bayan, North Lombok, West Nusa Tenggara 83354",
    topbar_whatsapp: "WA: +62 819-9934-4480",
    topbar_service: "Your Local Transport Partner in Lombok",

    // Hero Section
    hero_explore: "Explore Lombok with Comfort, Safety & Local Hospitality",
    hero_title_1: "LOMBOK LOCAL TRANSPORT",
    hero_motto: "“YOUR LOCAL TRANSPORT PARTNER IN LOMBOK”",
    hero_subtitle: "Your trusted local transportation and car rental service providing tour trips, airport/harbor pickups, and private transportation across Lombok, West Nusa Tenggara.",
    hero_cta_wa: "Chat on WhatsApp",
    hero_cta_cars: "Explore Our Fleet",
    search_dest_cat: "Select Travel Destination / Route",
    search_travel_date: "Planned Travel Date",
    search_date_placeholder: "When is your trip planned?",
    search_btn: "CONSULT TRIP VIA WA",

    // Destinations Section & Page
    dest_tag: "AREAS & POPULAR ROUTES",
    dest_title: "Popular Travel Routes Across Lombok",
    dest_desc: "Serving destinations including Senaru, Bangsal Harbor, Lombok International Airport (BIZAM), Kuta Mandalika, Sembalun, Tetebatu, and custom routes throughout Lombok.",
    dest_select_cat: "SELECT DESTINATION ROUTE",
    dest_cat_subtitle: "Explore Tropical Wonders in Lombok",
    dest_cat_all: "All Destinations",
    dest_cat_jabar: "Senaru & Sembalun",
    dest_cat_jateng: "Kuta Mandalika & South Coast",
    dest_cat_jatim: "Bangsal Harbor & Gilis",
    dest_cat_bali: "Tetebatu & Culture",
    dest_spots_label: "Key Highlights & Stops:",
    dest_wa_consult: "Consult Route via WA",
    dest_view_all: "View All Routes",
    dest_breadcrumb_home: "HOME",
    dest_breadcrumb_page: "ROUTES & SERVICES",

    // Package Tour Page
    pkg_tag: "TOP LOMBOK TOUR PACKAGES",
    pkg_title: "LOMBOK POPULAR TOUR & TRANSPORT PACKAGES",
    pkg_subtitle: "Customized travel packages to Senaru waterfalls, Sembalun highlands, Kuta Mandalika beach, Bangsal harbor, and Tetebatu valley.",
    pkg_filter_heading: "SELECT TOUR CATEGORY",
    pkg_filter_all: "All Tour Routes",
    pkg_filter_domestik: "Lombok Tourism Trips",
    pkg_filter_internasional: "Harbor & Airport Transfers",
    pkg_route_label: "Travel Route",
    pkg_starting_from: "Rates Starting From",
    pkg_per_person: "/ group",
    pkg_detail_btn: "View Details",
    pkg_modal_duration: "Duration",
    pkg_modal_tier_title: "FLEET & AMENITIES OPTIONS",
    pkg_modal_hotel: "Vehicle Unit",
    pkg_modal_notes: "Trip Notes",
    pkg_modal_highlights: "Highlights & Destinations",
    pkg_modal_includes: "Included",
    pkg_modal_excludes: "Excluded",
    pkg_modal_selected: "Selected Option",
    pkg_modal_wa_btn: "Book via WhatsApp",

    // About Section
    about_tag: "ABOUT LOMBOK LOCAL TRANSPORT",
    about_title_1: "LOMBOK LOCAL TRANSPORT",
    about_title_2: "Transport & Car Rental Service in Lombok",
    about_desc_1: "Lombok Local Transport is a local transport and car rental service catering to tour travel, airport & harbor transfers, and private transportation across Lombok, West Nusa Tenggara.",
    about_desc_2: "With choices of Toyota Avanza, Toyota Innova, and Toyota Hiace, Lombok Local Transport is the ideal choice for individuals, families, and group travelers heading to scenic tourist spots, ports, airports, and strategic areas in Lombok.",
    about_read_more: "Read More",
    about_read_less: "Close Details",
    about_badge: "BASED IN BAYAN, NORTH LOMBOK • EXPERIENCED LOCAL DRIVERS",
    about_card_tag: "LOMBOK LOCAL TRANSPORT",
    about_card_sub: "TRANSPORT & RENTAL",
    about_card_rating_label: "CUSTOMER SATISFACTION",

    // Vision
    vision_title: "Our Key Advantages",
    vision_1: "Local transport service rooted in Lombok, understanding every corner and shortcut across the island.",
    vision_2: "Prime fleet selection (Avanza, Innova, Hiace) tailored for individual, family, and group journeys.",
    vision_3: "Easy and direct booking via WhatsApp with friendly, dependable local drivers.",

    // Mission
    mission_title: "Core Services Offered",
    mission_1: "Car Rental for personal, family, or sightseeing journeys.",
    mission_2: "Airport Transfer to and from Lombok International Airport (BIZAM).",
    mission_3: "Harbor Transfer to and from ports, including Bangsal Harbor (Gili Islands).",
    mission_4: "Tour Transport & Custom Trips to Senaru, Sembalun, Mandalika, Tetebatu, etc.",

    // Strengths
    strength_clean_title: "Lombok Local Expertise",
    strength_clean_desc: "Authentic local drivers knowledgeable about routes, timings, and scenic viewpoints.",
    strength_driver_title: "Flexible Vehicle Options",
    strength_driver_desc: "Toyota Avanza for small groups, Toyota Innova for superior comfort, and Toyota Hiace for larger groups.",
    strength_price_title: "Strategic Coverage",
    strength_price_desc: "Serving airport, ferry ports (Bangsal, Lembar, Kayangan), and major attractions.",
    strength_time_title: "Easy WhatsApp Booking",
    strength_time_desc: "Simple booking format: Travel date → Passengers → Vehicle → Pickup location → Destination.",

    // Cars Section
    cars_tag: "OUR FLEET CATALOG",
    cars_title: "Vehicle Fleet Choices in Lombok",
    cars_desc: "Select from Toyota Avanza, Toyota Innova, and Toyota Hiace for individual, family, and group journeys.",
    cars_seats: "Seats",
    cars_transmission_auto: "Automatic",
    cars_transmission_manual: "Manual",
    cars_included_label: "Facilities & Features:",
    cars_driver_friendly: "Local Driver + Fuel Available",
    cars_book_btn: "Consult & Book via WA",

    // Steps
    steps_tag: "EASY BOOKING FLOW",
    steps_title: "How to Book Your Transport",
    steps_desc: "Fast and easy booking via WhatsApp. Simply send your travel details and our team will assist you immediately.",
    step_1_title: "Select Vehicle & Dates",
    step_1_desc: "Choose Avanza, Innova, or Hiace according to your group size and comfort preference.",
    step_2_title: "Send Booking Details",
    step_2_desc: "Share: Date → Passengers → Vehicle → Pickup Location → Destination via WhatsApp.",
    step_3_title: "Enjoy Your Lombok Trip",
    step_3_desc: "Our friendly local driver will pick you up promptly and guide you safely across Lombok.",

    // Testimonials
    testi_tag: "TRAVELER REVIEWS",
    testi_title: "Experiences with Lombok Local Transport",
    testi_desc: "Your safety, comfort, and satisfaction throughout Lombok are our top priorities.",
    testi_rating_label: "SATISFACTION RATING",
    testi_rented_model: "Vehicle / Route:",
    testi_btn_next: "Next",
    testi_btn_prev: "Previous",

    // Booking Modal
    modal_title: "TRIP RESERVATION FORM",
    modal_desc: "Fill in the details below to instantly format a WhatsApp booking request to Lombok Local Transport.",
    modal_summary_base: "Vehicle / Service",
    modal_summary_total_days: "Trip Duration",
    modal_field_name: "Customer Name",
    modal_field_phone: "WhatsApp Number",
    modal_field_date: "Travel Date",
    modal_field_time: "Pickup Time",
    modal_field_duration: "Duration (Days)",
    modal_field_extra_allin: "Include Driver & Fuel",
    modal_field_extra_detail: "Includes experienced local driver & estimated fuel for your route",
    modal_field_address: "Pickup Location (Airport / Hotel / Port)",
    modal_field_notes: "Travel Destination & Passenger Count",
    modal_btn_confirm: "Send Booking via WhatsApp ➔",
    modal_err_name: "Customer name is required.",
    modal_err_phone: "WhatsApp number is required.",
    modal_err_address: "Pickup location is required.",

    // Footer Section
    footer_callout_badge: "WHATSAPP TRIP CONSULTATION 24/7",
    footer_callout_title: "Plan Your Lombok Trip with Your Local Partner",
    footer_callout_desc: "Car rental, airport transfer, Bangsal harbor transfer, to Sembalun & Mandalika tours with Lombok Local Transport.",
    footer_callout_wa_btn: "WA: +62 819-9934-4480",
    footer_col1_desc: "Lombok Local Transport — Your Local Transport Partner in Lombok. Providing private car rental, group travel, and airport/port transfers based in Bayan, North Lombok.",
    footer_motto_label: "OUR TAGLINE",
    footer_motto_text: "“Your Local Transport Partner in Lombok”",
    footer_address_title: "Official Address:",
    footer_address_text: "Karang Bajo, Kecamatan Bayan, Kabupaten Lombok Utara, Nusa Tenggara Barat 83354",
    footer_wa_title: "WhatsApp Booking:",
    footer_quick_nav_title: "Quick Navigation"
  },
  ID: {
    // SEO & Head Metadata
    seo_title: "Lombok Local Transport | Transportasi & Rental Mobil di Lombok",
    seo_description: "Lombok Local Transport - Layanan transportasi dan rental mobil lokal di Lombok (Avanza, Innova, Hiace). Melayani antar-jemput bandara BIZAM, Pelabuhan Bangsal, Kuta Mandalika, Sembalun, Senaru, dan Tetebatu.",

    // Navigation
    nav_home: "Beranda",
    nav_about: "Tentang Kami",
    nav_destinations: "Area & Layanan",
    nav_rentals: "Pilihan Armada",
    nav_packages: "Rute Wisata",
    nav_gallery: "Galeri",
    nav_contact: "Kontak & Alamat",
    nav_book_btn: "PESAN VIA WA",

    // Top Bar
    topbar_address: "📍 Karang Bajo, Kec. Bayan, Lombok Utara, Nusa Tenggara Barat 83354",
    topbar_whatsapp: "WA: 0819-9934-4480",
    topbar_service: "Your Local Transport Partner in Lombok",

    // Hero Section
    hero_explore: "Transportasi & Rental Mobil Terpercaya di Lombok",
    hero_title_1: "LOMBOK LOCAL TRANSPORT",
    hero_motto: "“YOUR LOCAL TRANSPORT PARTNER IN LOMBOK”",
    hero_subtitle: "Layanan transportasi dan rental mobil lokal yang melayani kebutuhan perjalanan wisata, antar-jemput, serta transportasi pribadi di berbagai wilayah Lombok, Nusa Tenggara Barat.",
    hero_cta_wa: "Pesan via WhatsApp",
    hero_cta_cars: "Pilihan Armada",
    search_dest_cat: "Pilih Destinasi / Rute Perjalanan",
    search_travel_date: "Tanggal Rencana Perjalanan",
    search_date_placeholder: "Kapan rencana perjalanan Anda?",
    search_btn: "KONSULTASI PERJALANAN VIA WA",

    // Destinations Section & Page
    dest_tag: "AREA & RUTE LAYANAN",
    dest_title: "Rute & Destinasi Populer di Lombok",
    dest_desc: "Melayani perjalanan menuju Senaru, Pelabuhan Bangsal, Lombok International Airport (BIZAM), Kuta Mandalika, Sembalun, Tetebatu, dan berbagai tujuan lain di wilayah Lombok.",
    dest_select_cat: "PILIH DESTINASI WISATA",
    dest_cat_subtitle: "Eksplorasi Keindahan Alam & Pantai Lombok",
    dest_cat_all: "Semua Destinasi",
    dest_cat_jabar: "Senaru & Sembalun",
    dest_cat_jateng: "Kuta Mandalika & Pantai Selatan",
    dest_cat_jatim: "Pelabuhan Bangsal & Gili",
    dest_cat_bali: "Tetebatu & Budaya Sasak",
    dest_spots_label: "Highlight Destinasi:",
    dest_wa_consult: "Konsultasi Rute via WA",
    dest_view_all: "Lihat Semua Rute",
    dest_breadcrumb_home: "BERANDA",
    dest_breadcrumb_page: "AREA & LAYANAN",

    // Package Tour Page
    pkg_tag: "RUTE WISATA POPULER LOMBOK",
    pkg_title: "PAKET TRANSPORTASI & WISATA LOMBOK",
    pkg_subtitle: "Pilihan transportasi praktis untuk Senaru, Sembalun, Kuta Mandalika, Pelabuhan Bangsal, dan Tetebatu.",
    pkg_filter_heading: "PILIH KATEGORI RUTE",
    pkg_filter_all: "Semua Rute Wisata",
    pkg_filter_domestik: "Wisata Lombok",
    pkg_filter_internasional: "Transfer Bandara & Pelabuhan",
    pkg_route_label: "Rute Perjalanan",
    pkg_starting_from: "Mulai Dari",
    pkg_per_person: "/ rombongan",
    pkg_detail_btn: "Detail Rute",
    pkg_modal_duration: "Durasi Perjalanan",
    pkg_modal_tier_title: "PILIHAN ARMADA & FASILITAS",
    pkg_modal_hotel: "Pilihan Unit",
    pkg_modal_notes: "Catatan",
    pkg_modal_highlights: "Destinasi & Highlight Rute",
    pkg_modal_includes: "Termasuk (Include)",
    pkg_modal_excludes: "Tidak Termasuk (Exclude)",
    pkg_modal_selected: "Pilihan Terpilih",
    pkg_modal_wa_btn: "Pesan via WhatsApp",

    // About Section
    about_tag: "PROFIL LOMBOK LOCAL TRANSPORT",
    about_title_1: "LOMBOK LOCAL TRANSPORT",
    about_title_2: "Transportasi & Rental Mobil di Lombok",
    about_desc_1: "Lombok Local Transport adalah layanan transportasi dan rental mobil lokal yang melayani kebutuhan perjalanan wisata, antar-jemput, serta transportasi pribadi di berbagai wilayah Lombok, Nusa Tenggara Barat.",
    about_desc_2: "Dengan pilihan kendaraan Avanza, Innova, dan Hiace, Lombok Local Transport dapat menjadi pilihan untuk perjalanan individu, keluarga, maupun rombongan. Layanan mencakup perjalanan menuju berbagai destinasi wisata, pelabuhan, bandara, dan kawasan strategis di Lombok.",
    about_read_more: "Lihat Selengkapnya",
    about_read_less: "Tutup Detail",
    about_badge: "BERBASIS DI BAYAN, LOMBOK UTARA • SOPIR LOKAL BERPENGALAMAN",
    about_card_tag: "LOMBOK LOCAL TRANSPORT",
    about_card_sub: "TRANSPORT & RENTAL",
    about_card_rating_label: "KEPUASAN PELANGGAN",

    // Vision
    vision_title: "Keunggulan Lombok Local Transport",
    vision_1: "Berbasis layanan transportasi lokal Lombok asli yang menguasai seluruh rute dan destinasi terbaik pulau Lombok.",
    vision_2: "Pilihan armada terawat (Avanza, Innova, Hiace) untuk kenyamanan perjalanan individu, keluarga, hingga rombongan.",
    vision_3: "Pemesanan mudah melalui WhatsApp dan siap melayani berbagai titik transportasi penting (Bandara, Pelabuhan, Wisata).",

    // Mission
    mission_title: "Layanan yang Ditawarkan",
    mission_1: "Rental Mobil untuk kebutuhan perjalanan pribadi, keluarga, maupun wisata.",
    mission_2: "Airport Transfer dari dan menuju Lombok International Airport (BIZAM).",
    mission_3: "Pelabuhan Transfer menuju dan dari pelabuhan, termasuk kawasan Pelabuhan Bangsal.",
    mission_4: "Transportasi Wisata & Custom Trip menuju Senaru, Sembalun, Kuta Mandalika, dan Tetebatu.",

    // Strengths
    strength_clean_title: "Berbasis Layanan Lokal",
    strength_clean_desc: "Layanan transportasi lokal Lombok dengan driver ramah yang menguasai rute dan destinasi.",
    strength_driver_title: "Pilihan Armada Beragam",
    strength_driver_desc: "Toyota Avanza praktis, Toyota Innova nyaman jarak jauh, dan Toyota Hiace untuk rombongan.",
    strength_price_title: "Melayani Titik Penting",
    strength_price_desc: "Menghubungkan Bandara BIZAM, Pelabuhan Bangsal (Gili), Lembar, Kayangan, dan seluruh wisata Lombok.",
    strength_time_title: "Pemesanan Cepat via WA",
    strength_time_desc: "Format ringkas: Tanggal → Jumlah Penumpang → Kendaraan → Lokasi Jemput → Tujuan.",

    // Cars Section
    cars_tag: "KATALOG ARMADA",
    cars_title: "Pilihan Kendaraan Lombok Local Transport",
    cars_desc: "Pilihan kendaraan Avanza, Innova, dan Hiace untuk perjalanan individu, keluarga, maupun rombongan.",
    cars_seats: "Kursi",
    cars_transmission_auto: "Matic",
    cars_transmission_manual: "Manual",
    cars_included_label: "Fasilitas & Keunggulan:",
    cars_driver_friendly: "Sopir Berpengalaman + BBM",
    cars_book_btn: "Konsultasi & Pesan via WA",

    // Steps
    steps_tag: "CARA PEMESANAN",
    steps_title: "Alur Pemesanan Mudah via WhatsApp",
    steps_desc: "Untuk pemesanan, Anda cukup menghubungi WhatsApp dan menyampaikan format detail perjalanan.",
    step_1_title: "Tentukan Jadwal & Kendaraan",
    step_1_desc: "Pilih tanggal perjalanan dan armada yang diinginkan (Avanza, Innova, atau Hiace).",
    step_2_title: "Kirim Rincian Pemesanan via WA",
    step_2_desc: "Sampaikan: Tanggal → Jumlah Penumpang → Kendaraan → Lokasi Jemput → Tujuan.",
    step_3_title: "Nikmati Perjalanan di Lombok",
    step_3_desc: "Driver kami siap menjemput tepat waktu di bandara, pelabuhan, atau hotel Anda.",

    // Testimonials
    testi_tag: "ULASAN PELANGGAN",
    testi_title: "Pengalaman Bersama Lombok Local Transport",
    testi_desc: "Kenyamanan dan kepuasan perjalanan Anda di Pulau Lombok adalah prioritas utama kami.",
    testi_rating_label: "RATING KEPUASAN",
    testi_rented_model: "Armada / Rute:",
    testi_btn_next: "Selanjutnya",
    testi_btn_prev: "Sebelumnya",

    // Booking Modal
    modal_title: "FORM PEMESANAN PERJALANAN",
    modal_desc: "Isi formulir ini untuk membuat format pemesanan WhatsApp otomatis ke Lombok Local Transport.",
    modal_summary_base: "Kendaraan / Layanan",
    modal_summary_total_days: "Durasi Sewa",
    modal_field_name: "Nama Pemesan",
    modal_field_phone: "Nomor WhatsApp",
    modal_field_date: "Tanggal Perjalanan",
    modal_field_time: "Jam Penjemputan",
    modal_field_duration: "Durasi (Hari)",
    modal_field_extra_allin: "Termasuk Sopir & BBM",
    modal_field_extra_detail: "Termasuk pengemudi lokal berpengalaman & estimasi bahan bakar",
    modal_field_address: "Lokasi Penjemputan (Bandara / Pelabuhan / Hotel)",
    modal_field_notes: "Tujuan Perjalanan & Jumlah Penumpang",
    modal_btn_confirm: "Kirim Pemesanan via WhatsApp ➔",
    modal_err_name: "Nama pemesan wajib diisi.",
    modal_err_phone: "Nomor WhatsApp wajib diisi.",
    modal_err_address: "Lokasi penjemputan wajib diisi.",

    // Footer Section
    footer_callout_badge: "KONSULTASI PERJALANAN 24/7",
    footer_callout_title: "Rencanakan Perjalanan Anda di Lombok Bersama Kami",
    footer_callout_desc: "Rental mobil, antar-jemput bandara BIZAM, Pelabuhan Bangsal, hingga trip Senaru, Sembalun & Mandalika.",
    footer_callout_wa_btn: "WA: 0819-9934-4480",
    footer_col1_desc: "Lombok Local Transport — Layanan transportasi dan rental mobil lokal yang melayani kebutuhan perjalanan wisata, antar-jemput, serta transportasi pribadi di berbagai wilayah Lombok, Nusa Tenggara Barat.",
    footer_motto_label: "TAGLINE KAMI",
    footer_motto_text: "“Your Local Transport Partner in Lombok”",
    footer_address_title: "Alamat Kantor:",
    footer_address_text: "Karang Bajo, Kecamatan Bayan, Kabupaten Lombok Utara, Nusa Tenggara Barat 83354",
    footer_wa_title: "Kontak WhatsApp:",
    footer_quick_nav_title: "Navigasi Cepat"
  }
};

// AUTOMATED 1:1 KEY VALIDATION
(() => {
  const enKeys = Object.keys(TRANSLATIONS.EN) as Array<keyof TranslationSchema>;
  const idKeys = Object.keys(TRANSLATIONS.ID) as Array<keyof TranslationSchema>;

  const missingInID = enKeys.filter(k => !(k in TRANSLATIONS.ID));
  const missingInEN = idKeys.filter(k => !(k in TRANSLATIONS.EN));

  if (missingInID.length > 0) {
    console.error('CRITICAL I18N ERROR: Missing keys in ID dictionary:', missingInID);
  }
  if (missingInEN.length > 0) {
    console.error('CRITICAL I18N ERROR: Missing keys in EN dictionary:', missingInEN);
  }
})();

export function getTranslation(lang: 'EN' | 'ID', key: keyof TranslationSchema): string {
  const dict = TRANSLATIONS[lang];
  if (!dict || !dict[key]) {
    console.error(`MISSING TRANSLATION KEY: [${lang}] "${key}"`);
    return TRANSLATIONS.EN[key] || key;
  }
  return dict[key];
}
