// Updated MarketingComponent.jsx

import React from 'react';
import './UpdatedMarketingComponent.css'; // Updated CSS file name

const UpdatedMarketingComponent = () => {
  const imageUrl = 'https://img1.wsimg.com/isteam/ip/655ceb23-2db6-4bf0-9728-5cf0ee0688d5/who%20we%20are.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1920,m';

  return (
    <div className="updated-container">
      {/* Left side with text */}
      <div className="updated-left-side">
        <h1>Who We Are <span className='hr'></span></h1>
        <p>
          Are you ready to take your marketing efforts to the next level? Your search ends here, with 360 Marketing Concepts.
        </p>
        <p>
          Our specialization lies in email lists, appending services, and marketing strategies, all designed to help you achieve truly remarkable results.
        </p>
      </div>

      {/* Right side with image */}
      <div className="updated-right-side">
        <div
          style={{
            width: '100%', // Adjust the width as needed
            height: '300px', // Adjust the height as needed
            background: `url(${imageUrl})`, // Replace with the actual image URL
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
    </div>
  );
};

export default UpdatedMarketingComponent;
