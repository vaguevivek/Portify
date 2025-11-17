import React from 'react';

const plans = [
    {
        name: "Starter",
        price: "$0",
        period: "/month",
        description: "For individuals and hobbyists starting out.",
        features: [
            "1 Website",
            "1 Project",
            "Basic Templates",
            "Portify Subdomain",
            "Community Support"
        ],
        buttonText: "Get Started",
        isPopular: false
    },
    {
        name: "Pro",
        price: "$25",
        period: "/month",
        description: "For professionals and freelancers who want to stand out.",
        features: [
            "1 Website",
            "5 Projects",
            "Premium Templates",
            "Custom Domain",
            "Analytics",
            "Priority Support",
            "Add more projects for $5/each"
        ],
        buttonText: "Choose Plan",
        isPopular: true
    },
    {
        name: "Enterprise",
        price: "Contact Us",
        period: "",
        description: "For teams and agencies that need advanced features.",
        features: [
            "All Pro Features",
            "Team Collaboration",
            "Custom Branding",
            "Dedicated Account Manager"
        ],
        buttonText: "Contact Sales",
        isPopular: false
    }
];

const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="bg-white py-20 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Choose Your Plan
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Start for free and scale up as you grow. No credit card required.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div key={index} className={`rounded-2xl p-8 shadow-lg transition-transform duration-300 transform hover:-translate-y-2 flex flex-col ${plan.isPopular ? 'bg-indigo-600 text-white border-2 border-indigo-700' : 'bg-white text-gray-800 border'}`}>
                            {plan.isPopular && (
                                <div className="absolute top-0 right-8 -mt-4">
                                    <span className="bg-white text-indigo-600 text-xs font-bold px-4 py-1 rounded-full shadow-md">MOST POPULAR</span>
                                </div>
                            )}
                            <h3 className={`text-2xl font-semibold ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                            <p className={`mt-2 ${plan.isPopular ? 'text-indigo-200' : 'text-gray-600'}`}>{plan.description}</p>
                            <div className="mt-6">
                                <span className={`text-4xl font-bold ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                                <span className={`ml-1 ${plan.isPopular ? 'text-indigo-200' : 'text-gray-500'}`}>{plan.period}</span>
                            </div>
                            <ul className="mt-8 space-y-4 flex-grow">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center">
                                        <div className={`flex-shrink-0 ${plan.isPopular ? '' : 'text-indigo-500'}`}>
                                            {plan.isPopular ? <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> : <CheckIcon />}
                                        </div>
                                        <span className="ml-3">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className={`mt-10 block w-full text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-300 ${plan.isPopular ? 'bg-white text-indigo-600 hover:bg-indigo-50' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}>
                                {plan.buttonText}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;