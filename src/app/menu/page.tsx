import MenuTabs from "@/components/MenuTabs";
import PageIntro from "@/components/PageIntro";

export default function MenuPage() {
  return (
    <main className="bg-chalk min-h-screen">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <PageIntro
            eyebrow="✦ The Full Lineup"
            title={
              <>
                OUR <span className="font-serif italic font-normal normal-case text-terracotta">Menu</span>
              </>
            }
            titleClassName="mt-4 font-display text-5xl leading-[0.95] text-ink sm:text-6xl md:text-7xl"
            description="Prices may vary slightly by location. Ask your barista about today's single-origin pour-over and seasonal dining specials."
            descriptionClassName="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-ink-soft"
          />
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-5xl px-6">
          <MenuTabs />
        </div>
      </section>
    </main>
  );
}
