"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function MenuCard({
  title,
  description,
  image,
  href = "/menu",
  badge,
}: {
  title: string;
  description: string;
  image: string;
  href?: string;
  badge?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.a
      href={href}
      className="group block"
      whileHover="hover"
      initial="rest"
      animate="rest"
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        variants={{
          rest: { y: 0 },
          hover: { y: -6 },
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-chalk-white"
      >
        <motion.div
          variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        {/* Subtle shadow overlay from bottom for text clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

        {badge && (
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-terracotta px-3 py-1 font-grotesk text-[10px] font-bold uppercase tracking-wider text-chalk shadow-md">
              {badge}
            </span>
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="font-serif text-lg font-bold text-chalk">{title}</p>
          <p className="mt-1 text-xs leading-relaxed text-chalk/80 line-clamp-2">
            {description}
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 font-grotesk text-[11px] font-bold uppercase tracking-[0.1em] text-gold">
            See menu
            <motion.span
              variants={{ rest: { x: 0 }, hover: { x: 4 } }}
              transition={{ duration: 0.3 }}
              className="inline-flex"
            >
              <ArrowRight size={13} />
            </motion.span>
          </span>
        </div>
      </motion.div>
    </motion.a>
  );
}
