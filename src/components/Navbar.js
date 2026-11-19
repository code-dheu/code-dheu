"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { LuWaves } from "react-icons/lu";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
  { name: "Industries", href: "#industries" },
  { name: "Why Us", href: "#why-us" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section based on scroll position
      const scrollPos = window.scrollY + 250;
      for (const link of navLinks) {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020413]/80 backdrop-blur-xl py-3.5 shadow-2xl border-b border-purple-500/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-[#291146] flex items-center justify-center text-white shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform duration-300 border border-white/10">
            <LuWaves className="text-2xl animate-pulse" />
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-[#020413]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-purple-500/25 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-white bg-gradient-to-r from-cyan-500/30 via-purple-600/40 to-[#291146]/60 border border-cyan-400/40 shadow-lg shadow-purple-500/20"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-600 to-[#291146] hover:brightness-110 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-cyan-500/40 border border-white/10"
          >
            <span>Let's Talk</span>
            <FiArrowUpRight className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-purple-950/60 transition-colors border border-purple-500/20"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#020413]/95 backdrop-blur-2xl border-t border-purple-500/20 px-6 py-6 mt-3 flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-semibold px-4 py-2.5 rounded-xl transition-all ${
                  isActive
                    ? "bg-purple-900/40 text-cyan-400 border border-cyan-400/30"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full text-center py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-[#291146] text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 text-sm"
          >
            <span>Schedule A Call</span>
            <FiArrowUpRight />
          </Link>
        </div>
      )}
    </header>
  );
}
