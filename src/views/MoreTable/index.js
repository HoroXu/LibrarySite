import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Menu, Pagination, Table, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import AxiosData from "@/utils/axios";
import moment from "moment";
import BreadcrumbCom from "@/component/BreadcrumbCom";
import { showArticleDirectoryUrl } from "@/config/urls";
import "./index.less";

const MoreTable = (props) => {
  const { channelId, channelInfoArr } = props;
  const [contentListState, setContentListState] = useState([]);
  const [pageNum, setPageNum] = useState("1");
  const [totalRows, setTotalRows] = useState(0);

  const tableTitleArr = props.channelInfoArr.slice(0, 2);

  const columns = [
    {
      title: "标题",
      dataIndex: "articleTitle",
      render: (text, record) => {
        return (
          <Link to="/" className="title-style">
            {text}
          </Link>
        );
      },
    },
    {
      title: "时间",
      dataIndex: "updateDate",
      render: (text, record) => {
        return <span>{moment(text).format("YYYY-MM-DD")}</span>;
      },
    },
  ];

  function switchTab(e) {
    console.log(e, "查看切换====");
    queryArticleDirectory(e.key, "1");
  }

  const judgeParam =
    props.location.pathname.split("/")[2] ||
    props.location.pathname.split("/")[1];

  //获取文章列表
  const queryArticleDirectory = (channelId, currentPage) => {
    AxiosData.get(showArticleDirectoryUrl, {
      channelId,
      currentPage,
    })
      .then((res) => {
        console.log(res);
        setContentListState(res.rowList);
        setTotalRows(res.totalRows);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //改变页码

  const changePage = (page) => {
    queryArticleDirectory(page);
  };

  useEffect(() => {
    console.log(channelId, "初始化进来====moretable");
    queryArticleDirectory(channelId, "1");
  }, []);

  return (
    <div className="more-table-container">
      {/* <div className="position-area">
        <span>当前位置：</span>
        <span className="first-page">图书馆首页</span>
        <span className="now-page">{judgeParam}</span>
      </div> */}

      <BreadcrumbCom judgeParam={judgeParam} />
      <div className="more-table-content">
        {/* <Menu
          mode="inline"
          style={{ width: 185, marginRight: 40 }}
          onClick={(e) => switchTab(e)}
          defaultSelectedKeys={[judgeParam]}
        >
          {channelInfoArr.map((item, index) => {
            return <Menu.Item key={item.id}>{item.channelName}</Menu.Item>;
          })}
        </Menu> */}
        <div className="table-list-area">
          <h3 className="table-list-title">{judgeParam}</h3>
          <Table
            columns={columns}
            dataSource={contentListState}
            showHeader={false}
            pagination={{
              total: totalRows,
              onChange: changePage,
              hideOnSinglePage: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    channelInfoArr: state.channelInfoArr,
    channelId: state.channelId,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoreTable);
