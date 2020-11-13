import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "../components/Landing";
import Features from "../components/Features";
import Gallery from "../components/Galary";
import Contact from "../components/Contact";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import { Switch } from "@material-ui/core";

class app extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Router>
            <Switch>
          <Route exact path="/" component={Landing}>
          </Route>
          <Route path="/app-feature" component={Features}>
          </Route>
          <Route path="/gallery" component={Gallery}>
          </Route>
          <Route path="/pricing" component={Pricing}>
          </Route>
          <Route path="/faq" component={FAQ}>
          </Route>
          <Route path="/contact-us" component={Contact}>
          </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default app;
