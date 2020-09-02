import React from "react"
import logoImage from "../assets/images/generate_dark_icon_.png"

let navbarClassName = '' 

let feedNavbarItem,mainNavbarItem,learnNavbarItem, contactNavbarItem  = 'nav-item'


export default function Nav(props) {
  /**
   *  Page dependent parameters
   */
  switch (props.page) { 
    case 'feed':
      navbarClassName = 'navbar navbar-expand-lg navbar-transparent fixed-top navbarFeed'
      feedNavbarItem = 'nav-item active'
      break
    
    case 'learn':
      navbarClassName = 'navbar navbar-expand-lg navbar-transparent fixed-top' 
      learnNavbarItem = 'nav-item active'
      break

    case 'contact':
        navbarClassName = 'navbar navbar-expand-lg navbar-transparent fixed-top' 
        contactNavbarItem = 'nav-item active'
        break

    default:
      navbarClassName = 'navbar navbar-expand-lg navbar-transparent fixed-top' 
      mainNavbarItem = 'nav-item active'
  }
  
  return (
    <nav
      className= {navbarClassName} color-on-scroll="400"
    >
      
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <div className="logo-container">
            <img src={logoImage} className="img-fluid" alt="Logo Generate" />
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li id="menu-home" className={mainNavbarItem}>
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li id="menu-feed" className={feedNavbarItem}>
              <a className="nav-link" href="/feed">
                Feed
              </a>
            </li>
            <li id="menu-learn" className={learnNavbarItem}>
              <a className="nav-link" href="/learn">
                Learn
              </a>
            </li>
            <li id="menu-contact" className={contactNavbarItem}>
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
