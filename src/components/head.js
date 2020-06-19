import React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"

export default function Head() {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="./assets/app/apple-icon.png"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Generate" />

      <link
        rel="shortcut icon"
        sizes="16x16"
        href="./assets/images/app/icon-16x16.png"
      />
      <link
        rel="shortcut icon"
        sizes="196x196"
        href="./assets/images/app/icon-196x196.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        href="./assets/images/app/icon-152x152.png"
      />

      <title>Generate | Home</title>
      <link
        href="./assets/images/favicon.gif"
        rel="shortcut icon"
        type="image/x-icon"
      />

      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"
      ></script>

      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"
      ></script>
    </Helmet>
  )
}
