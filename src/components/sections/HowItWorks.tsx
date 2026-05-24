"use client";

import { motion } from "framer-motion";
import { UserPlus, Map, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Join the Community",
    desc: "Create your free account, complete your profile, and get instant access to the community, resources, and welcome orientation.",
    detail: "Takes less than 2 minutes",
  },
  {
    number: "02",
    icon: Map,
    title: "Follow Your Roadmap",
    desc: "Get a personalized AI roadmap based on your goals — agency growth, content automation, lead gen, or full business systems.",
    detail: "Tailored to your goals",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Build & Launch",
    desc: "Use our templates, tutorials, and live calls to build your first AI system within days — not months. Real results, real fast.",
    detail: "First system in 7 days",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Scale & Compound",
    desc: "Layer system upon system, automate more each week, and watch your business grow while you focus on what matters most.",
    detail: "Infinite leverage",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section relative overflow-hidden bg-[#080F22]/60">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2558E8]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2558E8]/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_90%_50%,rgba(37,88,232,0.07),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-pill mb-5">The Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-4 tracking-tight leading-tight">
            From zero to AI-powered
            <br />
            <span className="gradient-text">in four steps</span>
          </h2>
          <p className="text-[#8A96B8] text-lg max-w-xl mx-auto font-light">
            A proven system that takes you from complete beginner to confident AI operator —
            no technical background required.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#2558E8]/30 via-[#4B78F5]/50 to-[#2558E8]/30 z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-[#2558E8]/20 blur-xl scale-150 group-hover:bg-[#2558E8]/30 transition-all duration-500" />
                  <div className="relative w-24 h-24 rounded-full glass-card border-[#2558E8]/25 flex items-center justify-center group-hover:border-[#2558E8]/50 transition-all duration-300 glow-blue-sm">
                    <Icon size={28} className="text-[#4B78F5]" />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#2558E8] flex items-center justify-center text-[11px] font-black text-white shadow-[0_0_12px_rgba(37,88,232,0.6)]">
                    {i + 1}
                  </div>
                </div>

                <div className="text-[#4B78F5] text-xs font-bold tracking-widest mb-2">
                  {step.number}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-[#8A96B8] text-sm leading-relaxed mb-4">{step.desc}</p>
                <span className="text-xs text-[#4B78F5] font-semibold bg-[#2558E8]/10 border border-[#2558E8]/20 px-3 py-1 rounded-full">
                  {step.detail}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
