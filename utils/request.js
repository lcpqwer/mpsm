const { Root } = require('./config')
const { getSign } = require('./sign')
const header = {
    'Content-Type': 'application/x-www-form-urlencoded'
}
const timeout = 30000

export const WxRequest = (api, method, data, tokenFlag = true, signFlag = true) => {
    let url = Root + api;
    if (tokenFlag) {
        data.access_token = getApp().globalData.accessToken
    }
    if (signFlag){
		data = getSign(data)
    }
    // console.log(url)
    return new Promise((resolve, reject) => {
        wx.request({
            url,
            data,
            dataType: 'json',
            header: header,
            method,
            timeout,
            success: (result) => {
                if (result.statusCode == 200) {
                    // console.log(result)
                    if (result.data.code == '0000'){
                        // console.log(result.data.data)
                        resolve(result.data.data)
                    }else if (result.data.code == 2001) {
                        reject('2001')
                    }else {
                        reject(result.data.msg)
                    }
                } else {
                    reject('connection fail!')
                }
            },
            fail: (res) => {
                console.log(res)
                reject('connection fail!')
            }
        })
    })
}

module.exports = {
    WxRequest
}