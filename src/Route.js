import React, { useState, useEffect } from "react";
import { Layout, Footer } from "antd";
import "./App.less";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import SearchModule from "./views/SearchModule";
import MoreTable from "./views/MoreTable";
import DetailPage from "./views/DetailPage";

import { queryChannelInfo } from "@/redux/Main/actions";
import { showAllChannelUrl } from "@/config/urls";
import AxiosData from "@/utils/axios";

const App = (props) => {
  //获取渠道信息
  const queryShowAllChannel = () => {
    AxiosData.get(showAllChannelUrl)
      .then((res) => {
        props.queryChannelInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    queryShowAllChannel();
  }, []);
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <Route exact path="/" component={SearchModule} />
          <Layout>
            <div className="dip-content">
              <Route path="/moreTable" component={MoreTable} />
              {/* 详情页面 */}
              <Route path="/detail" component={DetailPage} />
            </div>
          </Layout>
        </React.Fragment>
      </Switch>
    </Router>
  );
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    queryChannelInfo: (val) => {
      dispatch(queryChannelInfo(val));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
