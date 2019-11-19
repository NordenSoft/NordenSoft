
import React from "react"
import { Link } from 'gatsby'
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';


import logoWhite from '../images/logo-white.png';

const footer = () => (
    <footer className="footer">
        <div className="footer-top py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={logoWhite} alt="Norden Soft" className="mb-4" />
                        <p className="my-3">Har du spørgsmål? Har du brug for information eller en kontakt? Kom i kontakt med os. Vi er her for at hjælpe!</p>
                        <div className="footer-top-title my-3">Følg os</div>
                        <div className="footer-social">
                            <a href="https://www.linkedin.com/in/toratoraman/" className="footer-icon" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://www.facebook.com/nordensoft/" className="footer-icon" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                            <a href="https://wa.me/4526463601" className="footer-icon" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-top-title"> Kontakt os </div>
                        <div className="mb-3">
                            <p className="m-0">Danmark</p>
                            <a href="tel:26463601" className="footer-link">+45 26 46 36 01</a>
                            <a href="https://www.nordensoft.dk/" className="footer-link">www.nordensoft.dk</a>
                        </div>
                        <div className="mb-3">
                            <p className="m-0">Holland</p>
                            <a href="tel:26463601" className="footer-link">+45 26 46 36 01</a>
                            <a href="https://www.nordensoft.nl/" className="footer-link">www.nordensoft.nl</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-top-title"> Find os </div>
                        <p className="m-0">Norden Soft | Design  Software Development Labs ApS</p>
                        <p className="m-0">Adres: Telemarksgade 11. 3 TV KBH S. 2300 / DENMARK</p>
                        <p className="m-0"><a href="tel:26463601" className="footer-link">+45 26 46 36 01</a></p>
                        <p className="m-0">CVR: 38181297</p>
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

export default footer;