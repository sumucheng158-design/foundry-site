"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const researchAreas = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "2D 材料電晶體",
    tag: "材料科學",
    desc: "探索 MoS₂、WSe₂ 等二維材料作為後矽時代通道材料，突破傳統 Si 的物理極限。",
    metric: "0.3nm 等效氧化層",
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
    glow: "rgba(6,182,212,0.08)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 1v4M12 19v4M1 12h4M19 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "神經形態運算",
    tag: "AI 架構",
    desc: "仿生突觸電晶體與記憶體內運算架構，將 AI 推論能耗降低 100 倍以上。",
    metric: "1fJ/synaptic op",
    accent: "text-violet-400",
    border: "border-violet-500/20",
    glow: "rgba(139,92,246,0.08)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "光電共封裝 (CPO)",
    tag: "光子整合",
    desc: "矽光子波導與 CMOS 電路單晶片整合，實現 Tb/s 級片內光互連。",
    metric: "1.6 Tb/s/mm²",
    accent: "text-amber-400",
    border: "border-amber-500/20",
    glow: "rgba(245,158,11,0.08)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "量子位元製程",
    tag: "量子計算",
    desc: "超導量子位元的矽基製造整合方案，配合極低溫電路設計，邁向量產量子晶片。",
    metric: "T₁ > 200μs 相干時間",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    glow: "rgba(16,185,129,0.08)",
  },
];

const labs = [
  { name: "新竹研發中心", area: "先進邏輯 & 封裝", staff: "1,200+" },
  { name: "台南量子實驗室", area: "量子與低溫電路", staff: "280+" },
  { name: "美國矽谷研究所", area: "AI 晶片架構", staff: "450+" },
  { name: "歐洲光子實驗室", area: "矽光子整合", staff: "180+" },
];

export default function Innovation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="innovation" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#030508]" />
        <div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 20% 20%, rgba(139,92,246,0.08) 0%, transparent 60%),
                              radial-gradient(ellipse 60% 40% at 80% 70%, rgba(6,182,212,0.06) 0%, transparent 60%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-e-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            R&amp;D Innovation
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5">
            定義下一個十年的技術
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            SiloTech 每年投入營收 15% 於研發，橫跨材料、元件、架構三個層次，
            佈局後摩爾定律時代的核心技術。
          </p>
        </motion.div>

        {/* Research Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {researchAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative glass rounded-2xl p-6 border ${area.border} group hover:scale-[1.02] transition-transform duration-300`}
              style={{ background: `linear-gradient(135deg, ${area.glow} 0%, transparent 100%)` }}
            >
              <div className={`${area.accent} mb-4`}>{area.icon}</div>
              <span className={`text-[10px] font-bold tracking-widest uppercase ${area.accent} opacity-70`}>
                {area.tag}
              </span>
              <h3 className="text-white font-bold text-base mt-1 mb-2">{area.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4">{area.desc}</p>
              <div className={`text-xs font-semibold ${area.accent} bg-white/5 rounded-lg px-3 py-2 inline-block`}>
                {area.metric}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Labs Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-white/30 text-xs font-semibold tracking-[0.2em] uppercase text-center mb-8">
            全球研發據點
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {labs.map((lab, i) => (
              <motion.div
                key={lab.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                className="glass rounded-xl p-5 border border-white/[0.06]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-e-blue" />
                  <span className="text-white font-semibold text-sm">{lab.name}</span>
                </div>
                <p className="text-white/40 text-xs mb-2">{lab.area}</p>
                <p className="text-e-blue text-sm font-bold">{lab.staff} 研究人員</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
