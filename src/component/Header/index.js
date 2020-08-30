import React, { Component, useState, useEffect } from "react";
import "./index.less";
import { Link } from "react-router-dom";
import AxiosData from "@/utils/axios";
import { showHeadChannelUrl } from "@/config/urls";

const Header = () => {
  const [headChannelInfo, setHeadChannelInfo] = useState([]);
  const queryShowHeadChannelUrl = () => {
    AxiosData.get(showHeadChannelUrl)
      .then((res) => {
        console.log(res);
        setHeadChannelInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    queryShowHeadChannelUrl();
  }, []);
  return (
    <div className="library-bottom">
      <div className="library-bottom-inner">
        <div className="left-info menuFont">
          <span className="menu-item ">首页</span>
          {headChannelInfo.map((item, index) => {
            return (
              <Link
                to={{
                  pathname: `detail/${item.id}`,
                }}
              >
                <span className="menu-item">{item.channelName}</span>
              </Link>
            );
          })}
        </div>
        <div className="right-info menu-item">登录</div>
      </div>
    </div>
  );
};

export default Header;
