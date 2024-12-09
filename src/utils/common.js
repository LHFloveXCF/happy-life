
import API_STATUS from '@/utils/constant_api_status';
import Iconv from 'iconv-lite';
import fetch from 'isomorphic-fetch';
import jsonSafeStringify from 'json-stringify-safe';
import jsonSafeParse from 'safe-json-parse/tuple';
import { url_upload } from './constant_api';
import axios from 'axios';

//跳过解码警告
Iconv.skipDecodeWarning = true;

// 处理图片上传
export async function uploadImage(file, func) {
    const formData = new FormData();
    formData.append('file', file);
    return axios.post(url_upload, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response => {
            func(response.data.url);
        })
        .catch(error => {
        });
}

/**
 * HTTP POST请求
 * */
export async function fetchPost(url, body = {}, func, extraTools, dispatch, userNickName = '') {
    let fetchParam = {
        mode: "cors",
        timeout: 20 * 1000,
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json; charset=utf-8",
        },
        method: 'POST',
        body: jsonStringify(body)
    };

    return fetch(url, fetchParam).then(
        response => checkFetchStatus(response)
    ).then(
        json => handlerFetchResponse(url, json, extraTools, dispatch, func)
    ).catch(error => handlerFetchError(url, error, extraTools, dispatch))

}

/**
 * HTTP GET请求
 * */
export async function fetchGet(url, body = {}, func, extraTools, dispatch) {
    let fetchParam = {
        mode: "cors",
        timeout: 20 * 1000,
        headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        method: 'GET'
    };

    let desUrl = combineQueryUrl(url, body);
    return fetch(desUrl, fetchParam).then(
        response => checkFetchStatus(response)
    ).then(
        json => handlerFetchResponse(url, json, extraTools, dispatch, func)
    ).catch(
        error => handlerFetchError(url, error, extraTools, dispatch)
    )
}

/**
 * 请求响应状态校验
 * @param {Object} response
 * */
function checkFetchStatus(response) {
    if (response.status !== void 0)
        return response.json();
    else
        return { "ERROR": "HTTP 请求异常" };
}

/**
 * 请求响应处理
 * */
function handlerFetchResponse(url, json, extraTools, dispatch, func) {
    if (json.status !== void 0) {
        if (json.status === API_STATUS.SUCCESS) {
            func(json);	//成功的回调函数
            if (extraTools.actionSuccess !== void 0 && extraTools.route !== void 0) {
                //操作成功，页面跳转
                dispatch(extraTools.actionSuccess(json.data, extraTools.route));
            }
            else if (extraTools.actionSuccess !== void 0) {
                //页面通知
                dispatch(extraTools.actionSuccess(
                    json.message || '操作成功'
                ));
            }
            else {
            }
        } else {
            dispatch(extraTools.actionFailure(
                json.message || '操作失败'
            ));
        }
    } else {
        dispatch(extraTools.actionFailure(
            jsonStringify(json)
        ));
    }
}

/**
 * 请求错误处理
 * */
function handlerFetchError(url, error, extraTools, dispatch) {
    if (extraTools.actionFailure) {
        dispatch(extraTools.actionFailure(error.message + '. 多半是GM服务端没开，抓紧的……'));
    };
}

/**
 * 合并GET请求字符串
 */
function combineQueryUrl(url, params, encode = true) {
    let parts = [];
    for (let i in params) {
        if (params.hasOwnProperty(i)) {
            encode ?
                parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(params[i]))
                :
                parts.push(i + "=" + params[i]);
        }
    }
    if (parts.length === 0) return url;
    return url + "?" + parts.join("&");
}

/**
 * 拆分GET请求字符串参数
 */
function combineQueryParams(paramsStr) {
    let param = {};
    paramsStr.split('&').map(item => {
        param[item.split('=')[0]] = item.split('=')[1] || ""
        return null
    })
    return param;
}

/**
 * 反序列化为JSON字符串
 * */
export function jsonStringify(obj) {
    let ret;
    try {
        ret = JSON.stringify(obj);
    } catch (e) {
        ret = jsonSafeStringify(obj);
    }
    return ret;
}

/**
 * 序列化为JSON对象
 * */
export function jsonParse(str) {
    let ret;
    try {
        ret = JSON.parse(str);
    } catch (e) {
        ret = jsonSafeParse(str)[1];
    }
    return ret;
}

/**
 * 获取现在的时间并格式化
 *      a  标准时间格式 2015-10-10 10:10:10 (默认)
 *      b  14位时间格式 20151010101010
 *      c  13 位数时间戳
 *      d  10 位数时间戳
 *      e  2015.10.10
 * 		f  2015-10-10 10:10
 * 		g  8位时间格式 20151010
 *      u  ISO 时间格式 2018-04-08T02:43:12.511Z
 *      默认格式为标准格式
 * */
export function getFormatDateNew(type, date = null) {
    if (/^1\d{9}/.test(date) && date.toString().length === 10) date = date * 1000;
    if (/^1\d{9}/.test(date) || /^1\d{12}/.test(date)) {
        date = typeof date === 'number' ? date : parseInt(date, 10);
    }
    let D = date !== null ? new Date(date) : new Date();
    const _ = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
        y = D.getFullYear(),
        m = D.getMonth() + 1,
        d = D.getDate(),
        h = D.getHours(),
        i = D.getMinutes(),
        s = D.getSeconds();
    switch (type) {
        case 'a':
            return [y, _[m] || m, _[d] || d].join('-') + ' ' + [_[h] || h, _[i] || i, _[s] || s].join(':');
        case 'b':
            return [y, _[m] || m, _[d] || d, _[h] || h, _[i] || i, _[s] || s].join('');
        case 'c':
            return Number(D);
        case 'd':
            return Math.floor(Number(D) / 1000);
        case 'e':
            return [y, _[m] || m, _[d] || d].join('.');
        case 'f':
            return [y, _[m] || m, _[d] || d].join('-') + ' ' + [_[h] || h, _[i] || i].join(':');
        case 'g':
            return [y, _[m] || m, _[d] || d].join('');
        case 'u':
            return D.toISOString();
        default:
            return [y, _[m] || m, _[d] || d].join('-') + ' ' + [_[h] || h, _[i] || i, _[s] || s].join(':');
    }
}


/**
 * 该部分为JS数据类型的校验
 */
export function isType(type, obj) {
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
}

export function isBoolean(obj) {
    return isType('Boolean', obj);
}

export function isNumber(obj) {
    return isType('Number', obj);
}

export function isString(obj) {
    return isType('String', obj);
}

export function isFunction(obj) {
    return isType('Function', obj);
}

export function isArray(obj) {
    return isType('Array', obj);
}

export function isDate(obj) {
    return isType('Date', obj);
}

export function isRegExp(obj) {
    return isType('RegExp', obj);
}

export function isObject(obj) {
    return isType('Object', obj);
}

export function isError(obj) {
    return isType('Error', obj);
}

/**
 * Object的深度拷贝
 * */
export function Clone(Obj) {
    if (Obj === null || 'object' !== typeof Obj) return Obj;
    if (Obj instanceof Date) {
        let copy = new Date();
        copy.setTime(Obj.getTime());
        return copy;
    }
    if (Obj instanceof Array) {
        let copy = [];
        for (let i = 0, len = Obj.length; i < len; i++) {
            copy[i] = Clone(Obj[i]);
        }
        return copy;
    }
    if (Obj instanceof Object) {
        let copy = {};
        for (let attr in Obj) {
            if (Obj.hasOwnProperty(attr)) copy[attr] = Clone(Obj[attr]);
        }
        return copy;
    }
    throw new Error("Clone Error, Obj's type is not support!");
}

/**
 * DataUrl 转 Blob
 * */
export function DataUrlToBlob(dataUrl) {
    let arr = dataUrl.split(','),
        mime = arr[0].match(/:(.*);/)[1],
        bStr = atob(arr[1]),
        n = bStr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bStr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}

/**
 * 将 colorcode 转换为rgb()字符串。
 * // hexToRgb(‘#27ae60‘) -> ‘rgb(39, 174, 96)‘
 * // hexToRgb(‘#acd‘) -> ‘rgb(170, 204, 221)‘
 * */
export const hexToRgb = hex => {
    const extendHex = shortHex =>
        '#' + shortHex.slice(shortHex.startsWith('#') ? 1 : 0).split('').map(x => x + x).join('');
    const extendedHex = hex.slice(hex.startsWith('#') ? 1 : 0).length === 3 ? extendHex(hex) : hex;
    return `rgb(${parseInt(extendedHex.slice(1), 16) >> 16}, ${(parseInt(extendedHex.slice(1), 16) & 0x00ff00) >> 8}, ${parseInt(extendedHex.slice(1), 16) & 0x0000ff})`;
};

/**
 * 将 RGB 组件的值转换为 colorcode
 * // RGBToHex(255, 165, 1) -> ‘ffa501‘
 * */
export const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

/**
 * 字符串转HTML避免XSS攻击
 * */
export function strToHtmlEscape(str) {
    return str.replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
}

/**
 * 处理字符类型的参数
 * */
export function DealStringParamBeAString(str) {
    if (str === void 0 || str === null) {
        return '';
    }
    return str;
}

/**
 * 处理数组字符串为数组
 * */
export function DealArrayStrParamBeAArray(arrStr, delimiter = ',') {
    if (arrStr === void 0 || arrStr === null) {
        return [];
    } else if (arrStr instanceof Array) {
        return arrStr;
    } else if (typeof arrStr === 'string' || typeof arrStr === 'number') {
        let arr = jsonParse(arrStr);
        if (arr === void 0 || arr === null) {
            return [];
        } else if (arr instanceof Array) {
            return arr;
        } else if (typeof arr === 'string' || typeof arr === 'number') {
            return arr.toString().split(delimiter);
        } else {
            let arrs = [];
            for (let i in arrStr) {
                arrs.push(arrStr[i]);
            }
            return arrs;
        }
    } else {
        let arrs = [];
        for (let i in arrStr) {
            arrs.push(arrStr[i]);
        }
        return arrs;
    }
}

/**
 * 验证对象的有效性
 */
export function validateObject(obj) {
    return (obj !== void 0 && obj !== null && obj !== 'null' && obj !== 'undefined');
}