"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function PillButton({
  href,
  children,
  variant = "filled",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "filled" | "outline" | "rust";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-grotesk text-xs font-bold uppercase tracking-[0.1em]";
  const styles =
    variant === "filled"
      ? "bg-ink text-chalk hover:bg-ink-soft"
      : variant === "rust"
        ? "bg-chalk text-ink hover:bg-gold"
        : "border border-chalk/50 text-chalk hover:bg-chalk/10";

  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="inline-block"
    >
      <Link href={href} className={`${base} ${styles} ${className} transition-colors duration-200`}>
        {children}
      </Link>
    </motion.div>
  );
}
