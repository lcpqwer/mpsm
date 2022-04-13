// index.js
// 获取应用实例
const app = getApp()

Page({
	data: {
		select: '0',
	},

	changeSelect(e) {
		let select = e.currentTarget.dataset.index;
		if (select != this.data.select){
			if (select == '0'){
				wx.setNavigationBarTitle({title: '案件'})
			}else {
				wx.setNavigationBarTitle({title: '个人中心'})
			}
			this.setData({ select })
		}
		
	},

	takePhoto(){
		wx.navigateTo({
		  url: '/pages/takePhoto/takePhoto',
		})
	},

	onLoad() {
		if (wx.getUserProfile) {
			this.setData({
				canIUseGetUserProfile: true
			})
		}
	}
})
