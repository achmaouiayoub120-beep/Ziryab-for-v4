"use client";

import { useState } from "react";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import { formationsData } from "@/lib/data/formations";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, ArrowLeft, Shield, Cloud, Terminal, Wifi, Brain, Lock, Monitor, Network, Bot } from "lucide-react";
import Link from "next/link";

/* ══════════════════════════════════════════════════════════
   THÈME → DESIGN CONFIG
   ══════════════════════════════════════════════════════════ */
const themeConfig: Record<string, {
  icon: React.ElementType;
  iconAlt: React.ElementType;
  gradient: string;
  iconColor: string;
  bgPattern: string;
  accentRing: string;
}> = {
  "Cybersécurité": {
    icon: Shield,
    iconAlt: Lock,
    gradient: "from-red-600/90 via-orange-500/80 to-amber-500/70",
    iconColor: "text-white/90",
    bgPattern: "bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.08)_0%,transparent_60%)]",
    accentRing: "ring-red-500/30",
  },
  "Cloud": {
    icon: Cloud,
    iconAlt: Cloud,
    gradient: "from-sky-600/90 via-blue-500/80 to-indigo-500/70",
    iconColor: "text-white/90",
    bgPattern: "bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_60%)]",
    accentRing: "ring-sky-500/30",
  },
  "Système": {
    icon: Terminal,
    iconAlt: Monitor,
    gradient: "from-emerald-600/90 via-teal-500/80 to-cyan-500/70",
    iconColor: "text-white/90",
    bgPattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_0%,transparent_60%)]",
    accentRing: "ring-emerald-500/30",
  },
  "Réseaux": {
    icon: Wifi,
    iconAlt: Network,
    gradient: "from-violet-600/90 via-purple-500/80 to-fuchsia-500/70",
    iconColor: "text-white/90",
    bgPattern: "bg-[radial-gradient(circle_at_20%_60%,rgba(255,255,255,0.1)_0%,transparent_60%)]",
    accentRing: "ring-violet-500/30",
  },
  "IA": {
    icon: Brain,
    iconAlt: Bot,
    gradient: "from-fuchsia-600/90 via-pink-500/80 to-rose-500/70",
    iconColor: "text-white/90",
    bgPattern: "bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12)_0%,transparent_60%)]",
    accentRing: "ring-fuchsia-500/30",
  },
};

const defaultConfig = themeConfig["Cybersécurité"];

/* ══════════════════════════════════════════════════════════
   CARD IMAGE — Icône thématique premium
   ══════════════════════════════════════════════════════════ */
function CardVisual({ theme, index }: { theme: string; index: number }) {
  const cfg = themeConfig[theme] || defaultConfig;
  const useAlt = index % 3 === 1;
  const IconComp = useAlt ? cfg.iconAlt : cfg.icon;

  return (
    <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${cfg.gradient}`}>
      {/* Subtle pattern overlay */}
      <div className={`absolute inset-0 ${cfg.bgPattern}`} />
      {/* Grid dots decoration */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }} />
      {/* Large faded icon in background */}
      <div className="absolute -right-6 -bottom-6 opacity-[0.08]">
        <IconComp size={140} strokeWidth={0.8} />
      </div>
      {/* Centered icon */}
      <div className="relative flex flex-col items-center justify-center h-full gap-2 z-10">
        <div className={`p-3 rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ${cfg.accentRing}`}>
          <IconComp size={32} className={cfg.iconColor} strokeWidth={1.8} />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
          {theme}
        </span>
      </div>
    </div>
  );
}

/* Prix déterministe */
function getPrice(ref: string, duree: string): number {
  const hash = ref.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  if (duree === "2J") return [2990, 3200, 3500, 2800, 3100][hash % 5];
  if (duree === "5J") return [4990, 5200, 5500, 4800, 5900][hash % 5];
  return [3990, 4500, 3500, 4200, 3800][hash % 5];
}

/* ══════════════════════════════════════════════════════════
   PAGE FORMATIONS
   ══════════════════════════════════════════════════════════ */
export default function FormationsPage() {
  const [activeTheme, setActiveTheme] = useState<string>("Tous");
  const shouldReduceMotion = useReducedMotion();

  const themes = ["Tous", ...Array.from(new Set(formationsData.map((f) => f.theme)))];

  const filteredFormations = activeTheme === "Tous"
    ? formationsData
    : formationsData.filter((f) => f.theme === activeTheme);

  const themeCounters: Record<string, number> = {};

  return (
    <main className="min-h-screen pt-24 pb-20 bg-[var(--bg-alt)]">
      <SectionWrapper>
        <FadeInChild className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-primary)] mb-6">
            Catalogue de <span className="text-[var(--accent)]">Formations</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Découvrez notre offre complète de formations spécialisées en IT, Cybersécurité, Cloud, Système et Réseaux.
          </p>
        </FadeInChild>

        {/* Filtres */}
        <FadeInChild className="flex flex-wrap justify-center gap-3 mb-12">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => setActiveTheme(theme)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeTheme === theme
                  ? "bg-[var(--accent)] text-white shadow-md"
                  : "bg-white text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }`}
            >
              {theme}
            </button>
          ))}
        </FadeInChild>

        {/* Grille */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={shouldReduceMotion ? {} : "initial"}
          animate={shouldReduceMotion ? {} : "animate"}
          variants={{ animate: { transition: { staggerChildren: 0.05 } } }}
        >
          {filteredFormations.map((formation, idx) => {
            if (!themeCounters[formation.theme]) themeCounters[formation.theme] = 0;
            const imgIdx = themeCounters[formation.theme]++;
            const price = getPrice(formation.reference, formation.duree);

            return (
              <motion.div
                key={`${formation.reference}-${idx}`}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <Link href={`/courses/${formation.reference}`} className="block h-full">
                  <div className="elite-card group overflow-hidden bg-white flex flex-col h-full">
                    {/* Visual thématique */}
                    <CardVisual theme={formation.theme} index={imgIdx} />
                    
                    {/* Badge ref par-dessus */}
                    <div className="relative">
                      <span className="absolute -top-5 left-4 px-2.5 py-1 rounded-md bg-white shadow-sm text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] z-10 border border-[var(--border)]">
                        {formation.reference}
                      </span>
                    </div>

                    <div className="p-5 pt-4 flex flex-col flex-1">
                      <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider mb-2 mt-2">
                        {formation.categorie}
                      </span>
                      <h3 className="text-base font-display font-bold text-[var(--text-primary)] mb-4 flex-grow group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                        {formation.titre}
                      </h3>
                      <div className="mt-auto pt-4 border-t border-[var(--border)] flex justify-between items-center">
                        <div className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                          <Clock size={14} />
                          <span className="font-medium">{formation.duree}</span>
                        </div>
                        <span className="font-mono font-bold text-[var(--accent)]">
                          {price} MAD
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionWrapper>
    </main>
  );
}
