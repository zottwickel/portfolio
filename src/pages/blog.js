import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero, Banner } from "../utils"
import img from "../images/blog.jpg"

const blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Hero home={false} img={img}>
        <Banner
          title="blog"
          info="This is where I will publish my blog. I hope to have enough articles to publish soon."
        ></Banner>
      </Hero>
    </Layout>
  )
}

export default blog
