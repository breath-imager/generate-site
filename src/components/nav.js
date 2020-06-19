import React from "react"
import logoImage from "../assets/images/logo.png"

export default function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-transparent fixed-top"
      color-on-scroll="400"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">
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
            <li id="menu-home" className="nav-item active">
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li id="menu-feed" className="nav-item">
              <a className="nav-link" href="feed.html">
                Feed
              </a>
            </li>
            <li id="menu-learn" className="nav-item">
              <a className="nav-link" href="learn.html">
                Learn
              </a>
            </li>
            <li id="menu-contact" className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
