"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export interface Plan {
  id: string;
  name: string;
  tier: "BASIC" | "PREMIUM" | "ENTERPRISE";
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  description: string;
  limits: {
    maxUsers: number;
    maxStorage: number;
    maxProducts: number;
  };
  isActive: boolean;
  subscriberCount: number;
  createdAt: string;
  updatedAt: string;
}

const initialPlans: Plan[] = [
  {
    id: "plan-1",
    name: "Basic",
    tier: "BASIC",
    monthlyPrice: 999,
    yearlyPrice: 9990,
    features: [
      "Manage products & stock",
      "Track stock in/out",
      "Basic reports",
      "Single shop access",
    ],
    description: "Best for small shops starting out.",
    limits: {
      maxUsers: 5,
      maxStorage: 10,
      maxProducts: 500,
    },
    isActive: true,
    subscriberCount: 45,
    createdAt: "2026-04-13T09:41:57.814Z",
    updatedAt: "2026-04-13T10:36:19.684Z",
  },
  {
    id: "plan-2",
    name: "Premium",
    tier: "PREMIUM",
    monthlyPrice: 2999,
    yearlyPrice: 29990,
    features: [
      "Everything in Basic",
      "Staff management & permissions",
      "Metal rate updates",
      "Advanced reports",
      "Barcode support",
    ],
    description: "Best for growing jewellery businesses.",
    limits: {
      maxUsers: 20,
      maxStorage: 50,
      maxProducts: 2000,
    },
    isActive: true,
    subscriberCount: 28,
    createdAt: "2026-04-13T09:41:58.000Z",
    updatedAt: "2026-04-13T10:36:27.770Z",
  },
  {
    id: "plan-3",
    name: "Enterprise",
    tier: "ENTERPRISE",
    monthlyPrice: 7999,
    yearlyPrice: 79990,
    features: [
      "Everything in Premium",
      "Multi-shop management",
      "Full analytics & insights",
      "Complete team control",
    ],
    description: "Best for multi-shop owners.",
    limits: {
      maxUsers: -1, // -1 = Unlimited
      maxStorage: 200,
      maxProducts: -1,
    },
    isActive: true,
    subscriberCount: 12,
    createdAt: "2026-04-13T09:41:58.149Z",
    updatedAt: "2026-04-13T10:36:37.268Z",
  },
];

export function PricingSection() {
  const [plans, setPlans] = useState<Plan[]>(initialPlans);
  const [isYearly, setIsYearly] = useState(false);

  const getPlans = async () => {
    try {
      const fetchPlans = await fetch("http://localhost:3001/api/billing/plans");
      const json = await fetchPlans.json();
      setPlans(json);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getPlans();
  }, []);

  const discountPercentage =
    plans.length > 0
      ? Math.max(
          ...plans.map((p) =>
            p.monthlyPrice > 0
              ? Math.round(
                  ((p.monthlyPrice * 12 - p.yearlyPrice) /
                    (p.monthlyPrice * 12)) *
                    100,
                )
              : 0,
          ),
        )
      : 17;

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
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
          <p className="text-white/40 font-light text-xl max-w-xl mx-auto mb-10">
            No complicated plans. Choose what fits your shop.
          </p>

          <div className="flex justify-center items-center gap-4 text-white mb-24 -mt-2">
            <span
              className={`text-sm font-medium ${!isYearly ? "text-white" : "text-white/50"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
            >
              <span
                className={`${
                  isYearly ? "translate-x-8 bg-gold" : "translate-x-1 bg-white"
                } inline-block h-5 w-5 transform rounded-full transition-transform duration-200 ease-in-out`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-medium ${isYearly ? "text-white" : "text-white/50"}`}
              >
                Yearly
              </span>
              <span className="px-2 py-1 bg-gold/20 text-gold text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                Save {discountPercentage}%
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const isPopular = plan.tier === "PREMIUM";
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const period = isYearly ? "/year" : "/month";

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className={`relative rounded-[3rem] p-10 xl:p-12 transition-all duration-700 bg-[#141414] border ${isPopular ? "border-gold/30 lg:-mt-8 lg:mb-8 scale-100 lg:scale-105 z-20" : "border-white/5 z-10 hover:bg-[#181818]"}`}
              >
                {isPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold text-black text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-gold-light/50">
                    Most Popular
                  </div>
                )}

                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <h3
                      className={`text-2xl font-heading font-medium mb-4 ${isPopular ? "text-gold italic" : "text-white"}`}
                    >
                      {plan.name} Plan
                    </h3>
                    <div className="flex items-end mb-2">
                      <span className="text-5xl font-heading text-white font-medium tracking-tight bg-clip-text text-transparent bg-white">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={price}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="inline-block"
                          >
                            ₹{new Intl.NumberFormat("en-IN").format(price)}
                          </motion.span>
                        </AnimatePresence>
                      </span>
                      <span className="text-white/30 ml-2 text-sm font-light mb-1">
                        {period}
                      </span>
                    </div>
                    {isYearly && (
                      <p className="text-emerald-400 text-xs font-medium mt-2">
                        Save ₹
                        {new Intl.NumberFormat("en-IN").format(
                          plan.monthlyPrice * 12 - plan.yearlyPrice,
                        )}{" "}
                        a year
                      </p>
                    )}
                    <p className="text-white/40 text-sm font-light mt-4 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="w-full h-[1px] bg-linear-to-r from-transparent via-white/10 to-transparent mb-8" />

                  <ul className="space-y-5 mb-12 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start group">
                        <div
                          className={`mt-0.5 mr-4 rounded-full p-1 border border-white/5 transition-colors duration-500 group-hover:border-gold/30 ${isPopular ? "bg-gold/10 border-gold/20" : "bg-white/5"}`}
                        >
                          <Check
                            className={`h-3 w-3 ${isPopular ? "text-gold" : "text-emerald-400 group-hover:text-gold"}`}
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
                      isPopular
                        ? "bg-gold hover:bg-gold-light text-black border-gold shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-1"
                        : "bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-gold/30 hover:text-gold"
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            );
          })}
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
