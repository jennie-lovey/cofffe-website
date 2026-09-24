import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import PageIntro from "@/components/PageIntro";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-chalk min-h-screen">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <PageIntro
            eyebrow="✦ We'd love to hear from you"
            title={
              <>
                GET IN <span className="font-serif italic font-normal normal-case text-terracotta">Touch</span>
              </>
            }
            titleClassName="mt-4 font-display text-5xl leading-[0.95] text-ink sm:text-6xl md:text-7xl"
          />
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto grid max-w-5xl gap-16 px-6 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="bg-chalk-white p-10 rounded-[2.5rem] h-full">
              <h2 className="font-display text-4xl text-ink">SAY HELLO</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                For catering, private events, or just to tell us how your
                cortado was — we read every single message.
              </p>
              
              <div className="mt-10 pt-8">
                <ul className="space-y-6 text-sm text-ink font-sans">
                  <li className="flex items-center gap-4 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta-soft text-terracotta transition-all duration-300 group-hover:bg-terracotta group-hover:text-chalk group-hover:scale-110 group-hover:rotate-6">
                      <Mail size={16} />
                    </div>
                    <span className="font-medium">hello@ambercoffeeco.com</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta-soft text-terracotta transition-all duration-300 group-hover:bg-terracotta group-hover:text-chalk group-hover:scale-110 group-hover:rotate-6">
                      <Phone size={16} />
                    </div>
                    <span className="font-medium">(555) 019-2847</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta-soft text-terracotta transition-all duration-300 group-hover:bg-terracotta group-hover:text-chalk group-hover:scale-110 group-hover:rotate-6">
                      <MapPin size={16} />
                    </div>
                    <span className="font-medium">214 Elm Street, Downtown Austin</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
