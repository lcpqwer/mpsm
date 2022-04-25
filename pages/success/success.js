// pages/success/success.js
require('../../utils/util')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        oper: null,
        dateTime: new Date().format('yyyy年MM月dd日 hh:mm')
    },

    back() {
        // let pages = getCurrentPages()
        let { oper } = this.data
        if (oper == '00' || oper == '10') {
            // 首次入库成功，返回首页
            wx.reLaunch({
                url: '/pages/index/index',
            })
        } else {
            // 批量操作成功，返回批量流转页
            wx.setStorageSync('batch', '1')
            wx.reLaunch({
                url: '/pages/batchCircul/batchCircul',
            })
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        this.setData({ oper: wx.getStorageSync('oper') })
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