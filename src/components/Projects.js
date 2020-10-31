import React from 'react'


const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1 className="heading-1 projects__title">Projects</h1>
      <div className="projects__container">
        <div className="projects__card projects__card--1">
        <h2 className="heading-2 projects__heading">Maiestro</h2>
          <img className="projects__img" 
            src="img/Maiestro.png" 
            alt="Maiestro screenshot" 
          />
          <p className="projects__description">
            Built to help you get unstuck, Maiestro is a customizable, responsive instrument
            you can play in the browser. Maiestro also allows users to connect to a neural network through Magenta.js, 
            using machine-learning to generate ideas for continuing the melody.
          </p>
          <p className="projects__description">
            Built with a React/Redux frontend and a Rails backend API. 
          </p>
          <div className="projects__demo-btn-container">
            <button className="projects__demo-btn">
              <a className="projects__demo-link" 
                href="https://maiestro.netlify.app/" 
                target="_blank" rel="noopener noreferrer">
                  Live demo
              </a>
            </button>
            <button className="projects__demo-btn">
              <a className="projects__demo-link" 
                href="https://www.youtube.com/watch?v=sc8gWpthoN0" 
                target="_blank" 
                rel="noopener noreferrer" >
                  Video demo
              </a>
            </button>
            <button className="projects__demo-btn">
              <a className="projects__demo-link" 
                href="https://github.com/christopherleja/maiestro" 
                target="_blank" rel="noopener noreferrer" >
                  Github
                </a>
              </button>
          </div>
        </div>
      
        <div className="projects__card projects__card--2">
        <h2 className="heading-2 projects__heading">Drumblr</h2>
          <img className="projects__img" 
            src="img/Drumblr-3.png" 
            alt="Drumblr screenshot" 
          />
          <p className="projects__description">
            Designed as an homage to late 80's/early 90's drum machines, Drumblr is
            a step sequencer users can play in the browser, with customizable tempo,
            rhythms, and presets.
          </p>
          <p className="projects__description"> Built with a React frontend and a Rails backend API</p>
          <div className="projects__demo-btn-container">
            <button className="projects__demo-btn">
              <a className="projects__demo-link" 
                href="https://www.youtube.com/watch?v=DZ0mmeFn3Ic" 
                target="_blank" 
                rel="noopener noreferrer" >
                  Video demo
              </a>
            </button>
            <button className="projects__demo-btn">
              <a className="projects__demo-link" 
                href="https://github.com/christopherleja/drumblr_frontend"
                target="_blank" 
                rel="noopener noreferrer" >
                  Github
              </a>
            </button>
          </div>
        </div>

        <div className="projects__card projects__card--3">
        <h2 className="heading-2 projects__heading">Super Pet Bros. Unleashed</h2>
          <img className="projects__img" 
            src="img/SuperPetBros.png" 
            alt="Super Pet Bros. Unleashed screenshot" 
          />
          <p className="projects__description">
            A pokemon-style fighting game in which users can create, customize, 
            and save champions to battle with. Users can select from a pool of
            dynamic moves, adding personalities and attributes to present a wide variety
            of strategies and tactics. 
            </p>
            <p className="projects__description">Built with a vanilla JavaScript frontend and a Rails backend API.</p>
            
          <div className="projects__demo-btn-container">
            <button className="projects__demo-btn">
              <a className="projects__demo-link" 
                href="https://www.youtube.com/watch?v=1qNP1wGj2SM" 
                target="_blank" 
                rel="noopener noreferrer">
                  Video demo
              </a>
            </button>
            <button className="projects__demo-btn">
              <a className="projects__demo-link" 
                href="https://github.com/christopherleja/super-pet-bros-unleashed"
                target="_blank" 
                rel="noopener noreferrer" >
                  Github
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
