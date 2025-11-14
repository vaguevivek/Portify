import React from 'react';
import Header from './components/Header';
import Faq from './components/Faq';

const FaqPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Faq />
      </main>
    </div>
  );
};

export default FaqPage;