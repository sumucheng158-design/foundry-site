"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "晶圓製備",
    desc: "300mm矽晶圓進廠檢測，確保基板缺陷密度低於 0.01/cm²",
  },
  {
    num: "02",
    title: "光罩與曝光",
    desc: "EUV 極紫外光刻技術，實現 7nm 以下線寬精度控制",
  },
  {
    num: "03",
    title: "蝕刻與沉積",
    desc: "原子層沉積（ALD）配合高選擇比乾式蝕刻，逐層構建電路",
  },
  {
    num: "04",
    title: "量測與良率優化",
    desc: "在線AI缺陷分析，即時回饋製程參數，確保99.97%良率",
  },
  {
    num: "05",
    title: "封裝與測試",
    desc: "CoWoS / SoIC先進封裝後，執行全速ATE電性測試",
  },
];

export default function ManufacturingLoop() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="manufacturing" ref={ref} className="relative py-40 overflow-hidden">
      {/* Parallax background (production line visual) */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        {/* Simulated fab background */}
        <div className="absolute inset-0 bg-[#020408]" />
        {/* Fab floor grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="fab-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M80 0 L0 0 0 80" fill="none" stroke="#0071E3" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fab-grid)" />
        </svg>
        {/* Scanline effect */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
          }}
        />
        {/* Blue glows */}
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-e-blue/8 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[200px] bg-blue-400/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-e-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Manufacturing Process
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5">
            精密製造的每一個環節
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            從原料矽到封裝晶片，每道工序均在ISO Class 1潔淨室中完成，
            全程AI品質監控。
          </p>
        </motion.div>

        {/* Steps timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-e-blue/30 to-transparent" />

          <div className="flex flex-col gap-12 lg:gap-16">
            {steps.map((step, i) => {
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: isRight ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`relative flex items-center gap-8 lg:gap-0 ${
                    isRight ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 pl-16 lg:pl-0 ${
                      isRight ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                    }`}
                  >
                    <div
                      className={`glass rounded-2xl p-6 inline-block w-full lg:max-w-sm ${
                        isRight ? "lg:ml-auto" : ""
                      }`}
                    >
                      <span className="text-e-blue text-xs font-bold tracking-widest">
                        {step.num}
                      </span>
                      <h3 className="text-white text-lg font-bold mt-1 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-e-blue shadow-[0_0_12px_4px_rgba(0,113,227,0.4)] border-2 border-black" />

                  {/* Spacer for other side */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-20"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-e-blue hover:text-e-blue-light transition-colors text-sm font-semibold"
          >
            了解完整製造流程
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
