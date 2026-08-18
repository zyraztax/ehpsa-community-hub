import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { AboutCards } from "@/components/site/AboutCards";
import { MissionVision } from "@/components/site/MissionVision";
import { Programs } from "@/components/site/Programs";
import { Chapters } from "@/components/site/Chapters";
import { Connect } from "@/components/site/Connect";
import { Footer } from "@/components/site/Footer";

const NGO_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Ethiopian Health Profession Students Association",
  alternateName: "EHPSA",
  url: "/",
  description:
    "A non-governmental, non-profit organization uniting health profession students across Ethiopia, registered with legal personality under registration number 4506.",
  foundingDate: "2019",
  areaServed: "Ethiopia",
  sameAs: [
    "https://www.linkedin.com/company/ethiopian-health-profession-students-association/",
    "https://t.me/EHPSAGonder",
    "https://www.facebook.com/profile.php?id=100063946394019",
  ],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "EHPSA — Ethiopian Health Profession Students Association" },
      {
        name: "description",
        content:
          "EHPSA is a registered non-governmental, non-profit organization uniting health profession students across Ethiopia. Registered NGO No. 4506, since 2011 E.C.",
      },
      {
        property: "og:title",
        content: "EHPSA — Ethiopian Health Profession Students Association",
      },
      {
        property: "og:description",
        content:
          "A registered non-profit uniting health profession students across Ethiopia. Registered NGO No. 4506, since 2011 E.C.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(NGO_JSON_LD),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutCards />
        <MissionVision />
        <Programs />
        <Chapters />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
