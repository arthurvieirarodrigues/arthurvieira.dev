const { useState } = React;

function Portfolio() {
    const [currentPage, setCurrentPage] = useState('home');
    const [language, setLanguage] = useState('pt');

    const data = language === 'pt' ? profileDataPT : profileDataEN;

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
            <Navigation 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                language={language}
                toggleLanguage={toggleLanguage}
                data={data}
            />
            
            <main className="max-w-6xl mx-auto px-4 py-12">
                {currentPage === 'home' ? (
                    <HomePage data={data} />
                ) : (
                    <CurriculumPage data={data} />
                )}
            </main>
            
            <footer className="bg-gray-800 text-white py-8 mt-20">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p>© 2025 {data.profile.name}. {data.footer.rights}</p>
                    <p className="text-gray-400 mt-2">{data.footer.madeWith}</p>
                </div>
            </footer>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Portfolio />);