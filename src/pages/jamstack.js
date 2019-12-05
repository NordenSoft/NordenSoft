import React, { Component } from 'react'
// import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
// import { imageUrlFor } from '../lib/image-url'
import groq from 'groq'
import client from '../../client'
import BlockContent from '../components/block-content'

export default class JAMStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Posts: '',
        }
        this.renderPosts = this.renderPosts.bind(this);
    }

    componentDidMount() {
        this.renderPosts();
    }

    renderPosts = async () => {
        await client.fetch(groq`*[_type == 'page' && _id == 'jamstack']`).then((res) => {
            let x = res[0].sections[0];
            this.setState({ Posts: x });
        })
    }

    render() {
        const content = this.state.Posts;
        return (
            <Layout>
                <SEO title="JAMStack" />
                <div className="py-5">
                    <div className="container py-5">
                        <div className="jamstack">
                            {typeof content.blockTop != 'undefined' ?
                                <div className="intro">
                                    <BlockContent blocks={content.blockTop || []} />
                                </div>
                                : null}
                            {typeof content.blockJ != 'undefined' ?
                                <div className="letter-definition">
                                    <img className="letter" src="https://d33wubrfki0l68.cloudfront.net/5beea77e9c64899ebbafbee2086fa735c8c3b1af/19e3c/img/j.svg" alt="J" />
                                    <div className="definitin-content">
                                        <BlockContent blocks={content.blockJ || []} />
                                    </div>
                                </div>
                                : null}
                            {typeof content.blockA != 'undefined' ?
                                <div className="letter-definition">
                                    <img className="letter" src="https://d33wubrfki0l68.cloudfront.net/db9f1475910e1dc05d452357e78bf927c9579de1/b3311/img/a.svg" alt="A" />
                                    <div className="definitin-content">
                                        <BlockContent blocks={content.blockA || []} />
                                    </div>
                                </div>
                                : null}
                            {typeof content.blockM != 'undefined' ?
                                <div className="letter-definition">
                                    <img className="letter" src="https://d33wubrfki0l68.cloudfront.net/e3922ce2101d421f658b0b11539d9d5ae95f1daa/49ce3/img/m.svg" alt="M" />
                                    <div className="definitin-content">
                                        <BlockContent blocks={content.blockM || []} />
                                    </div>
                                </div>
                                : null}
                            {typeof content.blockM2 != 'undefined' ?
                                <div className="letter-definition">
                                    <img className="letter" src="https://d33wubrfki0l68.cloudfront.net/e3922ce2101d421f658b0b11539d9d5ae95f1daa/49ce3/img/m.svg" alt="M" />
                                    <div className="definitin-content">
                                        <BlockContent blocks={content.blockM2 || []} />
                                    </div>
                                </div>
                                : null}
                            {typeof content.blockDisqualifications != 'undefined' ?

                                <section className="jam-disqualifications my-5 pt-5">
                                    <BlockContent blocks={content.blockDisqualifications} />
                                </section>
                                : null}
                            {typeof content.blockWhy != 'undefined' ?
                                <section id="why" className="advantages contained">
                                    <BlockContent blocks={content.blockWhy || []} />
                                </section>
                                : null}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}