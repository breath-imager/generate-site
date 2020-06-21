import React, { useEffect } from "react"

import Head from "./head"
import Nav from "./nav"
import Foot from "./foot"

/**
 * 
 *
 * I'm importing the jquery and bootstrap files in the order
 * they were in the original index.html or whatever
 *
 * This way is good because it
 * a) doesn't rely on a CDN
 * b) ensures they load in the order I specify, agnostic of network
 *
 */
import "../styles/bootstrap.min.css"
import "../styles/fonts.css"
import "../styles/generate.css"

/**
 * GRHAM
 *
 * This is the original scripts.js file, ported to something compatible
 * with react. More details on that inside this file I made below 👇
 */
import { applyJqueryVoodoo } from "../assets/js/legacy/jquery.init"

/*
 * 
 *
 * This is a Wrapper component I made so that every page doesn't need to individually
 * include helmet, nav, and footer. The syntax to use something like this would be
 *
 * <Layout>
 *      <div> Hi </div>
 * </Layout>
 *
 * Which would render:
 *
 * <div>
 *      <Head/>
 *      <Nav/>
 *      <div> Hi </div>
 *      <Foot/>
 * </div>
 *
 * Any screen should just have <Layout> as its top most element now instead of div
 * I've removed the Head, Foot, and Nav tags from your other pages
 *
 */
const Layout = (props) => {
  /**
   * 
   *  This useEffect is tantamount to saying when everything has rendered on screen,
   *  apply the functions that were originally in scripts.js
   *
   */

  useEffect(() => applyJqueryVoodoo(), [])
  return (
    <div>
      <Head />
      <Nav page={props.page} />
      {props.children}
      <Foot />
    </div>
  )
}

export default Layout
