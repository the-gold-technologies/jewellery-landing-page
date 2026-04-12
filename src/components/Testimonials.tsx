"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Earlier we had confusion in stock and entries. Now everything is clear. This software completely transformed how securely we operate.",
      author: "Anita S.",
      role: "Shop Owner",
    },
    {
      text: "Managing staff and stock became simple and more controlled. The real-time updates save us hours of manual auditing every week.",
      author: "Rakesh D.",
      role: "Shop Owner",
    },
    {
      text: "No more mismatch. Everything is properly tracked now. I can finally leave my shop without worrying about inventory discrepancies.",
      author: "Meena P.",
      role: "Shop Owner",
    },
    {
      text: "The metal rate real-time sync alone prevents daily losses. It is entirely seamless and our staff adapted to it immediately.",
      author: "Sanjay K.",
      role: "Shop Owner",
    },
    {
      text: "We run three different boutiques and this ecosystem unified our reporting. Absolute peace of mind.",
      author: "Priya M.",
      role: "Multi-Store Owner",
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
                  key={`testimonial-${itemIndex}`}
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
                    <div className="relative rounded-[2rem] p-10 sm:p-14 flex flex-col justify-between transition-all duration-700 bg-[#1c1c1c] shadow-2xl border border-white/5 min-h-[350px]">
                      <Quote className="absolute top-10 right-10 h-14 w-14 text-gold/10 transition-colors duration-700 group-hover:text-gold/20" />

                      <div className="relative z-10 flex-grow flex items-center mb-10">
                        <p className="text-xl sm:text-2xl font-serif text-white/90 italic leading-relaxed">
                          "{testimonials[itemIndex].text}"
                        </p>
                      </div>

                      <div className="relative z-10 flex items-center space-x-6">
                        <div className="h-16 w-16 rounded-full bg-[#2a2a2a] flex items-center justify-center font-serif font-bold text-2xl text-gold shrink-0 border border-gold/10 border-b-gold/30">
                          {testimonials[itemIndex].author.charAt(0)}
                        </div>
                        <div className="flex flex-col justify-center">
                          <div className="font-serif text-xl font-medium text-white/90 mb-1">
                            {testimonials[itemIndex].author}
                          </div>
                          <div className="text-[9px] font-bold text-gold uppercase tracking-[0.25em]">
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
