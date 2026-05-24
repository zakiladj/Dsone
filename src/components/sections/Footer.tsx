"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { X, Link2, Camera, PlaySquare, Send, ArrowRight } from "lucide-react";

const footerLinks = {
  Agence: [
    { label: "À Propos", href: "#cta" },
    { label: "Nos Services", href: "#community" },
    { label: "Études de Cas", href: "#about" },
    { label: "Notre Processus", href: "#how-it-works" },
    { label: "Réserver un Appel", href: "#how-it-works" },
  ],
  Services: [
    { label: "Publicité Meta Ads", href: "#" },
    { label: "Création de Contenu", href: "#" },
    { label: "Lead Generation", href: "#" },
    { label: "Branding", href: "#" },
  ],
  Expertise: [
    { label: "Acquisition Client", href: "#features" },
    { label: "Scaling Business", href: "#features" },
    { label: "Performance Marketing", href: "#features" },
    { label: "Optimisation ROI", href: "#features" },
  ],
  // Legal: [
  //   { label: "Privacy Policy", href: "#" },
  //   { label: "Terms of Service", href: "#" },
  //   { label: "Cookie Policy", href: "#" },
  // ],
};

const socials = [
  { icon: X, href: "#", label: "X (Twitter)" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: PlaySquare, href: "#", label: "YouTube" },
  { icon: Send, href: "#", label: "Telegram" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-[#040A14]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#2558E8]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top section */}
        <div className="grid lg:grid-cols-5 gap-12 py-16 border-b border-white/[0.05]">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-white/10">
                <Image src="/logo.png" alt="Digital Space" fill className="object-contain scale-90" />
              </div>
              <div>
                <span className="text-white font-bold text-base tracking-tight block">
                  Digital<span className="text-[#4B78F5]">S</span>Pace
                </span>
                <span className="text-[#8A96B8] text-[10px] tracking-wider uppercase">
                  Agence
                </span>
              </div>
            </a>
            <p className="text-[#8A96B8] text-sm leading-relaxed mb-6 max-w-xs">
Nous aidons les marques ambitieuses à générer plus de clients,
augmenter leur visibilité et accélérer leur croissance grâce à des stratégies marketing performantes.
            </p>

            {/* Newsletter */}
            <p className="text-white text-sm font-semibold mb-3">Recevez nos stratégies de croissance</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Support@DigitalSpace.com"
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white text-sm placeholder-[#8A96B8] focus:outline-none focus:border-[#2558E8]/50 transition-colors"
              />
              <button className="px-4 py-2.5 rounded-xl bg-[#2558E8] text-white hover:bg-[#1A46CC] transition-all duration-200 flex-shrink-0 shadow-[0_0_16px_rgba(37,88,232,0.3)]">
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Socials */}
            <div className="flex gap-2 mt-6">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-[#8A96B8] hover:text-white hover:border-[#2558E8]/40 hover:bg-[#2558E8]/10 transition-all duration-200"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold text-sm mb-5">{category}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#8A96B8] hover:text-[#C0C8D8] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
          <p className="text-[#8A96B8] text-sm">
            © {new Date().getFullYear()} Digital Space. All rights reserved.
          </p>
          <p className="text-[#8A96B8] text-sm">
            Conçu pour accélérer votre.{" "}
            <span className="text-[#4B78F5] font-medium">Croissance.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
