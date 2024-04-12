import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div className="about-section">
        <div className="image-container">
          <img src="your-image-url.jpg" alt="About Us" />
        </div>
        <div className="description">
          <p>
            Your website description goes here. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla quam velit, vulputate eu
            pharetra nec, mattis ac neque. Duis vulputate commodo lectus,
            ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend
            tristique, tortor mauris molestie elit, et lacinia ipsum quam
            nec dui. Quisque nec mauris sit amet elit iaculis pretium sit
            amet quis magna.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
            vulputate commodo lectus, ac blandit elit tincidunt id. Sed
            rhoncus, tortor sed eleifend tristique, tortor mauris molestie
            elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit
            amet elit iaculis pretium sit amet quis magna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
