import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import About from './components/About';
import Footer from './components/Footer';
import Subheading from './components/Subheading';



function App() {

  const bigScreen = window.innerWidth > 1450

  return (
    <>
        <Navbar />
        <div className="portfolio__container">
        <header className="header" id="home">
          <div className="header__bg">
            <video className="header__bg-video__content" 
            src={bigScreen ? "./img/background-big.mp4" : "./img/background-standard.mp4"} autoPlay muted loop/>
          </div>
        
          <div className="home__container">
            <h1 className="heading-1 home__heading">Christopher Leja</h1>
            <h3 className="heading-3 home__subheading">Full Stack Developer</h3>
            <div className="home__icon-container">
              <Subheading />
            </div>
          </div>
        </header>
        <div className="container">
          <Projects />
          <Resume />
          <About />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
