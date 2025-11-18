
import React from 'react';

const ServiceIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
);

const ManageIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const TemplatesIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
);

const FocusIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);


const features = [
    {
        icon: <ServiceIcon />,
        title: "We Build It For You",
        description: "This isn't a DIY builder. Select a template, and our team deploys a fully polished, professional portfolio website for you. No drag-and-drop hassles."
    },
    {
        icon: <ManageIcon />,
        title: "Code-Free Project Management",
        description: "Your work takes center stage. Add new projects, case studies, and achievements instantly through a simple interface without writing a single line of code."
    },
    {
        icon: <TemplatesIcon />,
        title: "Curated Premium Templates",
        description: "Access a library of high-end, modern designs tailored for the tech era. Stand out with a portfolio that looks professionally crafted on every device."
    },
    {
        icon: <FocusIcon />,
        title: "Focus On Your Skills",
        description: "In today's digital world, your platform is your identity. We handle the technical hosting and setup so you can dedicate 100% of your time to honing your craft."
    }
];

const Features: React.FC = () => {
    return (
        <section id="features" className="bg-white py-20 sm:py-24">
            <div className="container mx-auto px-9">
                <div className="text-center max-w-3xl mx-auto">
                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Not A Builder. A Partner.
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We provide the platform. You provide the talent. Effortlessly launch your professional identity in the tech era.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
