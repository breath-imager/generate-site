import React from "react"

import Layout from "../components/layout"
import learnHeader from "../assets/images/learn/learn-header.jpg"
import learnMix from "../assets/images/learn/learn_mix.jpg"
import learnClips from "../assets/images/learn/learn_clips.jpg"
import learnMusic from "../assets/images/learn/learn_music.jpg"


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
                            <img src={learnMix} className="img-fluid fit-image" alt="Learn Mix"/>
                        </div>
                        <div className="col-12 col-md-5">
                            <hr className="thick"/>
                            <h3>Learn how to build custom filters, remix, and and save them.</h3>
                            <a href="#" className="btn video video-modal" data-video="https://player.vimeo.com/video/432534020" data-toggle="modal" data-target="#videoModal">watch tutorial</a>
                        </div>
                    </div>
                    <div className="row featuredTop">
                    <div className="col-12 col-md-7">
                        <img src={learnClips} className="img-fluid fit-image" alt="Learn Clips"/>
                    </div>
                    <div className="col-12 col-md-5">
                        <hr className="thick"/>
                        <h3>Learn how to shoot multiple shots and cut them together.</h3>
                        <a href="#" className="btn video video-modal" data-video="https://player.vimeo.com/video/432535010" data-toggle="modal" data-target="#videoModal">watch tutorial</a>
                    </div>
                    </div>

                    <div className="row featuredTop">
                    <div className="col-12 col-md-7">
                        <img src={learnMusic} className="img-fluid fit-image" alt="Learn Music"/>
                    </div>
                    <div className="col-12 col-md-5">
                        <hr className="thick"/>
                        <h3>Learn how make your visuals dance with your own music.</h3>
                        <a href="#" className="btn video video-modal" data-video="https://player.vimeo.com/video/432535264" data-toggle="modal" data-target="#videoModal">watch tutorial</a>
          
                       
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
