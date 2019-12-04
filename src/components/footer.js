
import React from "react"
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'gatsby'
import BlockContent from '../components/block-content'
import BlockText from '../components/block-text'
import { imageUrlFor } from '../lib/image-url'

export default class footer extends React.Component{
    constructor(params) {
        super(params);
        this.state = {
            data: ''
        }
    }

    render(){
        return (
            <footer className="footer">
                <div className="footer-top py-5">
                    {/* <code>
                        {JSON.stringify(data)}
                    </code> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    src={imageUrlFor(this.props.data.footerLogo)
                                        .url()}
                                    alt="Norden Soft"
                                    className="mb-4"
                                />
                                <div className="my-3">
                                    {typeof this.props.data.footerText != 'undefined' ? <BlockText blocks={this.props.data.footerText} /> : null }
                                </div>
                                <div className="footer-top-title my-3">Følg os</div>
                                <div className="footer-social">
                                    <a href={this.props.data.linkedin ? this.props.data.linkedin : '#'} className="footer-icon" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn />
                                    </a>
                                    <a href={this.props.data.facebook ? this.props.data.facebook : '#'} className="footer-icon" target="_blank" rel="noopener noreferrer">
                                        <FaFacebookF />
                                    </a>
                                    <a href={this.props.data.whatsapp ? this.props.data.whatsapp : '#'} className="footer-icon" target="_blank" rel="noopener noreferrer">
                                        <FaWhatsapp />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="footer-top-title"> Kontakt os </div>
                                <div className="mb-3">
                                    <BlockContent blocks={this.props.data.footerContactBlock || []} />
    
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="footer-top-title"> Find os </div>
                                <BlockContent blocks={this.props.data.footerFindBlock || []} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-left">
                                © 2016 – {new Date().getFullYear()} NordenSoft by Development  | <Link to="/privacypolicy">Privatlivspolitik</Link> | <Link to="/terms">Vilkår og betingelser</Link>
                            </div>
                            <div className="col-md-6 text-right">
                                © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
                                {` `}
                                <a href='https://www.gatsbyjs.org'>Gatsby</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }

}
