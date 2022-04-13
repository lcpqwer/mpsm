// pages/uploadRecord/uploadRecord.js
const { endDate } = require('../../utils/util')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: '全部日期',
        num: 20,
        endDate: endDate(),
        pickerIf: '0'
    },

    showPicker(){
		this.setData({
			pickerIf: '1'
		})
	},

	hidePicker(){
		this.setData({
			pickerIf: '0'
		})
	},

	changeDate(e){
		console.log(e)
		this.setData({
			date: e.detail.date
		})
		this.hidePicker()
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