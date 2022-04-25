// pages/caseMater/caseMater.js
const { endDate } = require('../../utils/util')
Component({

	/**
	 * 页面的初始数据
	 */
	data: {
		search: '',
		accessToken: wx.getStorageSync('accessToken'),
		state: 'More',
		stateList: [{ id: '', name: '全部状态' }, { id: '01', name: '已入库' }, { id: '02', name: '已出库' }, { id: '03', name: '已退回' }],
		caseState: '',
		date: '',
		pickerIf: '0',
		stateIndex: '01',
		list: []
	},

	methods: {
		load() {
			this.setData({
				list: [], pageNumber: 1,
				accessToken: wx.getStorageSync('accessToken')
			})
			this.getList()
		},

		getList() {

		},

		login() {
			wx.navigateTo({
				url: '/pages/login/login',
			})
		},

		selectState(e) {
			let stateIndex = e.currentTarget.dataset.index
			if (stateIndex != this.data.stateIndex) {
				this.setData({
					stateIndex
				})
			}
		},

		batchCircul() {
			wx.navigateTo({
				url: '/pages/batchCircul/batchCircul',
			})
		}
	}
})