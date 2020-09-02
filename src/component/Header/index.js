import React, { Component, useState, useEffect } from "react";
import "./index.less";
import { Link } from "react-router-dom";
import AxiosData from "@/utils/axios";
import { showHeadChannelUrl } from "@/config/urls";

const Header = () => {
  const [headChannelInfo, setHeadChannelInfo] = useState([]);
  const [activeName, setActiveName] = useState("首页");
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

  const switchMenu = (name) => {
    setActiveName(name);
  };

  useEffect(() => {
    queryShowHeadChannelUrl();
  }, []);
  return (
    <div className="library-bottom">
      <div className="library-bottom-inner">
        <div className="left-info menuFont">
          <Link to="/">
            <span
              className={`menu-item ${
                activeName === "首页" ? "active-menu" : ""
              }`}
            >
              首页
            </span>
          </Link>

          {headChannelInfo.map((item, index) => {
            return (
              <Link
                to={`/detail/${item.id}`}
                onClick={() => switchMenu(item.channelName)}
              >
                <span
                  className={`menu-item ${
                    activeName === item.channelName ? "active-menu" : ""
                  }`}
                >
                  {item.channelName}
                </span>
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
