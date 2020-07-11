
import Parse from "parse"
import React, { useEffect } from "react"
import Layout from "../components/layout"

import reloadIcon from "../assets/images/reload-icon.svg"



const initializeParse = () => {
  // stored key in a .env file in root directory

  Parse.initialize("dev-generate"  , process.env.PARSE_DEV_API__READONLY_KEY)
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
  
  
  const PostFavourite = Parse.Object.extend("PostFavourite")

  // Initialize the query.
  const PostFavouriteQuery = new Parse.Query(PostFavourite)

  // retrieve the most recent ones
  PostFavouriteQuery.descending("createdAt")

  // only retrieve the last ten
  PostFavouriteQuery.limit(10)

  // include the post data with each comment
  PostFavouriteQuery.include("toPost")
  // Set constraints on your query to get the results you want.
  //query.notEqualTo("myOtherAttribute", "myOtherValue")

  // Execute and return the results of the query.
  // This is shorthand, we can also write this as:
  // const results = await query.find()
  // return results
  const results = await PostFavouriteQuery.find()
  //return results

  const PostIds = []
  for (let i = 0; i < results.length; i++) {
    results[i] && PostIds.push(results[i].get("toPost"))
  }

  return PostIds

}

const FeedItem = ({ item }) => {
  return (
    <div className="grid-item grid-item--width2">
      <img
        src={item.attributes.thumbnail300._url}
        className="img-fluid fit-image"
        alt="instafeed Generate"
      />
      <p>{item.attributes.userName}</p>
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
            <a href="https://apps.apple.com/ca/app/generate-video-photo-effects/id808563377" className="btn">
              Get Now
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}
