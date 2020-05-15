import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner, Hero } from "../utils"
import img from "../images/sax.jpg"
import Videos from "../components/Music/Videos"
import Bio from "../components/Music/Bio"

const music = () => {
  return (
    <Layout>
      <SEO title="Music" />
      <Hero home={false} img={img}>
        <Banner
          title="music"
          info="This page is a bit about my music. So far it has some videos of Slim and I playing around town."
        ></Banner>
      </Hero>
      <Bio />
      <Videos />
    </Layout>
  )
}

export default music
