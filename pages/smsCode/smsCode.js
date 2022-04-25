// pages/smsCode/smsCode.js
const { SEND_SMS_CODE, LOGIN } = require('../../utils/api')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        phone: '',
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
            phone: this.data.phone
        }
        wx.showLoading({
            title: '验证码获取中',
        })
        SEND_SMS_CODE(data).then(res => {
            wx.showToast({
                title: '验证码已发送',
                mask: true,
                icon: 'success'
            })
            setTimeout(() => {
                wx.navigateTo({
                    url: `/pages/smsCode/smsCode?phone=${data.phone}`,
                })
            }, 500)
        }).catch(res => {
            wx.hideLoading()
            wx.showToast({
                title: res,
                mask: true,
                icon: 'none'
            })
        })
    },

    /**
     * 手机号验证码登录
     */
    login() {
        let data = {
            type: 2,
            phone: this.data.phone,
            smsCode: this.data.smsCode
        }
        wx.showLoading({
            title: '登录中',
            mask: true
        })
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
            setTimeout(function(){
                wx.reLaunch({
                    url: '/pages/index/index',
                })
            }, 1000)
        }).catch(res => {
            this.setData({smsCode: ''})
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
        this.setData({ phone: options.phone })
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