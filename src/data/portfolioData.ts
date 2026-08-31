import { Project, SkillCategory, Experience } from '../types';

export const personalInfo = {
  name: "Abebe Adugna",
  title: "Big Data Engineer & Data Analyst",
  subtitle: "Specializing in Scalable ETL/ELT Pipelines, Data Decoding & Elasticsearch Analytics",
  location: "Addis Abeba, Ethiopia",
  email: "weldatnsaeadua@gmail.com",
  phone: "(+251) 924451224",
  github: "https://github.com/Abebe60?tab=repositories",
  linkedin: "https://linkedin.com",
  bio: `I am a Big Data Engineer and Data Analyst with experience in designing, building, and optimizing scalable ETL/ELT data pipelines. I specialize in ingesting, parsing, decoding, transforming, and enriching both structured and unstructured data from diverse data sources.

My expertise includes developing high-performance data processing solutions that convert complex raw data into clean, reliable, and analytics-ready datasets. I have hands-on experience working with large-scale data ingestion, data transformation, data enrichment, and data integration across multiple platforms.

I work with technologies and storage solutions such as Elasticsearch, SQL databases, and modern big data ecosystems to build efficient, reliable, and scalable data architectures. My experience spans processing high-volume datasets, implementing data quality checks, automating workflows, and optimizing pipeline performance for real-time and batch processing.`,
  profileSummary: "I am healthy and capable of doing any type of work, disciplined and patient behavior. Excellent relations with everyone and free from any addiction.",
  coverLetter: `I am excited to apply for Big Data Engineering & Data Analyst roles and contribute to high-impact technology teams. I have extensive experience designing, building, and optimizing scalable ETL/ELT data pipelines that ingest data from multiple sources and process structured, semi-structured, and unstructured data formats. My technical experience encompasses data extraction, parsing, decoding, cleaning, validation, transformation, and enrichment, as well as storing and organizing processed data in scalable storage systems like Elasticsearch and SQL databases.

I am particularly interested in joining forward-thinking organizations focused on leveraging technology and data to create meaningful impact. I believe my background in data engineering, ETL development, data integration, and data quality can contribute to building reliable data systems that support informed decision-making. I welcome the opportunity to bring my technical skills, problem-solving ability, and passion for building effective data solutions to your team.`,
  educationList: [
    {
      degree: "Bachelor of Science and Technology in Computer Science",
      institution: "Dire Dawa University Institute of Technology",
      year: "2015",
      details: "CGPA: 3.52 | Exit Exam: 71 out of 100"
    },
    {
      degree: "Grade 11 to 12 (Preparatory Education)",
      institution: "Tewodros Preparatory School",
      year: "2011",
      details: "Completed Grade 11 to 12"
    },
    {
      degree: "Grade 9 to 10 (Secondary Education)",
      institution: "Tewodros Secondary School",
      year: "2009",
      details: "Completed Grade 9 to 10"
    }
  ],
  stats: [
    { label: "B.Sc CGPA", value: "3.52" },
    { label: "Exit Exam Score", value: "71 / 100" },
    { label: "Data Pipeline Exp", value: "8+ Yrs" },
    { label: "English Proficiency", value: "Fluent" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "elasticsearch-logstash-parser",
    title: "Multi-Format Data Ingestion & Decoding Pipeline",
    subtitle: "Logstash, Python, Golang & Ruby ETL/ELT Engine",
    description: "Scalable data ingestion & decoding pipeline parsing structured & unstructured data from heterogeneous sources using Logstash, Python, Go, and Ruby for Elasticsearch indexing.",
    longDescription: "Architected a high-throughput data processing solution that converts complex raw data into clean, reliable, and analytics-ready datasets. Utilizes Logstash Grok filters, Python decoding scripts, and concurrent Golang workers to parse unstructured text, JSON payloads, and relational records into optimized Elasticsearch indices with automated quality checks.",
    category: "Data Engineering",
    tags: ["Logstash", "Elasticsearch", "Python", "Golang", "Ruby", "SQL", "JSON", "ETL/ELT"],
    metrics: [
      { label: "Indexing Latency", value: "< 10ms" },
      { label: "Formats Processed", value: "Structured & Unstructured" },
      { label: "Cluster Uptime", value: "99.9%" }
    ],
    githubUrl: "https://github.com/Abebe60?tab=repositories",
    featured: true,
    highlights: [
      "Extensive Logstash filter pipelines for multi-format log transformation",
      "Python and Golang script ingestion layers for high-throughput batching",
      "Dynamic Elasticsearch index templates and mapping optimizations",
      "Robust data validation and exception handling"
    ],
    codeSnippet: `input {
  file {
    path => "/var/log/app_telemetry/*.log"
    codec => "json"
  }
}
filter {
  grok {
    match => { "message" => "%{TIMESTAMP_ISO8601:timestamp} %{LOGLEVEL:level} %{GREEDYDATA:log_data}" }
  }
  ruby {
    code => "event.set('parsed_at', Time.now.to_i)"
  }
}
output {
  elasticsearch {
    hosts => ["http://localhost:9200"]
    index => "telemetry-logs-%{+YYYY.MM.dd}"
  }
}`
  },
  {
    id: "raget-pipeline",
    title: "Multi-Generator RAGET Question Pipeline",
    subtitle: "Automated Evaluation & QA Dataset Generator Engine",
    description: "An automated QA evaluation pipeline that generates 120+ unique test questions across 8 distinct categories while bypassing LLM context overflow.",
    longDescription: "Developed an evaluation framework (RAGET) in Python and FastAPI for testing LLM deployments. Extracts structured domain metadata to run benchmark evaluation tests across 8 categories without hitting local context limitations.",
    category: "AI & LLM",
    tags: ["Python", "FastAPI", "Giskard", "LiteLLM", "RAGET", "React", "Elasticsearch"],
    metrics: [
      { label: "Categories", value: "8 Categories" },
      { label: "Questions Generated", value: "120 QA Pairs" },
      { label: "Context Window Efficiency", value: "4.2x Faster" }
    ],
    githubUrl: "https://github.com/Abebe60?tab=repositories",
    featured: true,
    highlights: [
      "Modular multi-generator pipeline preventing context window overflow",
      "Field-specific extraction logic for high QA question variance",
      "Automated evaluation metrics (faithfulness, answer relevance)",
      "Interactive React dashboard for reviewing and exporting generated datasets"
    ]
  },
  {
    id: "django-golang-backend",
    title: "Django & Golang Microservice Architecture",
    subtitle: "REST APIs with Relational Databases (SQL)",
    description: "Scalable backend hub combining Django REST framework, Go microservices, and SQL databases for high-speed API endpoints.",
    longDescription: "Engineered a dual-service architecture using Django for administrative ORM workflows and Golang for concurrent API endpoints. Connected to PostgreSQL and SQL databases for structured data storage.",
    category: "Backend & APIs",
    tags: ["Django", "Golang", "Python", "SQL", "PostgreSQL", "JSON"],
    metrics: [
      { label: "API Speed", value: "<12ms P99" },
      { label: "Database Support", value: "PostgreSQL & SQL" },
      { label: "Auth Security", value: "JWT + OAuth2" }
    ],
    githubUrl: "https://github.com/Abebe60?tab=repositories",
    featured: true,
    highlights: [
      "Django REST framework clean controllers and schema serializations",
      "Golang RESTful services for ultra-fast throughput",
      "Relational SQL database queries and schema optimizations",
      "Full API documentation and endpoint testing"
    ]
  },
  {
    id: "react-telemetry-portal",
    title: "Elasticsearch Log Monitoring Dashboard",
    subtitle: "React + TypeScript + Tailwind CSS Web Application",
    description: "Modern, dark-themed dashboard providing real-time visual inspection of Logstash ingestion status and Elasticsearch indices.",
    longDescription: "Built a responsive React application using TypeScript and Tailwind CSS. Features log search query builder, real-time telemetry metrics, and responsive layout.",
    category: "Full-Stack",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "HTML5", "JavaScript"],
    metrics: [
      { label: "Performance Score", value: "99 / 100" },
      { label: "Load Time", value: "< 0.3s" }
    ],
    githubUrl: "https://github.com/Abebe60?tab=repositories",
    featured: false,
    highlights: [
      "Modular UI components using TypeScript and Tailwind CSS",
      "Elasticsearch cluster status monitoring",
      "Fully responsive mobile and desktop navigation"
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Big Data Engineering & Storage",
    description: "Designing scalable ETL/ELT pipelines, parsing, decoding, transforming, and enriching data.",
    skills: [
      { name: "ETL / ELT Pipelines", level: 96, experience: "Specialty", icon: "GitBranch", popular: true },
      { name: "Logstash", level: 95, experience: "Primary Tool", icon: "GitMerge", popular: true },
      { name: "Elasticsearch", level: 95, experience: "Primary Tool", icon: "Search", popular: true },
      { name: "Python", level: 94, experience: "Core Stack", icon: "FileCode", popular: true },
      { name: "Go (Golang)", level: 88, experience: "Core Stack", icon: "Zap", popular: true },
      { name: "Ruby", level: 85, experience: "Data Parsing", icon: "Code2" },
      { name: "SQL & Relational DBs", level: 90, experience: "Postgres/SQL", icon: "Database", popular: true },
      { name: "JSON & Data Formats", level: 98, experience: "Everyday", icon: "Globe", popular: true }
    ]
  },
  {
    title: "Backend Frameworks & Programming",
    description: "Developing resilient backend APIs, databases, and microservices.",
    skills: [
      { name: "Django", level: 90, experience: "Framework", icon: "Server", popular: true },
      { name: "JavaScript & TypeScript", level: 88, experience: "Frontend & Node", icon: "Code2", popular: true },
      { name: "Java & PHP", level: 84, experience: "Backend", icon: "Layers" },
      { name: "HTML / HTML5 & CSS", level: 95, experience: "Web UI", icon: "Layout" }
    ]
  },
  {
    title: "Languages & Professional Qualities",
    description: "Spoken language fluency and personal discipline.",
    skills: [
      { name: "English (Fluent)", level: 95, experience: "Fluent", icon: "MessageSquare", popular: true },
      { name: "Disciplined & Patient", level: 100, experience: "Core Value", icon: "ShieldCheck", popular: true },
      { name: "Free From Addiction", level: 100, experience: "Lifestyle", icon: "CheckCircle2", popular: true }
    ]
  }
];

export const experiencesData: Experience[] = [
  {
    id: "exp-1",
    role: "Big Data Engineer & Data Analyst",
    company: "Data & Systems Employer",
    period: "Jan 2016 - Jan 2018",
    location: "Addis Abeba, Ethiopia",
    description: [
      "Designed, built, and optimized scalable ETL/ELT pipelines ingesting, parsing, decoding, transforming, and enriching structured and unstructured data.",
      "Developed high-performance data processing solutions converting complex raw data into analytics-ready datasets.",
      "Utilized Logstash, Elasticsearch, and SQL databases for high-volume real-time and batch data processing."
    ],
    technologies: ["Logstash", "Elasticsearch", "Python", "Golang", "Ruby", "SQL", "JSON", "ETL/ELT", "Linux"]
  }
];
