function Track({ items }: { items: string[] }) {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span
          key={i}
          className="flex items-center px-6 font-grotesk text-xs font-bold uppercase tracking-[0.18em] whitespace-nowrap text-chalk"
        >
          {item}
          <span className="ml-6 font-serif text-gold text-xs">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden bg-terracotta py-3.5 border-y border-terracotta-dark shadow-sm">
      <div className="flex w-max animate-marquee items-center">
        <Track items={items} />
        <Track items={items} />
      </div>
    </div>
  );
}
