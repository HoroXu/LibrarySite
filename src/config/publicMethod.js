// 小数转换百分比  保留2位

export const ConversionPercentage = val => {
  return Math.abs(val * 100).toFixed(2) + "%";
};

//判断字符串在数组中

export const judgeExistence = (stringVal, arr, param) => {
  for (let val of arr) {
    if (val[param] === stringVal) {
      return true;
    }
  }
};

// 对返回数字>0;<0 ; =0 ;--的情况处理
export const judgeNumber = (number, param1, param2, param3) => {
  if (number == "--" || parseFloat(number) == 0) {
    return param1;
  } else if (parseFloat(number) > 0) {
    return param2;
  } else {
    return param3;
  }
};

export const judgeSms = arr => {
  let judgeParam = arr.some(function isBigEnough(value, index, array) {
    return value.type == "sms";
  });

  if (judgeParam) {
    for (let value of arr) {
      if (value.type == "sms" && value.smsNum && Number(value.smsNum) > 0) {
        console.log(value.smsNum, "=====计算出数量=======");
        return value.smsNum;
      }
    }
    return "全部发送";
  } else {
    return "全部发送";
  }
};

//去除字符串前后的空格及换行符
export const strTrim = str => {
  return str.trim();
};
