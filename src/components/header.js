
import React, { Component } from 'react'
import { Link } from 'gatsby'
import Icon from './icons'
import { cn } from '../lib/helpers'

import logo from "../images/logo.png"
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default class Header extends Component {
  _isMounted = false;
  constructor(props){
      super(props);
      this.state = {
          activeClass: 'none',
          toggleNav: false,
          navbarCss: 'collapse navbar-collapse',
      }

      this.navbarOpen = this.navbarOpen.bind(this);
  }

  componentDidMount(){
      this._isMounted = true;
      
      window.addEventListener('scroll', () => {
         let activeClass = 'none';
         if(window.scrollY >= 200){
             activeClass = 'sticky';
         }
         if (this._isMounted) {
             this.setState({ activeClass });
         }
      });
  }

  componentWillUnmount(){
      this._isMounted = false;
  }

  navbarOpen(){
      if(this.state.toggleNav){
          if(this._isMounted){
              this.setState({navbarCss: 'collapse navbar-collapse', toggleNav: false});
          }
      } else{
          if(this._isMounted){
              this.setState({navbarCss: 'collapse navbar-collapse show', toggleNav: true})
              this._navbarOpen = true;
          }
      }
  }
  
  render() {
      return (
          <nav className={`navbar navbar-expand-lg navbar-dark bg-light norden-navbar px-3 ${this.state.activeClass}`}>
              <div className="container">
                  <Link to="/" className="navbar-brand">
                      <img src={logo} width="156" height="35" className="d-inline-block align-top mr-3" alt="" />
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
                              <Link to="/#services" className="nav-link">Services</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="/#magento" className="nav-link">Magento</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="/#cases" className="nav-link">Cases</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="/about" className="nav-link">Om os</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="/contact" className="nav-link">Kontakt</Link>
                          </li>
                      </ul>
                  </div>
                  <span className="navbar-text d-none d-sm-block">
                      <a href="https://www.linkedin.com/in/toratoraman/" target="_blank" rel="noopener noreferrer">
                          <FaLinkedinIn />
                      </a>
                      <a href="https://www.facebook.com/nordensoft/" target="_blank" rel="noopener noreferrer">
                          <FaFacebookF />
                      </a>
                      <a href="https://wa.me/4526463601" target="_blank" rel="noopener noreferrer">
                          <FaWhatsapp />
                      </a>
                      <a href="mailto:info@nordensoft.dk" target="_blank" rel="noopener noreferrer">
                          <FaEnvelope />
                      </a>
                  </span>
              </div>
          </nav>
      )
  }
}