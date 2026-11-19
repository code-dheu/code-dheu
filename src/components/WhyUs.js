"use client";

import { motion } from "framer-motion";
import { 
  LuZap, 
  LuShieldAlert, 
  LuUsers, 
  LuAward, 
  LuCodeXml, 
  LuClock 
} from "react-icons/lu";

const reasons = [
  {
    icon: LuZap,
    title: "High Velocity Agile Execution",
    desc: "We ship clean production code twice as fast as traditional agencies, leveraging reusable micro-architectures and automated delivery pipelines."
  },
  {
    icon: LuCodeXml,
    title: "Top 1% Senior Engineers",
    desc: "No outsourced junior work. Every system is built and peer-reviewed by seasoned tech leads and full-stack software architects."
  },
  {
    icon: LuShieldAlert,
    title: "Bank-Grade Security & Compliance",
    desc: "Built-in OWASP compliance, end-to-end data encryption, granular RBAC, and adherence to international data privacy laws."
  },
  {
    icon: LuUsers,
    title: "Transparent Collaboration",
    desc: "Direct Slack channel access to engineers, daily stand-up summaries, and real-time sprint tracking on Jira and GitHub."
  },
  {
    icon: LuAward,
    title: "Proven Architecture Scalability",
    desc: "From 1,000 to 10,000,000 concurrent users — our cloud architectures scale automatically without service interruptions."
  },
  {
    icon: LuClock,
    title: "Zero Downtime Deployments",
    desc: "Blue-green and canary releases ensure your live users never experience a maintenance page or interrupted session."
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 relative bg-slate-950/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase bg-cyan-950/60 border border-cyan-800/40 px-3 py-1 rounded-full">
              Why Partner With Us
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
              Why Global Brands Choose Code Dheu
            </h2>
          </div>
          <p className="text-slate-400 max-w-lg text-sm sm:text-base">
            We don’t just write code; we architect sustainable, revenue-driving digital ecosystems that give you an unfair competitive edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="glass p-7 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform">
                  <Icon />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {r.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {r.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
