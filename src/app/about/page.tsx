"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import PillButton from "@/components/PillButton";
import StoryPanel from "@/components/StoryPanel";
import Spotlight from "@/components/Spotlight";

const VALUES = [
  {
    title: "Direct trade",
    body: "We buy from farms we've visited, at prices we've agreed on together — not commodity rates.",
  },
  {
    title: "Roasted weekly",
    body: "Small batches, every week, so nothing sits on a shelf losing its character.",
  },
  {
    title: "Seasonal kitchen",
    body: "Menus shift with the seasons — nothing frozen, nothing shipped further than it has to be.",
  },
  {
    title: "Made to linger",
    body: "No time limits, no rush. Our rooms are built for staying a while.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-chalk min-h-screen">
      <section className="relative h-[65vh] min-h-[460px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=80"
            alt="Upscale restaurant interior with gold accents and a wine wall"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-ink/40" />
        
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-8 left-8 z-10 hidden sm:block"
        >
          <span className="rounded-full bg-chalk-white/90 backdrop-blur-md px-3.5 py-1.5 font-grotesk text-[10px] font-bold uppercase tracking-wider text-ink shadow-md border border-ink/5">
            ✦ Established 2013
          </span>
        </motion.div>

        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl sm:text-7xl md:text-[5.5rem] leading-[0.95] text-chalk uppercase"
          >
            OUR <span className="font-serif italic font-normal normal-case text-terracotta">Story</span>
          </motion.h1>
        </div>
      </section>

      <StoryPanel
        eyebrow="Since 2013"
        title={
          <>
            STARTED WITH ONE MACHINE AND A <span className="font-serif italic font-normal normal-case text-terracotta">Stubborn</span> IDEA
          </>
        }
        paragraphs={[
          "Amber began as a single espresso machine in a rented corner unit, run by two friends who thought their neighborhood deserved a better cup.",
          "Twelve years later, that machine has grown into a full kitchen and wine list — but the standard hasn't moved. We still roast in small batches, still pull every shot to order, and still believe a good table is a place, not just a product.",
        ]}
        readMoreHref="/locations"
        readMoreLabel="Find a location"
        image="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=80"
        imageAlt="Barista hand-pouring water over a Chemex"
        imageFirst
      />

      <Spotlight
        eyebrow="Our craft"
        title="EVERY BAG, ROASTED WITH INTENTION"
        paragraphs={[
          "We work directly with small farms across three continents, paying above fair-trade rates for lots we roast in-house every week.",
          "It's more work — but it means every cup tastes like where it came from, and every bag you take home was roasted days, not months, ago.",
        ]}
        readMoreHref="/menu"
        readMoreLabel="Explore the menu"
        image="https://images.unsplash.com/photo-1524350876685-274059332603?w=1200&q=80"
        imageAlt="Burlap sack filled with freshly roasted coffee beans"
      />

      <Spotlight
        eyebrow="The kitchen"
        title="AN OPEN KITCHEN, A SHORT SEASONAL MENU"
        paragraphs={[
          "Our chefs change the dinner menu with the seasons — nothing frozen, nothing shipped further than it has to be.",
          "The same care that goes into a cortado goes into a seared salmon or a glass of natural wine. One kitchen, one standard, from breakfast through last call.",
        ]}
        readMoreHref="/menu"
        readMoreLabel="See the dinner menu"
        image="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1200&q=80"
        imageAlt="Plated seared salmon dish with wine glasses on a candlelit table"
      />

      <section className="bg-terracotta py-24 sm:py-32 mt-12 border-t border-ink/10 shadow-inner">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-grotesk text-xs font-bold uppercase tracking-[0.2em] text-chalk/70">
              ✦ Why Amber
            </p>
            <h2 className="mt-4 font-display text-5xl leading-none text-chalk sm:text-6xl uppercase">
              WHAT WE STAND <span className="font-serif italic text-gold font-normal normal-case">Behind</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-chalk/80">
              Amber is a neighborhood café and kitchen built around one idea
              — that a great cup and a great meal should come from the same
              care, whatever hour you walk in.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.08}
                className="text-center sm:text-left bg-terracotta-dark/30 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:bg-terracotta-dark/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta-light text-chalk font-display text-xl mx-auto sm:mx-0 mb-5">
                  {i + 1}
                </div>
                <p className="font-serif text-xl font-bold text-chalk">
                  {v.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-chalk/70">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-20 flex flex-col items-center gap-6 text-center border-t border-chalk/10 pt-16">
            <h3 className="font-display text-4xl text-chalk uppercase">
              COME SEE FOR <span className="font-serif italic font-normal normal-case text-gold">Yourself</span>
            </h3>
            <PillButton href="/locations" variant="outline" className="!border-chalk !text-chalk hover:!bg-chalk hover:!text-ink">
              Find a location
            </PillButton>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
