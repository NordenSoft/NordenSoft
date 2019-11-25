import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import BlockContent from '../components/block-content'

export const query = graphql`
  query termsPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)terms/" }) {
      id
      title
      _rawBody
    }
  }
`


const terms = props => {

    const { data, errors } = props

    if (errors) {
        return (
            <Layout>
                {JSON.stringify(errors)}
           </Layout>
        )
    }

    const page = data.page

    return (
        <Layout>
            <SEO title={page.title} />
            <div className="py-5">
                <div className="container py-5">
                    <BlockContent blocks={page._rawBody || []} />
                </div>
            </div>
        </Layout>
    )
}

export default terms
