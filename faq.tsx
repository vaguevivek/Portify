import React from 'react';
import ReactDOM from 'react-dom/client';
import FaqPage from './FaqPage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <FaqPage />
  </React.StrictMode>
);