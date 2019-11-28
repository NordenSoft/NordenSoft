
import React from "react"
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import {Link} from 'gatsby'
import BlockContent from '../components/block-content'
import BlockText from '../components/block-text'
import { imageUrlFor } from '../lib/image-url'



const footer = props => {

    const {data} = props;

    return (
        <footer className="footer">
            <div className="footer-top py-5">
            <code>
                {/* {JSON.stringify(data)} */}
            </code>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img
                              src={imageUrlFor(data._rawFooterLogo.asset)
                                .url()}
                                alt="Norden Soft" 
                                className="mb-4" 
                            />
                            <p className="my-3">
                                <BlockText blocks={data._rawFooterText} />
                            </p>
                            <div className="footer-top-title my-3">Følg os</div>
                            <div className="footer-social">
                                <a href={data.linkedin ? data.linkedin : '#'} className="footer-icon" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn />
                                </a>
                                <a href={data.facebook ? data.facebook : '#'} className="footer-icon" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF />
                                </a>
                                <a href={data.whatsapp ? data.whatsapp : '#'} className="footer-icon" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-top-title"> Kontakt os </div>
                            <div className="mb-3">
                                <BlockContent blocks={data._rawFooterContactBlock || []} />
  
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-top-title"> Find os </div>
                            <BlockContent blocks={data._rawFooterFindBlock || []} />
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

export default footer;