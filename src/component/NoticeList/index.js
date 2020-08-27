import React, { Component, useState, useEffect } from "react";
import "./index.less";
import AxiosData from "@/utils/axios";
import { showArticleDirectoryUrl } from "@/config/urls";
import { Link } from "react-router-dom";
import { queryChannelId } from "@/redux/Main/actions";
import { connect } from "react-redux";
import SearchCitation from "@/assets/images/search-citation.jpg";
import SearchNew from "@/assets/images/search-new.jpg";
import InfoBriefing from "@/assets/images/info-briefing.jpg";
import Institutional from "@/assets/images/institutional.jpg";
import MainBook from "@/assets/images/main-book.jpg";
import PrecisionChecking from "@/assets/images/precision-checking.jpg";
import ReaderRaining from "@/assets/images/reader-raining.jpg";
import SDISearch from "@/assets/images/SDI-search.jpg";

const NoticeList = (props) => {
  const {
    headerTitle,
    timeParam,
    typeParam, // 0: 资源 1:导航
    widthParam,
    heightParam,
    channelId,
  } = props;

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

  const [contentListState, setContentListState] = useState([]);

  useEffect(() => {
    queryArticleDirectory();
  }, []);

  const navigationImgArr = [
    {
      imgSrc: SearchNew,
      imgName: "查新服务",
    },
    {
      imgSrc: ReaderRaining,
      imgName: "读者培训",
    },
    {
      imgSrc: PrecisionChecking,
      imgName: "精准查重",
    },
    {
      imgSrc: SearchCitation,
      imgName: "查收查引",
    },
    {
      imgSrc: MainBook,
      imgName: "核心期刊",
    },
    {
      imgSrc: InfoBriefing,
      imgName: "信息简报",
    },
    {
      imgSrc: Institutional,
      imgName: "机构库",
    },
    {
      imgSrc: SDISearch,
      imgName: "定题检索",
    },
  ];
  return (
    <div className="notice-list-container mt15" style={{ width: widthParam }}>
      <h2 className="notice-list-header">{headerTitle}</h2>
      {typeParam === 0 ? (
        <div>
          <ul className="notice-list-content">
            {contentListState &&
              contentListState.length > 0 &&
              contentListState.map((item, index) => {
                return (
                  <li className="single-item" key={index}>
                    {index === 0 ? (
                      <Link  className='item-link'
                        to={{
                          pathname: `detail/${item.id}`,
                        }}
                      >
                        <div className="list-content">
                          <span className="radio-icon"></span>
                          {item.articleTitle}
                        </div>
                      </Link>
                    ) : (
                      <div className="list-content">
                        <span className="radio-icon"></span>
                        {item.articleTitle}
                      </div>
                    )}
                    {timeParam ? (
                      <div className="list-time">{item.updateDate}</div>
                    ) : null}
                  </li>
                );
              })}
          </ul>
          <Link
            to={{
              pathname: `moreTable/${headerTitle}`,
            }}
          >
            <div className="see-more" onClick={queryChannelId}>
              MORE &gt;&gt;
            </div>
          </Link>
        </div>
      ) : (
        <div className="navigation-container">
          {navigationImgArr.map((item, index) => {
            return (
              <Link
                to={{
                  pathname: `moreTable/${item.imgName}`,
                }}
                key={index}
              >
                <div className="navigation-item">
                  <img src={item.imgSrc} className="navigation-img" />
                  <div className="img-name">{item.imgName}</div>
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
  };
}
export default connect(
  mapToStateFromProps,
  mapDispatchToProps
)(NoticeList);
