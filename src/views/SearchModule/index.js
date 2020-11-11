import React, { useState, useEffect } from "react";
import { Input, Tabs, Select, message } from "antd";
import { connect } from "react-redux";
import "./index.less";
import {
  showDzdhChannelUrl,
  showAllChannelUrl,
  showSearchUrl,
  oauthUrl,
} from "@/config/urls";
import { queryChannelInfo } from "@/redux/Main/actions";
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
  const [searchUrl, setSearchUrl] = useState({});
  const [searchVal, setSearchVal] = useState("");
  const [searchOption, setSearchOption] = useState("1");
  const [oauthData, setOauthData] = useState("");
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

  //获取渠道信息
  const queryShowAllChannel = () => {
    AxiosData.get(showAllChannelUrl)
      .then((res) => {
        props.queryChannelInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
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

  //获取搜索链接地址
  const querySearchUrl = () => {
    AxiosData.get(showSearchUrl)
      .then((res) => {
        setSearchUrl(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //检索方法
  const searchFn = (value) => {
    console.log(value, "====");
    if (value) {
      if (searchOption === "1") {
        if (oauthData) {
          window.open(oauthData);
        } else {
          window.open(
            "http://search--chkd--cnki--net--http.cnki.resource.jsph.org.cn:2222/kns/Brief/singleResult.aspx?code=CHKD&kw=" +
              value
          );
        }
      } else {
        window.open(searchUrl[searchOption] + value);
      }
    } else {
      message.warning("请输入检索词");
      return;
    }

    setSearchVal(value);
  };

  const searchOptionFn = (value) => {
    setSearchOption(value);
    console.log(value);
  };

  //获取知网地址
  const queryOauth = () => {
    AxiosData.get(oauthUrl)
      .then((res) => {
        if (res.status === "200") {
          setOauthData(res.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    queryDzdhChannel();
    queryShowAllChannel();
    querySearchUrl();
    queryOauth();
  }, []);

  return (
    <div className="main-area">
      <div className="search-module-area">
        <div className="search-module-container">
          <InputGroup compact className="input-group-container">
            <Select
              defaultValue="1"
              size="large"
              style={{ width: 150 }}
              onChange={searchOptionFn}
            >
              <Option value="1">知网</Option>
              <Option value="qfxs">泉方学术搜索</Option>
              <Option value="pubmed">本地PubMed</Option>
              {/* <Option value="4">节目检索</Option> */}
            </Select>
            <Search
              placeholder="请输入关键字..."
              enterButton="检索"
              size="large"
              onSearch={searchFn}
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
  return {
    queryChannelInfo: (val) => {
      dispatch(queryChannelInfo(val));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchModule);
