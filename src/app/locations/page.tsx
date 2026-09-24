import Image from "next/image";
import { MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageIntro from "@/components/PageIntro";
import { LOCATIONS } from "@/lib/data";

export default function LocationsPage() {
  return (
    <main className="bg-chalk min-h-screen">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <PageIntro
            eyebrow="✦ Three spots, one standard"
            title={
              <>
                FIND A <span className="font-serif italic font-normal normal-case text-terracotta">Location</span>
              </>
            }
            titleClassName="mt-4 font-display text-5xl leading-[0.95] text-ink sm:text-6xl md:text-7xl"
          />
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-3">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={loc.name} delay={i * 0.1} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] transition-all duration-500 group-hover:-translate-y-2">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(min-width: 768px) 30vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                
                <div className="mt-6 bg-chalk-white p-6 rounded-3xl">
                  <p className="font-serif text-2xl font-bold text-ink">{loc.name}</p>
                  <div className="mt-4 space-y-2.5">
                    <p className="flex items-start gap-3 text-sm text-ink-soft">
                      <MapPin size={18} className="mt-0.5 shrink-0 text-terracotta" />
                      <span>{loc.address}</span>
                    </p>
                    <p className="flex items-start gap-3 text-sm text-ink-soft">
                      <Clock size={18} className="mt-0.5 shrink-0 text-terracotta" />
                      <span>{loc.hours}</span>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
