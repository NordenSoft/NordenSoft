import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import BlockContent from '../components/block-content'
import groq from 'groq'
import client from '../../client'

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
    }
    this.renderBody = this.renderBody.bind(this);
  }

  componentDidMount() {
    this.renderBody();
  }

  async renderBody() {
    await client.fetch(groq`*[ _type == 'page' && _id == 'about' ]{title, body}`).then(res => {
      let page = res[0];
      this.setState({ page });
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Om Os" />
        <div className="py-5 about">
          <div className="container py-5">
            <h1 className="text-center mb-5 font-weight-bold">{this.state.page.title}</h1>
            <BlockContent blocks={this.state.page.body || []} />
          </div>
        </div>
      </Layout>
    )
  }

}