import { Section, SectionHeading } from "./Section";

type Branch = {
  city: string;
  university: string;
  short: string;
  telegram: string;
};

const BRANCHES: Branch[] = [
  {
    city: "Gondar",
    university: "University of Gondar",
    short: "UoG",
    telegram: "https://t.me/EHPSAGonder",
  },
  {
    city: "Jimma",
    university: "Jimma University",
    short: "JU",
    telegram: "https://t.me/EHPSAJimma",
  },
  {
    city: "Hawassa",
    university: "Hawassa University",
    short: "HU",
    telegram: "https://t.me/EHPSAHU",
  },
  {
    city: "Arsi",
    university: "Arsi University",
    short: "AU",
    telegram: "https://t.me/EHPSA_Arsi",
  },
  {
    city: "Bahir Dar",
    university: "Bahir Dar University",
    short: "BDU",
    telegram: "https://t.me/EHPSA_Bahir_Dar",
  },
  {
    city: "Haramaya",
    university: "Haramaya University",
    short: "HaU",
    telegram: "https://t.me/EHPSAHaramaya",
  },
  {
    city: "Debre Tabor",
    university: "Debre Tabor University",
    short: "DTU",
    telegram: "https://t.me/EHPSAHaramaya",
  },
  {
    city: "Mekelle",
    university: "Mekelle University",
    short: "MU",
    telegram: "https://t.me/EHPSA123",
  },
  {
    city: "Debre Markos",
    university: "Debre Markos University",
    short: "DMU",
    telegram: "https://t.me/EHPSADebremarkos",
  },
];

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M11.94 14.51 11.7 17.8c.31 0 .45-.13.61-.3l1.46-1.4 3.03 2.21c.56.31.95.15 1.1-.51l2-9.36c.2-.82-.3-1.15-.84-.94L4.6 11.4c-.8.31-.79.76-.14.96l3.3 1.03 7.66-4.83c.36-.24.69-.1.42.16z" />
    </svg>
  );
}

export function Branches() {
  return (
    <Section id="branches" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Branches"
          title="Our branches across Ethiopia"
          description="EHPSA connects health profession students through active branches at universities nationwide. Find your campus and connect with the chapter on Telegram."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BRANCHES.map((branch) => (
            <article
              key={branch.university}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow font-display text-sm font-bold tracking-tight text-primary-foreground shadow-sm">
                  {branch.short}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold leading-tight text-foreground">
                    {branch.university}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {branch.city}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex-1" />

              <a
                href={branch.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <TelegramIcon className="h-4 w-4" />
                See us on Telegram
              </a>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
