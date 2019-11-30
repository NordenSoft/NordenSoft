import React, { Component } from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import { imageUrlFor } from '../lib/image-url'
import groq from 'groq'
import client from '../../client'
import BlockContent from '../components/block-content'
import SimpleSlider from '../components/SimpleSlider'
// import Img from "gatsby-image"

export const query = graphql`
  {
    allSanityCases {
      edges {
        node {
          id
          image {
            asset {
              _id
            }
          }
          link
          name
        }
      }
    }
  }
`

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cases: '',
      Posts: '',
    }
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount() {
    this.renderPosts();
  }

  renderPosts = async () => {
    await client.fetch(groq`
    *[_type == 'page' && _id == 'home']{
      ...,
      'cases': *[ _type == 'cases']
    }
    `).then((res) => {
      // console.log(JSON.stringify(res.result))
      let x = res[0].sections;
      let Cases = res[0].cases;
      this.setState({
        Cases,
        Posts: x.map((post, i) => {
          switch (post._type) {
            case 'homeSlideBlock':
              return (
                <div id="oversigt" className="container mt-5 pt-5 pb-5" key={i}>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="pb-2">
                        <BlockContent blocks={post.body || []} />
                      </div>
                      <div className="pl-2">
                        {post.imageSections.map((q, i) => {
                          return (
                            <img
                              src={imageUrlFor(q.asset)
                                .url()}
                              alt={post.title}
                              className="img-fluid"
                              key={i}
                            />
                          );
                        })}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="sliderContainer">
                        <div className="slideWrap">
                          <div className="sliderFrame"></div>
                          <SimpleSlider data={post.slideImageSections}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            case 'customersBlock':
              return (
                <div className="container-fluid kunder-bg pt-5 pb-5 " key={i}>
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h2 className="mb-5">{post.title}</h2>
                      {post.sections.map((q, i) => {
                        return (
                          <img
                            src={imageUrlFor(q.asset)
                              .url()}
                            alt={post.title}
                            className="mx-2 img-fluid"
                            key={i}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            case 'leftImageBlock':
              return (
                <div className="container pt-5 pb-5 "  key={i}>
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
                <div className="container-fluid kunder-bg pt-5 pb-5 "  key={i}>
                  <div className="container text-center pt-5 pb-5 ">
                    <div className="row">
                      <div className="col-md-12">
                        <BlockContent blocks={post.body || []} />
                      </div>
                    </div>
                  </div>
                  <div className="container text-center pt-5 pb-5 ">
                    <div className="row">
                      {post.giridSection.map((q, i) => {
                        return (
                          <div className="col-md-4" key={i}>
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
                              <h5 className="my-4">{q.title}</h5>
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
                <div className="container-fluid pt-5 pb-5  fleksibel-bg"  key={i}>
                  <div className="container pt-5 pb-5 ">
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
                <div className="container-fluid kunder-bg pt-5 pb-5 "  key={i}>
                  <div className="container pt-5 pb-5 ">
                    <div className="row">
                      <div className="col-md-8 p-5">
                        <h2 className="pt-5 pb-5 ">{post.title}</h2>
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
    const cases = Array.from(this.state.Cases);

    return (
      <Layout>
        <SEO title={'Norden Soft'} />
        {this.state.Posts}
        <div id="cases" className="container-fluid cases-block pt-5 pb-5 ">
          <div className="container text-center pt-5 pb-5 ">
            <div className="row">
              <div className="col-md-12">
                <h2>Cases</h2>
                <p>
                  Magento eco-system er hjem for 5 passionerede web designere og udvikler som er fokuserede på at udvikle utrolige ting til vores platform. Fra elegante temaer og praktiske apps til fuld funktionelle e-commerce hjemmesider. Vores design partnere arbejder utrætteligt på at skubbe grænserne for hvad der er muligt med Magento.
              </p>
              </div>
            </div>
            <div className="row pt-5 pb-5  mt-5">
              {
                cases.map((query, i) => {
                  return (
                    <div key={i} className="col-md-4">
                      <h4>
                        <img
                          src={imageUrlFor(query.image)
                            .width(290)
                            .height(244)
                            .url()}
                          className="attachment-full size-full img-fluid"
                          alt={query.name}
                        />
                        <a href={query.link} target="_blank" rel="noopener noreferrer" data-slimstat="5">{query.name}</a>
                      </h4>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

      </Layout>
    );
  }

}

