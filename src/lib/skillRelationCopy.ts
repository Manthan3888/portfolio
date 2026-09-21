import { getLinkedSkills } from "@/lib/skillConnections";

/** How primary skill works with a related technology (both directions). */
const PAIR_HOW: Record<string, string> = {
  "LLM Integration|OpenAI API":
    "Routes production prompts, streaming, and tool calls through OpenAI models behind your app.",
  "LLM Integration|LangChain":
    "Orchestrates chains, tools, and memory so LLM features stay maintainable in code.",
  "LLM Integration|RAG":
    "Grounds answers in your data so LLM output is accurate for users and stakeholders.",
  "LLM Integration|Agentic Workflows":
    "Turns single-shot prompts into multi-step agents that complete tasks end to end.",

  "LangChain|Vector Databases":
    "Retrieves embeddings from vector stores to feed context into LangChain pipelines.",
  "LangChain|RAG": "Builds retrieval pipelines that combine search with generation.",
  "OpenAI API|Prompt Engineering":
    "Turns tuned prompts and evals into stable API payloads for production.",
  "OpenAI API|Voice AI": "Powers speech understanding and responses in voice products.",
  "Agentic Workflows|n8n": "Triggers and coordinates agent steps with visual automation flows.",
  "Agentic Workflows|Celery": "Runs long agent jobs asynchronously with queues and retries.",
  "RAG|Vector Databases": "Stores and queries embeddings that RAG uses for context retrieval.",
  "RAG|Prompt Engineering": "Shapes how retrieved context is injected into prompts safely.",
  "Vector Databases|PostgreSQL": "Often paired with pgvector or hybrid SQL + vector search.",
  "Vector Databases|MongoDB": "Document storage plus vector fields for flexible retrieval schemas.",
  "Vector Databases|NoSQL": "Non-relational stores that host embedding indexes alongside app data.",

  "Computer Vision|Deep Learning Fundamentals":
    "Uses neural nets for image classification, detection, and vision pipelines.",
  "Computer Vision|Python": "Training and inference scripts in Python ecosystems.",
  "Computer Vision|Scikit-Learn": "Classical ML baselines and preprocessing before deep models.",
  "NumPy|Pandas": "Array math feeds into tabular data prep for ML and analytics.",
  "NumPy|Matplotlib": "Visualizes numeric outputs and experiment metrics.",
  "Pandas|Scikit-Learn": "Cleaned DataFrames flow into training and evaluation.",
  "Scikit-Learn|Deep Learning Fundamentals":
    "Classical ML informs features and benchmarks before deep learning.",
  "Deep Learning Fundamentals|Python": "Models defined and trained in Python runtimes.",

  "Python|FastAPI": "Python backs high-performance APIs that frontends and agents call.",
  "Python|Celery": "Background workers for jobs, agents, and scheduled tasks.",
  "JavaScript|TypeScript": "Typed JS for safer shared logic across client and server.",
  "TypeScript|Next.js": "App Router, SSR, and API routes with full type safety.",
  "TypeScript|React": "Component props and hooks typed end to end.",
  "Next.js|React": "React UI with SSR, routing, and optimized delivery.",
  "Next.js|Vercel": "Deploy previews and production with zero-config hosting.",
  "Next.js|Tailwind CSS": "Utility-first styling for fast, consistent UI shipping.",
  "React|Redux Toolkit": "Predictable global state for complex client apps.",
  "React Native|React": "Shared patterns and components across web and mobile.",
  "React Native|Node.js": "JS tooling and APIs supporting mobile backends.",
  "Node.js|REST APIs": "Express-style services and BFF layers in JavaScript.",
  "Node.js|MongoDB": "Document APIs with Mongoose or native drivers.",
  "FastAPI|REST APIs": "OpenAPI-first Python APIs with validation built in.",
  "FastAPI|PostgreSQL": "Async SQLAlchemy or raw SQL for transactional data.",
  "FastAPI|JWT Auth": "Secures routes with token validation middleware.",

  "n8n|Workflow Automation": "Visual nodes replace manual ops and glue services together.",
  "Workflow Automation|Redis": "Queues and pub/sub for reliable automation triggers.",
  "Workflow Automation|Voice AI": "Connects telephony and LLM steps in call flows.",
  "Voice AI|OpenAI API": "Speech-to-text and LLM reasoning in voice assistants.",
  "Celery|Redis": "Broker and result backend for distributed task workers.",
  "Redis|PostgreSQL": "Cache hot reads while Postgres remains source of truth.",

  "PostgreSQL|SQL": "Relational modeling, migrations, and complex queries.",
  "MongoDB|NoSQL": "Flexible schemas for rapid product iteration.",
  "MongoDB|Node.js": "Common MERN-style document API stacks.",

  "AWS|CI/CD basics": "Build and release pipelines on cloud infrastructure.",
  "Vercel|CI/CD basics": "Git-driven deploys on every push to main.",
  "Git|GitHub": "Remote hosting, PRs, and collaboration on the same repo.",
  "Git|GitFlow": "Branching model for releases and hotfixes.",
  "GitHub|GitFlow": "PR-based flow aligned with GitFlow conventions.",
  "GitFlow|CI/CD basics": "Release branches trigger staged production deploys.",
  "REST APIs|JWT Auth": "Stateless auth for mobile and SPA clients.",
  "REST APIs|PostgreSQL": "CRUD and reporting backed by relational data.",

  "WordPress|Shopify": "Content site plus storefront when clients need both.",
  "WordPress|Tailwind CSS": "Custom themes with modern utility styling.",
  "Shopify|React": "Headless storefronts and custom checkout experiences.",
};

const SKILL_INTRO: Partial<Record<string, string>> = {
  "LLM Integration":
    "Production LLM features—models, tools, and guardrails users actually touch.",
  LangChain: "Composable AI pipelines: chains, tools, agents, and retrieval.",
  "OpenAI API": "Hosted models for chat, tools, embeddings, and voice.",
  "Agentic Workflows": "Multi-step AI that plans, calls tools, and finishes tasks.",
  RAG: "Retrieve your docs, then generate answers grounded in that context.",
  "Vector Databases": "Embedding search for semantic retrieval at scale.",
  "Prompt Engineering": "Prompts, evals, and iteration that hold up in prod.",
  Python: "Backend, ML, automation, and glue across the stack.",
  "Next.js": "SSR/SSG React apps with API routes and fast deploys.",
  FastAPI: "Async Python APIs with validation and OpenAPI docs.",
  n8n: "Low-code automation connecting APIs, webhooks, and AI steps.",
  PostgreSQL: "Primary relational store for transactional app data.",
};

function pairKey(a: string, b: string): string {
  return `${a}|${b}`;
}

export function describeSkillPair(primary: string, related: string): string {
  return (
    PAIR_HOW[pairKey(primary, related)] ??
    PAIR_HOW[pairKey(related, primary)] ??
    `Works with ${related} in shipped projects—APIs, data, and UI wired together in one pipeline.`
  );
}

export type SkillPopoverContent = {
  skill: string;
  intro: string;
  relations: { tech: string; how: string }[];
};

export function getSkillPopoverContent(skill: string): SkillPopoverContent {
  const related = getLinkedSkills(skill);
  return {
    skill,
    intro:
      SKILL_INTRO[skill] ??
      `How ${skill} connects to the rest of the stack in real builds.`,
    relations: related.map((tech) => ({
      tech,
      how: describeSkillPair(skill, tech),
    })),
  };
}

export type SkillPopoverBrief = {
  skill: string;
  relatedLabel: string;
  summary: string;
};

/** Compact copy for hover popover (about 3–4 lines). */
export function getSkillPopoverBrief(skill: string): SkillPopoverBrief {
  const { intro, relations } = getSkillPopoverContent(skill);

  if (relations.length === 0) {
    return {
      skill,
      relatedLabel: "Standalone in this stack",
      summary: intro,
    };
  }

  const relatedLabel = relations.map((r) => r.tech).join(" · ");
  const hook = relations[0]?.how ?? intro;
  let summary = hook.length > intro.length ? intro : `${intro} ${hook.split(".")[0]}.`;
  if (summary.length > 200) {
    summary = `${summary.slice(0, 197).trim()}…`;
  }

  return { skill, relatedLabel, summary };
}
