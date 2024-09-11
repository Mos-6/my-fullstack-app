import React from 'react';
import './App.css';
import NavBar from './components/Navbar.js';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
