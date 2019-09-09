
export const formatMoney = (s, n) => {
    if (s == void 0) return 0;
    if (n != 0) {
        n = n > 0 && n <= 20 ? n : 2;
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        let l = s.split(".")[0].split("").reverse(),
            r = s.split(".")[1];
        let t = "";
        for (let i = 0; i < l.length; i++) {
            if (l[i + 1] != '-') {
                t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
            } else {
                t += l[i];
            }
        }
        return t.split("").reverse().join("") + "." + r;
    } else if (n == 0) {
        if ((s + "").indexOf(".") < 0) {
            return addKannma(s);
        } else {
            return addKannma((s + "").substr(0, (s + "")
                .indexOf(".")));
        }

    }
}

/*千分位处理*/
export const addKannma = (number) => {
    var num = number + "";
    num = num.replace(new RegExp(",", "g"), "");
    var symble = "";

    if (num == 0) {
        return num;
    }

    if (/^([-+]).*$/.test(num)) {
        symble = num.replace(/^([-+]).*$/, "$1");
        num = num.replace(/^([-+])(.*)$/, "$2");
    }

    if (/^[0-9]+(\.[0-9]+)?$/.test(num)) {
        var num = num.replace(new RegExp("^[0]+", "g"), "");
        if (/^\./.test(num)) {
            num = "0" + num;
        }

        var decimal = num.replace(/^[0-9]+(\.[0-9]+)?$/, "$1");
        var integer = num.replace(/^([0-9]+)(\.[0-9]+)?$/, "$1");

        var re = /(\d+)(\d{3})/;

        while (re.test(integer)) {
            integer = integer.replace(re, "$1,$2");
        }
        return symble + integer + decimal;

    } else {
        return number;
    }
}

export const formatMoneyOfTenThousand = ($) => {
    let money = $
    if (typeof money === 'string' && money.indexOf(',') !== -1) {
        $ = Number($.replace(/\,/g, ''))
        if($ >= Math.pow(10, 10)){ //百亿
        	money = `${formatMoney(($ / Math.pow(10,8)), 5)}亿`
        }
        else{
        	money = `${formatMoney(($ / Math.pow(10,4)), 2)}万`
        }
    }
    return money
}