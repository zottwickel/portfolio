import React from 'react'
import styled from "styled-components"
import { styles } from "../../utils"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  return (
    <FooterWrapper>
      <h1>Website by Scott McKell</h1>
      <div className="icons">
        <a
          href="https://github.com/zottwickel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon github-icon" />
        </a>
        <a
          href="https://linkedin.com/in/scott-mckell/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon linkedin-icon" />
        </a>
        <a
          href="mailto:scott.g.mckell@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="icon email-icon" />
        </a>
      </div>
      <h2 className="tech">Portfolio Tech Used:</h2>
      <img className="logo" src={require('../../images/html-css.png')} alt="html/css logo" />
      <img className="logo logo-margin" src={require('../../images/js.jpg')} alt="javascript logo" />
      <img className="logo logo-margin" src={require('../../images/react.svg')} alt="react logo" />
      <img className="logo logo-margin" src={require('../../images/gatsby.png')} alt="gatsby logo" />
      <img className="logo logo-margin" src={require('../../images/contentful.png')} alt="contentful logo" />
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  background: ${styles.colors.mainDarkGrey};
  text-align: center;
  color: ${styles.colors.mainWhite};
  padding: 1rem 0;
  .icon {
    font-size: 3rem;
    color: white;
    cursor: pointer;
    ${styles.transition1};
    margin: 1rem;
    &:hover {
      color: ${styles.colors.mainLime};
    }
  }
  .logo {
    height: 50px;
    width: auto;
    margin-top: 1rem;
  }
  .logo-margin {
    margin-right: 1rem;
    margin-left: 1rem;
  }
  .tech {
    font-family: 'Orbitron';
    letter-spacing: 0.1rem;
  }
`