import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import BlockContent from '../components/block-content'
import groq from 'groq'
import client from '../../client'

export default class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Posts: '',
      body: [],
    }
    this.renderBody = this.renderBody.bind(this);
  }

  componentDidMount() {
    this.renderBody();
  }

  async renderBody() {
    await client.fetch(groq`*[_type == 'page' && _id == 'services']`).then(res => {
      let x = res[0].sections[0];
      let body = res[0].body;
      this.setState({ Posts: x, body });
    });
  }

  render() {
    const content = this.state.Posts;
    return (
      <Layout>
        <SEO title="JAMStack" />
        <div className="py-5">
          <div className="container py-5">
            <div className="jamstack">
              <div className="intro pb-5">
                <BlockContent blocks={content.blockTop || []} />
              </div>
              <div className="letter-definition">
                <img className="letter" src="https://d33wubrfki0l68.cloudfront.net/5beea77e9c64899ebbafbee2086fa735c8c3b1af/19e3c/img/j.svg" alt="J" />
                <div className="definitin-content">
                  <BlockContent blocks={content.blockJ || []} />
                </div>
              </div>
              <div className="letter-definition">
                <img className="letter" src="https://d33wubrfki0l68.cloudfront.net/db9f1475910e1dc05d452357e78bf927c9579de1/b3311/img/a.svg" alt="A" />
                <div className="definitin-content">
                  <BlockContent blocks={content.blockA || []} />
                </div>
              </div>
              <div className="letter-definition">
                <img className="letter" src="https://d33wubrfki0l68.cloudfront.net/e3922ce2101d421f658b0b11539d9d5ae95f1daa/49ce3/img/m.svg" alt="M" />
                <div className="definitin-content">
                  <BlockContent blocks={content.blockM || []} />
                </div>
              </div>
              <section className="jam-disqualifications my-5 pt-5">
                <BlockContent blocks={content.blockDisqualifications} />
              </section>
              <section id="why" className="advantages contained">
                <BlockContent blocks={content.blockWhy || []} />
              </section>
            </div>
          </div>
          <div className="container py-5">
            <BlockContent blocks={this.state.body || []} />
          </div>
        </div>
      </Layout>
    )
  }

}
