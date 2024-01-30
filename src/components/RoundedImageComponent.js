// RoundedImageComponent.jsx

import React from 'react';
import './RoundedImageComponent.css';

const RoundedImageComponent = () => {
  return (
    <div>
      <h1 className="rounded-image-heading">Why Choose Us</h1>
      <div className="rounded-image-container">

        {/* Section 1 */}
        <div className="rounded-image-section">
          <img
            src="https://img1.wsimg.com/isteam/ip/655ceb23-2db6-4bf0-9728-5cf0ee0688d5/data%20sec-7ab8d89.png/:/cr=t:0%25,l:16.69%25,w:66.62%25,h:100%25/rs=w:365,h:365,cg:true"
            alt="Service 1"
            className="rounded-image"
          />
          <h3>Vast Expertise</h3>
          <p>
          We bring a wealth of knowledge and experience to the table, ensuring that your marketing efforts are backed by industry-leading insights. 
          </p>
        </div>

        {/* Section 2 */}
        <div className="rounded-image-section">
          <img
            src="https://img1.wsimg.com/isteam/ip/655ceb23-2db6-4bf0-9728-5cf0ee0688d5/data%20sec-8287fac.png/:/cr=t:0%25,l:0%25,w:100%25,h:85.97%25/rs=w:365,h:365,cg:true"
            alt="Service 2"
            className="rounded-image"
          />
          <h3>Commitment to Security</h3>
          <p>
          Our commitment to maintaining the highest standards of data security gives you peace of mind, knowing that your information is in safe hands. 
          </p>
        </div>

        {/* Section 3 */}
        <div className="rounded-image-section">
          <img
            src="https://img1.wsimg.com/isteam/ip/655ceb23-2db6-4bf0-9728-5cf0ee0688d5/focus.jpg/:/cr=t:0%25,l:2.03%25,w:66.68%25,h:100%25/rs=w:365,h:365,cg:true"
            alt="Service 3"
            className="rounded-image"
          />
          <h3>Relentless Focus</h3>
          <p>
          Our unwavering focus on achieving and exceeding your marketing goals is what sets us apart. When you choose 360marco, you're choosing a partner committed to your success. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoundedImageComponent;
