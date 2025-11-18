
import React, { useState } from 'react';
import Header from './components/Header';
import Faq from './components/Faq';
import SignUpModal from './components/SignUpModal';

const FaqPage: React.FC = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />
      <Header onSignUpClick={() => setIsSignUpOpen(true)} />
      <main className="flex-grow">
        <Faq />
      </main>
    </div>
  );
};

export default FaqPage;
