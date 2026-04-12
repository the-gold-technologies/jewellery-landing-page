"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      q: "Can I manage multiple shops?",
      a: "Yes, you can manage all shops separately in one system.",
    },
    {
      q: "Can my staff use this?",
      a: "Yes, you can give access based on their role and permissions.",
    },
    {
      q: "Is my data secure?",
      a: "Yes, your data is secure and only accessible to authorized users.",
    },
    {
      q: "Do I need technical knowledge?",
      a: "No, it is simple and easy to use.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <Sparkles className="h-4 w-4 text-gold/60" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 italic">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-medium text-white mb-6">
            Common {" "}
            <span className="italic gold-text-gradient">Questions.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gold/5 blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative glass rounded-3xl border-white/5 overflow-hidden transition-all duration-500 hover:border-gold/20">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-10 py-8 flex items-center justify-between text-left transition-all duration-500"
                >
                  <span
                    className={`text-xl font-heading font-medium transition-colors duration-500 ${openIndex === index ? "text-gold italic" : "text-white/70 group-hover:text-white"}`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 transition-all duration-500 ${openIndex === index ? "rotate-180 bg-gold/10 border-gold/20 text-gold" : "text-white/20"}`}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-10 pb-8 text-white/40 font-light leading-relaxed text-lg border-t border-white/5 pt-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
