import React, { Component } from 'react'
// import { graphql } from 'gatsby'
import groq from 'groq'
import client from '../../client'
import SEO from '../components/seo'
import Layout from '../components/layout'
import BlockContent from '../components/block-content'
import BlockText from '../components/block-text'

// export const query = graphql`
//   query ContactPageQuery {
//     page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
//       title
//       _rawBody
//     },
//     info: allSanityCompanyInfo {
//       edges {
//         node {
//           name
//           zipCode
//           email
//           country
//           city
//           address2
//           address1
//           CVR
//           phone
//           _rawBank
//         }
//       }
//     },
//     header: sanitySiteExtra {
//       _rawContactHeader
//     }
//   }
// `

// const { data, errors } = props

// if (errors) {
//   return (
//     <Layout>
//       Error
//     </Layout>
//   )
// }

// const page = data.page
// const info = data.info.edges[0].node

// *[_type == 'companyInfo']{name, zipCode, email, country, city, address2, address1, CVR, phone, _rawBank}

// if (!page) {
//   throw new Error(
//     'Missing "Contact" page data. Open the studio at http://localhost:3333 and add "Contact" page data and restart the development server.'
//   )
// }


export default class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
      info: '',
      header: '',
    }
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount() {
    this.renderPosts();
  }

  renderPosts = async () => {
    await client.fetch(groq`
    *[_type == 'page' && _id == 'contact']{title, body,
      "info": *[_type == 'companyInfo']{
        name,
        zipCode,
        email,
        country,
        city,
        address2,
        address1,
        CVR,
        phone,
        bank,
      },
      "siteExtra": *[_type == 'siteExtra']{contactHeader}
      }`).then((res) => {
        let page = res[0];
        let info = res[0].info[0];
        let header = res[0].siteExtra[0].contactHeader;
      this.setState({ page, info, header});
    })
  }


  render() {
    return (
      <Layout>
        <SEO title={'Contact'} />
        <div className="contact-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <BlockContent blocks={this.state.header || []} />
                {/* <h1>Tag fat i os!</h1>
                <p>Vi er klar til at løse både store og små udfordringer.</p>
                <p>Ring til os i dag, og få et bud på, hvordan vi sammen gør dit projekt til en succes.</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-8 contact">
                <h1 className="mb-5 font-weight-bold">{this.state.page.title}</h1>
                <BlockContent blocks={this.state.page.body || []} />
              </div>
              <div className="col-md-4">
                <h1 className="mb-5 font-weight-bold">Adresse:</h1>
                <p>
                  <strong>{this.state.info.name}</strong>
                </p>
                <p>
                  {this.state.info.address1} <br />
                  {this.state.info.address2 ? this.state.info.address2 + '<br />' : null}
                  {this.state.info.zipCode} <br />
                  <strong>{this.state.info.city} / {this.state.info.country}</strong> <br />
                </p>
                <p>
                  {this.state.info.email} <br />
                  {this.state.info.phone} <br />
                </p>
                <p>
                  {this.state.info.CVR} <br />
                </p>
                <p>
                  <BlockText blocks={this.state.info.bank} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
