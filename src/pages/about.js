import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import BlockContent from '../components/block-content'

const AboutPage = () => {

  const data = useStaticQuery(
    graphql`
    query AboutPageQuery {
      page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
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
      <SEO title="Om Os" />
      <div className="py-5">
        <div className="container py-5">
          {/* <h1 className="text-center mb-5 font-weight-bold">Om os</h1>
          <p>{page._rawBody || []} </p> */}
          <h1 className="text-center mb-5 font-weight-bold">{page.title}</h1>
          <BlockContent blocks={page._rawBody || []} />
          {/* {personNodes && personNodes.length > 0 && <PeopleGrid items={personNodes} title='People' />} */}
          {/* {page._rawBody.map(q => {
            return(
              <p>
                {q.children[0].text}
              </p>
            )
            })
          } */}
          {/* {page._rawBody[2].children[0].text} */}
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

