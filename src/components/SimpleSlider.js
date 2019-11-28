import React from "react";
import Slider from "react-slick";
import { imageUrlFor } from '../lib/image-url'

// import slide1 from '../images/e-commerce.jpg';
// import slide2 from '../images/e-commerce2.png';
// import slide3 from '../images/e-commerce3.png';

export default class SimpleSlider extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        slides: props.data,
      }
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      arrows: false,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {this.state.slides.map((s, i) => {
          return(
            <div key={i}>
              <img
                src={imageUrlFor(s.asset)
                  .url()}
                alt="slide"
              />
            </div>
            
          )
        })}
        {/* <div>
          <img src={slide3} alt="Slide" />
        </div>
        <div>
          <img src={slide1} alt="Slide" />
        </div>
        <div>
          <img src={slide2} alt="Slide" />
        </div> */}
      </Slider>
    );
  }
}