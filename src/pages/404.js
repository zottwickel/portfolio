import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Page Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist. Head back to the home page <Link to="/">here</Link>.</p>
  </Layout>
)

export default NotFoundPage
