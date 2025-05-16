// Skills section data
export const skills = [
  { name: "C#", percentage: 90 },
  { name: ".NET Core", percentage: 85 },
  { name: "SQL", percentage: 80 },
  { name: "Entity Framework", percentage: 75 },
  { name: "REST APIs", percentage: 85 }
];

export const competencies = [
  {
    name: "Desenvolvimento Backend",
    description: "Criação de sistemas robustos, APIs RESTful e serviços web escaláveis",
    icon: "code"
  },
  {
    name: "Banco de Dados",
    description: "Modelagem e otimização de bancos de dados relacionais",
    icon: "database"
  },
  {
    name: "Arquitetura de Software",
    description: "Design de sistemas utilizando padrões e práticas modernas",
    icon: "cog"
  },
  {
    name: "Resolução de Problemas",
    description: "Análise e solução de desafios técnicos complexos",
    icon: "bug"
  }
];

export const otherTechnologies = [
  "ASP.NET MVC",
  "LINQ",
  "SQL Server",
  "Git",
  "Azure",
  "Docker",
  "Web APIs",
  "Unit Testing"
];

// Experience section data
export const experiences = [
  {
    title: "Desenvolvedor de Software Backend",
    company: "Tech Company",
    period: "2023 - Atual",
    description: "Desenvolvimento de aplicações backend utilizando C# e .NET Core, implementação de APIs RESTful, integração com bancos de dados SQL Server e otimização de performance.",
    technologies: ["C#", ".NET Core", "SQL", "REST APIs"],
    icon: "briefcase"
  },
  {
    title: "Desenvolvedor .NET",
    company: "Software Solutions",
    period: "2021 - 2022",
    description: "Desenvolvimento e manutenção de sistemas utilizando C# e .NET Framework, implementação de novas funcionalidades e correção de bugs, trabalho com Entity Framework e bancos de dados SQL.",
    technologies: ["C#", ".NET", "Entity Framework", "SQL Server"],
    icon: "code"
  },
  {
    title: "Estágio em Desenvolvimento",
    company: "IT Systems",
    period: "2020 - 2021",
    description: "Suporte no desenvolvimento de aplicações web, aprendizado prático de C# e .NET, colaboração em projetos internos e participação em reuniões técnicas.",
    technologies: ["C#", "ASP.NET", "SQL", "Git"],
    icon: "laptop-code"
  }
];

// Projects section data
export const projectCategories = [
  { id: "csharp", name: "C#" },
  { id: "api", name: "APIs" },
  { id: "aspnet", name: "ASP.NET" },
  { id: "database", name: "Banco de Dados" }
];

export const projects = [
  {
    title: "API Hospitalar",
    description: "API desenvolvida para gerenciamento de dados hospitalares, incluindo pacientes, médicos e consultas, com autenticação JWT e documentação Swagger.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["C#", ".NET 6", "REST API", "SQL Server"],
    categories: ["csharp", "api", "aspnet"],
    repo: "https://github.com/PedroGualberto1203",
    demo: "https://github.com/PedroGualberto1203"
  },
  {
    title: "Sistema de Biblioteca",
    description: "Sistema completo para gerenciamento de biblioteca, com controle de livros, empréstimos e usuários, utilizando Entity Framework e LINQ.",
    image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["C#", "Entity Framework", "LINQ", "SQL Server"],
    categories: ["csharp", "database"],
    repo: "https://github.com/PedroGualberto1203",
    demo: "https://github.com/PedroGualberto1203"
  },
  {
    title: "E-commerce Dashboard",
    description: "Painel administrativo para e-commerce com análise de vendas, gestão de produtos e clientes, implementado com ASP.NET MVC e Bootstrap.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["C#", "ASP.NET MVC", "Bootstrap", "Entity Framework"],
    categories: ["csharp", "aspnet"],
    repo: "https://github.com/PedroGualberto1203",
    demo: "https://github.com/PedroGualberto1203"
  },
  {
    title: "Microserviços com .NET",
    description: "Arquitetura de microserviços implementada com .NET Core, utilizando comunicação via RabbitMQ e gateway com Ocelot.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["C#", ".NET Core", "Microserviços", "RabbitMQ"],
    categories: ["csharp", "api"],
    repo: "https://github.com/PedroGualberto1203",
    demo: null
  },
  {
    title: "API de Gestão Financeira",
    description: "API para controle financeiro pessoal, com categorização de despesas, relatórios e planejamento orçamentário.",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["C#", ".NET 6", "REST API", "MongoDB"],
    categories: ["csharp", "database", "api"],
    repo: "https://github.com/PedroGualberto1203",
    demo: "https://github.com/PedroGualberto1203"
  },
  {
    title: "Sistema de Gestão de Tarefas",
    description: "Aplicação web para gerenciamento de tarefas e projetos em equipe, com recursos de colaboração e timeline.",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["C#", "ASP.NET Core", "Entity Framework", "SignalR"],
    categories: ["csharp", "aspnet"],
    repo: "https://github.com/PedroGualberto1203",
    demo: null
  }
];

// Education section data
export const education = [
  {
    degree: "Bacharel em Ciência da Computação",
    institution: "Universidade Federal de Minas Gerais (UFMG)",
    period: "2018 - 2022",
    description: "Formação com foco em desenvolvimento de software, algoritmos, estruturas de dados e engenharia de software."
  },
  {
    degree: "Especialização em Desenvolvimento .NET",
    institution: "Instituto de Tecnologia",
    period: "2022 - 2023",
    description: "Curso de especialização em desenvolvimento de aplicações utilizando a plataforma .NET, com foco em C# e ASP.NET Core."
  }
];

export const certifications = [
  {
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    year: "2023",
    description: "Certificação que valida habilidades em desenvolvimento de soluções na plataforma Azure utilizando serviços como App Service, Functions e Storage."
  },
  {
    name: "Desenvolvimento Web com ASP.NET Core MVC",
    issuer: "Udemy",
    year: "2022",
    description: "Curso completo sobre desenvolvimento de aplicações web utilizando o framework ASP.NET Core MVC com C#."
  },
  {
    name: "SQL Server - Administração e Desenvolvimento",
    issuer: "Alura",
    year: "2021",
    description: "Certificação em administração e desenvolvimento de bancos de dados utilizando SQL Server, incluindo otimização e performance."
  }
];
