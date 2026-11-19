"use client";

import { motion } from "framer-motion";
import { LuQuote, LuStar } from "react-icons/lu";

const testimonials = [
  {
    quote: "Code Dheu built our enterprise ERP platform with the exact sophistication, security, and responsiveness we envisioned. Their architecture scaled to hundreds of thousands of users without a hiccup.",
    author: "Tanvir Rahman",
    role: "Chief Technology Officer",
    company: "Apex Global Logistics",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    quote: "Finding an engineering team with both deep UI design aesthetics and hardened backend skills is rare. Code Dheu delivered our fintech app two weeks ahead of schedule with flawless code quality.",
    author: "Elena Rostova",
    role: "Head of Digital Product",
    company: "FinNexus Europe",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    quote: "Their team worked alongside our internal stakeholders as genuine partners. Code Dheu represents the modern wave of digital engineering agencies in Bangladesh and beyond.",
    author: "Farhan Hossain",
    role: "Managing Director",
    company: "Horizon Retail Systems",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase bg-cyan-950/60 border border-cyan-800/40 px-3.5 py-1.5 rounded-full">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Trusted By Innovators & Enterprise Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <LuStar key={i} className="fill-current text-sm" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {t.role}, <span className="text-slate-300">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
