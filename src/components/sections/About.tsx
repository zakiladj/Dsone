"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Rocket, Globe, Shield } from "lucide-react";

const pillars = [
  {
    icon: Rocket,
    title: "Résultats Rapides",
    desc: "Des stratégies efficaces conçues pour générer rapidement plus de visibilité et de performances.",
  },
  {
    icon: Globe,
    title: "Présence Digitale Forte",
    desc: "Développez votre image de marque sur les réseaux sociaux avec une stratégie moderne et cohérente.",
  },
  {
    icon: Shield,
    title: "Accompagnement Premium",
    desc: "Nous offrons un accompagnement personnalisé et de qualité pour vous aider à atteindre vos objectifs.",
  },
];

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(37,88,232,0.05),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="badge-pill mb-5">QUI SOMMES-NOUS</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6 tracking-tight leading-tight">
              Nous Aidons Les Marques
              <span className="gradient-text"> À Dominer Le Digital</span>
            </h2>
            <p className="text-[#8A96B8] text-base leading-relaxed font-light mb-6">
              Digital Space accompagne les entreprises modernes
              dans leur croissance grâce à des stratégies digitales performantes,
              du contenu impactant et des campagnes publicitaires optimisées
            </p>
            <p className="text-[#8A96B8] text-base leading-relaxed font-light mb-10">
                Nous combinons branding, marketing et 
                automatisation pour aider les marques ambitieuses à développer 
              leur visibilité, attirer plus de clients et augmenter leurs résultats.
            </p>

            {/* Pillars */}
            <div className="flex flex-col gap-4">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#2558E8]/12 border border-[#2558E8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-[#4B78F5]" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">{p.title}</div>
                      <div className="text-[#8A96B8] text-sm leading-relaxed">{p.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#2558E8]/20 to-[#3B4CC8]/10 blur-3xl scale-110" />

              {/* Main card */}
              <div className="relative glass-card rounded-[2rem] p-10 flex flex-col items-center text-center max-w-md glow-blue">
                {/* Logo */}
                <div className="w-24 h-24 mb-6 relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2558E8]/30 to-[#3B4CC8]/20 blur-xl" />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#080F22]">
                    <Image src="/logo.png" alt="Digital Space" fill className="object-contain p-2" />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white mb-2">Digital Space</h3>
                <p className="text-[#4B78F5] text-sm font-medium mb-1 tracking-wide">
                  Let The Technology Drive our Business
                </p>
                <p className="text-[#8A96B8] text-xs mb-8">Agence Marketing Premium</p>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-4 w-full border-t border-white/[0.06] pt-6">
                  {[
                    { v: "120+", l: "Clients" },
                    { v: "3M+", l: "Vues Générées" },
                    { v: "$500K+", l: "Ads Gérés" },
                  ].map((s) => (
                    <div key={s.l} className="text-center">
                      <div className="text-xl font-black gradient-text-blue">{s.v}</div>
                      <div className="text-[#8A96B8] text-xs mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
