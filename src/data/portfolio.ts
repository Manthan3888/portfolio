export const profile = {
  name: "Manthan Rajani",
  shortName: "Manthan",
  initials: "MR",
  role: "AI Full Stack Engineer",
  tagline: "I build AI automation, agentic systems & full-stack products that survive launch.",
  location: "Surat, Gujarat, India",
  phone: "+91 78619 18770",
  email: "manthanrajani.work@gmail.com",
  linkedin: "https://www.linkedin.com/in/manthan-rajani",
  github: "https://github.com/manthanrajani",
  calendly: "https://calendly.com/manthanrajani-work/30min",
  available: "Available for freelance & full-time roles",
  summary:
    "AI Full Stack Engineer with hands-on experience designing and shipping production AI-powered web applications end-to-end — from LLM-backed backend services to responsive React/Next.js frontends. Skilled in building agentic workflows, RAG pipelines, and predictive ML models, and turning them into scalable full-stack products used in production.",
  summary2:
    "Delivered measurable business impact including 20+ hours reclaimed weekly per client, an 80% cut in manual order processing, and a 24/7 voice AI system handling 1,000+ monthly queries with zero human touchpoints.",
};

export const roles = [
  "AI Full Stack Engineer",
  "Agentic AI & Workflow Builder",
  "LLM · RAG · FastAPI",
  "Next.js / React Craftsman",
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
  { label: "Calendly", href: profile.calendly, icon: "calendar" },
];

export const marqueeTech = [
  "Python",
  "TypeScript",
  "Next.js",
  "React",
  "React Native",
  "FastAPI",
  "Node.js",
  "LangChain",
  "OpenAI API",
  "RAG",
  "Agentic Workflows",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Celery",
  "n8n",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Redux Toolkit",
  "Vector Databases",
  "Computer Vision",
];

export const stats = [
  { value: 20, suffix: "+", prefix: "", label: "Hours reclaimed weekly per client", sub: "through AI automation" },
  { value: 80, suffix: "%", prefix: "", label: "Cut in manual order processing", sub: "AI-driven workflows" },
  { value: 1000, suffix: "+", prefix: "", label: "Monthly voice-AI queries", sub: "handled autonomously" },
  { value: 24, suffix: "/7", prefix: "", label: "Voice AI system uptime", sub: "zero human touchpoints" },
];

export type SkillCategory = {
  title: string;
  icon: string;
  blurb: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "AI / ML & Generative AI",
    icon: "brain",
    blurb: "Production-grade LLM features, agents and predictive models.",
    skills: [
      "LLM Integration",
      "LangChain",
      "OpenAI API",
      "Agentic Workflows",
      "RAG",
      "Vector Databases",
      "Prompt Engineering",
      "Computer Vision",
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "Matplotlib",
      "Deep Learning Fundamentals",
    ],
  },
  {
    title: "Full-Stack Development",
    icon: "stack",
    blurb: "End-to-end web apps with SSR, APIs and polished UIs.",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "React",
      "React Native",
      "Node.js",
      "FastAPI",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
  },
  {
    title: "Automation & Workflow",
    icon: "bolt",
    blurb: "Self-running systems that take repetitive work off teams.",
    skills: ["n8n", "Workflow Automation", "Voice AI", "Celery", "Redis"],
  },
  {
    title: "Databases",
    icon: "database",
    blurb: "Relational, document and vector storage, modeled right.",
    skills: ["PostgreSQL", "MongoDB", "SQL", "NoSQL", "Vector Databases"],
  },
  {
    title: "Cloud, DevOps & Tools",
    icon: "cloud",
    blurb: "Shipped, monitored and optimized on modern cloud infra.",
    skills: ["AWS", "Vercel", "Git", "GitHub", "GitFlow", "REST APIs", "JWT Auth", "CI/CD basics"],
  },
  {
    title: "CMS / E-commerce",
    icon: "cart",
    blurb: "Storefronts, checkout flows and content platforms.",
    skills: ["WordPress", "Shopify"],
  },
];

export type Service = {
  index: string;
  title: string;
  description: string;
  icon: string;
  subject: string;
  points: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "AI Automation & Agents",
    description:
      "Agentic workflows, n8n automations and voice AI that eliminate repetitive manual work around the clock.",
    icon: "robot",
    subject: "AI Automation",
    points: ["Agentic workflows", "n8n / Celery pipelines", "24/7 voice AI"],
  },
  {
    index: "02",
    title: "LLM & RAG Integration",
    description:
      "Chat with your documents, retrieve grounded answers and wire LLMs into real products with LangChain & vector DBs.",
    icon: "chat",
    subject: "LLM / RAG Integration",
    points: ["RAG pipelines", "LangChain + OpenAI", "Vector search"],
  },
  {
    index: "03",
    title: "Full-Stack Web Development",
    description:
      "Production-ready Next.js, React, Node.js and FastAPI apps — SSR, REST APIs, auth and dynamic UI included.",
    icon: "browser",
    subject: "Full-Stack Development",
    points: ["Next.js / React", "FastAPI / Node", "PostgreSQL / MongoDB"],
  },
  {
    index: "04",
    title: "Predictive ML & Data",
    description:
      "Complete ML pipelines — cleaning, feature engineering, training and hyperparameter tuning on real datasets.",
    icon: "chart",
    subject: "Machine Learning",
    points: ["Scikit-Learn", "NumPy / Pandas", "Computer Vision"],
  },
  {
    index: "05",
    title: "Mobile App Development",
    description:
      "React Native apps for both sides of a marketplace — customer and provider — with payments and real-time chat.",
    icon: "phone",
    subject: "Mobile App Development",
    points: ["React Native", "Real-time messaging", "Payments & RBAC"],
  },
  {
    index: "06",
    title: "Cloud, DevOps & APIs",
    description:
      "Deploy to AWS and Vercel, optimize Core Web Vitals, and design secure, well-documented REST APIs with JWT.",
    icon: "cloud",
    subject: "Cloud & DevOps",
    points: ["AWS / Vercel", "CI/CD basics", "JWT-secured APIs"],
  },
];

export type Project = {
  index: string;
  name: string;
  tagline: string;
  category: string;
  icon: string;
  accent: string;
  bullets: string[];
  tech: string[];
  visual: "corofy" | "rpm" | "allrange" | "senior";
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Corofy",
    tagline: "B2B Go-To-Market & Sales Automation Platform",
    category: "B2B Sales Intelligence",
    icon: "rocket",
    accent: "#ff6a2b",
    bullets: [
      "Built a B2B GTM platform for a Dubai-based chemical supplier automating outbound sales from lead discovery to cold-email campaigns and analytics.",
      "Implemented AI-driven lead scoring, buyer-persona generation and prospect discovery via Apollo, with personalized campaign delivery through SmartLead.",
      "Architected an async Python/FastAPI backend (PostgreSQL, Celery, Redis) with LLM integrations, paired with a Next.js/React/TypeScript frontend using Tailwind CSS, SWR and Recharts.",
    ],
    tech: ["Python", "FastAPI", "Next.js", "React", "TypeScript", "Celery", "Redis", "PostgreSQL", "LLM APIs", "Apollo", "SmartLead"],
    visual: "corofy",
  },
  {
    index: "02",
    name: "RPM PDF Extract",
    tagline: "Intelligent Document Extraction Platform",
    category: "AI Document Processing",
    icon: "doc",
    accent: "#39e0ff",
    bullets: [
      "Full-stack platform extracting structured data — policy details, premiums, classification tables, exclusions, officer info — from complex workers' compensation insurance PDFs.",
      "Delivered accurate structured extraction with PyMuPDF, the OpenAI API and Pydantic schemas, cutting manual insurance data-entry time significantly.",
      "Built an interactive Next.js/React PDF viewer with field-level highlights for auditability, backed by a secure FastAPI + JWT authentication layer.",
    ],
    tech: ["React", "Next.js", "Python", "FastAPI", "OpenAI API", "PyMuPDF", "PDF.js", "Pydantic", "JWT Auth"],
    visual: "rpm",
  },
  {
    index: "03",
    name: "AllrangeKit",
    tagline: "Healthcare E-commerce Platform",
    category: "Healthcare E-commerce",
    icon: "heart",
    accent: "#35f0a8",
    bullets: [
      "Developed the frontend for a healthcare e-commerce platform enabling purchase, registration and management of at-home diagnostic test kits (STI, UTI, HPV and more).",
      "Implemented product catalogs, Stripe checkout, authentication, QR-based kit registration and a results dashboard using Next.js, TypeScript and Redux Toolkit.",
      "Delivered HIPAA/privacy-aligned pages, telehealth request flows, SEO optimization and automated testing with Vitest.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Stripe", "Vitest"],
    visual: "allrange",
  },
  {
    index: "04",
    name: "SeniorAmerica",
    tagline: "Senior Care Marketplace (Mobile)",
    category: "React Native Marketplace",
    icon: "mobile",
    accent: "#c792ff",
    bullets: [
      "Built two React Native apps connecting families with verified in-home care providers — a client app for browsing/booking/paying and a provider app for managing jobs and earnings.",
      "Developed a Node.js REST API with real-time messaging, payments and role-based authentication powering both apps.",
    ],
    tech: ["React Native", "Node.js", "Express", "MongoDB", "Mongoose", "Real-time Comms", "Payments", "RBAC"],
    visual: "senior",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  mode: string;
  current?: boolean;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Staycold Solution",
    period: "Jan 2026 – Present",
    location: "Surat, Gujarat, India",
    mode: "Onsite",
    current: true,
    bullets: [
      "Build and ship production-ready web applications with Next.js, React and Node.js, using server-side rendering, API routes and dynamic UI components.",
      "Design responsive front-end interfaces with Tailwind CSS and build RESTful APIs backed by PostgreSQL and MongoDB.",
      "Deploy and maintain applications on Vercel and AWS; optimized for Core Web Vitals and SEO across the full development lifecycle.",
    ],
  },
  {
    role: "AI/ML & Python Developer",
    company: "Kenstin Technologies",
    period: "Dec 2025 – Jun 2026",
    location: "Surat, Gujarat, India",
    mode: "Remote",
    bullets: [
      "Engineered Python scripts and built predictive ML models with NumPy, Pandas and Scikit-Learn on real-world production datasets.",
      "Owned the full ML pipeline end-to-end — data cleaning, feature engineering, model training, hyperparameter tuning and evaluation.",
      "Designed and deployed agentic AI workflows and automation solutions that eliminated repetitive manual work, reclaiming 20+ hours per week for client teams.",
      "Partnered with senior developers on REST API integration and data analysis to support downstream ML and reporting needs.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "GLS University",
    period: "2024 – 2026",
    field: "Computer & Information Sciences",
    grade: "Grade: O",
  },
  {
    degree: "Bachelor's Degree",
    school: "Veer Narmad South Gujarat University",
    period: "Jul 2021 – Jul 2024",
    field: "Computer & Information Sciences",
    grade: "Grade: B",
  },
];

export const certifications = [
  { title: "Full Stack Development", issuer: "Creative Design & Multimedia Institute", date: "Dec 2021" },
  { title: "Version Control System (Git)", issuer: "VNSGU, Surat", date: "Sep 2022" },
  { title: "Career Advancement Skills", issuer: "VNSGU, Surat", date: "Mar 2023" },
];

export const achievements = [
  "Reclaimed 20+ hours per week for clients through intelligent AI automation systems.",
  "Reduced manual order processing by 80% using AI-driven workflow solutions.",
  "Built a 24/7 Voice AI system with zero human touchpoints, handling 1,000+ monthly queries.",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
