const CurriculumPage = ({ data }) => {
    const DownloadIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
    );

    return (
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {data.nav.curriculum}
                </h1>
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    <DownloadIcon />
                    {data.sections.downloadPDF}
                </button>
            </div>

            {/* Personal Info */}
            <div className="border-b pb-6">
                <h2 className="text-2xl font-bold mb-4">{data.profile.name}</h2>
                <p className="text-xl text-gray-600 mb-4">{data.profile.title}</p>
                <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> {data.profile.email}</p>
                    <p><strong>{data.sections.phone || 'Phone' || 'Telefone'}:</strong> {data.profile.phone}</p>
                </div>
            </div>

            {/* Skills */}
            <div>
                <h3 className="text-2xl font-bold mb-4">{data.sections.skills}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(data.skills).map(([category, items]) => (
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
                <h3 className="text-2xl font-bold mb-4">{data.sections.experience}</h3>
                <div className="space-y-6">
                    {data.experience.map((exp, idx) => (
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
                <h3 className="text-2xl font-bold mb-4">{data.sections.education}</h3>
                <div className="space-y-4">
                    {data.education.map((edu, idx) => (
                        <div key={idx} className="border-l-4 border-purple-600 pl-4">
                            <h4 className="font-bold text-lg">{edu.degree}</h4>
                            <p className="text-gray-600">{edu.institution} • {edu.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};