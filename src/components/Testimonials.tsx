"use client";

import { motion } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      text: "Variance dropped 37% in two months. The visibility we now have across our regional network is unprecedented.",
      author: "Anita S.",
      role: "Regional Ops Lead",
    },
    {
      text: "Metal rate pushes take seconds, not nightly calls. It's the high-performance workspace we've been waiting for.",
      author: "Rakesh D.",
      role: "Franchise Owner",
    },
    {
      text: "Audit exports plug straight into GST filings. The precision and SKU-level fidelity are world-class.",
      author: "Meena P.",
      role: "Finance Head",
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <Sparkles className="h-4 w-4 text-gold/60" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 italic">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-medium text-white mb-6">
            Trusted by Industry <span className="italic gold-text-gradient">Visionaries.</span>
          </h2>
          <div className="flex justify-center space-x-1.5 mt-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold opacity-80" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gold/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative glass rounded-[3rem] p-12 border-white/5 h-full flex flex-col justify-between transition-all duration-700 hover:border-gold/10 hover:shadow-2xl hover:shadow-gold/5">
                <Quote className="h-10 w-10 text-white/[0.03] mb-10 absolute top-10 right-10 group-hover:text-gold/10 transition-colors duration-700" />
                
                <div className="relative z-10">
                  <p className="text-xl font-heading text-white/70 italic leading-relaxed font-light mb-12">
                    "{t.text}"
                  </p>
                </div>
                
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-heading text-gold font-bold italic">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-heading text-lg font-medium text-white">{t.author}</div>
                    <div className="text-[10px] font-bold text-gold/60 uppercase tracking-[0.2em]">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
