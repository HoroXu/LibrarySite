export const getQueryString = name => {
  var res = window.location.hash;
  if (res.indexOf("?") != -1) {
    var str = res.split("?")[1].split("&");
    if (str) {
      for (var i = 0; i < str.length; i++) {
        if (str[i].split("=")[0] == name) {
          console.log(str[i].split("=")[1], "=====================");
          return str[i].split("=")[1];
        }
      }
    }
  }
};

// 去除字符串前的负号
export const trimMinusString = params => {
  if (typeof params === "undefined") {
    return "";
  }
  return params.toString().replace("-", "");
};

// 判断路由中是否pre，等
export const envirJudge = params => {
  if (location.host.indexOf(params) > -1) {
    return true;
  } else {
    return false;
  }
};

// 收缩所有的扩展列表
export const shrink = () => {
  document.querySelectorAll(".view-past.expand").forEach(expand => {
    expand.classList.remove("expand");
    expand.parentElement.parentElement.parentElement.parentElement.querySelector(".combine-expand-icon").classList.remove("expand");
    expand.querySelector("span:first-child").innerText = "展开";
    expand.querySelector(".iconfont").classList.add("icon-down");
    expand.querySelector(".iconfont").classList.remove("icon-up");
    expand.parentElement.parentElement.parentElement.parentElement.querySelector(".combine-expand-icon").classList.add("icon-down");
    expand.parentElement.parentElement.parentElement.parentElement.querySelector(".combine-expand-icon").classList.remove("icon-up");
    expand.parentElement.parentElement.parentElement.parentElement.querySelector(".ant-table-row-expand-icon").click();
  });
};

/**
 * @description: 数组对象去重
 * @param arr: 待去重数组
 * @param duplicationKey: 数组的对象以此key去重
 * @return: 去重后的数组
 */
export const removeDuplication = (arr, duplicationKey) => {
  let duplicationMap = {};
  return arr.reduce(function(accumulator, currentValue) {
    if (!duplicationMap[currentValue[duplicationKey]]) {
      accumulator.push(currentValue);
      duplicationMap[currentValue[duplicationKey]] = true;
    }
    return accumulator;
  }, []);
};

/**
 * @description: 将一个数组根据另一个数组的顺序进行排序
 * @param arr: 待排序数组
 * @param arrKey: 待排序数组和sortKey的对应key
 * @param sortKeyArr: 需要按照此数组中的某个key进行排序
 * @param sortKey: 排序的key
 * @return: 排序后的数组
 */
export const sortByOther = (arr, arrKey, sortKeyArr, sortKey) => {
  return arr.sort(function(a, b) {
    return sortKeyArr.map(s => s[sortKey]).indexOf(a[arrKey]) < sortKeyArr.map(s => s[sortKey]).indexOf(b[arrKey])
      ? -1
      : 1;
  });
};
