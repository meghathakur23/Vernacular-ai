import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import GalaryOne from "../Assets/img/gallery/gallery-1.png";
import GalaryTwo from "../Assets/img/gallery/gallery-2.png";
import GalaryThree from "../Assets/img/gallery/gallery-3.png";
import GalaryFour from "../Assets/img/gallery/gallery-4.png";
import GalaryFive from "../Assets/img/gallery/gallery-5.png";
import GalarySix from "../Assets/img/gallery/gallery-6.png";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{}}>
        <OwlCarousel
          className="owl-theme"
          loop="true"
          margin={10}
          center
          rewind
          responsiveClass = "true"
          dotsEach
          autoplay
          items={5}

        >
        <div className="img-galery">
            <img className="galery" src={GalaryOne} />
        </div>
          <div className="img-galery">
              <img className="galery" src={GalaryTwo} />
          </div>
          <div className="img-galery">
              <img className="galery" src={GalaryThree} />
          </div>
          <div className="img-galery">
              <img className="galery" src={GalaryFour} />
          </div>
          <div className="img-galery">
              <img className="galery" src={GalaryFive} />
          </div>
          <div className="img-galery">
              <img className="galery" src={GalarySix} />
          </div>
        </OwlCarousel>
      </div>
    );
  }
}

export default Carousel;

// ....

// className "owl-theme" is optional
