import React, { Component, useState, useEffect } from "react";
import { Input, Tabs } from "antd";
import "./index.less";
import AxiosData from "@/utils/axios";
import Keyword from "../../assets/images/keyword.png";
import NoticeList from "../../component/NoticeList";
import CopyImg from "@/component/CopyImg";

const { Search } = Input;
const { TabPane } = Tabs;
const SearchModule = () => {
  return (
    <div className="main-area">
      <div className="search-module-area">
        <div className="search-module-container">
          <Tabs defaultActiveKey="1" onChange>
            <TabPane tab="Tab 1" key="1"></TabPane>
            <TabPane tab="Tab 2" key="2"></TabPane>
            <TabPane tab="Tab 3" key="3"></TabPane>
          </Tabs>
          <Search
            placeholder="请输入关键字..."
            enterButton="检索"
            size="large"
            onSearch={value => console.log(value)}
            style={{ width: 620 }}
          />
          <img src={Keyword} className="keyword-img" />
        </div>
      </div>
      <div className="content-module-area">
        <div className="search-items mt15">
          <NoticeList
            headerTitle="外文资源"
            contentList={[
              { id: 11, name: "UpToDate临床顾问", time: "2019-09-04" },
              {
                id: 12,
                name: "医知网（外文文献推送平台）",
                time: "2019-09-06"
              },
              {
                id: 13,
                name: " pubmedplus（外文文献聚合分析投稿指南）",
                time: "2019-09-08"
              },
              { id: 14, name: "UpToDate临床顾问", time: "2019-09-04" }
            ]}
            timeParam={false}
            typeParam={0}
            widthParam={250}
          />
          <NoticeList
            headerTitle="外文资源"
            contentList={[
              { id: 11, name: "UpToDate临床顾问", time: "2019-09-04" },
              {
                id: 12,
                name: "医知网（外文文献推送平台）",
                time: "2019-09-06"
              },
              {
                id: 13,
                name: " pubmedplus（外文文献聚合分析投稿指南）",
                time: "2019-09-08"
              },
              { id: 14, name: "UpToDate临床顾问", time: "2019-09-04" }
            ]}
            timeParam={false}
            typeParam={0}
            widthParam={250}
          />
          <NoticeList
            headerTitle="外文资源"
            contentList={[
              { id: 11, name: "UpToDate临床顾问", time: "2019-09-04" },
              {
                id: 12,
                name: "医知网（外文文献推送平台）",
                time: "2019-09-06"
              },
              {
                id: 13,
                name: " pubmedplus（外文文献聚合分析投稿指南）",
                time: "2019-09-08"
              },
              { id: 14, name: "UpToDate临床顾问", time: "2019-09-04" }
            ]}
            timeParam={false}
            typeParam={0}
            widthParam={250}
          />

          <NoticeList headerTitle="读者导航" typeParam={1} />
        </div>
        <div className="notice-announcement mt15">
          <NoticeList
            headerTitle="通知公告"
            widthParam={800}
            timeParam={true}
            typeParam={0}
            contentList={[
              { id: 11, name: "UpToDate临床顾问", time: "2019-09-04" },
              {
                id: 12,
                name: "医知网（外文文献推送平台）",
                time: "2019-09-06"
              },
              {
                id: 13,
                name: " pubmedplus（外文文献聚合分析投稿指南）",
                time: "2019-09-08"
              },
              { id: 14, name: "UpToDate临床顾问", time: "2019-09-04" },
              { id: 15, name: "UpToDate临床顾问", time: "2019-09-04" },
              { id: 16, name: "UpToDate临床顾问", time: "2019-09-04" }
            ]}
          />
          <NoticeList
            headerTitle="资源动态"
            timeParam={false}
            widthParam={375}
            typeParam={0}
            contentList={[
              { id: 11, name: "UpToDate临床顾问", time: "2019-09-04" },
              {
                id: 12,
                name: "医知网（外文文献推送平台）",
                time: "2019-09-06"
              },
              {
                id: 13,
                name: " pubmedplus（外文文献聚合分析投稿指南）",
                time: "2019-09-08"
              },
              { id: 14, name: "UpToDate临床顾问", time: "2019-09-04" }
            ]}
          />
        </div>
        <div className="notice-announcement mt15">
          <NoticeList
            headerTitle="信息编译/最新文献报道"
            widthParam={800}
            timeParam={true}
            typeParam={0}
            contentList={[
              { id: 11, name: "UpToDate临床顾问", time: "2019-09-04" },
              {
                id: 12,
                name: "医知网（外文文献推送平台）",
                time: "2019-09-06"
              },
              {
                id: 13,
                name: " pubmedplus（外文文献聚合分析投稿指南）",
                time: "2019-09-08"
              },
              { id: 14, name: "UpToDate临床顾问", time: "2019-09-04" },
              { id: 15, name: "UpToDate临床顾问", time: "2019-09-04" },
              { id: 16, name: "UpToDate临床顾问", time: "2019-09-04" }
            ]}
          />
          <NoticeList
            headerTitle="读者服务"
            timeParam={false}
            widthParam={375}
            typeParam={0}
            contentList={[
              { id: 11, name: "UpToDate临床顾问", time: "2019-09-04" },
              {
                id: 12,
                name: "医知网（外文文献推送平台）",
                time: "2019-09-06"
              },
              {
                id: 13,
                name: " pubmedplus（外文文献聚合分析投稿指南）",
                time: "2019-09-08"
              },
              { id: 14, name: "UpToDate临床顾问", time: "2019-09-04" }
            ]}
          />
        </div>
        <CopyImg />
      </div>
    </div>
  );
};

export default SearchModule;
