import React, { useState, useEffect } from "react";
import "./index.less";

const MoreTable = (props) => {
  const tableContent = [
    {
      content: "中秋节放假通知",
      time: "2019-09-04"
    },
    {
      content: "图书馆关于PubMedPlus数据库个人注册的通知",
      time: "2019-09-06"
    },
    {
      content: "百度教育云和百度文库平台试用通知",
      time: "2019-09-01"
    },
    {
      content: "紧急通知：万方数据平台暂时不能登录",
      time: "2019-09-07"
    },
    {
      content: "妇幼分院图书馆开馆公告",
      time: "2019-09-03"
    }
  ];

  console.log(props.location.pathname.split('/')[2], "this.props.location=============");
  return (
    <div className="more-table-container">
      <div className="position-area">
        <span>当前位置：</span>
        <span className='first-page'>图书馆首页</span>
        <span className='now-page'>{props.location.pathname.split('/')[2]}</span>
      </div>
      <div className="more-table-content">
        <div className="navigation-area">1</div>
        <div className="table-list-area">
          <h3 className="table-list-title">{props.location.pathname.split('/')[2]}</h3>
          <ul className="main-list">
            {tableContent.map((item, index) => {
              return (
                <li className="single-item">
                  <span className="single-item-content">{item.content}</span>
                  <span className="single-item-time">{item.time}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoreTable;
