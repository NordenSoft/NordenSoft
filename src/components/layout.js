/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import FloatForm from "./floatForm"
import ScrollTop from './scrollTop'
import "../styles/bootstrap.min.css"
import "../styles/layout.css"
import '../styles/slick.min.css'

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    offset: function (anchor, toggle) {
      return 55;
    },
  });
}


const data = graphql`
  query MyQuery {
    sanitySiteSettings {
      keywords
      title
      description
      author
    }
  } 
`;


const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle={data.title} />
      <div>{children}</div>
      <ScrollTop />
      <FloatForm />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
