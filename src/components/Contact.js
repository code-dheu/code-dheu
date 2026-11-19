"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiCheckCircle 
} from "react-icons/fi";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Custom Web Application",
    budget: "$5,000 - $15,000",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Fire celebratory confetti for interactive UX
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {}
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/80">
      {/* Background glow */}
      <div className="glow-mesh w-[500px] h-[500px] bg-cyan-600/10 bottom-0 right-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column info */}
          <div>
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase bg-cyan-950/60 border border-cyan-800/40 px-3.5 py-1.5 rounded-full">
              Let's Build Together
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-4">
              Have a Project in Mind? <br />
              <span className="text-gradient">Ride The Wave With Us.</span>
            </h2>
            <p className="mt-6 text-slate-300 text-base leading-relaxed">
              Whether you need to architect a nationwide enterprise system, launch a consumer mobile app, or modernize your cloud infrastructure, our architects are ready to assist.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl flex-shrink-0">
                  <FiMail />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Email Us</h4>
                  <a href="mailto:contact@codedheu.com" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                    contact@codedheu.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-xl flex-shrink-0">
                  <FiPhone />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Direct Hotline</h4>
                  <a href="tel:+8801700000000" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                    +880 1700-000000 / +880 1800-000000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl flex-shrink-0">
                  <FiMapPin />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Engineering HQ</h4>
                  <p className="text-sm font-semibold text-white">
                    Dhaka, Bangladesh • Global Remote Engineering Services
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 border border-cyan-500/40">
                  <FiCheckCircle />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Transmitted!</h3>
                <p className="text-slate-300 text-sm max-w-sm mx-auto mb-6">
                  Thank you for reaching out to Code Dheu. Our solution architects will review your scope and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe (TechCorp)"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                      Required Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors"
                    >
                      <option className="bg-slate-900 text-white">Custom Web Application</option>
                      <option className="bg-slate-900 text-white">Mobile Application</option>
                      <option className="bg-slate-900 text-white">Enterprise ERP / GovTech</option>
                      <option className="bg-slate-900 text-white">AI & Machine Learning</option>
                      <option className="bg-slate-900 text-white">Cloud Infrastructure / DevOps</option>
                      <option className="bg-slate-900 text-white">UI/UX & Design System</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                      Project Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors"
                    >
                      <option className="bg-slate-900 text-white">&lt; $5,000</option>
                      <option className="bg-slate-900 text-white">$5,000 - $15,000</option>
                      <option className="bg-slate-900 text-white">$15,000 - $50,000</option>
                      <option className="bg-slate-900 text-white">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                    Project Overview & Goals
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the project scope, timeline, and deliverables..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all duration-300 text-sm"
                >
                  <FiSend />
                  <span>Submit Project Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
