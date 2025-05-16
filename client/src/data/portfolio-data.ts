// Skills section data
export const skills = [
  { name: "C#", percentage: 90 },
  { name: ".NET Core", percentage: 85 },
  { name: "SQL", percentage: 70 },
  { name: "JavaScript", percentage: 65 },
  { name: "HTML5 e CSS3", percentage: 85 }
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
  "MySQL",
  "Git",
  "C",
  "GitHub",
  "Web APIs",
  "Unit Testing"
];

// Experience section data
export const experiences = [
  {
    title: "Estagiário de Suporte Técnico em TI",
    company: "Open Data Center",
    period: "09/2024 - 02/2025",
    description: "Desenvolvi o projeto Cloud Café para otimizar pedidos na cantina da empresa. O cardápio online permite que funcionários adicionem itens ao carrinho e enviem o pedido automaticamente via API do WhatsApp, agilizando a comunicação e a entrega. Além disso, realizei manutenção de hardware, otimização de sistemas Windows e suporte à infraestrutura de redes, incluindo criação de máquinas virtuais e configuração de firewalls.",
    technologies: ["HTML", "CSS", "SQL", "JavaScript", "Node.Js", "Redes"],
    icon: "briefcase"
  },
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
