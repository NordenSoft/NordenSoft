/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import groq from 'groq'
import client from '../../client'
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

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      site: '',
      footer: '',
      header: '',
    }
    this.renderData = this.renderData.bind(this);
  }

  componentDidMount() {
    this.renderData();
  }

  async renderData() {
    await client.fetch(groq`
    {
      'site': *[_type == 'siteSettings']{keywords,
          title,
          description,
          author,
          logo},
      'footer': *[_type == 'siteExtra']{
        contactFormText,
        contanctFormImage,
        contactHeader,
        footerContactBlock,
        footerFindBlock,
        footerLogo,
        footerText,
        contactFormButtonText,
        email,
        facebook,
        linkedin,
        twitter,
        whatsapp,
      },
      'header': *[_type == 'siteExtra']{
        email,
        facebook,
        linkedin,
        twitter,
        whatsapp,
      }
    }
    `).then(res => {
      let site = res.site[0];
      let footer = res.footer[0];
      let header = res.header[0];
      this.setState({site, footer, header});
    });
  }

  render() {
    let children = this.props.children;

    return (
      <>
        <Header siteTitle={this.state.site.title} siteSettings={this.state.site} data={this.state.header} />
        <div>{children}</div>
        <ScrollTop />
        <FloatForm data={this.state.footer} />
        <Footer data={this.state.footer} />
      </>
    )
  }

}

// const Layout = ({ children }) => {

//   const data = useStaticQuery(graphql`
//   query MyQuery {
//     site: sanitySiteSettings {
//       keywords
//       title
//       description
//       author
//       logo {
//         asset {
//           id
//           url
//           path
//         }
//       }
//     },
//     footer: sanitySiteExtra {
//       _rawContactFormText
//       _rawContanctFormImage
//       _rawContactHeader
//       _rawFooterContactBlock
//       _rawFooterFindBlock
//       _rawFooterLogo
//       _rawFooterText
//       contactFormButtonText
//       email
//       facebook
//       linkedin
//       twitter
//       whatsapp
//     },
//     header: sanitySiteExtra {
//       email
//       facebook
//       linkedin
//       twitter
//       whatsapp
//     }
//   } 
// `);

//   return (
//     <>
//       <Header siteTitle={data.site.title} siteSettings={data.site} data={data.header} />
//       <div>{children}</div>
//       <ScrollTop />
//       <FloatForm data={data.footer} />
//       <Footer data={data.footer} />
//     </>
//   )
// }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// export default Layout
