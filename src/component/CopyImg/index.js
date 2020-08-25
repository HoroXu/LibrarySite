import React, { useState, useEffect } from "react";
import "./index.less";
import { showAllLinkUrl } from "@/config/urls";
import AxiosData from "@/utils/axios";
import yl2 from "@/assets/images/yl2.png";
import guojia from "@/assets/images/guojia.png";
import jinling from "@/assets/images/jinling.png";
import nanjing from "@/assets/images/nanjing.png";
import nanjingd from "@/assets/images/nanjingd.png";
const CopyImg = () => {
  const [linkUrlsArr, setLinkUrlsArr] = useState([]);

  //获取链接
  const queryLinkUrls = () => {
    AxiosData.get(showAllLinkUrl)
      .then((res) => {
        setLinkUrlsArr(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    queryLinkUrls();
  }, []);
  return (
    <div className="copy-img-container mt15">
      <div className="link-text">友情链接</div>
      {linkUrlsArr.map((item, index) => {
        return (
          <a href={item.linkTargetUrl} title={item.linkName} target="_blank">
            <img src={item.linkImageUrl} />
          </a>
        );
      })}
    </div>
  );
};

export default CopyImg;
