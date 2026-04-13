"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ChipModel from "./ChipModel";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,113,227,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,113,227,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,113,227,0.12) 0%, rgba(0,113,227,0.03) 50%, transparent 70%)",
          }}
        />
      </div>

      {/* Parallax content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="h-px w-8 bg-e-blue" />
          <span className="text-e-blue text-xs font-semibold tracking-[0.2em] uppercase">
            Next-Generation Semiconductor Foundry
          </span>
          <span className="h-px w-8 bg-e-blue" />
        </motion.div>

        {/* Chip visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <ChipModel />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-gradient">精微之間，</span>
          <br />
          <span className="text-white">驅動未來</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/50 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10"
        >
          SiloTech Foundry 以 2nm 級先進製程為核心，
          結合全棧封裝技術，為全球領先的半導體設計公司提供量產解決方案。
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#technology"
            className="px-8 py-3.5 rounded-full bg-e-blue hover:bg-e-blue-light transition-colors text-white font-semibold text-[15px]"
          >
            探索技術平台
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 transition-colors text-white font-semibold text-[15px]"
          >
            申請製造合作
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
