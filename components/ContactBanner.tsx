"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0a0a1a 0%, #0d1525 50%, #050d1a 100%)",
            border: "1px solid rgba(0,113,227,0.2)",
          }}
        >
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-[500px] h-[300px] rounded-full blur-3xl"
              style={{ background: "radial-gradient(ellipse, rgba(0,113,227,0.12) 0%, transparent 70%)" }}
            />
          </div>

          <div className="relative z-10 text-center px-8 py-20">
            <p className="text-e-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Partner With Us
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              共同定義下一世代晶片
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              無論是AI加速器、功率半導體或汽車晶片，
              SiloTech的工程師團隊將與您共同設計製程路線圖。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:partner@silotech.example.com"
                className="px-8 py-4 rounded-full bg-e-blue hover:bg-e-blue-light transition-colors text-white font-semibold text-base"
              >
                申請製造合作
              </a>
              <a
                href="#technology"
                className="px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-colors text-white font-semibold text-base"
              >
                下載技術手冊
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
