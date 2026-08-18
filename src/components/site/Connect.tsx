import { Section, SectionHeading } from "./Section";

const CHANNELS = [
  {
    name: "LinkedIn",
    handle: "company/ethiopian-health-profession-students-association",
    description: "Follow our official updates and announcements.",
    href: "https://www.linkedin.com/company/ethiopian-health-profession-students-association/",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    name: "Telegram",
    handle: "EHPSAGonder",
    description: "Join our active Gondar chapter community.",
    href: "https://t.me/EHPSAGonder",
    icon: (
      <path d="M21.5 4.5 2.5 12l6 2 2 6 3.5-4 5 4z" />
    ),
  },
  {
    name: "Facebook",
    handle: "EHPSA — Addis Ababa",
    description: "Connect with our main community page.",
    href: "https://www.facebook.com/profile.php?id=100063946394019",
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
];

export function Connect() {
  return (
    <Section id="connect" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Connect"
          title="Join the EHPSA community"
          description="Reach out, follow our work, or become a member through any of our channels."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CHANNELS.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <div className="flex items-center justify-between">
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
                    {channel.icon}
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                {channel.name}
              </h3>
              <p className="mt-1 text-xs font-medium text-accent-foreground/70">
                {channel.handle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {channel.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
