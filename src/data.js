export const featuredPortfolio = [
    {
      id: 1,
      title: "UniRoute - Bus Aggregator",
      img: "assets/uniroute.png",
      description: "Backend system unifying bus travel data in Egypt into a single API. Implemented Clean Architecture & DDD for loose coupling.",
      tech: ["Clean Architecture", "Autofac", "Playwright", "DDD-Patterns", "Hangfire", "Angular", "FuzzySharp"],
      links: [
        { label: "Frontend Repo", url: "https://github.com/ibrahimnazzier/UniRoute-Angular-Project" },
        { label: "Backend Repo", url: "https://github.com/naira-othman-tamer/UniRoute-System-Api/tree/develop" }
      ]
    },
    {
      id: 2,
      title: "Al-Madrasa (LMS)",
      img: "assets/lms.png",
      description: "Learning Management System streamlining academic operations. Designed complex relational schemas for Students, Courses, and Grades.",
      tech: ["ASP.NET Core MVC", "SQL Server", "Identity", "Repository Pattern", "Unit Of Work Pattern"],
      links: [
        { label: "GitHub Repo", url: "https://github.com/Tarek-Ahmed-Helmy/LMS" }
      ]
    },
    {
      id: 3,
      title: "Quiz System API",
      img: "assets/Online-Quiz-System.png",
      description: "Secure exam management API with complex transactional workflows. Managed synchronized User/Profile creation with transactional rollbacks.",
      tech: ["ASP.NET Core API", "EF Core", "JWT", "Background Jobs"],
      links: [
        { label: "GitHub Repo", url: "https://github.com/Mohamed-Fathi-Khalifa/quiz_system" }
      ]
    },
    {
      id: 4,
      title: "HR Management System",
      img: "assets/hr.png",
      description: "Decoupled HR platform for managing employee workflows. Built a dynamic request engine (Submission -> Approval -> Rejection).",
      tech: ["ASP.NET Core MVC", "AutoMapper", "Dependency Injection", "LINQ", "SQL Server", "ASP.NET Core Identity", "Bootstrap", "JavaScript/jQuery"],
      links: [
        { label: "GitHub Repo", url: "https://github.com/fatmazaher134/HR-Management-System" }
      ]
    }
  ];

export const trainingsData = [
  {
    id: 1,
    role: ".NET Full-Stack Development Trainee",
    organization: "Information Technology Institute (ITI)",
    location: "Giza, Egypt",
    period: "July 2025 – Jan 2026",
    description: "Intensive boot camp focused on enterprise-level .NET Core, Angular, and Clean Architecture.",
    tech: ["ASP.NET Core", "Angular", "Clean Architecture", "SQL Server"]
  },
  {
    id: 2,
    role: "Odoo Developer Trainee",
    organization: "ZAD Solutions",
    location: "Giza, Egypt",
    period: "May 2025 – Aug 2025",
    description: "Hands-on training in customizing and deploying scalable ERP solutions using Python and Odoo.",
    tech: ["Python", "Odoo", "ERP"]
  },
  {
    id: 3,
    role: ".NET Full-Stack Development Trainee",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    location: "Smart Village, Egypt",
    period: "Oct. 2024 – Apr. 2025",
    description: "Advanced track covering full-stack .NET web development and scalable architectural patterns.",
    tech: ["ASP.NET Core", "EF Core", "SOLID Principles", "REST APIs"]
  },
  {
    id: 4,
    role: "MEAN-Stack Developer Trainee",
    organization: "National Telecommunication Institute (NTI)",
    location: "Menofia, Egypt",
    period: "Aug. 2024 – Nov. 2024",
    description: "Practical training program focused on building robust web platforms utilizing the MEAN stack.",
    tech: ["MongoDB", "Express.js", "Angular", "Node.js"]
  }
];