import { Section, SectionHeading } from "./Section";

const CHAPTERS = [
  {
    name: "Addis Ababa",
    role: "Headquarters",
    description: "The national seat of EHPSA, coordinating activities and membership across Ethiopia.",
    tag: "HQ",
  },
  {
    name: "Gondar",
    role: "Chapter",
    description: "An active university chapter running training, outreach, and student events.",
    tag: "Active",
    link: "https://t.me/EHPSAGonder",
  },
];

export function Chapters() {
  return (
    <Section id="chapters" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Chapters"
          title="Present across Ethiopia"
          description="EHPSA is growing — connecting health profession students chapter by chapter, university by university."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CHAPTERS.map((chapter) => (
            <div
              key={chapter.name}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <span
                className={`absolute right-6 top-6 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${
                  chapter.tag === "HQ"
                    ? "bg-accent/20 text-accent-foreground"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {chapter.tag}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                {chapter.name}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground/70">
                {chapter.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {chapter.description}
              </p>
              {chapter.link && (
                <a
                  href={chapter.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Connect on Telegram
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              )}
            </div>
          ))}

          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card/50 p-8 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-foreground">
              Expanding next
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              New chapters are forming at universities across Ethiopia. Bring
              EHPSA to your campus.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
