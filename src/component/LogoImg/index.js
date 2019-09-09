import React, { Component, useState, useEffect } from "react";
import "./index.less";
import AxiosData from "@/utils/axios";
import LogoImg from "../../assets/images/logo-img.jpg";

const Header = () => {
  return (
    <div className="library-logo-img">
      <img src={LogoImg} />
    </div>
  );
};
