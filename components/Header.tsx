import React, { useState } from 'react';

const PortifyLogo: React.FC = () => (
    <a href="index.html" className="flex items-center gap-2 cursor-pointer">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3H18C19.65 3 21 4.35 21 6V18C21 19.65 19.65 21 18 21H6C4.35 21 3 19.65 3 18V6C3 4.35 4.35 3 6 3Z" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 8L8 16" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="font-bold text-2xl text-gray-800 tracking-tight">Portify</span>
    </a>
);

const MenuIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const navItems = ["Features", "Pricing", "Testimonials", "FAQs"];

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
        e.preventDefault();
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }

        const sectionId = item.toLowerCase();
        const element = document.getElementById(sectionId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', `#${sectionId}`);
        }
    };
    
    return (
        <header className="w-full z-50">
            <div className="container mx-auto px-9 py-6 flex justify-between items-center">
                <PortifyLogo />
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map(item => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => handleNavClick(e, item)}
                            className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
                <a href="#" className="hidden md:inline-block bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                    SIGN UP
                </a>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
                        <MenuIcon />
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white px-9 pb-6 shadow-lg rounded-b-lg">
                    <nav className="flex flex-col items-center space-y-4 pt-4">
                        {navItems.map(item => (
                            <a 
                                key={item} 
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => handleNavClick(e, item)}
                                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-center py-2 font-medium"
                            >
                                {item}
                            </a>
                        ))}
                        <a href="#" className="w-full text-center bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                            SIGN UP
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;