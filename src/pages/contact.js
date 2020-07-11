import React from "react"

import Layout from "../components/layout"
import contactHeader from "../assets/images/contact/contact-header.jpg"
import imageAppStoreLogo from "../assets/images/app-store-logo.png"




export default function Home() {
  return (
    <Layout page='contact'>
        
        <div id="contact" className="wrapper">
   
            <header 
                className="bg-image-full generateHeader d-flex" 
                style={{backgroundImage: `url(${contactHeader})`}}
    
            >
                <div className="generateHeaderContent justify-content-center align-self-center mx-auto text-center">
                </div>
            </header>


            <section className="contactContent">
            <div className="container-fluid">
                <div className="row">
                <div className="col-12 col-md">
                    <h1>About</h1>
                    <p>Generate is a powerful mobile photo and video editing app for unique thinkers. We have one goal: free today’s creators to stand out. You’re custom. We’re customizable. It’s a match made in digital heaven.</p>
                </div>
                <div className="col-12 col-md">
                    <h1>Contact</h1>
                    <p>Generate is a powerful mobile photo and video editing app for unique thinkers. We have one goal: free today’s creators to stand out. You’re custom. We’re customizable. It’s a match made in digital heaven.</p>
                    <a href="mailto:contacto@generate.com" target="_blank" className="btn">Contact Us</a>
                </div>

                </div>
            </div>
            </section>
            <footer>           
               <div className="row footerTop">
                <div className="col-12 col-md-12 text-center">
                    <h1>Get Generate in your inbox</h1>
                    <h2>No spam, good vibes only</h2>
                    <form className="form-inline w-100">
                    <input type="text" className="form-control email" placeholder="Enter email"/>
                    <input type="submit" value="suscribe" className="btn btn-primary btn-suscribe"/>
                    </form>
                </div>
            </div>
            </footer>

        </div>
       
    </Layout>
  )
}
