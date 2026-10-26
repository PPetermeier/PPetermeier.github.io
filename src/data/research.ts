export const sparProject = {
  id: 'spar-cost-trajectories',
  path: '/projects/technology-cost-trajectories/',
  pageTitle: 'AI Technology Cost Trajectories — Philipp Petermeier',
  description: 'Philipp Petermeier’s ongoing SPAR research on historical technology costs and performance, technological progress, and the economics of AI.',
  updated: '2026-10-26',
  updatedLabel: '26 October 2026',
  title: 'Mapping Cost Trajectories of AI-Adjacent Technologies',
  programme: 'SPAR',
  period: 'Fall 2026',
  status: 'Ongoing',
  mentor: 'Isaak Mengesha',
  url: 'https://sparai.org/projects/f26/recbF3sOupRLiKHzf/',
  summary: 'I’m participating in Mapping Cost Trajectories of AI-Adjacent Technologies, investigating how technology costs and performance evolve and what that means for AI’s development and diffusion.',
} as const;

export const saigeProject = {
  id: 'saige-ai-decisions',
  path: '/projects/ai-decision-making/',
  pageTitle: 'AI Decision-Making & Career Compass — Philipp Petermeier',
  description: 'Philipp Petermeier’s Safe AI Germany project on decisions under uncertainty about AI, with Career Compass, a project report, and presentation material.',
  updated: '2026-10-26',
  updatedLabel: '26 October 2026',
  title: 'Economic Decision-Making Under Deep Uncertainty About AI’s Trajectory',
  programme: 'Safe AI Germany',
  period: 'April–September 2026',
  status: 'Completed',
  mentor: 'Pavel Kocourek',
  url: 'https://safeaigermany.org/projects-spring26/pavel2',
  summary: 'From April to September 2026, I explored economic decision-making under uncertainty about AI’s future. The project produced an interactive career-decision tool, a published report, and a conference presentation.',
  report: {
    id: 'saige-report',
    title: 'Economic Decision-making in AIs long shadow',
    date: '4 October 2026',
    datetime: '2026-10-04',
    url: 'https://infornomics.substack.com/p/economic-decision-making-in-ais-long',
  },
  app: {
    title: 'Career Compass (beta)',
    url: 'https://careercompass.safeaigermany.org',
  },
  presentation: {
    id: 'efais-2026',
    title: 'Safe AI Germany project presentation',
    event: 'European Frontier AI Safety Day',
    date: '5 September 2026',
    datetime: '2026-09-05',
    url: 'https://safeaigermany.org/efais2026/',
  },
} as const;

export type ResearchProject = typeof sparProject | typeof saigeProject;
