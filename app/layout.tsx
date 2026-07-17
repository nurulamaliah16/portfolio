import type { Metadata } from "next";
import { Fredoka, Nunito_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { SITE_URL, SAME_AS, EMAIL, research, researchWorks } from "./data";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fred",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
});

const DESCRIPTION =
  "Political Science graduate & Master's student in Politics and Government, working at the intersection of governance research, digital storytelling, and social media strategy.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Nurul Amaliah — Governance Research & Social Media Strategist",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title: "Nurul Amaliah — Governance Research & Social Media Strategist",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nurul Amaliah — Governance Research & Social Media Strategist",
    description: DESCRIPTION,
  },
};

const PERSON_ID = `${SITE_URL}/#person`;
const author = { "@id": PERSON_ID };

// Real published works only (skip grants/awards/in-progress).
const publications = [
  ...research
    .filter((r) => r.tag === "Publication")
    .map((r) => ({
      "@type": "ScholarlyArticle",
      name: r.title,
      author,
      publisher: { "@type": "Organization", name: r.source },
      datePublished: r.date,
    })),
  ...researchWorks
    .filter((w) => /^\d{4}$/.test(w.year)) // published year, not "In progress"
    .map((w) => ({
      "@type": w.type.includes("Thesis") ? "Thesis" : "CreativeWork",
      name: w.title,
      author,
      datePublished: w.year,
    })),
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Nurul Amaliah",
      url: SITE_URL,
      email: `mailto:${EMAIL}`,
      jobTitle: "Governance Researcher & Social Media Strategist",
      description: DESCRIPTION,
      image: `${SITE_URL}/images/gf.png`,
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Universitas Gadjah Mada" },
        { "@type": "CollegeOrUniversity", name: "Universitas Negeri Semarang" },
      ],
      ...(SAME_AS.length > 0 && { sameAs: SAME_AS }),
    },
    ...publications,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable} ${caveat.variable}`}>
      <body className="font-body text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
