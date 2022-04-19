// pages/phone/phone.js
// const { GET_SMS } = require('../../utils/api')
// const Request = require('../../utils/request')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        phone: ''
    },

    checkPhone() {
        if (/^1[3456789]\d{9}$/.test(this.data.phone)) {
            return true;
        }
        return false
    },

    /**
     * 发送验证码
     */
    sendSms() {
        if (!this.checkPhone()) {
            wx.showToast({
                title: '手机号格式错误',
                icon: 'none'
            })
            return
        }
        let data = {
            phone: this.data.phone
        }
        console.log(data)
        wx.navigateTo({
            url: '/pages/smsCode/smsCode',
        })
        return
        wx.showLoading({
            title: '验证码获取中',
        })
        Request.post(GET_SMS, data, false, true).then(() => {
            wx.hideLoading()
            wx.showToast({
                title: '验证码获取成功',
                mask: true,
                icon: 'success',
                duration: 8000
            })
            wx.setStorageSync('phone', this.data.phone)
            setTimeout(() => {
                wx.navigateTo({
                    url: '/pages/smsCode/smsCode',
                })
            }, 500)
        }).catch(res => {
            wx.hideLoading()
            wx.showToast({
                title: res,
                mask: true,
                icon: 'none',
                duration: 800
            })
        })
    },

    inputVal(e) {
        let phone = e.detail.value.replace(/\D/g, '')
        this.setData({
            phone
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