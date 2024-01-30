// WhatWeOfferComponent.jsx

import React from 'react';
import './WhatWeOfferComponent.css';

const WhatWeOfferComponent = () => {
    return (

        <div>
            <h1 className="offer-heading">What We Offer</h1>
            <div className="offer-container">

                {/* Section 1 */}
                <div className="offer-section">
                    <h3>Email Lists: The Foundation of Success and Growth</h3>
                    <img
                        src="https://img1.wsimg.com/isteam/ip/655ceb23-2db6-4bf0-9728-5cf0ee0688d5/email%20lists-ecfb26d.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:75.46%25/rs=w:388,h:194,cg:true"
                        alt="Service 1"
                    />
                    <p>
                        Our meticulously curated email lists are a cornerstone of success. They offer unparalleled data quality, smart segmentation, and strict compliance to ensure your message reaches the right audience.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="offer-section">
                    <h3>Email Appending: Elevate Your Data to New Heights</h3>
                    <img
                        src="https://img1.wsimg.com/isteam/ip/655ceb23-2db6-4bf0-9728-5cf0ee0688d5/appending.jpg/:/cr=t:5.41%25,l:0%25,w:100%25,h:88.89%25/rs=w:388,h:194,cg:true"
                        alt="Service 2"
                    />
                    <p>
                        Our email appending service bridges gaps in your data, enhancing personalization and substantially boosting deliverability. It's the key to making sure your messages hit home every time.
                    </p>
                </div>

                {/* Section 3 */}
                <div className="offer-section">
                    <h3>Email Marketing: Engage, Grow, and Succeed</h3>
                    <img
                        src="https://img1.wsimg.com/isteam/ip/655ceb23-2db6-4bf0-9728-5cf0ee0688d5/data%20sec-936eb9c.png/:/cr=t:12.47%25,l:0%25,w:100%25,h:75.06%25/rs=w:388,h:194,cg:true"
                        alt="Service 3"
                    />
                    <p>
                        From the inception of creative designs to the scrutiny of detailed analytics, we've got every aspect of your email marketing campaign expertly covered. We're not just a service, but your partner in achieving marketing success.
                    </p>
                </div>
            </div>
        </div>


    );
};

export default WhatWeOfferComponent;
