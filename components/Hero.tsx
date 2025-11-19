
import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="container mx-auto px-9 z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight tracking-tighter transition-colors duration-300">
                Get your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">website</span> now
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                Effortless Personal Branding, Everywhere You Go. Build your digital identity once, manage it forever — code-free and fully yours.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href="#" className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                    Choose Your Design
                </a>
                <a href="#" className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-100 font-semibold py-3 px-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 w-full sm:w-auto">
                    Learn more
                </a>
            </div>
        </div>
    );
};

export default Hero;
