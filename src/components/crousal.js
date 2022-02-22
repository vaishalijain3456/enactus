import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import '../styles/Carousel.css';
import "../styles/Crousal.css";
import img1 from "../assets/img2.png"
import img2 from "../assets/img3.png"
import img3 from "../assets/img4.png"


const defaultResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1440 },
    items: 4,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1440, min: 1248 },
    items: 3,
    slidesToSlide: 3,
  },
  laptop: {
    breakpoint: { max: 1247, min: 1024 },
    items: 2,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const MultiCarousel = (props) => {
  const { children, passedProps, forwardRef } = props;
  const defaultProps = {
    arrows: false,
    autoPlay: false,
    autoPlaySpeed: 3000,
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    renderDotsOutside: true,
    responsive: defaultResponsive,
    showDots: true,
  };
  const carouselProps = passedProps ?? defaultProps;
  return (
    <Carousel {...carouselProps} ref={forwardRef}>
      {/* {children ?? <></>} */}
      <div>
        <img src={require("../assets/img2.png")} width="120" height="60" />
      </div>
      <div>
        <img src={require("../assets/img3.png")} width="120" height="60" />
      </div>
      <div>
          {/* {img1}
           */}
        <img src={require("../assets/img4.png")} width="120" height="60" />
      </div>
      <div>
        <img src={require("../assets/img2.png")} width="120" height="60" />
      </div>
      <div>
        <img src={require("../assets/img2.png")} width="120" height="60" />
      </div>


    </Carousel>
  );
};

export default MultiCarousel;