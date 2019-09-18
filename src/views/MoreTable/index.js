import React, { useState, useEffect } from "react";
import { Menu, Pagination } from "antd";
import "./index.less";

const MoreTable = props => {
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

  const tableTitleArr = [
    { tableTitle: "外文资源" },
    { tableTitle: "中文资源" },
    { tableTitle: "电子书" }
  ];
  const navigationTitleArr = [
    { tableTitle: "查新服务" },
    { tableTitle: "读者培训" },
    { tableTitle: "精准查重" },
    { tableTitle: "查收查引" },
    { tableTitle: "核心期刊" },
    { tableTitle: "信息简报" },
    { tableTitle: "机构库" },
    { tableTitle: "定题检索" }
  ];

  const topTitleArr = [{ tableTitle: "入馆指南" }, { tableTitle: "关于我们" }];

  console.log(
    props.location.pathname.split("/")[2],
    "this.props.location============="
  );

  function switchTab(e) {
    console.log(e, "查看切换====");
  }

  const judgeParam =
    props.location.pathname.split("/")[2] ||
    props.location.pathname.split("/")[1];
  return (
    <div className="more-table-container">
      <div className="position-area">
        <span>当前位置：</span>
        <span className="first-page">图书馆首页</span>
        <span className="now-page">{judgeParam}</span>
      </div>
      <div className="more-table-content">
        <Menu
          mode="inline"
          style={{ width: 185 }}
          onClick={e => switchTab(e)}
          defaultSelectedKeys={[judgeParam]}
        >
          {"外文资源中文资源电子书".indexOf(judgeParam) > -1
            ? tableTitleArr.map((item, index) => {
                return (
                  <Menu.Item key={item.tableTitle}>{item.tableTitle}</Menu.Item>
                );
              })
            : "aboutUshandbook".indexOf(judgeParam) > -1
            ? topTitleArr.map((item, index) => {
                return (
                  <Menu.Item key={item.tableTitle}>{item.tableTitle}</Menu.Item>
                );
              })
            : navigationTitleArr.map((item, index) => {
                return (
                  <Menu.Item key={item.tableTitle}>{item.tableTitle}</Menu.Item>
                );
              })}
        </Menu>
        <div className="table-list-area">
          <h3 className="table-list-title">{judgeParam}</h3>
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

          <Pagination total={50} className="pagination-area" />
        </div>
      </div>
    </div>
  );
};

export default MoreTable;
