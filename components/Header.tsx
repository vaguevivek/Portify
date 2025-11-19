
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const PortifyLogo: React.FC = () => (
    <a href="/" className="flex items-center cursor-pointer text-gray-900 dark:text-white transition-colors">
        <svg height="32" viewBox="0 0 169 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto block">
            <path d="M153.042 39.9999C152.239 39.9999 151.475 39.9366 150.749 39.8099C150.022 39.6916 149.384 39.5269 148.835 39.3158L150.356 34.3496C150.93 34.5523 151.454 34.6832 151.927 34.7423C152.408 34.8014 152.818 34.7677 153.156 34.641C153.502 34.5143 153.751 34.2736 153.903 33.9188L154.055 33.5641L147.214 13.2432H154.511L157.653 26.7229H157.856L161.048 13.2432H168.396L161.302 34.3242C160.947 35.3969 160.432 36.3597 159.756 37.2128C159.089 38.0742 158.21 38.7541 157.121 39.2525C156.031 39.7508 154.672 39.9999 153.042 39.9999Z" fill="currentColor"/>
            <path d="M146.086 13.2432V18.3108H133.062V13.2432H146.086ZM135.546 32.7027V12.6858C135.546 11.0811 135.833 9.75083 136.407 8.69509C136.981 7.63935 137.792 6.84965 138.84 6.326C139.887 5.80235 141.12 5.54053 142.539 5.54053C143.426 5.54053 144.287 5.6081 145.123 5.74323C145.968 5.87837 146.593 5.99661 146.998 6.09796L145.985 11.1149C145.731 11.0388 145.436 10.9797 145.098 10.9375C144.76 10.8868 144.465 10.8615 144.211 10.8615C143.552 10.8615 143.109 11.0008 142.881 11.2795C142.653 11.5583 142.539 11.9257 142.539 12.3817V32.7027H135.546Z" fill="currentColor"/>
            <path d="M123.875 32.7027V13.2432H130.868V32.7027H123.875ZM127.371 11.2162C126.425 11.2162 125.614 10.9037 124.939 10.2787C124.263 9.65369 123.925 8.902 123.925 8.02362C123.925 7.14524 124.263 6.39355 124.939 5.76855C125.614 5.14355 126.425 4.83105 127.371 4.83105C128.326 4.83105 129.136 5.14355 129.804 5.76855C130.479 6.39355 130.817 7.14524 130.817 8.02362C130.817 8.902 130.479 9.65369 129.804 10.2787C129.136 10.9037 128.326 11.2162 127.371 11.2162Z" fill="currentColor"/>
            <path d="M121.021 13.2432V18.3108H108.2V13.2432H121.021ZM110.683 8.58105H117.676V26.4442C117.676 26.7145 117.723 26.9425 117.816 27.1284C117.909 27.3057 118.052 27.4409 118.246 27.5338C118.441 27.6182 118.69 27.6604 118.994 27.6604C119.205 27.6604 119.45 27.6351 119.729 27.5844C120.016 27.5338 120.227 27.4915 120.362 27.4577L121.376 32.3733C121.063 32.4662 120.615 32.5802 120.033 32.7153C119.458 32.8505 118.774 32.9392 117.98 32.9814C116.376 33.0659 115.028 32.9012 113.939 32.4873C112.849 32.065 112.03 31.402 111.481 30.4983C110.932 29.5946 110.666 28.4628 110.683 27.103V8.58105Z" fill="currentColor"/>
            <path d="M93.1462 32.7027V13.2432H99.9368V16.9426H100.139C100.494 15.5743 101.056 14.5735 101.824 13.94C102.601 13.3066 103.509 12.9899 104.548 12.9899C104.852 12.9899 105.152 13.0152 105.448 13.0659C105.752 13.1081 106.043 13.1715 106.322 13.2559V19.223C105.976 19.1047 105.549 19.0161 105.042 18.9569C104.536 18.8978 104.101 18.8682 103.737 18.8682C103.053 18.8682 102.437 19.0245 101.888 19.337C101.347 19.6411 100.921 20.0718 100.608 20.6292C100.296 21.1782 100.139 21.8243 100.139 22.5676V32.7027H93.1462Z" fill="currentColor"/>
            <path d="M80.2239 33.0574C78.1124 33.0574 76.3049 32.6394 74.8016 31.8032C73.2982 30.9586 72.1453 29.7846 71.343 28.2813C70.5406 26.7694 70.1394 25.0169 70.1394 23.0237C70.1394 21.0304 70.5406 19.2821 71.343 17.7787C72.1453 16.2669 73.2982 15.0929 74.8016 14.2568C76.3049 13.4122 78.1124 12.9899 80.2239 12.9899C82.3353 12.9899 84.1428 13.4122 85.6462 14.2568C87.1495 15.0929 88.3024 16.2669 89.1048 17.7787C89.9071 19.2821 90.3083 21.0304 90.3083 23.0237C90.3083 25.0169 89.9071 26.7694 89.1048 28.2813C88.3024 29.7846 87.1495 30.9586 85.6462 31.8032C84.1428 32.6394 82.3353 33.0574 80.2239 33.0574ZM80.2745 27.8885C80.8658 27.8885 81.3767 27.69 81.8075 27.2931C82.2382 26.8961 82.5718 26.3302 82.8083 25.5954C83.0448 24.8606 83.1631 23.9865 83.1631 22.973C83.1631 21.951 83.0448 21.0769 82.8083 20.3505C82.5718 19.6157 82.2382 19.0498 81.8075 18.6529C81.3767 18.2559 80.8658 18.0574 80.2745 18.0574C79.6495 18.0574 79.1132 18.2559 78.6656 18.6529C78.2179 19.0498 77.8759 19.6157 77.6394 20.3505C77.4029 21.0769 77.2847 21.951 77.2847 22.973C77.2847 23.9865 77.4029 24.8606 77.6394 25.5954C77.8759 26.3302 78.2179 26.8961 78.6656 27.2931C79.1132 27.69 79.6495 27.8885 80.2745 27.8885Z" fill="currentColor"/>
            <path d="M47.7534 32.7027V6.75671H58.9527C60.8784 6.75671 62.5634 7.13678 64.0076 7.89692C65.4519 8.65705 66.5752 9.72546 67.3776 11.1022C68.1799 12.4788 68.5811 14.0878 68.5811 15.929C68.5811 17.7871 68.1673 19.3961 67.3396 20.7559C66.5203 22.1157 65.3674 23.163 63.881 23.8978C62.4029 24.6326 60.6757 25 58.6994 25H52.0102V19.527H57.2804C58.1081 19.527 58.8134 19.3834 59.3962 19.0962C59.9874 18.8006 60.4392 18.3826 60.7517 17.842C61.0727 17.3015 61.2331 16.6638 61.2331 15.929C61.2331 15.1858 61.0727 14.5523 60.7517 14.0287C60.4392 13.4966 59.9874 13.0912 59.3962 12.8125C58.8134 12.5253 58.1081 12.3817 57.2804 12.3817H54.7973V32.7027H47.7534Z" fill="currentColor"/>
            <path d="M33.6484 36.1487C35.0291 36.1487 36.1484 35.0294 36.1484 33.6487V5.00024C36.1484 3.61953 35.0292 2.50024 33.6484 2.50024H5C3.61929 2.50024 2.5 3.61953 2.5 5.00024V36.1487H33.6484Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
            <path d="M2.5 36.1487L19.32 19.32" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
        </svg>
    </a>
);

const MenuIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const SunIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const navItems = ["Features", "Pricing", "Testimonials", "FAQs"];

interface HeaderProps {
    onSignUpClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSignUpClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();

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
            <div className="container mx-auto px-9 py-6 flex items-center">
                <div className="flex-1 flex justify-start items-center">
                    <PortifyLogo />
                </div>
                
                <nav className="hidden md:flex items-center justify-center space-x-8">
                    {navItems.map(item => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => handleNavClick(e, item)}
                            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-medium whitespace-nowrap"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex-1 flex justify-end items-center gap-4">
                    {/* Theme Toggle */}
                    <button 
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                    </button>

                    {user ? (
                         <div className="hidden md:flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700" />
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{user.name}</span>
                            </div>
                            <button 
                                onClick={logout}
                                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                            >
                                Sign out
                            </button>
                        </div>
                    ) : (
                        <button 
                            onClick={onSignUpClick}
                            className="hidden md:inline-block bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                        >
                            SIGN UP
                        </button>
                    )}

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 dark:text-white focus:outline-none">
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 px-9 pb-6 shadow-lg rounded-b-lg border-t border-gray-100 dark:border-gray-800">
                    <nav className="flex flex-col items-center space-y-4 pt-4">
                        {navItems.map(item => (
                            <a 
                                key={item} 
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => handleNavClick(e, item)}
                                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 text-center py-2 font-medium"
                            >
                                {item}
                            </a>
                        ))}
                        
                        {user ? (
                             <div className="w-full pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col items-center gap-3">
                                <div className="flex items-center gap-2">
                                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700" />
                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{user.name}</span>
                                </div>
                                <button 
                                    onClick={() => { logout(); setIsMenuOpen(false); }}
                                    className="text-sm text-red-500 font-medium"
                                >
                                    Sign out
                                </button>
                            </div>
                        ) : (
                            <button 
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    if (onSignUpClick) onSignUpClick();
                                }}
                                className="w-full text-center bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
                            >
                                SIGN UP
                            </button>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
