"use client";

import { motion } from "framer-motion";
import { 
  LuCode, 
  LuSmartphone, 
  LuCloud, 
  LuBrainCircuit, 
  LuDatabase, 
  LuPalette,
  LuArrowRight
} from "react-icons/lu";

const services = [
  {
    icon: LuCode,
    title: "Custom Web Application Development",
    desc: "Robust, high-throughput SaaS platforms, microfrontends, and enterprise portals engineered with Next.js, React, and modular cloud architectures.",
    tags: ["Next.js", "React", "Node.js", "Microservices"],
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: LuSmartphone,
    title: "Cross-Platform Mobile Apps",
    desc: "Native-grade iOS & Android applications tailored for high user retention, fluid 120 FPS animations, offline-first syncing, and biometrics.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: LuBrainCircuit,
    title: "AI & Machine Learning Solutions",
    desc: "Integrating generative AI workflows, automated agentic pipelines, custom LLM fine-tuning, and intelligent vision systems into your core business.",
    tags: ["LLMs", "RAG Systems", "Python", "Automation"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: LuCloud,
    title: "Cloud Infrastructure & DevOps",
    desc: "Scalable Kubernetes clusters, automated CI/CD pipelines, zero-trust security postures, and cost-optimized cloud migrations on AWS, GCP & Azure.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: LuDatabase,
    title: "Enterprise ERP & Govt Tech Systems",
    desc: "Mission-critical, secure public sector databases, automated billing, inventory control, and supply chain ERP architectures inspired by Dream71's legacy.",
    tags: ["PostgreSQL", "Enterprise Security", "GovTech", "ERP"],
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: LuPalette,
    title: "UI/UX Engineering & Design Systems",
    desc: "World-class human-centered design, atomic UI libraries, immersive user journeys, and prototypes tested for maximum conversion rates.",
    tags: ["Figma", "Design Systems", "Prototyping", "User Research"],
    gradient: "from-rose-500 to-red-500"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
            Our Core Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Comprehensive Digital Engineering Solutions
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            From visionary startups to large-scale enterprise organizations, we build software products that scale effortlessly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-3xl p-8 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                {/* Ambient hover glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500`} />

                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center text-white text-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>Discuss Solution</span>
                    <LuArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
