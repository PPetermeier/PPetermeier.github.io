export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  status: string;
  avatar: string;
  bio: string;
  interests: string[];
  profiles: SocialProfile[];
  skills: SkillCategory[];
  education: Education[];
  work: WorkExperience[];
  languages: Language[];
}

export interface SocialProfile {
  icon: string;
  url: string;
  label: string;
}

export interface SkillCategory {
  name: string;
  items: Skill[];
}

export interface Skill {
  name: string;
  description: string;
  percent: number;
  icon: string;
}

export interface Education {
  area: string;
  institution: string;
  company_url?: string;
  company_logo: string;
  date_start: string;
  date_end: string;
  summary: string;
  award?: string;
  tags?: string[];
}

export interface WorkExperience {
  position: string;
  company_name: string;
  company_url?: string;
  company_logo: string;
  date_start: string;
  date_end?: string; // Optional: if omitted, displays "Present"
  summary: string;
  tags?: string[];
}

export interface Language {
  name: string;
  percent: number;
}

export const profile: Profile = {
  name: "Philipp Petermeier",
  firstName: "Philipp",
  lastName: "Petermeier",
  role: "Software Engineer and Full Stack Developer",
  status: "", // unused, kept for interface compatibility
  avatar: "/media/profile_pic.jpg",
  bio: "Software Engineer and Full Stack Developer based in Berlin. Building software and working with data, mostly around machine learning and complex system modeling.",
  interests: [
    "Data Science and Machine Learning",
    "Reinforcement Learning",
    "Modeling of Processes and Data",
    "Fundamentals and practice of programming",
    "Evolutionary Algorithms",
    "Graphs and Networks",
    "TinyML and Edge Computing",
    "Multi Agent Systems",
    "Human-AI Collaboration",
    "AI policy, safety and ethics",
    "Game and Decision Theory",
    "Market and Mechanism Design",
    "Open Science and Reproduceability",
    "Macro and Political Economy",
    "Industrial Policy",
    "Philosophy of Science and Language",
    "Climate Change and Policy"
  ],
  profiles: [
    {
      icon: "mdi:github",
      url: "https://github.com/PPetermeier",
      label: "Find me here on GitHub"
    },
    {
      icon: "mdi:twitter",
      url: "https://x.com/infornomics",
      label: "Find me on Twitter"
    },
    {
      icon: "mdi:linkedin",
      url: "https://www.linkedin.com/in/philipp-petermeier-6ba469229",
      label: "Find me on LinkedIn"
    },
    {
      icon: "simple-icons:substack",
      url: "https://infornomics.substack.com/",
      label: "Find me on Substack"
    },
    {
      icon: "mdi:email",
      url: "mailto:p.petermeier@posteo.de",
      label: "Send me a mail"
    },
  ],
  skills: [
    {
      name: "Python Ecosystem",
      items: [
        {
          name: "Python",
          description: "",
          percent: 100,
          icon: "simple-icons:python"
        },
        {
          name: "Jupyter Notebooks",
          description: "",
          percent: 90,
          icon: "simple-icons:jupyter"
        },
        {
          name: "matplotlib & Seaborn",
          description: "",
          percent: 100,
          icon: "simple-icons:plotly"
        },
        {
          name: "shiny & plotly",
          description: "",
          percent: 90,
          icon: "simple-icons:r"
        },
        
        {
          name: "numpy",
          description: "",
          percent: 100,
          icon: "simple-icons:numpy"
        },
        {
          name: "pandas",
          description: "",
          percent: 100,
          icon: "simple-icons:pandas"
        },
        {
          name: "keras",
          description: "",
          percent: 70,
          icon: "simple-icons:keras"
        },
        {
          name: "pytorch",
          description: "",
          percent: 90,
          icon: "simple-icons:pytorch"
        },        {
          name: "scikit-learn",
          description: "",
          percent: 90,
          icon: "simple-icons:scikitlearn"
        }
      ]
    },
    {
      name: "Other Technologies",
      items: [
        {
          name: "JS/TS",
          description: "",
          percent: 75,
          icon: "simple-icons:typescript"
        },
        {
          name: "R",
          description: "",
          percent: 50,
          icon: "simple-icons:r"
        },
        {
          name: "Julia",
          description: "",
          percent: 60,
          icon: "simple-icons:julia"
        },
        {
          name: "Git & CI/CD",
          description: "",
          percent: 90,
          icon: "simple-icons:git"
        },
                {
          name: "SQL",
          description: "",
          percent: 100,
          icon: "mdi:database"
        },
        {
          name: "MongoDB",
          description: "",
          percent: 80,
          icon: "simple-icons:mongodb"
        },
        {
          name: "Markdown & LaTeX",
          description: "",
          percent: 100,
          icon: "simple-icons:latex"
        },
        {
          name: "UML & Architecture",
          description: "",
          percent: 100,
          icon: "mdi:vector-square"
        }
      ]
    }
  ],
  education: [
    {
      area: "B.Sc. in Business Information Systems",
      institution: "Technische Hochschule Mittelhessen",
      company_url: "https://www.thm.de",
      company_logo: "thm",
      date_start: "2018-10-01",
      date_end: "2024-03-31",
      summary: `Final Grade: 2.2 (78%) | 210 CP (7 Semesters)

Thesis: "A Deep Reinforcement Learning Environment for the Limit Orderbook Intraday Electricity Market: Development and efficient Implementation" | Grade: 1,2 (92%)`,
      award: "Winner of Karl-Heinz Lust Innovation Award 2024 (Digital Economy / Industry 4.0 / AI)",
      tags: ["Data Science", "Reinforcement Learning", "Energy Systems", "Python", "Machine Learning", "Data Engineering", "HPC"]
    }
  ],
  work: [ {
      position: "Software Engineer (Founding Team)",
      company_name: "Backwelltech, Berlin, Germany",
      company_url: "https://backwelltechcorp.com",
      company_logo: "",
      date_start: "2024-02-05",
      summary: `First software engineer in Berlin office, working directly with ML specialists to bring research into production. Built the engineering foundation from scratch and took on broad infrastructure and operations responsibilities as the company grew.

- Established development standards where none existed: version control workflows, deployment pipelines, tech stacks, and cloud infrastructure
- Own company-wide technical infrastructure: DNS, API key management, cloud accounts, and system administration
- Built automation tooling for cross-functional teams, enabling marketing and operations to self-serve workflows
- Evaluated and integrated AI-assisted development tools, becoming the team's technical resource for their adoption
- Sole owner of a product initiative from concept through deployment, maintenance, and iteration based on user feedback`,
      tags: ["Full Stack Development", "DevOps", "Cloud Services", "Docker", "Supabase", "n8n"]
    },
    {
      position: "Intern and Working Student",
      company_name: "Fraunhofer IEE, Kassel, Germany",
      company_url: "https://www.iee.fraunhofer.de/en.html",
      company_logo: "iee_logo",
      date_start: "2022-02-01",
      date_end: "2024-03-31",
      summary: `Developed a scientific Python package to implement a reinforcement learning environment for electricity trading.
      Design, implementation and benchmarking of model paradigm fitting data structures and algorithms ensuring optimal runtime performance.
      Took over responsibilities in data modeling, ETL pipeline design, database deployment, and HPC cluster orchestration.`,
    tags: ["Data Science", "Reinforcement Learning", "Energy Systems", "Python", "Machine Learning", "Data Engineering", "HPC"]
      }
  ],
  languages: [
    {
      name: "German",
      percent: 100
    },
    {
      name: "English",
      percent: 100
    }
  ]
};