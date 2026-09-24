import Image from "next/image";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";

export default function StoryPanel({
  eyebrow,
  title,
  paragraphs,
  readMoreHref,
  readMoreLabel = "Read more",
  image,
  imageAlt,
  imageFirst = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  paragraphs: string[];
  readMoreHref: string;
  readMoreLabel?: string;
  image: string;
  imageAlt: string;
  imageFirst?: boolean;
}) {
  return (
    <section className="bg-chalk py-12 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <Reveal
            className={`group relative min-h-[400px] overflow-hidden rounded-[2.5rem] ${
              imageFirst ? "md:order-1" : "md:order-2"
            }`}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </Reveal>

          <Reveal
            delay={0.1}
            className={`flex flex-col justify-center rounded-[2.5rem] bg-chalk-white p-8 sm:p-12 md:p-14 ${
              imageFirst ? "md:order-2" : "md:order-1"
            }`}
          >
            {eyebrow && (
              <p className="font-grotesk text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                {eyebrow}
              </p>
            )}
            <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[0.95] text-ink">
              {title}
            </h2>
            <div className="mt-5 space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>
            <ArrowLink href={readMoreHref} className="mt-8 w-fit text-terracotta hover:text-terracotta-dark">
              {readMoreLabel}
            </ArrowLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
