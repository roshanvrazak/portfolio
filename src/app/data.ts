
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
    AGE: "Software Developer",
    PRONOUN: "United Kingdom",
    HEADLINE:
      "Software Developer — I build clean, reliable applications in Java, Python, and JavaScript and care deeply about code that is easy to test and maintain.",
    RESUME: "/roshan-razak.pdf",
    EMAIL: "mailto:roshan.razak@outlook.com",
    GITHUB: "https://github.com/roshanvrazak",
    LINKEDIN: "https://www.linkedin.com/in/roshan-razak",
  },

  ABOUT_ME: {
    INTRO:
      "I am a Software Developer with commercial experience in building and optimizing backend services and full-stack applications. I hold an MSc in Software Engineering and am driven by a commitment to clean, maintainable, and well-tested code.",
    EXPERTISE:
      "My technical foundation is built on Java, Python, and JavaScript, with strong experience in Spring Boot, ReactJS, and AWS. I focus on delivering reliable features, improving system performance, and applying robust testing practices.",
    BLOG: "I am always eager to learn and contribute to a collaborative team. Beyond core development, I maintain a strong interest in infrastructure, containerization, and continuous integration.",
  },



  EXPERIENCE: {
    "Cawosh Ltd": {
      WEBSITE: "https://cawosh.com",
      POSITION: "Software Engineer",
      LOCATION: "United Kingdom",
      DURATION: "Aug 2024 – Present",
      DESCRIPTION: [
        "**Feature Development:** Develop and maintain AWS-native backend services in Python and JavaScript, contributing to feature delivery and bug fixes across the full development lifecycle.",
        "**Code Quality:** Standardised TypeScript across all frontend modules, eliminating a class of runtime undefined errors and reducing client-side rendering bugs by 30%.",
        "**Testing:** Write and maintain unit and integration tests across sprint cycles, improving deployment confidence and reducing regression risk.",
        "**Collaboration:** Work closely with senior engineers to clarify requirements, participate in regular code reviews, and keep technical documentation up to date for all assigned modules.",
        "**Performance Fix:** Identified and resolved a bottleneck in a serverless data pipeline (AWS Lambda), cutting monthly infrastructure costs by 45% with no loss in processing speed.",
        "**Security:** Automated secrets rotation via AWS IAM, removing manual steps and keeping the platform audit-ready for financial compliance reviews."
      ],
      TECH_STACK: ["Python", "JavaScript", "TypeScript", "AWS Lambda", "AWS"],
    },
    "Capgemini Engineering": {
      WEBSITE: "https://www.capgemini.com",
      POSITION: "Associate Consultant",
      LOCATION: "India",
      DURATION: "Oct 2018 – Feb 2023",
      DESCRIPTION: [
        "**Backend Development:** Built and maintained Java / Spring Boot microservices for high-volume financial transaction processing, resolving a critical sequencing bug that caused data drift.",
        "**Database Optimisation:** Re-architected long-running PostgreSQL queries for a global banking client, improving data retrieval speeds by 40% through strategic indexing.",
        "**Reliability:** Redesigned a failing legacy synchronisation task into a resilient background process, reducing system downtime by 15% and eliminating manual database interventions.",
        "**Testing Culture:** Established JUnit test suites and coding standards adopted team-wide, reducing production-level bugs by 25% within 18 months.",
        "**Agile Delivery:** Participated in sprint ceremonies, peer code reviews, and maintained service documentation throughout the SDLC. Awarded STAR Performer recognition."
      ],
      TECH_STACK: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "JUnit", "TDD"],
    },
  },

  PROJECTS: {
    "Spring Boot Fashion Store": {
      SLUG: "spring-boot-fashion-store",
      GITHUB: "https://github.com/roshanvrazak/spring-boot-fashion-store",
      DESCRIPTION: [
        "Built a full-stack e-commerce application using Java / Spring Boot for the REST API backend and ReactJS for the frontend, featuring product browsing, cart management, and order processing.",
        "Implemented MySQL for relational data storage, JUnit unit tests for core service logic, and Git-based version control throughout the development lifecycle."
      ],
      TECH_STACK: ["Java", "ReactJS", "MySQL", "JUnit", "REST API", "Spring Boot"],
      HIDDEN: false,
    },
    "Tool Hire Review Platform": {
      SLUG: "tool-hire-review-platform",
      GITHUB: "https://github.com/roshanvrazak/tool-hire-review-platform",
      DESCRIPTION: [
        "Developed a ReactJS / Node.js web platform for submitting and browsing tool hire reviews, with a RESTful API backend, MySQL database, and user authentication.",
        "Served as Scrum Master during development, facilitating sprint planning and daily standups."
      ],
      TECH_STACK: ["ReactJS", "Node.js", "MySQL", "Scrum Master"],
      HIDDEN: false,
    },
    "AWS Facial Recognition Security System": {
      SLUG: "aws-facial-recognition-security-system",
      GITHUB: "https://github.com/roshanvrazak/aws-facial-recognition",
      DESCRIPTION: [
        "Built a cloud-native security system using AWS Rekognition, Lambda, and S3 to perform real-time facial recognition and access control, with event-driven notifications via SNS."
      ],
      TECH_STACK: ["AWS Rekognition", "AWS Lambda", "S3", "SNS"],
      HIDDEN: false,
    },
    "DevOps & Security Lab Personal Infrastructure": {
      SLUG: "devops-security-lab",
      GITHUB: "https://github.com/roshanvrazak/devops-security-lab",
      DESCRIPTION: [
        "Designed and deployed a private CI/CD ecosystem using Jenkins, Docker, Nexus (artifact registry), and Nginx reverse proxy with SSL termination and Cloudflare Tunnels for secure remote access."
      ],
      TECH_STACK: ["Jenkins", "Docker", "Nexus", "Nginx", "Cloudflare Tunnels"],
      HIDDEN: false,
    },
  },

  EDUCATION: [
    {
      DEGREE: "MSc Computer Science (Software Engineering), 1st",
      INSTITUTION: "Staffordshire University",
      DURATION: "Jul 2024",
      MODULES: "Enterprise Cloud Computing in AWS, Enterprise Software Engineering",
      DISSERTATION: "Reinforcement Learning with Collaborative Filtering (CF) and Content-Based Filtering (CBF) for Enhanced Personalization",
    },
    {
      DEGREE: "B.Tech in Computer Science and Engineering, 1st",
      INSTITUTION: "Kannur University",
      DURATION: "Jul 2017",
      MODULES: "Real-Time Incremental Sentiment Analysis system to process social media comment streams using short-text algorithms",
    },
  ],

  CERTIFICATIONS: [],

  ALL_PROJECTS:
    "https://github.com/roshanvrazak",


  SKILLS: {
    "Languages": [
      "Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"
    ],
    "Frameworks & Libraries": [
      "Spring Boot", "FastAPI", "ReactJS", "Laravel", "REST APIs"
    ],
    "Databases": [
      "MySQL", "PostgreSQL", "Redis", "DynamoDB"
    ],
    "Cloud & DevOps": [
      "AWS", "Lambda", "S3", "EC2", "IAM", "API Gateway", "Docker", "Jenkins", "GitHub Actions"
    ],
    "Testing & Practices": [
      "JUnit", "Mockito", "TDD", "Integration Testing", "Agile/Scrum", "Technical Documentation"
    ],
    "Version Control": [
      "Git", "GitHub"
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



