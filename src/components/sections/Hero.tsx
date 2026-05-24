"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Users, Zap, Star } from "lucide-react";
import { ElegantShape } from "@/components/ui/shape-landing-hero";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Deep space background */}
      <div className="absolute inset-0 bg-[#050C1A]">
        {/* Radial glow center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,88,232,0.18),transparent)]" />
        {/* Secondary glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_70%_80%,rgba(59,76,200,0.12),transparent)]" />
        {/* Star field */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Elegant pill shapes (brand-coloured) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large primary-blue pill — top-left */}
        <ElegantShape
          delay={0.3}
          width={580}
          height={130}
          rotate={12}
          gradient="from-[#2558E8]/[0.18]"
          className="left-[-8%] md:left-[-4%] top-[18%] md:top-[22%]"
        />
        {/* Indigo pill — bottom-right */}
        <ElegantShape
          delay={0.5}
          width={480}
          height={110}
          rotate={-15}
          gradient="from-[#3B4CC8]/[0.16]"
          className="right-[-4%] md:right-[0%] top-[68%] md:top-[72%]"
        />
        {/* Light-blue pill — bottom-left */}
        <ElegantShape
          delay={0.4}
          width={280}
          height={72}
          rotate={-8}
          gradient="from-[#4B78F5]/[0.14]"
          className="left-[4%] md:left-[8%] bottom-[8%] md:bottom-[12%]"
        />
        {/* Silver pill — top-right accent */}
        <ElegantShape
          delay={0.6}
          width={190}
          height={52}
          rotate={20}
          gradient="from-[#C0C8D8]/[0.10]"
          className="right-[14%] md:right-[18%] top-[10%] md:top-[14%]"
        />
        {/* Small brand-blue pill — top-center-left */}
        <ElegantShape
          delay={0.7}
          width={140}
          height={38}
          rotate={-25}
          gradient="from-[#2558E8]/[0.12]"
          className="left-[22%] md:left-[28%] top-[6%] md:top-[9%]"
        />
        {/* Extra wide deep pill — far right mid */}
        <ElegantShape
          delay={0.55}
          width={320}
          height={60}
          rotate={6}
          gradient="from-[#3B4CC8]/[0.10]"
          className="right-[-6%] md:right-[-2%] top-[40%] md:top-[44%]"
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,88,232,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(37,88,232,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="badge-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4B78F5] animate-pulse" />
            STRATÉGIES DIGITALES POUR MARQUES MODERNES
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-white">Le Futur De</span>
          <br />
          <span className="gradient-text text-glow">La Croissance Digitale</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl text-[#8A96B8] max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >


            Agence SMMA premium spécialisée en publicité digitale, branding, création de 
            contenu et stratégies de croissance pour startups, entreprises et marques ambitieuses.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-2xl bg-[#2558E8] hover:bg-[#1A46CC] transition-all duration-300 shadow-[0_0_30px_rgba(37,88,232,0.4)] hover:shadow-[0_0_50px_rgba(37,88,232,0.6)] hover:-translate-y-0.5"
          >
            <Users size={18} />
            Développer Mon Business
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
          <a
            href="#community"
            className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-[#C0C8D8] rounded-2xl border border-white/[0.12] hover:border-[#2558E8]/50 hover:bg-[#2558E8]/08 hover:text-white transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
          >
            <Zap size={18} className="text-[#4B78F5]" />
            Audit Gratuit
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#8A96B8]"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-[#050C1A] bg-gradient-to-br from-[#2558E8] to-[#3B4CC8] flex items-center justify-center text-[10px] font-bold text-white"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span>
              <strong className="text-white font-semibold">120+</strong> Marques Accompagnées
            </span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/10" />
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={13} className="text-[#4B78F5] fill-[#4B78F5]" />
            ))}
            <span className="ml-1">
              <strong className="text-white font-semibold">4.9/5</strong> Satisfaction Client
            </span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Campagnes Actives En Temps Réel</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050C1A] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] text-[#8A96B8] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#2558E8]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
