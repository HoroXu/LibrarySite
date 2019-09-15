import React, { Component, useState, UseEffect } from "react";
import "./index.less";
import yl2 from "@/assets/images/yl2.png";
import guojia from "@/assets/images/guojia.png";
import jinling from "@/assets/images/jinling.png";
import nanjing from "@/assets/images/nanjing.png";
import nanjingd from "@/assets/images/nanjingd.png";
const CopyImg = () => {
  return (
    <div className="copy-img-container mt15">
      <div className="link-text">友情链接</div>
      <a href="http://lib.njmu.edu.cn/" target="_blank">
        <img src={yl2} />
      </a>
      <a href="http://www.nlc.cn/" target="_blank">
        <img src={guojia} />
      </a>
      <a href="http://www.jllib.cn/" target="_blank">
        <img src={jinling} />
      </a>
      <a href="http://www.jslib.org.cn/" target="_blank">
        <img src={nanjing} />
      </a>
      <a href="http://lib.nju.edu.cn/html/index.html" target="_blank">
        <img src={nanjingd} />
      </a>
    </div>
  );
};

export default CopyImg;
