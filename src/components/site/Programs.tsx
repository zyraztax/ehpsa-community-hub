import { Section, SectionHeading } from "./Section";

const PROGRAMS = [
  {
    title: "Capacity Building & Training",
    body: "Workshops, seminars, and skill-building sessions that strengthen students' clinical, academic, and leadership capabilities.",
    icon: (
      <>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </>
    ),
  },
  {
    title: "Community Health Outreach",
    body: "Bringing health education, screening, and preventive care to communities across Ethiopia through student-led initiatives.",
    icon: (
      <>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </>
    ),
  },
  {
    title: "Networking & Mentorship",
    body: "Connecting students with peers, alumni, and professionals to build relationships that last beyond graduation.",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "Advocacy for Students",
    body: "Representing the interests and welfare of health profession students at institutional and national levels.",
    icon: (
      <>
        <path d="M3 11l18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </>
    ),
  },
];

export function Programs() {
  return (
    <Section id="programs" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Programs that make a difference"
          description="From training and outreach to advocacy, EHPSA creates opportunities for students to grow, connect, and give back."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((program) => (
            <div
              key={program.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
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
                  {program.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug text-foreground">
                {program.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {program.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
