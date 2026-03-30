"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Database, Globe, ArrowRight, Sparkles } from "lucide-react";

export function SecuritySpotlight() {
  const specs = [
    { label: "Data Isolation", value: "shopId-scoped via Prisma" },
    { label: "Encryption", value: "JWT + bcrypt hashing" },
    { label: "Architecture", value: "React SPA + Express API" },
    { label: "Hosting", value: "Supabase (PostgreSQL)" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass rounded-[4rem] p-12 lg:p-24 overflow-hidden border-white/5 relative">
          {/* Background Ambient Glows */}
          <div className="absolute -top-24 -right-24 h-96 w-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 bg-emerald-400/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 text-emerald-400/80 mb-8 font-sans text-[10px] uppercase tracking-[0.4em] font-bold">
                <ShieldCheck size={14} />
                <span>Enterprise Protocol</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-heading font-medium text-white mb-8 leading-tight">
                Architectural <br />
                <span className="italic gold-text-gradient">Sovereignty.</span>
              </h2>

              <p className="text-white/40 mb-12 text-lg leading-relaxed font-light max-w-lg">
                Your business intelligence is protected by multi-tenant sharding and hardened cryptographic layers. 
                Built for <span className="text-white">absolute isolation</span> and <span className="text-white">zero-trust</span> governance.
              </p>

              <div className="grid grid-cols-2 gap-10 mb-14">
                {specs.map((spec, index) => (
                  <div key={index} className="group">
                    <div className="text-[10px] font-bold text-gold/60 uppercase tracking-[0.3em] mb-3 group-hover:text-gold transition-colors">{spec.label}</div>
                    <div className="text-white/80 font-medium text-sm tracking-wide">{spec.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-6">
                 <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] backdrop-blur-md">v1.2.0-stable</div>
                 <motion.div 
                   whileHover={{ x: 5 }}
                   className="flex items-center text-[10px] font-bold text-gold uppercase tracking-[0.3em] cursor-pointer"
                 >
                   Review Roadmap <ArrowRight size={14} className="ml-2" />
                 </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Technical Core Visualization */}
              <div className="aspect-square glass rounded-full flex items-center justify-center border-white/10 relative shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gold/[0.02]" />
                
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-10 rounded-full border-dashed border border-white/[0.05]" 
                />
                
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-charcoal/40 backdrop-blur-2xl p-10 rounded-[3rem] mb-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5 group"
                  >
                    <Database size={64} className="text-gold opacity-80 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                  <div className="text-center">
                    <div className="font-heading text-2xl font-medium mb-2 text-white italic">Prisma Core</div>
                    <div className="text-[9px] text-white/20 font-bold tracking-[0.5em] uppercase">Isolated Tenant Mesh</div>
                  </div>
                </div>

                {/* Satellite Material Elements */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-16 right-16 glass p-5 rounded-3xl border-white/10 shadow-2xl"
                >
                  <Lock className="text-gold/60" size={28} />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-16 left-16 glass p-5 rounded-3xl border-white/10 shadow-2xl"
                >
                  <Sparkles className="text-emerald-400/60" size={28} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
