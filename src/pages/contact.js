import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import BlockContent from '../components/block-content'

export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
      title
      _rawBody
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
              <h1>Tag fat i os!</h1>
              <p>Vi er klar til at løse både store og små udfordringer.</p>
              <p>Ring til os i dag, og få et bud på, hvordan vi sammen gør dit projekt til en succes.</p>
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
                <strong>Danmark</strong>
                <p>+45 26 46 36 01<br />
                www.nordensoft.dk</p>

                <strong>Holland</strong>
                <p>+45 26 46 36 01<br />
                www.nordensoft.nl</p>

                <strong>Schweiz</strong>
                <p>+45 26 46 36 01<br />
                www.nordensoft.ch</p>

                <strong>Østrig</strong>
                <p>+45 26 46 36 01<br />
                www.nordensoft.at</p>

                <strong>Tyskland</strong>
                <p>+45 26 46 36 01<br />
                www.nordensoft.de</p>

                <strong>Sverige</strong>
                <p>+45 26 46 36 01<br />
                www.nordensoft.se</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
