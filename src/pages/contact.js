import React from 'react'
// import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'

const ContactPage = () => {

  return (
    <Layout>
      <SEO title={'Contact'} />
      <div className="py-5">
        <div className="container py-5">
          <h1 className="text-center mb-5 font-weight-bold">Kontakt</h1>
          <p>Test</p>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
