import type { IconName } from "lucide-react/dynamic";

export type Job = {
  num: string;
  current: boolean;
  icon: IconName;
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
    org: "Unjuk Daya (NGO)",
    dates: "Mar 2026 – Present",
    color: "#2C6B5E",
    tint: "#E4F0EC",
    role: "Head of Social Media",
    desc: "Lead digital strategy for an environmental NGO focused on climate action and conservation.",
    details: [
      "Lead the social media & digital campaign strategy for an environmental NGO focused on climate action and conservation",
      "Build and grow an engaged community around ecological issues",
      "Translate complex environmental topics into clear, mobilizing stories",
      "Oversee content planning, production, and performance across channels",
    ],
    gallery: ["exp-1-a", "exp-1-b", "exp-1-c"],
    link: "#",
  },
  {
    num: "02",
    current: true,
    icon: "book-open-text",
    org: "Rumah Inggris Jogja",
    dates: "Jul 2024 – Present",
    color: "#2C6B5E",
    tint: "#E4F0EC",
    role: "Freelance English Teacher",
    desc: "Design and deliver English lessons for a range of learners.",
    details: [
      "Taught English as a freelance instructor at Rumah Inggris Jogja (RIJ)",
      "Delivered engaging lessons tailored to each student’s proficiency level",
      "Supported students in developing communicative English skills for academic and professional purposes",
    ],
    gallery: ["exp-4-a", "exp-4-b", "exp-4-c"],
    link: "https://www.instagram.com/rumahinggrisjogja/",
  },
  {
    num: "03",
    current: false,
    icon: "megaphone",
    org: "Fisipol Crisis Center",
    dates: "Jan 2025 – Dec 2025",
    color: "#E85D3D",
    tint: "#FBE4DE",
    role: "Social Media Officer",
    desc: "Managed social media content strategy for a university crisis center.",
    details: [
      "Develop and manage social media content strategies to increase public awareness on gender-based violence and human rights issues",
      "Create educational visual and written content using Canva",
      "Monitor engagement analytics and optimize communication strategy",
      "Coordinate with stakeholders and internal teams to ensure consistent messaging",
    ],
    gallery: ["exp-2-a", "exp-2-b", "exp-2-c"],
    link: "https://fisipolcrisiscenter.fisipol.ugm.ac.id/",
  },
  {
    num: "04",
    current: false,
    icon: "globe",
    org: "Hichiikok Foundation & University of Malaya",
    dates: "Aug 2024 – Sept 2024",
    color: "#E8A83C",
    tint: "#FDF2E0",
    role: "Project Leader — Malaysia Volunteer & Youth Conference",
    desc: "Led a cross-border volunteer and youth conference program in Malaysia.",
    details: [
      "Led cross-border volunteer program in collaboration with Hichiikok Foundation, Malaysia",
      "Managed the planning and implementation of the Asia Youth Summit in cooperation with International Relations students at University of Malaya (UM)",
      "Coordinated international participants, developed the program agenda, and managed partner communication",
      "Facilitated intercultural collaboration between Indonesian and Malaysian youth participants",
      "Oversaw administrative preparation, documentation, and reporting",
    ],
    gallery: ["exp-3-a", "exp-3-b", "exp-3-c"],
    link: "#",
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
  outputs: string[];
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
    outputs: ["cert-1-a", "cert-1-b", "cert-1-c"],
  },
  {
    icon: "line-chart",
    color: "#E85D3D",
    bg: "#FBE4DE",
    title:
      "Digital Campaign Training: How to Design Effective and Data-Driven Digital Campaigns",
    year: "2026",
    duration: "4 weeks",
    tag: "Certificate of Completion",
    org: "Online Training",
    desc: "Online training on designing evidence-based digital campaigns — audience targeting, campaign strategy, data analysis, and digital advocacy.",
    outputs: ["cert-2-a", "cert-2-b", "cert-2-c"],
  },
];

export type Work = {
  id: string;
  format: "Post" | "Reel";
  role: string;
  roleColor: string;
  roleTint: string;
  account: string;
  url: string;
  caption: string;
  platformLabel: string;
  platformIcon: IconName;
};

const rawWorks: Omit<Work, "platformLabel" | "platformIcon">[] = [
  { id: "ig-s-1", format: "Post", role: "Account Management", roleColor: "#2C6B5E", roleTint: "#E4F0EC", account: "Managed NGO account", url: "https://www.instagram.com/p/DYd66nHky7g/", caption: "Public awareness — gender-based violence & human rights" },
  { id: "ig-s-2", format: "Reel", role: "Account Management", roleColor: "#2C6B5E", roleTint: "#E4F0EC", account: "Managed NGO account", url: "https://www.instagram.com/reel/DXihnUnk0ja/", caption: "Advocacy reel — human rights & social issues" },
  { id: "ig-s-3", format: "Post", role: "Account Management", roleColor: "#2C6B5E", roleTint: "#E4F0EC", account: "Managed NGO account", url: "https://www.instagram.com/p/DI-afVtBT99/", caption: "Educational visual content built in Canva" },
  { id: "ig-s-4", format: "Post", role: "Account Management", roleColor: "#2C6B5E", roleTint: "#E4F0EC", account: "Managed NGO account", url: "https://www.instagram.com/p/DKqjWKzh14D/", caption: "Campaign content for public engagement" },
  { id: "ig-s-5", format: "Post", role: "Account Management", roleColor: "#2C6B5E", roleTint: "#E4F0EC", account: "Managed NGO account", url: "https://www.instagram.com/p/DLUC5JGBrtK/", caption: "Data-informed awareness campaign" },
  { id: "ig-s-6", format: "Post", role: "Account Management", roleColor: "#2C6B5E", roleTint: "#E4F0EC", account: "Managed NGO account", url: "https://www.instagram.com/p/DN17PwOwiVB/", caption: "Issue explainer for the community" },
  { id: "ig-c-1", format: "Reel", role: "Content · Collab", roleColor: "#E85D3D", roleTint: "#FBE4DE", account: "Collaboration", url: "https://www.instagram.com/reel/DZt5Cl4prIv/", caption: "Creator collaboration reel" },
  { id: "ig-c-2", format: "Reel", role: "Content · Collab", roleColor: "#E85D3D", roleTint: "#FBE4DE", account: "Collaboration", url: "https://www.instagram.com/reel/CmOKt5GpGW6/", caption: "Creator collaboration reel" },
  { id: "ig-c-3", format: "Reel", role: "Content · Collab", roleColor: "#E85D3D", roleTint: "#FBE4DE", account: "Collaboration", url: "https://www.instagram.com/reel/DQa_U2ygRuX/", caption: "Creator collaboration reel" },
  { id: "ig-c-4", format: "Reel", role: "Content · Collab", roleColor: "#E85D3D", roleTint: "#FBE4DE", account: "Collaboration", url: "https://www.instagram.com/reel/DMHvd-Yhc_1/", caption: "Creator collaboration reel" },
  { id: "ig-c-5", format: "Reel", role: "Content · Collab", roleColor: "#E85D3D", roleTint: "#FBE4DE", account: "Collaboration", url: "https://www.instagram.com/reel/DK1G4g_B9BG/", caption: "Creator collaboration reel" },
];

export const works: Work[] = rawWorks.map((w) => ({
  ...w,
  platformLabel: "Instagram",
  platformIcon: "camera",
}));

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
  { icon: "handshake", bg: "#E4F0EC", color: "#2C6B5E", tag: "Community Engagement", title: "Community Service Implementation Team Member — Seleksi Pamong Kalurahan, Kalurahan Pleret, Bantul", source: "Faculty of Social and Political Sciences, Universitas Gadjah Mada", date: "Feb 2026", points: [], outputs: ["pub-1-a", "pub-1-b", "pub-1-c"] },
  { icon: "flask-conical", bg: "#FBE4DE", color: "#E85D3D", tag: "Research Grant", title: "Research Grantee — Negotiating Women’s Leadership Space in Renewable Energy Practices in Yogyakarta", source: "CitRes-Edu (Citizen Engagement & Natural Resource Governance Education)", date: "Sept 2024", points: [], outputs: ["pub-2-a", "pub-2-b", "pub-2-c"] },
  { icon: "droplets", bg: "#E4F0EC", color: "#2C6B5E", tag: "Awardee", title: "Awardee — Caring Water: Caring the Flows for a Healthier Urban(ized) (Ground)water in Semarang & Yogyakarta", source: "Urban Groundwater Governance & Water Resilience Program", date: "Aug 2024", points: [], outputs: ["pub-3-a", "pub-3-b", "pub-3-c"] },
  { icon: "book-open", bg: "#FDF2E0", color: "#E8A83C", tag: "Publication", title: "Collaborative Governance for Inclusive Education: LKIS and The Struggle for The Right to Education for Believers of Indigenous Faiths in Yogyakarta", source: "UNNES Political Science Journal (SINTA 5)", date: "Dec 2024", points: ["Published in a SINTA 5 accredited journal"], outputs: ["pub-4-a", "pub-4-b", "pub-4-c"] },
  { icon: "book-open", bg: "#FDF2E0", color: "#E8A83C", tag: "Publication", title: "Demokrasi di Era Digital: Peran Siparmas Dalam Penguatan Partisipasi Masyarakat Jawa Timur", source: "Komisi Pemilihan Umum Provinsi Jawa Timur", date: "Dec 2024", points: ["Published by KPU Provinsi Jawa Timur"], outputs: ["pub-5-a", "pub-5-b", "pub-5-c"] },
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
