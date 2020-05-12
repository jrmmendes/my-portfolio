import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Navbar } from './navbar'
import { Header } from './header'

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      <Header />
    </>
  )
}
//<main>{children}</main>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
