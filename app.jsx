import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Mail, MessageCircle, Code, Database, ChevronRight, Download, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');

  // Dados de exemplo - você pode personalizar todos esses dados
  const profile = {
    name: "Seu Nome",
    title: "Desenvolvedor de Software & Cientista de Dados",
    about: "Olá! Sou um profissional apaixonado por tecnologia, com experiência em desenvolvimento de software e ciência de dados. Trabalho com Python, JavaScript, React e diversas ferramentas de análise de dados. Meu objetivo é criar soluções inovadoras que transformem dados em insights valiosos e desenvolvam aplicações que impactem positivamente a vida das pessoas.",
    email: "seuemail@exemplo.com",
    phone: "+55 (11) 99999-9999",
    github: "https://github.com/seuusuario",
    linkedin: "https://linkedin.com/in/seuusuario",
    instagram: "https://instagram.com/seuusuario"
  };

  const projects = [
    {
      title: "Sistema de Análise Preditiva",
      description: "Modelo de machine learning para previsão de vendas usando Python, Pandas e Scikit-learn. Aumentou a precisão das previsões em 35%.",
      tech: ["Python", "Pandas", "Scikit-learn", "Flask"],
      link: "https://github.com/seuusuario/projeto1"
    },
    {
      title: "Dashboard Interativo",
      description: "Aplicação web com React e D3.js para visualização de dados em tempo real, conectada a APIs REST.",
      tech: ["React", "D3.js", "Node.js", "MongoDB"],
      link: "https://github.com/seuusuario/projeto2"
    },
    {
      title: "API de Processamento de Dados",
      description: "API RESTful para processamento e análise de grandes volumes de dados com otimização de performance.",
      tech: ["Python", "FastAPI", "PostgreSQL", "Docker"],
      link: "https://github.com/seuusuario/projeto3"
    }
  ];

  const skills = {
    "Linguagens": ["Python", "JavaScript", "SQL", "TypeScript"],
    "Frameworks": ["React", "Django", "Flask", "Node.js"],
    "Data Science": ["Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
    "Ferramentas": ["Git", "Docker", "AWS", "PostgreSQL"]
  };

  const experience = [
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
  ];

  const education = [
    {
      degree: "Bacharelado em Ciência da Computação",
      institution: "Universidade Federal",
      year: "2020"
    },
    {
      degree: "Certificação em Data Science",
      institution: "Coursera/IBM",
      year: "2021"
    }
  ];

  const SocialLinks = () => (
    <div className="flex flex-wrap gap-4 justify-center">
      <a href={profile.github} target="_blank" rel="noopener noreferrer" 
         className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
        <Github size={20} />
        <span>GitHub</span>
      </a>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
         className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
        <Linkedin size={20} />
        <span>LinkedIn</span>
      </a>
      <a href={profile.instagram} target="_blank" rel="noopener noreferrer"
         className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-colors">
        <Instagram size={20} />
        <span>Instagram</span>
      </a>
      <a href={`mailto:${profile.email}`}
         className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
        <Mail size={20} />
        <span>Email</span>
      </a>
      <a href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer"
         className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>
    </div>
  );

  const HomePage = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold">
          {profile.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {profile.name}
        </h1>
        <p className="text-2xl text-gray-600">{profile.title}</p>
        <SocialLinks />
      </div>

      {/* About Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Code className="text-blue-600" />
          Sobre Mim
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">{profile.about}</p>
      </div>

      {/* Projects Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Database className="text-purple-600" />
          Projetos Recentes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                Ver projeto <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const CurriculumPage = () => (
    <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Currículo
        </h1>
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          <Download size={20} />
          Baixar PDF
        </button>
      </div>

      {/* Personal Info */}
      <div className="border-b pb-6">
        <h2 className="text-2xl font-bold mb-4">{profile.name}</h2>
        <p className="text-xl text-gray-600 mb-4">{profile.title}</p>
        <div className="space-y-2 text-gray-700">
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Telefone:</strong> {profile.phone}</p>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Habilidades</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-bold text-lg mb-2 text-blue-600">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Experiência Profissional</h3>
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div key={idx} className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-lg">{exp.role}</h4>
              <p className="text-gray-600">{exp.company} • {exp.period}</p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Formação Acadêmica</h3>
        <div className="space-y-4">
          {education.map((edu, idx) => (
            <div key={idx} className="border-l-4 border-purple-600 pl-4">
              <h4 className="font-bold text-lg">{edu.degree}</h4>
              <p className="text-gray-600">{edu.institution} • {edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfólio
          </h1>
          <div className="flex gap-6">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`font-medium transition-colors ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
              Início
            </button>
            <button 
              onClick={() => setCurrentPage('curriculum')}
              className={`font-medium transition-colors ${currentPage === 'curriculum' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
              Currículo
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {currentPage === 'home' ? <HomePage /> : <CurriculumPage />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 {profile.name}. Todos os direitos reservados.</p>
          <p className="text-gray-400 mt-2">Desenvolvido com React e Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}