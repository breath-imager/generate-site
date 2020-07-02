import React, {useState} from "react"
import Modal from "react-modal"

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
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalVM1">WATCH TUTORIAL</button>
                            <div className="modal fade" id="modalVM1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                            aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body mb-0 p-0">
                                            <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                            <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/432534020"
                                                allowfullscreen></iframe>
                                            </div>

                                        </div>
                                        <div className="modal-footer justify-content-center flex-column flex-md-row">
                                            
                                            <button type="button" className="btn btn-outline-primary btn-rounded btn-md ml-4"
                                            data-dismiss="modal">Close</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row featuredTop">
                    <div className="col-12 col-md-7">
                        <img src={learnClips} className="img-fluid fit-image" alt="Learn Clips"/>
                    </div>
                    <div className="col-12 col-md-5">
                        <hr className="thick"/>
                        <h3>Learn how to shoot multiple shots and cut them together. </h3>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalVM2">WATCH TUTORIAL</button>
                            <div className="modal fade" id="modalVM2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                            aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body mb-0 p-0">
                                            <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                            <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/432535010"
                                                allowfullscreen></iframe>
                                            </div>

                                        </div>
                                        <div className="modal-footer justify-content-center flex-column flex-md-row">
                                            
                                            <button type="button" className="btn btn-outline-primary btn-rounded btn-md ml-4"
                                            data-dismiss="modal">Close</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>

                    <div className="row featuredTop">
                    <div className="col-12 col-md-7">
                        <img src={learnMusic} className="img-fluid fit-image" alt="Learn Music"/>
                    </div>
                    <div className="col-12 col-md-5">
                        <hr className="thick"/>
                        <h3>Learn how make your visuals dance with your own music.</h3>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalVM3">WATCH TUTORIAL</button>
                            <div className="modal fade" id="modalVM3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                            aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body mb-0 p-0">
                                            <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                            <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/432535264"
                                                allowfullscreen></iframe>
                                            </div>

                                        </div>
                                        <div className="modal-footer justify-content-center flex-column flex-md-row">
                                            
                                            <button type="button" className="btn btn-outline-primary btn-rounded btn-md ml-4"
                                            data-dismiss="modal">Close</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>

                </div>
            </section>




      </div>
    </Layout>
  )
}
