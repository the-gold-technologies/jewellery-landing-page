"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, History, RotateCcw, ShieldAlert, BarChart3, Printer, Sparkles } from "lucide-react";

export function FeatureGrid() {
  const features = [
    {
      title: "Inventory Workspace",
      desc: "High-fidelity SKU tracking with automated barcodes, purity metrics, and real-time stock governance.",
      icon: <LayoutDashboard className="h-6 w-6" />,
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Stock Timeline",
      desc: "Full audit trail for every gram. Reason-coded movements with precise timestamps.",
      icon: <History className="h-6 w-6" />,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Metal Rate Console",
      desc: "Real-time pricing engine. Global gold/silver rates synced instantly to your shop floor.",
      icon: <RotateCcw className="h-6 w-6" />,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Permission Matrix",
      desc: "Enterprise-grade RBAC. Enforce least-privilege access across your entire retail network.",
      icon: <ShieldAlert className="h-6 w-6" />,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Reports & Exports",
      desc: "Cinematic data visualizations. Single-click XLSX exports and label printing with JsBarcode integration.",
      icon: <BarChart3 className="h-6 w-6" />,
      className: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="h-4 w-4 text-gold/60" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 italic">Core Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-medium text-white mb-6 leading-tight">
              The MVP <span className="gold-text-gradient italic">Feature Suite.</span>
            </h2>
            <p className="text-white/40 font-light max-w-xl text-lg">
              Engineered to eliminate the friction of legacy updates and provide total operational clarity.
            </p>
          </div>
          <Printer className="h-16 w-16 text-white/5 hidden md:block hover:text-gold/10 transition-colors duration-700" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`group relative ${feature.className}`}
            >
              <div className="absolute inset-0 bg-gold/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative glass rounded-[2.5rem] p-10 flex flex-col justify-between border-white/5 group-hover:border-gold/20 transition-all duration-700 overflow-hidden h-full">
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-gold/[0.02] rounded-full blur-3xl group-hover:bg-gold/[0.05] transition-colors duration-700" />
                
                <div className="relative z-10">
                  <div className="bg-gold/10 w-14 h-14 rounded-[1.25rem] flex items-center justify-center text-gold mb-8 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500 border border-gold/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-heading text-white mb-4 font-medium">{feature.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-light">{feature.desc}</p>
                </div>

                <div className="relative z-10 flex items-center text-[10px] font-bold text-gold/40 group-hover:text-gold transition-colors uppercase tracking-[0.3em] mt-6">
                  <span className="mr-3">Discover Protocol</span>
                  <div className="h-[1px] w-12 bg-gold/20 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
