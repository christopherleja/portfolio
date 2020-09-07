import React from 'react'
import bg from "../sass/img/paint-bg-small.jpg";
import Subheading from './Subheading';


const About = () => {
  return (
    <section id="about" className="about">
      <img className="about__bg" src={bg} alt="Art by Steve Johnson on Unsplash"></img>
        <h1 className="heading-1 about__heading-1">Christopher Leja</h1>
        <h3 className="heading-3 about__heading-2">Full Stack Developer</h3>
          <div className="about__icon-container">
            <Subheading />
          </div>
      <div className="about__container">
        <p className="about__content">
          Former writer, editor, and educator based in Brooklyn NY. My writing background has given me extensive experience with learning syntax, creative problem solving, and linguistic pattern recognition, skills that translate directly to writing code.
        </p>
        <p className="about__content">
          I’ve edited a best-selling poetry collection, and am a multiple Pushcart Prize nominee. Coding offers exciting new opportunities to connect people through dynamic, interactive stories. I'm excited to help tell them.
          </p>
      </div>
          <h3 className="heading-3 about__heading-3">Technical Skills</h3>
          <div className="about__skills-container">
            <div className="about__skills-card">
              <ul className="about__skills"> Languages
                <li className="about__skills-item">JavaScript</li>
                <li className="about__skills-item">Ruby</li>
                <li className="about__skills-item">TypeScript</li>
                <li className="about__skills-item">Python</li>
              </ul>
            </div>

            <div className="about__skills-card">
              <ul className="about__skills"> Frameworks
                <li className="about__skills-item">React</li>
                <li className="about__skills-item">React Native</li>
                <li className="about__skills-item">Redux</li>
                <li className="about__skills-item">Ruby on Rails</li>
                <li className="about__skills-item">Node.js</li>
                <li className="about__skills-item">Django</li>
              </ul>
            </div>

          <div className="about__skills-card">
            <ul className="about__skills"> Databases
              <li className="about__skills-item">SQL</li>
              <li className="about__skills-item">PostgreSQL</li>
              <li className="about__skills-item">MongoDB</li>
            </ul>
          </div>
          
          <div className="about__skills-card">
            <ul className="about__skills"> Styling
              <li className="about__skills-item">HTML 5</li>
              <li className="about__skills-item">CSS 3</li>
              <li className="about__skills-item">SCSS</li>
              <li className="about__skills-item">Bootstrap</li>
              <li className="about__skills-item">Material</li>
            </ul>
          </div>
      
      </div>
    </section>
  )
}

export default About
