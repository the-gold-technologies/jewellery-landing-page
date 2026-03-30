"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download, Send } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Ready to Modernize <br />
                  <span className="gold-text-gradient">Jewellery Ops?</span>
                </h2>
                
                <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
                  Join 10+ multi-branch networks already scaling with SKU-level fidelity. 
                  Launch your sandbox environment in 2 minutes.
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

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                  <Button className="bg-gold hover:bg-gold-dark text-charcoal font-bold px-10 py-7 h-auto text-lg rounded-full">
                    Schedule White-Glove Onboarding
                  </Button>
                  <button className="flex items-center text-white/60 hover:text-gold transition-colors font-bold uppercase tracking-widest text-sm">
                    <Download size={18} className="mr-2" /> Download Technical Deck
                  </button>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
