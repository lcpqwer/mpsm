// pages/caseMater/caseMater.js
const { endDate } = require('../../utils/util')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		search: '',
		accessToken: getApp().globalData.accessToken,
		state: 'More',
		endDate: endDate(),
		stateList: [{ id: '', name: '全部状态' }, { id: '01', name: '已入库' }, { id: '02', name: '已出库' }, { id: '03', name: '已退回' }],
		caseState: '',
		date: '',
		pickerIf: '0',
		stateIndex: '01'
	},

	login() {
		wx.navigateTo({
			url: '/pages/login/login',
		})
	},

	toSearch(e) {
		wx.navigateTo({
		  url: '/pages/searchCase/searchCase',
		})
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

	changeState(e) {
		console.log(e)
		let index = e.detail.value;
		let caseState = this.data.stateList[index].id
		if (caseState !== this.data.caseState) {
			this.setData({ caseState })
		}
	},

	selectState(e){
		let stateIndex = e.currentTarget.dataset.index
		if (stateIndex != this.data.stateIndex){
			this.setData({
				stateIndex
			})
		}
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