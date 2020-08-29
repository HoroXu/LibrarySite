import React, { useState, useEffect } from "react";
import "./index.less";
import AxiosData from "@/utils/axios";
import { showBgUrl } from "@/config/urls";

const Banner = () => {
  const [bgImg, setBgImg] = useState("");

  const queryShowBgUrl = () => {
    AxiosData.get(showBgUrl)
      .then((res) => {
        setBgImg(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    queryShowBgUrl();
  }, []);
  return (
    <div className="banner-area">
      <img src={bgImg} />
    </div>
  );
};

export default Banner;
