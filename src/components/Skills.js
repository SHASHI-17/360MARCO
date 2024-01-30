// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import MarketingComponent from "./MarketingComponent";
import WhatWeOfferComponent from "./WhatWeOfferComponent";
import RoundedImageComponent from "./RoundedImageComponent";

export const Skills = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };
  // const imageUrl = 'https://img1.wsimg.com/isteam/ip/655ceb23-2db6-4bf0-9728-5cf0ee0688d5/who%20we%20are.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1920,m';
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              {/* <h2>Who We Are</h2> */}
              {/* <p>Are you ready to take your marketing efforts to the next level? Your search ends here, with 360 Marketing Concepts. <br /> Our specialization lies in email lists, appending services, and marketing strategies,<br /> all designed to help you achieve truly remarkable results.</p> */}
              {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Vast Expertise Meter" />
                  <h5>Vast Expertise</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Brand Identity Meter" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Relentless Focus Meter" />
                  <h5>Relentless Focus</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Data Quality Meter" />
                  <h5>Data Quality</h5>
                </div>
              </Carousel> */}
              <MarketingComponent/>
              <WhatWeOfferComponent/>
              <RoundedImageComponent/>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
