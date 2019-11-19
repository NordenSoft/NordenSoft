import React, { Component } from 'react'
// ES6 Imports
import {Events, animateScroll as scroll} from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa';

export default class scrollTop extends Component {
  _isMounted = false;
  state={
      activeClass: 'none',
  }
  componentDidMount(){
      this._isMounted = true;
      
      window.addEventListener('scroll', () => {
          let activeClass = 'none';
          if(window.scrollY >= 400){
              activeClass = 'show';
          }
          if (this._isMounted) {
              this.setState({ activeClass });
          }
      });
  }

  componentWillUnmount(){
      this._isMounted = false;
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }
  render() {
    return (
      <div>
        <button onClick={this.scrollToTop} className={`scrollTop ${this.state.activeClass}`}>
         <FaArrowUp />  
        </button>      
      </div>
    )
  }
}