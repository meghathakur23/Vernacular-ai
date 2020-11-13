import { Container } from "@material-ui/core";
import React, { Component, Fragment } from "react";
import heroImg from "../Assets/img/hero-img.png";
import AppleIcon from '@material-ui/icons/Apple';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="background">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div class="container">
          <div class="row row-cols-2">
            <div class="col">
              <h1 style={{ fontSize: "50px",  color: "#9393ff"}}>App Landing Page Template</h1>
              <p style={{color: "#595959"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                maximus fringilla nisl, nec venenatis leo auctor vitae. Sed quam
                arcu, porttitor ut nulla eget, fermentum dignissim mauris
              </p>

              <button type="button" class="btn btn-secondary">
                  <PlayArrowIcon/>
                Google Play{" "}
              </button>
              <button type="button" class="btn btn-secondary">
              <AppleIcon/>

                Apple Store
              </button>
            </div>
            <div class="col">
              <img className="landing-img" src={heroImg} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
