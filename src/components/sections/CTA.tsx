"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Users, CheckCircle2 } from "lucide-react";

const perks = [
  "Free access — no credit card needed",
  "Weekly live calls with AI experts",
  "2,400+ member network",
  "Ready-to-deploy AI templates",
  "Private community access",
  "Cancel anytime",
];

export default function CTA() {
  return (
    <section id="cta" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050C1A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(37,88,232,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(59,76,200,0.1),transparent)]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,88,232,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,88,232,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="badge-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              PLACES LIMITÉES CHAQUE MOIS
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6">
            Votre croissance
            <br />
            <span className="gradient-text text-glow">n’attendra pas.</span>
          </h2>

          <p className="text-[#8A96B8] text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
Nous aidons les entreprises ambitieuses à attirer plus de clients,
augmenter leurs conversions et construire un système de croissance scalable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#community"
              className="group relative inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-white rounded-2xl bg-[#2558E8] hover:bg-[#1A46CC] transition-all duration-300 shadow-[0_0_40px_rgba(37,88,232,0.5)] hover:shadow-[0_0_60px_rgba(37,88,232,0.7)] hover:-translate-y-0.5"
            >
              <Users size={20} />
              Réserver un appel stratégique
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
            <a
              href="#community"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-[#C0C8D8] rounded-2xl border border-white/[0.12] hover:border-[#2558E8]/50 hover:bg-[#2558E8]/08 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              <Zap size={20} className="text-[#4B78F5]" />
             Découvrir notre méthode
            </a>
          </div>

          {/* Perks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {perks.map((perk) => (
              <div key={perk} className="flex items-center gap-2 text-sm text-[#8A96B8]">
                <CheckCircle2 size={14} className="text-[#4B78F5] flex-shrink-0" />
                {perk}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
