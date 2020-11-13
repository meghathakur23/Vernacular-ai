import React, { Component } from 'react';
import Landing from '../components/Landing';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
<div className="container">
			<a className="navbar-brand" href="index.html">Assignment</a>
			<button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse"
				data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="oi oi-menu"></span> Menu
			</button>

			<div className="collapse navbar-collapse" id="ftco-nav">
				<ul className="navbar-nav nav ml-auto">
					<li className="nav-item"><a href="#Landing" className="nav-link"><span>Home</span></a></li>
					<li className="nav-item"><a href="#Feature" className="nav-link"><span>App Feature</span></a></li>
					<li className="nav-item"><a href="#Gallery" className="nav-link"><span>Gallery</span></a></li>
					<li className="nav-item"><a href="#Pricing" className="nav-link"><span>Pricing</span></a></li>
					<li className="nav-item"><a href="#FAQ" className="nav-link"><span>F.A.Q</span></a></li>
					<li className="nav-item"><a href="#Contact" className="nav-link"><span>Contact Us</span></a></li>
					<button id="header-button" type="button" class="btn">Getting Started</button>

				</ul>
			</div>
		</div>
	</nav>



      </div>
    );
  }
}

export default Header;