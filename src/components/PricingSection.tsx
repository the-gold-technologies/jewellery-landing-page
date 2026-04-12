"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "₹999",
      period: "/ month",
      desc: "Best for small shops starting out.",
      features: [
        "Manage products & stock",
        "Track stock in/out",
        "Basic reports",
        "Single shop access",
      ],
      cta: "Start with Starter",
      popular: false,
      color: "text-white/60",
      accent: "bg-white/5",
      border: "border-white/5 hover:border-white/10",
      shadow: "shadow-2xl",
    },
    {
      name: "Growth",
      price: "₹1999",
      period: "/ month",
      desc: "Best for growing jewellery businesses.",
      features: [
        "Everything in Starter",
        "Staff management & permissions",
        "Metal rate updates",
        "Advanced reports",
        "Barcode support",
      ],
      cta: "Choose Growth Plan",
      popular: true,
      color: "text-gold",
      accent: "bg-gold/10",
      border: "border-gold/30 gold-gradient-border",
      shadow: "shadow-[0_0_50px_rgba(212,175,55,0.15)]",
    },
    {
      name: "Business",
      price: "₹3499",
      period: "/ month",
      desc: "Best for multi-shop owners.",
      features: [
        "Everything in Growth",
        "Multi-shop management",
        "Full analytics & insights",
        "Complete team control",
      ],
      cta: "Get Business Plan",
      popular: false,
      color: "text-white/60",
      accent: "bg-white/5",
      border: "border-white/5 hover:border-white/10",
      shadow: "shadow-2xl",
    },
  ];

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <Sparkles className="h-4 w-4 text-gold/60" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 italic">
              Investment
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-medium text-white mb-6 leading-tight">
            Simple Pricing for{" "}
            <span className="gold-text-gradient italic">Jewellery Shops.</span>
          </h2>
          <p className="text-white/40 font-light text-xl max-w-xl mx-auto">
            No complicated plans. Choose what fits your shop.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className={`relative rounded-[3rem] p-10 xl:p-12 transition-all duration-700 bg-[#141414] border ${plan.border} ${plan.shadow} ${plan.popular ? "lg:-mt-8 lg:mb-8 scale-100 lg:scale-105 z-20" : "z-10 hover:bg-[#181818]"}`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold text-black text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-gold-light/50">
                  Most Popular
                </div>
              )}

              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <h3
                    className={`text-2xl font-heading font-medium mb-4 ${plan.popular ? "text-gold italic" : "text-white"}`}
                  >
                    {plan.name} Plan
                  </h3>
                  <div className="flex items-end mb-2">
                    <span className="text-5xl font-heading text-white font-medium tracking-tight bg-clip-text text-transparent bg-white">
                      {plan.price}
                    </span>
                    <span className="text-white/30 ml-2 text-sm font-light mb-1">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-white/40 text-sm font-light mt-4 leading-relaxed">
                    {plan.desc}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-linear-to-r from-transparent via-white/10 to-transparent mb-8" />

                <ul className="space-y-5 mb-12 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start group">
                      <div
                        className={`mt-0.5 mr-4 rounded-full p-1 border border-white/5 transition-colors duration-500 group-hover:border-gold/30 ${plan.popular ? "bg-gold/10 border-gold/20" : "bg-white/5"}`}
                      >
                        <Check
                          className={`h-3 w-3 ${plan.popular ? "text-gold" : "text-emerald-400 group-hover:text-gold"}`}
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-white/70 text-sm font-light leading-snug group-hover:text-white transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-7 rounded-[1.5rem] font-bold uppercase tracking-[0.15em] text-[11px] transition-all duration-500 shadow-xl group border ${
                    plan.popular
                      ? "bg-gold hover:bg-gold-light text-black border-gold shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-1"
                      : "bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-gold/30 hover:text-gold"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-col items-center justify-center space-y-6"
        >
          <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <p className="text-white/70 text-sm font-light">
              <span className="font-medium text-white italic">
                No hidden charges.
              </span>{" "}
              Cancel anytime.
            </p>
          </div>
          <p className="text-white/40 text-sm font-light">
            Not sure which plan is right?{" "}
            <a
              href="#contact"
              className="text-gold font-medium hover:text-gold-light transition-colors relative group inline-block"
            >
              Talk to Us
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
