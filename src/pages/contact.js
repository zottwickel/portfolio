import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import img from "../images/letters.jpg"
import { Hero, Banner } from "../utils"
import Email from "../components/Contact/Email"
import Info from "../components/Contact/Info"
import styled from "styled-components"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Hero home={false} img={img}>
        <Banner
          title="contact"
          info="Shoot me an email or a text. I'm currently open to new opportunities. I'll see what I can do for you."
        ></Banner>
      </Hero>
      <ContactWrapper>
        <Email className="email" />
        <Info className="info" />
      </ContactWrapper>
    </Layout>
  )
}

export default contact

const ContactWrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding: 2rem;
  }
`
