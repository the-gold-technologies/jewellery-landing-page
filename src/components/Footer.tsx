"use client";

import Link from "next/link";
import { Mail, Globe, Share2, Info, Sparkles } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-32 pb-16 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-linear-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <img
              src="/Karatrix trans.png"
              alt="Karatrix"
              className="flex items-center space-x-3 mb-10 group h-8"
            />

            <p className="text-white/30 text-sm leading-relaxed mb-10 font-light max-w-xs">
              Built for jewellery shop owners who want control, clarity, and accurate tracking.
            </p>
            <div className="flex space-x-6">
              {[Share2, Globe, Info, Mail].map((Icon, i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-white/5 hover:border-gold/20 transition-all duration-500 cursor-pointer group"
                >
                  <Icon className="h-4 w-4 text-white/20 group-hover:text-gold transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white/50 mb-10 uppercase tracking-[0.4em] italic">
              Product
            </h4>
            <ul className="space-y-6">
              {["Features", "Solutions", "Testimonials", "Pricing", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-white/30 hover:text-gold transition-colors duration-500 font-light tracking-wide"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white/50 mb-10 uppercase tracking-[0.4em] italic">
              Company
            </h4>
            <ul className="space-y-6">
              {[
                "About Us",
                "Privacy Policy",
                "Terms of Service",
                "Help Center",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-white/30 hover:text-gold transition-colors duration-500 font-light tracking-wide"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white/50 mb-10 uppercase tracking-[0.4em] italic">
              Contact
            </h4>
            <p className="text-sm text-white/30 leading-loose mb-8 font-light max-w-xs">
              Direct access to our support setup team for jewelry boutique owners.
            </p>
            <Link
              href="#contact"
              className="group flex items-center text-gold font-bold text-xs uppercase tracking-widest"
            >
              Get in Touch{" "}
              <Sparkles className="ml-3 h-3 w-3 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.3em]">
            © {currentYear} Aureum Boutique SaaS. All rights reserved.
          </p>
          <div className="flex items-center space-x-10 text-[10px] text-white/20 font-bold uppercase tracking-[0.3em]">
            <span className="flex items-center group">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 shadow-[0_0_10px_rgba(52,211,153,0.5)] group-hover:scale-110 transition-transform" />
              System Prime
            </span>
            <span className="font-light italic">99.99% Uptime Fidelity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
