"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Gem, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <div className="fixed top-24 w-full z-50 flex justify-center px-4">
      <motion.nav
        animate={{ 
          width: isScrolled ? "fit-content" : "100%",
          maxWidth: isScrolled ? "800px" : "1200px",
          y: isScrolled ? -40 : 0
        }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className={`glass-pill w-full flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4 rounded-3xl"
        }`}
      >
        <div className="flex items-center space-x-8 px-4">
          <Link href="/" className="flex items-center space-x-2 group">
            <Gem className="h-6 w-6 text-gold group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-lg font-heading font-bold tracking-tight text-white hidden sm:inline">
              AUREUM<span className="text-gold italic">SAAS</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4 px-4">
           {/* Dynamic Action Buttons */}
           <div className="hidden sm:flex items-center space-x-2 border-r border-white/10 pr-4 mr-2">
              <Mail className="h-4 w-4 text-white/40 hover:text-gold cursor-pointer" />
              <Phone className="h-4 w-4 text-white/40 hover:text-gold cursor-pointer" />
           </div>

           <Link href="https://inventory-management-indol-two.vercel.app/login" className="hidden md:inline">
              <span className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-gold cursor-pointer px-2">
                Login
              </span>
           </Link>

           <Link href="https://inventory-management-indol-two.vercel.app/register">
              <Button size="sm" className="bg-gold hover:bg-gold-dark text-charcoal font-bold px-5 rounded-full text-[10px] uppercase tracking-widest h-9">
                Get Started
              </Button>
           </Link>

           {/* Mobile menu button */}
           <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gold transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
           </div>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 glass rounded-3xl p-8 md:hidden shadow-3xl z-40"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold text-white/80 hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/10" />
              <div className="flex flex-col space-y-4">
                <Link href="https://inventory-management-indol-two.vercel.app/login">
                  <div className="text-center font-bold text-white/60">Login</div>
                </Link>
                <Link href="https://inventory-management-indol-two.vercel.app/register">
                  <Button className="w-full bg-gold hover:bg-gold-dark text-charcoal font-bold h-12 rounded-2xl">
                    Launch Sandbox
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
