import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface ArticleItem {
  id: string;
  title: string;
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
      date: 'July 7, 2026',
      image: '/Gambar/senaru.avif',
      excerpt: 'Mount Rinjani is the crown jewel of Lombok, but you do not need to hike for three days to experience its breathtaking beauty. A one day tour to Senaru and Sembalun gives you the perfect taste of northern Lombok waterfalls and mountain valleys.',
      content: [
        'A full-day scenic tour to Senaru and Sembalun is one of the most rewarding day trips on Lombok Island. Starting early from your hotel or airport, you will head along the scenic coastline and mountain ridges directly to Senaru.',
        'In Senaru, located right at the foot of Mount Rinjani, you can walk through a tranquil tropical rainforest to reach Sendang Gile Waterfall, followed by the adventurous river trek to the thunderous Tiu Kelep Waterfall.',
        'After visiting the waterfalls, your driver will take you on a scenic winding mountain road to Sembalun. Here, you can hike up Bukit Selong for the iconic panoramic view over the multi-colored patchwork agricultural fields, sample sweet fresh strawberries, and enjoy the cool mountain climate.'
      ]
    },
    {
      id: 'popular-one-day-tour',
      title: 'Popular One Day Tour In Lombok',
      date: 'July 7, 2026',
      image: '/Gambar/mandalika.avif',
      excerpt: 'South Lombok offers a fascinating blend of world-class motorsport culture, pristine turquoise ocean coves, and centuries-old indigenous Sasak traditions. Explore the highlights with a flexible private day trip.',
      content: [
        'South Lombok offers a fascinating blend of world-class motorsport culture, pristine turquoise ocean coves, and centuries-old indigenous Sasak traditions.',
        'This popular day tour takes you to Sukarara village to see traditional Songket hand-weaving, followed by Sade Village to learn about authentic Sasak architecture and bamboo homes.',
        'Next, explore Kuta Beach and the state-of-the-art Pertamina Mandalika International Circuit, before ending your day with panoramic sunset views over the Indian Ocean from Bukit Merese.'
      ]
    },
    {
      id: 'get-to-rinjani-from-bali',
      title: 'How to Get to Mount Rinjani from Bali?',
      date: 'July 7, 2026',
      image: '/Gambar/sembalun.avif',
      excerpt: 'Mount Rinjani is Indonesia’s second-highest volcano and one of the most spectacular treks in Southeast Asia. Because it is located on the neighboring island of Lombok, travelers often wonder about the best way to cross over from Bali.',
      content: [
        'Traveling from Bali to Mount Rinjani is a very popular journey for trekkers. The fastest and most convenient method is taking a morning speedboat from Padang Bai or Sanur directly to Bangsal Harbor in North Lombok.',
        'The boat trip takes approximately 1.5 to 2 hours. Upon arrival at Bangsal Harbor, having a pre-booked Lombok Local Transport driver waiting for you saves tremendous hassle with port touts.',
        'From Bangsal Harbor to Senaru is approximately 1.5 hours of smooth, scenic driving along the northern coastline. Your driver handles your luggage safely and brings you directly to your homestay or trekking operator headquarters.'
      ]
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-neutral-200 font-lato text-left" id="blog">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Module 18 Heading: Our Blog's */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-lato font-bold text-[#111111] uppercase tracking-wide">
            Our Blog's
          </h2>
          <div className="w-16 h-0.5 bg-neutral-200 mx-auto mt-4" />
        </div>

        {/* Module 19: Beaver Builder Post Grid (.fl-post-grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Photo */}
                <div className="relative h-48 sm:h-52 bg-neutral-100 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <h2 className="text-lg font-lato font-bold text-[#111111] group-hover:text-[#0766ad] transition-colors leading-snug">
                    {art.title}
                  </h2>

                  {/* Meta: By admin | Date */}
                  <div className="text-xs text-neutral-400 font-medium">
                    <span>By <strong className="text-neutral-600">admin</strong></span>
                    <span className="mx-1.5 text-neutral-300">|</span>
                    <span>{art.date}</span>
                  </div>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed line-clamp-3 pt-1">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <span className="text-xs font-bold text-[#0766ad] group-hover:text-[#ff6600] inline-flex items-center gap-1 transition-colors uppercase tracking-wider">
                  <span>Read Article</span>
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
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl text-left">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs text-neutral-400 font-medium">
                By admin | {selectedArticle.date}
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

            <div className="space-y-4 text-sm text-[#444444] leading-relaxed">
              {selectedArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 text-xs font-bold font-lato uppercase bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded cursor-pointer"
              >
                Close
              </button>

              <a
                href={`https://wa.me/6281999344480?text=${encodeURIComponent(`Hello Lombok Local Transport, I read your article: ${selectedArticle.title} and would like to inquire about booking this tour.`)}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 text-xs font-bold font-lato uppercase bg-[#0c8833] hover:bg-[#fc7303] text-white rounded shadow cursor-pointer transition-colors"
              >
                Book This Tour
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
