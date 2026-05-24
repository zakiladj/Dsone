"use client";

import { motion } from "framer-motion";
import {
  Video,
  Users,
  LayoutTemplate,
  Cpu,
  BookOpen,
  Lock,
  Lightbulb,
  Folder,
} from "lucide-react";

const benefits = [
  {
    icon: Video,
    title: "Weekly Live Calls",
    desc: "Join live strategy sessions, Q&As, and deep-dives with AI experts and successful entrepreneurs every week.",
    badge: "Live",
  },
  {
    icon: Users,
    title: "Elite Networking",
    desc: "Connect with 2,400+ vetted entrepreneurs, agencies, and builders all operating at the cutting edge of AI.",
    badge: "Network",
  },
  {
    icon: LayoutTemplate,
    title: "Done-For-You Templates",
    desc: "Get plug-and-play automation templates, prompt libraries, and workflow blueprints worth thousands of dollars.",
    badge: "Templates",
  },
  {
    icon: Cpu,
    title: "AI Systems & Builds",
    desc: "Access pre-built AI systems you can deploy immediately — lead gen bots, content engines, CRM automations and more.",
    badge: "Systems",
  },
  {
    icon: BookOpen,
    title: "Step-by-Step Tutorials",
    desc: "Video tutorials and written guides for every skill level — from first automation to 7-figure AI-powered business.",
    badge: "Learn",
  },
  {
    icon: Lock,
    title: "Private Community",
    desc: "An exclusive space free from noise. Share wins, get feedback, find partners — with people who actually get it.",
    badge: "Private",
  },
  {
    icon: Lightbulb,
    title: "Expert Mentorship",
    desc: "Get direct access to mentors who have built real businesses with AI — not theory, real-world execution.",
    badge: "Mentorship",
  },
  {
    icon: Folder,
    title: "Resource Vault",
    desc: "A constantly growing library of tools, SOPs, case studies, and playbooks from top AI operators.",
    badge: "Resources",
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
              Everything inside
              <br />
              <span className="gradient-text">Digital Space</span>
            </h2>
            <p className="text-[#8A96B8] text-base leading-relaxed font-light mb-8 max-w-md">
              This isn't just a community. It's the most comprehensive AI business accelerator
              available — built by practitioners, for practitioners.
            </p>
            <div className="glass-card rounded-2xl p-6 border-[#2558E8]/20">
              <div className="text-[#4B78F5] font-bold text-2xl mb-1">$0</div>
              <div className="text-white font-semibold mb-1">Free to join</div>
              <div className="text-[#8A96B8] text-sm">
                Start for free. Upgrade when you're ready to go deeper.
              </div>
              <a
                href="#cta"
                className="mt-5 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2558E8] text-white font-semibold text-sm hover:bg-[#1A46CC] transition-all duration-200 shadow-[0_0_20px_rgba(37,88,232,0.35)]"
              >
                Claim Your Spot
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
