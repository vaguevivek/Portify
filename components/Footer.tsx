import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <p className="text-sm text-gray-400 mb-4 md:mb-0">
                        &copy; 2025 Portify. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                            Terms of Service
                        </a>
                        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
