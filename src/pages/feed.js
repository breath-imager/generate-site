import Parse from "parse"
import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import ReactPlayer from "react-player/file"

import reloadIcon from "../assets/images/reload-icon.svg"
import playButtonIcon from "../assets/images/play-button.jpeg"

const initializeParse = () => {
  // stored key in a .env file in root directory

  Parse.initialize("dev-generate", process.env.PARSE_PROD_API_KEY)
  //Parse.initialize("dev-generate"  , '')
  Parse.serverURL = "https://generate-parse-dev.herokuapp.com/parse"
}

const getFeed = async (page = 0) => {
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

  // How much you want on a page
  const displayLimit = 15

  // Create the Post object
  const Post = Parse.Object.extend("Post")

  // Initialize the query
  const PostQuery = new Parse.Query(Post)

  // Get the count on a collection
  const count = await PostQuery.count()

  // Retrieve the most recent ones
  PostQuery.descending("createdAt")

  // Limit of 10 items
  PostQuery.limit(displayLimit)

  console.log(page)

  // Ensure we paginate to the correct page
  PostQuery.skip(page * displayLimit)

  // include user info (need to retrieve username specifically)
  PostQuery.include("publicUser.username")

  // set constraints to only include curated posts
  PostQuery.equalTo("forCurated", "YES")

  const results = await PostQuery.find()

  return { page, results }
}

const Img = ({ data, onImageLoaded }) => {
  return (
    <div className="grid-item grid-item--width2">
      <img
        src={data.thumbnail._url}
        className="img-fluid fit-image"
        alt="instafeed Generate"
        onLoad={() => onImageLoaded()}
      />
      <p>{data.publicUser.attributes["username"]}</p>
    </div>
  )
}

const Video = ({ data, index, onImageLoaded }) => {
  const [showVideo, setShowVideo] = React.useState(false)
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })
  const [showLoading, setShowLoading] = React.useState(false)

  const captureDimensions = id => {
    const imgEl = document.querySelector(`#${id}`)

    setDimensions({ width: imgEl.clientWidth, height: imgEl.clientHeight })
  }

  React.useEffect(() => {
    if (showVideo === true) {
      setShowLoading(true)
    }
  }, [showVideo])

  const ThumbnailFragment = () => {
    return (
      <>
        <img
          src={data.thumbnail._url}
          id={`feed-item-thumbnail-${index}`}
          className="img-fluid fit-image"
          alt="instafeed Generate"
          onLoad={() => {
            onImageLoaded()
            captureDimensions(`feed-item-thumbnail-${index}`)
          }}
        />
        <div
          className="video-overlay"
          style={{
            width: dimensions.width,
            height: dimensions.height,
          }}
        >
          <img
            src={playButtonIcon}
            id={`feed-item-play-button-${index}`}
            className="img-fluid fit-image"
          />
        </div>
      </>
    )
  }

  return (
    <div>
      <div
        className="grid-item grid-item--width2"
        style={{ position: "relative" }}
      >
        <button
          className="video-button"
          onClick={() => setShowVideo(!showVideo)}
        >
          {showVideo ? (
            <>
              <ReactPlayer
                url={data.imageFile._url}
                config={{
                  attributes: {
                    alt: "instafeed Generate",
                    autoPlay: true,
                    muted: true,
                    playsInline: true,
                  },
                }}
                onReady={() => {
                  console.log("load")
                  setShowLoading(false)
                }}
                width={dimensions.width}
                height={dimensions.height}
              />
              {showLoading && (
                <div
                  className="video-loader"
                  style={{
                    width: dimensions.width,
                    height: dimensions.height,
                  }}
                >
                  <>
                    <img
                      src={data.thumbnail._url}
                      id={`feed-item-thumbnail-${index}`}
                      className="img-fluid fit-image"
                      alt="instafeed Generate"
                      onLoad={() => {
                        onImageLoaded()
                        captureDimensions(`feed-item-thumbnail-${index}`)
                      }}
                    />
                    <div className="loading-text">Loading...</div>
                  </>
                </div>
              )}
            </>
          ) : (
            <>
              <img
                src={data.thumbnail._url}
                id={`feed-item-thumbnail-${index}`}
                className="img-fluid fit-image"
                alt="instafeed Generate"
                onLoad={() => {
                  onImageLoaded()
                  captureDimensions(`feed-item-thumbnail-${index}`)
                }}
              />
              <div
                className="video-overlay"
                style={{
                  width: dimensions.width,
                  height: dimensions.height,
                }}
              >
                <img
                  src={playButtonIcon}
                  id={`feed-item-play-button-${index}`}
                  className="img-fluid fit-image"
                />
              </div>
            </>
          )}
        </button>

        <p>{data.publicUser.attributes["username"]}</p>
      </div>
    </div>
  )
}

const FeedItem = ({ item, index, imagesLoaded, onImageLoaded }) => {
  return (
    <div className={`feed-item${imagesLoaded ? "" : "-hidden"}`}>
      {
        {
          PNG: (
            <Img
              data={item.attributes}
              index={index}
              onImageLoaded={onImageLoaded}
            />
          ),
          MP4: (
            <Video
              data={item.attributes}
              index={index}
              onImageLoaded={onImageLoaded}
            />
          ),
        }[item.attributes.extension]
      }
    </div>
  )
}

const Feed = ({ data, imagesLoaded, setImageLoaded }) => {
  return (
    <div>
      {data.map((item, index) => (
        <FeedItem
          key={`some-unique-key-${index}`}
          item={item}
          index={index}
          imagesLoaded={imagesLoaded}
          onImageLoaded={() => setImageLoaded(item.id)}
        />
      ))}
    </div>
  )
}

export default function Home() {
  const [parseResponse, setParseResponse] = React.useState(null)
  const [imagesLoaded, setImagesLoaded] = React.useState(false)
  const [pageNumber, setPageNumber] = useState(-1)
  let loadedImages = []

  const getNextPageOfFeed = async () => {
    const { page, results } = await getFeed(pageNumber + 1)
    setParseResponse(
      parseResponse ? [...parseResponse, ...results] : [...results]
    )
    setPageNumber(page)
  }

  useEffect(() => {
    const init = async () => {
      initializeParse()
      await getNextPageOfFeed()
    }

    init()
  }, [])

  if (!parseResponse || parseResponse.legnth === 0) {
    // Replace null with a loading screen component
    return null
  }

  const setImageLoaded = imageId => {
    loadedImages.push(imageId)

    if (loadedImages.length >= parseResponse.length) {
      setImagesLoaded(true)
    }
  }

  // TODO: Move layout into a proper layout so that the null statement above doesnt caue a blank screen
  return (
    <Layout page="feed">
      <div id="feed" className="wrapper">
        {/* featured section */}
        <section className="feedContent">
          <div className="container-full-width">
            <div className="grid">
              <div className="grid-sizer"></div>

              {/* dynamic section */}
              <Feed
                data={parseResponse}
                imagesLoaded={imagesLoaded}
                setImageLoaded={setImageLoaded}
              />
            </div>

            <div className="buttonReload W-100 d-flex mt-5 mb-5">
              <button
                className="mx-auto text-center video-button"
                onClick={getNextPageOfFeed}
              >
                <img src={reloadIcon} alt="Reload icon" />
              </button>
            </div>
          </div>
        </section>

        <div className="feedFooter w-100 mx-auto">
          <p>
            <strong>Generate</strong> - The mobile photo and video editing app
            for creatives{" "}
            <a
              href="https://apps.apple.com/us/app/generate-video-photo-effects/id808563377"
              className="btn"
            >
              Get Now
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}
