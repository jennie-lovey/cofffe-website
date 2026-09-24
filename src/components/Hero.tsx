"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax for the arched image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const headlineContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
  };
  const wordReveal = {
    hidden: { y: "115%" },
    show: {
      y: "0%",
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section ref={ref} className="relative bg-terracotta pt-12 md:pt-20 overflow-hidden">
      
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 z-10 text-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full bg-chalk-white/10 px-4 py-2 backdrop-blur-sm mb-6 sm:mb-8"
        >
          <span className="flex items-center gap-2 font-grotesk text-xs font-bold uppercase tracking-[0.2em] text-chalk">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="inline-block text-gold"
            >
              ✦
            </motion.span>
            Café by Day · Kitchen by Night
          </span>
        </motion.div>

        {/* Massive Text (Mǎm Mǎm style) */}
        <motion.div
          variants={headlineContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center leading-[0.85] tracking-tighter"
        >
          <h1 className="font-display text-[15vw] sm:text-[14vw] md:text-[13vw] lg:text-[11vw] text-chalk uppercase w-full overflow-hidden">
            <motion.span variants={wordReveal} className="inline-block">
              GOOD
            </motion.span>
          </h1>
          <h1 className="font-display text-[15vw] sm:text-[14vw] md:text-[13vw] lg:text-[11vw] text-chalk uppercase w-full mt-1 sm:mt-2">
            <span className="inline-block overflow-hidden">
              <motion.span variants={wordReveal} className="inline-block">
                MORNINGS
              </motion.span>
            </span>{" "}
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span
                variants={wordReveal}
                className="inline-block font-serif italic font-normal normal-case text-gold text-[0.8em]"
              >
                Always
              </motion.span>
            </span>
          </h1>
        </motion.div>

        {/* Floating CTAs over the image arch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 flex justify-center mt-8 sm:mt-12 -mb-8 sm:-mb-12 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex gap-4 pointer-events-auto"
          >
            <motion.div whileTap={{ scale: 0.94 }}>
              <Link
                href="/menu"
                className="group flex items-center gap-2 rounded-full bg-chalk px-8 py-4 font-grotesk text-xs font-bold uppercase tracking-[0.15em] text-ink shadow-2xl shadow-ink/10 transition-transform duration-300 hover:scale-105"
              >
                <span>Explore Menu</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Arched Photo Cutout (Mǎm Mǎm style) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-6 w-full max-w-7xl px-4 sm:px-8"
      >
        <div className="relative aspect-square md:aspect-video lg:aspect-[21/9] w-full overflow-hidden rounded-t-[50vw] sm:rounded-t-[30rem] border-8 border-terracotta bg-chalk-warm shadow-2xl">
          <motion.div style={{ y }} className="absolute inset-0 h-[120%] -top-[10%] w-full">
            <Image
              src="/images/hero-drinks.png"
              alt="Specialty coffee drinks with signature recipe menu cards"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
          
          {/* Subtle vignette/gradient to make image pop cleanly inside the arch */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-ink/5" />
        </div>
      </motion.div>
    </section>
  );
}
