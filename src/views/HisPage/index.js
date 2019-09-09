import React, { Component } from "react";
import "./index.less";
import { Link } from "react-router-dom";
import { Input, Menu, Icon, Pagination } from "antd";
import AxiosData from "@/utils/axios";
const { SubMenu } = Menu;
const { Search } = Input;

export default class HisPage extends Component {
  state = {
    menuData: [],
    bookInfo: {},
    typeId: "", //
    classId: "",
    totalPage: 0
  };

  componentDidMount() {
    this.querySearch("");
    AxiosData.get("list.do")
      .then(res => {
        console.log(res, "打印出列表======");
        this.setState({
          menuData: res
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleClick = e => {
    // console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  //全部查询

  querySearch = value => {
    AxiosData.get("queryBookByKeyWord.do", {
      keyWord: value,
      typeId: "",
      classId: "",
      currentPage: 1
    })
      .then(res => {
        console.log(res, "全部查询打======");
        this.setState({
          bookInfo: res
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  queryPage = page => {
    console.log(page);
    const { typeId, classId } = this.state;
    this.queryBooks(typeId, classId, page);
  };

  //查询具体书名

  queryBooks = (typeId, classId, currentPage) => {
    console.log(typeId, classId, currentPage, "变换页码======");
    this.setState({
      typeId: typeId,
      classId: classId
    });
    AxiosData.get("queryBookByKeyWord.do", {
      keyWord: "",
      typeId: typeId || this.state.typeId,
      classId: classId || this.state.classId,
      currentPage
    })
      .then(res => {
        console.log(res, "打印具体书======");
        this.setState({
          bookInfo: res
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  //路由跳转
  routerTo(bookId) {
    this.props.history.push({
      pathname: `/Detail/${bookId}`,
      state: { data: bookId }
    });
  }
  render() {
    const { menuData, bookInfo, typeId, classId } = this.state;
    return (
      <div className="his-page">
        <div className="top-area">
          <Search
            placeholder="各类学科类图书检索"
            className="search-input"
            enterButton="搜索"
            onSearch={this.querySearch}
            size="large"
          />
          <div className="result-static">
            找到<span className="result-num">{bookInfo.totalRows || 0}</span>
            条结果。
          </div>
        </div>

        <div className="content-area">
          <div className="menu-area">
            <Menu
              theme={this.state.theme}
              onClick={this.handleClick}
              style={{ width: 256 }}
              defaultOpenKeys={["sub1"]}
              selectedKeys={[this.state.current]}
              mode="inline"
            >
              {menuData.length > 0 &&
                menuData.map((item, index) => {
                  return (
                    <SubMenu
                      key={item.typeId}
                      title={<span>{item.typeName}</span>}
                    >
                      {/* <SubMenu key="sub4" title=""> */}
                      {item.children !== null &&
                        item.children.map((item, index) => {
                          return (
                            <SubMenu
                              key={item.id}
                              title={<span>{item.typeName}</span>}
                            >
                              {item.children !== null &&
                                item.children.map((item, index) => {
                                  return item.children !== null ? (
                                    <SubMenu
                                      key={item.id}
                                      title={<span>{item.typeName}</span>}
                                    >
                                      {item.children !== null &&
                                        item.children.map((item, index) => {
                                          return (
                                            <Menu.Item
                                              key={item.id}
                                              onClick={() =>
                                                this.queryBooks(
                                                  item.typeId,
                                                  item.classId,
                                                  1
                                                )
                                              }
                                            >
                                              {item.typeName}
                                            </Menu.Item>
                                          );
                                        })}
                                    </SubMenu>
                                  ) : (
                                    <Menu.Item
                                      key={item.id}
                                      onClick={() =>
                                        this.queryBooks(
                                          item.typeId,
                                          item.classId,
                                          1
                                        )
                                      }
                                    >
                                      {item.typeName}
                                    </Menu.Item>
                                  );
                                })}
                              <Menu.Item kkey={item.id}>
                                {item.typeName}
                              </Menu.Item>
                            </SubMenu>
                          );
                        })}
                      {/* </SubMenu> */}
                    </SubMenu>
                  );
                })}
            </Menu>
         
          </div>
          <div className="right-area">
            <div className="record-item-list">
              {bookInfo.rowList && bookInfo.rowList.length === 0 ? (
                <div className="none-data">暂无数据</div>
              ) : null}
              {bookInfo.rowList &&
                bookInfo.rowList.length > 0 &&
                bookInfo.rowList.map((item, index) => {
                  return (
                    <div className="record-item">
                      <div className="left-record">
                        <div className="record-title">
                          <span className="index">{index + 1}</span>
                          <Link
                            to={`/hisDetail/${item.bookId}`}
                            className="title"
                          >
                            {/* <span onClick={() => this.routerTo(item.bookId)}> */}
                            {item.bookName}
                            {/* </span> */}
                          </Link>
                          <span className="cited" />
                        </div>
                        <div className="record-subtitle">
                          <span>{item.publisher}</span>
                          <span className="creator">{item.addDate}</span>
                          <span className="creator">{item.bn || "ISBN"}</span>
                          <span className="creator">{item.author}</span>
                        </div>
                        <div className="record-desc">{item.content}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <Pagination
              className="pagination-area"
              total={bookInfo.totalPage}
              showTotal={total => `共 ${total} 记录`}
              pageSize={10}
              defaultCurrent={1}
              hideOnSinglePage={true}
              // onChange={() => this.queryBooks(typeId, classId, page)}
              onChange={this.queryPage}
            />
          </div>
        </div>
      </div>
    );
  }
}
