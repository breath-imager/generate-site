import React from "react"


import filterImage from "../assets/images/home/filters-section.jpg"
import logoImage from "../assets/images/logo.png"
import adamImage from "../assets/images/learn/adam-marshal.jpg"
import imageFilter2 from "../assets/images/home/filter2.jpg"
import imageAppStoreLogo from "../assets/images/app-store-logo.png"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div id="home" className="wrapper">
        <header>
          <div className="overlay"></div>
          <video
            playsInline="playsInline"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source
              src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
              type="video/mp4"
            />
          </video>
          <div className="bg-image-full generateHeader">
            <div className="generateHeaderContent vcenter text-center">
              <h1>The mobile photo and video editing app for creatives</h1>
              <h2>You’re unique. Your pictures should be too.</h2>
            </div>
            <div className="vbottom homeButton">
              <a href="#" className="btn">
                Download Generate
              </a>
            </div>
          </div>
        </header>

        {/* filter section / subheader */}
        <section
          className="bg-image-full generateSubHeader d-flex"
          style={{ backgroundImage: `url(${filterImage})` }}
        >
          <div className="generateHeaderContent align-self-center mx-auto text-center">
            <h1>Filters without limits</h1>
            <h2>
              Realize your vision with custom effect combinations. Use our
              editing tools to take presets to new heights.
            </h2>
            <a href="#" className="btn">
              Download Generate
            </a>
          </div>
        </section>

        {/* services section */}
        <section className="generateService">
          <div className="container-fluid">
            <hr className="thick"></hr>
            <div className="row">
              <div className="col-12 col-md">
                <h1>Customize</h1>
                <p>
                  Layer a glitch over a hue. Amp up your stills with animation.
                  Capture multi-clip video and adjust your effects in real time.
                  Generate gives you pure creative freedom.
                </p>
              </div>
              <div className="col-12 col-md">
                <h1>Save</h1>
                <p>
                  Lay claim to your photo effect combos and save them for next
                  time. Establish your signature style, and then change it.
                  After all, the blends are endless.
                </p>
              </div>
              <div className="col-12 col-md">
                <h1>Share</h1>
                <p>
                  Send your filter mods out into the world. Become the monarch
                  of mashups. The sovereign of style. Generate lets you share
                  your saved combos with who you want, when you want. No caps,
                  no boundaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* featured section */}
        <section className="generateFeatured">
          <div className="container-fluid">
            <h1>Featured</h1>
            <div className="row featuredTop">
              <div className="col-12 col-md-7">
                <img
                  src={adamImage}
                  className="img-fluid fit-image"
                  alt="Adam marshal"
                />
              </div>
              <div className="col-12 col-md-5">
                <hr className="thick" />
                <h3>
                  Adam Marshal shows you how to save and share filter
                  combinations.
                </h3>
                <a href="#" className="btn">
                  watch tutorial
                </a>
              </div>
            </div>
            <div className="row  featuredBottom">
              <div className="col-12 col-md-5">
                <hr className="thick" />
                <h3>Refraction presented by Generate</h3>
                <p>
                  An online festival presented in and around the Summer Solstice
                  in natural and digital environments.
                </p>
                <a href="#" className="btn">
                  watch tutorial
                </a>
              </div>
              <div className="col-12 col-md-7">
                <img
                  src={imageFilter2}
                  className="img-fluid fit-image"
                  alt="image Filter Generate"
                />
              </div>
            </div>
          </div>
        </section>

        {/* other products section */}
        <section className="generateProduct">
          <div className="container-fluid">
            <hr className="thick"></hr>
            <h1>Two was to create</h1>
            <div className="row row-eq-height">
              <div className="col-12 col-md">
                <h2>Generate Free</h2>
                <p>Basic Features</p>
                <a href="#" className="btn">
                  Try Generate
                </a>
                <div className="featuresContent">
                  <p>
                    <strong>→ Over 50 original filters</strong>
                    <br />
                    Presets to take your images from Prism to Pointillism
                  </p>
                  <p>
                    <strong>→ Video from a still</strong>
                    <br />
                    Make a photo a motion picture
                  </p>
                  <p>
                    <strong>→ Live audio</strong>
                    <br />
                    Catch what’s happening around you, or bring in music from
                    iTunes
                  </p>
                  <p>
                    <strong>→ Audio reactivity</strong>
                    <br />
                    Make your images and video dance to the beat
                  </p>
                  <p>
                    <strong>→ Live control</strong>
                    <br />
                    Control all effects in real time, even when live streaming
                  </p>
                  <p>
                    <strong>→ Combine filters</strong>
                    <br />
                    Layer your presets to create new aesthetics
                  </p>
                  <p>
                    <strong>→ Single-clip videos</strong>
                    <br />
                    Shoot what you want, when you want, from beginning to end
                  </p>
                </div>
                <a href="#" target="_blank" className="logoAppStore">
                  <img
                    src={imageAppStoreLogo}
                    className="img-fluid"
                    alt="logo app store"
                  />
                </a>
              </div>
              <div className="col-12 col-md">
                <hr className="thick d-block d-sm-none" />
                <h2>Generate Pro</h2>
                <p>suscription</p>
                <a href="#" className="btn">
                  Subscribe
                </a>
                <div className="featuresContent">
                  <p>
                    <strong>→ Over 100 new filters</strong>
                    <br />
                    We’re redefining presets: dive into everything from LUT
                    color replacement to real-time animation
                  </p>
                  <p>
                    <strong>→ Style transfer effects</strong>
                    <br />
                    Infuse an image with another image’s soul
                  </p>
                  <p>
                    <strong>→ Build filter combos</strong>
                    <br />
                    Take your presets from hundreds to infinity: layer filters
                    and effects and save them as new combinations
                  </p>
                  <p>
                    <strong>→ Unlimited effect sharing</strong>
                    <br />
                    Send your saved filter combinations out into the world—as
                    many times as you like
                  </p>
                  <p>
                    <strong>→ Multi-clip videos</strong>
                    <br />
                    Cut together your creations from various shots, pause and
                    restart recordings
                  </p>
                  <p>
                    <strong>→ Reverse and slo-mo</strong>
                    <br />
                    Drop it slow and back it up in real time
                  </p>
                  <p>
                    <strong>→ Choose your tunes</strong>
                    <br />
                    Select audio from Spotify, iTunes, or your own library
                  </p>
                  <p>
                    <strong>→ Shoot how you like</strong>
                    <br />
                    Capture video in 1:1, 4:3, or 16:9—or flip things horizontal
                  </p>
                  <p>
                    <strong>→ Redesign is a beautiful thing</strong>
                    <br />
                    Our powerful new user interface makes you the creator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
