import React, { Component, useState, useEffect } from "react";
import "./index.less";
import AxiosData from "@/utils/axios";
import { showArticleDirectoryUrl, showDzdhChannelUrl } from "@/config/urls";
import { Link } from "react-router-dom";
import { queryChannelId, queryChannelInfo } from "@/redux/Main/actions";
import { connect } from "react-redux";
import moment from "moment";

const NoticeList = (props) => {
  const {
    headerTitle,
    timeParam,
    typeParam, // 0: 资源 1:导航
    widthParam,
    heightParam,
    channelId,
    dzdhChannelProps,
  } = props;

  const [contentListState, setContentListState] = useState([]);
  const [dzdhChannel, setDzdhChannel] = useState([]);

  //获取文章列表
  const queryArticleDirectory = () => {
    AxiosData.get(showArticleDirectoryUrl, {
      channelId,
      currentPage: 1,
    })
      .then((res) => {
        console.log(res);
        setContentListState(res.rowList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //记录选中的渠道id
  const queryChannelId = () => {
    props.queryChannelId(channelId);
  };

  const queryDzdhChannelId = (dzdhChannelId) => {
    props.queryChannelId(dzdhChannelId);
  };

  //读者导航
  const queryNavDzahChanne = () => {
    props.queryChannelInfo(dzdhChannel);
    queryChannelId();
  };

  useEffect(() => {
    setDzdhChannel(dzdhChannelProps);
  }, [dzdhChannelProps]);

  useEffect(() => {
    queryArticleDirectory();
  }, []);

  return (
    <div className="notice-list-container mt15" style={{ width: widthParam }}>
      <h2 className="notice-list-header">{headerTitle}</h2>
      {typeParam === 0 ? (
        <div>
          <ul className="notice-list-content">
            {contentListState &&
              contentListState.length > 0 &&
              contentListState.map((item, index) => {
                return index <= 6 ? (
                  <li className="single-item" key={index}>
                    {item.articleOutChain ? (
                      <a
                        href={item.articleOutChain}
                        className="out-chain"
                        target="_blank"
                      >
                        <div className="list-content">
                          <span className="radio-icon"></span>
                          {item.articleTitle}
                        </div>
                      </a>
                    ) : (
                      <Link className="item-link" to={`detail/${item.id}`}>
                        <div className="list-content">
                          <span className="radio-icon"></span>
                          {item.articleTitle}
                        </div>
                      </Link>
                    )}
                    {timeParam ? (
                      <div className="list-time">
                        {moment(item.updateDate).format("YYYY-MM-DD")}
                      </div>
                    ) : null}
                  </li>
                ) : null;
              })}
          </ul>
          <Link to={`moreTable/${headerTitle}`}>
            <div className="see-more" onClick={queryChannelId}>
              MORE &gt;&gt;
            </div>
          </Link>
        </div>
      ) : (
        <div className="navigation-container">
          {dzdhChannel.map((item, index) => {
            return (
              <Link
                to={`moreTable/${item.channelName}`}
                key={index}
                onClick={() => queryDzdhChannelId(item.id)}
              >
                <div className="navigation-item">
                  <img src={item.iconSrc} className="navigation-img" />
                  <div className="img-name">{item.channelName}</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

function mapToStateFromProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    queryChannelId: (val) => {
      dispatch(queryChannelId(val));
    },
    queryChannelInfo: (val) => {
      dispatch(queryChannelInfo(val));
    },
  };
}
export default connect(mapToStateFromProps, mapDispatchToProps)(NoticeList);
