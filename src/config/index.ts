import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Shifa Amankwa-Gabbey - Official Portfolio",
  author: "Shifa Amankwa-Gabbey",
  description:
    "I'm a Computer Engineering student with a passion for visual design, where I combine creativity, customization, and technology to bring clarity and impact to digital projects.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "profile", href: "/#profile" },
    { text: "experience", href: "/#experience" },
    { text: "projects", href: "/#projects" },
    { text: "skills", href: "/#skills" },
    { text: "beyond engineering", href: "/#beyond-engineering" },
    { text: "let's connect!", href: "/#connect" }
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/shifaamankwa-gabbey/" },
    { text: "Github", href: "https://github.com/shiiifa" },
    { text: "Email", href: "mailto:shifa.gabbey@ashesi.edu.gh" },
  ],
  socialImage: "/thumbnail.png",
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
      name: "Behaviour-Aware Access Controller",
      summary: "An intelligent, standalone RFID access control system that uses a Finite State Machine (FSM) to detect and block behavioral anomalies in real-time without relying on external servers.",
      linkPreview: "/projects/behaviour-aware-access-controller",
      linkSource: "https://github.com/shiiifa/Behaviour-Aware-Access-Controller",
      image: "/behavior-aware-access.png",
    },
    {
      name: "ARCLab Research Project: EMG-Based Prosthetic Control",
      summary: "Contributing to an award-winning prosthetic arm project under the Automation, Robotics and Controls Lab, Ashesi.",
      linkPreview: "/projects/arclab-research-project",
      image: "/arclab.png",
    },
    {
      name: "Ashesi Multipurpose Reservation System",
      summary: "A centralised platform streamlining student access to campus resources with secure login validation.",
      linkPreview: "/projects/ashesi-multipurpose-reservation-system",
      linkSource: "https://github.com/shiiifa/Multipurpose-Reservation-Platform",
      image: "/multipurpose-reservation-platform.png",
    },
    {
      name: "Cyber Threat Dynamics in VANETs",
      summary: "A mathematical modeling of malware spread in vehicular networks using SEIR-S framework and wireless analysis.",
      linkPreview: "/projects/cyber-threat-dynamics-in-vanets",
      linkSource: "https://github.com/shiiifa/MalwareSimulation",
      image: "/vanets.png",
    },
    {
      name: "Ashesi Student Information System",
      summary: "A propositional logic-based CAMU-inspired prototype for automated course enrollment decisions.",
      linkPreview: "/projects/ashesi-student-information-system",
      linkSource: "https://github.com/shiiifa?tab=repositories",
      image: "/asis.jpg",
    },
    {
      name: "LED-Based Countdown Timer",
      summary: "An Arduino UNO-powered countdown timer with 7-segment LED displays, buzzer, and potentiometer control.",
      linkPreview: "/projects/arduino-buzzer-timer",
      linkSource: "https://lnkd.in/dcDTycNE",
      image: "/the-circuit.png",
    },
    {
      name: "ShellTrivia",
      summary: "GUI-based trivia game with multiple levels, categories, and interactive scoring system.",
      linkPreview: "/projects/shelltrivia",
      linkSource: "https://github.com/shiiifa/ShellTrivia",
      image: "/shell.png",
    },
    {
      name: "Water Release Dynamics of Agricultural Hydrogels",
      summary: "A statistical study of hydrogel-based water release in agriculture.",
      linkPreview: "/projects/hydrogel-soil-analysis",
      linkSource: "#",
      image: "/hydrogel-analysis.png",
    },
    {
      name: "Heart Rate Monitor Using Active Bandpass Filtering",
      summary: "A non-invasive optical heart rate monitor based on Photoplethysmography (PPG) that detects blood volume changes, conditions analog signals with active bandpass filtering, and displays real-time BPM readings on an LCD screen.",
      linkPreview: "/projects/heart-rate-monitor",
      linkSource: "#",
      image: "/heartbeat.png",
    },
  ],

  freelanceProjects: [
    {
      name: "E-commerce Website Design",
      summary: "Custom Shopify theme development and branding for a local retail business, featuring responsive design and integrated payment systems.",
      image: "/shopify-clon.png",
      linkPreview: "#",
      linkSource: "#",
      status: "Coming Soon"
    },
    {
      name: "Portfolio Website Development", 
      summary: "Modern, responsive portfolio website built with Astro and Tailwind CSS, featuring custom animations and optimized performance.",
      image: "/clone-ig.png",
      linkPreview: "#",
      linkSource: "#",
      status: "Coming Soon"
    },
    {
      name: "Mobile App UI/UX Design",
      summary: "Complete UI/UX design for a fitness tracking mobile application, including wireframes, prototypes, and design system.",
      image: "/spotifu.png", 
      linkPreview: "#",
      linkSource: "#",
      status: "Coming Soon"
    }
  ],

  skills: [
    {
      category: "Technical Skills",
      tools: "Programming Languages: Python, Java, HTML, MATLAB, C\nData Analysis & Visualization: Excel, MATLAB\nComputer-Aided Design (CAD) Software: SolidWorks, Proteus, Autodesk Fusion 360, KiCad\nPrototyping & Hardware: 3D Printing, Arduino (UNO)",
      proficiency: "Intermediate"
    },
    {
      category: "Design & Creative Skills", 
      tools: "Graphic Design & Video Editing: Canva, CapCut\nUI/UX & Web Tools: Wix, Wordpress, Vercel, Canva\nCreative Writing: Freelance writing, Content Development",
      proficiency: "Intermediate"
    },
    {
      category: "Professional & Collaboration Skills",
      tools: "Microsoft Office Suite: Word, Excel, PowerPoint\nTechnical Writing & Documentation\nCollaboration Tools: Slack, Notion, Microsoft Teams, Google Workspace",
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