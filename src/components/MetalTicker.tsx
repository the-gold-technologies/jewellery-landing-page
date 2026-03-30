"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

export function MetalTicker() {
  const rates = [
    { label: "Gold 24K", price: "₹7,24,500", change: "+1.2%", up: true },
    { label: "Gold 22K", price: "₹6,65,300", change: "-0.4%", up: false },
    { label: "Silver", price: "₹88,200", change: "+2.1%", up: true },
    { label: "Platinum", price: "₹3,42,100", change: "+0.8%", up: true },
  ];

  // Duplicate for seamless loop
  const displayRates = [...rates, ...rates, ...rates];

  return (
    <div className="w-full bg-gold/5 border-y border-white/5 py-3 overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="inline-block"
      >
        {displayRates.map((rate, index) => (
          <div key={index} className="inline-flex items-center mx-8 space-x-3">
            <span className="text-xs font-bold text-white/40 uppercase tracking-widest">{rate.label}</span>
            <span className="text-sm font-mono font-bold text-white">{rate.price}</span>
            <span className={`flex items-center text-xs font-bold ${rate.up ? 'text-emerald-400' : 'text-red-400'}`}>
              {rate.up ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
              {rate.change}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
