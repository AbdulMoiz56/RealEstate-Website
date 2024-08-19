import React from "react";
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Best from './components/Best/Best.jsx';
import Featured from './components/Featured/Featured.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return(
    <>
      <Navbar/>
      <Hero/>
      <Best/>
      <Featured/>
      <Footer/>
    </>
  );
}

export default App
