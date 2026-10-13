import React, { useState } from 'react';
import { Calendar, ArrowRight, X } from 'lucide-react';

interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
}

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const articles: ArticleItem[] = [
    {
      id: 'senaru-sembalun',
      title: 'One Day Tour to Senaru and Sembalun',
      category: 'North & East Lombok Tour',
      date: 'August 2026',
      image: '/Gambar/senaru.avif',
      excerpt: 'Discover the lush twin waterfalls of Sendang Gile & Tiu Kelep in Senaru, followed by panoramic patchwork valley views at Selong Hill in Sembalun.',
      content: [
        'A full-day scenic tour to Senaru and Sembalun is one of the most rewarding day trips on Lombok Island. Starting early from your hotel or airport, you will head along the scenic coastline and mountain ridges directly to Senaru.',
        'In Senaru, located right at the foot of Mount Rinjani, you can walk through a tranquil tropical rainforest to reach Sendang Gile Waterfall, followed by the adventurous river trek to the thunderous Tiu Kelep Waterfall.',
        'After visiting the waterfalls, your driver will take you on a scenic winding mountain road to Sembalun. Here, you can hike up Bukit Selong for the iconic panoramic view over the multi-colored patchwork agricultural fields, sample sweet fresh strawberries, and enjoy the cool mountain climate.'
      ]
    },
    {
      id: 'popular-one-day-tour',
      title: 'Popular One Day Tour In Lombok',
      category: 'South Lombok & Mandalika',
      date: 'July 2026',
      image: '/Gambar/mandalika.avif',
      excerpt: 'Explore the iconic Pertamina Mandalika Circuit, the white pepper sands of Tanjung Aan, Merese Hill sunset point, and the authentic Sasak weaving villages.',
      content: [
        'South Lombok offers a fascinating blend of world-class motorsport culture, pristine turquoise ocean coves, and centuries-old indigenous Sasak traditions.',
        'This popular day tour takes you to Sukarara village to see traditional Songket hand-weaving, followed by Sade Village to learn about authentic Sasak architecture and bamboo homes.',
        'Next, explore Kuta Beach and the state-of-the-art Pertamina Mandalika International Circuit, before ending your day with panoramic sunset views over the Indian Ocean from Bukit Merese.'
      ]
    },
    {
      id: 'get-to-rinjani-from-bali',
      title: 'How to Get to Mount Rinjani from Bali?',
      category: 'Travel Logistics & Transfers',
      date: 'June 2026',
      image: '/Gambar/sembalun.avif',
      excerpt: 'Everything you need to know about fast boats from Padang Bai to Bangsal Harbor, and getting a comfortable direct private car transfer to Senaru or Sembalun.',
      content: [
        'Traveling from Bali to Mount Rinjani is a very popular journey for trekkers. The fastest and most convenient method is taking a morning speedboat from Padang Bai or Sanur directly to Bangsal Harbor in North Lombok.',
        'The boat trip takes approximately 1.5 to 2 hours. Upon arrival at Bangsal Harbor, having a pre-booked Lombok Local Transport driver waiting for you saves tremendous hassle with port touts.',
        'From Bangsal Harbor to Senaru is approximately 1.5 hours of smooth, scenic driving along the northern coastline. Your driver handles your luggage safely and brings you directly to your homestay or trekking operator headquarters.'
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading matching Flatsome theme */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#0766ad] mb-2 block">
            LOMBOK TRAVEL GUIDES
          </span>
          <h2 className="text-2xl sm:text-3xl font-lato font-bold text-[#111111] mb-3 uppercase tracking-wide">
            Our Blog's &amp; Travel Tips
          </h2>
          <div className="w-14 h-1 bg-[#0766ad] mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-neutral-600 font-lato leading-relaxed">
            Helpful route guides, itinerary ideas, and local logistics tips to ensure your Lombok trip is seamless and unforgettable.
          </p>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left"
            >
              <div>
                <div className="relative h-48 bg-neutral-100 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0766ad] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {art.category}
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{art.date}</span>
                  </div>

                  <h3 className="text-lg font-lato font-bold text-[#111111] group-hover:text-[#0766ad] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 font-lato leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <span className="text-xs font-bold text-[#0766ad] group-hover:text-[#ff6600] inline-flex items-center gap-1 transition-colors uppercase tracking-wider">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-bold text-[#0766ad] uppercase tracking-wider">
                {selectedArticle.category}
              </span>
              <h2 className="text-2xl font-lato font-bold text-[#111111] mt-1">
                {selectedArticle.title}
              </h2>
            </div>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            <div className="space-y-4 text-sm sm:text-base text-neutral-700 font-lato leading-relaxed">
              {selectedArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-500 font-medium">
                Want to book a driver for this route?
              </span>
              <a
                href={`https://wa.me/6281999344480?text=${encodeURIComponent(`Hello Lombok Local Transport, I read your article "${selectedArticle.title}" and would like to book a private tour for this route!`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1eb956] text-white font-lato font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded shadow"
              >
                <span>Consult Route on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
