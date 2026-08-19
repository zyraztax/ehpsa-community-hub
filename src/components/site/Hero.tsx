import heroImage from "@/assets/hero.jpg";

const TELEGRAM_URL = "https://t.me/EHPSAGonder";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Ethiopian health profession students gathered together"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur-sm">
              Registered NGO · No. 4506
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/90 backdrop-blur-sm">
              Since 2011 E.C
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Lead by Example, Inspire with Action
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
            The Ethiopian Health Profession Students Association (EHPSA) is a
            non-governmental, non-profit organization uniting health profession
            students across Ethiopia — registered with legal personality under
            the civil society organization proclamation.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-elegant transition-transform hover:scale-[1.03]"
            >
              Learn about us
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Join us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
