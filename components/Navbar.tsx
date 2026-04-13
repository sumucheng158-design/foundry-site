"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { label: "技術平台", href: "#technology" },
  { label: "製造能力", href: "#manufacturing" },
  { label: "研發創新", href: "#innovation" },
  { label: "永續發展", href: "#sustainability" },
  { label: "關於我們", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <Logo />
            <span className="text-white font-semibold text-[15px] tracking-tight">
              SiloTech
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] text-white/60 hover:text-white transition-colors duration-200 font-medium tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="text-[13px] font-medium text-e-blue hover:text-e-blue-light transition-colors"
            >
              聯絡我們
            </a>
            <a
              href="#contact"
              className="text-[13px] font-medium bg-e-blue hover:bg-e-blue-light transition-colors text-white px-4 py-1.5 rounded-full"
            >
              申請合作
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-20 px-6"
          >
            <ul className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-semibold text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-12 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-3 rounded-full border border-white/20 text-white text-[15px] font-medium"
              >
                聯絡我們
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-3 rounded-full bg-e-blue text-white text-[15px] font-medium"
              >
                申請合作
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
