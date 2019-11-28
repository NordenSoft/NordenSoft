/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
  query MyQuery {
    site: sanitySiteSettings {
      keywords
      title
      description
      author
      logo {
        asset {
          id
          url
          path
        }
      }
    },
    footer: sanitySiteExtra {
      _rawContactFormText
      _rawContanctFormImage
      _rawContactHeader
      _rawFooterContactBlock
      _rawFooterFindBlock
      _rawFooterLogo
      _rawFooterText
      contactFormButtonText
      email
      facebook
      linkedin
      twitter
      whatsapp
    },
    header: sanitySiteExtra {
      email
      facebook
      linkedin
      twitter
      whatsapp
    }
  } 
`);

  return (
    <>
      <Header siteTitle={data.site.title} siteSettings={data.site} data={data.header}/>
      <div>{children}</div>
      <ScrollTop />
      <FloatForm data={data.footer}/>
      <Footer data={data.footer} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
