"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const platforms = [
  {
    id: "logic",
    badge: "旗艦",
    title: "Advanced Logic",
    subtitle: "先進邏輯製程",
    description: "從5nm 到2nm全節點覆蓋，採用 FinFlex™多閘極電晶體技術，提供業界領先的PPA優化。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 17h8M17 13v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: "from-blue-600/20 to-blue-900/5",
    borderColor: "border-blue-500/30",
    accentColor: "text-blue-400",
    tabs: [
      {
        name: "製程節點",
        content: [
          { spec: "N2P (2nm+)", value: "2024 Q4 量產" },
          { spec: "N2 (2nm)", value: "2025 試產" },
          { spec: "N3E (3nm)", value: "已量產" },
          { spec: "N5 (5nm)", value: "成熟量產" },
          { spec: "電晶體密度 N2", value: "300M+ / mm²" },
        ],
      },
      {
        name: "效能指標",
        content: [
          { spec: "速度提升 (vs N3)", value: "+18%" },
          { spec: "功耗降低 (vs N3)", value: "-35%" },
          { spec: "面積縮減 (vs N3)", value: "-25%" },
          { spec: "SRAM 密度", value: "32Mb/mm²" },
          { spec: "金屬層數", value: "20+" },
        ],
      },
      {
        name: "應用場景",
        content: [
          { spec: "AI / 機器學習晶片", value: "✓" },
          { spec: "行動 SoC", value: "✓" },
          { spec: "高效能運算 (HPC)", value: "✓" },
          { spec: "網路 ASIC", value: "✓" },
          { spec: "自動駕駛", value: "✓" },
        ],
      },
    ],
  },
  {
    id: "specialty",
    badge: "多元",
    title: "Specialty Technology",
    subtitle: "特殊技術平台",
    description: "BCD、SiGe BiCMOS、GaN、MEMS等差異化製程，滿足汽車、工業、物聯網的嚴苛需求。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: "from-violet-600/20 to-violet-900/5",
    borderColor: "border-violet-500/30",
    accentColor: "text-violet-400",
    tabs: [
      {
        name: "製程類型",
        content: [
          { spec: "BCD (汽車級)", value: "0.18μm – 40nm" },
          { spec: "SiGe BiCMOS", value: "130nm HBT" },
          { spec: "GaN-on-Si", value: "功率 / 射頻" },
          { spec: "MEMS", value: "壓力感測器/IMU" },
          { spec: "CMOS Image Sensor", value: "BSI / FSI" },
        ],
      },
      {
        name: "認證規範",
        content: [
          { spec: "AEC-Q100 Grade 0", value: "車規認證" },
          { spec: "ISO 26262 ASIL-D", value: "功能安全" },
          { spec: "MIL-PRF-38535", value: "軍規品質" },
          { spec: "IEC 61508 SIL3", value: "工業安全" },
          { spec: "AQG 324", value: "功率模組" },
        ],
      },
      {
        name: "應用場景",
        content: [
          { spec: "電動車功率模組", value: "✓" },
          { spec: "5G射頻前端", value: "✓" },
          { spec: "工業感測器", value: "✓" },
          { spec: "醫療裝置", value: "✓" },
          { spec: "衛星通訊", value: "✓" },
        ],
      },
    ],
  },
  {
    id: "packaging",
    badge: "整合",
    title: "Advanced Packaging",
    subtitle: "先進封裝平台",
    description: "CoWoS®、SoIC®、InFO異質整合技術，突破單晶片物理極限，實現系統級晶片整合。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="2" y="8" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="8" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 4v4M6 16v4M18 4v4M18 16v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: "from-emerald-600/20 to-emerald-900/5",
    borderColor: "border-emerald-500/30",
    accentColor: "text-emerald-400",
    tabs: [
      {
        name: "封裝類型",
        content: [
          { spec: "CoWoS-S (2.5D)", value: "HBM3E 支援" },
          { spec: "CoWoS-L (橋接)", value: "超大尺寸基板" },
          { spec: "SoIC-X (3D)", value: "混合鍵合" },
          { spec: "InFO-OS", value: "扇出型封裝" },
          { spec: "Bump pitch", value: "9μm (Cu-Cu)" },
        ],
      },
      {
        name: "整合規格",
        content: [
          { spec: "最大 interposer 尺寸", value: "120mm × 120mm" },
          { spec: "HBM 容量", value: "最多 12 顆 HBM3E" },
          { spec: "Total bandwidth", value: "14.4 TB/s" },
          { spec: "層間互連密度", value: "1M+ bumps/cm²" },
          { spec: "TSV 直徑", value: "2μm" },
        ],
      },
      {
        name: "應用場景",
        content: [
          { spec: "AI加速器", value: "✓" },
          { spec: "GPU HPC", value: "✓" },
          { spec: "記憶體堆疊 (HBM)", value: "✓" },
          { spec: "Chiplet 整合", value: "✓" },
          { spec: "光電整合 (CPO)", value: "✓" },
        ],
      },
    ],
  },
];

export default function TechGrid() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [tabs, setTabs] = useState<Record<string, number>>({});
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const getTab = (id: string) => tabs[id] ?? 0;
  const setTab = (id: string, idx: number) =>
    setTabs((prev) => ({ ...prev, [id]: idx }));

  return (
    <section id="technology" ref={ref} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-e-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Technology Platforms
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5">
            三大核心技術平台
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            從晶片設計到封裝測試，SiloTech 提供全棧式半導體製造解決方案。
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid lg:grid-cols-3 gap-4">
          {platforms.map((p, i) => {
            const isOpen = activeCard === p.id;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative rounded-2xl border glass glass-hover cursor-pointer transition-all duration-500 overflow-hidden ${p.borderColor} ${isOpen ? "lg:col-span-3" : ""}`}
                onClick={() => setActiveCard(isOpen ? null : p.id)}
              >
                {/* Gradient bg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.color} pointer-events-none`}
                />

                {/* Card top */}
                <div className={`relative p-8 ${isOpen ? "flex items-center gap-6" : ""}`}>
                  <div className={`${p.accentColor} mb-4 ${isOpen ? "mb-0 shrink-0" : ""}`}>
                    {p.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full ${p.accentColor} bg-white/5 border border-current/20`}
                      >
                        {p.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {p.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-3">
                      {p.subtitle}
                    </p>
                    {!isOpen && (
                      <p className="text-white/60 text-sm leading-relaxed">
                        {p.description}
                      </p>
                    )}
                  </div>

                  {/* Expand icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${isOpen ? "" : "absolute top-8 right-8"} ${p.accentColor} shrink-0`}
                  >
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </motion.div>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="relative overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-2xl">
                          {p.description}
                        </p>

                        {/* Tabs */}
                        <div className="flex gap-2 mb-6" onClick={(e) => e.stopPropagation()}>
                          {p.tabs.map((tab, ti) => (
                            <button
                              key={tab.name}
                              onClick={() => setTab(p.id, ti)}
                              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                                getTab(p.id) === ti
                                  ? `${p.accentColor} bg-white/10 border border-current/30`
                                  : "text-white/40 hover:text-white/70"
                              }`}
                            >
                              {tab.name}
                            </button>
                          ))}
                        </div>

                        {/* Spec table */}
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={getTab(p.id)}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2"
                          >
                            {p.tabs[getTab(p.id)].content.map((row) => (
                              <div
                                key={row.spec}
                                className="flex items-center justify-between glass rounded-lg px-4 py-3"
                              >
                                <span className="text-white/50 text-xs">{row.spec}</span>
                                <span className={`text-xs font-semibold ${p.accentColor}`}>
                                  {row.value}
                                </span>
                              </div>
                            ))}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
