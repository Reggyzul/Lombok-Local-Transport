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

const ENGLISH_TRANSLATIONS: TranslationSchema = {
  // SEO & Head Metadata
  seo_title: "Lombok Local Transport | Car Rental & Tour Transport in Lombok",
  seo_description: "Lombok Local Transport - Premier local transportation and car rental service in Lombok (Toyota Avanza, Toyota Innova, Toyota Hiace). Serving airport transfers (BIZAM), Bangsal Port, Kuta Mandalika, Sembalun, Senaru, and Tetebatu.",

  // Navigation
  nav_home: "Home",
  nav_about: "About Us",
  nav_destinations: "Routes & Services",
  nav_rentals: "Our Fleet",
  nav_packages: "Tour Routes",
  nav_gallery: "Gallery",
  nav_contact: "Contact & Address",
  nav_book_btn: "BOOK VIA WHATSAPP",

  // Top Bar
  topbar_address: "📍 Karang Bajo, Bayan District, North Lombok Regency, West Nusa Tenggara 83354",
  topbar_whatsapp: "WA: +62 819-9934-4480",
  topbar_service: "Your Local Transport Partner in Lombok",

  // Hero Section
  hero_explore: "Explore Lombok with Comfort, Safety & Local Hospitality",
  hero_title_1: "LOMBOK LOCAL TRANSPORT",
  hero_motto: "“YOUR LOCAL TRANSPORT PARTNER IN LOMBOK”",
  hero_subtitle: "Your trusted local transportation and car rental service providing tour trips, airport/port pickups, and private transportation across Lombok, West Nusa Tenggara.",
  hero_cta_wa: "Chat on WhatsApp",
  hero_cta_cars: "Explore Our Fleet",
  search_dest_cat: "Select Travel Destination / Route",
  search_travel_date: "Planned Travel Date",
  search_date_placeholder: "When is your trip planned?",
  search_btn: "CONSULT TRIP VIA WHATSAPP",

  // Destinations Section & Page
  dest_tag: "AREAS & POPULAR ROUTES",
  dest_title: "Popular Travel Routes Across Lombok",
  dest_desc: "Serving destinations including Senaru, Bangsal Harbor, Lombok International Airport (BIZAM), Kuta Mandalika, Sembalun, Tetebatu, and custom routes throughout Lombok.",
  dest_select_cat: "SELECT DESTINATION ROUTE",
  dest_cat_subtitle: "Explore Tropical Wonders in Lombok",
  dest_cat_all: "All Destinations",
  dest_cat_jabar: "Senaru & Sembalun",
  dest_cat_jateng: "Kuta Mandalika & South Coast",
  dest_cat_jatim: "Bangsal Harbor & Gili Islands",
  dest_cat_bali: "Tetebatu & Cultural Heritage",
  dest_spots_label: "Key Highlights & Stops:",
  dest_wa_consult: "Consult Route via WhatsApp",
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
  vision_1: "Local transport service rooted in Lombok, understanding every corner and scenic route across the island.",
  vision_2: "Prime fleet selection (Toyota Avanza, Toyota Innova, Toyota Hiace) tailored for individual, family, and group journeys.",
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
  strength_time_desc: "Simple booking format: Travel Date → Passenger Count → Vehicle → Pickup Location → Destination.",

  // Cars Section
  cars_tag: "OUR FLEET CATALOG",
  cars_title: "Vehicle Fleet Choices in Lombok",
  cars_desc: "Select from Toyota Avanza, Toyota Innova, and Toyota Hiace for individual, family, and group journeys.",
  cars_seats: "Seats",
  cars_transmission_auto: "Automatic",
  cars_transmission_manual: "Manual",
  cars_included_label: "Facilities & Features:",
  cars_driver_friendly: "Local Driver + Fuel Included",
  cars_book_btn: "Consult & Book via WhatsApp",

  // Steps
  steps_tag: "EASY BOOKING FLOW",
  steps_title: "How to Book Your Transport",
  steps_desc: "Fast and easy booking via WhatsApp. Simply send your travel details and our team will assist you immediately.",
  step_1_title: "Select Vehicle & Dates",
  step_1_desc: "Choose Toyota Avanza, Toyota Innova, or Toyota Hiace according to your group size and comfort preference.",
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
  footer_callout_wa_btn: "WhatsApp: +62 819-9934-4480",
  footer_col1_desc: "Lombok Local Transport — Your Local Transport Partner in Lombok. Providing private car rental, group travel, and airport/port transfers based in Bayan, North Lombok.",
  footer_motto_label: "OUR TAGLINE",
  footer_motto_text: "“Your Local Transport Partner in Lombok”",
  footer_address_title: "Official Address:",
  footer_address_text: "Karang Bajo, Bayan District, North Lombok Regency, West Nusa Tenggara 83354",
  footer_wa_title: "WhatsApp Booking:",
  footer_quick_nav_title: "Quick Navigation"
};

export const TRANSLATIONS: Record<'EN' | 'ID', TranslationSchema> = {
  EN: ENGLISH_TRANSLATIONS,
  ID: ENGLISH_TRANSLATIONS
};

export function getTranslation(lang: 'EN' | 'ID', key: keyof TranslationSchema): string {
  return ENGLISH_TRANSLATIONS[key] || key;
}
