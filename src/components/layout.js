/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { createGlobalStyle } from "styled-components"
import { styles } from "../utils"
import Navbar from "./Navigation/Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
    </>
  )
}

export default Layout

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Maven Pro', sans-serif;
    color: ${styles.colors.mainBlack};
    background: ${styles.colors.mainWhite};
  }
`
