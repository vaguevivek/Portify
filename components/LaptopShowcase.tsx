
import React from 'react';

const ProjectCard: React.FC<{ title: string; category: string }> = ({ title, category }) => (
    <div className="hidden md:flex flex-col p-5 bg-gray-50 rounded-2xl border border-gray-100">
        <div className="w-full aspect-[4/3] bg-white rounded-xl shadow-sm overflow-hidden relative mb-4">
             <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white"></div>
             {/* Abstract Content Shapes */}
             <div className="absolute bottom-4 left-4 right-4 h-2 bg-gray-200 rounded-full opacity-60"></div>
             <div className="absolute bottom-8 left-4 w-1/2 h-2 bg-gray-200 rounded-full opacity-60"></div>
        </div>
        <div>
            <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
            <p className="text-gray-500 text-xs mt-1">{category}</p>
        </div>
    </div>
);

const MiniWebsite: React.FC = () => (
    <div className="w-full h-full bg-white flex flex-col font-sans relative overflow-hidden select-none pointer-events-none">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/4 opacity-60"></div>

        {/* Navbar */}
        <header className="px-6 md:px-12 py-6 md:py-8 flex justify-between items-center relative z-10">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-sm">A</div>
                <span className="font-bold text-lg tracking-tight text-gray-900">Alex.</span>
            </div>
            
            <nav className="hidden md:flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-gray-200/60 shadow-sm space-x-8 text-sm font-medium text-gray-600">
                <div>Home</div>
                <div>About</div>
                <div>Projects</div>
                <div>Notes</div>
            </nav>
            
            <div className="bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-full">
                Let's Talk
            </div>
        </header>

        {/* Hero Content */}
        <main className="flex-grow flex flex-col items-center text-center px-6 pt-8 md:pt-12 pb-12 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-sm mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Open to work</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-gray-900 mb-6 max-w-4xl leading-[1.1]">
                Designing interfaces <br className="hidden md:block" />
                that <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600">feel alive.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 max-w-xl mb-12 leading-relaxed font-medium">
                I help startups and founders build digital products that look good and work even better.
            </p>

            {/* Project Grid Preview - Bottom Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4 mt-auto">
                <ProjectCard title="Fintech Dashboard" category="Product Design" />
                <ProjectCard title="Travel Mobile App" category="Interface" />
                <ProjectCard title="Nebula Design System" category="Branding" />
            </div>
        </main>
    </div>
);

const LaptopShowcase: React.FC = () => {
    return (
        <div className="mt-16 md:mt-20 w-full flex justify-center px-6 sm:px-10 pb-20 z-10">
            <div className="relative w-full max-w-6xl group perspective-1000 cursor-default">
                {/* Soft Glow Underneath */}
                <div className="absolute -inset-4 top-10 bg-gradient-to-t from-indigo-200 via-purple-100 to-transparent dark:from-indigo-900/50 dark:via-purple-900/30 rounded-[3rem] blur-3xl opacity-60 -z-10 transition-opacity duration-700 group-hover:opacity-80"></div>
                
                {/* Main Floating Frame */}
                <div className="relative bg-white dark:bg-gray-800 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-gray-900/5 dark:ring-gray-100/10 overflow-hidden aspect-[16/12] md:aspect-[16/10] transform transition-all duration-700 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.7)] hover:-translate-y-1">
                    
                    <MiniWebsite />
                    
                    {/* Soft fade at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none md:hidden"></div>
                </div>
            </div>
        </div>
    );
};

export default LaptopShowcase;
