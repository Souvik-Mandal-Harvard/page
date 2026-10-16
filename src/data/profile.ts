// Everything the home page says lives here, so updating the site is mostly
// editing this file. Layout lives in src/pages/index.astro.
// Source of truth: master CV v09 (2026-08-18). Figures the CV marks as
// unresolved (38% satisfaction, 52% revisit, citation count) are left out.

export const person = {
  name: 'Souvik Mandal',
  headline: 'I build scalable, trustworthy data and AI solutions addressing real-world problems.',
  roles: ['Researcher', 'Educator', 'Data Scientist', 'Data engineer'],
  summary:
    'I bring a scientist’s rigor to every system I build, shaped by a PhD in quantitative behavioral sciences, five years of research at Harvard, and two years leading data and generative-AI work at <a href="https://www.labxchange.org/">LabXchange</a>.',
  email: 'drsouvikmandal@gmail.com',
  location: 'Boston, MA',
  site: 'https://souvikmandal.info',
};

export type SocialKey = 'linkedin' | 'github' | 'scholar' | 'youtube';

export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/souvik-mandal-phd/' },
  { key: 'github', label: 'GitHub', href: 'https://github.com/Souvik-Mandal-Harvard' },
  { key: 'scholar', label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=6bye0gMAAAAJ' },
  { key: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/channel/UCk1sCggR-UKHIWkkbqUuM-g' },
];

export const mission = {
  heading: 'Accessible education that turns learners into problem-solvers',
  groups: [
    { who: 'Students', what: 'Teaching my Harvard course, and learning from them.' },
    { who: 'Educators', what: 'Training them to use data and AI well.' },
    { who: 'Administrators & policymakers', what: 'Turning data into strategy.' },
  ],
  // Each field links to the case study that backs it up.
  alsoOpenTo: [
    { label: 'Equitable opportunity', href: '#ventures' },
    { label: 'Public health', href: '#ventures' },
    { label: 'Climate', href: '#climate' },
  ],
};

export interface CaseStudy {
  id: string;
  title: string;
  context: string;
  problem: string;
  approach: string;
  outcome: string;
  skills: string[];
  links: { label: string; href: string }[];
  media?: { src: string; poster: string; width: number; height: number; caption: string };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'labxchange',
    title: 'Data and generative AI for a global learning platform',
    context: 'LabXchange, Harvard University · Data Engineer & AI Solutions Architect, 2023–2025',
    problem:
      'A free science-learning platform with 32,000+ assets across text, video, audio, images and virtual labs, and no existing machine-learning function to build on.',
    approach:
      'Started LabXchange’s AI/ML work as the sole practitioner, then trained engineers into it. Architected multi-agent LLM workflows for semantic search, recommendation and content alignment, with fine-tuned models, custom RAG pipelines, and an evaluation and safety pipeline tracking retrieval quality, hallucination rate, latency, toxicity and drift. Owned 10+ production pipelines processing 100,000–500,000 rows a day, reporting to the CTO, faculty and managing director.',
    outcome:
      'Automated ingestion from 100+ partner sites and YouTube channels cut manual handling of video content by about 80%. Co-authored LabXchange’s responsible-AI policies, and led the platform’s expansion in India, including training for about 8,000 educators.',
    skills: ['Multi-agent LLMs', 'RAG', 'LLM evaluation', 'Data engineering', 'AI governance', 'Stakeholder leadership'],
    links: [{ label: 'LabXchange', href: 'https://www.labxchange.org/' }],
  },
  {
    id: 'ventures',
    title: 'Trustworthy AI products, built end to end',
    context: 'Founder & engineer · 2025–present · in alpha testing',
    problem: 'AI products that handle personal data, like a career history or a live camera feed, have to earn trust by design, not by promise.',
    approach:
      'CViable is a résumé and cover-letter studio run by 11 specialised agents. Hybrid retrieval (pgvector and BM25) is restricted to the user’s own documents, and an independent audit agent checks every claim against the source before export. Yogi’s Bliss is a voice-first yoga guide: real-time pose estimation and speech run entirely in the browser (MediaPipe, ONNX Runtime Web, WebGPU, Whisper), so camera frames are never uploaded or stored.',
    outcome:
      'Both are in testing with invited alpha users, each with co-engineers. Everything from architecture and AWS deployment to evaluation harnesses and CI-gated test suites is owned in-house.',
    skills: ['Agentic AI', 'Hybrid RAG', 'On-device ML', 'Privacy engineering', 'AWS', 'Full stack'],
    links: [],
  },
  {
    id: 'course',
    title: 'An open course in computational behavioral science',
    context: 'Harvard FAS · Course developer & project leader, 2020–22 and 2025–present',
    problem:
      'Students with compelling questions about behavior often have little or no programming experience, which puts modern measurement tools out of reach.',
    approach:
      'Designed LS100, a four-credit research-based course blending experimental design, data science, computer vision and AI/ML, using backward design and built to accessibility standards. Wrote an open-source guide to building Raspberry Pi computer-vision cameras for pose estimation with MediaPipe and YOLO, and built responsible AI and reproducibility into the assignments.',
    outcome:
      'Every guide, notebook and dataset is free and open. A small, retrospective comparison of cohorts from before and after generative AI (preliminary, unpublished) was reported to Harvard’s Office of Undergraduate Education and reshaped how the course assesses research framing.',
    skills: ['Instructional design', 'Computer vision', 'Python', 'Responsible AI', 'Education research'],
    links: [
      { label: 'Course website', href: '/teaching-learning/ls100/' },
      {
        label: 'Course on GitHub',
        href: 'https://github.com/Souvik-Mandal-Harvard/Computational-Behavioral-Sciences_LS100_Harvard',
      },
    ],
    media: {
      src: '/media/rowing-tracking.mp4',
      poster: '/media/rowing-tracking-poster.webp',
      width: 400,
      height: 214,
      caption: 'Pose estimation on a rowing machine, an example from the course.',
    },
  },
  {
    id: 'behavior-tracking',
    title: 'Teaching computers to watch behavior',
    context: 'Harvard Center for Brain Science · Postdoctoral fellow, 2018–2023',
    problem:
      'Studying collective behavior at scale meant hours of manual video annotation: slow, hard to reproduce and impossible to scale.',
    approach:
      'Built deep-learning pipelines, with CNNs for computer vision and GNNs for interaction networks, to automate data collection and analysis, deployed on cloud and HPC clusters. Applied Bayesian statistics, causal inference and time-series models, and released open-source Python packages for behavioral analysis.',
    outcome:
      'Received the Harvard Brain Science Initiative Postdoc Pioneers Grant (2022) as the initiating researcher, for a project in an area new to the host lab. Joint first author of an eLife paper on ant and robot collectives. Mentored and line-managed 40+ students and project staff.',
    skills: ['Computer vision', 'Deep learning', 'HPC', 'Bayesian statistics', 'Line management'],
    links: [
      { label: 'ES_GPU on GitHub', href: 'https://github.com/Souvik-Mandal-Harvard/ES_GPU' },
      { label: 'eLife paper', href: 'https://elifesciences.org/articles/79638' },
    ],
    media: {
      src: '/media/ant-tracking.mp4',
      poster: '/media/ant-tracking-poster.webp',
      width: 720,
      height: 720,
      caption: 'Automated pose tracking of ants, shown at 4× speed. Each colour is one ant.',
    },
  },
  {
    id: 'climate',
    title: 'How credible are corporate climate pledges?',
    context: 'Independent data-science project · 2026',
    problem: 'Power companies publish climate pledges, but checking them against what they actually emit means stitching together incompatible public datasets.',
    approach:
      'Fused SEC 10-K filings and Net Zero Tracker pledges (scored with a multi-LLM pipeline), EPA GHGRP and CEMS emissions data, and Climate TRACE satellite estimates for the top 50 U.S. power-sector parent companies.',
    outcome: 'A single, decomposable credibility score per company, explored through a self-contained interactive dashboard.',
    skills: ['Data fusion', 'LLM pipelines', 'Remote sensing data', 'Dashboards'],
    links: [{ label: 'Code on GitHub', href: 'https://github.com/Souvik-Mandal-Harvard/climate-ghgrp-data-science' }],
  },
];

export const publicationsSummary = '10 peer-reviewed papers, including PNAS, eLife and Proceedings of the Royal Society B.';

export const publications = [
  {
    cite: 'Ganga Prasath S*, Mandal S*, Giardina F*, et al. (2022)',
    title: 'Dynamics of cooperative excavation in ant and robot collectives',
    venue: 'eLife',
    href: 'https://elifesciences.org/articles/79638',
  },
  {
    cite: 'Mandal S, Brahma A (2019)',
    title: 'Getting older, getting smarter: ontogeny of the foraging behaviour in the tropical social wasp Ropalidia marginata',
    venue: 'Journal of Experimental Biology',
    href: 'https://doi.org/10.1242/jeb.199844',
  },
  {
    cite: 'Mandal S (2018)',
    title: 'How do animals find their way back home? A brief overview of homing behavior with special reference to social Hymenoptera',
    venue: 'Insectes Sociaux',
    href: 'https://doi.org/10.1007/s00040-018-0647-2',
  },
  {
    cite: 'Nouvian M, Mandal S, et al. (2018)',
    title: 'Cooperative defence operates by social modulation of biogenic amine levels in the honey bee brain',
    venue: 'Proceedings of the Royal Society B',
    href: 'https://doi.org/10.1098/rspb.2017.2653',
  },
  {
    cite: 'Brahma A, Mandal S, Gadagkar R (2018)',
    title: 'Emergence of cooperation and division of labor in the primitively eusocial wasp Ropalidia marginata',
    venue: 'PNAS',
    href: 'https://doi.org/10.1073/pnas.1714006115',
  },
];

export const skills = [
  {
    skill: 'Generative AI & LLM systems',
    proof: 'Multi-agent LLM workflows over 32,000+ learning assets, plus an 11-agent product with hybrid RAG, a grounding audit and an evaluation harness.',
    fields: ['AI product teams', 'Ed-tech', 'Knowledge management'],
  },
  {
    skill: 'Data engineering & analytics',
    proof: '10+ production pipelines at 100,000–500,000 rows a day, terabyte-scale data services, 30+ statistical reports and 10+ live dashboards supporting platform decisions.',
    fields: ['Any data-driven team', 'Ed-tech', 'Biotech'],
  },
  {
    skill: 'Computer vision & machine learning',
    proof: 'CNN and GNN behavior pipelines on HPC, in-browser pose estimation with WebGPU, and the judgment to ship a classical model when it beats a generative one.',
    fields: ['Health tech', 'Robotics', 'Sports & fitness', 'Agritech'],
  },
  {
    skill: 'Responsible AI & governance',
    proof: 'Co-authored LabXchange’s responsible-AI policies, sat on its AI ethics committee and data governance board, and owned an ~80-seat enterprise OpenAI deployment.',
    fields: ['Regulated industries', 'Enterprise IT', 'Public sector'],
  },
  {
    skill: 'Research & experiment design',
    proof: 'Research since 2007 and 10 peer-reviewed papers. Ran a mixed-methods study across the USA, Kenya and India, with ~250 interview and focus-group participants.',
    fields: ['UX research', 'Product analytics', 'Biotech', 'Policy'],
  },
  {
    skill: 'Teaching, leadership & communication',
    proof: 'A Harvard course since 2020, ~8,000 educators trained, 40+ students line-managed, and regular briefings to the CTO and faculty. FameLab national finalist.',
    fields: ['Learning & development', 'Consulting', 'Developer relations'],
  },
];

export const toolbox = [
  'Python', 'R', 'SQL', 'PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'pandas',
  'PostgreSQL + pgvector', 'Spark', 'Databricks', 'AWS', 'GCP', 'Docker', 'GitHub Actions',
  'Django', 'FastAPI', 'Anthropic Claude', 'OpenAI', 'Hugging Face', 'MediaPipe', 'ONNX Runtime',
];

export const journey = [
  { when: '2007–09', what: 'B.Sc. & Master’s in Biology', where: 'University of Calcutta', note: 'Zoology, with ecology and biostatistics.' },
  { when: '2009–17', what: 'PhD, quantitative behavioral sciences', where: 'Indian Institute of Science, with Raghavendra Gadagkar', note: 'Statistical modeling of learning, memory, decision-making and cooperation in social wasps.' },
  { when: '2016', what: 'Visiting scientist', where: 'CRCA, Université de Toulouse', note: 'Neural and behavioral basis of cooperation in honeybees.' },
  { when: '2018–23', what: 'Postdoctoral fellow', where: 'Harvard University', note: 'Computer vision and AI for collective behavior and decision-making.' },
  { when: '2020–', what: 'Course developer & project leader', where: 'Harvard FAS', note: 'Computational Behavioral Sciences (LS100).' },
  { when: '2023–25', what: 'Data Engineer & AI Solutions Architect', where: 'LabXchange, Harvard University', note: 'Led data and AI/ML strategy for the platform.' },
  { when: '2025–', what: 'Founder & engineer', where: 'CViable and Yogi’s Bliss', note: 'Two AI products, in alpha.' },
];

export const beyond = [
  {
    title: 'Photography',
    body: 'Featured in Sanctuary Asia (2005) and BMC Ecology (2014), and photographer for the Indian Institute of Science’s Archives and Publications Cell.',
  },
  {
    title: 'Film',
    body: 'Led documentary production for the IISc Archives and Publications Cell, and seminar video production for its Centre for Contemporary Studies.',
  },
  {
    title: 'Painting & tabla',
    body: 'A six-year diploma in visual arts (painting) and a diploma in tabla percussion.',
  },
  {
    title: 'Science for everyone',
    body: 'Associated Scientist with Harvard Science Education Partners (2022–24). National winner of the EURAXESS science communication competition.',
    link: { label: 'Watch a museum video about my research', href: 'https://youtu.be/bPinUt7TmeA' },
  },
  {
    title: 'Languages',
    body: 'Fluent in English, Bangla, Hindi, Urdu, Punjabi and Bhojpuri, with working Kannada and Nepali.',
  },
  {
    title: 'Community',
    body: 'As convener of the IISc Students’ Council, coordinated 11+ committees and 35 elected members serving 5,000+ students.',
  },
];
