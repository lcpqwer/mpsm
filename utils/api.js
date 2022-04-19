const {WxRequest} = require('./request')

// 获取openid
export const GET_OPTION = (data) => {
    return WxRequest('wx/auth', 'post', data)
}

// 发送验证码
export const SEND_SMS_CODE = (data) => {
    return WxRequest('pub/sendSmscode', 'post', data)
}

// 登陆
export const LOGIN = (data) => {
    return WxRequest('pub/login', 'post', data)
}