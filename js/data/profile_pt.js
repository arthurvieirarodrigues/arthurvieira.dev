const profileDataPT = {
    nav: {
        home: "Início",
        curriculum: "Currículo"
    },
    profile: {
        name: "Arthur Vieira",
        title: "Engenheiro de Software e Cientista de Dados",
        photo: "assets/profile.jpg", // ← ADICIONE ESTA LINHA
        about: "Olá! Sou um profissional apaixonado por tecnologia, com experiência em desenvolvimento de software e ciência de dados. Trabalho com Python, JavaScript, React e diversas ferramentas de análise de dados. Meu objetivo é criar soluções inovadoras que transformem dados em insights valiosos e desenvolvam aplicações que impactem positivamente a vida das pessoas.",
        email: "arthurvieiradatascience@gmail.com",
        phone: "+55 (53) 99970-9504",
        github: "https://github.com/arthurvieirarodrigues",
        linkedin: "https://linkedin.com/in/arthurvieirads",
        instagram: "https://instagram.com/arthurvieira.rd"
    },
    sections: {
        about: "Sobre Mim",
        projects: "Projetos Recentes",
        skills: "Habilidades",
        experience: "Experiência Profissional",
        education: "Formação Acadêmica",
        viewProject: "Ver projeto",
        downloadPDF: "Baixar PDF"
    },
    projects: [
        {
            title: "Sistema de Análise Preditiva",
            description: "Modelo de machine learning para previsão de vendas usando Python, Pandas e Scikit-learn. Aumentou a precisão das previsões em 35%.",
            tech: ["Python", "Pandas", "Scikit-learn", "Flask"],
            link: "https://github.com/arthurvieirarodrigues/projeto1"
        },
        {
            title: "Dashboard Interativo",
            description: "Aplicação web com React e D3.js para visualização de dados em tempo real, conectada a APIs REST.",
            tech: ["React", "D3.js", "Node.js", "MongoDB"],
            link: "https://github.com/arthurvieirarodrigues/projeto2"
        },
        {
            title: "API de Processamento de Dados",
            description: "API RESTful para processamento e análise de grandes volumes de dados com otimização de performance.",
            tech: ["Python", "FastAPI", "PostgreSQL", "Docker"],
            link: "https://github.com/arthurvieirarodrigues/projeto3"
        }
    ],
    skills: {
        "Linguagens": ["Python", "Java", "JavaScript", "SQL", "Shell Script"],
        "Frameworks": ["React", "Django", "Flask", "Node.js"],
        "Data Science": ["Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
        "Ferramentas": ["Git", "Docker", "AWS", "PostgreSQL"]
    },
    experience: [
        {
            role: "Cientista de Dados",
            company: "Empresa XYZ",
            period: "2022 - Presente",
            description: "Desenvolvimento de modelos preditivos e análise de dados para otimização de processos."
        },
        {
            role: "Desenvolvedor Full Stack",
            company: "Empresa ABC",
            period: "2020 - 2022",
            description: "Criação de aplicações web completas usando React, Node.js e bancos de dados SQL."
        }
    ],
    education: [
        {
            degree: "Tecnólogo em Ciência de Dados",
            institution: "Uninter",
            year: "2024"
        }
    ],
    footer: {
        rights: "Todos os direitos reservados.",
        madeWith: "Desenvolvido com React e Tailwind CSS"
    }
};