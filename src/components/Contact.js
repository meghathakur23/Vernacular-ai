// import { Phone } from "@material-ui/icons";
import React, { Component } from "react";
import Pin from "../Assets/img/icons/pin.png";
import Phone from "../Assets/img/icons/phone.png";
import Email from "../Assets/img/icons/email.png";
import Clock from "../Assets/img/icons/clock.png";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1 style={{ textAlign: "center", color: "#9393ff", margin: "20px" }}>
            Contact Us
          </h1>
          <p className="color-grey" style={{ marginBottom: "50px", textAlign: "center" }}>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas Et nemo qui
            impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
            quidem hic quas.
          </p>
          <div class="contact-us">
            <div class="row">
              <div class="col-md-6">
                <div style={{ display: "contents", width: "200px" }}>
                  <div
                    class="card"
                    style={{
                      display: "inline-block",
                      height: "200px",
                      width: "265px",
                      backgroundColor: " #d7d7fc",
                    }}
                  >
                    <div class="card-body" style={{ textAlign: "center" }}>
                      <img src={Pin} />
                      <br />
                      <br />
                      <h5 class="card-title">ADDRESS</h5>

                      <p class="card-text">
                        A 108 Adam Street, New York, NY 535022
                      </p>
                    </div>
                  </div>{" "}
                </div>
                <div style={{ display: "contents", width: "200px" }}>
                  <div
                    class="card"
                    style={{
                      display: "inline-block",
                      height: "200px",
                      width: "265px",
                      backgroundColor: " #d7d7fc",
                    }}
                  >
                    <div class="card-body" style={{ textAlign: "center" }}>
                      <img src={Phone} />
                      <br />
                      <br />

                      <h5 class="card-title">CALL US</h5>
                      <p class="card-text">
                        +1 5589 55488 55
                        <br />
                        +1 5589 55488 64
                      </p>
                    </div>
                  </div>{" "}
                </div>
                <div style={{ display: "contents", width: "200px" }}>
                  <div
                    class="card"
                    style={{
                      display: "inline-block",
                      height: "200px",
                      width: "265px",
                      backgroundColor: " #d7d7fc",
                    }}
                  >
                    <div class="card-body" style={{ textAlign: "center" }}>
                      <img src={Email} />
                      <br />
                      <br />
                      <h5 class="card-title">EMAIL US</h5>

                      <p class="card-text">
                        contact@example.com
                        <br />
                        info@example.com
                      </p>
                    </div>
                  </div>{" "}
                </div>
                <div style={{ display: "contents", width: "200px" }}>
                  <div
                    class="card"
                    style={{
                      display: "inline-block",
                      height: "200px",
                      width: "265px",
                      backgroundColor: " #d7d7fc",
                    }}
                  >
                    <div class="card-body" style={{ textAlign: "center" }}>
                      <img src={Clock} />
                      <br />
                      <br />

                      <h5 class="card-title">Working Hours</h5>

                      <p class="card-text">
                        Mon - Fri : 9AM to 5PM Sunday : 9AM to 1 PM
                      </p>
                    </div>
                  </div>{" "}
                </div>
              </div>

              <div class="col-md-6">
                <form action="#" class="p-md-1 contact-form">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="7"
                      class="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div
                    class="form-group"
                    style={{ justifyContent: "center", display: "flex" }}
                  >
                    <input
                      id="contact-button"
                      type="submit"
                      value="Send Message"
                      class="btn btn-primary py-3 px-5"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
