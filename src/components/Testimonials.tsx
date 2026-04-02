"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    {
      text: "Our multi-branch network finally feels like a single, well-oiled machine. The synchronization speed is just incredible.",
      author: "Sanjay R.",
      role: "Logistics Director",
    },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  // Auto-play Animation
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Helper to get indices for side cards
  const getIndex = (offset: number) => {
    return (currentIndex + offset + testimonials.length) % testimonials.length;
  };

  return (
    <section
      id="testimonials"
      className="py-32 relative overflow-hidden bg-charcoal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20 text-center">
        <div className="flex justify-center items-center space-x-2 mb-6 text-gold/60">
          <Sparkles className="h-4 w-4" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 italic">
            Testimonials
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-heading font-medium text-white mb-6">
          Trusted by Industry{" "}
          <span className="italic gold-text-gradient">Visionaries.</span>
        </h2>
        <div className="flex justify-center space-x-1.5 mt-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="h-4 w-4 fill-gold text-gold opacity-80" />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 h-[550px] flex items-center justify-center">
        {/* Carousel Content */}
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence mode="popLayout" initial={false}>
            {[-1, 0, 1].map((offset) => {
              const itemIndex = getIndex(offset);
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={testimonials[itemIndex].author}
                  initial={{
                    opacity: 0,
                    scale: 0.6,
                    x: offset * 350,
                    z: -200,
                  }}
                  animate={{
                    opacity: isCenter ? 1 : 0.4,
                    scale: isCenter ? 0.9 : 0.65,
                    x:
                      offset *
                      (typeof window !== "undefined" && window.innerWidth < 768
                        ? 0
                        : 430),
                    z: isCenter ? 0 : -300,
                    rotateY: offset * -25,
                    filter: isCenter ? "blur(0px)" : "blur(3px)",
                    display:
                      typeof window !== "undefined" &&
                      window.innerWidth < 768 &&
                      !isCenter
                        ? "none"
                        : "flex",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    x: offset * 450,
                    z: -400,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`absolute w-[90vw] max-w-[550px] flex flex-col items-center pointer-events-none ${isCenter ? "z-20 pointer-events-auto" : "z-10"}`}
                >
                  <div className="group relative w-full">
                    <div className="absolute inset-0 bg-gold/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="relative glass rounded-[3rem] p-10 sm:p-14 border border-white/10 flex flex-col justify-between transition-all duration-700 hover:border-gold/30 hover:shadow-[0_0_50px_rgba(212,175,55,0.1)] bg-white/[0.03] backdrop-blur-3xl min-h-[350px]">
                      <Quote className="h-12 w-12 text-gold/10 mb-10 absolute top-10 right-10 group-hover:text-gold/20 transition-colors duration-700" />

                      <div className="relative z-10">
                        <p className="text-xl sm:text-3xl font-heading text-white italic leading-relaxed font-light mb-12">
                          "{testimonials[itemIndex].text}"
                        </p>
                      </div>

                      <div className="relative z-10 flex items-center space-x-6">
                        <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-linear-to-tr from-gold/20 to-transparent border border-white/10 flex items-center justify-center font-heading text-gold font-bold italic text-3xl shadow-inner text-gold">
                          {testimonials[itemIndex].author.charAt(0)}
                        </div>
                        <div>
                          <div className="font-heading text-xl sm:text-2xl font-medium text-white mb-1">
                            {testimonials[itemIndex].author}
                          </div>
                          <div className="text-[10px] sm:text-[12px] font-bold text-gold/60 uppercase tracking-[0.3em]">
                            {testimonials[itemIndex].role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
