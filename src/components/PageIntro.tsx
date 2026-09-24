"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function PageIntro({
  eyebrow,
  title,
  titleClassName,
  description,
  descriptionClassName,
  eyebrowClassName = "font-grotesk text-xs font-bold uppercase tracking-[0.2em] text-terracotta",
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  titleClassName: string;
  description?: ReactNode;
  descriptionClassName?: string;
  eyebrowClassName?: string;
}) {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={eyebrowClassName}
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 36, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className={titleClassName}
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={descriptionClassName}
        >
          {description}
        </motion.p>
      )}
    </>
  );
}
