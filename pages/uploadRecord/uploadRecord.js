// pages/uploadRecord/uploadRecord.js
const { endDate } = require('../../utils/util')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		date: '',
		num: 20,
		endDate: endDate(),
		pickerIf: false
	},

	/**
	 * 显示选择日期picker
	 */
	showPicker() {
		this.setData({ pickerIf: true })
	},

	/**
	 * 隐藏选择日期picker
	 */
	hidePicker() {
		this.setData({pickerIf: false})
	},

	/**
	 * 改变日期
	 * @param {Object} e 年月日
	 */
	changeDate(e) {
		console.log(e)
		let {year, month, day} = e.detail
		this.setData({
			date: new Date(`${year}-${month}-${day}`).format('yyyy年MM月dd日') 
		})
		this.hidePicker()
	},

	/**
	 * 清空日期
	 */
	clearDate() {
		this.setData({date: ''})
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