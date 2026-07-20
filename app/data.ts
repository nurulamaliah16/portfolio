import type { IconName } from "lucide-react/dynamic";

export type Job = {
  num: string;
  current: boolean;
  icon: IconName;
  logo: string;
  org: string;
  dates: string;
  color: string;
  tint: string;
  role: string;
  desc: string;
  details: string[];
  gallery: string[];
  link: string;
};

export const experience: Job[] = [
  {
    num: "01",
    current: true,
    icon: "leaf",
    logo: "/images/experience/unjuk-daya/logo.jpg",
    org: "Unjuk Daya (NGO)",
    dates: "Mar 2026 – Present",
    color: "#6DA89A",
    tint: "#EDF5F3",
    role: "Head of Social Media",
    desc: "Lead digital strategy for an environmental NGO focused on climate action and conservation.",
    details: [
      "Lead the social media & digital campaign strategy for an environmental NGO focused on climate action and conservation",
      "Build and grow an engaged community around ecological issues",
      "Translate complex environmental topics into clear, mobilizing stories",
      "Oversee content planning, production, and performance across channels",
    ],
    gallery: [
      "/images/experience/unjuk-daya/activity-1.jpeg",
      "/images/experience/unjuk-daya/activity-2.jpeg",
      "/images/experience/unjuk-daya/activity-3.jpeg",
    ],
    link: "https://www.instagram.com/unjukdaya",
  },
  {
    num: "02",
    current: true,
    icon: "book-open-text",
    logo: "/images/experience/rij/logo.jpg",
    org: "Rumah Inggris Jogja",
    dates: "Jul 2024 – Present",
    color: "#7B8EC4",
    tint: "#F0F3FA",
    role: "Freelance English Teacher",
    desc: "Design and deliver English lessons for a range of learners.",
    details: [
      "Taught English as a freelance instructor at Rumah Inggris Jogja (RIJ)",
      "Delivered engaging lessons tailored to each student’s proficiency level",
      "Supported students in developing communicative English skills for academic and professional purposes",
    ],
    gallery: [
      "/images/experience/rij/activity-1.jpeg",
      "/images/experience/rij/activity-2.jpeg",
      "/images/experience/rij/activity-3.jpeg",
      "/images/experience/rij/activity-4.jpeg",
      "/images/experience/rij/activity-5.jpeg",
    ],
    link: "https://www.instagram.com/rumahinggrisjogja_official",
  },
  {
    num: "03",
    current: false,
    icon: "megaphone",
    logo: "/images/experience/fcc/logo.jpg",
    org: "Fisipol Crisis Center",
    dates: "Jan 2025 – Dec 2025",
    color: "#5B86B8",
    tint: "#EEF3F9",
    role: "Social Media Officer",
    desc: "Managed social media content strategy for a university crisis center.",
    details: [
      "Develop and manage social media content strategies to increase public awareness on gender-based violence and human rights issues",
      "Create educational visual and written content using Canva",
      "Monitor engagement analytics and optimize communication strategy",
      "Coordinate with stakeholders and internal teams to ensure consistent messaging",
    ],
    gallery: [
      "/images/experience/fcc/activity-1.jpeg",
      "/images/experience/fcc/activity-2.jpeg",
      "/images/experience/fcc/activity-3.jpeg",
      "/images/experience/fcc/activity-4.jpeg",
    ],
    link: "https://www.instagram.com/fisipolcrisiscenter",
  },
  {
    num: "04",
    current: false,
    icon: "globe",
    logo: "/images/experience/gya/logo.jpg",
    org: "Global Youth Ambassador",
    dates: "Aug 2024 – Sept 2024",
    color: "#A08C78",
    tint: "#F4F1ED",
    role: "Project Leader — Malaysia Volunteer & Youth Conference",
    desc: "Led a cross-border volunteer and youth conference program under the Global Youth Ambassador initiative.",
    details: [
      "Selected as a Global Youth Ambassador and deployed to Malaysia for a cross-border volunteer program",
      "Led collaboration with <strong>Hichiikok Foundation</strong> on community-based volunteer activities",
      "Managed the planning and implementation of the Asia Youth Summit in cooperation with International Relations students at <strong>University of Malaya (UM)</strong>",
      "Coordinated international participants, developed the program agenda, and managed partner communication",
      "Facilitated intercultural collaboration between Indonesian and Malaysian youth participants",
    ],
    gallery: [
      "/images/experience/gya/activity-1.jpeg",
      "/images/experience/gya/activity-2.jpeg",
      "/images/experience/gya/activity-3.jpeg",
      "/images/experience/gya/activity-4.jpeg",
      "/images/experience/gya/activity-5.jpeg",
      "/images/experience/gya/activity-6.jpeg",
      "/images/experience/gya/activity-7.jpeg",
    ],
    link: "https://www.globalyouthambassador.com/",
  },
];

export type Training = {
  icon: IconName;
  color: string;
  bg: string;
  title: string;
  year: string;
  duration: string;
  tag: string;
  org: string;
  desc: string;
  certificate?: string;
};

export const trainings: Training[] = [
  {
    icon: "zap",
    color: "#2C6B5E",
    bg: "#E4F0EC",
    title:
      "Energy and Citizenship: Enhancing Citizen Engagement in Energy Transition + RCT Training",
    year: "2025",
    duration: "4 days",
    tag: "Certificate of Completion",
    org: "SUSTAIN Program (UGM–NTNU) · Dept. of Politics & Government, FISIPOL UGM",
    desc: "Training on energy transition governance, citizen engagement, advocacy, and Randomized Controlled Trial (RCT) methods.",
    certificate: "/images/training/energy-and-citizenship/certificate.jpg",
  },
  {
    icon: "line-chart",
    color: "#E85D3D",
    bg: "#FBE4DE",
    title:
      "Digital Campaign Training: How to Design Effective and Data-Driven Digital Campaigns",
    year: "2026",
    duration: "4 weeks",
    tag: "Ongoing",
    org: "Online Training",
    desc: "Online training on designing evidence-based digital campaigns — audience targeting, campaign strategy, data analysis, and digital advocacy.",
  },
];

export type Work = {
  id: string;
  format: "Post" | "Reel";
  url: string;
};

export const works: Work[] = [
  { id: "ig-1", format: "Reel", url: "https://www.instagram.com/reel/DSq-u3fk8ws/" },
  { id: "ig-2", format: "Post", url: "https://www.instagram.com/p/DSquYZ3EmyL" },
  { id: "ig-3", format: "Reel", url: "https://www.instagram.com/p/DZt5Cl4prIv/" },
  { id: "ig-4", format: "Reel", url: "https://www.instagram.com/reel/DaCraYnJvgf" },
  { id: "ig-5", format: "Post", url: "https://www.instagram.com/p/DYweamCCShN/" },
  { id: "ig-6", format: "Reel", url: "https://www.instagram.com/p/DQa_U2ygRuX/" },
  { id: "ig-7", format: "Post", url: "https://www.instagram.com/p/DYd66nHky7g" },
  { id: "ig-8", format: "Reel", url: "https://www.instagram.com/reel/DXihnUnk0ja/" },
  { id: "ig-9", format: "Post", url: "https://www.instagram.com/p/DXD-EAmE1pQ" },
  { id: "ig-10", format: "Reel", url: "https://www.instagram.com/p/DUFb-q8kUmT/" },
  { id: "ig-11", format: "Post", url: "https://www.instagram.com/p/DQBFbG1gZj0" },
  { id: "ig-12", format: "Post", url: "https://www.instagram.com/p/DPLFNumAeR_/" },
  { id: "ig-13", format: "Post", url: "https://www.instagram.com/p/C4uafGSv_rX" },
  { id: "ig-14", format: "Post", url: "https://www.instagram.com/p/C4phfmVPDnj" },
  { id: "ig-15", format: "Post", url: "https://www.instagram.com/p/CoeBiavv8xo" },
  { id: "ig-16", format: "Post", url: "https://www.instagram.com/p/Ci6f8pTPfJ2" },
  { id: "ig-17", format: "Post", url: "https://www.instagram.com/p/ClSHMEpP1u7" },
];

export type Publication = {
  icon: IconName;
  bg: string;
  color: string;
  tag: string;
  title: string;
  source: string;
  date: string;
  points: string[];
  outputs: string[];
};

export const research: Publication[] = [
  { icon: "handshake", bg: "#E4F0EC", color: "#2C6B5E", tag: "Community Engagement", title: "Community Service Implementation Team Member — Seleksi Pamong Kalurahan, Kalurahan Pleret, Bantul", source: "Faculty of Social and Political Sciences, Universitas Gadjah Mada", date: "Feb 2026", points: ["Member of the Community Service Team for the Seleksi Pamong Kalurahan (Village Officials Selection Process) in Kalurahan Pleret, Bantul", "Supported field coordination and stakeholder engagement during local governance selection activities"], outputs: [] },
  { icon: "flask-conical", bg: "#FBE4DE", color: "#E85D3D", tag: "Research Grant", title: "Research Grantee — Negotiating Women’s Leadership Space in Renewable Energy Practices in Yogyakarta", source: "CitRes-Edu (Citizen Engagement & Natural Resource Governance Education)", date: "Sept 2024", points: ["Research Title: Negotiating Women’s Leadership Space in Renewable Energy Practices in Yogyakarta", "Conducting qualitative field research on community-based renewable energy initiatives and women’s leadership roles", "Developing policy-oriented insights to support inclusive energy transition processes"], outputs: [] },
  { icon: "droplets", bg: "#E4F0EC", color: "#2C6B5E", tag: "Awardee", title: "Awardee — Caring Water: Caring the Flows for a Healthier Urban(ized) (Ground)water in Semarang & Yogyakarta", source: "Urban Groundwater Governance & Water Resilience Program", date: "Aug 2024", points: ["Selected as awardee in a sustainability-focused initiative addressing urban groundwater governance and water resilience", "Participated in interdisciplinary learning and knowledge exchange on sustainable urban water management"], outputs: [] },
  { icon: "book-open", bg: "#FDF2E0", color: "#E8A83C", tag: "Publication", title: "Collaborative Governance for Inclusive Education: LKIS and The Struggle for The Right to Education for Believers of Indigenous Faiths in Yogyakarta", source: "UNNES Political Science Journal (SINTA 5)", date: "Dec 2024", points: ["Published in a SINTA 5 accredited journal"], outputs: [] },
  { icon: "book-open", bg: "#FDF2E0", color: "#E8A83C", tag: "Publication", title: "Demokrasi di Era Digital: Peran Siparmas Dalam Penguatan Partisipasi Masyarakat Jawa Timur", source: "Komisi Pemilihan Umum Provinsi Jawa Timur", date: "Dec 2024", points: ["Published by KPU Provinsi Jawa Timur"], outputs: [] },
];

export type ResearchWork = {
  num: string;
  icon: IconName;
  color: string;
  bg: string;
  title: string;
  type: string;
  year: string;
};

export const researchWorks: ResearchWork[] = [
  { num: "01", icon: "scroll-text", color: "#2C6B5E", bg: "#E4F0EC", title: "Kaline Buthek, Wetenge Wareg’: Kuasa Diskursus Dan Kontestasi Makna Atas Pencemaran Sungai Di Kota Pekalongan, Jawa Tengah", type: "Master’s Thesis", year: "In progress" },
  { num: "02", icon: "book-marked", color: "#E85D3D", bg: "#FBE4DE", title: "Moratorium PAMSIMAS dan Produksi Ketimpangan Akses Air Bersih di Kota Pekalongan, Jawa Tengah", type: "Book Chapter — CARING Project", year: "2024" },
  { num: "03", icon: "scroll-text", color: "#E8A83C", bg: "#FDF2E0", title: "Modal Sosial Dalam Pengembangan Usaha Kain Tenun Songket di Desa Muara Penimbung Ilir, Kecamatan Indralaya, Kabupaten Ogan Ilir", type: "Undergraduate Thesis", year: "2023" },
];

export type Achievement = {
  id: string;
  icon: IconName;
  bg: string;
  color: string;
  rank: string;
  title: string;
  org: string;
  year: string;
};

export const achievements: Achievement[] = [
  { id: "ach-1", icon: "award", bg: "#FDF2E0", color: "#E8A83C", rank: "2nd Winner", title: "Duta Bahasa Provinsi Sumatera Selatan", org: "Balai Bahasa Sumatera Selatan", year: "2024" },
  { id: "ach-2", icon: "mic", bg: "#FBE4DE", color: "#E85D3D", rank: "Best Speaker", title: "Mahasiswa Berprestasi FIS UNNES", org: "Fakultas Ilmu Sosial, UNNES", year: "2021" },
  { id: "ach-3", icon: "trophy", bg: "#E4F0EC", color: "#2C6B5E", rank: "1st Winner", title: "Lomba Podcast Sumpah Pemuda", org: "Fakultas Ilmu Sosial, UNNES", year: "2022" },
  { id: "ach-4", icon: "crown", bg: "#FDF2E0", color: "#E8A83C", rank: "1st Winner", title: "DUTA Fakultas Ilmu Sosial UNNES", org: "Fakultas Ilmu Sosial, UNNES", year: "2021" },
  { id: "ach-5", icon: "star", bg: "#FBE4DE", color: "#E85D3D", rank: "1st Winner", title: "DUTA Politik dan Kewarganegaraan", org: "Jurusan PKn, UNNES", year: "2019" },
];

export type Expertise = {
  icon: IconName;
  color: string;
  bg: string;
  title: string;
  line: string;
};

export const expertise: Expertise[] = [
  { icon: "scale", color: "#2C6B5E", bg: "#E4F0EC", title: "Research & Policy", line: "Policy analysis · Qualitative methods · Governance" },
  { icon: "megaphone", color: "#E85D3D", bg: "#FBE4DE", title: "Social Media & Campaigns", line: "Campaign strategy · Community mgmt · Analytics" },
  { icon: "clapperboard", color: "#E8A83C", bg: "#FDF2E0", title: "Content Creation", line: "Short-form video · Visual storytelling · Copywriting" },
];

export type Tool = { name: string; icon: IconName };

export const tools: Tool[] = [
  { name: "Canva", icon: "palette" },
  { name: "CapCut", icon: "clapperboard" },
  { name: "Meta Business Suite", icon: "share-2" },
  { name: "Google Workspace", icon: "file-text" },
  { name: "NVivo", icon: "search" },
  { name: "Microsoft Office", icon: "monitor-play" },
];

export const EMAIL = "nurulamaliah@mail.ugm.ac.id";

export const SITE_URL = "https://nurulamaliah.vercel.app";

export const JOB_TITLE = "Governance Researcher & Social Media Strategist";

export const SITE_TITLE = `Nurul Amaliah — ${JOB_TITLE}`;

// Personal profile URLs for Person JSON-LD sameAs. Paste real links here.
export const SAME_AS: string[] = [
  "https://www.linkedin.com/in/nurulamaliah16/",
  "https://www.instagram.com/nurulaamaliahh"
];
