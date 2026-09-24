"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MenuCard from "@/components/MenuCard";

type Item = {
  slug: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
};

export default function MenuCarousel({ items }: { items: Item[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("a");
    const width = card ? card.getBoundingClientRect().width + 20 : 320;
    el.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-center justify-end gap-2 pb-6">
        <button
          aria-label="Scroll left"
          onClick={() => scroll(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-espresso transition-colors hover:border-rust hover:text-rust"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          aria-label="Scroll right"
          onClick={() => scroll(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-espresso transition-colors hover:border-rust hover:text-rust"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
      >
        {items.map((item) => (
          <div
            key={item.slug}
            className="w-[70vw] shrink-0 snap-start sm:w-[45vw] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)]"
          >
            <MenuCard
              title={item.title}
              description={item.description}
              image={item.image}
              href={`/menu#${item.slug}`}
              badge={item.badge}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
