"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const timeline = [
  { year: "2009", event: "創立於新竹科學園區，初期聚焦 28nm 特殊製程" },
  { year: "2013", event: "完成B輪融資，建立首座300mm晶圓廠" },
  { year: "2017", event: "推出 7nm FinFET 製程，正式進入先進邏輯領域" },
  { year: "2020", event: "EUV 光刻導入量產，客戶數突破 100 家" },
  { year: "2022", event: "啟動台南 Fab 3，專注先進封裝與 3D IC" },
  { year: "2024", event: "2nm N2P 製程試產成功，全球員工數突破 25,000 人" },
];

const leadership = [
  {
    name: "陳文博",
    title: "董事長暨執行長",
    bio: "前TSMC先進技術研發副總，主導5nm以下製程開發，史丹佛電機博士。",
    initials: "CB",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "林雅婷",
    title: "技術長 (CTO)",
    bio: "材料科學 PhD，主導 2D 材料電晶體研究，持有 120 項半導體製程專利。",
    initials: "YL",
    color: "from-violet-600 to-violet-800",
  },
  {
    name: "James Wu",
    title: "營運長 (COO)",
    bio: "前Intel製造副總，主導全球五座晶圓廠運營，六標準差黑帶認證。",
    initials: "JW",
    color: "from-emerald-600 to-emerald-800",
  },
  {
    name: "Sophie Chen",
    title: "財務長 (CFO)",
    bio: "哈佛MBA，主導SiloTech IPO及三次重大策略併購，累計資本市場經驗20年。",
    initials: "SC",
    color: "from-amber-600 to-amber-800",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(ellipse, rgba(0,113,227,0.4) 0%, transparent 70%)" }}
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
            About SiloTech
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5">
            15年的精密積累
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            從新竹一座小型廠房，到全球五大製造據點、25,000 名工程師的半導體重鎮，
            SiloTech始終以技術驅動一切。
          </p>
        </motion.div>

        {/* Two-column layout: Timeline + Leadership */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-xl mb-8 flex items-center gap-3">
              <span className="h-px flex-1 bg-white/10" />
              發展歷程
              <span className="h-px flex-1 bg-white/10" />
            </h3>
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-e-blue/50 via-e-blue/20 to-transparent" />
              <div className="flex flex-col gap-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    className="flex gap-5 items-start pl-8 relative"
                  >
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-black border border-e-blue/40 flex items-center justify-center -translate-x-[9px]">
                      <div className="w-1.5 h-1.5 rounded-full bg-e-blue" />
                    </div>
                    <div>
                      <span className="text-e-blue text-xs font-bold tracking-widest">{item.year}</span>
                      <p className="text-white/60 text-sm mt-1 leading-relaxed">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-xl mb-8 flex items-center gap-3">
              <span className="h-px flex-1 bg-white/10" />
              領導團隊
              <span className="h-px flex-1 bg-white/10" />
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {leadership.map((person, i) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="glass rounded-2xl p-5 border border-white/[0.06] group hover:border-white/[0.12] transition-colors"
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${person.color} flex items-center justify-center text-white text-xs font-bold mb-3`}
                  >
                    {person.initials}
                  </div>
                  <p className="text-white font-semibold text-sm">{person.name}</p>
                  <p className="text-e-blue text-[11px] font-medium mb-2">{person.title}</p>
                  <p className="text-white/40 text-[11px] leading-relaxed">{person.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative rounded-2xl overflow-hidden border border-white/[0.06] p-10 text-center"
          style={{ background: "linear-gradient(135deg, rgba(0,113,227,0.05) 0%, rgba(0,0,0,0) 100%)" }}
        >
          <p className="text-e-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Our Mission
          </p>
          <blockquote className="text-2xl sm:text-3xl font-bold text-white max-w-3xl mx-auto leading-snug">
            「以精微的製程工藝，讓每一枚晶片都成為推動人類文明的引擎。」
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
