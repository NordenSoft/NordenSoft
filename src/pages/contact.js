import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import BlockContent from '../components/block-content'
import BlockText from '../components/block-text'

export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
      title
      _rawBody
    },
    info: allSanityCompanyInfo {
      edges {
        node {
          name
          zipCode
          email
          country
          city
          address2
          address1
          CVR
          phone
          _rawBank
        }
      }
    },
    header: sanitySiteExtra {
      _rawContactHeader
    }
  }
`

const ContactPage = props => {

  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        Error
      </Layout>
    )
  }

  const page = data.page
  const info = data.info.edges[0].node

  if (!page) {
    throw new Error(
      'Missing "Contact" page data. Open the studio at http://localhost:3333 and add "Contact" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={'Contact'} />
      <div className="contact-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <BlockContent blocks={data.header._rawContactHeader || []} />
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
              <h1 className="mb-5 font-weight-bold">{page.title}</h1>
              <BlockContent blocks={page._rawBody || []} />
            </div>
            <div className="col-md-4">
              <h1 className="mb-5 font-weight-bold">Adresse:</h1>
              <p>
                <strong>{info.name}</strong>
              </p>
              <p>
                {info.address1} <br />
                {info.address2 ? info.address2 + '<br />' : null}
                {info.zipCode} <br />
                <strong>{info.city} / {info.country}</strong> <br />
              </p>
              <p>
                {info.email} <br />
                {info.phone} <br />
              </p>
              <p>
                {info.CVR} <br />
              </p>
              <p>
                <BlockText blocks={info._rawBank} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
