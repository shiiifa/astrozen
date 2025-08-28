import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Shifa Amankwa-Gabbey - Official Portfolio",
  author: "Shifa Amankwa-Gabbey",
  description:
    "I'm a Computer Engineering student with a passion for visual design, where I combine creativity, customization, and technology to bring clarity and impact to digital projects.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "profile", href: "#profile" },
    { text: "experience", href: "#experience" },
    { text: "projects", href: "#projects" },
    { text: "skills", href: "#skills" },
    { text: "beyond engineering", href: "#beyond-engineering" },
    { text: "let's connect!", href: "#connect" }
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/shifaamankwa-gabbey/" },
    { text: "Github", href: "https://github.com/shiiifa" },
    { text: "Email", href: "mailto:shifa.gabbey@ashesi.edu.gh" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://shifagabbey.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Shifa Amankwa-Gabbey",
    specialty: "Technology | Creativity",
    summary:
      "I'm a Computer Engineering student with a passion for visual design, where I combine creativity, customization, and technology to bring clarity and impact to digital projects.",
    email: "shifa.gabbey@ashesi.edu.gh",
  },
  experience: [
    {
      company: "Kuapa Kokoo Limited",
      position: "Management Information Systems Intern",
      startDate: "June 2025",
      endDate: "August 2025",
      summary: [
        "Gained first-time exposure to professional IT systems, database management, and server operations.",
        "Contributed to district-level data reporting, SQL database structuring (via phpMyAdmin), QR code generation with JavaScript, and network/software maintenance",
        "Extended into an attachment role, supporting the development of an asset and inventory tracking system for the company.",
      ],
    },
    
  ],
  
  projects: [
    {
      name: "Ashesi Multipurpose Reservation System",
      summary: "Centralized platform streamlining student access to campus resources with secure login validation.",
      linkPreview: "/",
      linkSource: "https://github.com/shiiifa/Multipurpose-Reservation-Platform",
      image: "/multipurpose-reservation-platform.png",
    },
    {
      name: "Ashesi Student Information System",
      summary: "CAMU-inspired prototype with propositional logic for automated course enrollment decisions.",
      linkPreview: "/",
      linkSource: "https://github.com/shiiifa?tab=repositories",
      image: "/asis.jpg",
    },
    {
      name: "ShellTrivia",
      summary: "GUI-based trivia game with multiple levels, categories, and interactive scoring system.",
      linkPreview: "/",
      linkSource: "https://github.com/shiiifa/ShellTrivia",
      image: "/clone-ig.png",
    },
    {
      name: "Cyber Threat Dynamics in VANETs",
      summary: "Malware spread modeling in vehicular networks using SEIR-S framework and wireless analysis.",
      linkPreview: "/",
      linkSource: "https://github.com/shiiifa/MalwareSimulation",
      image: "/vanets.png",
    },
    {
      name: "Arduino Buzzer Timer",
      summary: "Countdown timer with 7-segment LED displays, buzzer, and potentiometer control for Circuits & Electronics.",
      linkPreview: "/",
      linkSource: "https://lnkd.in/dcDTycNE",
      image: "/clone-ig.png", // USING SAME IMAGE AS OTHERS
    },
    {
      name: "Hydrogel Soil Analysis",
      summary: "Statistical study of water retention capacity in different soils using hydrogel technology.",
      linkPreview: "/",
      linkSource: "#",
      image: "/clone-ig.png", // USING SAME IMAGE AS OTHERS
    },
  ],

  skills: [
  {
    category: "Technical Skills",
    tools: "Programming Languages, CAD, PCB Design, Prototyping",
    proficiency: "Intermediate"
  },
  {
    category: "Design & Creative Skills", 
    tools: "Graphic Design, UI/UX, Creative Writing",
    proficiency: "Intermediate"
  },
  {
    category: "Professional Skills",
    tools: "Office Suite, Technical Writing, Collaboration Tools",
    proficiency: "Advanced"
  }
],

  about: {
    description: `I am a BSc. Computer Engineering student at Ashesi University with a strong passion for visual design.

My work lies at the intersection of creativity, customization, and technology, where I focus on bringing clarity and impact to digital projects. In my space, technologies are constantly evolving, and I am eager to learn, adapt, and experiment.

From coursework to team projects, I've gained hands-on experience in both engineering principles and digital tools, sharpening my skills in turning complex ideas into accessible and engaging outputs.

Through my ongoing projects and exploration of new technologies, I am building not only technical competence but also a mindset of curiosity, problem-solving, and innovation that will continue to guide my journey as a designer and engineer.`,
    image: "/alejandro-big.jpg",
  },
};