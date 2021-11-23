import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import MainLogo from '../../assets/puff-logo.jpeg';
import Front from '../../assets/store-front.jpeg';
import Counter from '../../assets/pos.jpeg';
import Glass from '../../assets/glass.jpeg';

const Home = () => {
  return (
    <div className='home-container'>
      <Carousel
        className='carousel'
        controls={false}
        indicators
        interval={2500}
        pause={false}
      >
        <Carousel.Item>
          <img
            className='carousel-img '
            src={MainLogo}
            alt='First slide'
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='carousel-img '
            src={Front}
            alt='Second slide'
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='carousel-img '
            src={Counter}
            alt='Third slide'
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='carousel-img '
            src={Glass}
            alt='Fourth slide'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
