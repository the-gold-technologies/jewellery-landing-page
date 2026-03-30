"use client";

import { motion } from "framer-motion";
import { ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";

export function ProblemSolution() {
  const points = [
    {
      pain: "Manual ledgers and nightly calls for rates",
      solution: "Unified dashboard with real-time metal-rate control.",
      icon: <AlertCircle className="h-5 w-5 text-red-400" />,
      solveIcon: <CheckCircle2 className="h-5 w-5 text-emerald-400" />,
    },
    {
      pain: "No audit trail for stock adjustments",
      solution: "Typed stock ledger with reasons & timestamps.",
      icon: <AlertCircle className="h-5 w-5 text-red-400" />,
      solveIcon: <CheckCircle2 className="h-5 w-5 text-emerald-400" />,
    },
    {
      pain: "Over-permissioned staff risking data",
      solution: "Role + permission toggles enforcing least privilege.",
      icon: <AlertCircle className="h-5 w-5 text-red-400" />,
      solveIcon: <CheckCircle2 className="h-5 w-5 text-emerald-400" />,
    },
  ];

  return (
    <section id="problem" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold mb-6">Software Artisans</h2>
          <p className="text-4xl md:text-6xl font-heading font-medium text-white max-w-4xl mx-auto leading-tight">
            Transcend the <span className="italic text-white/30 font-light">Chaos</span> of <br />
            Legacy <span className="gold-text-gradient italic">Jewellery Operations.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-x-0 -top-10 h-32 bg-gold/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative glass rounded-[3rem] p-10 border-white/5 h-full flex flex-col justify-between transition-all duration-700 hover:border-gold/10 hover:shadow-2xl hover:shadow-gold/5">
                <div>
                  <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 border border-white/10 group-hover:border-red-400/20 transition-all duration-500">
                    <AlertCircle className="h-7 w-7 text-white/20 group-hover:text-red-400 transition-colors" />
                  </div>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-4 font-sans italic">Traditional Point</h3>
                  <p className="text-xl font-heading text-white/60 font-light leading-relaxed mb-12">"{item.pain}"</p>
                </div>

                <div className="pt-10 border-t border-white/5 relative">
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="h-10 w-10 rounded-full bg-emerald-400/10 flex items-center justify-center border border-emerald-400/10 group-hover:bg-emerald-400/20 transition-all duration-500">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400/80">Resolution</span>
                  </div>
                  <p className="text-lg font-heading text-white font-medium leading-relaxed">{item.solution}</p>
                  
                  <ArrowRight className="absolute top-1/2 -right-4 h-10 w-10 text-white/[0.02] group-hover:text-gold/10 transition-colors duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
