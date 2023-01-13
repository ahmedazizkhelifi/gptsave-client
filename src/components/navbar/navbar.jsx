import React, { useState } from "react"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import "./navbar.css"
import logo from "../../assets/logo.jpeg"
const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Acceuil</a>
      </p>
      <p>
        <a href="#services">Nos services</a>
      </p>
      <p>
        <a href="#team">L'équipe</a>
      </p>
      <p>
        <a href="#partenaires">Nos partenaires</a>
      </p>
      <p>
        <a href="#articles">Articles</a>
      </p>
    </>
  )
}
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="tt ">
      <div className="navbar">
        <div className="navbar-links">
          <div className="navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar-links_container">
            <Menu />
          </div>
        </div>
        <div className="navbar-sign">
          <button type="button">
            <a href="#contact-us">Contactez-nous </a>
          </button>
        </div>
        <div className="navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={35}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={35}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navbar-menu_container scale-up-center">
              <div className="navbar-menu_container-links">
                <Menu />
              </div>
              <div className="navbar-menu_container-links-sign">
                <button type="button">Contactez-nous</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
