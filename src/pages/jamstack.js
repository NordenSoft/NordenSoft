import React from 'react'
// import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'


const JAMStack = () => {

    return (
        <Layout>
            <SEO title="JAMStack" />
            <div className="py-5">
                <div className="container py-5">
                    <div className="jamstack">
                        <h1>A modern architecture —<br />Create fast and secure sites and dynamic apps with <strong>J</strong>avaScript, <strong>A</strong>PIs, and prerendered <strong>M</strong>arkup, served without web servers.</h1>
                        <div className="contained intro my-5 pb-5">
                            <h2>What is the JAMstack?</h2>
                            <p>
                                You may have already seen or worked on a JAMstack site! They do not have to include <em>all</em> attributes of JavaScript, APIs, and Markup.
                                They might be built using by hand, or with Jekyll, Hugo, Nuxt, Next, Gatsby, or another <a href="https://www.staticgen.com">static site generator</a>...
                            </p>
                            <p>
                                The thing that they all have in common is that they don’t depend on a web server.
                            </p>
                        </div>
                        <div className="letter-definition">
                            <img className="letter" src="https://d33wubrfki0l68.cloudfront.net/5beea77e9c64899ebbafbee2086fa735c8c3b1af/19e3c/img/j.svg" alt="J" />
                            <div className="definitin-content">
                                <h1>JavaScript</h1>
                                <p>Any dynamic programming during the request/response cycle is handled by JavaScript, running entirely on the client. This could be any frontend framework, library, or even vanilla JavaScript.</p>
                            </div>
                        </div>
                        <div className="letter-definition">
                            <img className="letter" src="https://d33wubrfki0l68.cloudfront.net/db9f1475910e1dc05d452357e78bf927c9579de1/b3311/img/a.svg" alt="A" />
                            <div className="definitin-content">
                                <h1>APIs</h1>
                                <p>All server-side processes or database actions are abstracted into reusable APIs, accessed over HTTPS with JavaScript. These can be custom-built or leverage third-party services.</p>
                            </div>
                        </div>
                        <div className="letter-definition">
                            <img className="letter" src="https://d33wubrfki0l68.cloudfront.net/e3922ce2101d421f658b0b11539d9d5ae95f1daa/49ce3/img/m.svg" alt="M" />
                            <div className="definitin-content">
                                <h1>Markup</h1>
                                <p>
                                    Templated markup should be prebuilt at deploy time, usually using a site generator for content sites, or a build tool for web apps.<br /><br />
                                    {/* <a href="/examples">Want to see some examples?</a> */}
                                </p>
                            </div>
                        </div>
                        <section className="jam-disqualifications my-5 pt-5">
                            <h1>When is your site <em>not</em> built with the JAMstack?</h1>
                            <p>Any project that relies on a tight coupling between client and server is not built with the JAMstack. This would include:</p>
                            <div className="disqualifications">

                                <div className="disqualification">A site built with a server-side CMS like WordPress, Drupal, Joomla, or Squarespace.</div>

                                <div className="disqualification">A monolithic server-run web app that relies on Ruby, Node, or another backend language.</div>

                                <div className="disqualification">A single page app that uses isomorphic rendering to build views on the server at runtime.</div>

                            </div>
                        </section>
                        <section id="why" className="advantages contained">
                            <h1>Why the JAMstack?</h1>
                            <div className="advantages-grid">

                                <div className="advantage">
                                    <h4>Better Performance</h4>
                                    <p>Why wait for pages to build on the fly when you can generate them at deploy time? When it comes to minimizing the time to first byte, nothing beats pre-built files served over a CDN.</p>
                                </div>

                                <div className="advantage">
                                    <h4>Higher Security</h4>
                                    <p>With server-side processes abstracted into microservice APIs, surface areas for attacks are reduced. You can also leverage the domain expertise of specialist third-party services.</p>
                                </div>

                                <div className="advantage">
                                    <h4>Cheaper, Easier Scaling</h4>
                                    <p>When your deployment amounts to a stack of files that can be served anywhere, scaling is a matter of serving those files in more places. CDNs are perfect for this, and often include scaling in all of their plans.</p>
                                </div>

                                <div className="advantage">
                                    <h4>Better Developer Experience</h4>
                                    <p>Loose coupling and separation of controls allow for more targeted development and debugging, and the expanding selection of CMS options for site generators remove the need to maintain a separate stack for content and marketing.</p>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default JAMStack
