import ehpsaLogo from "@/assets/ehpsa-logo.jpg.asset.json";

const LINKEDIN_URL =
  "https://www.linkedin.com/company/ethiopian-health-profession-students-association/";
const TELEGRAM_URL = "https://t.me/EHPSAGonder";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100063946394019";

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Programs", href: "#programs" },
  { label: "Branches", href: "#branches" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#connect" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={ehpsaLogo.url}
                alt="EHPSA logo"
                width={44}
                height={44}
                className="rounded-lg object-cover"
              />
              <span className="font-display text-lg font-bold">EHPSA</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Ethiopian Health Profession Students Association — a registered
              non-governmental, non-profit organization uniting health
              profession students across Ethiopia.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Connect
            </h4>
            <div className="mt-4 flex gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
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
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
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
                >
                  <path d="M21.5 4.5 2.5 12l6 2 2 6 3.5-4 5 4z" />
                </svg>
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
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
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-primary-foreground/60">
              Registered NGO No. 4506 · Est. 2011 E.C
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6">
          <p className="text-center text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Ethiopian Health Profession Students
            Association (EHPSA). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
