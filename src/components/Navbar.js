import React from 'react'

const navArr = [
  {
    listIcon: "",
    text: "Home",
    link: "#home"
  },
  {
    listIcon: "",
    text: "Projects",
    link: "#projects"
  },
  {
    listIcon: "",
    text: "Resume",
    link: "#resume"
  },
  {
    listIcon: "",
    text: "About",
    link: "#about"
  },
  // {
  //   listIcon: "",
  //   text: "Contact",
  //   link: "#contact"
  // },
  
]

const Navbar = () => {
  return (
    <div className="nav">
      <ul className="nav__container">
        {navArr.map((item, key) => {
          return (<li key={key} className="nav__item nav__item--active"> {item.listIcon}
              <a className="nav__link" href={item.link}>{item.text}</a>
          </li>)
        })}
      </ul>
    </div>
  )
}

export default Navbar
