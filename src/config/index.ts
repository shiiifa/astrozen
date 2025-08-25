import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Shifa Amankwa-Gabbey - Official Portfolio",
  author: "Shifa Amankwa-Gabbey",
  description:
    "I’m a Computer Engineering student with a passion for visual design, where I combine creativity, customization, and technology to bring clarity and impact to digital projects.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "experience", href: "#experience" },
    { text: "projects", href: "#projects" },
    { text: "profile", href: "#profile" },
    { text: "skills", href: "#skills" },
    { text: "beyond engineering", href: "#beyondengineering" },
    { text: "initiatives and service", href: "#initiativesandservice" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/shifaamankwa-gabbey/" },
    { text: "Github", href: "https://github.com/shiiifa" },
    { text: "Email", href: "shifa.gabbey@ashesi.edu.gh" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://shifagabbey.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Shifa Amankwa-Gabbey",
    specialty: "Mobile & Web Developer",
    summary:
      "I’m a Computer Engineering student with a passion for visual design, where I combine creativity, customization, and technology to bring clarity and impact to digital projects.",
    email: "shifa.gabbey@ashesi.edu.gh",
  },
  experience: [
    {
      company: "Zalmart",
      position: "Lead Android Developer",
      startDate: "May 2018",
      endDate: "Sept 2020",
      summary: [
        "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
        "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
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
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      I am a BSc. Computer Engineering student at Ashesi University with a strong passion for visual design. My work lies at the intersection of creativity, customization, and technology, where I focus on bringing clarity and impact to digital projects.

In my space, technologies are constantly evolving, and I am eager to learn, adapt, and experiment. From coursework to team projects, I’ve gained hands-on experience in both engineering principles and digital tools, sharpening my skills in turning complex ideas into accessible and engaging outputs.

Through my ongoing projects and exploration of new technologies, I am building not only technical competence but also a mindset of curiosity, problem-solving, and innovation that will continue to guide my journey as a designer and engineer.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
