// Everything the home page says lives here, so updating the site is mostly
// editing this file. Layout lives in src/pages/index.astro.
// Source of truth: master CV v09 (2026-08-18). Figures the CV marks as
// unresolved (38% satisfaction, 52% revisit, citation count) are left out.

export const person = {
  name: 'Souvik Mandal',
  headline: 'I build scalable, trustworthy data and AI solutions to real-world problems.',
  roles: ['Researcher', 'Educator', 'Data Scientist', 'Data engineer'],
  summary:
    'I am an academic researcher turned technologist, focused on making education ready for a rapidly changing world by connecting learners, teachers, and technology. I hold a PhD in quantitative behavioral sciences, spent 5+ years in research and teaching at Harvard, and led data engineering and AI architecture for 2 years at an Ed-Tech platform with 65M+ global users.',
  email: 'souvik_mandal@harvard.edu',
  location: 'Boston, MA, USA',
  site: 'https://souvikmandal.info',
};

export type SocialKey = 'linkedin' | 'github' | 'scholar' | 'youtube';

export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/souvik-mandal-phd/' },
  { key: 'github', label: 'GitHub', href: 'https://github.com/Souvik-Mandal-Harvard' },
  { key: 'scholar', label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=6bye0gMAAAAJ' },
  { key: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/channel/UCk1sCggR-UKHIWkkbqUuM-g' },
];

export const whatICareAbout = {
  heading: 'Equitable access and opportunity for…',
  closing: '…through data and AI.',
  // Each label links to the part of the page that backs it up.
  areas: [
    { label: 'Quality Education', line: 'through which learners become thinkers, explorers and problem-solvers.', href: '#work' },
    { label: 'Health', line: 'connecting health requirements with researchers, providers, insurers, pharma and public agencies.', href: '#yogis-bliss' },
    { label: 'Climate Resilience', line: 'protecting ecosystems at risk, connecting communities, researchers, conservation groups, governments and industry.', href: '#climate' },
  ],
};

// Shown at the top of "Selected work": each label links to its case study.
export const workAreas = [
  { label: 'Education Technology', line: 'That serves learners, educators, and policymakers, combining behavioral science, data science, and AI/ML.', href: '#ed-tech' },
  { label: 'Teaching & Training', line: 'Teaching research methods and problem-solving using data and AI/ML. Training educators on effective use of AI.', href: '#course' },
  { label: 'Research', line: 'Focused on learning, decision-making, and cooperation using data science, computer vision, and other AI/ML workflows.', href: '#research' },
  { label: 'AI-native Startups', line: 'Building internal knowledge-enabled, multi-agent, and on-device AI products, now in use by alpha users.', href: '#ventures' },
];

export interface CaseStudy {
  id: string;
  // Shown above the case study; matches a label in workAreas.
  category: string;
  title: string;
  // Vision paragraphs (may contain HTML links), then the experience behind them.
  vision: string[];
  // Optional lead-in and list of who the work serves, then a closing line.
  audiences?: { lead: string; items: { who: string; what: string }[] };
  closing?: string;
  // Items may contain HTML links.
  interests?: { label: string; items: string[] };
  experience?: { label: string; items: string[] };
  projects?: { label: string; items: string[] };
  // Products shown side by side, each with its own skills. Used instead of the shared skills.
  products?: { id: string; name: string; href?: string; body: string; skills: string[] }[];
  // Closes the case study with the selected publications.
  publications?: boolean;
  skills: string[];
  links: { label: string; href: string }[];
  media?: { src: string; poster: string; width: number; height: number; caption: string };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'ed-tech',
    category: 'Education Technology',
    title: 'Interest-driven, interdisciplinary learning for real-world problem-solving',
    vision: [
      'I am a proponent of learning through solving problems and answering questions that learners are interested in. This approach connects knowledge and skills across disciplines, sustains engagement and develops transferable skills, judgment, and agency to tackle unfamiliar problems. This adaptability to novel contexts is especially crucial in this rapidly changing world.',
      'While technology has expanded access to educational content, learning experiences too often remain fragmented into disconnected subjects, with limited opportunities to apply the learning to the interest of the learners. AI grounded in carefully curated educational resources offers an opportunity to organize learning around individual interests and practical problem-solving, connecting foundational knowledge with inquiry and critical thinking. Combining my expertise in behavioral science, pedagogy, data, and AI/ML, I build tools across the education ecosystem - for learners, educators, and policymakers.'
    ],
    experience: {
      label: 'Experience in Ed-Tech',
      items: ['Data Engineer & AI Solutions Architect, <a href="https://www.labxchange.org/">LabXchange</a>, Harvard University · 2023–2025'],
    },
    skills: ['Cognitive Science', 'Curriculum & Instructional Design', 'Interdisciplinary Learning', 'Data Infrastructure & Analytics', 'Generative AI', 'Educator training'],
    links: [],
  },
  {
    id: 'course',
    category: 'Teaching & Training',
    title: 'Learning through solving "your" problems and finding answers to "your" questions',
    vision: [
      'I bring my learning philosophy to my teaching in <a href="/teaching-learning/ls100/">Computational Behavioral Sciences</a>, a course I developed and lead at Harvard University. In this course, students start from their own question about behavior, and learn the research methods, computational thinking, data science and applied AI/ML to answer it, building domain knowledge along the way. All the course matrials including codes are freely available on <a href ="https://github.com/Souvik-Mandal-Harvard/Computational-Behavioral-Sciences_LS100_Harvard">GitHub</a>.',
      'With information and generative AI at everyone’s fingertips, educators can no longer serve just as sources of information. They must teach problem-solving: constructing logic, collaborating, and finding, evaluating and assimilating information. I co-designed and delivered training for about 8,000 educators in India through LabXchange, and I regularly lead workshops on the changing role of educators in the age of AI. I plan to take this hands-on approach to collaborative learning, with teams mixed across countries rather than competing as national blocks.',
    ],
    
    closing: '',
    experience: {
      label: 'Experience in Teaching & Training',
      items: [
        'Course Developer & Project Leader, <a href="/teaching-learning/ls100/">Computational Behavioral Sciences (LS100)</a>, Harvard University · 2020–2022, 2025–present',
        'Co-designed and delivered training program on "Teaching in the Age of AI" for about 8,000 school teachers in India through <a href="https://about.labxchange.org/blog/iisc-master-teacher-trainers">LabXchange</a> · 2024–2025',
        '<a href="https://hmsc.harvard.edu/science-education-partners/">Harvard Science Education Partner </a> · 2022–2024',
        'Teaching Assistant, Harvard University (2018) and Indian Institute of Science (2011–2013)',
      ],
    },
    skills: ['Instructional design', 'Research methods', 'Computer vision', 'Responsible AI', 'Open educational resources', 'Educator training'],
    links: [],
    media: {
      src: '/media/fencing-dashboard.mp4',
      poster: '/media/fencing-dashboard-poster.webp',
      width: 960,
      height: 540,
      caption: 'Pose estimation turned into a fencing analytics dashboard, an example from the course. Shown in slow motion.',
    },
  },
  {
    id: 'research',
    category: 'Research',
    title: 'Understanding behavior across species and scales',
    vision: [
      'Behavior is where biology, experience, and environment meet. I studied how individuals and collectives forage, navigate, remember, learn, make decisions, and cooperate, across wasps, ants, honey bees, and robots.',
      'My approach is quantitative. I pair field and laboratory experiments with computer vision, then analyze the results using statistical modeling, causal inference, and machine learning, including deep learning. I developed <a href="https://github.com/Souvik-Mandal-Harvard/EthoScope_GPU">Ethoscope</a>, a Python pipeline for automated, large-scale extraction of behavior from video, freely available on GitHub for academic use.',
      'At Harvard, I led research teams, line-managing and mentoring 40+ students and project staff, from hiring and performance reviews to tracking work against deadlines and budgets.',
    ],
    interests: {
      label: 'Future research interests',
      items: [
        'Large-scale behavioral science of individual, collective, and cooperative behavior in humans and other social animals',
        'Cognition and learning in the context of education',
        'Behavior in personal and public health',
      ],
    },
    experience: {
      label: 'Experience in Academic Research',
      items: [
        'Postdoctoral Fellow / Research Associate, <a href="https://cbs.fas.harvard.edu/">Center for Brain Science</a> / <a href="https://www.mcb.harvard.edu/">Molecular & Cellular Biology</a>, Harvard University · 2018–2023',
        '<a href="https://brain.harvard.edu/grants/grant/?slug=postdoc-pioneers-grant-program">Harvard Brain Science Initiative Postdoc Pioneers Grant</a>, initiating researcher and grant manager · 2022',
        'Visiting Scientist, <a href="https://www.univ-tlse3.fr/structures-de-recherche/centre-de-recherches-sur-la-cognition-animale">Centre de Recherches sur la Cognition Animale</a>, Université de Toulouse · 2016',
        'Ph.D., Quantitative Behavioral Sciences, <a href="https://www.iisc.ac.in/">Indian Institute of Science</a> · 2009–2017',
        'National winner, EURAXESS science communication competition · 2015',
      ],
    },
    projects: {
      label: 'Data Science Project',
      items: [
        '<em><a id="climate" href="https://github.com/Souvik-Mandal-Harvard/climate-ghgrp-data-science">How credible are corporate climate pledges?</a></em> · 2026. A credibility score for the top 50 U.S. power-sector parent companies, fusing SEC 10-K filings and Net Zero Tracker pledges (scored with a multi-LLM pipeline), EPA GHGRP and CEMS emissions data, and Climate TRACE satellite estimates, explored through an interactive dashboard.',
      ],
    },
    skills: ['Experimental design', 'Statistical modeling', 'Bayesian statistics', 'Causal inference', 'Time-series modeling', 'Computer vision', 'Deep learning', 'HPC', 'Python', 'Research team leadership', 'Line management', 'Data fusion', 'LLM pipelines', 'Remote sensing data', 'Dashboards'],
    links: [{ label: 'Watch a museum video about my research', href: 'https://youtu.be/bPinUt7TmeA' }],
    publications: true,
    media: {
      src: '/media/ant-tracking.mp4',
      poster: '/media/ant-tracking-poster.webp',
      width: 720,
      height: 720,
      caption: 'Automated pose tracking of ants.',
    },
  },
  {
    id: 'ventures',
    category: 'AI-native Startups',
    title: 'Trustworthy AI products, built end to end',
    vision: [
      'AI products that handle personal data, like a career history or a live camera feed, have to earn trust by design, not by promise. I am building two, with co-engineers, both in alpha testing with invited users.',
      '<em>Founder · 2025–present</em>',
    ],
    products: [
      {
        id: 'cviable',
        name: 'CViable',
        body: 'A multi-agent résumé, cover-letter, and mock interview studio, grounded in the user’s career record and tailored to individual jobs. An independent agent verifies every factual claim against its source before export. Users can inspect and edit every prompt steering the system.',
        skills: ['Multi-agent systems', 'Hybrid RAG', 'LLM evaluation', 'Python', 'Django', 'AWS'],
      },
      {
        id: 'yogis-bliss',
        name: 'Yogi’s Bliss',
        href: 'https://yogisbliss.com',
        body: 'A vision-enabled, voice-first conversational AI yoga guide. Real-time pose estimation runs entirely in the browser, so user’s videos never leave their device. An on-device voice loop lets people practice without watching the screen. Safety rules are enforced in code rather than left to the language model.',
        skills: ['Computer vision', 'On-device ML', 'Voice AI', 'Privacy engineering', 'WebGPU', 'Progressive web apps'],
      },
    ],
    skills: [],
    links: [],
  },
];


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
    title: 'Research and Scientific Inquiry',
    hook: 'Turning open questions into testable designs and published evidence.',
    keywords: ['Research design', 'Experimental design', 'Quantitative behavioral science', 'Scientific writing', 'Technical writing', 'Peer review', 'User Analytics'],
  },
  {
    title: 'Data Science and Statistics',
    hook: 'Analysis that support scientific findings and business decisions.',
    keywords: ['Statistical modeling', 'Data preparation','Data mining', 'Causal inference', 'A/B testing', 'Survival analysis', 'Longitudinal analysis', 'Python', 'R', 'SQL', 'Data visualization'],
  },
  {
    title: 'Machine Learning',
    hook: 'Predictive models that are measured, explained, and deployed.',
    keywords: ['Supervised learning', 'Unsupervised learning', 'CNNs, RNNs, GNNs', 'Computer vision', 'Time-series modeling', 'PyTorch', 'TensorFlow', 'scikit-learn', 'MLflow'],
  },
  {
    title: 'Generative AI and Agentic Systems',
    hook: 'LLM and multi-agent systems grounded in real data, with guardrails and evaluation built in.',
    keywords: ['Vector, graph, and hybrid RAG', 'Multi-agent orchestration', 'MCP', 'Fine-tuning (LoRA, QLoRA)', 'Prompt and context engineering', 'Guardrails', 'Evaluation', 'AWS Bedrock'],
  },
  {
    title: 'Data Engineering',
    hook: 'Reliable pipelines and data stores for messy, multimodal data.',
    keywords: ['ETL pipelines', 'Apache Spark', 'Kafka', 'PostgreSQL', 'Vector databases', 'Neo4j', 'Databricks', 'Snowflake', 'dbt', 'AWS', 'GCP', 'Azure'],
  },

  {
    title: 'Software Engineering and DevOps',
    hook: 'From prototype to production, across front end, back end, and cloud.',
    keywords: ['FastAPI', 'Django', 'Flask', 'JavaScript', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Agile', 'AI-assisted development'],
  },
  {
    title: 'Solution Architecture and Technical Leadership',
    hook: 'Setting the technical direction, then building the people, standards, and governance to carry it.',
    keywords: ['Architecture decision records', 'KPI ownership', 'AI strategy advising', 'AI governance', 'Vendor evaluation', 'Executive briefings', 'Code review'],
  },
  {
    title: 'Education Technology and Instructional Design',
    hook: 'Connecting learning design, data, and AI on a platform serving 65M+ users.',
    keywords: ['Instructional design', 'Learning analytics', 'Educator training', 'Curriculum alignment', 'Content recommendation', 'Content quality models',  'Accessibility', 'AI-assisted content creation'],
  },
  {
    title: 'Teaching and Mentoring',
    hook: 'Designing and teaching courses at Harvard and the Indian Institute of Science, and mentoring 40+ students.',
    keywords: ['Student mentoring', 'Course design', 'Backward design', 'Assessment design', 'Research-based learning', 'Digital content development', 'Open educational resources'],
  },
  {
    title: 'Communication and Public Outreach',
    hook: 'Making technical work clear to scientists, leaders, policymakers, and the public.',
    keywords: ['Technical writing', 'Public outreach', 'Stakeholder presentations', 'Fluency in six languages'],
  },
  {
    title: 'Media Production',
    hook: 'Telling stories through film, design, and AI-generated video.',
    keywords: ['Documentary film', 'Screenwriting', 'Music production', 'Adobe suite', 'AI video generation', 'Text-to-speech', 'Instructional media'],
  },
  {
    title: 'Equity and Access in Education',
    hook: 'Keeping learning open through free tutoring, guest lectures, and open courseware.',
    keywords: ['Free tutoring', 'K-12 talks', 'Equitable content design', 'Student fundraising', 'Open courseware'],
  },
];

export const journey = [
  { when: '2004–09', what: 'B.S. & M.S. in Biology', where: 'University of Calcutta', note: 'Specialized in Zoology, Ecology and Biostatistics.' },
  { when: '2009–17', what: 'Ph.D. in quantitative behavioral sciences', where: 'Indian Institute of Science', note: 'Statistical modeling of learning, memory, decision-making during navigation and searching. Mentored by <a href="https://sites.google.com/view/raghavendragadagkar">Raghavendra Gadagkar</a>.'},
  { when: '2016', what: 'Visiting scientist', where: 'CRCA, Université de Toulouse', note: 'Neural and behavioral basis of cooperation in honeybees. Hosted by <a href="https://www.ibps.sorbonne-universite.fr/en/ibps/directory/16013-Martin-Giurfa">Martin Giurfa</a>.' },
  { when: '2018–23', what: 'Postdoctoral fellow', where: 'Center for Brain Scince, Molecular and Cellular Biology, Harvard University', note: 'Developed computer vision and deep leqrning pipelines for investigating behavior in large-scale. Mentored by <a href="https://www.mcb.harvard.edu/directory/venkatesh-murthy/">Venki Murthy</a> and <a = href ="https://www.physics.harvard.edu/people/facpages/mahadevan">L. Mahadevan</a>.' },
  { when: '2020–22 2025-', what: 'Course developer & project leader', where: 'Harvard FAS', note: 'Computational Behavioral Sciences (LS100).' },
  { when: '2023–25', what: 'Data Engineer & AI Solutions Architect', where: 'LabXchange, Harvard University', note: 'Led data and AI/ML strategy for the platform.' },
  { when: '2025–', what: 'Founder', where: 'CViable and Yogi’s Bliss', note: 'Two AI products, in alpha.' },
];

export const beyond = [
  {
    title: 'Visual arts',
    body: 'Trained as a painter, with a six-year diploma in visual arts. My award-winning photographs have appeared in BMC Ecology and Sanctuary Asia, and I was photographer and head of documentary production for the Indian Institute of Science’s Archives and Publications Cell.',
  },
  {
    title: 'Music',
    body: 'A multi-instrumentalist on tabla, guitar, and harmonica, drawn to the neuroscience of music. I have a varied taste, including Indian classical, blues, and classic rock.',
  },
];
