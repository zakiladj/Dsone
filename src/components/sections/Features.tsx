"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Workflow,
  FileText,
  Target,
  Building2,
  Wrench,
  TrendingUp,
  BrainCircuit,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Automation",
    desc: "Build end-to-end automation pipelines that replace repetitive tasks and free your team to focus on high-value work.",
    color: "#2558E8",
  },
  {
    icon: Bot,
    title: "AI Agents",
    desc: "Deploy autonomous AI agents that research, write, communicate, and execute complex multi-step workflows independently.",
    color: "#4B78F5",
  },
  {
    icon: Workflow,
    title: "Workflow Systems",
    desc: "Design scalable business workflows with Make, n8n, and Zapier — from simple triggers to enterprise-grade automation.",
    color: "#3B4CC8",
  },
  {
    icon: FileText,
    title: "Content Automation",
    desc: "Generate, repurpose, and distribute high-quality content across every channel on complete autopilot.",
    color: "#2558E8",
  },
  {
    icon: Target,
    title: "Lead Generation",
    desc: "Build AI-powered prospecting and outreach systems that fill your pipeline while you sleep — 24/7, 365 days.",
    color: "#4B78F5",
  },
  {
    icon: Building2,
    title: "Business Systems",
    desc: "Systematize your entire business operations — from onboarding to delivery — with intelligent, interconnected automations.",
    color: "#3B4CC8",
  },
  {
    icon: Wrench,
    title: "AI Tools Stack",
    desc: "Master the most powerful AI tools on the market and learn to combine them into unstoppable business machines.",
    color: "#2558E8",
  },
  {
    icon: TrendingUp,
    title: "Scaling Operations",
    desc: "Learn proven frameworks to scale from solopreneur to 7-figure automated business using AI-first thinking.",
    color: "#4B78F5",
  },
];

export default function Features() {
  return (
    <section id="features" className="section relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#2558E8]/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_50%,rgba(37,88,232,0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-pill mb-5">What You'll Master</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4 mb-4 tracking-tight leading-tight">
            Everything you need to
            <br />
            <span className="gradient-text">dominate with AI</span>
          </h2>
          <p className="text-[#8A96B8] text-lg max-w-xl mx-auto font-light">
            Eight core pillars that transform how you build, grow, and scale your business.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col group cursor-default"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${feat.color}22, ${feat.color}10)`,
                    border: `1px solid ${feat.color}30`,
                    boxShadow: `0 0 20px ${feat.color}15`,
                  }}
                >
                  <Icon size={20} style={{ color: feat.color }} />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{feat.title}</h3>
                <p className="text-[#8A96B8] text-sm leading-relaxed font-light">{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#2558E8]/20 to-transparent" />
    </section>
  );
}
