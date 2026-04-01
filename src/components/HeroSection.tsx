"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className=" relative py-20">
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
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-10"
            >
              <Sparkles className="h-3 w-3 text-gold" />
              <span className="text-[10px] capitalize tracking-[0.2em] font-bold text-white/80">
                Pioneer{" "}
                <span className="text-gold italic">Digital Jewellery</span>{" "}
                Workspace
              </span>
            </motion.div>

            {/* title */}
            <h1 className=" text-7xl font-heading font-medium leading-20 text-white mb-6">
              Command Every <br />
              <span className="italic gold-text-gradient">Jewellery </span>
              Inventory in <span className="font-light">Real Time.</span>
            </h1>

            <p className=" text-xl text-white/80 mb-10 leading-relaxed font-light">
              The high-performance workspace for elite jewellery retailers.
              Built for{" "}
              <span className="italic gold-text-gradient">precision</span>,
              scaled for{" "}
              <span className="italic gold-text-gradient">growth</span>, secured
              for <span className="italic gold-text-gradient">eternity</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <Link href="/">
                <Button
                  className="bg-gold cursor-pointer px-12 py-8 hover:bg-gold-dark hover:text-white 
                  hover:scale-105 rounded-full text-[12px] text-charcoal font-bold transition-all 
                  duration-500  shadow-2xl shadow-gold/20"
                >
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-white/10 text-white/80 hover:bg-white/5 px-12 py-8 
                  rounded-full text-[12px] capitalize tracking-[0.2em] transition-all duration-500 cursor-pointer"
                >
                  Launch Sandbox
                </Button>
              </Link>
            </div>

            {/*  Trusted by */}
            <div className="flex items-center space-x-10 max-w-7xl m-auto mt-10">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`/owner_${i}.png`}
                    alt={`Global Boutique Owner ${i}`}
                    className="h-12 w-12 rounded-full border-[3px] border-charcoal bg-white/5 object-cover backdrop-blur-sm"
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

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="h-24 w-24 rounded-full bg-charcoal/40 backdrop-blur-2xl flex items-center justify-center border border-white/10 group-hover:border-gold/30 transition-all duration-700 cursor-pointer shadow-2xl"
                  >
                    <Play className="h-10 w-10 text-gold fill-gold/10 ml-1" />
                  </motion.div>
                  <span className="mt-8 text-[11px] uppercase tracking-[0.4em] font-bold text-gold/40 group-hover:text-gold/80 transition-colors duration-500">
                    The Experience
                  </span>
                </div>
              </div>

              {/* Material UI elements with depth */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 1, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-12 right-12 glass p-6 rounded-3xl w-56 border-white/10 shadow-2xl"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="h-2 w-16 bg-gold/40 rounded-full" />
                  <div className="h-2 w-2 bg-gold rounded-full" />
                </div>
                <div className="h-10 w-full bg-white/5 rounded-xl border border-white/5" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -1, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-12 left-12 glass p-6 rounded-3xl w-64 border-white/10 shadow-2xl"
              >
                <div className="flex items-center space-x-4 mb-5">
                  <div className="h-10 w-10 rounded-2xl bg-gold/10 border border-gold/20" />
                  <div className="space-y-2">
                    <div className="h-1.5 w-16 bg-white/20 rounded-full" />
                    <div className="h-1.5 w-10 bg-white/10 rounded-full" />
                  </div>
                </div>
                <div className="h-16 w-full bg-linear-to-r from-gold/10 to-transparent rounded-2xl border border-white/5" />
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
