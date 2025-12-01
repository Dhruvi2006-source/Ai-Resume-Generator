export const dummyData = [
  {
    _id: "68d2a31a1c44dd38875bb037e",
    userId: "68c180acdf1775dfd02c6d87",

    title: "Alex's Resume",
    createdAt: "2025-01-10T08:25:00.000Z",
    updatedAt: "2025-02-14T12:40:20.000Z",

    // ✅ Fields match form requirements
    personal_info: {
      fullName: "Alex Smith",
      Email: "alex@example.com",
      Phone: "0123456789",
      Address: "NY, USA",
      LinkedIn: "https://www.linkedin.com",
      Website: "https://www.example.com",
      Profession: "Full Stack Developer",
      profileImage: "https://i.pinimg.com/originals/03/d8/db/03d8db5fa74516252ade0c0bc77aeb9e.jpg", 
    },

    summary:
      "Full Stack Developer with strong experience in MERN stack, building scalable web applications and modern UI interfaces.",

    skills: [
      { id: "skill_001", name: "JavaScript" },
      { id: "skill_002", name: "React.js" },
      { id: "skill_003", name: "Node.js" },
      { id: "skill_004", name: "MongoDB" },
      { id: "skill_005", name: "Tailwind CSS" }
    ],

    experience: [
      {
        id: "exp_001",
        company: "TechCorp",
        position: "Full Stack Developer",
        startDate: "2022-01",
        endDate: "2023-12",
        details: [
          "Developed scalable full-stack features using MERN.",
          "Created reusable components and improved overall UI/UX.",
          "Integrated REST APIs and optimized database queries."
        ]
      }
    ],

    education: [
      {
        id: "edu_001",
        degree: "B.Tech Computer Science",
        institution: "NY University",
        startDate: "2018",
        endDate: "2022",
        GPA: "9.8/10.0"
      }
    ],

    projects: [
      {
        id: "proj_001",
        title: "Portfolio Site",
        description: "A personal portfolio website showcasing projects and skills.",
        tech: ["React", "Tailwind"],
        link: "https://github.com/example/project"
      }
    ]
  },

  // -------------------------------------------------------------
  // Resume 2
  // -------------------------------------------------------------

  {
    _id: "78e3b51a2cd4ff56792bb437f",
    userId: "78c190bcaa17f5efc02c6f55",

    title: "Sarah's Resume",
    createdAt: "2024-12-20T10:10:00.000Z",
    updatedAt: "2025-02-10T15:05:00.000Z",

    personal_info: {
      fullName: "Sarah Johnson",
      Email: "sarah@example.com",
      Phone: "+1 9876543210",
      Address: "California, USA",
      LinkedIn: "https://linkedin.com/in/sarah",
      Website: "https://sarah.dev",
      Profession: "Frontend Developer",
      profileImage: "https://i.pinimg.com/474x/9c/bd/74/9cbd744294b488939adc6b861898117a.jpg",
    },

    summary:
      "Frontend Developer specialized in React, UI design, and responsive layouts.",

    skills: [
      { id: "skill_101", name: "HTML" },
      { id: "skill_102", name: "CSS" },
      { id: "skill_103", name: "JavaScript" },
      { id: "skill_104", name: "React.js" }
    ],

    experience: [
      {
        id: "exp_101",
        company: "PixelSoft",
        position: "React Developer",
        startDate: "2021-06",
        endDate: "2023-08",
        details: [
          "Built responsive UI screens using React.",
          "Improved performance & accessibility scores.",
          "Collaborated with backend teams to integrate APIs."
        ]
      }
    ],

    education: [
      {
        id: "edu_101",
        degree: "BCA",
        institution: "California Institute of Tech",
        startDate: "2017",
        endDate: "2020",
        GPA: "9.2/10.0"
      }
    ],

    projects: [
      {
        id: "proj_101",
        title: "E-Commerce UI",
        description: "UI design for an e-commerce web application.",
        tech: ["React", "CSS Modules"],
        link: "https://github.com/example/ecommerce-ui"
      }
    ]
  },

  // -------------------------------------------------------------
  // Resume 3
  // -------------------------------------------------------------

  {
    _id: "99f4d61b1aa2cc99887ab332",
    userId: "78c190bcaa17f5efc02c6f55",

    title: "Michael's Resume",
    createdAt: "2024-11-10T09:00:00.000Z",
    updatedAt: "2025-02-05T13:30:00.000Z",

    personal_info: {
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcz6oIHwco4Fh2psWoxBeiMpxTz3buogZgsw&s" ,
      fullName: "Michael Brown",
      Email: "michael@example.com",
      Phone: "+1 5432109876",
      Address: "Texas, USA",
      LinkedIn: "https://linkedin.com/in/michael",
      Website: "https://michael.dev",
      Profession: "Backend Developer"
    },

    summary:
      "Backend Developer focused on building secure APIs, optimized database systems, and scalable backend architectures.",

    skills: [
      { id: "skill_201", name: "Node.js" },
      { id: "skill_202", name: "Express.js" },
      { id: "skill_203", name: "MongoDB" },
      { id: "skill_204", name: "PostgreSQL" },
      { id: "skill_205", name: "Redis" }
    ],

    experience: [
      {
        id: "exp_201",
        company: "CloudWorks",
        position: "Backend Engineer",
        startDate: "2020-03",
        endDate: "2024-01",
        details: [
          "Designed APIs that handled 2M+ monthly requests.",
          "Worked with Redis and PostgreSQL for high performance.",
          "Implemented authentication and logging systems."
        ]
      }
    ],

    education: [
      {
        id: "edu_201",
        degree: "B.Tech Information Technology",
        institution: "Texas Tech",
        startDate: "2016",
        endDate: "2020",
        GPA: "9.5/10.0"
      }
    ],

    projects: [
      {
        id: "proj_201",
        title: "API Monitoring Tool",
        description: "Backend service for tracking API performance & uptime.",
        tech: ["Node.js", "Express", "Redis"],
        link: "https://github.com/example/api-monitor"
      }
    ]
  }
];
