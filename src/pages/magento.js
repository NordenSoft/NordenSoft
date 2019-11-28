import React, { Component } from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import groq from 'groq'
import client from '../../client'
import BlockContent from '../components/block-content'
import { imageUrlFor } from '../lib/image-url'

export default class magento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Posts: '',
            body: '',
        }
        this.renderPosts = this.renderPosts.bind(this);
    }

    componentDidMount() {
        this.renderPosts();
    }

    renderPosts = async () => {
        await client.fetch(groq`*[_type == 'page' && _id == 'magento']`).then((res) => {
            let x = res[0].sections[0];
            let body = res[0];
            this.setState({ Posts: x, body: body });
        })
    }

    render() {
        let content = this.state.Posts;
        let body = this.state.body;
        return (
            <Layout>
                <SEO title="magento" />
                <div className="py-5">
                    <div className="container py-5">
                        <code>
                            {/* {JSON.stringify(blockContent)} */}
                        </code>
                        {/* Magento Block */}
                        <div id="magento" className="container text-center py-5">
                            <div className="row">
                                <div className="col-md-12">
                                    <BlockContent blocks={body.body || []} />
                                </div>
                            </div>
                            <code>
                            </code>
                            <div className="row py-5">
                                <div className="col-md-4">
                                    <div className="col-md-12">
                                        <div className="w-iconbox-icon">
                                            <img
                                                src={imageUrlFor(content.image1)
                                                    .width(228)
                                                    .url()}
                                                className="attachment-full size-full img-fluid"
                                                alt="magento"
                                            />
                                        </div>
                                        <div className="w-iconbox-meta">
                                            <BlockContent blocks={content.content1 || []} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="w-iconbox-icon">
                                            <img
                                                src={imageUrlFor(content.image3)
                                                    .width(228)
                                                    .url()}
                                                className="attachment-full size-full img-fluid"
                                                alt="magento"
                                            />
                                        </div>
                                        <div className="w-iconbox-meta">
                                            <BlockContent blocks={content.content3 || []} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img
                                        src={imageUrlFor(content.centerImage)
                                            .width(321)
                                            .url()}
                                        className="attachment-full size-full img-fluid"
                                        alt="magento"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <div className="col-md-12">
                                        <div className="w-iconbox-icon">
                                            <img
                                                src={imageUrlFor(content.image2)
                                                    .width(228)
                                                    .url()}
                                                className="attachment-full size-full img-fluid"
                                                alt="magento"
                                            />
                                        </div>
                                        <div className="w-iconbox-meta">
                                            <BlockContent blocks={content.content2 || []} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="w-iconbox-icon">
                                            <img
                                                src={imageUrlFor(content.image4)
                                                    .width(228)
                                                    .url()}
                                                className="attachment-full size-full img-fluid"
                                                alt="magento"
                                            />
                                        </div>
                                        <div className="w-iconbox-meta">
                                            <BlockContent blocks={content.content4 || []} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        {/* Magento Block */}
                    </div>
                </div>
            </Layout>
        )

    }
}

