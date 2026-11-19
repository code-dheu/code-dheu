"use client";

import Link from "next/link";
import { LuWaves } from "react-icons/lu";
import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiFacebook, 
  FiArrowUp,
  FiMail,
  FiPhone,
  FiMapPin
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/25">
                <LuWaves className="text-2xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                  CODE <span className="text-gradient">DHEU</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-cyan-400 font-semibold">
                  Software Agency
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              Code Dheu empowers enterprises, governments, and venture-backed startups with high-performance digital products, scalable clouds, and cutting-edge software solutions.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
                <FiGithub />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
                <FiLinkedin />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
                <FiTwitter />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
                <FiFacebook />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#works" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
              <li><a href="#industries" className="hover:text-cyan-400 transition-colors">Industries</a></li>
              <li><a href="#process" className="hover:text-cyan-400 transition-colors">Our Process</a></li>
              <li><a href="#why-us" className="hover:text-cyan-400 transition-colors">Why Code Dheu</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Mobile Engineering</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">AI & LLM Integration</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Cloud & DevOps</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Enterprise ERP</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">HQ Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FiMapPin className="text-cyan-400 mt-1 flex-shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="text-cyan-400 flex-shrink-0" />
                <a href="mailto:contact@codedheu.com" className="hover:text-cyan-400">contact@codedheu.com</a>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-cyan-400 flex-shrink-0" />
                <span>+880 1700-000000</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Code Dheu Ltd. All rights reserved. Built with passion & precision.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
