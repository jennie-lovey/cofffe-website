"use client";

import { useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_CATEGORIES } from "@/lib/data";

function subscribeToHash(callback: () => void) {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

function getHashSnapshot() {
  return window.location.hash.replace("#", "");
}

function getServerHashSnapshot() {
  return "";
}

export default function MenuTabs() {
  const hash = useSyncExternalStore(
    subscribeToHash,
    getHashSnapshot,
    getServerHashSnapshot
  );
  const [manualActive, setManualActive] = useState<string | null>(null);

  const hashActive = MENU_CATEGORIES.some((c) => c.slug === hash) ? hash : null;
  const active = manualActive ?? hashActive ?? MENU_CATEGORIES[0].slug;
  const category = MENU_CATEGORIES.find((c) => c.slug === active)!;

  return (
    <div className="bg-chalk-white rounded-3xl p-6 sm:p-10">
      <div className="no-scrollbar flex gap-2 overflow-x-auto border-b border-ink/8 pb-1">
        {MENU_CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            id={cat.slug}
            onClick={() => setManualActive(cat.slug)}
            className="relative shrink-0 px-5 py-3 font-grotesk text-xs font-bold uppercase tracking-[0.1em] text-ink-soft transition-colors data-[active=true]:text-ink hover:text-terracotta"
            data-active={active === cat.slug}
          >
            {cat.title}
            {active === cat.slug && (
              <motion.span
                layoutId="menu-tab-underline"
                className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-terracotta rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 divide-y divide-ink/8"
        >
          {category.items.map((item) => (
            <div
              key={item.name}
              className="flex items-baseline justify-between gap-6 py-6 group"
            >
              <div>
                <p className="font-serif text-xl font-bold text-ink transition-colors group-hover:text-terracotta">{item.name}</p>
                <p className="mt-2 text-sm text-ink-soft max-w-xl leading-relaxed">
                  {item.description}
                </p>
              </div>
              <p className="shrink-0 font-sans text-base font-bold text-terracotta bg-terracotta-soft px-3 py-1 rounded-full border border-terracotta/20">
                ${item.price}
              </p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
