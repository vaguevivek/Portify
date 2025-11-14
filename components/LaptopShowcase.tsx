import React from 'react';

const MiniWebsite: React.FC = () => (
    <div className="w-full h-full bg-white flex flex-col font-sans">
        <header className="px-4 md:px-6 py-3 flex justify-between items-center border-b border-gray-200 flex-shrink-0">
            <span className="font-bold text-base md:text-lg text-black">PP.</span>
            <nav className="hidden sm:flex items-center space-x-3 md:space-x-5 text-xs md:text-sm text-gray-600">
                <a href="#" className="hover:text-black transition-colors">Home</a>
                <a href="#" className="hover:text-black transition-colors">About</a>
                <a href="#" className="hover:text-black transition-colors">Projects</a>
            </nav>
            <a href="#" className="bg-blue-800 text-white font-semibold py-1.5 px-3 md:px-4 rounded-md text-xs md:text-sm hover:bg-blue-900 transition-colors">
                Get in touch
            </a>
        </header>

        <main className="flex-grow flex flex-col justify-center items-center text-center p-4">
            <p className="text-gray-700 text-sm md:text-base">Hello, I am</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mt-1 tracking-tighter">Peter Parker</h1>
            <p className="text-gray-500 mt-2 text-sm md:text-base">UI/UX Designer</p>
            <div className="mt-6 flex items-center gap-3">
                 <a href="#" className="bg-blue-800 text-white font-semibold py-2 px-4 rounded-md text-xs md:text-sm hover:bg-blue-900 transition-colors">
                    View Projects
                </a>
                <a href="#" className="text-gray-700 font-semibold py-2 px-4 rounded-md border border-gray-300 text-xs md:text-sm hover:bg-gray-50 transition-colors">
                    Get in touch
                </a>
            </div>
        </main>
    </div>
);

const LaptopShowcase: React.FC = () => {
    return (
        <div className="mt-16 md:mt-24 w-full flex justify-center px-4 pb-16 z-10">
            <div className="w-full max-w-5xl">
                <div className="relative mx-auto border-gray-300 bg-gray-100 dark:border-gray-800 border-[2px] md:border-[4px] rounded-t-2xl shadow-2xl shadow-purple-200/50 aspect-[16/10]">
                    <div className="rounded-md overflow-hidden w-full h-full bg-white">
                        <MiniWebsite />
                    </div>
                </div>
                <div className="relative mx-auto bg-gray-200 dark:bg-gray-700 rounded-b-xl h-2 md:h-3">
                     <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-lg w-16 h-1 md:w-24 md:h-[6px] bg-gray-300 dark:bg-gray-900"></div>
                </div>
            </div>
        </div>
    );
};

export default LaptopShowcase;