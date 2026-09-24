"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div whileHover="hover" initial="rest" animate="rest" className="inline-block">
      <Link
        href={href}
        className={`group relative inline-flex items-center gap-2 pb-1 font-grotesk text-xs font-semibold uppercase tracking-[0.1em] ${className}`}
      >
        {children}
        <motion.span
          variants={{ rest: { x: 0 }, hover: { x: 4 } }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="inline-flex"
        >
          <ArrowRight size={14} />
        </motion.span>
        <motion.span
          variants={{
            rest: { scaleX: 0.35, opacity: 0.4 },
            hover: { scaleX: 1, opacity: 1 },
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
          className="absolute inset-x-0 bottom-0 h-[1.5px] bg-current"
        />
      </Link>
    </motion.div>
  );
}
