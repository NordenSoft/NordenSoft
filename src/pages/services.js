import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import BlockContent from '../components/block-content'

const Services = () => {

    const data = useStaticQuery(
        graphql`
        query ServicesPageQuery {
          page: sanityPage(_id: { regex: "/(drafts.|)services/" }) {
            id
            title
            _rawBody
          }
        
        }
      `
    );

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

export default Services