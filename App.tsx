
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LaptopShowcase from './components/LaptopShowcase';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';
import SignUpModal from './components/SignUpModal';

const App: React.FC = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <div className="bg-white text-gray-900 selection:bg-indigo-100 selection:text-indigo-900 font-inter">
      <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />
      
      <div className="relative overflow-x-hidden min-h-screen flex flex-col">
        
        {/* Premium Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Base Dot Pattern - Matches the 'feel alive' reference texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
            
            {/* Mesh Gradient Orbs */}
            {/* 1. Top Left: Soft Lavender */}
            <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-[#EDE7FF] rounded-full mix-blend-multiply filter blur-[80px] opacity-80 animate-blob"></div>
            
            {/* 2. Top Right: Deeper Purple/Violet Accent */}
            <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-[#e0c6ff] rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob animation-delay-2000"></div>
            
            {/* 3. Bottom Center: Rich Indigo/Purple wash */}
            <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-[#f3e8ff] rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-4000"></div>
            
            {/* 4. Hero Highlight: A subtle deep purple glow directly behind the main content area */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[40vw] h-[40vw] bg-[#6A00F4] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
        </div>

        <div className="relative z-10 flex-grow flex flex-col">
          <Header onSignUpClick={() => setIsSignUpOpen(true)} />
          <main className="flex-grow flex flex-col items-center justify-start text-center pt-10 md:pt-16">
            <Hero />
            <LaptopShowcase />
          </main>
          <Features />
          <Testimonials />
          <Pricing />
          <Faq />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;