import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import './index.less'
const BreadcrumbCom = (props) => {
  const { judgeParam } = props;
  return (
    <Breadcrumb className='breadcrumb-area'>
      <Link to="/">
        <Breadcrumb.Item>图书馆首页</Breadcrumb.Item>
      </Link>
      {/* <Breadcrumb.Item>
        <a href="">Application Center</a>
      </Breadcrumb.Item> */}
      <Breadcrumb.Item>{judgeParam}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbCom;
