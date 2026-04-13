"use client";
export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer square — silicon wafer */}
      <rect
        x="1"
        y="1"
        width="26"
        height="26"
        rx="5"
        stroke="#A0A0A0"
        strokeWidth="1"
      />
      {/* Grid traces */}
      <line x1="10" y1="1" x2="10" y2="27" stroke="#A0A0A0" strokeWidth="0.5" strokeOpacity="0.5" />
      <line x1="18" y1="1" x2="18" y2="27" stroke="#A0A0A0" strokeWidth="0.5" strokeOpacity="0.5" />
      <line x1="1" y1="10" x2="27" y2="10" stroke="#A0A0A0" strokeWidth="0.5" strokeOpacity="0.5" />
      <line x1="1" y1="18" x2="27" y2="18" stroke="#A0A0A0" strokeWidth="0.5" strokeOpacity="0.5" />
      {/* Center contact dots */}
      <circle cx="10" cy="10" r="1.5" fill="#0071E3" />
      <circle cx="18" cy="10" r="1.5" fill="#0071E3" />
      <circle cx="10" cy="18" r="1.5" fill="#0071E3" />
      <circle cx="18" cy="18" r="1.5" fill="#0071E3" />
      {/* Core die — glowing center */}
      <rect x="11.5" y="11.5" width="5" height="5" rx="1" fill="#0071E3" fillOpacity="0.9" />
    </svg>
  );
}
