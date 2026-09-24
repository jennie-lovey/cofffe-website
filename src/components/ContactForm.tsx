"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const fieldClass =
  "w-full rounded-2xl border border-ink/10 bg-chalk-white/80 backdrop-blur-sm px-5 py-4 text-sm text-ink outline-none transition-all duration-200 focus:border-terracotta focus:bg-chalk-white focus:scale-[1.01] focus:shadow-lg focus:shadow-terracotta/10 placeholder:text-ink/40 shadow-sm";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start justify-center rounded-3xl bg-chalk-white p-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-chalk shadow-lg shadow-terracotta/20"
          >
            <Check size={24} />
          </motion.div>
          <p className="mt-6 font-display text-4xl text-ink">MESSAGE SENT</p>
          <p className="mt-3 text-sm text-ink-soft leading-relaxed max-w-sm">
            Thanks for reaching out — our team will get back to you within a business day.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -8 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Name" className={fieldClass} />
            <input required type="email" placeholder="Email" className={fieldClass} />
          </div>
          <input placeholder="Subject" className={fieldClass} />
          <textarea
            required
            placeholder="How can we help you?"
            rows={5}
            className={fieldClass}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group mt-2 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 font-grotesk text-xs font-bold uppercase tracking-[0.14em] text-chalk transition-all duration-200 hover:bg-terracotta hover:text-chalk hover:shadow-lg hover:shadow-terracotta/20"
          >
            <span>Send message</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
