import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"

const Info = () => {
  return (
    <InfoWrapper>
      <h2 className="heading">My Email:</h2>
      <p>
        <a
          className="link"
          href="mailto:scott.g.mckell@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          scott.g.mckell@gmail.com
        </a>
      </p>
      <h2 className="heading">My Phone:</h2>
      <p>
        <a
          className="link"
          href="tel:8017029021"
          target="_blank"
          rel="noopener noreferrer"
        >
          1-801-702-9021
        </a>
      </p>
      <h2 className="heading">Form Powered By:</h2>
      <p>
        <a
          className="link"
          href="https://formspree.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Formspree.io
        </a>
      </p>
    </InfoWrapper>
  )
}

export default Info

const InfoWrapper = styled.section`
  padding: 0 2rem 2rem 2rem;
  .link {
    font-size: 2rem;
    color: ${styles.colors.mainGreen};
    text-decoration: none;
  }
  .heading {
    margin-top: 2rem;
  }
`
