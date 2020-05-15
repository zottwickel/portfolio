import React, { useState } from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaChevronDown, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import logo from "../../images/logo.png"
import links from "../../constants/links"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const handleNavbar = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <NavWrapper>
      <div className="header">
        <AniLink swipe to="/">
          <img className="logo" src={logo} alt="Scott McKell" />
        </AniLink>
        <FaChevronDown
          className={`toggle-icon ${isOpen ? "chev-open" : ""}`}
          onClick={() => handleNavbar()}
        />
      </div>
      <ul className={`links ${isOpen ? "links-open" : "links-closed"}`}>
        {links.map((item, index) => {
          return (
            <li key={index} className="link-item">
              <AniLink swipe to={item.path} className="nav-link">
                {item.text}
              </AniLink>
            </li>
          )
        })}
      </ul>
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
    </NavWrapper>
  )
}

export default Navbar

const NavWrapper = styled.nav`
  background: ${styles.colors.mainGrey};
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    .toggle-icon {
      display: none;
    }
    .links {
      height: auto !important;
      display: flex;
      margin: 0 auto;
    }
    .icons {
      display: flex !important;
      width: 10rem;
      justify-content: space-around;
    }
  }
  .header {
    padding: 0.4rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    margin: -2rem -1rem;
    height: 150px;
  }
  .toggle-icon {
    font-size: 2rem;
    cursor: pointer;
    ${styles.transition1};
  }
  .chev-open {
    transform: rotate(180deg);
  }
  .links {
    overflow: hidden;
    ${styles.transition1};
  }
  .links-open {
    height: 176px;
  }
  .links-closed {
    height: 0px;
  }
  .link-item {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    color: ${styles.colors.mainGreen};
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transition1};
    &:hover {
      background: ${styles.colors.mainDarkGrey};
      color: ${styles.colors.mainLime};
    }
  }
  .icons {
    display: none;
  }
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transition1};
    &:hover {
      color: ${styles.colors.mainGreen};
    }
  }
  .github-icon {
    color: #211F1F;
  }
  .linkedin-icon {
    color: #0e76a8;
  }
  .email-icon {
    color: #D44638;
  }
`
