import React, { useState } from 'react';

const faqData = [
    {
        question: "What exactly is Portify?",
        answer: (
            <>
                <p>Portify is a simple personal website service.</p>
                <p className="mt-2">You select a template → we build your website → you manage your projects through a connected Notion page.</p>
                <p className="mt-2">No coding, no complex setup.</p>
            </>
        )
    },
    {
        question: "Do I need any technical skills to use Portify?",
        answer: (
            <>
                <p>No.</p>
                <p className="mt-2">Portify is fully built for you.</p>
                <p className="mt-2">You only update your projects in Notion — which is as simple as editing a document.</p>
            </>
        )
    },
    {
        question: "What do I get when I purchase a Portify site?",
        answer: (
            <>
                <p>You get:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>A clean, professional website based on your chosen template</li>
                    <li>A linked Notion project database (fully editable)</li>
                    <li>Custom text, links, and sections added for you</li>
                    <li>Future edits (optional add-on)</li>
                </ul>
            </>
        )
    },
    {
        question: "How do I manage or update my projects later?",
        answer: "You update everything through your Notion database. Add a new project → it instantly appears on your website."
    },
    {
        question: "Why Notion?",
        answer: "Notion is free, easy to use, and perfect for managing projects without coding. Most students, freelancers, and creators already know it — zero learning curve."
    },
    {
        question: "Is there any backend or dashboard?",
        answer: "No complicated backend. Portify is intentionally simple. Your website is static and fast, and all management happens through your connected Notion page."
    },
    {
        question: "Can I get a custom domain?",
        answer: "Yes. If you want a .com/.in domain, we help you connect it. (Custom domain setup may require additional charges depending on the provider.)"
    },
    {
        question: "How long does it take to get my website?",
        answer: (
            <>
                <p>1–3 days depending on:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>The template you choose</li>
                    <li>The content you share</li>
                    <li>Customization requests</li>
                </ul>
            </>
        )
    },
    {
        question: "Can I request custom changes to a template?",
        answer: "Yes, but within reason. Small changes are included. Major redesigns can be done as add-ons."
    },
    {
        question: "Is this subscription-based?",
        answer: "No monthly fee. You pay once for the website. If you want future edits or updates, you can purchase them anytime."
    },
    {
        question: "Who is Portify for?",
        answer: "Students, freelancers, designers, developers, creators — anyone who needs a clean personal website without touching code."
    },
    {
        question: "What if I want to migrate later?",
        answer: "Your content stays with you. Your Notion database is fully yours. You can shift to any other platform in the future."
    },
    {
        question: "Can you help me write my About section or project descriptions?",
        answer: "Yes. If you choose the “Content Assistance” add-on, we’ll help you write clear, professional text."
    },
    {
        question: "What if I don’t have any projects yet?",
        answer: "We can still build your site. You can add projects to your Notion page whenever you’re ready — your site updates instantly."
    },
    {
        question: "What makes Portify different from Wix or other builders?",
        answer: "Those platforms give you tools. Portify gives you a ready-made website, already designed, structured, and connected to a simple editing system. It’s faster, lighter, and doesn’t overwhelm you with options."
    }
];

const AccordionItem: React.FC<{
    item: { question: string; answer: React.ReactNode };
    isOpen: boolean;
    onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-6">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 hover:text-indigo-600 focus:outline-none"
            >
                <span>{item.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen mt-4' : 'max-h-0'}`}
            >
                <div className="text-gray-600 leading-relaxed">
                    {item.answer}
                </div>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="bg-gray-50 py-20 sm:py-24">
            <div className="container mx-auto px-9">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Have a question? We've got answers. If you can't find what you're looking for, feel free to contact us.
                    </p>
                </div>
                <div className="mt-16 max-w-4xl mx-auto">
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;