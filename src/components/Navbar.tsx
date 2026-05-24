"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050C1A]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_40px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-white/10 group-hover:ring-[#2558E8]/40 transition-all duration-300">
              <Image
                src="/logo.png"
                alt="Digital Space"
                fill
                className="object-contain scale-90"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-base tracking-tight">
                Digital<span className="text-[#4B78F5]">S</span>Pace
              </span>
              <span className="text-[#8A96B8] text-[10px] tracking-wider uppercase hidden sm:block">
                AI Community
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#8A96B8] hover:text-white transition-colors duration-200 font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#2558E8] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#community"
              className="text-sm text-[#8A96B8] hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 font-medium"
            >
              Sign In
            </a>
            <a
              href="#cta"
              className="text-sm font-semibold px-5 py-2.5 rounded-xl bg-[#2558E8] hover:bg-[#1A46CC] text-white transition-all duration-200 shadow-[0_0_20px_rgba(37,88,232,0.35)] hover:shadow-[0_0_30px_rgba(37,88,232,0.5)]"
            >
              Join Community
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-[#8A96B8] hover:text-white hover:border-white/20 transition-all"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/[0.06] bg-[#050C1A]/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#8A96B8] hover:text-white font-medium text-base transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3 border-t border-white/[0.06]">
                <a
                  href="#cta"
                  onClick={() => setMobileOpen(false)}
                  className="text-center font-semibold py-3 rounded-xl bg-[#2558E8] text-white shadow-[0_0_20px_rgba(37,88,232,0.35)]"
                >
                  Join Community
                </a>
                <a
                  href="#community"
                  className="text-center text-[#8A96B8] hover:text-white font-medium py-2 transition-colors"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
