import React, { useState, useEffect } from 'react';

const testimonials = [
    {
        quote: "Portify made it incredibly simple to launch a professional portfolio. I had my site up and running in under an hour without writing a single line of code. Highly recommended!",
        name: "Sarah Johnson",
        title: "Freelance Designer",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        quote: "The templates are modern and beautiful. It gave my work the showcase it deserved. The best part is how easy it is to update my projects on the fly.",
        name: "Michael Chen",
        title: "Photographer",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        quote: "As a developer, I appreciate a well-built product. Portify is intuitive, fast, and the end result looks fantastic. It's the perfect no-code solution for professionals.",
        name: "David Lee",
        title: "Software Engineer",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
        quote: "I'm not tech-savvy at all, but Portify's editor was a breeze to use. I finally have a portfolio that I'm proud to share with potential clients.",
        name: "Emily Rodriguez",
        title: "Content Writer",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section id="testimonials" className="bg-gray-50 py-20 sm:py-24">
            <div className="container mx-auto px-9">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Loved by Professionals Worldwide
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Don't just take our word for it. See what our users are saying about their experience with Portify.
                    </p>
                </div>

                <div className="mt-16 relative">
                    <div className="overflow-hidden relative h-64">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="absolute w-full transition-opacity duration-1000 ease-in-out"
                                style={{ opacity: index === currentIndex ? 1 : 0 }}
                            >
                                <div className="max-w-3xl mx-auto text-center">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 mx-auto rounded-full shadow-lg" />
                                    <blockquote className="mt-8 text-xl text-gray-700 italic">
                                        “{testimonial.quote}”
                                    </blockquote>
                                    <div className="mt-6">
                                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                        <p className="text-gray-500">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center space-x-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;