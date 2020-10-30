
import Parse from "parse"
import React, { useEffect } from "react"
import Layout from "../components/layout"

import reloadIcon from "../assets/images/reload-icon.svg"



const initializeParse = () => {
  // stored key in a .env file in root directory

  Parse.initialize("dev-generate"  , process.env.PARSE_PROD_API_KEY)
  //Parse.initialize("dev-generate"  , '')
  Parse.serverURL = "https://generate-parse-dev.herokuapp.com/parse"
}


const getFeed = async () => {
  // Define a name for our model ...
  // I don't understand Parse well but it seems unlike SQL
  // Data is just amorphous and you just query for data that matches
  // a set of parameteres

  /** 
   * 
   * db write test
   * 
   */
  
   /*
  const WriteTest = Parse.Object.extend("WriteTest")
  //const WriteTest = Parse.Object.extend("Post")
  const writeTest = new WriteTest();
  writeTest.set("written", true);
  writeTest.save();
  */
  
  const Post = Parse.Object.extend("Post")

  // Initialize the query
  const PostQuery = new Parse.Query(Post)

  // Retrieve the most recent ones
  PostQuery.descending("createdAt")

  // Limit of 10 items
  PostQuery.limit(100)

  // include user info (need to retrieve username specifically)
  PostQuery.include("publicUser.username")

  // set constraints to only include curated posts
  PostQuery.equalTo("forCurated", "YES")
 
  const results = await PostQuery.find()


  console.log(results)

  return results

}

const Img = ({ data }) => {
  return (
    <div className="grid-item grid-item--width2">
    <img
      src={data.thumbnail._url}
      className="img-fluid fit-image"
      alt="instafeed Generate"
    />
    <p>{data.publicUser.attributes['username']}</p>
  </div>
  )

}

const Video = ({ data }) => {
  
  return (
    <div>
      <div className="grid-item grid-item--width2">
        <a href="#" className="btn video video-modal" data-video={data.imageFile._url} data-toggle="modal" data-target="#videoModal">
        <img
          src={data.thumbnail._url}
          className="img-fluid fit-image"
          alt="instafeed Generate"
        />
        </a>
        <p>{data.publicUser.attributes['username']}</p>

          
      </div>
  
    </div>
  ) 


}

const FeedItem = ({ item }) => {
  return (
    <div>
      {
        {
          'PNG': <Img data={item.attributes} />,
          'MP4': <Img data={item.attributes} />
        } [item.attributes.extension]
        
      }
      
    </div>
    
  )
}

const Feed = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <FeedItem key={`some-unique-key-${index}`} item={item} />
      ))}
    </div>
  )
}

export default function Home() {
  const [parseResponse, setParseResponse] = React.useState(null)

  
  useEffect(() => {
    const init = async () => {
      initializeParse()
      const feed = await getFeed()
      setParseResponse(feed)
    }

    init()
  }, [])

  
  if (!parseResponse || parseResponse.legnth === 0) {
    // Replace null with a loading screen component
    return null
  }

  return (
    <Layout page="feed">
      <div id="feed" className="wrapper">
        {/* featured section */}
        <section className="feedContent">
          <div className="container-full-width">
            <div className="grid">
              <div className="grid-sizer"></div>

              {/* dynamic section */}
              <Feed data={parseResponse} />

            </div>

            <div className="buttonReload W-100 d-flex mt-5 mb-5">
             <a href="/feed" className="mx-auto text-center">
                <img
                  src={reloadIcon}
                  alt="Reload icon"
                />
              </a>
            </div>
          </div>
        </section>

        <div className="feedFooter w-100 mx-auto">
          <p>
            <strong>Generate</strong> - The mobile photo and video editing app
            for creatives{" "}
            <a href="https://apps.apple.com/us/app/generate-video-photo-effects/id808563377" className="btn">
              Get Now
            </a>
          </p>
        </div>


      <div className="modal fade" id="videoModal"tabIndex="0" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
           
            <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"></button>
                <iframe title="Blank" width="100%" height="100%" src="" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
            </div>
        </div>
      </div>
    </div>

      
      </div>
    </Layout>
  )
}
