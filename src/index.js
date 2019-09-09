import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { HashRouter } from "react-router-dom";
// import { LocaleProvider } from 'antd'
// import zh_CN from 'antd/lib/locale-provider/zh_CN'
require("./assets/font/iconfont.js");

ReactDOM.render(
  <Provider store={store}>
    {/* <LocaleProvider locale={zh_CN}> */}
      <HashRouter>
        <App />
      </HashRouter>
    {/* </LocaleProvider> */}
  </Provider>,
  document.getElementById("root")
);
