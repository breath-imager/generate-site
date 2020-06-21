import React from "react"
import logoImage from "../assets/images/logo.png"

let navbarClassName = '' 
let feed = false
let main = false
let feedNavbarItem = 'nav-item'
let mainNavbarItem = 'nav-item'


export default function Nav(props) {
  /**
   *  Page dependent parameters
   */
  if (props.page == 'feed') { 
    navbarClassName = 'navbar navbar-expand-lg navbar-transparent fixed-top navbarFeed'
    feedNavbarItem = 'nav-item active'
    
  }
  else { 
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
              <a className="nav-link" href="feed">
                Feed
              </a>
            </li>
            <li id="menu-learn" className="nav-item">
              <a className="nav-link" href="/learn.html">
                Learn
              </a>
            </li>
            <li id="menu-contact" className="nav-item">
              <a className="nav-link" href="/contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
