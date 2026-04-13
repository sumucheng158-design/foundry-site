import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SiloTech Foundry | 精微之間，驅動未來",
  description:
    "SiloTech Foundry — 領先全球的晶片代工廠，提供先進邏輯製程、特殊技術平台與專業封裝解決方案。",
  openGraph: {
    title: "SiloTech Foundry",
    description: "精微之間，驅動未來",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
