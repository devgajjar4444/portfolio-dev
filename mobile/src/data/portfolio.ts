export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  current?: boolean;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
  url?: string;
  platformUrls?: { label: string; url: string }[];
  featured?: boolean;
  current?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const personal = {
  name: "Dev Gajjar",
  title: "Full Stack Software Engineer",
  headline: "Building Scalable, Secure & High-Performance Products",
  bio: "Full Stack Software Engineer with 5+ years of experience delivering end-to-end solutions across web, mobile, and backend systems. I specialize in Node.js, NestJS, Next.js, React, React Native, and Go — with a strong focus on security, scalability, performance, and clean architecture.",
  email: "devgajjar0132@gmail.com",
  phone: "9974440132",
  linkedin: "https://www.linkedin.com/in/dev-gajjar",
  location: "Ahmedabad, India",
  yearsOfExperience: "5+",
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "NestJS", "Go", "Express.js", "REST APIs", "Microservices"],
  },
  {
    category: "Databases & Caching",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    category: "Mobile & Cross-Platform",
    skills: ["React Native", "Flutter", "PWA"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "AWS", "Git/GitHub", "CI/CD", "Bazel"],
  },
  {
    category: "Architecture & Practices",
    skills: ["System Design", "API Integration", "Performance Optimization", "Security", "Agile/Scrum"],
  },
];

export const experience: Experience[] = [
  {
    company: "Technource",
    role: "Software Engineer",
    location: "Ahmedabad, India",
    period: "Jan 2026 – Present",
    current: true,
    description:
      "Contributing to both dedicated and fixed-cost projects with a focus on security, scalability, and performance for international clients.",
    highlights: [
      "Building WeAll from scratch for a Germany-based client — a global social & communication platform",
      "Redesigning and implementing new functionalities on Sevenly, an already live platform",
      "Managing and optimizing data flow using Redis across third-party API integrations",
      "Delivering modern, futuristic UX inspired by leading social and communication platforms",
    ],
  },
  {
    company: "Intelivita",
    role: "Full-Stack Software Engineer",
    location: "Remote",
    period: "Sep 2025 – Dec 2025",
    description:
      "Built scalable end-to-end solutions across frontend and backend using Node.js, Next.js, and React.",
    highlights: [
      "Delivered full-stack features across multiple client projects",
      "Worked on production-grade applications with modern React and Next.js stacks",
      "Collaborated with cross-functional teams on architecture and delivery",
    ],
  },
  {
    company: "InheritX",
    role: "Software Engineer",
    location: "Ahmedabad, India",
    period: "Mar 2023 – Aug 2025",
    description:
      "Led backend components of multiple projects, handled architecture decisions, and collaborated with cross-functional teams.",
    highlights: [
      "Led backend architecture for large-scale platforms (FlikForge, EPC, HOCO, and more)",
      "Served as POC on multiple client projects with daily stakeholder communication",
      "Managed teams of up to 4 developers and coordinated cross-stack delivery",
      "Integrated third-party APIs, AI services, and payment systems",
    ],
  },
  {
    company: "Double Dotts",
    role: "Backend Developer",
    location: "Ahmedabad, India",
    period: "Oct 2022 – Mar 2023",
    description:
      "Developed REST APIs, integrated third-party services, and contributed to backend system improvements.",
    highlights: [
      "Built and maintained RESTful APIs for production applications",
      "Integrated third-party services and improved backend reliability",
      "Contributed to system design and code quality improvements",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "weall",
    name: "WeAll",
    tagline: "Global social & communication platform connecting people worldwide",
    description:
      "WeAll is a web and mobile platform designed to help people connect with others around the world. Users can discover and connect with nearby people as well as users worldwide based on their interests and criteria through a points-based system. Built from scratch for a Germany-based client with security, scalability, and performance as core priorities.",
    responsibilities: [
      "Building the platform from scratch with a Germany-based client",
      "Architecting for security, scalability, and high performance",
      "Implementing features inspired by modern social and communication platforms",
      "Managing data flow and caching strategies using Redis",
      "Integrating and optimizing multiple third-party APIs",
    ],
    techStack: ["Node.js", "React Native", "Next.js", "Redis", "PostgreSQL", "REST APIs"],
    current: true,
    featured: true,
  },
  {
    id: "sevenly",
    name: "Sevenly",
    tagline: "Live platform redesign with new functionalities and modern UX",
    description:
      "Sevenly is an already live platform where I am working on redesigning the application and implementing new functionalities. The work focuses on delivering a modern, futuristic user experience while maintaining stability of the production system.",
    responsibilities: [
      "Redesigning the application UI/UX for a modern experience",
      "Implementing new functionalities on a live production platform",
      "Optimizing data flow using Redis for third-party API integrations",
      "Contributing to performance improvements and scalable architecture",
    ],
    techStack: ["Node.js", "React", "Redis", "REST APIs", "PostgreSQL"],
    current: true,
    featured: true,
  },
  {
    id: "epc",
    name: "Elite Pickleball Coaching",
    tagline: "Comprehensive athlete training platform with real-time coach-athlete interactions",
    description:
      "EPC is a web and mobile platform for athletes wanting to train professionally with certified coaches. Features separate applications for coaches and athletes, plus admin panel. Enables real-time interactions with workout assignments and video reviews.",
    responsibilities: [
      "Full-stack development for large-scale platform with multi-user roles",
      "Served as Point of Contact (POC) with daily client interactions",
      "Implemented quality assurance and bug resolution",
      "Managed live production environment with real user base",
    ],
    techStack: ["Next.js", "MySQL", "React Native"],
    url: "https://elitepickleballcoaching.com/",
    platformUrls: [
      { label: "Admin", url: "https://admin.elitepickleballcoaching.com/" },
      { label: "Athlete", url: "https://athlete.elitepickleballcoaching.com/" },
      { label: "Coach", url: "https://coach.elitepickleballcoaching.com/" },
    ],
    featured: true,
  },
  {
    id: "flikforge",
    name: "FlikForge",
    tagline: "AI platform for training custom LLMs with intuitive interfaces",
    description:
      "FlikForge enables users to train custom LLMs and generate AI-powered content such as images and videos. Users can monetize their creations by selling AI-generated content or sharing trained LLMs with others.",
    responsibilities: [
      "Led backend architecture and API development using NestJS",
      "Integrated third-party AI services for model training and inference",
      "Collaborated with Python team on LLM training workflows",
      "Led a team of four developers with daily client calls",
    ],
    techStack: ["NestJS", "Python", "Next.js"],
    url: "https://flikforge.com/",
    featured: true,
  },
  {
    id: "acadenutri",
    name: "Acadenutri",
    tagline: "Health platform connecting users with nutritionists and gym trainers",
    description:
      "Acadenutri is a comprehensive health platform with mobile and web apps supporting four user types: Admin, General Users, Nutritionists, and Gym Trainers. Trainers and Nutritionists subscribe and earn commission on user payments.",
    responsibilities: [
      "Developed backend services using Node.js",
      "Managed communication with client for task requirements",
      "Coordinated development efforts across in-house and freelance teams",
      "Distributed tasks and maintained project timelines",
    ],
    techStack: ["Node.js", "Flutter", "React.js"],
    url: "https://acadenutri.com.br/home",
  },
  {
    id: "unify",
    name: "Unify",
    tagline: "Cab booking platform enabling ride reservations across London",
    description:
      "Full-stack cab booking system with separate mobile applications for users and drivers, plus comprehensive admin panel for management and verification. Built with modern tech stack for scalability.",
    responsibilities: [
      "Full stack development from frontend to backend",
      "Ensured successful, client-focused outcomes",
      "Implemented user and driver applications with admin management",
    ],
    techStack: ["Node.js", "Next.js", "MySQL"],
    url: "https://admin-dev.unifylondon.com/admin/login",
  },
  {
    id: "hoco",
    name: "HOCO",
    tagline: "Room and roommate-matching platform with in-app chat",
    description:
      "A mobile and web platform designed to simplify room and roommate discovery. Users can browse detailed room listings, match with compatible roommates, and communicate through an in-app chat system with safety features.",
    responsibilities: [
      "Developed core backend APIs in Node.js for listings, matching, chat, and auth",
      "Implemented frontend modules in React.js for search, filters, and dashboards",
      "Collaborated with Flutter team for mobile-backend integration",
      "Designed scalable data structures for matching logic and notifications",
    ],
    techStack: ["Node.js", "React.js", "Flutter", "MongoDB"],
    url: "https://www.inheritx.com/portfolio/home-coming-app",
  },
  {
    id: "underwriter",
    name: "Underwriter",
    tagline: "AI-powered stock research platform for iOS and Android",
    description:
      "A smart stock research application offering AI-driven insights, company comparisons, curated news, and an intelligent chatbot trained to simplify financial data.",
    responsibilities: [
      "Developed and maintained core backend services using Node.js",
      "Coordinated with Flutter and Python teams for AI chatbot integration",
      "Implemented APIs for stock data, insights, and user interactions",
      "Collaborated with client directly for requirements and delivery",
    ],
    techStack: ["Node.js", "Flutter", "Python", "MongoDB"],
    url: "https://www.iamunderwriter.com/download-the-app",
  },
  {
    id: "moneda",
    name: "Moneda",
    tagline: "Banking and financial services platform using Go monorepo",
    description:
      "A modular Go monorepo powering multiple financial services using Bazel. Worked closely with Ozone banking team to integrate secure financial workflows and banking compliance APIs.",
    responsibilities: [
      "Developed backend services in Go using gin and Gazelle tooling",
      "Collaborated with Ozone for API integration and workflow alignment",
      "Implemented and maintained core banking microservices",
      "Ensured compliance with banking processes and financial API requirements",
    ],
    techStack: ["Go", "gin", "PostgreSQL", "REST APIs", "Ozone API"],
    url: "https://www.moneda.com/",
  },
  {
    id: "olph",
    name: "Our Little Play Home",
    tagline: "Multi-language PWA for children's learning experiences",
    description:
      "An interactive EdTech platform featuring creative learning activities, printable resources, toy donation systems, and child-profile management with a powerful admin panel.",
    responsibilities: [
      "Served as key contributor and POC for this project",
      "Built Node.js APIs for auth, subscriptions, child profiles, and learning modules",
      "Integrated multi-language support and PWA capabilities",
      "Implemented admin features for content management and user tracking",
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript", "PWA"],
    url: "https://www.inheritx.com/portfolio/our-little-play-home",
  },
  {
    id: "tourwit",
    name: "Travel & Culture Experience Platform",
    tagline: "Travel marketplace with trip planning, community, and artisan shopping",
    description:
      "A complete TravelTech platform for customized travel packages, cultural blogs, community discussions, and handcrafted products from local artisans with real-time pricing and secure payments.",
    responsibilities: [
      "Developed backend and frontend modules using Next.js and Node.js",
      "Implemented real-time trip estimation, cart purchase, and order tracking",
      "Integrated secure payment systems and role-based access control",
      "Enhanced performance and UX across shopping and travel planning features",
    ],
    techStack: ["Next.js", "Node.js", "Tailwind CSS", "PWA"],
    url: "https://www.tourwit.in/home",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
