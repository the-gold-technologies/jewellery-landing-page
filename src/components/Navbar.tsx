"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Gem, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const navLinks = [
    { name: "Features", href: "#features" },
    {
      name: "Solutions",
      href: "#solutions",
    },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className=" flex items-center px-20 w-full justify-between py-6 sticky top-2 z-50">
      {/* Logo icon */}
      <img src="/Karatrix trans.png" alt="Karatrix" className=" h-8" />
      <div className=" glass-pill">
        <div className=" flex items-center gap-10 py-1 px-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-semibold capitalize tracking-widest text-white hover:text-gold "
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-gold transition-colors"
        >
          Login
        </Link>

        <Button className="bg-gold hover:bg-gold-dark text-charcoal hover:text-white font-bold py-6 px-8 rounded-4xl cursor-pointer">
          Book Demo
        </Button>
      </div>
    </nav>
  );
}
