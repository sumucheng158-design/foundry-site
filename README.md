# SiloTech Foundry — 官方網站

> 晶片代工公司官網，Apple 風格極簡設計，基於 Next.js 14 + Tailwind CSS + Framer Motion 構建。

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?logo=framer)

---

## 功能特色

- **Hero Section** — 精密晶片 SVG 動畫 + 視差滾動效果
- **Technology Grid** — 三大技術平台卡片，點擊展開規格 Tab 表
- **Manufacturing Loop** — 沉浸式製造流程時間軸
- **Stats Bar** — 關鍵數字指標展示
- **Contact Banner** — CTA 區塊
- **Footer** — 層級式導覽連結

## 技術棧

- **框架**：Next.js 14 (App Router)
- **樣式**：Tailwind CSS 3.4
- **動畫**：Framer Motion 11
- **語言**：TypeScript
- **部署**：Vercel (零設定)

---

## 快速開始

### 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

### 生產構建

```bash
npm run build
npm run start
```

---

## 部署到 Vercel（推薦）

### 方式一：一鍵部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### 方式二：CLI 部署

```bash
# 安裝 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 方式三：連結 GitHub 自動部署

1. 將此專案 push 到你的 GitHub repo
2. 前往 [vercel.com](https://vercel.com) → **New Project**
3. 選擇你的 GitHub repo
4. 保留預設設定（Vercel 自動偵測 Next.js）
5. 點擊 **Deploy** — 完成！

之後每次 push 到 `main` 分支都會自動觸發部署。

---

## 專案結構

```
foundry-site/
├── app/
│   ├── globals.css        # 全域樣式、CSS 變數、Tailwind utilities
│   ├── layout.tsx         # Root layout、metadata
│   └── page.tsx           # 首頁（組裝所有 section）
├── components/
│   ├── Navbar.tsx         # 頂部導覽列（含 mobile menu）
│   ├── Logo.tsx           # SVG Logo 元件
│   ├── Hero.tsx           # Hero section + 視差
│   ├── ChipModel.tsx      # 晶片 SVG 動畫
│   ├── Stats.tsx          # 關鍵數字統計
│   ├── TechGrid.tsx       # 技術平台卡片 + Tab 展開
│   ├── ManufacturingLoop.tsx  # 製造流程時間軸
│   ├── ContactBanner.tsx  # CTA 區塊
│   └── Footer.tsx         # 頁尾連結
├── public/
│   └── favicon.svg        # SVG favicon
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── .gitignore
```

---

## 客製化指南

### 修改品牌名稱
搜尋並取代所有 `SiloTech` 字串，替換為你的公司名。

### 修改配色
在 `tailwind.config.js` 中調整：
```js
colors: {
  "e-blue": "#0071E3",      // 主強調色
  "e-blue-light": "#2997FF", // hover 狀態
  "metal": "#A0A0A0",        // 金屬銀
}
```

### 修改技術規格
編輯 `components/TechGrid.tsx` 中的 `platforms` 陣列。

### 替換 Logo
修改 `components/Logo.tsx` 中的 SVG 路徑。

---

## License

MIT
