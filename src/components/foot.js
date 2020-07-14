import React from "react"
import Touch from "./touch"

import imageAppStoreLogo from "../assets/images/app-store-logo.png"
const APP_URL = 'https://apps.apple.com/us/app/generate-video-photo-effects/id808563377'

export default function Foot(props){

  let isContact = false
  if (props.page === "contact"){
    isContact = true
  }
    return (
        <div>  
          <footer>
            <div className="container-full-width">        
                { isContact ?
                <div></div> 
                :
                <Touch/>
                }
                <div className="row footerBottom">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <h4>Company</h4>
                                <a href="/contact">About</a>
                            </div>
                            <div className="col-12 col-md-4">
                                <h4>Comunity</h4>
                                <a href="/community.html">Guidelines</a>
                                <a href="/faq.html">FAQ</a>
                            </div>
                            <div className="col-12 col-md-4">
                                <h4>Legal</h4>
                                <a href="/privacy.html">Privacy</a>
                                <a href="/terms-of-use.html">Terms of Use</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                    </div>
                    <div className="col-12 col-md-10 my-auto copyright">
                        <p>© Generate 2020. All rights reserved.</p>
                    </div>
                    <div className="col-12 col-md-2 my-auto d-none d-sm-block">
                        <a href={APP_URL} target="_blank" rel="noreferrer" className="logoAppStore">
                            <img src={imageAppStoreLogo} className="img-fluid" alt="logo app store"/>
                        </a>
                    </div>
                </div>
            </div>
          </footer>
        </div>    

    )
}
