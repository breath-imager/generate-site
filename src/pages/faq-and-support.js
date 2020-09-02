import React from "react"

import Layout from "../components/layout"
import faqsHeader from "../assets/images/faqs/faqs-header.jpg"


export default function Home() {
  return (
    <Layout>

        
  <div id="terms" className="wrapper">

    <header className="bg-image-full generateHeader d-flex" 
                style={{backgroundImage: `url(${faqsHeader})`}}
    >
      <div className="generateHeaderContent justify-content-center align-self-center mx-auto text-center">
      </div>
    </header>


    <section className="legalContent">
      <div className="container-fluid">
      

        <h3>Generate FAQ</h3>
        <h6>The following is a quick FAQ of frequently asked questions:</h6>
        <p>
          Contact:
          <br/>For press inquiries, and questions regarding products, please contact <a href= "mailto:info@generateapp.com">info@generateapp.com</a>
          <br/>For questions regarding how we partner with brands, contact <a href= "mailto:brands@generateapp.com"> brands@generateapp.com</a>
          <br/>For issues of support, please contact <a href= "mailto:support@generateapp.com">support@generateapp.com</a>
        </p>


        <h4>About Generate 3.0 - The Basics</h4>

        <br/><h6>What is Generate 3.0?</h6>
        <p>
          Generate 3.0 is a completely new redesign of the app.  The first version of Generate goes back to 2013.  The new version pushes our goal of being able to create professional looking music videos, photos and other videos in real time.
        </p>

        <br/><h6>Generate Pro Subscription</h6>
        <p>
          Subscribe to Generate - You get all the Free features plus:
          <ul>
            <li style ={{'list-style-type': 'square'}}>
                <em>Over 100 new filters</em><br/>
                  We’re redefining presets: dive into everything from LUT color replacement to real-time animation
              </li>
            <li style ={{'list-style-type': 'square'}}>
                <em>Style transfer effects </em><br/>
                  Infuse one image’s content with another image’s colors for a compelling remix
              </li>
            <li style ={{'list-style-type': 'square'}}>
                <em>Build filter combos</em><br/>
                  Take your presets from hundreds to infinity: layer filters and effects and save them as new combinations
              </li>
            <li style ={{'list-style-type': 'square'}}>
                <em>Unlimited effect sharing</em><br/>
                  Send your saved filter combinations out into the world—as many times as you like
              </li>
            <li style ={{'list-style-type': 'square'}}>
                <em>Multi-clip videos</em><br/>
                Cut together your creations from various shots, pause and restart recordings
              </li>
            <li style ={{'list-style-type': 'square'}}>
                <em>Reverse and slo-mo </em><br/>
                  Drop it slow and back it up in real time
              </li>
            <li style ={{'list-style-type': 'square'}}>
                <em>Shoot how you like</em><br/>
                  Capture video in 1:1, 4:3, or 16:9—or flip things horizontal
              </li>
            <li style ={{'list-style-type': 'square'}}>
                <em>Improved UX/UI</em><br/>
                  Our powerful new user interface makes your edits clearer, faster, stronger
              </li>

          </ul>
        </p>


        <br/><h6>Generate Free</h6>
        <p>
          <ul>
          <li style ={{'list-style-type': 'square'}}>
          <em>Over 50 original filters</em><br/>
          Presets to take your images from Prism to Pointillism
          </li>
          <li style ={{'list-style-type': 'square'}}>
          <em>Over 50 original filters</em><br/>
          Presets to take your images from Prism to Pointillism
          </li>
          <li style ={{'list-style-type': 'square'}}>
          <em>Live control</em><br/>
          Control all effects in real time, even when live streaming
          </li>
          <li style ={{'list-style-type': 'square'}}>
          <em>Video from a still</em><br/>
          Make a photo a motion picture
          </li>
          <li style ={{'list-style-type': 'square'}}>
          <em>Live audio and selected music</em><br/>
          Catch what’s happening around you, or bring in music from iTunes, Spotify, or your own library
          </li>
          </ul>
        </p>


        <br/><h6>What is the Feed?</h6>
        <p>
          Every day hundreds of images and video are shared in-app, the Feed is a selected feed of media created and shared by Generate users. Visit the Feed by clicking on the home icon in the bottom left of the navigation. You may be notified if one of your Generates is selected!
        </p>


        <br/><h6>What is the Feed?</h6>
        <p>
          Every day hundreds of images and video are shared in-app, the Feed is a selected feed of media created and shared by Generate users. Visit the Feed by clicking on the home icon in the bottom left of the navigation. You may be notified if one of your Generates is selected!
        </p>

        <h6>Your Profile</h6>

        <p>This is your personal information and Cloud in Generate. Come here to change your settings, find helpful tips on how to use Generate, contact our team and view all the media you have created with Generate. Click the person icon, just right of the camera in the bottom navigation bar to find it.</p>



        <h6>Generate Free and Subscription:</h6>

        <p>Generate offers two different levels - Our Free and Subscription versions.  The subscription adds a lot of new tools that take your creativity to whole new levels.</p>



        <h6>How to reset your password</h6>

        <p>If you want to update or change your password you can do this by visiting your profile under Password Reset.</p>



        <h6>Where do I learn more about using Generate.</h6>

        <p>Check out our Tutorial Feed for ongoing new ways to use and further your creations in Generate.</p>



        <h6>What are the rules and terms of use around using Generate.</h6>

        <p>Please check out our Terms of Use and Privacy Policy to further understand anything you need to understand about what you can and can not do in Generate.</p>



        <h4>For further information or any general inquiries please contact info@generateapp.com</h4>

      </div>

    </section>

</div>
    </Layout>
  )
}
