import React, { Component } from "react";
import { Layout, Footer } from "antd";
import "./App.less";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";

import SearchModule from "./views/SearchModule";
import HisDetail from "./views/HisDetail/hook";

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <React.Fragment>
            <Route exact path="/" component={SearchModule} />

            <Layout>
              <div className="dip-content">
                {/* <Route path="/" component={SearchModule} /> */}
                <Route path="/hisDetail" component={HisDetail} />
              </div>
            </Layout>
          </React.Fragment>
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}
