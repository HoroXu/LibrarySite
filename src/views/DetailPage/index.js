import React, { useState, useEffect } from "react";
import "./index.less";
import Header from "@/component/Header";
import Banner from "@/component/Banner";

import AxiosData from "@/utils/axios";
import { showArticleDetailUrl } from "@/config/urls";
// import Bottom from "@/component/Bottom";
const DetailPage = (props) => {
  const judgeParam =
    props.location.pathname.split("/")[2] ||
    props.location.pathname.split("/")[1];

  const [detailInfo, setDetailInfo] = useState({});
  //获取详情
  const queryShowArticleDetail = () => {
    AxiosData.get(showArticleDetailUrl, {
      articleId: props.location.pathname.split("/")[2],
    })
      .then((res) => {
        console.log(res);
        setDetailInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    queryShowArticleDetail();
  }, []);
  return (
    <div className="detail-page-area">
      <Header />
      <Banner />
      <div className="position-area">
        <span>当前位置：</span>
        <span className="first-page">图书馆首页</span>
        <span className="now-page">{judgeParam}</span>
      </div>

      <div className="detail-content">
        <h2 className="detail-title">{detailInfo.articleTitle}</h2>
        <div>{detailInfo.updateDate}</div>
  <div className="detail-content">{detailInfo.content}</div>
        <div className="name-area">签名区域</div>
      </div>
      {/* <Bottom/> */}
    </div>
  );
};

export default DetailPage;
