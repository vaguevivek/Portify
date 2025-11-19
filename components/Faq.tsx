
import React, { useState } from 'react';

const faqData = [
    {
        question: "Is Portify a website builder?",
        answer: "No. Unlike Wix or Squarespace, we don't make you drag-and-drop elements or design pages. Portify is a 'Done-For-You' service. You choose a premium template, and we generate a fully developed, high-performance portfolio website for you instantly."
    },
    {
        question: "How do I add or update my projects?",
        answer: "We connect your website to a private Notion page. You simply add your project details, images, and case studies in Notion—just like writing a document—and your website updates automatically in real-time. No coding required."
    },
    {
        question: "Is it really free to start?",
        answer: "Yes! Our Starter plan is completely free. It includes one active website, basic templates, and a Portify subdomain. It's perfect for students and hobbyists building their first digital presence."
    },
    {
        question: "Can I use my own custom domain?",
        answer: "Absolutely. With our Pro plan ($25/month), you can connect any custom domain (like yourname.com) to your portfolio. We handle the SSL certificates and DNS linking for you."
    },
    {
        question: "Do I need to know how to code?",
        answer: "Not at all. We handle all the technical aspects—hosting, deployment, performance optimization, and responsiveness. You just focus on your skills and the content you want to showcase."
    },
    {
        question: "Can I switch templates later?",
        answer: "Yes. Your content is separated from the design. You can switch to a different premium template at any time, and all your existing projects and 'About' information will seamlessly transfer to the new look."
    }
];

const AccordionItem: React.FC<{
    item: { question: string; answer: string };
    isOpen: boolean;
    onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-100 dark:border-gray-800 last:border-0">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-6 focus:outline-none group"
            >
                <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400'}`}>
                    {item.question}
                </span>
                <span className={`ml-6 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${isOpen ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rotate-180' : 'bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 group-hover:bg-indigo-50 dark:group-hover:bg-gray-700 group-hover:text-indigo-500'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base pr-8">
                    {item.answer}
                </p>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="bg-white dark:bg-gray-950 py-20 sm:py-24 relative overflow-hidden transition-colors duration-300">
             {/* Subtle background decoration */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-indigo-50 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50"></div>
                <div className="absolute bottom-[10%] left-[-5%] w-72 h-72 bg-purple-50 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50"></div>
            </div>

            <div className="container mx-auto px-9 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4 transition-colors duration-300">
                        Common Questions
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
                        Everything you need to know about building your digital identity with Portify.
                    </p>
                </div>
                
                <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-gray-100 dark:border-gray-800 p-2 sm:p-8 transition-all duration-300">
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
                        Still have questions? <a href="#" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">Contact our support team</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Faq;
