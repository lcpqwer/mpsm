// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    getPhoneNumber(e) {
        if (e.detail.errMsg == 'getPhoneNumber:ok') {
            console.log(e)
            let sessionKey = wx.getStorageSync('session_key')
            let encryptedData = e.detail.encryptedData;
            let iv = e.detail.iv;
            let appId = app.appId;
            const RdWXBizDataCrypt = require('../../utils/RdWXBizDataCrypt.js');
            const pc = new RdWXBizDataCrypt(appId, sessionKey);
            const data = pc.decryptData(encryptedData, iv);
            console.log(data.phoneNumber); //当前手机号码
            // console.log(data)
            wx.setStorageSync('phone', data.phoneNumber)
            this.login()
        }
    },

    smsLogin(){
        wx.navigateTo({
          url: '/pages/phone/phone',
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