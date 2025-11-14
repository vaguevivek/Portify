import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LaptopShowcase from './components/LaptopShowcase';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="relative overflow-x-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50 via-white to-white -z-10"></div>
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow flex flex-col items-center justify-start text-center pt-10 md:pt-16">
            <Hero />
            <LaptopShowcase />
          </main>
        </div>
      </div>
      <Features />
      <Testimonials />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;