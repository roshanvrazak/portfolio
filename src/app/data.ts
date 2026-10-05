import type { StaticImageData } from "next/image";
import { cache } from "react";

export interface IProjectData {
  SLUG: string;
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE?: StaticImageData;
  HIDDEN: boolean;
}

export interface IExperienceData {
  WEBSITE: string | null;
  POSITION: string;
  LOCATION: string;
  DURATION: string;
  DESCRIPTION: string[];
  TECH_STACK: string[];
}

export interface IEducationData {
  DEGREE: string;
  INSTITUTION: string;
  DURATION: string;
  MODULES?: string;
  DISSERTATION?: string;
}

export const DATA = {
  HEADER: {
    NAME: "Roshan Razak",
    AGE: "Full Stack AI Engineer",
    PRONOUN: "Calicut, India",
    HEADLINE:
      "I build practical AI tools that turn documents and data into useful workflows, with secure foundations, measurable behaviour, and room for human judgement.",
    RESUME: "/roshan-razak.pdf",
    EMAIL: "mailto:roshan.razak@outlook.com",
    GITHUB: "https://github.com/roshanvrazak",
    LINKEDIN: "https://www.linkedin.com/in/roshan-razak",
  },

  ABOUT_ME: {
    INTRO:
      "I'm a full-stack AI engineer and former technical team lead with 6.5+ years of production software experience, spanning enterprise consulting, startup teams, and freelance delivery.",
    EXPERTISE:
      "I work across the interface, backend, and AI layer to help people search information and get work done. That means grounding answers in source documents, validating model outputs, testing for prompt injection, and keeping usage and cost visible. My MSc in Computer Science complements a hands-on background in Python, TypeScript, and Java.",
    BLOG: "Outside product work, I run a Proxmox lab for local models, internal tools, and automation. I use Claude Code with delegated agents, tests, and automated reviews, and explore chat-controlled operations with Hermes and OpenClaw alongside n8n workflows.",
  },

  EXPERIENCE: {
    "Cawosh Ltd": {
      WEBSITE: "https://cawosh.com",
      POSITION: "Software Engineer / Technical Team Lead",
      LOCATION: "London, United Kingdom · Full-time",
      DURATION: "Aug 2024 – Sep 2026",
      DESCRIPTION: [
        "**Internal Platforms:** Connected project workflows through cloud services and APIs, providing a dependable foundation for internal tools and AI features.",
        "**Document Processing:** Built a pipeline that converted PDFs and spreadsheets into validated, consistent data, handling approximately 5,000 documents each month.",
        "**Technical Leadership:** Owned the roadmap across product and operations, translating team needs into priorities and guiding architecture, technical explorations, planning, and developer reviews.",
        "**Reliable Delivery:** Maintained backend services with an emphasis on secure access, performance, and automated testing.",
      ],
      TECH_STACK: [
        "Backend Services",
        "APIs",
        "Cloud Applications",
        "Document Processing",
        "Automated Testing",
      ],
    },
    "Xabium Software Solutions": {
      WEBSITE: "https://people.xabium.co.uk",
      POSITION: "Full Stack AI Engineer",
      LOCATION: "Remote, United Kingdom · Freelance",
      DURATION: "Nov 2025 – Sep 2026",
      DESCRIPTION: [
        "**AI Workflows:** Delivered agents for the People platform to support multi-step tasks, including onboarding and employee dashboard interactions, using Claude, Antigravity, and custom skills.",
        "**Structured Generation:** Refined prompts, context limits, and examples to produce dependable UI structures for a no-code landing page builder and an internal HR application.",
        "**Integration & Evaluation:** Connected LLM APIs and embedding workflows across frontend and backend systems, adding evaluations for prompt injection, output quality, and production latency.",
        "**Team Delivery:** Contributed through Scrum planning and reviews, with CodeRabbit and Qodo checks to support maintainable, secure feature releases.",
      ],
      TECH_STACK: [
        "Claude",
        "Antigravity",
        "LLM APIs",
        "Embeddings",
        "AI Evaluation",
        "CodeRabbit",
        "Qodo",
      ],
    },
    "Capgemini Technology Services": {
      WEBSITE: "https://www.capgemini.com",
      POSITION: "Associate Consultant / Product Owner",
      LOCATION: "Bangalore, India",
      DURATION: "Oct 2018 – Feb 2023",
      DESCRIPTION: [
        "**Product Ownership:** Served as the Maximo specialist and application contact for an asset management client, coordinating stakeholder priorities, development, operations, and junior consultants.",
        "**Transaction Processing:** Maintained Java microservices for high-volume financial workloads and corrected a sequencing defect that caused data drift.",
        "**Database Performance:** Improved retrieval speeds by 40% for a banking client through PostgreSQL query redesign and targeted indexing.",
        "**Engineering Standards:** Introduced shared JUnit suites and coding standards that helped reduce production bugs by 25% over 18 months, earning STAR Performer recognition.",
      ],
      TECH_STACK: [
        "Java",
        "Microservices",
        "PostgreSQL",
        "JUnit",
        "Maximo",
        "Product Ownership",
      ],
    },
    "MEAR Enterprises": {
      WEBSITE: null,
      POSITION: "Internship Trainee",
      LOCATION: "Kerala, India",
      DURATION: "Jun 2017 – Dec 2017",
      DESCRIPTION: [
        "**Web Development:** Built web application features with Java, Spring Boot, Spring MVC, and JavaScript during a software development internship.",
        "**Data Layer:** Designed SQL databases and wrote queries to support application functionality.",
      ],
      TECH_STACK: ["Java", "Spring Boot", "Spring MVC", "JavaScript", "SQL"],
    },
  } satisfies Record<string, IExperienceData>,

  PROJECTS: {
    "Unsheet — Spreadsheet Dashboards": {
      SLUG: "unsheet",
      LIVE_PREVIEW: "https://unsheet.netlify.app/",
      GITHUB: "https://github.com/roshanvrazak/UnSheet",
      DESCRIPTION: [
        "From Sheets to Interfaces: Built a local-first tool that turns spreadsheet data into interactive dashboards with AI, keeping browser-based analytics central to the experience.",
        "Validated Generation: Used Zod to check model-generated JSON before it becomes a UI, combining the Vercel AI SDK with DuckDB-WASM for in-browser analysis.",
        "Privacy & Security: Implemented more than 14 security mitigations to protect an AI-assisted data workflow.",
      ],
      TECH_STACK: ["TypeScript", "Zod", "DuckDB-WASM", "Vercel AI SDK"],
      HIDDEN: false,
    },
    "Product Catalogue Chat": {
      SLUG: "product-catalogue-chat",
      LIVE_PREVIEW: "https://catalog-chat.vercel.app/",
      GITHUB: "https://github.com/roshanvrazak/CatalogChat",
      DESCRIPTION: [
        "Answers with Sources: Created a serverless RAG application for navigating complex product PDFs, with citations that let users check the evidence behind an answer.",
        "Hybrid Retrieval: Combined vector and full-text search with Supabase pgvector to retrieve relevant catalogue content.",
        "Resumable Ingestion: Processed documents in batches so ingestion can continue after an interruption.",
      ],
      TECH_STACK: [
        "Next.js 15",
        "Supabase",
        "pgvector",
        "RAG",
        "Hybrid Search",
      ],
      HIDDEN: false,
    },
    "Plato — LLM Tracing & Observability": {
      SLUG: "plato",
      GITHUB: "https://github.com/roshanvrazak/plato",
      DESCRIPTION: [
        "LLM Gateway: Built a Python gateway for multiple tenants, making AI application behaviour easier to trace and inspect with OpenTelemetry.",
        "Usage Controls: Added Redis-backed rate limits and automatic daily budget enforcement to keep usage within defined limits.",
      ],
      TECH_STACK: ["Python", "OpenTelemetry", "Redis", "LLM Gateway"],
      HIDDEN: false,
    },
    "Personal Portfolio": {
      SLUG: "portfolio",
      GITHUB: "https://github.com/roshanvrazak/portfolio",
      LIVE_PREVIEW: "https://roshanvrazak.co.uk",
      DESCRIPTION: [
        "Web Experience: Built this portfolio with Next.js 15 and TypeScript, using dynamic project pages and a reusable interface system.",
        "Self-Hosted Delivery: Containerised the site for a Proxmox environment, with Cloudflare Tunnels and Tailscale supporting secure access and hands-on hardware and network management.",
      ],
      TECH_STACK: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "Docker",
        "Proxmox",
        "Cloudflare Tunnels",
        "Tailscale",
      ],
      HIDDEN: false,
    },
    "Homelab Infrastructure as Code": {
      SLUG: "homelab-infrastructure-as-code",
      DESCRIPTION: [
        "Private Infrastructure: Run AI services and internal tools on Proxmox, using Terraform and Ansible to provision the lab and Cloudflare Tunnels and Tailscale for remote access without open ports.",
        "Everyday Automation: Use n8n and scheduled jobs for document processing, notifications, and backups, with Hermes and OpenClaw agents accessible through Telegram and Discord.",
        "Operational Safeguards: Protect services with environment-injected secrets, MFA, access controls, WAF rules, and container image scanning.",
      ],
      TECH_STACK: [
        "Proxmox",
        "Terraform",
        "Ansible",
        "Docker",
        "Ollama",
        "Cloudflare Tunnels",
        "Tailscale",
        "n8n",
        "Hermes",
        "OpenClaw",
      ],
      HIDDEN: false,
    },
  } satisfies Record<string, IProjectData>,

  EDUCATION: [
    {
      DEGREE: "MSc Computer Science (Software Engineering)",
      INSTITUTION: "Staffordshire University",
      DURATION: "Jul 2024",
      DISSERTATION:
        "Built a recommendation system combining reinforcement learning with collaborative and content-based filtering, improving hit-rate and NDCG compared with either approach alone",
    },
    {
      DEGREE: "B.Tech in Computer Science and Engineering",
      INSTITUTION: "Kannur University",
      DURATION: "Jul 2017",
      DISSERTATION:
        "RISTS: a real-time social media summarisation project using incremental clustering to process streaming data at scale",
    },
  ] satisfies IEducationData[],

  CERTIFICATIONS: [
    "GDPR and Data Governance training",
    "DevOps and DevSecOps training",
    "Oracle Certified Java Programmer Associate",
    "Full Stack Java Bootcamp — Jspiders, Bangalore",
  ],

  ALL_PROJECTS: "https://github.com/roshanvrazak",

  SKILLS: {
    "AI & Integration": [
      "LLM Applications",
      "RAG",
      "AI Agents",
      "MCP",
      "Prompt Engineering",
      "Claude",
      "OpenRouter",
      "Ollama",
    ],
    "Quality & Safety": [
      "Guardrails",
      "Prompt Injection Defence",
      "AI Evaluation",
      "Human Review",
      "Application Tracing",
      "Automated Testing",
    ],
    "Search & Data": [
      "Embeddings",
      "pgvector",
      "Hybrid Search",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "DynamoDB",
    ],
    "Application Development": [
      "Python",
      "TypeScript",
      "Java",
      "FastAPI",
      "Django",
      "React",
      "Next.js",
      "Spring Boot",
    ],
    "Delivery & Infrastructure": [
      "Docker",
      "Terraform",
      "Ansible",
      "CI/CD",
      "Proxmox",
      "Cloudflare Tunnels",
      "Tailscale",
      "n8n",
      "Vercel",
      "Netlify",
    ],
    "AWS & Cloud": ["AWS", "Bedrock", "Lambda", "S3", "Cognito", "CloudWatch"],
  } satisfies Record<string, string[]>,
};

/** All publicly visible projects, keyed by display name. */
export function getVisibleProjects(): [string, IProjectData][] {
  return Object.entries(DATA.PROJECTS).filter(([, project]) => !project.HIDDEN);
}

export const getProjectData = cache(
  (slug: string): [string, IProjectData] | undefined =>
    getVisibleProjects().find(([, project]) => project.SLUG === slug)
);

export default DATA;
