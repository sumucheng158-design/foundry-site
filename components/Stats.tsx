"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "2nm", label: "最先進製程節點", sub: "FinFlex™電晶體架構" },
  { value: "300+", label: "專利技術", sub: "先進製程與封裝領域" },
  { value: "99.97%", label: "晶圓良率", sub: "業界領先水準" },
  { value: "40+", label: "全球合作夥伴", sub: "涵蓋15個國家與地區" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/[0.08]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col items-center text-center lg:px-8"
            >
              <span className="text-4xl sm:text-5xl font-bold text-gradient-blue mb-2">
                {stat.value}
              </span>
              <span className="text-white font-semibold text-sm mb-1">
                {stat.label}
              </span>
              <span className="text-white/40 text-xs">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
