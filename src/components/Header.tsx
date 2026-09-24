"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-chalk/90 backdrop-blur-md border-b border-ink/8 transition-colors">
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-terracotta"
      />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-display text-xl tracking-wider text-ink"
        >
          <span className="font-display tracking-widest text-ink text-xl">
            AMBER
          </span>
          <span className="font-grotesk text-[10px] font-bold uppercase tracking-[0.2em] text-terracotta bg-terracotta-soft px-2 py-0.5 rounded-full border border-terracotta/20">
            Coffee Co.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative px-4 py-2 font-grotesk text-xs font-bold uppercase tracking-[0.12em] transition-colors ${
                  active ? "text-terracotta" : "text-ink/70 hover:text-ink"
                }`}
              >
                {active ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-4 -bottom-0 h-[2.5px] rounded-full bg-terracotta"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : (
                  <span className="absolute inset-x-4 -bottom-0 h-[2.5px] origin-center scale-x-0 rounded-full bg-ink/30 transition-transform duration-300 group-hover:scale-x-100" />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="font-grotesk text-xs font-bold uppercase tracking-[0.12em] text-ink/70 hover:text-ink px-3 py-2 transition-colors"
          >
            Reservations
          </Link>
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/menu"
              className="rounded-full bg-terracotta px-5 py-2.5 font-grotesk text-xs font-bold uppercase tracking-[0.12em] text-chalk transition-colors duration-200 hover:bg-terracotta-dark shadow-md shadow-terracotta/15"
            >
              Order Ahead
            </Link>
          </motion.div>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-ink lg:hidden p-1"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink/8 bg-chalk lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2.5 font-grotesk text-sm font-bold uppercase tracking-[0.1em] text-ink/80 hover:text-terracotta"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-ink/8 flex flex-col gap-2">
                <Link
                  href="/menu"
                  className="w-full text-center rounded-full bg-terracotta px-5 py-2.5 font-grotesk text-xs font-bold uppercase tracking-[0.12em] text-chalk hover:bg-terracotta-dark"
                >
                  Order Ahead
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
