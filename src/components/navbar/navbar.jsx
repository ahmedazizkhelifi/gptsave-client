import React, { useEffect, useState } from "react"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import "./navbar.css"
import Cookies from "js-cookie"

import logo from "../../assets/logo.jpeg"

const Navbar = () => {
  useEffect(() => {
    const token = Cookies.get("token")
    setIsLoggedIn(!!token)
    return () => {}
  }, [])
  const [toggleMenu, setToggleMenu] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const Menu = () => {
    return (
      <>
        <p>
          <a href="/">Home</a>
        </p>
        <p>
          <a href="/explore">Explore</a>
        </p>
        <p>
          <a href="/profile">Profile</a>
        </p>
        <p>
          {isLoggedIn ? (
            <a
              onClick={() => {
                Cookies.remove("token")
              }}
              href="/">
              Logout
            </a>
          ) : (
            <a href="/login">Login</a>
          )}
        </p>
      </>
    )
  }
  return (
    <div className="tt ">
      <div className="navbar">
        <div className="navbar-links">
          <div className="navbar-links_logo">
            <img
              src={logo}
              alt="logo"
              onClick={() => {
                document.location.href = "/"
              }}
            />
          </div>
          <div className="navbar-links_container">
            <Menu />
          </div>
        </div>
        <div className="navbar-sign">
          <button type="button">
            <a href="/contact-us">Contact-us </a>
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
