import React, { Component } from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Facebook from '../Assets/img/icons/facebook.png'
import Twitter from '../Assets/img/icons/twitter.png'
import Skype from '../Assets/img/icons/skype.png'
import Linkedin from '../Assets/img/icons/linkedin.png'
import Instagram from '../Assets/img/icons/instagram.png'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="backhround-fixed">
		  <br/>
        <h1 style={{ textAlign: "center", color: "#9393ff", margin: "20px" }}>
          Join Our Newsletter
        </h1>
        <p  className="color-grey" style={{ marginBottom: "30px", textAlign: "center" }}>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem.
        </p>
		<div className="Contact">
        <div class="input-group mb-3" style={{width: "40%",}}>
          <input
		  style={{borderRadius: "20px"}}
            type="text"
			class="form-control"
          />
		    <div className="Contact-subs">
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">
              Subscribe
            </span>
          </div>
		  </div>
		
        </div>
		</div>
		<br/>
        <footer class="ftco-footer ftco-section" style={{background: "#FFF"}}>
          <div class="container">
            <div class="row mb-5">
              <div class="col-md">
                <div class="ftco-footer-widget mb-4 mt-5" >
                  <h3 class="ftco-heading-2">Assignment</h3>
				  <p  className="Footer-text">A108 Adam Street New York, NY 535022 United States</p>
				  <p  className="Footer-text"><span style={{color:"#000"}}>Phone :</span> +1 5589 55488 56</p>
				  <p  className="Footer-text"><span style={{color:"#000"}}>Email :</span> info@example.com</p>

                  <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                    <li class="ftco-animate">
                      <a href="#">
                        <span class="icon-twitter"></span>
                      </a>
                    </li>
                    <li class="ftco-animate">
                      <a href="#">
                        <span class="icon-facebook"></span>
                      </a>
                    </li>
                    <li class="ftco-animate">
                      <a href="#">
                        <span class="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md">
                <div class="ftco-footer-widget mb-4 mt-4">
                  <h3 class="ftco-heading-2 mb-3"> Useful Links</h3>
                  <ul class="list-unstyled" style={{color: "#8c8c8c"}}>
                    <li className="mb-10">
                      <a className="Footer-text" href="#">
                        <span><ArrowForwardIosIcon/></span>Home
                      </a>
                    </li>
                    <li className="mb-10"> 
                      <a  className="Footer-text" href="#">
                        <span><ArrowForwardIosIcon/></span>About Us 
                      </a>
                    </li>
                    <li className="mb-10"> 
                      <a  className="Footer-text" href="#">
                        <span><ArrowForwardIosIcon/></span>Services
                      </a>
                    </li>
                    <li className="mb-10">
                      <a  className="Footer-text" href="#">
                        <span><ArrowForwardIosIcon/></span>Projects
                      </a>
                    </li>
                    <li className="mb-10">
                      <a  className="Footer-text" href="#">
                        <span><ArrowForwardIosIcon/></span>Terms of Services
                      </a>
                    </li>
					<li className="mb-10">
                      <a   className="Footer-text" href="#">
                        <span><ArrowForwardIosIcon/></span>Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md">
                <div class="ftco-footer-widget mb-4 mt-4">
                  <h3 class="ftco-heading-2 mb-3">Our Services</h3>
                  <ul class="list-unstyled" >
                    <li className="mb-10">
                      <a className="Footer-text" href="#">
                        <span > <ArrowForwardIosIcon/></span>Web
                       Web Design
                      </a>
                    </li>
                    <li className="mb-10">
                      <a className="Footer-text" href="#">
                        <span > <ArrowForwardIosIcon/></span>Web
                       Web Development
                      </a>
                    </li>
                    <li className="mb-10">
                      <a className="Footer-text" href="#">
                        <span > <ArrowForwardIosIcon/></span>
                        Product Management 
                      </a>
                    </li>
                    <li className="mb-10">
                      <a className="Footer-text" href="#">
                        <span > <ArrowForwardIosIcon/></span>
						Marketing
                      </a>
                    </li>
					<li className="mb-10">
                      <a className="Footer-text" href="#">
                        <span > <ArrowForwardIosIcon/></span>
						Graphic Design
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md">
                <div class="ftco-footer-widget mb-4 mt-4">
                  <h3 class="ftco-heading-2 mb-5">Our Social Network</h3>
                  <div class="block-23 mb-3">
                   <p className="Footer-text"> Cres Frementum odio eu feuglat lide par naso tierra videa magna derita valies</p>
                  </div>
				  <div>
					  <img className="social-icon" src={Twitter}/>
					  <img className="social-icon" src={Facebook}/>
					  <img className="social-icon"  src={Instagram}/>
					  <img className="social-icon" src={Skype}/>

				  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-center"></div>
            </div>
          </div>
        </footer>

		<p> Copyright Assignment All Rights Reserved</p>
		<br/>
		<br/>
      </div>
    );
  }
}

export default Footer;
