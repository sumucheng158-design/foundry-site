"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const goals = [
  {
    year: "2030",
    title: "碳中和製程",
    desc: "所有晶圓廠全面轉用再生能源，並透過碳捕集技術達成製造碳中和。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    progress: 68,
    color: "from-emerald-500 to-green-400",
    accent: "text-emerald-400",
  },
  {
    year: "2027",
    title: "零廢水排放",
    desc: "導入閉迴路超純水系統，實現 99% 製程廢水回收再利用率。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    progress: 82,
    color: "from-blue-500 to-cyan-400",
    accent: "text-blue-400",
  },
  {
    year: "2028",
    title: "無 PFAS 製程",
    desc: "全面淘汰製程中的永久性化學物質，開發環境友善替代蝕刻材料。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.93 4.93l14.14 14.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    progress: 45,
    color: "from-violet-500 to-purple-400",
    accent: "text-violet-400",
  },
  {
    year: "2035",
    title: "供應鏈淨零",
    desc: "攜手 200+ 供應商共同推動範疇三碳排減量，建構半導體產業綠色供應鏈。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    progress: 30,
    color: "from-amber-500 to-yellow-400",
    accent: "text-amber-400",
  },
];

const metrics = [
  { label: "再生能源佔比", value: "78%", sub: "2024 年實績" },
  { label: "廢水回收率", value: "82%", sub: "行業平均 45%" },
  { label: "PUE 效能指標", value: "1.18", sub: "世界級潔淨室" },
  { label: "女性工程師比例", value: "38%", sub: "高於業界平均 2.1x" },
];

export default function Sustainability() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sustainability" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#020508]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(16,185,129,0.12) 0%, transparent 70%)`,
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
          <p className="text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Sustainability
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5">
            負責任的半導體製造
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            科技進步不應以地球為代價。SiloTech 將永續發展深植於製程設計之中，
            打造對環境友善的半導體未來。
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {metrics.map((m, i) => (
            <div key={m.label} className="glass rounded-2xl p-6 border border-white/[0.06] text-center">
              <span className="text-3xl sm:text-4xl font-bold text-gradient-blue block mb-1">
                {m.value}
              </span>
              <span className="text-white text-sm font-semibold block mb-1">{m.label}</span>
              <span className="text-white/30 text-xs">{m.sub}</span>
            </div>
          ))}
        </motion.div>

        {/* Goals */}
        <div className="grid sm:grid-cols-2 gap-4">
          {goals.map((goal, i) => (
            <motion.div
              key={goal.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="glass rounded-2xl p-6 border border-white/[0.06]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${goal.accent}`}>{goal.icon}</div>
                <span className={`text-xs font-bold tracking-widest ${goal.accent} opacity-60`}>
                  目標 {goal.year}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{goal.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">{goal.desc}</p>
              {/* Progress bar */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${goal.progress}%` } : {}}
                    transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${goal.color} rounded-full`}
                  />
                </div>
                <span className={`text-xs font-bold ${goal.accent} shrink-0`}>
                  {goal.progress}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
