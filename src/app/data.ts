
import { StaticImageData } from "next/image";
import { cache } from "react";

export interface IProjectData {
  SLUG: string;
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE: StaticImageData;
  HIDDEN: boolean;
}

export const DATA = {
  HEADER: {
    NAME: "Roshan Razak",
    AGE: "AI Engineer",
    PRONOUN: "United Kingdom",
    HEADLINE:
      "AI Engineer — I build agentic systems and AI-ready infrastructure using LangChain, LangGraph, and RAG pipelines, with a strong foundation in Python backend engineering.",
    RESUME: "/roshan-razak.pdf",
    EMAIL: "mailto:roshan.razak@outlook.com",
    GITHUB: "https://github.com/roshanvrazak",
    LINKEDIN: "https://www.linkedin.com/in/roshan-razak",
  },

  ABOUT_ME: {
    INTRO:
      "I am an AI Engineer with commercial experience building agentic systems and AI-ready infrastructure. I hold an MSc in Software Engineering and am driven by a commitment to reliable, production-grade AI systems that are easy to evaluate and maintain.",
    EXPERTISE:
      "My technical foundation covers Python async and Pydantic, LangChain and LangGraph for orchestrating agentic workflows, RAG pipelines backed by vector databases (pgvector, ChromaDB), and FastAPI for serving AI inference endpoints on AWS.",
    BLOG: "I am deeply interested in LLM evaluation, prompt engineering, and AI infrastructure. Beyond applied AI, I maintain a homelab for running local models with Ollama and experimenting with infrastructure-as-code tooling.",
  },

  EXPERIENCE: {
    "Cawosh Ltd": {
      WEBSITE: "https://cawosh.com",
      POSITION: "Software Engineer",
      LOCATION: "United Kingdom",
      DURATION: "Aug 2024 – Present",
      DESCRIPTION: [
        "**AI-Ready Services:** Developed Python backend services on AWS with async data processing pipelines and AI-ready inference endpoints, contributing to feature delivery across the full development lifecycle.",
        "**ETL & ML Workflows:** Built ETL pipelines feeding structured and unstructured data into downstream ML workflows, including document parsing and normalisation for AI consumption.",
        "**Performance Fix:** Identified and resolved a bottleneck in a serverless data pipeline (AWS Lambda), cutting monthly infrastructure costs by 45% with no loss in processing speed.",
        "**Testing:** Wrote and maintained unit and integration tests with Python test frameworks for AI-serving infrastructure, improving deployment confidence and reducing regression risk.",
        "**Security & Validation:** Automated secrets rotation via AWS IAM and enforced strict type-hinting and Pydantic validation patterns across all backend services.",
      ],
      TECH_STACK: ["Python", "FastAPI", "Pydantic", "AWS Lambda", "API Gateway", "AWS"],
    },
    "Capgemini Engineering": {
      WEBSITE: "https://www.capgemini.com",
      POSITION: "Associate Consultant",
      LOCATION: "India",
      DURATION: "Oct 2018 – Feb 2023",
      DESCRIPTION: [
        "**Backend Development:** Built and maintained Java / Spring Boot microservices for high-volume financial transaction processing, resolving a critical sequencing bug that caused data drift.",
        "**Database Optimisation:** Re-architected long-running PostgreSQL queries for a global banking client, improving data retrieval speeds by 40% through strategic indexing.",
        "**Testing Culture:** Established JUnit test suites and coding standards adopted team-wide, reducing production-level bugs by 25% within 18 months. Awarded STAR Performer recognition.",
      ],
      TECH_STACK: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "JUnit", "TDD"],
    },
  },

  PROJECTS: {
    "Agentic AI Underwriting Pipeline": {
      SLUG: "agentic-ai-underwriting-pipeline",
      DESCRIPTION: [
        "**Multi-Step Agent Orchestration:** Designed a LangGraph-based agentic pipeline that autonomously retrieves, reasons over, and synthesises insurance policy documents to produce structured underwriting recommendations.",
        "**RAG Architecture:** Implemented a Retrieval-Augmented Generation layer using ChromaDB as the vector store, with document chunking, embedding, and semantic search to ground LLM responses in authoritative source material.",
        "**FastAPI Inference Layer:** Exposed the agent workflow via a FastAPI service with Pydantic-validated request/response schemas, enabling clean integration with downstream systems.",
        "**Evaluation & Observability:** Built an LLM evaluation harness to measure retrieval precision and answer faithfulness, enabling iterative prompt and pipeline improvements.",
      ],
      TECH_STACK: ["LangGraph", "RAG", "FastAPI", "ChromaDB", "Pydantic", "Python"],
      HIDDEN: false,
    },
    "MemoryMesh — Multi-Tenant Conversational AI Platform": {
      SLUG: "memorymesh-conversational-ai",
      GITHUB: "https://github.com/roshanvrazak/memorymesh",
      DESCRIPTION: [
        "**Persistent Memory Architecture:** Built a multi-tenant conversational AI platform using LangChain with per-user memory isolation, storing conversation history and semantic embeddings in pgvector (PostgreSQL) for long-term recall.",
        "**Session & Cache Layer:** Implemented Redis-backed session management to serve low-latency context retrieval for active conversations without hitting the primary database on every turn.",
        "**Full-Stack Delivery:** Developed a FastAPI backend with async endpoints and a React frontend, containerised with Docker for consistent local and cloud deployment.",
        "**Multi-Tenancy & Auth:** Designed tenant-scoped data partitioning and authentication middleware to ensure strict conversation isolation across users.",
      ],
      TECH_STACK: ["LangChain", "FastAPI", "pgvector", "Redis", "PostgreSQL", "Docker", "React", "Python"],
      HIDDEN: false,
    },
    "Homelab Infrastructure as Code": {
      SLUG: "homelab-infrastructure-as-code",
      DESCRIPTION: [
        "**Self-Hosted AI Lab:** Provisioned a Proxmox-based homelab using Terraform for infrastructure-as-code, running Ollama to serve local LLMs (Mistral, LLaMA) for private AI experimentation and model evaluation.",
        "**CI/CD & Secure Access:** Deployed a Jenkins CI/CD pipeline and Nginx reverse proxy with Cloudflare Tunnels for secure remote access, enabling automated build and deployment workflows across containerised services.",
      ],
      TECH_STACK: ["Proxmox", "Terraform", "Docker", "Jenkins", "Ollama", "Cloudflare Tunnels", "Nginx"],
      HIDDEN: false,
    },
  },

  EDUCATION: [
    {
      DEGREE: "MSc Computer Science (Software Engineering), 1st",
      INSTITUTION: "Staffordshire University",
      DURATION: "Jul 2024",
      MODULES: "Enterprise Cloud Computing in AWS, Enterprise Software Engineering",
      DISSERTATION: "Designed and evaluated a Hybrid Reinforcement Learning system combining Collaborative Filtering and Content-Based Filtering for enhanced personalisation",
    },
    {
      DEGREE: "B.Tech in Computer Science and Engineering, 1st",
      INSTITUTION: "Kannur University",
      DURATION: "Jul 2017",
      MODULES: "Project RISTS — Real-Time Incremental Sentiment Analysis system designed to process high-velocity social media streams using short-text algorithms",
    },
  ],

  CERTIFICATIONS: [],

  ALL_PROJECTS:
    "https://github.com/roshanvrazak",

  SKILLS: {
    "Core Programming": [
      "Python", "Java", "JavaScript", "TypeScript", "SQL", "Pydantic",
    ],
    "AI & Orchestration": [
      "LangChain", "LangGraph", "RAG Pipelines", "Agentic Workflows", "Prompt Engineering", "LLM Evaluation", "Ollama",
    ],
    "Vector Databases": [
      "pgvector", "ChromaDB", "Embedding Models", "Semantic Search",
    ],
    "Backend & Web": [
      "FastAPI", "Spring Boot", "ReactJS", "Laravel", "Django", "REST APIs",
    ],
    "Databases": [
      "PostgreSQL", "MySQL", "Redis", "DynamoDB",
    ],
    "DevOps & Infrastructure": [
      "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "AWS Lambda", "S3", "EC2", "Bedrock", "CI/CD",
    ],
  },
};

export const getProjectData = cache(
  (title: string) =>
    Object.entries(DATA.PROJECTS).find(
      ([, value]) => value.SLUG === title && !value.HIDDEN
    ) as [string, IProjectData] | undefined
);

export default DATA;



