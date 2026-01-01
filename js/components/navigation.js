const Navigation = ({ currentPage, setCurrentPage, language, toggleLanguage, data }) => {
    const GlobeIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
    );

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Portfolio
                </h1>
                <div className="flex items-center gap-6">
                    <button 
                        onClick={() => setCurrentPage('home')}
                        className={`font-medium transition-colors ${
                            currentPage === 'home' 
                                ? 'text-blue-600' 
                                : 'text-gray-600 hover:text-blue-600'
                        }`}
                    >
                        {data.nav.home}
                    </button>
                    <button 
                        onClick={() => setCurrentPage('curriculum')}
                        className={`font-medium transition-colors ${
                            currentPage === 'curriculum' 
                                ? 'text-blue-600' 
                                : 'text-gray-600 hover:text-blue-600'
                        }`}
                    >
                        {data.nav.curriculum}
                    </button>
                    <button 
                        onClick={toggleLanguage}
                        className="lang-toggle"
                        title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
                    >
                        <GlobeIcon />
                        <span>{language === 'pt' ? 'EN' : 'PT'}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};