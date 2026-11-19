"use client";

import { motion } from "framer-motion";
import { 
  LuLandmark, 
  LuHeartHandshake, 
  LuGraduationCap, 
  LuShoppingBag, 
  LuTruck, 
  LuBuilding2 
} from "react-icons/lu";

const industries = [
  {
    icon: LuLandmark,
    name: "Government & Public Sector",
    desc: "Citizen portals, biometric registers, digitizing national public documentation."
  },
  {
    icon: LuHeartHandshake,
    name: "Fintech & Banking",
    desc: "Digital wallets, automated KYC, micro-lending platforms, and secure payment rails."
  },
  {
    icon: LuGraduationCap,
    name: "EdTech & Learning Systems",
    desc: "Gamified learning apps, live classroom LMS, interactive educational assessments."
  },
  {
    icon: LuShoppingBag,
    name: "E-Commerce & Retail",
    desc: "Omnichannel inventory sync, AI recommendation engines, lightning-fast checkouts."
  },
  {
    icon: LuTruck,
    name: "Logistics & Supply Chain",
    desc: "Fleet tracking, automated warehouse dispatch, cold chain temperature monitors."
  },
  {
    icon: LuBuilding2,
    name: "Healthcare & MedTech",
    desc: "HIPAA-compliant telehealth, hospital management ERP, electronic prescriptions."
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 relative bg-slate-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
            Sectors We Transform
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Tailored Industry Expertise
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Similar to global leaders like Dream71, Code Dheu builds mission-critical solutions across varied vertical industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass p-6 rounded-2xl flex items-start gap-4 hover:border-cyan-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform flex-shrink-0">
                  <Icon />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
