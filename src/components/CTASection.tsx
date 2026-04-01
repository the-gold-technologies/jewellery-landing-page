"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download, Send } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="gold-gradient p-1 rounded-[3rem] shadow-2xl shadow-gold/20">
          <div className="bg-charcoal rounded-[2.9rem] p-12 lg:p-20 text-center relative overflow-hidden">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[80px] rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full -ml-32 -mb-32" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-heading font-medium mb-10 leading-tight">
                Command Your <br />
                <span className="gold-text-gradient italic">
                  Jewellery Empire.
                </span>
              </h2>

              <p className="text-xl text-white/50 mb-14 max-w-3xl mx-auto font-light leading-relaxed">
                Eliminate legacy friction and join the elite multi-branch
                networks scaling with absolute SKU-level fidelity. Deploy your
                workspace and reclaim operational clarity today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <div className="relative flex-1 max-w-md w-full">
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white focus:outline-none focus:border-gold transition-colors"
                  />
                  <button className="absolute right-2 top-2 bg-gold text-charcoal p-2 rounded-full hover:bg-gold-dark transition-colors">
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                <Button className="bg-gold hover:bg-gold-dark text-black font-bold px-12 py-8 h-auto text-[13px] uppercase tracking-[0.2em] rounded-full shadow-2xl shadow-gold/20 transition-all duration-500 hover:scale-105 active:scale-95 text-center">
                  Secure Your Executive Workspace
                </Button>
                <button className="flex cursor-pointer items-center text-white/40 hover:text-gold transition-all duration-500 font-bold uppercase tracking-[0.3em] text-[10px] group">
                  <Download
                    size={18}
                    className="mr-3 group-hover:-translate-y-1 transition-transform"
                  />
                  Download Performance Blueprint
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
