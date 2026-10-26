import React, { useState } from 'react';
import { X, ArrowRight, BookOpen, Clock, Calendar, User, Sparkles } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface ArticleItem {
  id: string;
  title: string;
  date: string;
  image: string;
  tag: string;
  readTime: string;
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
      tag: 'Northern Waterfalls',
      readTime: '4 min read',
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
      tag: 'South Coast & Culture',
      readTime: '5 min read',
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
      tag: 'Travel Logistics',
      readTime: '3 min read',
      excerpt: 'Mount Rinjani is Indonesia’s second-highest volcano and one of the most spectacular treks in Southeast Asia. Because it is located on the neighboring island of Lombok, travelers often wonder about the best way to cross over from Bali.',
      content: [
        'Traveling from Bali to Mount Rinjani is a very popular journey for trekkers. The fastest and most convenient method is taking a morning speedboat from Padang Bai or Sanur directly to Bangsal Harbor in North Lombok.',
        'The boat trip takes approximately 1.5 to 2 hours. Upon arrival at Bangsal Harbor, having a pre-booked Lombok Local Transport driver waiting for you saves tremendous hassle with port touts.',
        'From Bangsal Harbor to Senaru is approximately 1.5 hours of smooth, scenic driving along the northern coastline. Your driver handles your luggage safely and brings you directly to your homestay or trekking operator headquarters.'
      ]
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200/80 font-sans text-left" id="blog">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#0766ad] text-xs font-heading font-extrabold uppercase tracking-widest border border-blue-100 inline-block mb-3">
            Island Travel Guides
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight uppercase">
            Our Blog &amp; Lombok Travel Guides
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0766ad] to-amber-500 mx-auto rounded-full mt-4 mb-5" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Useful tips, itinerary ideas, and local knowledge to help you plan an unforgettable journey across Lombok.
          </p>
        </div>

        {/* Blog Post Grid with Modern Character */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {articles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="card-elevated overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Photo with Overlay Badge */}
                <div className="relative h-52 bg-slate-100 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-heading font-extrabold uppercase tracking-wider border border-white/20">
                    {art.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-slate-200 px-2.5 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1 text-slate-500 font-semibold">
                      <User className="w-3.5 h-3.5 text-[#0766ad]" />
                      <span>Admin</span>
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{art.date}</span>
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-slate-900 group-hover:text-[#0766ad] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Trigger */}
              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-heading font-bold text-[#0766ad] group-hover:text-[#05487a]">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-heading font-bold uppercase tracking-wider">
                    {selectedArticle.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                  <span>By <strong className="text-slate-700">Admin</strong></span>
                  <span>&bull;</span>
                  <span>{selectedArticle.date}</span>
                  <span>&bull;</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 leading-tight">
                  {selectedArticle.title}
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed pt-2">
                  {selectedArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 font-medium">
                    Ready to experience this tour?
                  </span>
                  <a
                    href={`https://wa.me/6281999344480?text=Hello%20Lombok%20Local%20Transport,%20I%20am%20interested%20in%20the%20${encodeURIComponent(selectedArticle.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp text-xs py-2 px-5 rounded-xl cursor-pointer"
                  >
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
