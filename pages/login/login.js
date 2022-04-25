// pages/login/login.js
const { LOGIN } = require('../../utils/api')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        openid: wx.getStorageSync('openid')
    },

    getPhoneNumber(e) {
        if (e.detail.errMsg == 'getPhoneNumber:ok') {
            console.log(e)
            let sessionKey = wx.getStorageSync('session_key')
            let encryptedData = e.detail.encryptedData;
            let iv = e.detail.iv;
            // let appId = app.appId;
            let appId = 'wx0d2c3b1ff2322946'
            const RdWXBizDataCrypt = require('../../utils/RdWXBizDataCrypt.js');
            const pc = new RdWXBizDataCrypt(appId, sessionKey);
            const data = pc.decryptData(encryptedData, iv);
            console.log(data.phoneNumber); //当前手机号码
            // console.log(data)
            this.setData({ phone: data.phoneNumber })
            this.login()
        }
    },

    smsLogin() {
        wx.navigateTo({
            url: '/pages/phone/phone',
        })
    },

    login() {
        let { openid, phone } = this.data
        let data = {
            type: 1,
            openid, phone
        }
        LOGIN(data).then(res => {
            console.log(res)
            wx.setStorageSync('accessToken', res.accessToken)
            getApp().globalData.accessToken = res.accessToken
            wx.showToast({
                title: '登录成功',
                mask: true,
                duration: 500,
                icon: 'none'
            })
            setTimeout(function () {
                wx.reLaunch({
                    url: '/pages/index/index',
                })
            }, 1000)
        }).catch(res => {
            wx.showToast({
                title: res,
                mask: true,
                icon: 'none',
                duration: 800
            })
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})