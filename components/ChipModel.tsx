"use client";
import { motion } from "framer-motion";

export default function ChipModel() {
  return (
    <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] mx-auto">
      {/* Outer glow rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border border-e-blue/10"
          style={{ margin: `${i * 16}px` }}
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.02, 1] }}
          transition={{
            repeat: Infinity,
            duration: 3 + i,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Chip SVG */}
      <svg
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
      >
        {/* Background plate */}
        <rect x="50" y="50" width="160" height="160" rx="14" fill="#0A0A0A" stroke="#1C1C1E" strokeWidth="1" />

        {/* Grid lines */}
        {[80, 110, 140, 170].map((x) => (
          <line key={`vl-${x}`} x1={x} y1="50" x2={x} y2="210" stroke="#1E1E24" strokeWidth="0.5" />
        ))}
        {[80, 110, 140, 170].map((y) => (
          <line key={`hl-${y}`} x1="50" y1={y} x2="210" y2={y} stroke="#1E1E24" strokeWidth="0.5" />
        ))}

        {/* Die blocks — logic area */}
        <rect x="60" y="60" width="45" height="28" rx="3" fill="#0071E3" fillOpacity="0.15" stroke="#0071E3" strokeWidth="0.6" />
        <rect x="60" y="96" width="45" height="18" rx="3" fill="#0071E3" fillOpacity="0.08" stroke="#0071E3" strokeOpacity="0.4" strokeWidth="0.6" />
        <rect x="113" y="60" width="28" height="55" rx="3" fill="#2997FF" fillOpacity="0.12" stroke="#2997FF" strokeWidth="0.6" />
        <rect x="60" y="122" width="28" height="28" rx="3" fill="#0071E3" fillOpacity="0.1" stroke="#0071E3" strokeOpacity="0.5" strokeWidth="0.6" />

        {/* SRAM */}
        <rect x="149" y="60" width="50" height="90" rx="3" fill="#A0A0A0" fillOpacity="0.06" stroke="#A0A0A0" strokeOpacity="0.3" strokeWidth="0.6" />
        <line x1="149" y1="90" x2="199" y2="90" stroke="#A0A0A0" strokeOpacity="0.15" strokeWidth="0.4" />
        <line x1="149" y1="120" x2="199" y2="120" stroke="#A0A0A0" strokeOpacity="0.15" strokeWidth="0.4" />
        <line x1="174" y1="60" x2="174" y2="150" stroke="#A0A0A0" strokeOpacity="0.15" strokeWidth="0.4" />

        {/* I/O pads top */}
        {[65, 85, 105, 125, 145, 165, 185].map((x) => (
          <rect key={`pt-${x}`} x={x} y="52" width="12" height="5" rx="1" fill="#333" stroke="#555" strokeWidth="0.4" />
        ))}
        {/* I/O pads bottom */}
        {[65, 85, 105, 125, 145, 165, 185].map((x) => (
          <rect key={`pb-${x}`} x={x} y="203" width="12" height="5" rx="1" fill="#333" stroke="#555" strokeWidth="0.4" />
        ))}
        {/* I/O pads left */}
        {[65, 85, 105, 125, 145, 165, 185].map((y) => (
          <rect key={`pl-${y}`} x="52" y={y} width="5" height="12" rx="1" fill="#333" stroke="#555" strokeWidth="0.4" />
        ))}
        {/* I/O pads right */}
        {[65, 85, 105, 125, 145, 165, 185].map((y) => (
          <rect key={`pr-${y}`} x="203" y={y} width="5" height="12" rx="1" fill="#333" stroke="#555" strokeWidth="0.4" />
        ))}

        {/* Center processor core — glowing */}
        <rect x="96" y="157" width="55" height="42" rx="5" fill="#0071E3" fillOpacity="0.2" stroke="#0071E3" strokeWidth="1" />
        <rect x="103" y="164" width="41" height="28" rx="3" fill="#0071E3" fillOpacity="0.25" stroke="#2997FF" strokeWidth="0.8" />
        {/* Core label */}
        <text x="123.5" y="182" textAnchor="middle" fill="#60A5FA" fontSize="6" fontFamily="monospace" letterSpacing="0.5">CORE</text>

        {/* Animated trace pulse */}
        <motion.rect
          x="96" y="157" width="55" height="42" rx="5"
          fill="none"
          stroke="#0071E3"
          strokeWidth="2"
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 1.05 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
          style={{ transformOrigin: "123.5px 178px" }}
        />
      </svg>

      {/* Corner accent */}
      <div className="absolute top-[calc(50%-5px)] left-[calc(50%-5px)] w-2.5 h-2.5 rounded-full bg-e-blue shadow-[0_0_16px_4px_rgba(0,113,227,0.6)]" />
    </div>
  );
}
