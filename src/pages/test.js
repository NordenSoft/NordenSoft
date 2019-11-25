import React, { Component } from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import groq from 'groq'
import client from '../../client'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from '../components/block-content'

// import { graphql } from 'gatsby'

export default class test extends Component {

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
    await client.fetch(groq`*[_type == 'page' && _id == 'home']`).then((res) => {
      // console.log(JSON.stringify(res.result))
      let x = res[0].sections;
      this.setState({
        Posts: x.map((post) => {
          switch (post._type) {
            case 'customersBlock':
              return (
                <div className="container-fluid kunder-bg py-5">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h2 className="mb-5">{post.title}</h2>
                      {post.sections.map(q => {
                        return (
                          <img
                            src={imageUrlFor(q.asset)
                              .url()}
                            alt={post.title}
                            className="mx -2 img-fluid"
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            case 'leftImageBlock':
              return (
                <div className="container py-5">
                  <h2 className="text-center py-3">{post.title}</h2>
                  <div className="row pt-5">
                    <div className="col-md-7">
                      <img
                        src={imageUrlFor(post.image)
                          .width(596)
                          .height(555)
                          .url()}
                        alt={post.title}
                        className="attachment-full size-full img-fluid"
                      />
                    </div>
                    <div className="col-md-5 pt-5">
                      <BlockContent blocks={post.body || []} />
                    </div>
                  </div>
                </div>
              );
            case 'gridBlock1':
              return (
                <div className="container-fluid kunder-bg py-5">
                  <div className="container text-center py-5">
                    <div className="row">
                      <div className="col-md-12">
                        <BlockContent blocks={post.body || []} />
                      </div>
                    </div>
                  </div>
                  <div className="container text-center py-5">
                    <div className="row">
                      {post.giridSection.map(q => {
                        return (
                          <div className="col-md-4">
                            <div className="w-iconbox-icon">
                              {/* <img width="128" height="95" src={magento1}  alt="" /> */}
                              <img
                                src={imageUrlFor(q.image)
                                  .url()}
                                alt={q.title}
                                className="attachment-full size-full img-fluid"
                              />
                            </div>
                            <div className="w-iconbox-meta">
                                <h5 className="my-4">{ q.title }</h5>
                              <div className="w-iconbox-text">
                                <p>{q.description}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            case 'beigeBlock':
              return (
                <div className="container-fluid py-5 fleksibel-bg">
                  <div className="container py-5">
                    <div className="row">
                      <div className="col-md-12">
                        <BlockContent blocks={post.body || []} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            case 'rightImageBlock':
              return (
                <div className="container-fluid kunder-bg py-5">
                  <div className="container py-5">
                    <div className="row">
                      <div className="col-md-8 p-5">
                        <h2 className="py-5">{post.title}</h2>
                        <BlockContent blocks={post.body || []} />
                      </div>
                      <div className="col-md-4">
                        <img
                          src={imageUrlFor(post.image)
                            .width(320)
                            .url()}
                          alt={post.title}
                          className="attachment-full size-full img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            default:
              return null;
          }

        }),
      });
    })
  }

  render() {
    return (
      <Layout>
        <SEO title={'Contact'} />
        {this.state.Posts}
      </Layout>
    );
  }

}
