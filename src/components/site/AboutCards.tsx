import { Section, SectionHeading } from "./Section";

const CARDS = [
  {
    title: "Who we are",
    body: "EHPSA is a non-governmental, non-profit, local organization with full legal personality — built by and for health profession students across Ethiopia.",
    icon: (
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm14 14v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    ),
  },
  {
    title: "Legal standing",
    body: "Registered in 2011 E.C and accorded legal personality under registration number 4506, in accordance with the civil society organization proclamation.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "For whom",
    body: "Open to every health profession student in Ethiopia — medicine, nursing, pharmacy, public health, and allied fields — across all universities.",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
];

export function AboutCards() {
  return (
    <Section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About EHPSA"
          title="A recognized voice for health students"
          description="A legally registered organization dedicated to uniting, supporting, and advancing health profession students throughout Ethiopia."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {card.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
