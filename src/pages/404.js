import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero, Banner } from "../utils"
import img from "../images/image-1.jpeg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <Hero home={false} img={img}>
    <Banner
          title="404: Not Found"
          info="You have reached a route that does not exist. Oops!"
        >
          <AniLink swipe to="/home" className="btn-header">
            home
          </AniLink>
        </Banner>
    </Hero>
  </Layout>
)

export default NotFoundPage
