import React from "react"
import { styles } from "../utils"
import styled from "styled-components"

const Banner = ({ title, info, children }) => {
  return (
    <StyledBanner>
      <h1 className="title">{title}</h1>
      <p className="info">{info}</p>
      {children}
    </StyledBanner>
  )
}

const StyledBanner = styled.div`
  text-align: center;
  color: ${styles.colors.mainWhite};
  background: rgb(112, 112, 112, 0.5);
  border-radius: 5px;
  .title {
    font-size: 3.3rem;
    text-transform: uppercase;
    padding: 1rem;
    letter-spacing: 6px;
  }
  .info {
    width: 85%;
    margin: 0 auto;
    margin-bottom: 2rem;
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 0.1rem;
  }
  .btn-header {
    text-transform: uppercase;
    ${styles.transition1};
    color: ${styles.colors.mainWhite};
    display: inline-block;
    padding: 0.9rem 1.6rem;
    border: 2px solid ${styles.colors.mainWhite};
    cursor: pointer;
    margin-bottom: 2rem;
    text-decoration: none;
    font-size: 1.5rem;
    &:hover {
      background: ${styles.colors.mainDarkGrey};
      color: ${styles.colors.mainLime};
    }
  }
  @media (min-width: 768px) {
    .title {
      font-size: 4.5rem;
    }
    .info {
      width: 70%;
    }
  }
`

export default Banner
