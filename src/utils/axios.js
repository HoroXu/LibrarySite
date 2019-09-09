import axios from "axios";
import nprogress from "nprogress";
import qs from "qs";
import { message } from "antd";
var CancelToken = axios.CancelToken;
var source = CancelToken.source();

axios.source = source;


axios.interceptors.request.use(function(config) {
  nprogress.start();
  // if (process.env.NODE_ENV === "development") config.timeout = 5000; //dev
  // config.url = Conf[process.env.NODE_ENV].sospdmHost + config.url;
  return config;
}, handleError);

axios.interceptors.response.use(function responseInterceptor(response) {
  // Do something with response data

  nprogress.done();
  if (response && response.status === 200 && response.data) {
    return handleRes(response.data);
  }
  if (response && response.status === 999 && response.data) {
    return handleRes(response.data);
  }
  message.error(response.data && response.data.responseMessage);
  return Promise.reject(response.data && response.data.responseMessage);
}, handleError);

function handleError(error) {
  nprogress.done();
  // message.error("网络错误，请检查网络或联系管理员");
  return Promise.reject(error);
}

function handleRes(data) {
  return new Promise((resolve, reject) => {
    if (data && data.code) {
      switch (data.code) {
        case 200:
          return resolve(data);
        case -2:
          message.error(data && (data.message || data.msg));
          return reject(data && (data.message || data.msg));
        case 500:
          message.error(data && (data.message || data.msg));
          return reject(data && (data.message || data.msg));
        case 501:
          message.error(data && (data.message || data.msg));
          return reject(data);
        case 505:
          message.error(data && (data.message || data.msg));
          return reject(data);
        case 600:
          message.error(data && (data.message || data.msg));
          return reject(data);
        case 601:
          message.error(data && (data.message || data.msg));
          return reject(data);
        case 203:
          message.error(data && (data.message || data.msg));
          return (window.location.hash =
            "#/error/" + (data.message || data.msg));
        case 999:
          message.error(data && (data.message || data.msg));
          return resolve(data);
        case -3:
          message.error(data && (data.message || data.msg));
          return resolve(data);
        case 530:
          return reject(data);
        case 2001:
          return resolve(data);
        case 1020:
          return resolve(data);
        case 998:
          message.error(data && (data.message || data.msg));
          return reject(data);
        default:
          // console.log(data.code, "打印什么接口code========");
          return handleError(data.code);
      }
    } else {
      return resolve(data);
    }
  });
}

export default {
  post(url, data) {
    return axios({
      method: "POST",
      url: url,
      data: data
    })
      .then(res => {
        return handleRes(res);
      })
      .catch(err => {
        const { code = 0 } = err;
        if (
          code === 998 ||
          code === 501 ||
          code === 505 ||
          code === 600 ||
          code === 601
        ) {
          return Promise.reject(err);
        }
      });
  },
  get(url, params) {
    return axios({
      method: "GET",
      url,
      params
    })
      .then(response => {
        return handleRes(response);
      })
      .catch(err => {
        const { code = 0 } = err;
        if (code === 530) {
          return Promise.reject(err);
        }
      });
  }
};
