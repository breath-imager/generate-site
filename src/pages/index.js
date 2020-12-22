import React from "react"


import filterImage from "../assets/images/home/filters-section.jpg"
import presetDice from "../assets/images/learn/preset_dice.jpg"
import imageAppStoreLogo from "../assets/images/app-store-logo.png"
import learnClips from "../assets/images/learn/learn_clips.jpg"
import refractionFestImage from "../assets/images/home/home_banner_refraction.jpg"
import homeVideo from "../assets/video/home_video_1_xs2.mp4"
import Layout from "../components/layout"

const APP_URL = 'https://apps.apple.com/app/id808563377'

export default function Home() {
  return (
    <Layout page='home'>
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
              src={homeVideo}
              type="video/mp4"
            />
          </video>
          <div className="bg-image-full generateHeader">
            <div className="generateHeaderContent vcenter text-center">
              <h1>The mobile photo and video editing app for creatives</h1>
              <h2>You’re unique. Your pictures should be too.</h2>
            </div>
            <div className="vbottom homeButton">
              <a href={APP_URL} className="btn">
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
          <div class="container-fluid">
        <div class="row">
        <div class="col-12 col-md-6 my-auto">
          <div class="video">
            <iframe src="https://player.vimeo.com/video/492618351?byline=0&amp;portrait=0&amp;color=3a6774&amp;autoplay=0&amp;loop=1" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" frameborder="0" height="100%" width="100%" class="__web-inspector-hide-shortcut__"></iframe>
          </div>
        </div>
        <div class="col-12 col-md-6  my-auto">
          <div class="generateHeaderContent">
            <h1>Filters without limits</h1>
            <h2>Realize your vision with custom effect combinations. Use our editing tools to take presets to new heights.</h2>
            <a href={APP_URL} className="btn">
              Download Generate
            </a>
          </div>
        </div>
        </div>
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
                  src={presetDice}
                  className="img-fluid fit-image"
                  alt="Sebastian Stam"
                />
              </div>
              <div className="col-12 col-md-5">
                <hr className="thick" />
                <h3>How to explore new filter combinations with presets and dice button.</h3>
                <a href="#" className="btn video video-modal" data-video="https://player.vimeo.com/video/487466644" data-toggle="modal" data-target="#videoModal">watch tutorial</a>
               
              </div>
            </div>
            <div className="row  featuredBottom">
              <div className="col-12 col-md-5">
                <hr className="thick" />
                <h3>Refraction presented by Generate</h3>
                <p>
                Refraction is a festival and ongoing project celebrating electronic music, visual art & internet culture produced and curated by Generate. The first years festival happened in the summer of 2020. Thank you to all of our artists, musicians and partners who contributed to the first edition. To watch all of the archived performances, you can view them here(link to refraction) — or special features with our partners at <a href="https://www.contacttokyo.com/" target="_blank">Contact</a>, <a href="https://crackmagazine.net/" target="_blank">Crack</a>, <a href="https://www.factmag.com/" target="_blank">FACT</a>, <a href="http://www.mutek.org/" target="_blank">MUTEK</a>, <a href="http://www.publicrecords.tv/" target="_blank">Public Access</a> and <a href="https://worldwidefm.net/" target="_blank">Worldwide FM</a>.
                </p>
                <a href="https://www.refractionfestival.com" className="btn" target="_blank">
                  Visit Website
                </a>
              </div>
              <div className="col-12 col-md-7">
              <a href="https://www.refractionfestival.com" target="_blank">
                <img
                  src={refractionFestImage}
                  className="img-fluid fit-image"
                  alt="image Filter Generate"
                />
              </a>
              </div>
            </div>
          </div>
        </section>

        {/* other products section */}
        <section className="generateProduct">
          <div className="container-fluid">
            <hr className="thick"></hr>
            <h1>Two ways to create</h1>
            <div className="row row-eq-height">
              <div className="col-12 col-md">
                <h2>Generate Free</h2>
                <p>Basic Features</p>
                <a href={APP_URL}  className="btn">
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
                <a href={APP_URL}  target="_blank" className="logoAppStore">
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
                <p>Subscription</p>
                <a href={APP_URL}  className="btn">
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
        
      {/* <!-- dialog-modal-videos --> */}
      <div className="modal fade" id="videoModal" tabIndex="0" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-body">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"></button>
                      <iframe title="Blank" width="100%" height="100%" src="" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
                  </div>
              </div>
          </div>
      </div>
    </Layout>
  )
}
