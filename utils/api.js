const {WxRequest} = require('./request')

// 获取openid
export const GET_OPTION = (data) => {
    return WxRequest('wx/auth', 'post', data, false)
}

// 发送验证码
export const SEND_SMS_CODE = (data) => {
    return WxRequest('pub/sendSmscode', 'post', data, false)
}

// 登陆
export const LOGIN = (data) => {
    return WxRequest('pub/login', 'post', data, false)
}

// 案件匹配
export const MATCH_LIST = data => {
    return WxRequest('case/match/list', 'post', data)
}

// 案件确认
export const MATCH_CHECK = data => {
    return WxRequest('case/match/check', 'post', data)
}