"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Play,
  Sparkles,
  ArrowRight,
  Activity,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className=" relative py-16">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto ">
        <div className="  flex items-center gap-16 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className=" w-[55%] shrink-0"
          >
            {/* top bage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
            >
              <Sparkles className="h-3 w-3 text-gold" />
              <span className="text-[10px] capitalize tracking-[0.2em] font-bold text-white/80">
                No confusion.{" "}
                <span className="text-gold italic">No technical setup.</span>{" "}
                Start in minutes.
              </span>
            </motion.div>

            <h1 className=" text-5xl md:text-7xl font-heading font-medium leading-tight text-white mb-6">
              Manage Your <br />
              <span className="italic gold-text-gradient">
                Jewellery Shops{" "}
              </span>
              Without Chaos.
            </h1>

            <p className=" text-xl text-white/80 mb-10 leading-relaxed font-light">
              Track stock, control staff activity, manage gold & silver rates,
              and know exactly what's happening in your shop — every single day.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <Link href="#features">
                <Button
                  className="bg-gold cursor-pointer px-10 py-7 hover:bg-gold-dark hover:text-white 
                  hover:scale-105 rounded-full text-[15px] font-semibold transition-all 
                  duration-500  shadow-2xl shadow-gold/20"
                >
                  Experience Karatrix
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-white/10 text-white/80 hover:bg-white/5 px-10 py-7 
                  rounded-full text-[15px] transition-all duration-500 cursor-pointer"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/*  Trusted by */}
            <div className="flex items-center space-x-5 max-w-7xl m-auto mt-10">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`/owner_${i}.png`}
                    alt={`Global Boutique Owner ${i}`}
                    className="h-10 w-10 rounded-full border-[3px] border-charcoal bg-white/5 object-cover backdrop-blur-sm"
                  />
                ))}
              </div>
              <p className="text-[10px] text-white/70 font-bold tracking-[0.3em] leading-4">
                Trusted by
                <span className="text-gold"> {`50+`}</span> <br /> Global
                Boutiques
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative w-full"
          >
            {/* Immersive Material Device Mockup */}
            <div className="relative aspect-[4/3] glass rounded-[3.5rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] group">
              <div className="absolute inset-0 bg-linear-to-tr from-black/80 via-transparent to-gold/5 opacity-80" />

              {/* Material UI elements with depth */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 1, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-12 right-12 glass p-6 rounded-3xl w-56 border-white/10 shadow-2xl z-20"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-gold rounded-full animate-pulse" />
                    <span className="text-[10px] text-white/40 font-bold tracking-widest uppercase">
                      Live Sync
                    </span>
                  </div>
                  <Activity className="h-3 w-3 text-gold/50" />
                </div>
                <div className="space-y-3">
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: ["30%", "85%", "60%"] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="h-full bg-gold/40"
                    />
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] text-white/30 uppercase tracking-tighter">
                        Active SKUs
                      </p>
                      <p className="text-xl font-heading text-white">12,482</p>
                    </div>
                    <div className="text-[8px] text-gold font-bold px-2 py-1 bg-gold/10 rounded-lg">
                      +0.4%
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -1, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-12 left-12 glass p-6 rounded-[2.5rem] w-64 border-white/10 shadow-2xl z-20"
              >
                <div className="flex items-center space-x-4 mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-gold" />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
                      Precision
                    </p>
                    <div className="h-1.5 w-24 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[98%] bg-white/40" />
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white/2 rounded-2xl border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] text-white/40 uppercase">
                      Audit Status
                    </span>
                    <span className="text-[9px] text-gold font-bold">
                      VERIFIED
                    </span>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src={`/owner_${i}.png`}
                        alt={`Global Auditor ${i}`}
                        className="h-5 w-5 rounded-full border border-charcoal bg-white/10 object-cover"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Aesthetic light leaks */}
            <div className="absolute -top-16 -right-16 h-80 w-80 bg-gold/5 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 bg-teal-accent/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
