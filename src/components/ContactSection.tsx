"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Calendar, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <Sparkles className="h-4 w-4 text-gold/60" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 italic">
              Connect
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-medium text-white mb-6 leading-tight">
            Talk to <span className="gold-text-gradient italic">Us.</span>
          </h2>
          <p className="text-white/40 font-light text-lg max-w-2xl mx-auto">
            Have questions or want to see how this works for your shop? We're here to help.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto glass rounded-[3rem] overflow-hidden border border-white/10 flex flex-col lg:flex-row shadow-2xl shadow-black/50"
        >
          {/* Subtle glow behind the entire card */}
          <div className="absolute inset-0 bg-gold/5 blur-[100px] pointer-events-none" />

          {/* Left Panel - Deep Info Background */}
          <div className="lg:w-2/5 p-12 lg:p-16 relative bg-charcoal/90 border-r border-white/5 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-heading text-white mb-8 font-medium">
                Get in <span className="gold-text-gradient italic">Touch</span>
              </h3>
              
              <div className="space-y-10">
                <div className="group relative transition-colors duration-500">
                  <div className="flex items-start space-x-6">
                    <div className="h-10 w-10 flex items-center justify-center text-white/50 group-hover:text-gold transition-colors shrink-0">
                      <Phone size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Call / WhatsApp</h4>
                      <p className="text-white/40 text-sm font-light">Get quick answers</p>
                    </div>
                  </div>
                </div>

                <div className="group relative transition-colors duration-500">
                  <div className="flex items-start space-x-6">
                    <div className="h-10 w-10 flex items-center justify-center text-white/50 group-hover:text-gold transition-colors shrink-0">
                      <Mail size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Email</h4>
                      <p className="text-white/40 text-sm font-light">Get detailed support</p>
                    </div>
                  </div>
                </div>

                <div className="group relative transition-colors duration-500">
                  <div className="flex items-start space-x-6">
                    <div className="h-10 w-10 flex items-center justify-center text-white/50 group-hover:text-gold transition-colors shrink-0">
                      <Calendar size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Book Demo</h4>
                      <p className="text-white/40 text-sm font-light">See how it works for your shop</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-white/10">
              <p className="text-white/30 text-xs font-light tracking-wide leading-relaxed">
                Direct access to our architectural setup team for global boutique deployments.
              </p>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="lg:w-3/5 p-12 lg:p-16 relative bg-white/[0.01]">
            <form className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group/input">
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-0 border-b border-white/10 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-gold transition-colors peer font-light text-lg"
                    placeholder="Name"
                    required
                  />
                  <label htmlFor="name" className="absolute left-0 -top-3 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-gold">
                    Your Name
                  </label>
                </div>

                <div className="relative group/input">
                  <input
                    type="text"
                    id="shopName"
                    className="w-full bg-transparent border-0 border-b border-white/10 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-gold transition-colors peer font-light text-lg"
                    placeholder="Shop Name"
                    required
                  />
                  <label htmlFor="shopName" className="absolute left-0 -top-3 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-gold">
                    Shop Name
                  </label>
                </div>
              </div>

              <div className="relative group/input">
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-transparent border-0 border-b border-white/10 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-gold transition-colors peer font-light text-lg"
                  placeholder="Phone"
                  required
                />
                <label htmlFor="phone" className="absolute left-0 -top-3 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-gold">
                  Phone Number
                </label>
              </div>

              <div className="relative group/input pt-2">
                <textarea
                  id="message"
                  rows={3}
                  className="w-full bg-transparent border-0 border-b border-white/10 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-gold transition-colors peer font-light text-lg resize-none"
                  placeholder="Message"
                  required
                />
                <label htmlFor="message" className="absolute left-0 -top-1 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 peer-focus:-top-1 peer-focus:text-[10px] peer-focus:text-gold">
                  How can we help?
                </label>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-6">
                <p className="text-white/30 text-xs font-light italic order-2 sm:order-1">
                  We usually respond within a few hours.
                </p>
                <Button className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-black font-bold px-10 py-7 rounded-full uppercase tracking-[0.2em] text-[11px] shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition-all order-1 sm:order-2 flex items-center group/btn">
                  Request a Call Back
                  <ArrowRight className="ml-3 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
