export const PERSONAL = {
  name: "Dev Dharshan L",
  title: "Java-Focused Software Developer",
  degree: "B.E Computer Science and Engineering",
  college: "Panimalar Engineering College",
  year: "Pre-Final Year (2023–2027)",
  cgpa: "8.125",
  location: "Chennai, India",
  email: "devdharshan003@gmail.com",
  availability: "Available for Internships",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/Devdharshan003",
  linkedin: "https://www.linkedin.com/in/dev-dharshan-85b357320/",
  leetcode: "https://leetcode.com/u/_Devdharshan/",
  resume:
    "https://drive.google.com/file/d/1tYrtkggxEWxxJgIib_xgu1rMnarLu0mP/view",
};

export const STATS = [
  { num: "8.1", suffix: "", label: "CGPA" },
  { num: "2", suffix: "", label: "Projects" },
  { num: "2", suffix: "", label: "Academic Works" },
  { num: "1", suffix: "", label: "Internship" },
];

export const ABOUT_HIGHLIGHTS = [
  { label: "Institution", value: "Panimalar Engineering College" },
  { label: "Degree", value: "B.E Computer Science & Engineering · 2023–2027" },
  { label: "CGPA", value: "8.125 / 10.0" },
  { label: "Location", value: "Chennai, Tamil Nadu, India" },
  { label: "Current Focus", value: "Java · Backend Systems · IoT" },
  { label: "Email", value: "devdharshan003@gmail.com" },
];

export interface Project {
  name: string;
  desc: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  icon?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "SafeStruct",
    desc: "IoT-based Structural Health Monitoring System that uses distributed sensor networks to collect real-time vibration, tilt, and stress data from buildings and bridges. The system processes raw sensor streams through a Java backend pipeline, applies threshold-based alerting, and provides a dashboard for civil engineers to monitor infrastructure integrity remotely — potentially preventing structural failures before they happen.",
    tags: ["Java", "IoT / MQTT", "Sensor Networks", "Real-time Monitoring", "MySQL"],
    github: "https://github.com/Devdharshan003",
    featured: true,
    icon: "🏗️",
  },
  {
    name: "Arogya Raksha",
    desc: "Arogya Raksha is a safety and incident reporting platform built around a Java backend and a lightweight client interface. It focuses on reliable data capture, simple rule-based alerting, and clear status tracking so that incidents can be logged and escalated without relying on complex ML pipelines.",
    tags: ["Java", "REST APIs", "MySQL", "Firebase"],
    github: "https://github.com/Devdharshan003",
    icon: "🛡️",
  },
  {
    name: "Advertize",
    desc: "A third-party marketplace platform connecting advertisers with billboard owners. It streamlines the process of finding and booking ad spaces, facilitating direct connections for publishing advertisements on available boards.",
    tags: ["Java", "Web Platform", "Marketplace"],
    github: "https://github.com/Devdharshan003",
    icon: "📢",
  },
];

export type ResearchStatus = "ongoing" | "in-progress" | "planned";

export interface ResearchItem {
  title: string;
  period: string;
  institution: string;
  desc: string;
  status: ResearchStatus;
}

export const RESEARCH: ResearchItem[] = [
  {
    title: "Structural Health Monitoring System for Civil Infrastructure",
    period: "2024 – Present",
    institution: "Panimalar Engineering College",
    desc: "Investigating how distributed IoT sensors and a Java-based data pipeline can be used to detect abnormal vibration and tilt patterns in civil structures. The work focuses on sensor placement, data quality, and practical threshold-based alerting that can be deployed on resource-constrained hardware.",
    status: "ongoing",
  },
  {
    title: "Arogya Raksha – Design of a Safety and Incident Reporting Platform",
    period: "2024",
    institution: "Department of CSE, Panimalar Engineering College",
    desc: "Academic study of the Arogya Raksha project, focusing on the backend data model, incident lifecycle, and notification workflow. The work evaluates how a Java-centric stack with relational storage can support reliable logging, escalation, and audit trails for safety-related events.",
    status: "in-progress",
  },
];

export interface Certification {
  org: string;
  name: string;
  date: string;
  credentialUrl?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    org: "NPTEL – IIT Kharagpur",
    name: "Programming in Java — Elite Certificate",
    date: "February 2024",
    credentialUrl: "https://drive.google.com/file/d/1y_i-3H0MMwI-0HH8y6WjETte_sT3tVfL/view",
  },
  {
    org: "NASSCOM",
    name: "Acquiring Data",
    date: "June 2024",
    credentialUrl: "https://drive.google.com/file/d/1AbK_p26GUi9miZ5JUFgqXL0VN6Cq05Ta/view",
  },
  {
    org: "British Council",
    name: "APTIS ESOL English Certification",
    date: "September 2024",
    credentialUrl: "https://credentials.britishcouncil.org/a93e421a-b3b1-48b0-88b9-5695627c58ae",
  },
];

export interface Internship {
  company: string;
  role: string;
  batch: string;
  mode: string;
  domain: string;
  project: string;
  recognition: string;
  team: string[];
  desc: string;
}

export const INTERNSHIPS: Internship[] = [
  {
    company: "Altruisty Innovation Pvt Ltd",
    role: "App Development Intern",
    batch: "April 14th Batch Internship",
    mode: "Online",
    domain: "App Development",
    project: "PEC (Panimalar Engineering College) Application",
    recognition: "🏆 Best Team – April 14th Batch Internship",
    team: ["Ashwanth A (TL)", "Dev Dharshan L", "Deepak P", "Aryasudhan R"],
    desc: "Worked as part of the Best Performing Team in the April 14th Internship Batch under the App Development domain. Contributed to the development of the PEC (Panimalar Engineering College) Application, focusing on collaborative development and structured internship workflow execution. Recognized as the Best Team of the internship batch.",
  },
];

export interface SkillCategory {
  label: string;
  skills: { icon: string; name: string }[];
}

export const SKILLS: SkillCategory[] = [
  {
    label: "Languages",
    skills: [
      { icon: "☕", name: "Java" },
      { icon: "🗄️", name: "SQL" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: [
      { icon: "⚛️", name: "React" },
      { icon: "🔥", name: "Firebase" },
    ],
  },
  {
    label: "Tools & Technologies",
    skills: [
      { icon: "🐙", name: "Git & GitHub" },
      { icon: "🐬", name: "MySQL" },
      { icon: "📡", name: "MQTT" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { icon: "▲", name: "Vercel" },
    ],
  },
];
