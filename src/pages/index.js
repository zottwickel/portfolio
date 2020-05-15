import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Hero, Banner } from "../utils"
import Projects from "../components/Home/Projects"
import QuickInfo from "../components/Home/QuickInfo"
import img from "../images/home-image.jpg"


const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero home={true} img={img}>
        <Banner
          title="welcome"
          info="This is my blog/portfolio. Have a look around and let me know what you think in the Contact section."
        >
          <AniLink swipe to="/contact" className="btn-header">
            contact
          </AniLink>
        </Banner>
      </Hero>
      <Projects />
      <QuickInfo />
    </Layout>
  )
}

export default IndexPage
