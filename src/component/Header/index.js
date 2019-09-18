import React, { Component, useState, useEffect } from "react";
import "./index.less";
import { Link } from "react-router-dom";
import AxiosData from "@/utils/axios";

const Header = () => {
  return (
    <div className="library-bottom">
      <div className="library-bottom-inner">
        <div className="left-info menuFont">
          <span className="menu-item ">首页</span>
          <Link to="/handbook">
            <span className="menu-item">入馆指南</span>
          </Link>
          <Link to="/aboutUs">
            <span className="menu-item">关于我们</span>
          </Link>
        </div>
        <div className="right-info menu-item">登录</div>
      </div>
    </div>
  );
};

export default Header;
