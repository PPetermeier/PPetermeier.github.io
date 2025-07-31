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
}

export interface WorkExperience {
  position: string;
  company_name: string;
  company_url?: string;
  company_logo: string;
  date_start: string;
  date_end: string;
  summary: string;
}

export interface Language {
  name: string;
  percent: number;
}

export const profile: Profile = {
  name: "Philipp Petermeier",
  firstName: "Philipp",
  lastName: "Petermeier",
  role: "Seeker",
  status: "🔍",
  avatar: "/media/icon.png",
  bio: `I have a **B.S. in Business Information Systems** with a focus on *Data Science* and *Data Engineering* specialising in *Reinforcement Learning*. 
I'm interested in data and models related to energy systems and the green transition, bioinformatics and materials science. 
In my spare time I am amateurishly dabbling in climate change and policy as well as macro- and political economy, though not exclusively.`,
  interests: [
    "Data Science & Machine Learning",
    "Reinforcement Learning",
    "Modeling of Processes & Data",
    "Climate Change & -Policy",
    "Macro- & Political Economy",
    "Industrial Policy",
    "Game & Decisions Theory",
    "Market & Mechanism Design",
    "Open Science & Reproduceability"
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
    {
      icon: "mdi:file-document",
      url: "/uploads/CV_for_Website.pdf",
      label: "Download my CV"
    }
  ],
  skills: [
    {
      name: "Python",
      items: [
        {
          name: "Python",
          description: "",
          percent: 90,
          icon: "simple-icons:python"
        },
        {
          name: "numpy",
          description: "",
          percent: 70,
          icon: "simple-icons:numpy"
        },
        {
          name: "pandas",
          description: "",
          percent: 80,
          icon: "simple-icons:pandas"
        },
        {
          name: "scikit-learn",
          description: "",
          percent: 70,
          icon: "simple-icons:scikitlearn"
        },
        {
          name: "keras",
          description: "",
          percent: 55,
          icon: "simple-icons:keras"
        },
        {
          name: "matplotlib & Seaborn",
          description: "",
          percent: 80,
          icon: "simple-icons:plotly"
        },
        {
          name: "Jupyter Notebooks",
          description: "",
          percent: 70,
          icon: "simple-icons:jupyter"
        }
      ]
    },
    {
      name: "Other",
      items: [
        {
          name: "SQL",
          description: "",
          percent: 40,
          icon: "mdi:database"
        },
        {
          name: "MongoDB",
          description: "",
          percent: 80,
          icon: "simple-icons:mongodb"
        },
        {
          name: "R",
          description: "",
          percent: 30,
          icon: "simple-icons:r"
        },
        {
          name: "Julia",
          description: "",
          percent: 45,
          icon: "simple-icons:julia"
        },
        {
          name: "Git & CI/CD",
          description: "",
          percent: 65,
          icon: "simple-icons:git"
        },
        {
          name: "Markdown & LaTeX",
          description: "",
          percent: 85,
          icon: "simple-icons:latex"
        },
        {
          name: "UML & Architecture",
          description: "",
          percent: 85,
          icon: "mdi:vector-square"
        }
      ]
    }
  ],
  education: [
    {
      area: "BA in Business Information Systems",
      institution: "Technische Hochschule Mittelhessen",
      company_url: "https://www.thm.de",
      company_logo: "thm",
      date_start: "2018-10-01",
      date_end: "2024-03-31",
      summary: `Final Grade: 2.2 (78%) | 210 CP (7 Semesters)

Thesis: "A Deep Reinforcement Learning Environment for the Limit Orderbook Intraday Electricity Market: Development and efficient Implementation" | Grade: 1,2 (92%)

Winner the Karl-Heinz Lust Innovation Award 2024 in the area Digital Economy / Industry 4.0 / AI. Awarded by the foundation for applied Research, Innovation and Transfer Mittelhessen

Elective modules:
- Introduction to Machine Learning
- Predictive Analytics with Python
- Introduction to Decision and Game Theory
- Introduction to Julia`
    }
  ],
  work: [
    {
      position: "Intern and Working Student",
      company_name: "Fraunhofer IEE",
      company_url: "https://www.iee.fraunhofer.de/en.html",
      company_logo: "iee_logo",
      date_start: "2022-02-01",
      date_end: "2024-03-31",
      summary: `Developed a scientific Python package to implement a reinforcement learning environment for electricity trading. This included:

- Design and implementation
- Benchmarking and adapting the development process to optimise runtime performance
- Modelling the appropriate data structure
- Setting up the required MongoDB
- Designing, building and deploying the ETL-Pipeline
- Orchestrate initial experiments using Ray on an on-premises HPC cluster to ensure runtime performance
- Participate in the writing of a paper documenting initial results`
    }
  ],
  languages: [
    {
      name: "🇩🇪 German",
      percent: 100
    },
    {
      name: "🇬🇧 English",
      percent: 90
    }
  ]
};