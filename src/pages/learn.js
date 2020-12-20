import React from "react"

import Layout from "../components/layout"
import learnHeader from "../assets/images/learn/learn-header.jpg"
import presetDice from "../assets/images/learn/preset_dice.jpg"
import reactBeat from "../assets/images/learn/react_beat.jpg"
import importVideo from "../assets/images/learn/import_video.jpg"
import saveShare from "../assets/images/learn/save_share.jpg"
import stitchImageVideos from "../assets/images/learn/stitch_images_videos.jpg"


export default function Home() {
  return (
    <Layout page='learn'>
        <div id="learn" className="wrapper">
            {/* header */ }
            <header 
                className="bg-image-full generateHeader d-flex" 
                style={{backgroundImage: `url(${learnHeader})`}}
            >
                <div className="generateHeaderContent justify-content-center align-self-center mx-auto text-center">
                    <h1>How to create with Generate</h1>
                    <h2>You’re unique. Your pictures should be too.</h2>
                </div>
            </header>

            { /*<!-- featured section --> */}
            <section className="learnFeatured">
                <div className="container-fluid">
                    <div className="row featuredTop">
                        <div className="col-12 col-md-7">
                            <img src={importVideo} className="img-fluid fit-image" alt="Learn Mix"/>
                        </div>
                        <div className="col-12 col-md-5">
                            <hr className="thick"/>
                            <h3>Importing videos, adding custom music, and exporting multiple size.</h3>
                            <a href="#" className="btn video video-modal" data-video="https://player.vimeo.com/video/487466542" data-toggle="modal" data-target="#videoModal">watch tutorial</a>
                        </div>
                    </div>
                    <div className="row featuredTop">
                    <div className="col-12 col-md-7">
                        <img src={saveShare} className="img-fluid fit-image" alt="Learn Clips"/>
                    </div>
                    <div className="col-12 col-md-5">
                        <hr className="thick"/>
                        <h3>Saving and sharing personalized filter presets.</h3>
                        <a href="#" className="btn video video-modal" data-video="https://player.vimeo.com/video/487466608" data-toggle="modal" data-target="#videoModal">watch tutorial</a>
                    </div>
                    </div>

                    <div className="row featuredTop">
                    <div className="col-12 col-md-7">
                        <img src={stitchImageVideos} className="img-fluid fit-image" alt="Learn Music"/>
                    </div>
                    <div className="col-12 col-md-5">
                        <hr className="thick"/>
                        <h3>How to create and stitch multiple videos and images together.</h3>
                        <a href="#" className="btn video video-modal" data-video="https://player.vimeo.com/video/487466628" data-toggle="modal" data-target="#videoModal">watch tutorial</a>
          
                       
                    </div>
                    </div>
                    <div className="row featuredTop">
                    <div className="col-12 col-md-7">
                        <img src={presetDice} className="img-fluid fit-image" alt="Learn Music"/>
                    </div>
                    <div className="col-12 col-md-5">
                        <hr className="thick"/>
                        <h3>How to explore new filter combinations with presets and dice button.</h3>
                        <a href="#" className="btn video video-modal" data-video="https://player.vimeo.com/video/487466644" data-toggle="modal" data-target="#videoModal">watch tutorial</a>
          
                       
                    </div>
                    </div>

                    <div className="row featuredTop">
                    <div className="col-12 col-md-7">
                        <img src={reactBeat} className="img-fluid fit-image" alt="Learn Music"/>
                    </div>
                    <div className="col-12 col-md-5">
                        <hr className="thick"/>
                        <h3>How to make filters react to the beat.</h3>
                        <a href="#" className="btn video video-modal" data-video="https://player.vimeo.com/video/487466681" data-toggle="modal" data-target="#videoModal">watch tutorial</a>
          
                       
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
