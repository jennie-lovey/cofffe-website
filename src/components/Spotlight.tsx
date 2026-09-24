import Image from "next/image";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";

export default function Spotlight({
  eyebrow,
  title,
  paragraphs,
  readMoreHref,
  readMoreLabel = "Read more",
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  readMoreHref: string;
  readMoreLabel?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] group">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(min-width: 768px) 45vw, 90vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Reveal>

        <Reveal delay={0.1} className="bg-chalk-white p-8 sm:p-12 rounded-[2.5rem]">
          {eyebrow && (
            <p className="font-grotesk text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
              ✦ {eyebrow}
            </p>
          )}
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[0.95] text-ink uppercase">
            {title}
          </h2>
          <div className="mt-5 space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
          <ArrowLink href={readMoreHref} className="mt-8 w-fit text-terracotta hover:text-terracotta-dark font-grotesk font-bold">
            {readMoreLabel}
          </ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
