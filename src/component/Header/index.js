import React, { Component, useState, useEffect } from "react";
import "./index.less";
import AxiosData from "@/utils/axios";

const Header = () => {
  return (
    <div className="library-bottom">
      <div>
        <span>首页</span>
        <span>入馆指南</span>
        <span>关于我们</span>
      </div>
      <div>登录</div>
    </div>
  );
};
