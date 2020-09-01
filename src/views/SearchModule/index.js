import React, { Component, useState, useEffect } from "react";
import { Input, Tabs, Select } from "antd";
import { connect } from "react-redux";
import "./index.less";
import { showDzdhChannelUrl } from "@/config/urls";
import AxiosData from "@/utils/axios";
import Keyword from "../../assets/images/keyword.png";
import NoticeList from "../../component/NoticeList";
import CopyImg from "@/component/CopyImg";

const InputGroup = Input.Group;
const { Option } = Select;
const { Search } = Input;
const { TabPane } = Tabs;
const tabArr = [
  { tabName: "知网", tabId: 1 },
  { tabName: "泉方学术搜索", tabId: 2 },
  { tabName: "本地PubMed", tabId: 3 },
  { tabName: "节目检索", tabId: 4 },
];
const SearchModule = (props) => {
  const [dzdhChannel, setDzdhChannel] = useState([]);

  //计算组建宽度
  const queryWidthParam = (index) => {
    if (index < 3) {
      return 250;
    } else if (index === 4 || index === 6) {
      return 800;
    } else {
      return 375;
    }
  };

  //计算组建样式类别
  const queryTypeParam = (index) => {
    if (index === 3) {
      return 1;
    } else {
      return 0;
    }
  };

  //获取读者导航
  const queryDzdhChannel = () => {
    AxiosData.get(showDzdhChannelUrl)
      .then((res) => {
        setDzdhChannel(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    queryDzdhChannel();
  }, []);

  return (
    <div className="main-area">
      <div className="search-module-area">
        <div className="search-module-container">
          {/* <Tabs defaultActiveKey="1" onChange>
            {tabArr.map((item, index) => {
              return (
                <TabPane tab={item.tabName} key={item.tabId}>
                  <Search
                    placeholder="请输入关键字..."
                    enterButton="检索"
                    size="large"
                    onSearch={(value, tabId) => console.log(value, item.tabId)}
                    style={{ width: 620 }}
                  />
                </TabPane>
              );
            })}
          </Tabs> */}

          <InputGroup compact className="input-group-container">
            <Select defaultValue="1" size="large" style={{ width: 120 }}>
              <Option value="1">知网</Option>
              <Option value="2">泉方学术搜索</Option>
              <Option value="3">本地PubMed</Option>
              <Option value="4">节目检索</Option>
            </Select>
            <Search
              placeholder="请输入关键字..."
              enterButton="检索"
              size="large"
              onSearch={(value, tabId) => console.log(value, item.tabId)}
              style={{ width: 490 }}
            />
          </InputGroup>
          <img src={Keyword} className="keyword-img" />
        </div>
      </div>
      <div className="content-module-area">
        <div className="search-items">
          {props.channelInfoArr.map((item, index) => {
            return (
              <NoticeList
                headerTitle={item.channelName}
                widthParam={queryWidthParam(index)}
                timeParam={
                  index === 0 || index === 1 || index === 2 || index === 3
                    ? false
                    : true
                }
                typeParam={queryTypeParam(index)}
                channelId={item.id}
                dzdhChannelProps={dzdhChannel}
                // widthParam={250}
              />
            );
          })}
        </div>

        <CopyImg />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    channelInfoArr: state.channelInfoArr,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchModule);
