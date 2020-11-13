import { colors } from "@material-ui/core";
import React, { Component } from "react";
import FeaturesImg from "../Assets/img/features.svg";
import DetailsImg from "../Assets/img/details-1.png";
import SecDetailsImg from "../Assets/img/details-2.png";
import ThirdDetailsImg from "../Assets/img/details-3.png";
import FourDetailsImg from "../Assets/img/details-4.png";
import FolderList from "../Layout/List";
import Checked from "../Assets/img/icons/checked.png";
class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h1 style={{ textAlign: "center", color: "#9393ff", margin: "20px" }}>
          App Features
        </h1>
        <p style={{ marginBottom: "50px", textAlign: "center", color: "#8c8c8c" }}>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
          Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        <div class="row">
          <div class="col-sm">
            <FolderList />
          </div>
          <div class="col-sm">
            <img style={{ margin: "auto" }} src={FeaturesImg} />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="row">
          <div class="col-sm-4">
            <img className="img-details" src={DetailsImg} />
          </div>
          <div class="col-sm-8">
            <div class="col-sm">
              <h4>
                Volumtatem dignissimos provident quasi corporis voluptates sit assumendra
                    </h4>
              <p style={{fontStyle: "italic", color: "#595959"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="checkitmes">
                <span class="iwt">
                  <img style={{ marginRight: 10 }} src={Checked} />
                  <span>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi{" "}
                  </span>
                </span>
                <span class="iwt">
                  <img style={{ marginRight: 10 }} src={Checked} />
                  <span>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi{" "}
                  </span>
                </span>

                <span class="iwt">
                  <img style={{ marginRight: 10 }} src={Checked} />
                  <span>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi{" "}
                  </span>
                </span>

                <span class="iwt">
                  <img style={{ marginRight: 10 }} src={Checked} />
                  <span>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi{" "}
                  </span>
                </span>
              </div>
              <br />
              <br />
              <p className="color-grey">
                {" "}
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="row">
          <div class="col-sm-8">
            <h4>Corporis temporibus maiores provident</h4>
            <p className="color-grey" style={{ fontStyle: "italic" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="color-grey"> 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum. sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <p className="color-grey">
              inventore veritatis et quasi architecto beatae vitae dicta sunt,
              explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam
              est, qui dolorem ipsum, quia dolor sit amet consectetur
              adipisci[ng] velit,
            </p>
          </div>
          <div class="col-sm-4">
            <img className="img-details" src={SecDetailsImg} />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="row">
          <div class="col-sm-4">
            <img className="img-details" src={ThirdDetailsImg} />
          </div>
          <div class="col-sm-8">
            <h4>
              Sunt consequatur as ut est nulla consectetur reiciendis animi volumptas
            </h4>
            <p className="color-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="checkitmes">
              <span class="iwt">
                <img style={{ marginRight: 10 }} src={Checked} />
                <span>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi{" "}
                </span>
              </span>
              <span class="iwt">
                <img style={{ marginRight: 10 }} src={Checked} />
                <span>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi{" "}
                </span>
              </span>

              <span class="iwt">
                <img style={{ marginRight: 10 }} src={Checked} />
                <span>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi{" "}
                </span>
              </span>
            </div>
            <br />
            <p className="color-grey">
              {" "}
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <p className="color-grey">
              {" "}
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="row">
          <div class="col-sm-8">
            <h3>
              Ouas et Necessitatibus eaque impedit ipsum animi consequatur incidunt in 
            </h3>
            <p className="color-grey" style={{fontStyle:"italic"}}> 
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="color-grey">
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="checkitmes">
              <span class="iwt">
                <img style={{ marginRight: 10 }} src={Checked} />
                <span>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi{" "}
                </span>
              </span>
              <span class="iwt">
                <img style={{ marginRight: 10 }} src={Checked} />
                <span>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit 
                </span>
              </span>
              <span class="iwt">
                <img style={{ marginRight: 10 }} src={Checked} />
                <span>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi{" "}
                </span>
              </span>
            </div>
          </div>
          <div class="col-sm-4">
            <img className="img-height" src={FourDetailsImg} />
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
