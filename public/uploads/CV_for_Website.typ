// CV Template - Matching infornomics.de Visual Language
// Typography-first hierarchy with strategic sage green accents
// Option A: Cards sit directly on warm canvas (no outer white box)

#let colors = (
  canvas: rgb("#faf9f7"),      // Warm off-white background (the "wall")
  card: rgb("#ffffff"),         // Pure white content cards
  card-header: rgb("#f8faf8"),  // Very subtle sage tint for header card
  primary: rgb("#6b8e6b"),      // Sage green accents
  primary-light: rgb("#e8ede8"), // Light sage for borders/backgrounds
  text: rgb("#1a1a1a"),         // Body text
  text-muted: rgb("#64748b"),   // Secondary text
  border: rgb("#e5e7eb"),       // Neutral border color
)

// Page setup - warm canvas is the direct background
#set page(
  paper: "a4",
  margin: (
    top: 1.5cm,
    bottom: 1.5cm,
    left: 1.5cm,
    right: 1.5cm,
  ),
  fill: colors.canvas,
)

// Typography matching website
#set text(
  font: "Inter",
  size: 10pt,
  fill: colors.text,
)

// Paragraph spacing
#set par(
  leading: 0.65em,
  justify: true,
)

// Heading styles - using serif font
#let heading-font = "Libertinus Serif"

// Level 1: Section headings with simple underline
#show heading.where(level: 1): it => block(
  width: 100%,
  above: 1.2em,
  below: 0.8em,
  stroke: (bottom: 1pt + colors.primary),
  inset: (bottom: 6pt),
  text(
    font: heading-font,
    size: 15pt, 
    weight: 600,
    fill: colors.primary,
    it.body
  )
)

// Level 2: Subsection headings
#show heading.where(level: 2): it => block(
  above: 1em,
  below: 0.6em,
  text(
    font: heading-font,
    size: 10.5pt,
    weight: 600,
    fill: colors.primary,
    it.body
  )
)

// Content card component - white cards on warm canvas
#let card(content) = block(
  width: 100%,
  fill: white,
  stroke: 0.5pt + colors.border,
  radius: 4pt,
  inset: 14pt,
  below: 10pt,
  content
)

// Experience/Education entry - accepts a dictionary
#let entry(e) = {
  let title = e.at("title", default: "")
  let subtitle = e.at("subtitle", default: "")
  let date = e.at("date", default: "")
  let location = e.at("location", default: "")
  let description = e.at("description", default: "")
  let tags = e.at("tags", default: ())
  card[
    #grid(
      columns: (1fr, auto),
      gutter: 8pt,
      [
        #text(weight: 600, size: 11pt, fill: colors.primary)[#title] \
        #text(size: 9.5pt, fill: colors.text)[#subtitle]
        #if location != "" [
          \ #text(size: 9pt, fill: colors.text-muted, style: "italic")[#location]
        ]
      ],
      align(right + top)[
        #text(size: 9pt, fill: colors.text-muted, weight: 500)[#date]
      ],
    )

    #if description != "" [
      #v(6pt)
      #text(size: 9.5pt)[#description]
    ]

    #if tags.len() > 0 [
      #v(6pt)
      #block(
        {
          for tag in tags [
            #box(
              fill: colors.primary-light,
              inset: (x: 6pt, y: 3pt),
              radius: 3pt,
              text(size: 8pt, fill: colors.primary, weight: 500)[#tag]
            )
            #h(6pt)
          ]
        }
      )
    ]
  ]
}

// Skills grid component
#let skills-grid(skills) = card[
  #grid(
    columns: (1fr, 1fr),
    column-gutter: 16pt,
    row-gutter: 8pt,
    ..skills.map(skill => [
      #text(size: 9.5pt)[#skill]
    ])
  )
]

// Contact info - text with optional clickable link
#let contact-item(label: "", url: none) = {
  box(
    inset: (right: 12pt),
    if url != none {
      link(url, text(size: 9pt, fill: colors.text-muted)[#label])
    } else {
      text(size: 9pt, fill: colors.text-muted)[#label]
    }
  )
}

// Header card - special styling for name/title
// Uses gradient hint background + top accent line (like website hero)
#block(
  width: 100%,
  fill: colors.card-header,  // Subtle sage tint instead of pure white
  stroke: (
    top: 2pt + colors.primary,  // Accent line at top
    left: 0.5pt + colors.border,
    right: 0.5pt + colors.border,
    bottom: 0.5pt + colors.border,
  ),
  radius: 4pt,
  inset: 14pt,
  below: 10pt,
)[
  #align(center)[
    #text(
      font: heading-font,
      size: 24pt,
      weight: 700,
      fill: colors.primary,
    )[Philipp Petermeier]

    #v(4pt)

    #text(
      size: 11pt,
      weight: 500,
      fill: colors.text,
    )[Software & ML Engineer | Full Stack Developer]

    #v(10pt)

    // Contact info - clickable links
    #box(
      inset: (top: 4pt),
      {
        contact-item(label: "p.petermeier@posteo.de", url: "mailto:p.petermeier@posteo.de")
        contact-item(label: "infornomics.de", url: "https://infornomics.de")
        contact-item(label: "linkedin.com/in/philipp-petermeier", url: "https://linkedin.com/in/philipp-petermeier")
        contact-item(label: "github.com/PPetermeier", url: "https://github.com/PPetermeier")
      }
    )
  ]
]

// About / Summary
#heading(level: 1)[About]
#card[
  #text(size: 9.5pt)[
    I'm a Software Engineer and Full Stack Developer, fascinated by systems of all kinds: biological, social, technological. How they work, why they fail, how they solve information flow and how we might design better ones.

   Since my B.Sc., I'm interested in data, models, and software engineering, ranging from data science and machine learning to full stack web development and cloud computing.

   I work best focused on concrete use cases, and making results accessible by building deep solutions to complex problems.
  ]
]

// Experience
#heading(level: 1)[Experience]

#entry((
  title: "Software Engineer (Founding Team)",
  subtitle: "Backwelltech, Berlin, Germany",
  date: "Feb 2025 - Present",
  description: [
    First software engineer in Berlin office, working directly with ML specialists to bring research into production. Built the engineering foundation from scratch and took on broad infrastructure and operations responsibilities as the company grew.

    - Established development standards where none existed: version control workflows, deployment pipelines, tech stacks, and cloud infrastructure
    - Own company-wide technical infrastructure: DNS, API key management, cloud accounts, and system administration
    - Built automation tooling for cross-functional teams, enabling marketing and operations to self-serve workflows
    - Evaluated and integrated AI-assisted development tools, becoming the team's technical resource for their adoption
    - Sole owner of a product initiative from concept through deployment, maintenance, and iteration based on user feedback
  ],
  tags: ("Full Stack Development", "DevOps", "Cloud Services", "Docker", "Supabase", "n8n"),
))

#entry((
  title: "Intern and Working Student",
  subtitle: "Fraunhofer IEE, Kassel, Germany",
  date: "Feb 2022 - Mar 2024",
  description: [
    Developed a scientific Python package to implement a reinforcement learning environment for electricity trading. Design, implementation and benchmarking of model paradigm fitting data structures and algorithms ensuring optimal runtime performance. Took over responsibilities in data modeling, ETL pipeline design, database deployment, and HPC cluster orchestration.
  ],
  tags: ("Data Science", "Reinforcement Learning", "Energy Systems", "Python", "HPC"),
))
#pagebreak(weak: true)
// Education
#heading(level: 1)[Education]

#entry((
  title: "B.SC. in Business Information Systems",
  subtitle: "Technische Hochschule Mittelhessen",
  date: "Oct 2018 - Mar 2024",
  description: [
    *Final Grade:* 2.2 (78%) | 210 CP (7 Semesters)

    *Thesis:* "A Deep Reinforcement Learning Environment for the Limit Orderbook Intraday Electricity Market: Development and efficient Implementation" | Grade: 1.2 (92%)

    *Award:* Winner of Karl-Heinz Lust Innovation Award 2024 (Digital Economy / Industry 4.0 / AI)
  ],
  tags: ("Data Science", "Reinforcement Learning", "Machine Learning", "Data Engineering", "Formal Modeling"),
))

// Technical Skills
#heading(level: 1)[Technical Skills]

#heading(level: 2)[Python Ecosystem]
#skills-grid((
  "Python (Advanced)",
  "PyTorch & Keras",
  "NumPy & Pandas",
  "scikit-learn",
  "Ray",
  "SQLAlchemy & Alembic",
  "Flask, Django, FastAPI",
  "Matplotlib, Seaborn & Plotly",
))

#heading(level: 2)[Other Technologies]
#skills-grid((
  "JavaScript/TypeScript",
  "React & Next.js",
  "PostgreSQL & MongoDB",
  "Git & CI/CD",
  "Systems Architecture",
  "R & Julia",
  "Docker & Cloud Services",
  "HPC & Distributed Computing",
))

// Interests
#heading(level: 1)[Interests]
#card[
  #grid(
    columns: (1fr, 1fr),
    column-gutter: 12pt,
    row-gutter: 6pt,
    ..("Data Science and Machine Learning", "Reinforcement Learning", "Modeling of Processes and Data", "Evolutionary Algorithms", "Graphs and Networks", "Multi-Agent Systems", "Human-AI Collaboration", "AI Policy, Safety and Ethics", "Game and Decision Theory", "Market and Mechanism Design").map(interest => text(size: 9pt)[• #interest])
  )
]

// Languages
#heading(level: 1)[Languages]
#card[
  #grid(
    columns: (1fr, 1fr),
    column-gutter: 16pt,
    [#text(size: 9.5pt, weight: 500)[German] #h(6pt) #text(size: 9pt, fill: colors.text-muted)[Native]],
    [#text(size: 9.5pt, weight: 500)[English] #h(6pt) #text(size: 9pt, fill: colors.text-muted)[Fluent]],
  )
]
