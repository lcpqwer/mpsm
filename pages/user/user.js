// pages/user/user.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: wx.getStorageSync('USERINFO'),
        accessToken: getApp().globalData.accessToken
    },

    // mark: 获取用户信息
    getUserInfo(e) {
        console.log(e)
        if (e.detail.errMsg == "getUserInfo:ok") {
            this.setData({
                userInfo: e.detail.userInfo
            })
            wx.setStorageSync('USERINFO', e.detail.userInfo)
        }
    },

    getUserProfile(){
        wx.getUserProfile({
            desc: '用于完善用户资料',
            success: res => {
                console.log(res)
                this.setData({
                    userInfo: res.userInfo
                })
                wx.setStorageSync('USERINFO', res.userInfo)
            }
        })
    },

    // mark: 上传记录
    next(e) {
        if (this.data.accessToken){
            let url = e.currentTarget.dataset.url
            wx.navigateTo({ url })
        }else {
            wx.showToast({
              title: '请先登录',
            })
            setTimeout(() => {
                wx.navigateTo({
                  url: '/pages/login/login'
                })
            }, 500);
        }
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            userInfo: wx.getStorageSync('USERINFO')
        })
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