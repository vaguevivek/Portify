
import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="container mx-auto px-9 z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tighter">
                Get your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">website</span> now
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Effortless Personal Branding, Everywhere You Go. Build your digital identity once, manage it forever — code-free and fully yours.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href="#" className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                    Choose Your Design
                </a>
                <a href="#" className="bg-white/80 backdrop-blur-sm text-gray-800 font-semibold py-3 px-8 rounded-lg border border-gray-200 hover:bg-white hover:border-gray-300 transition-all duration-300 w-full sm:w-auto">
                    Learn more
                </a>
            </div>
        </div>
    );
};

export default Hero;
