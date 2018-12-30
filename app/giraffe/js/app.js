import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Faq from "./components/faq";
import LandingPage from "./components/landingPage";
import Slack from "./components/slack";
import Github from "./components/github";
import Gallery from "./components/gallery";
import SmallScreenAlert from "./components/smallScreenAlert";
import { updateAuth } from "./actions";

class App extends React.Component {
  componentWillMount() {
    fetch("/_github/logged_in/")
      .then(response => response.json())
      .then(user => updateAuth(user))
      .catch(error => {
        console.log({ error });
      });
  }

  render() {
    return (
      <Fragment>
        <SmallScreenAlert />
        <Switch>
          <Route path="/faq" component={Faq} />
          <Route path="/slack" component={Slack} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/github" component={Github} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default hot(module)(() => <App classname="app" />);
