import React, { useState, useEffect } from "react";
import "./index.less";
import { showLogoUrl } from "@/config/urls";
import AxiosData from "@/utils/axios";

const LogoImgComponent = () => {

  const [logoImg,setLogoImg] = useState('')
  //获取logo接口
  const queryLogoImg = () => {
    AxiosData.get(showLogoUrl)
      .then((res) => {
        setLogoImg(res.logoImgPath)
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    queryLogoImg()
  }, []);
  return (
    <div className="library-logo-img">
      <img className="img-area" src={logoImg} />
    </div>
  );
};

export default LogoImgComponent;
