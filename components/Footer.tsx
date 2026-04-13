"use client";
import Logo from "./Logo";

const footerLinks = [
  {
    title: "技術平台",
    links: [
      { label: "Advanced Logic", href: "#technology" },
      { label: "Specialty Technology", href: "#technology" },
      { label: "Advanced Packaging", href: "#technology" },
    ],
  },
  {
    title: "製造能力",
    links: [
      { label: "潔淨室設施", href: "#manufacturing" },
      { label: "EUV 設備", href: "#manufacturing" },
      { label: "量測與檢測", href: "#manufacturing" },
      { label: "良率工程", href: "#manufacturing" },
      { label: "環保製程", href: "#sustainability" },
    ],
  },
  {
    title: "合作夥伴",
    links: [
      { label: "申請製造合作", href: "#contact" },
    ],
  },
  {
    title: "公司資訊",
    links: [
      { label: "關於 SiloTech", href: "#about" },
      { label: "研發創新", href: "#innovation" },
      { label: "永續發展", href: "#sustainability" },
      { label: "投資人關係", href: "#about" },
      { label: "新聞中心", href: "#about" },
    ],
  },
  {
    title: "支援",
    links: [
      { label: "技術支援", href: "#contact" },
      { label: "工程諮詢", href: "#contact" },
      { label: "聯絡我們", href: "#contact" },
      { label: "徵才資訊", href: "#about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-white/80 text-xs font-semibold tracking-wider uppercase mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 text-xs hover:text-white/70 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Logo size={20} />
            <span className="text-white/30 text-xs">
              © 2025 SiloTech Foundry Corporation. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            {[
              { label: "隱私政策", href: "#about" },
              { label: "使用條款", href: "#about" },
              { label: "Cookie 設定", href: "#about" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/30 text-xs hover:text-white/60 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
