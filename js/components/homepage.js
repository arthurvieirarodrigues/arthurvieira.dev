const HomePage = ({ data }) => {
    const CodeIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
    );

    const DatabaseIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
    );

    const ExternalLinkIcon = () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
    );

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-6 py-12">
                {data.profile.photo ? (
                    <img 
                        src={data.profile.photo} 
                        alt={data.profile.name}
                        className="w-64 h-64 rounded-full mx-auto object-cover border-4 border-gradient-to-br from-blue-500 to-purple-600 shadow-lg"
                    />
                ) : (
                    <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-8xl font-bold">
                        {data.profile.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </div>
                )}
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {data.profile.name}
                </h1>
                <p className="text-2xl text-gray-600">{data.profile.title}</p>
                <SocialLinks profile={data.profile} />
            </div>

            {/* About Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                    <CodeIcon />
                    {data.sections.about}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">{data.profile.about}</p>
            </div>

            {/* Projects Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                    <DatabaseIcon />
                    {data.sections.projects}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.projects.map((project, idx) => (
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
                                {data.sections.viewProject} <ExternalLinkIcon />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};