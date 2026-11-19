"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiLayers } from "react-icons/fi";
import { LuCheck, LuSparkles } from "react-icons/lu";

const categories = ["All", "Web App", "Mobile", "Fintech / ERP", "AI Solution"];

const projects = [
  {
    title: "ApexCloud Enterprise Management Suite",
    category: "Fintech / ERP",
    desc: "A unified enterprise resource planning and automated financial ledger system handling 50,000+ daily transactions across distributed retail branches.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    tags: ["Next.js", "PostgreSQL", "Kafka", "Docker"],
    stats: "2.4M+ Transactions Processed",
    client: "National Logistics Ltd"
  },
  {
    title: "DheuPay - Next-Gen Fintech Neo-Banking App",
    category: "Mobile",
    desc: "A frictionless cross-border remittance, micro-savings, and instant contactless QR payment application with biometric face-authentication.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    tags: ["React Native", "Node.js", "PCI-DSS Compliant", "Redis"],
    stats: "500K+ Active Users",
    client: "Dheu Capital Ventures"
  },
  {
    title: "NexusAI - Enterprise Document Intelligence",
    category: "AI Solution",
    desc: "Agentic AI pipeline parsing complex unstructured PDF legal agreements, extracting key risks, and querying via conversational RAG with citation links.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    tags: ["FastAPI", "OpenAI", "LangChain", "Vector DB"],
    stats: "85% Reduction in Review Time",
    client: "Global Legal Group"
  },
  {
    title: "AgroFlow - Smart Agriculture & Supply Chain Portal",
    category: "Web App",
    desc: "Inspired by national digitization initiatives, connecting 100,000+ farmers with live market price forecasts, weather radars, and cold storage logistics.",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1000&q=80",
    tags: ["Next.js 16", "Tailwind CSS", "GraphQL", "Leaflet GIS"],
    stats: "Over 120 Regional Hubs",
    client: "GovTech Initiative"
  },
  {
    title: "Synthetix Health - Telemedicine & Patient Portal",
    category: "Web App",
    desc: "HIPAA-compliant video consultation, automated electronic health records (EHR), prescription routing, and smart AI symptom assessment.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "WebRTC", "Express", "MongoDB"],
    stats: "99.99% Call Reliability",
    client: "HealthCare Systems"
  },
  {
    title: "SwiftFleet - Telematics & Fleet Tracking",
    category: "Mobile",
    desc: "Real-time GPS vehicle tracking, predictive maintenance alerts, fuel consumption analytics, and driver behavior scoring application.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
    tags: ["Flutter", "MQTT", "AWS IoT Core", "Go"],
    stats: "15,000+ Vehicles Monitored",
    client: "Express Haulage"
  }
];

export default function Works() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter((p) => p.category === activeTab);

  return (
    <section id="works" className="py-24 relative overflow-hidden">
      {/* Decorative Wave lines */}
      <div className="absolute top-1/2 left-0 right-0 h-96 bg-gradient-to-b from-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
              Case Studies & Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Featured Works That Define Digital Excellence
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base">
            Take a look at custom platforms, government solutions, and consumer apps engineered by Code Dheu.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                  : "glass text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl overflow-hidden group flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
              >
                {/* Mockup Image Container */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-white/10">
                    {project.category}
                  </span>

                  {/* Impact badge */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                    <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400 bg-emerald-950/70 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      <LuSparkles /> {project.stats}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block mb-1">Client: {project.client}</span>
                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <a
                        href="#contact"
                        className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
                      >
                        <span>View Project Details</span>
                        <FiExternalLink />
                      </a>
                      <span className="text-slate-500 text-xs">Production Grade</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
