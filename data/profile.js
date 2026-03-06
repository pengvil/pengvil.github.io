const PROFILE = {
  name: "Md. Zahidul Islam Navil",
  role: "Software Developer",
  photoUrl: "assets/profile/navil_main.png",

  cvUrl: "CV.pdf",

  aboutTitle: "About Me",
  aboutText:
    "I'm a CSE student at AIUB focused on building real-world software projects, exploring AI/ML (NLP), and robotics. I enjoy clean UI, practical engineering, and research-driven problem solving.",

  email: "zinavilofficial@gmail.com",
  github: "https://github.com/pengvil",
  linkedin: "https://www.linkedin.com/in/md-zahidul-islam-navil/",

  experience: [
    {
      title: "Self-Directed Learning — YouTube & Online Resources",
      type: "Learning",
      period: "2022 — Present",
      desc: "Continuously learning through YouTube channels and online tutorials covering web development, algorithms, AI/ML concepts, and system design. Key channels include Traversy Media, Fireship, and CS Dojo.",
      tags: ["Web Dev", "AI/ML", "Algorithms"]
    },
    {
      title: "BSc in Computer Science & Engineering",
      type: "Education",
      period: "2022 — Present",
      desc: "Studying at American International University-Bangladesh (AIUB). Coursework covers data structures, OOP, computer networks, and software engineering. Active in project-based learning and research.",
      tags: ["AIUB", "CSE", "Research"]
    },
    {
      title: "Independent Research Contributor",
      type: "Research",
      period: "2023 — Present",
      desc: "Co-authored two research papers on vernacular AI for cyber safety in Bangladesh and laser-matter interaction studies for precision manufacturing. Both papers explore applied technology for real-world impact.",
      tags: ["NLP", "Blockchain", "Laser Tech"]
    },
    {
      title: "Open Source & Personal Projects",
      type: "Projects",
      period: "2023 — Present",
      desc: "Built and deployed full-stack and hardware projects independently — including an ecommerce platform (MERN), a Java library management system, and a PID-controlled line-following robot.",
      tags: ["MERN", "Java", "Robotics"]
    }
  ],

  skills: [
    {
      name: "Java",
      where: ["Library Management System", "Data Structures coursework"],
      how: "Implemented OOP concepts (classes, encapsulation), file/data handling, and CRUD-style flows for managing books and borrowers."
    },
    {
      name: "JavaScript",
      where: ["Portfolio website", "Ecommerce Store UI"],
      how: "Used DOM manipulation, dynamic rendering (cards/sections), theme toggle, and event handling for interactive UI."
    },
    {
      name: "React",
      where: ["Ecommerce Store"],
      how: "Built reusable components, handled state for product filtering, and created responsive UI views."
    },
    {
      name: "Node.js",
      where: ["Ecommerce Store"],
      how: "Worked with backend APIs and request/response flow; connected frontend to server endpoints."
    },
    {
      name: "Python",
      where: ["AI/ML exploration", "Automation scripts"],
      how: "Used Python for scripting and experimenting with data/ML workflows (future: add specific notebooks/projects)."
    },
    {
      name: "AI / NLP",
      where: ["Research paper: Cyber Safety in Bangladesh"],
      how: "Explored vernacular NLP idea for detecting/reporting harmful content in Bangla, with a framework design approach."
    },
    {
      name: "Robotics",
      where: ["Line Following Robot"],
      how: "Worked with IR sensors and PID motor control logic for stable line tracking; handled calibration and tuning."
    },
    {
      name: "Git & GitHub",
      where: ["All projects", "Hosting this portfolio"],
      how: "Used version control (commit/push), managed repository structure, and deployed using GitHub Pages."
    }
  ],

  projects: [
    {
      title: "Ecommerce Store",
      desc: "Full stack ecommerce store with login, product filtering and categorized product view.",
      image: "assets/projects/Ecommerce_Store/UI.png",
      live: "https://mern-store-gold.vercel.app/",
      github: "https://mern-store-gold.vercel.app/"
    },
    {
      title: "Library Management System",
      desc: "Java based system for managing books, borrowers and return dates with structured storage.",
      image: "assets/projects/Library_Management_System/UI.png",
      github: "https://github.com/pengvil/Library-Management-System"
    },
    {
      title: "Line Following Robot",
      desc: "Autonomous robot using IR sensors and PID motor control for accurate line tracking.",
      image: "assets/projects/Line_Follower_Robot/The_Bot.png"
    }
  ],

  research: [
    {
      title: "Cyber Safety in Bangladesh using Vernacular AI and Blockchain",
      desc: "Framework combining vernacular NLP and blockchain reporting to ensure a harassment-free digital space.",
      paper:
        "assets/papers/Transforming Cyber Safety in Bangladesh through Vernacular AI and Blockchain to Ensure a Harassment Free Space for Women and Children.pdf",
      repo: "#"
    },
    {
      title: "Laser–Matter Interaction Studies for Precision Manufacturing",
      desc: "Study of laser interaction techniques for biomedical and precision manufacturing applications.",
      paper:
        "assets/papers/Laser–Matter Interaction Studies for Precision Manufacturing and Biomedical Applications in Bangladesh.pdf",
      repo: "#"
    }
  ]
};

window.PROFILE = PROFILE;
