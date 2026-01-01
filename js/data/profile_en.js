const profileDataEN = {
    nav: {
        home: "Home",
        curriculum: "Resume"
    },
    profile: {
        name: "Arthur Vieira",
        title: "Software Engineer and Data Scientist",
        photo: "assets/profile.jpg", // ← ADICIONE ESTA LINHA
        about: "Hello! I'm a technology enthusiast with experience in software development and data science. I work with Python, JavaScript, React, and various data analysis tools. My goal is to create innovative solutions that transform data into valuable insights and develop applications that positively impact people's lives.",
        email: "arthurvieiradatascience@gmail.com",
        phone: "+55 (53) 99970-9504",
        github: "https://github.com/arthurvieirarodrigues",
        linkedin: "https://linkedin.com/in/arthurvieirads",
        instagram: "https://instagram.com/arthurvieira.rd"
    },
    sections: {
        about: "About Me",
        projects: "Recent Projects",
        skills: "Skills",
        experience: "Professional Experience",
        education: "Education",
        viewProject: "View project",
        downloadPDF: "Download PDF"
    },
    projects: [
        {
            title: "Predictive Analysis System",
            description: "Machine learning model for sales forecasting using Python, Pandas, and Scikit-learn. Increased forecast accuracy by 35%.",
            tech: ["Python", "Pandas", "Scikit-learn", "Flask"],
            link: "https://github.com/arthurvieirarodrigues/projeto1"
        },
        {
            title: "Interactive Dashboard",
            description: "Web application with React and D3.js for real-time data visualization, connected to REST APIs.",
            tech: ["React", "D3.js", "Node.js", "MongoDB"],
            link: "https://github.com/arthurvieirarodrigues/projeto2"
        },
        {
            title: "Data Processing API",
            description: "RESTful API for processing and analyzing large volumes of data with performance optimization.",
            tech: ["Python", "FastAPI", "PostgreSQL", "Docker"],
            link: "https://github.com/arthurvieirarodrigues/projeto3"
        }
    ],
    skills: {
        "Languages": ["Python", "Java", "JavaScript", "SQL", "Shell Script"],
        "Frameworks": ["React", "Django", "Flask", "Node.js"],
        "Data Science": ["Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
        "Tools": ["Git", "Docker", "AWS", "PostgreSQL"]
    },
    experience: [
        {
            role: "Data Scientist",
            company: "XYZ Company",
            period: "2022 - Present",
            description: "Development of predictive models and data analysis for process optimization."
        },
        {
            role: "Full Stack Developer",
            company: "ABC Company",
            period: "2020 - 2022",
            description: "Creation of complete web applications using React, Node.js, and SQL databases."
        }
    ],
    education: [
        {
            degree: "Associate Degree in Data Science",
            institution: "Uninter",
            year: "2024"
        }
    ],
    footer: {
        rights: "All rights reserved.",
        madeWith: "Built with React and Tailwind CSS"
    }
};