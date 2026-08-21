// All content below is sourced directly from Kotha Sai Sathvika's resume.
// Nothing here is invented — if a field isn't in the resume, it's left out.

export const profile = {
  name: 'Kotha Sai Sathvika',
  tagline: 'Computer Science Engineering student building at the intersection of XR, interaction design, and AI.',
  intro:
    "I'm a CS Engineering student with a strong analytical and communication foundation, working across Python, Unity 3D, and Virtual Reality development. I'm drawn to Artificial Intelligence and to building practical, working solutions for real-world problems — whether that means a VR training environment or a multi-agent AI system.",
  location: 'Visakhapatnam, India',
  email: 'sathvika.kotha155@gmail.com',
  linkedin: 'https://linkedin.com/in/sathvikakotha15',
  linkedinLabel: 'linkedin.com/in/sathvikakotha15',
  github: 'https://github.com/sath15',
  githubLabel: 'github.com/sath15',
}

export const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Gandhi Institute of Technology and Management',
    location: 'Visakhapatnam, India',
    period: '2023 – 2027',
    detail: 'CGPA: 9.37',
  },
  {
    degree: 'Senior Secondary (Class XII)',
    institution: 'Sri Chaitanya Jr. College',
    location: 'Visakhapatnam, India',
    period: '2021 – 2023',
    detail: 'Grade: 97.4%',
  },
  {
    degree: 'Secondary (Class X)',
    institution: 'Sri Chaitanya Techno School',
    location: 'Visakhapatnam, India',
    period: '2020 – 2021',
    detail: 'Grade: 99.67%',
  },
]

export type Project = {
  code: string
  domain: string
  title: string
  tools: string[]
  problem: string
  approach: string
  design?: string
  implementation: string
  result?: string
  features: string[]
}

export const projects: Project[] = [
  {
    code: 'VR-01',
    domain: 'Virtual Reality',
    title: 'Japanese Temple Treasure Hunt (VR)',
    tools: ['Unity', 'C#', 'VR SDK', 'XR / OpenXR'],
    problem:
      'Build an immersive VR experience that gives players a reason to explore and interact with a themed environment rather than just look around it.',
    approach:
      'Designed the experience as a treasure hunt set inside a Japanese temple, using progression through mini-games as the core interaction loop.',
    design:
      'Structured the environment and pacing around three interactive mini-games that players must complete in sequence to unlock the final treasure, giving the space a clear goal-driven flow.',
    implementation:
      'Built end-to-end in Unity with C#, using a VR SDK (XR / OpenXR) to handle immersive input and interaction inside the temple environment.',
    result: 'A complete, playable VR treasure hunt with three mini-games gating progression to a final reward.',
    features: [
      'Japanese temple environment built for VR exploration',
      'Three sequential interactive mini-games',
      'Progression system gating the final treasure',
      'OpenXR-based immersive interaction',
    ],
  },
  {
    code: 'MR-01',
    domain: 'Mixed Reality',
    title: 'Mixed Reality Battlefield Simulation',
    tools: ['Unity', 'C#', 'Mixed Reality / XR'],
    problem:
      'Create a training-style simulation where combat scenarios feel responsive and grounded in the mixed reality space around the user.',
    approach:
      'Focused on immersive environment design and simulation mechanics rather than a purely visual demo, aiming at a tactical training experience.',
    design:
      'Designed interactive combat scenarios with real-time user interaction as the central mechanic, so the environment reacts to player actions as they happen.',
    implementation: 'Developed in Unity with C#, targeting mixed reality / XR interaction.',
    features: [
      'Interactive combat scenarios',
      'Real-time user interaction',
      'Immersive environment design',
      'Tactical training-oriented simulation mechanics',
    ],
  },
  {
    code: 'AI-01',
    domain: 'Artificial Intelligence',
    title: 'AI Crop Advisory System',
    tools: ['Python', 'Gradio', 'Faster-Whisper', 'Sentence Transformers', 'FAISS', 'OpenWeatherMap API', 'gTTS'],
    problem:
      'Farmers need agricultural guidance in their own language, in a format that does not require reading or typing.',
    approach:
      'Built a voice-first system so farmers can ask questions in Telugu by speaking, and receive answers back as both text and speech.',
    design:
      'Composed the system as a multi-agent pipeline, splitting the problem into speech recognition, translation, weather retrieval, semantic search, and advisory generation as distinct stages.',
    implementation:
      'Used Faster-Whisper for speech recognition, Sentence Transformers and FAISS for semantic search, the OpenWeatherMap API for live weather data, and gTTS to speak responses back, all wired together behind a Gradio interface.',
    result: 'A working voice-based advisory system that takes a spoken Telugu query and returns a personalized recommendation in text and speech.',
    features: [
      'Voice queries in Telugu via Faster-Whisper',
      'Multi-agent pipeline: recognition → translation → retrieval → generation',
      'Semantic search over agricultural knowledge with FAISS + Sentence Transformers',
      'Live weather data via OpenWeatherMap API',
      'Spoken responses generated with gTTS',
    ],
  },
]

export const designFocusPoints = [
  {
    title: 'Immersive environment design',
    detail:
      'Designed the spatial layout and pacing of the Mixed Reality Battlefield Simulation and the Japanese Temple VR environment, shaping how a user moves through and reads each space.',
  },
  {
    title: 'Interaction & progression design',
    detail:
      'Structured the Japanese Temple Treasure Hunt around three sequential mini-games, using progression itself as the core interaction mechanic that paces the experience.',
  },
  {
    title: 'Real-time interaction design',
    detail:
      'Built combat scenarios in the battlefield simulation around real-time user interaction, so the mixed reality environment responds directly to player actions.',
  },
  {
    title: 'Explaining complex systems clearly',
    detail:
      'As Subject Matter Expert at Chitti, simplified complex immersive technology, cryptography, and network security concepts into structured, well-organized learning materials — a habit of thinking about how information should be presented to be understood.',
  },
]

export const skills = [
  {
    category: 'Programming',
    items: ['Python', 'C', 'JavaScript', 'SQL'],
  },
  {
    category: 'AI & Machine Learning',
    items: ['Generative AI', 'RAG', 'Multi-Agent Systems', 'FAISS', 'Sentence Transformers'],
  },
  {
    category: 'XR / VR & Game Development',
    items: ['Unity 3D', 'C#', 'OpenXR', 'Mixed Reality'],
  },
  {
    category: 'Development',
    items: ['Data Structures & Algorithms', 'OOP', 'REST APIs', 'HTML', 'CSS'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Excel'],
  },
]

export const internship = {
  title: 'Simulation of Network Automation Using EVE-NG and NetBox',
  organization: 'Defence Research and Development Organisation (DRDO) — Research Centre Imarat (RCI)',
  location: 'Hyderabad, India',
  period: 'May 2026 – Jun 2026',
  points: [
    'Designed and implemented a virtual enterprise network using EVE-NG and Cisco Catalyst 9000v switches with VLAN segmentation and Layer-3 switching.',
    'Deployed NetBox for centralized network documentation and IP address management (IPAM).',
    'Validated connectivity using ping tests and Wireshark analysis.',
  ],
}

export const organizationRoles = [
  {
    role: 'Subject Matter Expert',
    organization: 'Chitti',
    location: 'Visakhapatnam, India',
    period: 'Aug 2025 – Apr 2026',
    points: [
      'Prepared short notes, key concept summaries, and important question sets covering Augmented and Virtual Reality, and Cryptography and Network Security.',
      'Simplified complex immersive technology concepts through structured, well-organized materials.',
    ],
  },
  {
    role: 'Documentation Lead',
    organization: 'Badminton Club, GITAM',
    location: 'Visakhapatnam, India',
    period: 'Jul 2024 – Aug 2025',
    points: [
      'Coordinated tournament documentation, managing registrations and participant data.',
      'Recorded and updated match results to ensure accuracy and transparency.',
    ],
  },
]

export const certifications = [
  'Google AI Essentials',
  'NPTEL: Programming in Java',
  'Work Smarter with Microsoft Excel',
  'Unity Pathways and Badges',
  'Generative AI: Prompt Engineering Basics',
]

export const achievements = ['Shortlisted for SIH 2025 (Smart India Hackathon) — University Level']
