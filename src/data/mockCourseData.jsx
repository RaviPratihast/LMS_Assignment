const courses = [
  {
    id: "math",
    name: "Mathematics",
    description:
      "Comprehensive mathematics course covering algebra, geometry, and calculus",
    chapters: [
      {
        id: "math-1",
        title: "Chapter 1: Algebra Basics",
        completed: true,
        topics: ["Linear Equations", "Quadratic Equations", "Polynomials"],
      },
      {
        id: "math-2",
        title: "Chapter 2: Geometry Fundamentals",
        completed: true,
        topics: ["Triangles", "Circles", "Polygons"],
      },
      {
        id: "math-3",
        title: "Chapter 3: Introduction to Calculus",
        completed: false,
        topics: ["Limits", "Derivatives", "Integrals"],
      },
    ],
  },
  {
    id: "science",
    name: "Science",
    description: "Explore physics, chemistry, and biology concepts",
    chapters: [
      {
        id: "science-1",
        title: "Chapter 1: Physics",
        completed: true,
        topics: ["Motion", "Forces", "Energy"],
      },
      {
        id: "science-2",
        title: "Chapter 2: Chemistry",
        completed: false,
        topics: ["Atoms", "Chemical Bonds", "Reactions"],
      },
      {
        id: "science-3",
        title: "Chapter 3: Biology",
        completed: false,
        topics: ["Cells", "Genetics", "Evolution"],
      },
    ],
  },
  {
    id: "hindi",
    name: "Hindi",
    description: "Learn Hindi literature and grammar",
    chapters: [
      {
        id: "hindi-1",
        title: "Chapter 1: Hindi Grammar",
        completed: true,
        topics: ["Sandhi", "Samas", "Vakya Rachna"],
      },
      {
        id: "hindi-2",
        title: "Chapter 2: Hindi Poetry",
        completed: false,
        topics: ["Kabir's Dohe", "Tulsidas' Ramcharitmanas"],
      },
      {
        id: "hindi-3",
        title: "Chapter 3: Hindi Prose",
        completed: false,
        topics: ["Munshi Premchand's Stories", "Modern Hindi Essays"],
      },
    ],
  },
  {
    id: "english",
    name: "English",
    description: "Improve English grammar and literature understanding",
    chapters: [
      {
        id: "english-1",
        title: "Chapter 1: Grammar Essentials",
        completed: true,
        topics: ["Parts of Speech", "Tenses", "Active and Passive Voice"],
      },
      {
        id: "english-2",
        title: "Chapter 2: English Poetry",
        completed: true,
        topics: ["William Wordsworth", "Robert Frost"],
      },
      {
        id: "english-3",
        title: "Chapter 3: English Prose",
        completed: false,
        topics: ["Shakespearean Plays", "Modern Short Stories"],
      },
    ],
  },
  {
    id: "social-science",
    name: "Social Science",
    description: "Understand history, geography, and civics",
    chapters: [
      {
        id: "social-1",
        title: "Chapter 1: History",
        completed: true,
        topics: ["Ancient Civilizations", "Medieval Period", "Modern Era"],
      },
      {
        id: "social-2",
        title: "Chapter 2: Geography",
        completed: false,
        topics: ["Physical Features", "Climate", "Resources"],
      },
      {
        id: "social-3",
        title: "Chapter 3: Civics",
        completed: false,
        topics: ["Government Systems", "Constitution", "Elections"],
      },
    ],
  },
];

export { courses };
