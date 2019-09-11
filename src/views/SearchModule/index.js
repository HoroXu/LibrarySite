import React, { Component, useState, useEffect } from "react";
import { Input, Tabs } from "antd";
import "./index.less";
import AxiosData from "@/utils/axios";
import Keyword from "../../assets/images/keyword.png";

const { Search } = Input;
const { TabPane } = Tabs;
const SearchModule = () => {
  return (
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
        <img src={Keyword} className='keyword-img'/>
      </div>

      
    </div>
  );
};

export default SearchModule;
