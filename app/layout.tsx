import type { Metadata } from "next";
import { headers } from "next/headers";
import { Fredoka, Nunito_Sans, Caveat } from "next/font/google";
import "./globals.css";
import {
  SITE_URL,
  SITE_TITLE,
  JOB_TITLE,
  SAME_AS,
  EMAIL,
  research,
  researchWorks,
} from "./data";
import { MotionProvider } from "./lib/motion";
import { computeServerAnimate } from "./lib/ua";

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
  title: SITE_TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Nurul Amaliah", url: SITE_URL }],
  alternates: { canonical: "/" },
  // Image from app/opengraph-image.tsx (1200×630 — portrait + title for WA/FB/X)
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Nurul Amaliah",
    locale: "en_US",
    title: SITE_TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
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
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Nurul Amaliah",
      description: DESCRIPTION,
      publisher: { "@id": PERSON_ID },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: SITE_TITLE,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": PERSON_ID },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Nurul Amaliah",
      url: SITE_URL,
      email: `mailto:${EMAIL}`,
      jobTitle: JOB_TITLE,
      description: DESCRIPTION,
      image: `${SITE_URL}/images/gf.png`,
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Universitas Gadjah Mada" },
        { "@type": "CollegeOrUniversity", name: "Universitas Negeri Semarang" },
      ],
      worksFor: [
        {
          "@type": "Organization",
          name: "Unjuk Daya",
          sameAs: "https://www.instagram.com/unjukdaya",
        },
        {
          "@type": "Organization",
          name: "Rumah Inggris Jogja",
          sameAs: "https://www.instagram.com/rumahinggrisjogja_official",
        },
      ],
      ...(SAME_AS.length > 0 && { sameAs: SAME_AS }),
    },
    ...publications,
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const h = await headers();
  const dm = h.get("sec-ch-device-memory");
  const animate = computeServerAnimate({
    ua: h.get("user-agent"),
    deviceMemory: dm ? Number(dm) : undefined,
    prefersReducedMotion: h.get("sec-ch-prefers-reduced-motion") === "reduce",
  });
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable} ${caveat.variable}`}>
      <body className="font-body text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider value={animate}>{children}</MotionProvider>
      </body>
    </html>
  );
}
