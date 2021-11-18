import React from 'react';
import './About.css';
import Logo from '../../assets/puff-logo.jpeg';

const About = () => {
  return (
    <div className='about-container'>
      <img src={Logo} className='about-logo' alt='store-logo' />
      <h3>World Famous Puff N' Stuff</h3>
      <div className='about-description'>
        <div className='about-history'>
          <strong>Puff N' Stuff</strong> is one of the oldest Headshops in the
          whole Bay Area, serving 40+ years in Oakland, CA. Established in July
          4th, 1976 and well known by Oakland's own; Too $hort and E-40. We
          continue to reach out to the cannabis community since the recreational
          legalization and we glad to support our new smokers and tokers. If you
          find yourself in the Bay, then definitely stop by and brag to your
          friends about us.
        </div>
        <br />
        <div className='about-action'>
          <h5 className='about-banner'>Why Us?</h5>
          Throughout the years, our staff as grown and adapted the new
          ins-and-outs of the industry. We continue to serve our community and
          offer the best products. If you ever have any questions reguarding
          products you are interested in don't hesitate to drop by and ask our
          staff. Feel free to come by and chat about products or offer any
          insight on the industry. Thank you for checking us out and hope to see
          you soon.
          <br />
          <p className='about-signature'>-Puff N' Stuff-</p>
        </div>
      </div>
    </div>
  );
};

export default About;
