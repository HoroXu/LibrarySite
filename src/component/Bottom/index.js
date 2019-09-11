import React, { Component } from "react";
import "./index.less";
export default class Bottom extends Component {
  state = {};
  render() {
    return (
      <div className="copy-right">
        <p>
          Copyright @ 2020 jiangsu Province Hospital All Right
          Reserved.版权所有：江苏省人民医院
        </p>
        <p>
          地址：南京市广州路300号 邮编：210029 联系电话：025-83714511
          备案号：苏ICP备09027675号
        </p>
        <p>技术支持：上海骥灏网络科技有限公司</p>
      </div>
    );
  }
}
