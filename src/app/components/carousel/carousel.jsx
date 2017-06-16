import React, { Component } from 'react';
import Slider from 'react-slick';

import styles from './carousel.scss';

import slider1 from '../../../images/slider1.jpg';
import slider2 from '../../../images/slider2.jpg';
import slider3 from '../../../images/slider3.jpg';
import slider4 from '../../../images/slider4.jpg';
import slider5 from '../../../images/slider5.jpg';

const sliderSettings = {
  arrows: true,
  dots: true,
  dotsClass: `slick-dots ${styles.dots}`,
  autoplay: true,
  autoplaySpeed: 5000, // ms
  infinite: true,
  lazyLoad: true,
};

const sliderImages = [slider1, slider2, slider3, slider4, slider5];

export class Carousel extends Component {
  render() {
    return (
      <div className={styles.carousel}>
        <div className={styles.container}>
          <Slider {...sliderSettings}>
            {sliderImages.map((src, idx) =>
              <div key={idx}>
                <img height="640" src={src} style={{ margin: '0 auto' }} />
              </div>
            )}
          </Slider>
        </div>
      </div>
    );
  }
}
