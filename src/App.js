import React from 'react'
import Navbar from './Componnets/Navbar';
import Hero from './Componnets/Hero';
import Analytics from './Componnets/Analytics';
import NewLatters from './Componnets/NewsLetters';
import Cards from './Componnets/Cards';
import Footer from './Componnets/Footer';

function App() {
  return (
    <div className="App">
    
      <Navbar/>
      <Hero/>
      <Analytics/>
      <NewLatters/>
      <Cards/>
      <Footer/>
      
    </div>
  );
}

export default App;
