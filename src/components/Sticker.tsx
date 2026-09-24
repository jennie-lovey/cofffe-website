export default function Sticker({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex -rotate-6 items-center rounded-full border border-cream/70 bg-rust px-3 py-1.5 font-grotesk text-[10px] font-semibold uppercase tracking-[0.1em] text-cream shadow-lg shadow-rust/30 ${className}`}
    >
      {children}
    </span>
  );
}
