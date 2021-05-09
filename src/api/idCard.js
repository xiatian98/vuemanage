export function isIdentityId(identityId) {
    var patrn = /(^\d{15}$)|(^\d{17}(\d|X|x)$)/;//长度或格式校验
    //地区校验
    var aCity = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外"
    };
    // 出生日期验证
    var sBirthday = (
            identityId.substr(6, 4) +
            "-" +
            Number(identityId.substr(10, 2)) +
            "-" +
            Number(identityId.substr(12, 2))
        ).replace(/-/g, "/"),
        d = new Date(sBirthday)
    // 身份证号码校验 最后4位  包括最后一位的数字/字母X
    var sum = 0,
        weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
        codes = "10X98765432";
    for (var i = 0; i < identityId.length - 1; i++) {
        sum += identityId[i] * weights[i];
    }
    var last = codes[sum % 11]; //计算出来的最后一位身份证号码

    var errorMsg = '';
    if (identityId === '') {
        errorMsg = "身份证号不能为空"
    } else if (!patrn.exec(identityId)) {
        errorMsg = "身份证长度或格式错误"
    } else if (!aCity[parseInt(identityId.substr(0, 2))]) {
        errorMsg = "身份证地区错误"
    } else if (sBirthday != d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate()) { errorMsg = "身份证上的出生日期非法" } else if (identityId[identityId.length - 1] != last) {
        errorMsg = "身份证号错误"
    }
    return errorMsg;
}



//

// let idCardValidity = (rule, code, callback) => {
//     var city = {
//         11: "北京",
//         12: "天津",
//         13: "河北",
//         14: "山西",
//         15: "内蒙古",
//         21: "辽宁",
//         22: "吉林",
//         23: "黑龙江 ",
//         31: "上海",
//         32: "江苏",
//         33: "浙江",
//         34: "安徽",
//         35: "福建",
//         36: "江西",
//         37: "山东",
//         41: "河南",
//         42: "湖北 ",
//         43: "湖南",
//         44: "广东",
//         45: "广西",
//         46: "海南",
//         50: "重庆",
//         51: "四川",
//         52: "贵州",
//         53: "云南",
//         54: "西藏 ",
//         61: "陕西",
//         62: "甘肃",
//         63: "青海",
//         64: "宁夏",
//         65: "新疆",
//         71: "台湾",
//         81: "香港",
//         82: "澳门",
//         91: "国外 "
//     };
//     var tip = ""
//     var pass = true
//
//     if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
//         tip = "身份证号格式错误"
//         pass = false;
//     } else if (!city[code.substr(0, 2)]) {
//         tip = "地址编码错误"
//         pass = false
//     } else {
//         // 18位身份证需要验证最后一位校验位
//         if (code.length === 18) {
//             code = code.split('')
//             // ∑(ai×Wi)(mod 11)
//             // 加权因子
//             var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
//             // 校验位
//             var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
//             var sum = 0
//             var ai = 0
//             var wi = 0
//             for (var i = 0; i < 17; i++) {
//                 ai = code[i]
//                 wi = factor[i]
//                 sum += ai * wi
//             }
//             var last = parity[sum % 11];
//             if (parity[sum % 11] != code[17]) {
//                 tip = "校验位错误"
//                 pass = false
//             }
//         }
//     }
//     if (!pass) {
//         callback(new Error(tip))
//     } else {
//         callback()
//     }
//     // if (!pass) alert(tip)
//     // return pass
// }
// return {
//
//     personInfo: {
//         idCard: "",
//     },
//     rules: {
//         idCard: [{required: true, message: '请输入证件号', trigger: 'blur'},
//             {
//                 pattern: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
//                 message: '请输入正确的证件号',
//
//                 trigger: 'blur'
//             },
//             {validator: idCardValidity, trigger: 'blur'}],
//     }
// }
