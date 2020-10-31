import React from 'react'
import Subheading from './Subheading'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__info">
          <p>Christopher Leja </p>
          <p>Brooklyn, NY </p>
          <p>christopher.leja@gmail.com</p>
        </div>
        <div className="footer__credit">
          <p> Background video on Home page is by&nbsp;
            <a className="footer__credit-link" 
              href="https://www.pexels.com/@enginakyurt?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels" 
              target="_blank" 
              rel="noopener noreferrer"> 
                Engin Akyurt
            </a>
          </p>
          <p> Background art on Resume page by&nbsp;
            <a className="footer__credit-link" 
              href="https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" 
              target="_blank" 
              rel="noopener noreferrer">
                Annie Spratt
            </a>
          </p>
          <p> Background art on About page by&nbsp; 
            <a className="footer__credit-link" 
              href="https://unsplash.com/@steve_j?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" 
              target="_blank" 
              rel="noopener noreferrer">
                Steve Johnson
            </a>
          </p>
        </div>
        <div className="footer__links">
          <Subheading />
        </div>
      </div>
  )
}

export default Footer
