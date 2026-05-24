"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const stats = [
  { value: "2,400+", label: "Active Members", sub: "and growing daily" },
  { value: "150+", label: "AI Systems Built", sub: "across industries" },
  { value: "$2.8M+", label: "Revenue Generated", sub: "by our members" },
  { value: "98%", label: "Satisfaction Rate", sub: "from our community" },
];

const testimonials = [
  {
    quote:
      "Digital Space completely changed how I run my agency. The AI automation systems I learned here generate leads 24/7 without any manual work. ROI in the first 30 days.",
    name: "Marcus Chen",
    role: "Agency Owner",
    location: "San Francisco, CA",
    stars: 5,
    avatar: "MC",
  },
  {
    quote:
      "I've been in 20+ communities. None come close. The quality of members, the templates, the weekly calls — it's like having a team of AI experts in your pocket.",
    name: "Sophia Laurent",
    role: "SaaS Founder",
    location: "Paris, France",
    stars: 5,
    avatar: "SL",
  },
  {
    quote:
      "Went from zero AI knowledge to fully automating my content pipeline in 6 weeks. My business runs while I sleep. Digital Space made that possible.",
    name: "David Okafor",
    role: "Content Creator",
    location: "Lagos, Nigeria",
    stars: 5,
    avatar: "DO",
  },
];

const tools = [
  "Make.com", "n8n", "OpenAI", "Claude", "Notion", "Zapier", "Airtable", "Slack",
];

export default function SocialProof() {
  return (
    <section id="proof" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(37,88,232,0.08),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group hover:border-[#2558E8]/30 hover:bg-[#2558E8]/05 transition-all duration-300"
            >
              <div className="text-3xl lg:text-4xl font-black gradient-text-blue mb-1">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-[#8A96B8] text-xs">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="badge-pill mb-4">Social Proof</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-4">
            Trusted by AI builders worldwide
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col"
            >
              <Quote size={24} className="text-[#2558E8]/40 mb-4 flex-shrink-0" />
              <p className="text-[#C0C8D8] text-sm leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2558E8] to-[#3B4CC8] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-sm truncate">{t.name}</div>
                  <div className="text-[#8A96B8] text-xs">{t.role} · {t.location}</div>
                </div>
                <div className="ml-auto flex gap-0.5 flex-shrink-0">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={11} className="text-[#4B78F5] fill-[#4B78F5]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#8A96B8] text-xs uppercase tracking-widest mb-6 font-medium">
            Tools & platforms we master
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-xl text-sm text-[#8A96B8] border border-white/[0.07] bg-white/[0.03] hover:border-[#2558E8]/30 hover:text-[#C0C8D8] transition-all duration-200 font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
