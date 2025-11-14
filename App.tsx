
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LaptopShowcase from './components/LaptopShowcase';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';

const App: React.FC = () => {
  useEffect(() => {
    // On page load, check if there's a hash in the URL for smooth scrolling
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // Remove '#'
      const element = document.getElementById(id);
      if (element) {
        // Use a small timeout to ensure the element is rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

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
    </div>
  );
};

export default App;
