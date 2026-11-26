const PROFILE = {
  name: "Md. Zahidul Islam Navil",
  role: "AI/ML & Software Engineering",
  photoUrl: "assets/profile/pfp.png",

  cvUrl: "CV.pdf",

  aboutTitle: "About Me",
  aboutText:
    "I'm a B.Sc. Computer Science & Engineering student (Major: Software Engineering) at AIUB maintaining a 3.99/4.00 CGPA (Dean's List, Expected Jan. 2028), focused on applied AI/ML, full-stack & desktop software engineering, and autonomous systems. Alongside university, I train in Phitron's AI/ML Expert (Batch 01) & CS Fundamentals (Batch 07) tracks, teach CS to thousands of students at AIUB Course Solution (ACS), and first-authored two 2025 conference papers.",

  email: "zahidul.islam.navil@gmail.com",
  github: "https://github.com/pengvil",
  linkedin: "https://www.linkedin.com/in/md-zahidul-islam-navil/",

  education: [
    {
      school: "American International University-Bangladesh (AIUB)",
      degree: "B.Sc. in Computer Science & Engineering (Major: Software Engineering)",
      period: "Expected Jan. 2028",
      detail: "CGPA: 3.99 / 4.00 • Dean's List Honor"
    },
    {
      school: "Phitron — Technical Training Programs",
      degree: "AI/ML Expert (Batch 01 — Ongoing) & CS Fundamentals (Batch 07 — Completed)",
      period: "2024 — Present",
      detail: "Math for ML, EDA, Supervised/Unsupervised ML, Deep Learning, CV/NLP, C/C++, OOP & DSA"
    },
    {
      school: "St. Joseph Higher Secondary School",
      degree: "Higher Secondary Certificate (HSC), Science",
      period: "2022",
      detail: "GPA: 5.00 / 5.00"
    }
  ],

  certifications: [
    "AIUB Dean's List Honor (CGPA 3.99 / 4.00)",
    "Complete JavaScript Course & Node.js/Express/MongoDB Bootcamp (Udemy)",
    "Web Development Course (Programming Hero)",
    "GitHub Student Developer"
  ],

  experience: [
    {
      title: "CS Instructor & Senior Moderator — AIUB Course Solution (ACS)",
      type: "Teaching & Leadership",
      period: "2024 — Present",
      desc: "Produced 5 structured CS lecture series (including Java OOP1, Data Structures, and Algorithms) on YouTube, reaching 70,000+ views. Serving as Senior Moderator for a 50,000+ member student community, overseeing technical mentorship, academic Q&A, and instructional standards.",
      links: [
        { label: "OOP1 Playlist", url: "https://youtube.com/playlist?list=PLCVg_gjNmHOO_O_XK8Qj8lClldwQ66H-J" },
        { label: "Data Structure Playlist", url: "https://youtube.com/playlist?list=PLCVg_gjNmHOOBGDp_w7Gwh5_1Qik2Kzm9" }
      ],
      tags: ["Java", "OOP", "Data Structures", "Algorithms", "70k+ Views", "50k+ Community"]
    },
    {
      title: "Phitron — AI/ML Expert & CS Fundamentals Trainee",
      type: "Technical Training",
      period: "2024 — Present",
      desc: "Completed CS Fundamentals (Batch 07) covering C/C++, OOP, Trees/Heaps, and Graph/DP algorithms (BFS/DFS, Dijkstra, MST, DSU). Advancing through AI/ML Expert (Batch 01) spanning Math for ML, EDA, Feature Engineering, Supervised & Unsupervised ML, Deep Learning, CV, and NLP.",
      tags: ["Python", "ML / DL", "NLP", "C/C++", "Algorithms"]
    },
    {
      title: "First Author & Applied Computing Researcher",
      type: "Research",
      period: "2025",
      desc: "First-authored two 2025 conference papers — one training a vernacular-first MLP NLP classifier for Bangla/Banglish (91.2% accuracy, 90.1% F1-score) integrated with a zero-knowledge Blockchain reporting ledger, and another formulating a Laser Precision Index across longitudinal Optica/SPIE benchmarks (1995–2024).",
      tags: ["NLP", "Blockchain", "Quantitative Analytics", "Python"]
    }
  ],

  skills: [
    {
      name: "Python",
      where: ["Tour de Mars terrain pipeline (Rasterio, NumPy)", "Phitron AI/ML Expert (Batch 01)", "NLP & Quantitative Analytics research"],
      how: "Built geospatial raster preprocessing pipelines reprojecting USGS/NASA GeoTIFF elevation data onto equirectangular grids, and implemented ML/data workflows with NumPy, Pandas, and Scikit-Learn."
    },
    {
      name: "AI / ML & NLP",
      where: ["Cyber-Safety Vernacular AI Conference Paper (2025)", "Phitron AI/ML Expert (Batch 01)"],
      how: "Trained a vernacular-first Multi-Layer Perceptron (MLP) NLP classifier fine-tuned for Bangla, Banglish, and regional slang achieving 91.2% accuracy and 90.1% F1-score; trained in EDA, feature engineering, regression, SVM, ensembles, DL, and CV/NLP."
    },
    {
      name: "C / C++",
      where: ["Autonomous Line-Following Robot (LFR)", "Phitron CS Fundamentals (Batch 07)"],
      how: "Programmed an Arduino microcontroller in C++ for real-time IR sensor array processing and closed-loop PID motor control; mastered DSA, graphs, shortest paths, and dynamic programming in C++."
    },
    {
      name: "C# & .NET",
      where: ["Water & Sewage Management System (WSMS)"],
      how: "Engineered a 4-role Windows Forms (.NET) desktop application (Admin, Customer, Service Officer, Maintenance Engineer) with clean separation across UI, business logic, and data-access layers."
    },
    {
      name: "SQL Server (3NF)",
      where: ["Water & Sewage Management System (WSMS)"],
      how: "Designed a 3NF-normalized 10-table Microsoft SQL Server relational database automating meter-reading billing, dispute handling, complaint tracking, new connections, and maintenance workflows."
    },
    {
      name: "Java",
      where: ["Library Management System", "ACS OOP1 Video Series", "Data Structures coursework"],
      how: "Architected a modular object-oriented Java application for book inventory indexing, borrower management, and structured transaction logging; taught Java OOP to students via ACS lectures."
    },
    {
      name: "JavaScript",
      where: ["Tour de Mars (NASA Space Apps Challenge)", "Portfolio website", "Complete JS Course (Udemy)"],
      how: "Implemented an 8-neighbor Dijkstra pathfinding engine, MarsWalk canvas rendering, GeoTIFF.js terrain parsing, and interactive DOM components."
    },
    {
      name: "Web & Backend",
      where: ["Node.js/Express/MongoDB Bootcamp (Udemy)", "Programming Hero Web Dev", "Tour de Mars"],
      how: "Trained and built responsive UIs and RESTful APIs using React.js, Node.js, Express.js, MongoDB, HTML5 Canvas, and Vercel deployments."
    },
    {
      name: "Geospatial & Robotics",
      where: ["Tour de Mars (MarsWalk)", "Autonomous Line-Following Robot (LFR)"],
      how: "Integrated NASA/JPL Mars Trek WMTS layers, GeoTIFF.js elevation rasters, and 4-mode Dijkstra EVA routing; calibrated IR sensors and tuned PID control loops for autonomous navigation."
    },
    {
      name: "Git & GitHub",
      where: ["Tour de Mars", "WSMS", "Library Management System", "GitHub Pages Portfolio"],
      how: "Managed team collaboration, branching, repository architecture, and continuous Vercel/GitHub Pages deployments across projects."
    }
  ],

  projects: [
    {
      title: "Tour de Mars (NASA Space Apps Challenge)",
      desc: "Led a 6-member team (6bit_Larry) to build an interactive Martian EVA mission-planning web app combining live NASA/JPL Mars Trek WMTS layers, a Python/GeoTIFF.js CTX terrain pipeline (5×5 km, 100 m grid), an 8-neighbor Dijkstra router, and an oxygen walkback model.",
      image: "assets/projects/Tour_de_Mars/UI.png",
      live: "https://tour-de-mars.vercel.app/",
      github: "https://github.com/pengvil/Tour-de-Mars",
      tags: ["Python", "Rasterio", "NumPy", "JavaScript", "GeoTIFF.js", "NASA WMTS"]
    },
    {
      title: "Water & Sewage Management System (WSMS)",
      desc: "Engineered a 4-role C# Windows Forms desktop application (Admin, Customer, Service Officer, Maintenance Engineer) backed by a 3NF-normalized 10-table Microsoft SQL Server database automating billing, disputes, complaints, connections, and maintenance.",
      image: "assets/projects/WSMS/UI.png",
      github: "https://github.com/pengvil/WASA_2.0",
      tags: ["C#", "Windows Forms", "MS SQL Server (3NF)", "OOP"]
    },
    {
      title: "Autonomous Line-Following Robot (LFR)",
      desc: "Programmed an Arduino microcontroller in C++ for real-time IR sensor array processing and closed-loop PID motor control for autonomous high-precision path tracking.",
      image: "assets/projects/Line_Follower_Robot/The_Bot.png",
      tags: ["C++", "Arduino", "PID Control", "IR Sensors"]
    },
    {
      title: "Library Management System",
      desc: "Architected a modular object-oriented Java application for high-volume book inventory indexing, borrower management, and structured transaction logging.",
      image: "assets/projects/Library_Management_System/UI.png",
      github: "https://github.com/pengvil/Library-Management-System",
      tags: ["Java", "OOP", "Git"]
    }
  ],

  research: [
    {
      title: "Cyber-Safety Transformation via Vernacular AI & Blockchain (2025)",
      desc: "First-authored conference paper training a vernacular-first MLP NLP classifier for Bangla, Banglish, and regional slang (91.2% accuracy, 90.1% F1-score), paired with a zero-knowledge Blockchain reporting ledger reducing triage time from 3–5 days to 1–2 minutes.",
      paper:
        "assets/papers/Transforming Cyber Safety in Bangladesh through Vernacular AI and Blockchain to Ensure a Harassment Free Space for Women and Children.pdf",
      repo: "#",
      tags: ["First Author", "2025", "NLP (MLP)", "Blockchain"]
    },
    {
      title: "Laser–Matter Interaction Studies for Precision Manufacturing (2025)",
      desc: "First-authored conference paper analyzing longitudinal experimental benchmarks (1995–2024) from Optica (OSA) and SPIE to formulate a standardized Laser Precision Index capturing 90% precision, 85% manufacturing efficiency, and 80% biomedical accuracy.",
      paper:
        "assets/papers/Laser–Matter Interaction Studies for Precision Manufacturing and Biomedical Applications in Bangladesh.pdf",
      repo: "#",
      tags: ["First Author", "2025", "Data Analytics", "Optica / SPIE"]
    }
  ]
};

window.PROFILE = PROFILE;
