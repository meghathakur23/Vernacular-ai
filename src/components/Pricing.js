import React, { Component } from "react";
import Checked from "../Assets/img/icons/checked.png";


class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1 style={{ textAlign: "center", color: "#9393ff", margin: "20px" }}>
            Pricing
          </h1>
          <p  className="color-grey" style={{ marginBottom: "5px", textAlign: "center" }}>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
          Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
          </p>
          <br/>
          <br/>
          <div id="pricing-table" class="clear">
    <div class="plan" id="first">
        <h3 style={{color:"#8c8c8c"}}>Free</h3>
        <h2 style={{color:"#597ef7"}}>$0</h2>
        <p style={{color:"#bfbfbf"}}>Per Month</p>
        <div className="checkitmes">
                <span class="iwt">
                  <img style={{ marginRight: 10, width: "10px"  }} src={Checked} />
                  <span>
                    Ut enim ad minim veniam,
                  </span>
                </span>
                <span class="iwt">
                  <img style={{ marginRight: 10, width: "10px"  }} src={Checked} />
                  <span>
                    Ut enim ad minim veniam, 
                  </span>
                </span>

                <span class="iwt">
                  <img style={{ marginRight: 10, width: "10px"  }} src={Checked} />
                  <span>
                    Ut enim ad minim veniam,
                  </span>
                </span>

                <span class="iwt">
                  <img style={{ marginRight: 10, width: "10px" }} src={Checked} />
                  <span>
                    Ut enim ad minim veniam, 
                  </span>
                </span>
              </div>
        <button id="btn-pricing" type="button" class="btn btn-secondary">Get Started</button>
    </div>
    <div class="plan" id="most-popular">
        <h3 style={{color:"#8c8c8c"}}>Bussiness</h3>
        <h2 style={{color:"#597ef7"}}>$29</h2>
        <p style={{color:"#bfbfbf"}}>Per Month</p>

        <div className="checkitmes">
                <span class="iwt">
                  <img style={{ marginRight: 10, width: "10px"  }} src={Checked} />
                  <span>
                    Ut enim ad minim veniam,
                  </span>
                </span>
                <span class="iwt">
                  <img style={{ marginRight: 10, width: "10px"  }} src={Checked} />
                  <span>
                    Ut enim ad minim veniam, 
                  </span>
                </span>

                <span class="iwt">
                  <img style={{ marginRight: 10, width: "10px"  }} src={Checked} />
                  <span>
                    Ut enim ad minim veniam,
                  </span>
                </span>

                <span class="iwt">
                  <img style={{ marginRight: 10, width: "10px" }} src={Checked} />
                  <span>
                    Ut enim ad minim veniam, 
                  </span>
                </span>
              </div>
        <button  id="btn-pricing" type="button" class="btn btn-primary">Get Started</button>
    </div>
    <div class="plan" id="third">
        <h3 style={{color:"#8c8c8c"}}>Developer</h3>
        <h2 style={{color:"#597ef7"}}>$49</h2>
        <p style={{color:"#bfbfbf"}}>Per Month</p>
{/* 
        <ul>
            <li><b>3GB</b> Disk Space</li>
            <li><b>25GB</b> Monthly Bandwidth</li>
            <li><b>5</b> Email Accounts</li>
			<li><b>Unlimited</b> subdomains</li>			
        </ul> */}
         <div className="checkitmes">
                <span class="iwt">
                  <img style={{ marginRight: 10, width: "10px"  }} src={Checked} />
                  <span>
                    Ut enim ad minim veniam,
                  </span>
                </span>
                <span class="iwt">
                  <img style={{ marginRight: 10, width: "10px"  }} src={Checked} />
                  <span>
                    Ut enim ad minim veniam, 
                  </span>
                </span>

                <span class="iwt">
                  <img style={{ marginRight: 10, width: "10px"  }} src={Checked} />
                  <span>
                    Ut enim ad minim veniam,
                  </span>
                </span>

                <span class="iwt">
                  <img style={{ marginRight: 10, width: "10px" }} src={Checked} />
                  <span>
                    Ut enim ad minim veniam, 
                  </span>
                </span>
              </div>
        <button id="btn-pricing" type="button" class="btn btn-secondary">Get Started</button>
    </div>
</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
