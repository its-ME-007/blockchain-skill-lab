# 🔗 Blockchain SkillLab

A modern, animated educational platform for learning blockchain fundamentals, distributed ledgers, and platform comparisons.

## ✨ Features

- 🎨 **Modern UI** - Sleek glass-morphism design with gradient accents
- 🎬 **Smooth Animations** - Framer Motion powered scroll and hover effects
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast & Static** - Built with Next.js static export
- 🎓 **Educational Content** - Two comprehensive sessions covering blockchain fundamentals

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates a static export in the `out` directory that can be deployed anywhere.

## 📚 Content Structure

### Session 1: Foundations of Distributed Ledgers
- Introduction to Distributed Ledgers
- Core Principles (Decentralization, Consensus, Transparency)
- Blockchain Architecture
- Cryptographic Hashing & Merkle Trees
- Public vs Private Blockchains

### Session 2: Platforms, Models & Performance
- Blockchain Platform Overview (Ethereum, Solana, Algorand)
- Transaction Models (Account vs UTXO)
- Performance Comparisons (Throughput, Latency, Cost)
- Design Trade-offs

## 🎨 Design Features

- **Animated Hero Section** - Floating blockchain blocks with smooth animations
- **Scroll Animations** - Content reveals as you scroll
- **Interactive Cards** - Hover effects and smooth transitions
- **Custom Gradients** - Blockchain-themed color scheme
- **Glass Morphism** - Modern frosted glass effect
- **Responsive Navigation** - Mobile-friendly menu

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 📂 Project Structure

```
blockchain-skilllab/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── session-1/
│   │   └── page.tsx        # Session 1 content
│   └── session-2/
│       └── page.tsx        # Session 2 content
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── Footer.tsx          # Footer component
└── public/                 # Static assets
```

## 🎯 Deployment

This site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

Simply run `npm run build` and deploy the `out` directory.

## 📝 License

Educational content for learning blockchain fundamentals.

## 🤝 Contributing

This is an educational project. Feel free to fork and customize for your own learning path!

---

Built with ❤️ for blockchain learners everywhere
