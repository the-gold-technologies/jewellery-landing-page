"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  History,
  RotateCcw,
  ShieldAlert,
  BarChart3,
  Printer,
  Sparkles,
  Check,
  X,
  FileSpreadsheet,
  FileText,
  Barcode,
  ArrowRightLeft,
  Clock,
} from "lucide-react";

export function FeatureGrid() {
  const PermissionTable = () => (
    <div className="mt-8 space-y-4">
      <div className="grid grid-cols-4 text-[10px] uppercase tracking-widest font-bold text-white/20 pb-4 border-b border-white/5">
        <div>Action</div>
        <div className="text-center text-gold/60">Super</div>
        <div className="text-center text-emerald-400/60">Owner</div>
        <div className="text-center text-blue-400/60">Manager</div>
      </div>
      {[
        { action: "Inventory", super: true, owner: true, manager: "Toggle" },
        { action: "Rates", super: true, owner: true, manager: false },
        { action: "Stock", super: true, owner: true, manager: "Toggle" },
        { action: "Reports", super: true, owner: true, manager: "Toggle" },
      ].map((row, i) => (
        <div key={i} className="grid grid-cols-4 items-center py-2 text-[10px]">
          <div className="text-white/60 font-medium">{row.action}</div>
          <div className="flex justify-center">
            <Check className="h-3 w-3 text-emerald-400" />
          </div>
          <div className="flex justify-center">
            {row.owner === true ? (
              <Check className="h-3 w-3 text-emerald-400" />
            ) : (
              <span className="text-emerald-400/60 text-[8px] uppercase font-bold">
                {row.owner}
              </span>
            )}
          </div>
          <div className="flex justify-center">
            {row.manager === true ? (
              <Check className="h-3 w-3 text-emerald-400" />
            ) : row.manager === false ? (
              <X className="h-3 w-3 text-rose-500" />
            ) : (
              <span className="text-gold/60 text-[8px] uppercase font-bold">
                {row.manager}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const ReportsVisual = () => (
    <div className="mt-8 flex gap-6 h-full">
      <div className="flex-1">
        <div className="flex items-end justify-between h-20 gap-1.5">
          {[30, 60, 40, 80, 50, 95, 70].map((h, i) => (
            <div
              key={i}
              className="w-full bg-white/5 rounded-t-md relative group/bar overflow-hidden"
            >
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                className={`w-full absolute bottom-0 ${i === 5 ? "bg-gold" : "bg-white/10 group-hover/bar:bg-gold/40"} transition-colors duration-500`}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-3 text-[8px] font-bold text-white/20 uppercase tracking-tighter">
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
        </div>
      </div>
      <div className="w-32 space-y-2">
        <div className="flex items-center gap-2 p-2 rounded-xl bg-white/2 border border-white/5 group/export cursor-pointer hover:bg-white/5 transition-colors">
          <div className="h-6 w-6 rounded-lg bg-emerald-400/10 flex items-center justify-center text-emerald-400">
            <FileSpreadsheet size={12} />
          </div>
          <span className="text-[8px] font-bold text-white/60 uppercase tracking-widest group-hover/export:text-white transition-colors line-clamp-1">
            XLSX Export
          </span>
        </div>
        <div className="flex items-center gap-2 p-2 rounded-xl bg-white/2 border border-white/5 group/export cursor-pointer hover:bg-white/5 transition-colors">
          <div className="h-6 w-6 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-500">
            <FileText size={12} />
          </div>
          <span className="text-[8px] font-bold text-white/60 uppercase tracking-widest group-hover/export:text-white transition-colors line-clamp-1">
            GST Audit
          </span>
        </div>
      </div>
    </div>
  );

  const LogisticsVisual = () => (
    <div className="mt-8 space-y-3">
      {[
        {
          id: "TR-092",
          from: "Main Store",
          to: "Branch A",
          status: "In Transit",
          time: "2h ago",
        },
        {
          id: "TR-088",
          from: "Vault",
          to: "Main Store",
          status: "Completed",
          time: "5h ago",
        },
        {
          id: "TR-085",
          from: "Branch B",
          to: "Vault",
          status: "Delayed",
          time: "1d ago",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-3 rounded-2xl bg-white/2 border border-white/5 flex items-center justify-between group/item hover:border-gold/30 transition-all duration-500"
        >
          <div className="flex items-center gap-3">
            <div
              className={`h-8 w-8 rounded-full flex items-center justify-center ${item.status === "Completed" ? "bg-emerald-400/10 text-emerald-400" : item.status === "Delayed" ? "bg-rose-500/10 text-rose-500" : "bg-gold/10 text-gold"}`}
            >
              <ArrowRightLeft size={14} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-white uppercase tracking-widest">
                {item.id}
              </p>
              <p className="text-[8px] text-white/30 uppercase mt-1">
                {item.from} → {item.to}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p
              className={`text-[8px] font-bold uppercase tracking-widest ${item.status === "Completed" ? "text-emerald-400" : item.status === "Delayed" ? "text-rose-500" : "text-gold"}`}
            >
              {item.status}
            </p>
            <div className="flex items-center justify-end gap-1 mt-1 text-white/20">
              <Clock size={8} />
              <span className="text-[8px]">{item.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const features = [
    {
      title: "Inventory Workspace: Track Every Item Clearly",
      desc: "Know your stock by weight, quantity, and category.",
      icon: <LayoutDashboard className="h-6 w-6" />,
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Stock Timeline: See Every Movement",
      desc: "Every stock change is recorded properly.",
      icon: <History className="h-6 w-6" />,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Metal Rate Console: Update Gold & Silver Rates Anytime",
      desc: "Avoid pricing mistakes with real-time updates.",
      icon: <RotateCcw className="h-6 w-6" />,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Permission Matrix: Control Staff Access",
      desc: "Give only the access they need.",
      icon: <ShieldAlert className="h-6 w-6" />,
      className: "md:col-span-1 md:row-span-1",
      component: <PermissionTable />,
    },
    {
      title: "Insights Logistics: Know Your Daily Business",
      desc: "See what's happening without confusion.",
      icon: <ArrowRightLeft className="h-6 w-6" />,
      className: "md:col-span-1 md:row-span-1",
      component: <LogisticsVisual />,
    },
    {
      title: "Reports & Exports: Clear Reports Anytime",
      desc: "Sales, stock, everything in one place.",
      icon: <BarChart3 className="h-6 w-6" />,
      className: "md:col-span-2 md:row-span-1",
      component: <ReportsVisual />,
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="h-4 w-4 text-gold/60" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 italic">
                Manage everything in one place.
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-medium text-white mb-6 leading-tight">
              Everything You Need to{" "}
              <span className="gold-text-gradient italic">
                Run Your Shop Smoothly.
              </span>
            </h2>
            <p className="text-white/40 font-light max-w-xl text-lg">
              Manage stock, staff, and daily operations - all in one place.
            </p>
          </div>
          <Printer className="h-16 w-16 text-white/5 hidden md:block hover:text-gold/10 transition-colors duration-700" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`group relative cursor-pointer ${feature.className}`}
            >
              <div className="absolute inset-0 bg-gold/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative glass rounded-[2.5rem] p-10 flex flex-col justify-between border-white/5 group-hover:border-gold/20 transition-all duration-700 overflow-hidden h-full">
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-gold/[0.02] rounded-full blur-3xl group-hover:bg-gold/[0.05] transition-colors duration-700" />

                <div className="relative z-10">
                  <div className="bg-gold/10 w-14 h-14 rounded-[1.25rem] flex items-center justify-center text-gold mb-8 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500 border border-gold/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-heading text-white mb-4 font-medium tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed font-light">
                    {feature.desc}
                  </p>
                  {feature.component && (
                    <div className="w-full">{feature.component}</div>
                  )}
                </div>

                {!feature.component && (
                  <div className="relative z-10 flex items-center text-[10px] font-bold text-gold/40 group-hover:text-gold transition-colors uppercase tracking-[0.3em] mt-10">
                    <span className="mr-3">Discover Protocol</span>
                    <div className=" w-12 bg-gold/20 group-hover:w-16 transition-all duration-500" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
