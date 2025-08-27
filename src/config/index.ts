import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Shifa Amankwa-Gabbey - Official Portfolio",
  author: "Shifa Amankwa-Gabbey",
  description:
    "I'm a Computer Engineering student with a passion for visual design, where I combine creativity, customization, and technology to bring clarity and impact to digital projects.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "profile", href: "#profile" }, // CHANGED TO LOWERCASE
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
    {
      company: "Bankit",
      position: "Mobile Developer",
      startDate: "Feb 2017",
      endDate: "May 2018",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Driveer",
      position: "Frontend Developer",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
  
  projects: [
    {
      name: "Ashesi Multipurpose Reservation System",
      summary: "Centralized platform streamlining student access to campus resources with secure login validation.",
      linkPreview: "/",
      linkSource: "https://github.com/shiiifa/Multipurpose-Reservation-Platform",
      image: "/spotifu.png",
    },
    {
      name: "Ashesi Student Information System",
      summary: "CAMU-inspired prototype with propositional logic for automated course enrollment decisions.",
      linkPreview: "/",
      linkSource: "https://github.com/shiiifa?tab=repositories",
      image: "/shopify-clon.png",
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
      image: "/clone-ig.png",
    },
  ],

  skills: [
    {
      category: "Graphic Design Software",
      tools: "Canva, CapCut",
      proficiency: "Skilled"
    },
    {
      category: "Programming Languages", 
      tools: "Python, Java, MATLAB, C-Programming",
      proficiency: "Intermediate proficiency"
    },
    {
      category: "Microsoft Office Suite",
      tools: "Word, Excel, PowerPoint",
      proficiency: "Skilled"
    },
    {
      category: "Computer-Aided Design Software",
      tools: "SolidWorks, Proteus, Autodesk Fusion 360, Kicad",
      proficiency: "Intermediate proficiency"
    }
  ],

  about: {
    description: `I am a BSc. Computer Engineering student at Ashesi University with a strong passion for visual design.

My work lies at the intersection of creativity, customization, and technology, where I focus on bringing clarity and impact to digital projects. In my space, technologies are constantly evolving, and I am eager to learn, adapt, and experiment.

From coursework to team projects, I've gained hands-on experience in both engineering principles and digital tools, sharpening my skills in turning complex ideas into accessible and engaging outputs.

Through my ongoing projects and exploration of new technologies, I am building not only technical competence but also a mindset of curiosity, problem-solving, and innovation that will continue to guide my journey as a designer and engineer.`, // CHANGED FORMATTING
    image: "/alejandro-big.jpg",
  },
};