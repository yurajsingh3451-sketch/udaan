export interface Course {
  id: string;
  title: string;
  targetYear: string;
  category: string;
  duration: string;
  mode: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  badge: string;
  tagline: string;
  overview: string;
  features: string[];
  facultyLead: string;
  nextBatch: string;
}

export interface Batch {
  id: string;
  name: string;
  courseId: string;
  courseName: string;
  startDate: string;
  timing: string;
  mode: string;
  duration: string;
  seatsTotal: number;
  seatsFilled: number;
  faculty: string;
  location: string;
  status: string;
}

export interface Ranker {
  name: string;
  rank: string;
  year: string;
  service: string;
  course: string;
  quote: string;
  attempt: string;
  optional: string;
  photo: string;
}

export interface FacultyMember {
  name: string;
  role: string;
  subject: string;
  experience: string;
  qualifications: string;
  bio: string;
  photo: string;
}

export interface CurrentAffairsArticle {
  id: string;
  title: string;
  category: string;
  paper: string;
  date: string;
  readTime: string;
  summary: string;
  keyTakeaways: string[];
}

export interface StudyResource {
  id: string;
  title: string;
  category: string;
  type: string;
  pages: string;
  downloads: string;
  isPopular: boolean;
}

export interface CampusEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  speaker: string;
  type: string;
  seatsLeft: number;
}

export const COURSES: Course[] = [
  {
    id: "gs-foundation-2026",
    title: "SAMARTH: 2-Year GS Foundation (Prelims + Mains + Interview)",
    targetYear: "UPSC CSE 2026 / 2027",
    category: "Foundation",
    duration: "24 Months",
    mode: "Offline (Raipur) + Hybrid Live",
    price: 135000,
    originalPrice: 165000,
    rating: 4.9,
    reviewsCount: 342,
    badge: "Most Comprehensive",
    tagline: "From NCERT fundamentals to advanced Mains answer craft and personality test.",
    overview: "SAMARTH is UDAAN’s flagship integrated classroom program curated for undergraduate college students and early starters. It covers 100% of the UPSC syllabus with 1,200+ hours of structured lectures, daily answer evaluation, and 1-on-1 bureaucrat mentorship.",
    features: [
      "1,200+ Hours of Live & Interactive Classroom Sessions",
      "Complimentary Complete Prelims & Mains Test Series (65+ Tests)",
      "Daily 2 Mains Questions Evaluation with Model Answers",
      "Dedicated 1-on-1 Personal Mentor (ex-UPSC Interviewees)",
      "Comprehensive 22-Booklet Hardcopy Study Material",
      "Air-conditioned Library & Study Lounge Access at Raipur Campus"
    ],
    facultyLead: "Dr. Vikramaditya Sharma (Polity & Governance)",
    nextBatch: "June 15, 2025"
  },
  {
    id: "gs-target-2025",
    title: "LAKSHYA: 1-Year Intensive GS Integrated Program",
    targetYear: "UPSC CSE 2025 / 2026",
    category: "Prelims & Mains",
    duration: "12 Months",
    mode: "Offline Classroom & Live Interactive",
    price: 88000,
    originalPrice: 110000,
    rating: 4.85,
    reviewsCount: 512,
    badge: "Bestseller",
    tagline: "High-yield, time-optimized integrated preparation for working professionals & graduates.",
    overview: "LAKSHYA is designed for dedicated full-time aspirants targeting the upcoming civil services examination. Sharp syllabus coverage, micro-topic breakdown, and weekly revision cycles ensure nothing is left to chance.",
    features: [
      "750+ Hours of Intensive Integrated Syllabus Coverage",
      "Weekly Prelims CSAT & GS Simulator Tests with All India Ranking",
      "Bi-weekly Mains Answer Writing Workshops",
      "Monthly 360° Current Affairs Compendiums (Pratibimb)",
      "Exclusive Ethics (GS-4) Case Study Masterclasses",
      "Personalized Performance Tracker via UDAAN Student Portal"
    ],
    facultyLead: "Prof. Arvind Trivedi (Modern History & Culture)",
    nextBatch: "July 01, 2025"
  },
  {
    id: "prelims-booster",
    title: "GATI: UPSC Prelims 2025 High-Yield Accelerator",
    targetYear: "UPSC CSE 2025",
    category: "Prelims",
    duration: "4 Months",
    mode: "Online Live + Recorded Access",
    price: 24000,
    originalPrice: 32000,
    rating: 4.8,
    reviewsCount: 220,
    badge: "Crash Course",
    tagline: "Elimination techniques, high-frequency static themes & 2 years current affairs mapping.",
    overview: "A surgical 120-day revision course that sharpens MCQ problem-solving intuition, clears CSAT bottlenecks, and covers 1,500+ high-probability core UPSC themes.",
    features: [
      "250+ High-Yield Theme Revision Sessions",
      "CSAT Logical Reasoning & Quant Masterclass Series",
      "35 Prelims Simulator Tests with AI Performance Diagnostics",
      "Budget, Economic Survey & Year-End Govt Schemes Dossier",
      "Doubt resolution within 2 hours on Student Portal"
    ],
    facultyLead: "Er. Shashank Shekhar (Economy & CSAT)",
    nextBatch: "May 20, 2025"
  },
  {
    id: "mains-nirman",
    title: "NIRMAN: Mains Answer Writing & GS 1-4 Enrichment",
    targetYear: "UPSC CSE 2025",
    category: "Mains",
    duration: "5 Months",
    mode: "Hybrid / Evaluated",
    price: 36000,
    originalPrice: 45000,
    rating: 4.9,
    reviewsCount: 184,
    badge: "Score Booster",
    tagline: "Turn knowledge into high-scoring answer presentation, diagrams & case citations.",
    overview: "Structured to uplift your Mains score from 380 to 450+ across GS 1-4 and Essay. Every paper evaluated within 48 hours by top scorers.",
    features: [
      "16 Full-Length Mains Simulated Papers with 48h Turnaround",
      "Direct 1-on-1 Feedback call with Senior Evaluators",
      "Ready-to-use Intro/Conclusion Banks & Flowchart Templates",
      "Ethics Case Studies & Essay Structure Frameworks",
      "Value Addition Booklets with Recent Supreme Court Judgments"
    ],
    facultyLead: "Meenakshi Sundaram (Sociology & GS-2)",
    nextBatch: "June 05, 2025"
  },
  {
    id: "optional-psir",
    title: "PSIR Optional: Comprehensive Master Program",
    targetYear: "UPSC CSE 2025 / 2026",
    category: "Optional",
    duration: "5.5 Months",
    mode: "Offline & Live Online",
    price: 42000,
    originalPrice: 50000,
    rating: 4.95,
    reviewsCount: 156,
    badge: "Optional Special",
    tagline: "Complete Paper 1 & 2 coverage with Western Political Thought and IR dynamics.",
    overview: "Political Science & International Relations taught through contemporary geopolitical case studies, scholar citations, and comprehensive test series.",
    features: [
      "300+ Hours of Detailed Conceptual Lectures",
      "12 Optional Tests with Line-by-Line Critique",
      "Scholar Quote Handbooks & Model Thinker Maps",
      "Weekly Geopolitics & Foreign Affairs Current Linkages"
    ],
    facultyLead: "Dr. Vikramaditya Sharma (Ph.D., JNU)",
    nextBatch: "July 10, 2025"
  },
  {
    id: "test-series-abhyas",
    title: "ABHYAS: All India Prelims + Mains Test Series 2025",
    targetYear: "UPSC CSE 2025",
    category: "Test Series",
    duration: "8 Months",
    mode: "Online + Offline Centers",
    price: 18500,
    originalPrice: 24000,
    rating: 4.9,
    reviewsCount: 890,
    badge: "Simulation",
    tagline: "Real exam environment with All-India rank benchmarking & detailed video solutions.",
    overview: "Over 45 GS + CSAT tests matching UPSC pattern, difficulty and unpredictability.",
    features: [
      "30 GS Sectional & Full Mock Tests",
      "12 CSAT Speed & Accuracy Tests",
      "Microscopic AI Analytics on Speed vs Accuracy",
      "Video Discussion of every question by Faculty Leads"
    ],
    facultyLead: "UDAAN Evaluation Board",
    nextBatch: "Instant Access / Rolling"
  }
];

export const BATCHES: Batch[] = [
  {
    id: "BAT-2025-A1",
    name: "Samarth Foundation Batch - Morning Alpha",
    courseId: "gs-foundation-2026",
    courseName: "SAMARTH: 2-Year GS Foundation",
    startDate: "15 June 2025",
    timing: "08:00 AM - 11:30 AM",
    mode: "Offline Classroom (Raipur)",
    duration: "24 Months",
    seatsTotal: 60,
    seatsFilled: 48,
    faculty: "Dr. Vikramaditya Sharma & Team",
    location: "Raipur Civil Lines Campus, Floor 3",
    status: "Filling Fast"
  },
  {
    id: "BAT-2025-A2",
    name: "Lakshya Integrated Batch - Evening Phoenix",
    courseId: "gs-target-2025",
    courseName: "LAKSHYA: 1-Year Intensive GS",
    startDate: "01 July 2025",
    timing: "04:30 PM - 08:00 PM",
    mode: "Offline + Hybrid Live Stream",
    duration: "12 Months",
    seatsTotal: 50,
    seatsFilled: 39,
    faculty: "Prof. Arvind Trivedi & Er. Shashank Shekhar",
    location: "Raipur Civil Lines Campus, Auditorium A",
    status: "Admissions Open"
  },
  {
    id: "BAT-2025-P1",
    name: "Gati Prelims Crash Accelerator - Weekend Elite",
    courseId: "prelims-booster",
    courseName: "GATI: Prelims 2025 Accelerator",
    startDate: "20 May 2025",
    timing: "10:00 AM - 02:30 PM (Sat/Sun)",
    mode: "Interactive Live Online",
    duration: "4 Months",
    seatsTotal: 100,
    seatsFilled: 82,
    faculty: "Er. Shashank Shekhar & R. K. Verma",
    location: "UDAAN EdTech Live Portal",
    status: "Few Seats Left"
  },
  {
    id: "BAT-2025-M1",
    name: "Nirman Mains Answer Writing Cohort 04",
    courseId: "mains-nirman",
    courseName: "NIRMAN: Mains Answer Writing",
    startDate: "05 June 2025",
    timing: "02:00 PM - 04:30 PM",
    mode: "Hybrid / Classroom",
    duration: "5 Months",
    seatsTotal: 40,
    seatsFilled: 29,
    faculty: "Meenakshi Sundaram & Guest Officers",
    location: "Raipur Campus - Evaluation Block",
    status: "Admissions Open"
  }
];

export const RANKERS: Ranker[] = [
  {
    name: "Ananya Sharma",
    rank: "AIR 27",
    year: "UPSC CSE 2024",
    service: "IAS (Allotted CG Cadre)",
    course: "SAMARTH 2-Year Foundation + Abhyas Test Series",
    quote: "The personalized mentor sessions at UDAAN Raipur transformed my Mains answers from descriptive notes into high-scoring analytical responses.",
    attempt: "2nd Attempt",
    optional: "PSIR",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Rohan Verma",
    rank: "AIR 64",
    year: "UPSC CSE 2024",
    service: "IPS (Indian Police Service)",
    course: "LAKSHYA 1-Year Integrated & Mentorship",
    quote: "UDAAN’s test series simulated real UPSC pressure. The faculty took time to evaluate every error in my GS-3 economy and ethics papers.",
    attempt: "1st Attempt",
    optional: "Sociology",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Priya Sahu",
    rank: "AIR 118",
    year: "UPSC CSE 2023",
    service: "IFS (Indian Foreign Service)",
    course: "2-Year Classroom Program Raipur",
    quote: "Being from Chhattisgarh, having such high-quality national level mentorship in Raipur saved me the hassle and expense of relocating to Delhi.",
    attempt: "2nd Attempt",
    optional: "Geography",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Aditya Jain",
    rank: "AIR 203",
    year: "UPSC CSE 2023",
    service: "IRS (Income Tax)",
    course: "NIRMAN Mains Answer Writing & CSAT Booster",
    quote: "CSAT and Ethics were my weak links. The focused guidance from Er. Shashank sir helped me clear the cutoff with flying colors.",
    attempt: "3rd Attempt",
    optional: "Commerce & Accountancy",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    name: "Dr. Vikramaditya Sharma",
    role: "Senior Director & Lead Faculty",
    subject: "Indian Polity, Governance & PSIR Optional",
    experience: "14+ Years",
    qualifications: "Ph.D. in International Law, Former Civil Services Mentor",
    bio: "Renowned across central India for simplifying constitutional complexities and Supreme Court landmarks for UPSC aspirants.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Prof. Arvind Trivedi",
    role: "Academic Dean",
    subject: "Modern Indian History, Art & Culture",
    experience: "16+ Years",
    qualifications: "M.Phil. History (DU), Ex-Consultant NCERT Curriculum",
    bio: "Brings historical events to life with chronological linkage, visual maps, and direct UPSC Mains trend analysis.",
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Er. Shashank Shekhar",
    role: "Head of Quantitative & Economic Aptitude",
    subject: "Indian Economy, CSAT & Data Analysis",
    experience: "9+ Years",
    qualifications: "B.Tech (IIT Kharagpur), 3 UPSC Mains Qualified",
    bio: "Master of simplifying macroeconomics concepts, fiscal policy nuances, and high-speed CSAT mental arithmetic tricks.",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Meenakshi Sundaram",
    role: "Faculty & Lead Evaluator",
    subject: "Sociology Optional, Ethics & Essay",
    experience: "11+ Years",
    qualifications: "M.A. Sociology (JNU), UPSC Interviewee",
    bio: "Specialist in ethics case-study frameworks, emotional quotient calibration, and high-impact essay structure crafting.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Dr. Rajeshwar Patel",
    role: "Senior Faculty",
    subject: "Geography, Environment & Disaster Management",
    experience: "12+ Years",
    qualifications: "Ph.D. Physical Geography, Research Fellow",
    bio: "Focuses on geo-spatial mapping, climatology dynamics, and current environmental conventions relevant to Prelims.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Siddharth Nambiar",
    role: "Director of Current Affairs & Editor-in-Chief",
    subject: "International Relations, Internal Security & Science & Tech",
    experience: "8+ Years",
    qualifications: "Post-Graduate in Defense Studies, Ex-Senior Journalist",
    bio: "Curates UDAAN's daily editorial breakdown and monthly PRATIBIMB current affairs dossiers with razor-sharp relevance.",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400"
  }
];

export const CURRENT_AFFAIRS_ARTICLES: CurrentAffairsArticle[] = [
  {
    id: "ca-101",
    title: "Supreme Court's Verdict on Sub-Classification of SCs/STs: Constitutional Analysis",
    category: "Polity & Governance",
    paper: "GS Paper 2",
    date: "Today, May 14, 2025",
    readTime: "6 min read",
    summary: "Examines Article 14, Article 15(4), Article 16(4) and the doctrine of affirmative action following the 7-judge Constitution bench landmark judgment.",
    keyTakeaways: [
      "Analysis of E.V. Chinnaiah vs State of AP (2004) reconsideration",
      "Application of the 'Creamy Layer' principle to Scheduled Castes",
      "Empirical state data mandate for sub-categorization"
    ]
  },
  {
    id: "ca-102",
    title: "India’s Central Bank Digital Currency (CBDC-R): Cross-Border Settlement Prospects",
    category: "Economy",
    paper: "GS Paper 3",
    date: "May 13, 2025",
    readTime: "5 min read",
    summary: "How the Digital Rupee integration with UPI and international payment rails promises to lower transaction friction and strengthen rupee internationalization.",
    keyTakeaways: [
      "Programmable money concepts for targeted fertilizer/DBT subsidies",
      "De-dollarization trends in bilateral energy trades",
      "Cybersecurity and monetary velocity considerations for RBI"
    ]
  },
  {
    id: "ca-103",
    title: "Critical Minerals Partnership & India’s Clean Energy Supply Chain Resilience",
    category: "Environment & Tech",
    paper: "GS Paper 3",
    date: "May 12, 2025",
    readTime: "7 min read",
    summary: "Strategic exploration of Lithium in Katghora (Chhattisgarh) and rare earth elements processing under the Critical Minerals Mission 2030.",
    keyTakeaways: [
      "Geopolitical vulnerability in processing supply chains",
      "Role of KABIL (Khanij Bidesh India Ltd) in overseas asset acquisition",
      "Environmental impact mitigation during open-cast mining"
    ]
  }
];

export const STUDY_RESOURCES: StudyResource[] = [
  {
    id: "res-1",
    title: "Modern Indian History (1757-1947): Comprehensive Revision Mindmaps",
    category: "History",
    type: "PDF Mindmap",
    pages: "48 Pages",
    downloads: "3,890+",
    isPopular: true
  },
  {
    id: "res-2",
    title: "Indian Polity: Constitutional Articles & Amendments Compendium 2025",
    category: "Polity",
    type: "Digital Notes",
    pages: "92 Pages",
    downloads: "5,420+",
    isPopular: true
  },
  {
    id: "res-3",
    title: "Union Budget & Economic Survey: 100 High-Yield MCQs with Explanations",
    category: "Economy",
    type: "Question Bank",
    pages: "64 Pages",
    downloads: "4,120+",
    isPopular: false
  },
  {
    id: "res-4",
    title: "UPSC 10-Year Prelims PYQ Subject-wise Segregated (2014-2024) with Answer Keys",
    category: "PYQ",
    type: "Solved Papers",
    pages: "180 Pages",
    downloads: "8,940+",
    isPopular: true
  },
  {
    id: "res-5",
    title: "Ethics GS-4: 50 Real Case Studies with Civil Service Dilemma Frameworks",
    category: "Ethics",
    type: "Casebook",
    pages: "110 Pages",
    downloads: "2,980+",
    isPopular: false
  }
];

export const EVENTS_DATA: CampusEvent[] = [
  {
    id: "evt-01",
    title: "UPSC 2026 Mega Strategy & Civil Services Orientation Seminar",
    date: "Sunday, June 01, 2025",
    time: "10:30 AM - 01:30 PM",
    venue: "UDAAN Main Auditorium, Civil Lines, Raipur (Also Streamed Live)",
    speaker: "Dr. Vikramaditya Sharma & AIR-27 Ananya Sharma (IAS)",
    type: "Free Seminar",
    seatsLeft: 45
  },
  {
    id: "evt-02",
    title: "U-SAT 2025: All Chhattisgarh UPSC Talent Search & Scholarship Test",
    date: "Sunday, June 08, 2025",
    time: "11:00 AM - 01:00 PM",
    venue: "Raipur, Bilaspur, Durg-Bhilai Exam Centers",
    speaker: "UDAAN Academic Board",
    type: "Scholarship Test",
    seatsLeft: 190
  },
  {
    id: "evt-03",
    title: "Masterclass: Conquering CSAT Quantitative & Logical Aptitude",
    date: "Saturday, June 14, 2025",
    time: "04:00 PM - 07:00 PM",
    venue: "Classroom Block B, Raipur Campus",
    speaker: "Er. Shashank Shekhar (IIT KGP)",
    type: "Workshop",
    seatsLeft: 30
  }
];
