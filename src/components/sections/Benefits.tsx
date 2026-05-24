"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  BadgeDollarSign,
  Palette,
  Target,
  LineChart,
  Users,
  Lightbulb,
  Bot,
} from "lucide-react";

const benefits = [
  {
    icon: Megaphone,
    title: "Gestion Des Réseaux Sociaux",
    desc: "Création et gestion de contenu moderne pour développer votre visibilité et votre communauté.",
    badge: "Social",
  },
  {
    icon: BadgeDollarSign,
    title: "Publicités Performantes",
    desc: "Campagnes Meta Ads optimisées pour générer plus de ventes et de prospects qualifiés.",
    badge: "Ads",
  },
  {
    icon: Palette,
    title: "Branding Premium",
    desc: "Une identité visuelle forte pour renforcer la crédibilité et l’image de votre marque",
    badge: "Branding",
  },
  {
    icon: Target,
    title: "Stratégie Digitale",
    desc: "Des stratégies marketing adaptées à votre niche et à vos objectifs de croissance.",
    badge: "Strategy",
  },
  {
    icon: LineChart,
    title: "Analyse & Optimisation",
    desc: "Analyse des performances et optimisation continue pour maximiser vos résultats.",
    badge: "Analytics",
  },
  {
    icon: Users,
    title: "Accompagnement Personnalisé",
    desc: "Un suivi stratégique adapté à votre marque pour améliorer vos performances et accélérer votre croissance digitale.",
    badge: "Support",
  },
  {
    icon: Lightbulb,
    title: "Expertise Marketing",
    desc: "Des stratégies modernes basées sur l’analyse, la performance et les tendances actuelles du marketing digital.",
    badge: "Expertise",
  },
  {
    icon: Bot,
    title: "Solutions Digitales",
    desc: "Des outils performants et des solutions digitales conçus pour automatiser et développer votre activité efficacement.",
    badge: "Automation",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="section relative overflow-hidden bg-[#080F22]/60">
      {/* Decorative lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2558E8]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2558E8]/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_20%,rgba(59,76,200,0.08),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <span className="badge-pill mb-5">Member Benefits</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6 tracking-tight leading-tight">
              Pourquoi choisir
              <br />
              <span className="gradient-text">Digital Space ?</span>
            </h2>
            <p className="text-[#8A96B8] text-base leading-relaxed font-light mb-8 max-w-md">
              Nous accompagnons les entreprises modernes avec des stratégies digitales,
               des campagnes performantes et des systèmes marketing 
               conçus pour générer des résultats concrets.
            </p>
            <div className="glass-card rounded-2xl p-6 border-[#2558E8]/20">
              <div className="text-[#4B78F5] font-bold text-2xl mb-1">100 % </div>
              <div className="text-white font-semibold mb-1">Stratégie Personnalisée</div>
              <div className="text-[#8A96B8] text-sm">
               Chaque projet est conçu selon vos objectifs, votre marché et votre audience.
              </div>
              <a
                href="#cta"
                className="mt-5 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2558E8] text-white font-semibold text-sm hover:bg-[#1A46CC] transition-all duration-200 shadow-[0_0_20px_rgba(37,88,232,0.35)]"
              >
                Réserver Un Appel
              </a>
            </div>
          </motion.div>

          {/* Right: benefits grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="glass-card rounded-xl p-5 group hover:border-[#2558E8]/25 hover:bg-[#2558E8]/05 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#2558E8]/12 border border-[#2558E8]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#2558E8]/20 transition-all duration-300">
                      <Icon size={16} className="text-[#4B78F5]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-white font-semibold text-sm">{b.title}</span>
                        <span className="text-[10px] text-[#4B78F5] font-semibold bg-[#2558E8]/10 px-2 py-0.5 rounded-full border border-[#2558E8]/20">
                          {b.badge}
                        </span>
                      </div>
                      <p className="text-[#8A96B8] text-xs leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
