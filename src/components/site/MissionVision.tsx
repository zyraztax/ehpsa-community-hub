import { Section, SectionHeading } from "./Section";

const VALUES = ["Unity", "Professionalism", "Service", "Integrity"];

export function MissionVision() {
  return (
    <Section id="mission" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Mission & Vision"
          title="United in purpose, driven by service"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-9 shadow-sm">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Our Mission
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              To advance the education, unity, and professional development of
              health profession students in Ethiopia — empowering them to serve
              their communities and strengthen the nation's health system
              through collaboration, training, and advocacy.
            </p>
          </div>

          <div className="rounded-2xl border border-accent/40 bg-card p-9 shadow-sm">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Our Vision
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A strong, united community of health professionals equipped to
              deliver compassionate, high-quality care across Ethiopia — with
              EHPSA as the leading platform connecting students from every
              institution and discipline.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Our Core Values
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {VALUES.map((value) => (
              <span
                key={value}
                className="rounded-full border border-primary/20 bg-card px-5 py-2 text-sm font-semibold text-primary"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
