"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download, Send, Users } from "lucide-react";

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

              <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10">
                <Button className="bg-gold hover:bg-gold-dark text-black font-bold px-10 py-7 h-auto text-[13px] uppercase tracking-[0.2em] rounded-full shadow-2xl shadow-gold/20 transition-all duration-500 hover:scale-105 active:scale-95 text-center cursor-pointer">
                  Request Briefing
                </Button>

                <button className="flex cursor-pointer items-center text-white font-bold uppercase tracking-[0.3em] text-[10px] group px-10 py-7 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-500">
                  <Users
                    size={16}
                    className="mr-3 group-hover:scale-110 transition-transform text-gold"
                  />
                  Join Network
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
