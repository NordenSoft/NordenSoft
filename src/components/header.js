import React, { Component } from 'react'
import { Link } from 'gatsby'
import { imageUrlFor } from '../lib/image-url'
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default class Header extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            activeClass: 'none',
            toggleNav: false,
            navbarCss: 'collapse navbar-collapse',
            data: props.data,
        }

        this.navbarOpen = this.navbarOpen.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;

        window.addEventListener('scroll', () => {
            let activeClass = 'none';
            if (window.scrollY >= 200) {
                activeClass = 'sticky';
            }
            if (this._isMounted) {
                this.setState({ activeClass });
            }
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    navbarOpen() {
        if (this.state.toggleNav) {
            if (this._isMounted) {
                this.setState({ navbarCss: 'collapse navbar-collapse', toggleNav: false });
            }
        } else {
            if (this._isMounted) {
                this.setState({ navbarCss: 'collapse navbar-collapse show', toggleNav: true })
                this._navbarOpen = true;
            }
        }
    }


    render() {
        return (
            <nav className={`navbar navbar-expand-lg navbar-light bg-light norden-navbar px-3 ${this.state.activeClass}`}>
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img
                            src={imageUrlFor(this.props.siteSettings.logo)
                                .width(156)
                                .url()}
                            alt='logo'
                            className="d-inline-block align-top mr-3"
                        />
                    </Link>
                    <button className="navbar-toggler" type="button" onClick={this.navbarOpen} >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${this.state.navbarCss}`} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/#oversigt" className="nav-link">Oversigt</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/jamstack" className="nav-link">JAMStack</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/magento" className="nav-link">Magento</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/#cases" className="nav-link">Cases</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/om-os" className="nav-link">Om os</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/kontakt" className="nav-link">Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                    <span className="navbar-text d-none d-sm-block">
                        <a href={this.props.data.linkedin ? this.props.data.linkedin : '#'} target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href={this.props.data.facebook ? this.props.data.facebook : '#'} target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href={this.props.data.whatsapp ? this.props.data.whatsapp : '#'} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                        <a href={this.props.data.email ? this.props.data.email : '#'} target="_blank" rel="noopener noreferrer">
                            <FaEnvelope />
                        </a>
                    </span>
                </div>
            </nav>
        )
    }
}