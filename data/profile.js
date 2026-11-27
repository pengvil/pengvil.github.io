const PROFILE = {
  name: "Md. Zahidul Islam Navil",
  role: "AI/ML & Software Engineering",
  photoUrl: "assets/profile/pfp.png",

  cvUrl: "CV.pdf",

  aboutTitle: "About Me",
  aboutText:
    "I'm a B.Sc. Computer Science & Engineering student (Major: Software Engineering) at AIUB maintaining a 3.99/4.00 CGPA (Consecutive Dean's List across all eligible semesters, Expected Jan. 2028), focused on applied AI/ML, TinyML/embedded systems, and full-stack & desktop software engineering. Alongside university, I train in Phitron's AI/ML Expert (Batch 01) & CS Fundamentals (Batch 07) tracks, teach CS at AIUB Course Solution (ACS), and first-authored a 2025 conference paper on quantitative laser–matter analytics.",

  email: "zahidul.islam.navil@gmail.com",
  github: "https://github.com/pengvil",
  linkedin: "https://www.linkedin.com/in/md-zahidul-islam-navil/",

  education: [
    {
      school: "American International University-Bangladesh (AIUB)",
      degree: "B.Sc. in Computer Science & Engineering (Major: Software Engineering)",
      period: "Expected Jan. 2028",
      detail: "CGPA: 3.99 / 4.00 • Consecutive Dean's List Honors"
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
    "AIUB Consecutive Dean's List Honors (All Eligible Semesters — CGPA 3.99 / 4.00)",
    "Cisco IT Essentials",
    "CS Fundamentals Track — Batch 07 (Phitron)"
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
      title: "First Author & Quantitative Analytics Researcher",
      type: "Research",
      period: "2025",
      desc: "First-authored a 2025 conference paper analyzing longitudinal experimental benchmarks (1995–2024) from Optica (OSA) and SPIE to formulate a standardized Laser Precision Index capturing 90% precision, 85% manufacturing efficiency, and 80% biomedical accuracy.",
      tags: ["Quantitative Analytics", "Optica / SPIE", "Research"]
    }
  ],

  skills: [
    {
      name: "Python",
      where: ["Tour de Mars terrain pipeline (Rasterio, NumPy)", "Phitron AI/ML Expert (Batch 01)", "Quantitative Analytics research"],
      how: "Built geospatial raster preprocessing pipelines reprojecting USGS/NASA GeoTIFF elevation data onto equirectangular grids, and implemented ML/data workflows with NumPy, Pandas, and Scikit-Learn."
    },
    {
      name: "AI / ML & TinyML",
      where: ["HandEcho (ESP32-S3 / STM32 TFLM INT8 CNN)", "Phitron AI/ML Expert (Batch 01)"],
      how: "Architecting an INT8 quantized CNN pipeline (96×96 grayscale ROI) via TensorFlow Lite for Microcontrollers with temporal stability filtering; trained in EDA, feature engineering, regression, SVM, ensembles, DL, and CV/NLP."
    },
    {
      name: "C / C++",
      where: ["HandEcho (ESP32-S3 / STM32 Firmware)", "Phitron CS Fundamentals (Batch 07)"],
      how: "Developing embedded C/C++ firmware integrating OV2640 DVP camera DMA capture, TFLM inference, and MAX98357A I2S audio synthesis; mastered DSA, graphs, shortest paths, and dynamic programming in C++."
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
      where: ["Tour de Mars (NASA Space Apps Challenge)", "Portfolio website"],
      how: "Implemented an 8-neighbor Dijkstra pathfinding engine, MarsWalk canvas rendering, GeoTIFF.js terrain parsing, and interactive DOM components."
    },
    {
      name: "Geospatial & Embedded",
      where: ["Tour de Mars (MarsWalk)", "HandEcho (AIUB Microprocessor Capstone)"],
      how: "Integrated NASA/JPL Mars Trek WMTS layers, GeoTIFF.js elevation rasters, and 4-mode Dijkstra EVA routing; designed OV2640 DVP, ESP32-S3/STM32, and MAX98357A I2S hardware interfaces."
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
      title: "HandEcho: TinyML Hand Gesture-to-Speech System",
      desc: "Designing an offline assistive sign-language-to-speech embedded prototype (AIUB Microprocessor Capstone) integrating an OV2640 DVP camera, ESP32-S3/STM32 MCU, MAX98357A I2S amplifier, and an INT8 quantized TFLM CNN targeting ≥92% accuracy and ≤180 ms latency.",
      image: "assets/projects/HandEcho/UI.png",
      tags: ["ESP32-S3 / STM32", "TinyML (TFLM)", "INT8 CNN", "OV2640", "I2S Audio", "C/C++"]
    },
    {
      title: "Water & Sewage Management System (WSMS)",
      desc: "Engineered a 4-role C# Windows Forms desktop application (Admin, Customer, Service Officer, Maintenance Engineer) backed by a 3NF-normalized 10-table Microsoft SQL Server database automating billing, disputes, complaints, connections, and maintenance.",
      image: "assets/projects/WSMS/UI.png",
      github: "https://github.com/pengvil/WASA_2.0",
      tags: ["C#", "Windows Forms", "MS SQL Server (3NF)", "OOP"]
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
