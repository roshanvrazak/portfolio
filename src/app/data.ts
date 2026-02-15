
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
      "Full-stack developer with a passion for building efficient, scalable, and intuitive applications.",
    RESUME: "https://drive.google.com/file/d/1I8SyH9ti-mj7vGoQzKYp60pxsKIWIuKF/",
    EMAIL: "mailto:roshan.razak@outlook.com",
    GITHUB: "https://github.com/roshanvrazak",
    LINKEDIN: "https://www.linkedin.com/in/roshan-razak",
  },

  ABOUT_ME: {
    INTRO:
      "Hey! I'm a full-stack developer who loves building efficient, scalable, and intuitive applications. I thrive on solving complex problems, optimizing performance, and creating seamless user experiences.",
    EXPERTISE:
      "My expertise lies in Java, Spring Boot AWS cloud-based solutions and DevOps. I enjoy working across the stack to bring ideas to life.",
    BLOG: "I would love publishing blogs and sharing insights on web development, best practices, and new technologies.",
  },



  EXPERIENCE: {
    "Cawosh Ltd": {
      WEBSITE: "https://cawosh.com",
      POSITION: "Software Developer (Freelance)",
      LOCATION: "United Kingdom",
      DURATION: "Jan 2025 – Present",
      DESCRIPTION: [
        "Built a full-stack web application for scheduling car maintenance services using Java, Spring Boot, React.js, and AWS",
        "Designed and implemented RESTful APIs for managing customer bookings, vehicle history tracking, and service recommendations",
        "Integrated JWT/OAuth authentication for secure user access and ensured GDPR compliance for data privacy",
        "Developed AI-driven service recommendations based on vehicle diagnostics and historical data",
        "Set up business analytics dashboards to track service trends, peak hours, and customer preferences.",
        "Collaborated with founders and business teams to prioritize features and optimize user experience.",
        "Worked in an Agile environment, participating in sprint planning, code reviews, and rapid prototyping.",
      ],
      TECH_STACK: [
        "Java",
        "Spring Boot",
        "Spring AI",
        "DynamoDB",
        "React.js",
        "AWS",
        "JWT",
        "OAuth",
        "Agile",
      ],
    },
    "Capgemini Engineering": {
      WEBSITE: "https://www.capgemini.com",
      POSITION: "Associate Consultant / Java Developer",
      LOCATION: "India",
      DURATION: "Oct 2018 – Feb 2023",
      DESCRIPTION: [
        "Built and maintained enterprise-grade Java applications, improving system reliability and performance.",
        "Utilized Spring Boot and Microservices architecture to increase application modularity and deployment efficiency",
        "Optimized MySQL database operations, enhancing data integrity and reducing query time.",
        "Led a team of developers, fostering a culture of collaboration, mentorship, and timely delivery of projects.",
        "Implemented CI/CD pipelines using Jenkins and Docker, streamlining deployment processes and reducing downtime.",
        "Conducted code reviews and provided constructive feedback to ensure adherence to best practices and coding standards.",
        "Participated in Agile ceremonies, including sprint planning, daily stand-ups, and retrospectives.",
        "Collaborated with cross-functional teams to gather requirements and deliver high-quality software solutions.",
        "Developed and maintained RESTful APIs, ensuring seamless integration with front-end applications.",
        "Implemented unit and integration tests using JUnit and Mockito, ensuring code quality and reliability.",
        "Mentored junior developers, shared knowledge, and facilitated cross-functional collaboration.",
        "Recognized with the STAR Award and promoted early for outstanding contributions and leadership.",

      ],
      TECH_STACK: [
        "Java",
        "Spring MVC",
        "Spring Boot",
        "Microservices",
        "MySQL",
        "Jenkins",
        "Docker",
        "JUnit",
        "Mockito",
        "Agile",
        "Scrum",
        "PostgreSQL",
        "Oracle",
        "REST APIs",
        "Git",
        "GitHub",
      ],
    },
    "Cybrosis Techonolgies Pvt LTD": {
      WEBSITE: "https://www.cybrosys.com/",
      POSITION: "Software Developer Intern (Java)",
      LOCATION: "India",
      DURATION: "Jun 2017 – Dec 2017",
      DESCRIPTION: [
        "Developed full-stack web applications using Java EE and Spring MVC framework.",
        "Designed relational databases with MySQL and optimized SQL queries for CRUD operations.",
        "Implemented REST APIs following MVC architecture for an enterprise inventory management system.",
        "Gained proficiency in Core Java, Spring Framework, and Software Design Patterns.",
      ],
      TECH_STACK: ["Java EE", "Spring MVC", "MySQL", "REST APIs"],
    },
  },

  PROJECTS: {
    "Smart Access Control System": {
      SLUG: "smart-access-control",
      DESCRIPTION: [
        "Proposed a smart access control system integrating ID card access with facial recognition for enhanced security.",
        "Designed multi-factor authentication using Amazon Rekognition and managed user access with AWS Cognito.",
        "Implemented secure data storage (Amazon S3, DynamoDB) and serverless processing with AWS Lambda.",
      ],
      TECH_STACK: ["AWS", "Amazon Rekognition", "AWS Cognito", "Lambda"],
      HIDDEN: false,
    },
    "Tool Hire Review Management System": {
      SLUG: "tool-hire-review",
      DESCRIPTION: [
        "Designed UI wireframes in Figma, improving UX and accessibility in a ReactJS web application.",
        "Developed front-end components and assisted in project management using Agile methodologies.",
      ],
      TECH_STACK: ["React.js", "Figma", "Agile"],
      HIDDEN: false,
    },
    "Fashion Store Management System": {
      SLUG: "fashion-store-management",
      DESCRIPTION: [
        "Developed a web-based system for managing inventory, sales, and customer workflows in online fashion retail.",
        "Designed RESTful APIs with Java, Spring Boot, secured data with JWT, and managed MySQL database operations.",
        "Implemented user/admin features, unit testing with JUnit, and performed API testing using Postman and Swagger UI.",
      ],
      TECH_STACK: ["Java", "Spring Boot", "JWT", "MySQL", "JUnit", "Postman", "OpenAPI"],
      HIDDEN: false,
    },
  },

  EDUCATION: [
    {
      DEGREE: "MSc in Software Engineering, 1st",
      INSTITUTION: "Staffordshire University",
      DURATION: "2023 – 2024",
      MODULES: "Enterprise Cloud Computing in AWS (83%), Enterprise Software Engineering (80%)",
      DISSERTATION: "Reinforcement Learning with CF and CBF for Enhanced Personalization",
    },
    {
      DEGREE: "B.Tech in Computer Science and Engineering, 1st",
      INSTITUTION: "Kannur University",
      DURATION: "2013 - 2017",
      MODULES: "Data Structures & Algorithms, Database Management, Software Engineering, AI",
    },
  ],

  CERTIFICATIONS: [
    "Oracle Certified Associate, Java SE 8 Programmer",
    "Automation Academy Certification from UiPath",
  ],

  ALL_PROJECTS:
    "https://github.com/roshanvrazak",


  SKILLS: {
    Languages: ["Java", "TypeScript", "HTML", "CSS", "Node.js"],
    Frameworks: [
      "React.js",
      "Spring Boot",
      "Java EE",
    ],
    Libraries: ["Tailwind CSS", "Ant Design"],
    "Database & Backend": ["MongoDB", "MySQL", "PostgreSQL", "Oracle", "DynamoDB"],
    "Cloud & Deployment": ["AWS", "Docker", "CI/CD"],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "Postman",
      "Swagger UI",
      "Figma",
      "Visual Studio Code",
    ],
    Testing: ["JUnit", "Mockito", "TDD"],
    Analytics: ["Google Analytics", "Google Tag Manager", "Power BI"],
  },
};

export const getProjectData = cache(
  (title: string) =>
    Object.entries(DATA.PROJECTS).find(
      ([, value]) => value.SLUG === title && !value.HIDDEN
    ) as [string, IProjectData] | undefined
);

export default DATA;



