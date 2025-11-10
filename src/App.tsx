import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';

declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: any) => void;
  }
}

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
