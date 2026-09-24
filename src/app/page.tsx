"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import MenuCarousel from "@/components/MenuCarousel";
import StoryPanel from "@/components/StoryPanel";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";
import { MENU_PREVIEW, STATS, TESTIMONIALS, TICKER_ITEMS } from "@/lib/data";

export default function Home() {
  return (
    <main className="bg-chalk min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Marquee Ticker */}
      <Marquee items={TICKER_ITEMS} />

      {/* 3. Mission Statement */}
      <section className="bg-chalk py-20 sm:py-28 relative">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="font-grotesk text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
              ✦ Why Amber Coffee Co.
            </p>
            <h2 className="mt-6 font-serif text-2xl font-medium italic leading-relaxed text-ink sm:text-3xl md:text-4xl">
              &ldquo;A neighbourhood café and kitchen built around one idea — 
              that a great cup and a great meal should come from the exact same care, 
              whatever hour you walk in.&rdquo;
            </h2>
            <div className="mt-8 flex justify-center items-center gap-3">
              <span className="h-[1px] w-12 bg-terracotta/30" />
              <span className="font-grotesk text-xs font-bold uppercase tracking-widest text-ink/60">
                Downtown Austin, TX
              </span>
              <span className="h-[1px] w-12 bg-terracotta/30" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Menu Preview Section */}
      <section className="bg-chalk-warm py-24 border-y border-ink/8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <p className="font-grotesk text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                Our Menu
              </p>
              <h2 className="mt-3 font-display text-5xl leading-none text-ink sm:text-6xl md:text-7xl">
                DISCOVER<br />
                <span className="italic font-serif text-terracotta font-normal normal-case">the Menu</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
                A lineup built for every part of the day — from the first espresso 
                to evening plates by candlelight.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ArrowLink href="/menu" className="text-terracotta hover:text-terracotta-dark font-grotesk font-bold">
                View full menu
              </ArrowLink>
            </Reveal>
          </div>

          <div className="mt-12">
            <MenuCarousel items={MENU_PREVIEW} />
          </div>
        </div>
      </section>

      {/* 5. Our Story Panel */}
      <StoryPanel
        eyebrow="Our Craft"
        title={
          <>
            Sourced with care,{" "}
            <span className="font-serif italic text-terracotta font-normal normal-case">roasted</span> with intention
          </>
        }
        paragraphs={[
          "We work directly with small family farms across three continents, paying above fair-trade rates for single-origin lots we roast in-house every week.",
          "It's more work — but it means every cup tastes true to where it came from.",
        ]}
        readMoreHref="/about"
        readMoreLabel="Discover our story"
        image="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&q=80"
        imageAlt="Café counter with espresso machine and warm pendant lighting"
        imageFirst
      />

      {/* 6. Stats Strip — Vibrant Terracotta Accent Bar */}
      <section className="bg-terracotta py-16 text-chalk shadow-inner">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 font-grotesk text-xs font-bold uppercase tracking-[0.14em] text-chalk/80">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="relative overflow-hidden bg-chalk py-28">
        <div className="relative mx-auto max-w-6xl px-6">
          {/* Header */}
          <Reveal className="text-center">
            <p className="font-grotesk text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
              Our Community
            </p>
            <h2 className="mt-3 font-display text-5xl leading-none text-ink sm:text-6xl md:text-7xl">
              WHAT PEOPLE<br />
              <span className="italic font-serif text-terracotta font-normal normal-case">are saying</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              Over a decade of neighbourhood hospitality, reflected back by the people who know us best.
            </p>
          </Reveal>

          {/* Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 0.1}
                className={`group relative flex flex-col rounded-3xl bg-chalk-white p-8 transition-all duration-300 hover:-translate-y-2 ${
                  i % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"
                }`}
              >
                {/* Decorative quote mark */}
                <span
                  aria-hidden
                  className="absolute right-6 top-3 font-serif text-8xl font-bold leading-none text-ink/5 transition-colors group-hover:text-terracotta/10 select-none"
                >
                  &rdquo;
                </span>

                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, si) => (
                    <svg key={si} className="h-3.5 w-3.5 fill-gold" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-5 flex-1 font-serif text-base font-medium italic leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-7" />

                {/* Reviewer */}
                <div className="mt-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-terracotta text-xs font-bold text-chalk">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">{t.name}</p>
                      <p className="text-xs text-ink-soft">{t.role}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-ink/10 bg-chalk-warm px-2.5 py-0.5 font-grotesk text-[10px] font-bold uppercase tracking-wider text-ink/50">
                    {t.source}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="bg-chalk-warm border-t border-ink/8 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="font-grotesk text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
              Visit Us Today
            </p>
            <h2 className="mt-3 font-display text-5xl leading-none text-ink sm:text-6xl md:text-7xl">
              YOUR TABLE<br />
              <span className="italic font-serif text-terracotta font-normal normal-case">is waiting</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-ink-soft leading-relaxed">
              Stop by one of our three neighbourhood locations, or order ahead 
              to pick up your favorite brew.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/locations"
                  className="rounded-full bg-terracotta px-8 py-3.5 font-grotesk text-xs font-bold uppercase tracking-[0.14em] text-chalk shadow-lg shadow-terracotta/20 transition-colors duration-200 hover:bg-terracotta-dark"
                >
                  Find a location
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/menu"
                  className="rounded-full border border-ink/20 bg-chalk-white px-8 py-3.5 font-grotesk text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-chalk"
                >
                  Order ahead
                </Link>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
