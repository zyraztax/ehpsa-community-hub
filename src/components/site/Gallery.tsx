import { Section, SectionHeading } from "./Section";

import blood1 from "@/assets/gallery/blooddonation_1.jpg.asset.json";
import blood2 from "@/assets/gallery/blooddonation_2.jpg.asset.json";
import blood3 from "@/assets/gallery/blooddonation_3.jpg.asset.json";
import blood4 from "@/assets/gallery/blooddonation_4.jpg.asset.json";
import blood5 from "@/assets/gallery/blooddonation_5.jpg.asset.json";
import emergency1 from "@/assets/gallery/EmergencyTraining_1.jpg.asset.json";
import research2 from "@/assets/gallery/ResearchTraining_2.jpg.asset.json";
import research3 from "@/assets/gallery/ResearchTraining_3.jpg.asset.json";
import research4 from "@/assets/gallery/ResearchTraining_4.jpg.asset.json";
import school1 from "@/assets/gallery/highschool_support.jpg.asset.json";
import school2 from "@/assets/gallery/highschool_support2.jpg.asset.json";
import mental1 from "@/assets/gallery/mentalhealtawareness.jpg.asset.json";
import recreation1 from "@/assets/gallery/RecreaeationActivity_1.jpg.asset.json";
import recreation2 from "@/assets/gallery/RecreationActivity_2.jpg.asset.json";
import outdoor1 from "@/assets/gallery/Outdoor_1.jpg.asset.json";
import assembly1 from "@/assets/gallery/ParticipationInNationalAssembly.jpg.asset.json";
import gondarLetter from "@/assets/gallery/GondarBranchAnnouncementLetter.jpg.asset.json";

type Group = {
  title: string;
  images: { url: string }[];
};

const GROUPS: Group[] = [
  { title: "Blood Donation", images: [blood1, blood2, blood3, blood4, blood5] },
  { title: "Research Training", images: [research2, research3, research4] },
  { title: "Emergency Training", images: [emergency1] },
  { title: "High School Support", images: [school1, school2] },
  { title: "Mental Health Awareness", images: [mental1] },
  { title: "Recreation Activities", images: [recreation1, recreation2] },
  { title: "Outdoor Activities", images: [outdoor1] },
  { title: "National Assembly Participation", images: [assembly1] },
  { title: "Gondar Branch Announcement", images: [gondarLetter] },
];

export function Gallery() {
  return (
    <Section id="gallery" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Our activities in pictures"
          description="A look at what EHPSA students do across Ethiopia."
        />

        <div className="mt-14 space-y-14">
          {GROUPS.map((group) => (
            <div key={group.title}>
              <div className="flex items-center gap-4">
                <h3 className="font-display text-lg font-bold tracking-tight text-primary sm:text-xl">
                  {group.title}
                </h3>
                <span className="h-px flex-1 bg-border" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {group.images.length}{" "}
                  {group.images.length === 1 ? "photo" : "photos"}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {group.images.map((image, index) => (
                  <figure
                    key={image.url}
                    className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant"
                  >
                    <img
                      src={image.url}
                      alt={`${group.title} — EHPSA activity photo ${index + 1}`}
                      loading="lazy"
                      className="aspect-4/3 w-full object-cover"
                    />
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
