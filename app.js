// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    const res = wx.getSystemInfoSync()
    // console.log(res)
    if (res.platform == "devtools") {
      this.globalData.sys = 'ios'
    } else if (res.platform == "ios") {
      this.globalData.sys = 'ios'
    } else if (res.platform == "android") {
      this.globalData.sys = 'android'
    }
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    sys: 'ios'
  }
})
