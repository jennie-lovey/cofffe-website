import Link from "next/link";
import { InstagramIcon, FacebookIcon } from "@/components/icons";
import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-chalk">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display text-lg tracking-wider text-chalk">
              <span>AMBER</span>
              <span className="font-grotesk text-[10px] uppercase text-terracotta tracking-widest font-semibold">Coffee Co.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-chalk/60 font-sans">
              A neighbourhood café and kitchen in downtown Austin. Specialty coffee at sunrise, natural wine &amp; dinner by candlelight.
            </p>
          </div>

          <div>
            <p className="font-grotesk text-xs font-bold uppercase tracking-[0.15em] text-terracotta">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-grotesk text-chalk/70 transition-colors hover:text-chalk"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-grotesk text-xs font-bold uppercase tracking-[0.15em] text-terracotta">
              Locations &amp; Hours
            </p>
            <ul className="mt-4 space-y-2 text-sm text-chalk/70">
              <li className="font-semibold text-chalk">Downtown Main</li>
              <li>214 Elm Street, Austin, TX</li>
              <li className="text-xs text-chalk/50 mt-1">Mon–Sun · 7:00 AM – 11:00 PM</li>
            </ul>
          </div>

          <div>
            <p className="font-grotesk text-xs font-bold uppercase tracking-[0.15em] text-terracotta">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-chalk/70">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-chalk"
                >
                  <InstagramIcon size={16} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-chalk"
                >
                  <FacebookIcon size={16} />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-chalk/10 pt-6 text-xs text-chalk/40 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Amber Coffee Co. All rights reserved.</p>
          <p className="font-serif italic text-chalk/60">Designed with warmth, brewed with care.</p>
        </div>
      </div>
    </footer>
  );
}
