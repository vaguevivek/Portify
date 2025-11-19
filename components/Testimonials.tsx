
import React from 'react';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="bg-gray-50 dark:bg-gray-950 py-20 sm:py-24 border-t border-gray-100/50 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-9">
                <div className="max-w-3xl mx-auto text-center bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-gray-100 dark:border-gray-800 relative overflow-hidden transition-colors duration-300">
                    
                    {/* Subtle Gradient Accent at top */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80"></div>
                    
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl mb-8 text-indigo-600 dark:text-indigo-400 rotate-3 hover:rotate-6 transition-all duration-300">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6 transition-colors duration-300">
                        Be The First Success Story
                    </h2>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-xl mx-auto transition-colors duration-300">
                        We've just launched Portify to help professionals like you build their digital identity. 
                        Join our pilot program today, and you could be the first to be featured in our community spotlight.
                    </p>
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold tracking-wide border border-indigo-100 dark:border-indigo-800 transition-colors duration-300">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600 dark:bg-indigo-400"></span>
                        </span>
                        Accepting Early Adopters
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
