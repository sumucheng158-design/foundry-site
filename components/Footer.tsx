"use client";
import Logo from "./Logo";

const footerLinks = [
  {
    title: "技術平台",
    links: ["Advanced Logic", "Specialty Technology", "Advanced Packaging", "製程路線圖", "設計服務"],
  },
  {
    title: "製造能力",
    links: ["潔淨室設施", "EUV 設備", "量測與檢測", "良率工程", "環保製程"],
  },
  {
    title: "合作夥伴",
    links: ["設計夥伴計劃", "IP 生態系", "EDA 工具", "封裝測試", "代理商"],
  },
  {
    title: "公司資訊",
    links: ["關於 SiloTech", "研發創新", "永續發展", "投資人關係", "新聞中心"],
  },
  {
    title: "支援",
    links: ["技術支援", "工程諮詢", "文件下載", "聯絡我們", "徵才資訊"],
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
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 text-xs hover:text-white/70 transition-colors"
                    >
                      {link}
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
            {["隱私政策", "使用條款", "Cookie 設定"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/30 text-xs hover:text-white/60 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
