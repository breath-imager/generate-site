import React from "react"
import imageAppStoreLogo from "../assets/images/app-store-logo.png"

export default function Foot(){
    return (
        <footer>
        <div className="container-full-width">
          <div className="row footerTop">
            <div className="col-12 col-md-6">
            </div>
            <div className="col-12 col-md-6">
              <h1>We like the way you see the world.</h1>
              <p>Have a question? Need a feature? We’re all ears.</p>
              <a href="#" className="btn">Get in touch</a>
            </div>
          </div>
          <div className="row footerBottom">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12 col-md-4">
                  <h4>Company</h4>
                  <a href="contact.html">About</a>
                </div>
                <div className="col-12 col-md-4">
                  <h4>Comunity</h4>
                  <a href="guidelines.html">Guidelines</a>
                  <a href="faq.html">FAQ</a>
                </div>
                <div className="col-12 col-md-4">
                  <h4>Legal</h4>
                  <a href="privacy.html">Privacy</a>
                  <a href="terms-of-use.html">Terms of Use</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
            </div>
            <div className="col-12 col-md-10 my-auto copyright">
              <p>© Generate 2020. All rights reserved.</p>
            </div>
            <div className="col-12 col-md-2 my-auto d-none d-sm-block">
              <a href="#" target="_blank"className="logoAppStore">
                <img src={imageAppStoreLogo} className="img-fluid" alt="logo app store"/>
              </a>
            </div>
          </div>
        </div>
      
      </footer>

    )
}
