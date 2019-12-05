import React from 'react'
// import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import BlockContent from '../components/block-content'
import groq from 'groq'
import client from '../../client'

export default class terms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        }
        this.renderData = this.renderData.bind(this);
    }

    componentDidMount() {
        this.renderData();
    }

    async renderData() {
        await client.fetch(groq`*[_type == 'page' && _id == 'terms']{title, body}`).then(res => {
            let data = res[0];
            this.setState({ data });
        })
    }

    render() {
        return (
            <Layout>
                <SEO title={this.state.data.title} />
                <div className="py-5">
                    <div className="container py-5">
                        <BlockContent blocks={this.state.data.body || []} />
                    </div>
                </div>
            </Layout>
        )
    }
}
