// pages/smsCode/smsCode.js
// const { LOGIN } = require('../../utils/api')
// const Request = require('../../utils/request')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        focus: true,
        smsCode: '',
        time: 60
    },

    /**
     * 输入短信验证码
     * @method inputSms
     * @param {*} e 
     */
    inputSms(e) {
        // console.log(e)
        let smsCode = e.detail.value.replace(/\D/g, '');
        this.setData({
            smsCode
        })
        if (smsCode.length == 4) {
            this.login()
        }
    },

    /**
     * 点击方块输入
     */
    inputFocus() {
        this.setData({
            focus: true
        })
    },

    /**
     * 再次发送验证码
     */
    sendSmsAgain() {
        let data = {
            phone: wx.getStorageSync('phone')
        }
        return
        wx.showLoading({
            title: '验证码获取中',
        })
        Request.post(GET_SMS, data, false, true).then(() => {
            wx.hideLoading()
            wx.showToast({
                title: '验证码获取成功',
                mask: true,
                icon: 'none',
                duration: 8000
            })
            this.onLoad()
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

    /**
     * 手机号验证码登录
     */
    login() {
        let data = {
            type: 2,
            phone: wx.getStorageSync('phone'),
            smsCode: this.data.smsCode
        }
        console.log(data)
        wx.navigateTo({
            url: '/pages/index/index',
        })
        return
        wx.showLoading({
            title: '登录中',
            mask: true
        })
        Request.post(LOGIN, data, false, true).then(res => {
            wx.hideLoading()
            wx.setStorageSync('accessToken', res.accessToken)
            wx.showToast({
                title: '登录成功',
                mask: true,
                duration: 500,
                icon: 'none'
            })
            setTimeout(() => {
                wx.switchTab({
                    url: '/pages/index/index',
                })
            }, 500);
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

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this = this
        _this.setData({
            time: 60
        })
        _this.inter = setInterval(() => {
            _this.setData({
                time: _this.data.time - 1
            })
            if (_this.data.time == 0) {
                clearInterval(_this.inter)
            }
        }, 1000);
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