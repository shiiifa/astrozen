import type { SiteConfig, SiteContent } from "../types";









export const SITE_CONFIG: SiteConfig = {
  title: "Shifa Amankwa-Gabbey - Official Portfolio",
  author: "Shifa Amankwa-Gabbey",
  description:
    "I’m a Computer Engineering student with a passion for visual design, where I combine creativity, customization, and technology to bring clarity and impact to digital projects.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
navLinks: [
  { text: "profile", href: "#profile" },
  { text: "experience", href: "#experience" },
  { text: "projects", href: "#projects" },
  { text: "skills", href: "#skills" },
  { text: "beyond engineering", href: "/beyond-engineering" },
  { text: "let's connect!", href: "#connect" }
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
    specialty: "Technology | Creativity",
    summary:
      "I’m a Computer Engineering student with a passion for visual design, where I combine creativity, customization, and technology to bring clarity and impact to digital projects.",
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
      summary: "Developed a centralised platform with a team of three to streamline student access to Ashesi’s resources. The system validated logins and organised reservations into Human-Based Services (e.g., Career Services, Peer Tutoring) and Remote Services (e.g., Housing, Classroom Booking). By redirecting users seamlessly to the right URLs, the platform simplified navigation, improved efficiency, and addressed a common challenge for students managing multiple resource portals.",
      linkPreview: "/",
      linkSource: "https://github.com/shiiifa/Multipurpose-Reservation-Platform",
      image: "/spotifu.png",
    },
    {
      name: "Ashesi Student Information System",
      summary: "Worked with a team of three to prototype a system modeled after Ashesi’s CAMU Student Information System. The project applied propositional logic from discrete mathematics to guide course enrollment decisions by validating user inputs, checking prerequisites, GPA, and grades, and automating decision-making. The system also featured robust error-handling for credentials, ensuring reliability and accuracy.",
      linkPreview: "/",
      linkSource: "https://github.com/shiiifa?tab=repositories",
      image: "/shopify-clon.png",
    },
    {
      name: "ShellTrivia",
      summary: "Developed a GUI-based trivia game with four levels, testing players on music, film, sports, current affairs, and general knowledge. The game awarded or deducted “shells” (points) based on correct or incorrect answers, allowed users to select categories, and featured a Leaderboard to track high scores. Built using Tkinter, the project applied concepts of iteration, persistence, and data structures while strengthening my skills in interactive application design.",
      linkPreview: "/",
      linkSource: "https://github.com/shiiifa/ShellTrivia",
      image: "/clone-ig.png",
    },

        {
      name: "Cyber Threat Dynamics in VANETs",
      summary: "Modeled malware spread in Vehicular Ad-Hoc Networks (VANETs) using an SEIR-S framework, analyzing key parameters and wireless modes (Wi-Fi, Bluetooth, Cellular). Findings highlighted vulnerabilities in connected cars like Tesla and pointed to strategies for stronger vehicular cybersecurity.",
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
    description: `
      I am a BSc. Computer Engineering student at Ashesi University with a strong passion for visual design. My work lies at the intersection of creativity, customization, and technology, where I focus on bringing clarity and impact to digital projects.

In my space, technologies are constantly evolving, and I am eager to learn, adapt, and experiment. From coursework to team projects, I’ve gained hands-on experience in both engineering principles and digital tools, sharpening my skills in turning complex ideas into accessible and engaging outputs.

Through my ongoing projects and exploration of new technologies, I am building not only technical competence but also a mindset of curiosity, problem-solving, and innovation that will continue to guide my journey as a designer and engineer.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
