import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import testimonialsOne from "../Assets/img/testimonials/testimonials-1.jpg";
import testimonialsTwo from "../Assets/img/testimonials/testimonials-2.jpg";
import testimonialsThree from "../Assets/img/testimonials/testimonials-3.jpg";
import testimonialsFour from "../Assets/img/testimonials/testimonials-4.jpg";

class Testomonials extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div  className="backhround-fixed" >
        <div className="container">
          <br />
          <h1 style={{ textAlign: "center", color: "#9393ff", margin: "20px" }}>
            Testomonials
          </h1>
          <p className="color-grey" style={{ marginBottom: "50px", textAlign: "center" }}>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas. Et nemo qui
            impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
            quidem hic quas.
          </p>

          <div style={{ justifyContent: "space-around" }} class="row">
            
          </div>

          <div style={{ justifyContent: "space-around" }} class="row">
          <OwlCarousel
              className="owl-theme"
              loop="true"
              margin={10}
              center = "true"
              responsiveClass = "true"
              dotsEach
              autoplay
              items={2}
            >
              <div>
                <div class="col-sm-4">
                <img
                  class="testimonials"
                  style={{
                    position: "absolute",
                    zIndex: 1,
                    top: "30px",
                    left: "-60px",
                    border: "8px solid white",
                    borderRadius: "4px",
                    height: '120px',
                    width: '120px'
                  }}
                  src={testimonialsOne}
                />

                <div class="card" style={{ width: "400px" }}>
                  <div
                    style={{
                      width: '400px',
                      padding: "50px 50px",
                    }}
                    class="card-body"
                  >
                    <h5 class="card-title">Matt Brandon</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Freelancher</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content. Some quick example text
                      to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            {/*  */}


            <div>
                <div class="col-sm-4">
                <img
                  class="testimonials"
                  style={{
                    position: "absolute",
                    zIndex: 1,
                    top: "30px",
                    left: "-60px",
                    border: "8px solid white",
                    borderRadius: "4px",
                    height: '120px',
                    width: '120px'
                  }}
                  src={testimonialsTwo}
                />

                <div class="card" style={{ width: "400px" }}>
                  <div
                    style={{
                      width: '400px',
                      padding: "50px 50px",
                    }}
                    class="card-body"
                  >
                    <h5 class="card-title">Matt Brandon</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Freelancher</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content. Some quick example text
                      to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}

            <div>
                <div class="col-sm-5">
                <img
                  class="testimonials"
                  style={{
                    position: "absolute",
                    zIndex: 1,
                    top: "30px",
                    left: "-60px",
                    border: "8px solid white",
                    borderRadius: "4px",
                    height: '120px',
                    width: '120px'
                  }}
                  src={testimonialsThree}
                />

                <div class="card" style={{ width: "400px" }}>
                  <div
                    style={{
                      width: '400px',
                      padding: "50px 50px",
                    }}
                    class="card-body"
                  >
                    <h5 class="card-title">Matt Brandon</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Freelancher</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content. Some quick example text
                      to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}

            <div>
                <div class="col-sm-5">
                <img
                  class="testimonials"
                  style={{
                    position: "absolute",
                    zIndex: 1,
                    top: "30px",
                    left: "-60px",
                    border: "8px solid white",
                    borderRadius: "4px",
                    height: '120px',
                    width: '120px'
                  }}
                  src={testimonialsFour}
                />

                <div class="card" style={{ width: "400px" }}>
                  <div
                    style={{
                      width: '400px',
                      padding: "50px 50px",
                    }}
                    class="card-body"
                  >
                    <h5 class="card-title">Matt Brandon</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Freelancher</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content. Some quick example text
                      to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </OwlCarousel>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Testomonials;
