/** Directed links between stack skills; expanded to two-way for hover highlights. */
const SKILL_LINKS: Record<string, string[]> = {
  "LLM Integration": ["OpenAI API", "LangChain", "RAG", "Agentic Workflows"],
  LangChain: ["OpenAI API", "RAG", "Agentic Workflows", "Vector Databases"],
  "OpenAI API": ["LLM Integration", "Prompt Engineering", "RAG", "Voice AI"],
  "Agentic Workflows": ["LangChain", "n8n", "Celery", "LLM Integration"],
  RAG: ["Vector Databases", "LangChain", "OpenAI API", "Prompt Engineering"],
  "Vector Databases": ["RAG", "PostgreSQL", "MongoDB", "NoSQL", "LangChain"],
  "Prompt Engineering": ["OpenAI API", "LLM Integration", "RAG"],
  "Computer Vision": ["Deep Learning Fundamentals", "Python", "Scikit-Learn"],
  NumPy: ["Pandas", "Scikit-Learn", "Python", "Matplotlib"],
  Pandas: ["NumPy", "Scikit-Learn", "Python"],
  "Scikit-Learn": ["NumPy", "Pandas", "Python", "Computer Vision"],
  Matplotlib: ["NumPy", "Pandas"],
  "Deep Learning Fundamentals": ["Computer Vision", "Python", "Scikit-Learn"],

  Python: ["FastAPI", "NumPy", "Pandas", "Scikit-Learn", "Celery"],
  JavaScript: ["TypeScript", "Node.js", "React"],
  TypeScript: ["Next.js", "React", "Node.js", "JavaScript"],
  "Next.js": ["React", "Vercel", "Tailwind CSS", "TypeScript"],
  React: ["Next.js", "Redux Toolkit", "Tailwind CSS", "TypeScript"],
  "React Native": ["React", "JavaScript", "Node.js"],
  "Node.js": ["REST APIs", "MongoDB", "JavaScript", "React Native"],
  FastAPI: ["Python", "REST APIs", "PostgreSQL", "JWT Auth"],
  "Tailwind CSS": ["Next.js", "React"],
  "Redux Toolkit": ["React", "Next.js"],

  n8n: ["Workflow Automation", "Agentic Workflows", "Celery"],
  "Workflow Automation": ["n8n", "Celery", "Redis", "Voice AI"],
  "Voice AI": ["OpenAI API", "Workflow Automation", "Agentic Workflows"],
  Celery: ["Redis", "Python", "Workflow Automation", "n8n"],
  Redis: ["Celery", "Workflow Automation", "PostgreSQL"],

  PostgreSQL: ["SQL", "FastAPI", "REST APIs", "Redis"],
  MongoDB: ["NoSQL", "Node.js", "Vector Databases"],
  SQL: ["PostgreSQL"],
  NoSQL: ["MongoDB", "Vector Databases"],

  AWS: ["CI/CD basics", "Vercel"],
  Vercel: ["Next.js", "CI/CD basics", "AWS"],
  Git: ["GitHub", "GitFlow", "CI/CD basics"],
  GitHub: ["Git", "GitFlow"],
  GitFlow: ["Git", "GitHub", "CI/CD basics"],
  "REST APIs": ["FastAPI", "Node.js", "JWT Auth", "PostgreSQL"],
  "JWT Auth": ["REST APIs", "FastAPI"],
  "CI/CD basics": ["Git", "GitHub", "Vercel", "AWS"],

  WordPress: ["Shopify", "Tailwind CSS"],
  Shopify: ["WordPress", "React"],
};

const symmetric = new Map<string, Set<string>>();

for (const [from, targets] of Object.entries(SKILL_LINKS)) {
  if (!symmetric.has(from)) symmetric.set(from, new Set());
  for (const to of targets) {
    symmetric.get(from)!.add(to);
    if (!symmetric.has(to)) symmetric.set(to, new Set());
    symmetric.get(to)!.add(from);
  }
}

export function getLinkedSkills(skill: string): string[] {
  const links = symmetric.get(skill);
  if (!links) return [];
  return [...links].sort((a, b) => a.localeCompare(b));
}
