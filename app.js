// app.js
const { GET_OPTION } = require('./utils/api')
App({
	onLaunch() {
		if (wx.canIUse('getUpdateManager')) {
			const updateManager = wx.getUpdateManager()
			updateManager.onCheckForUpdate(function (res) {
				// 请求完新版本信息的回调
				if (res.hasUpdate) {
					updateManager.onUpdateReady(function () {
						wx.showModal({
							title: '更新提示',
							content: '新版本已经准备好，是否重启应用？',
							success: function (res) {
								if (res.confirm) {
									// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
									updateManager.applyUpdate()
								}
							}
						})
					})
					updateManager.onUpdateFailed(function () {
						// 新的版本下载失败
						wx.showModal({
							title: '已经有新版本了哟~',
							content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
						})
					})
				}
			})
		} else {
			// 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
			wx.showModal({
				title: '提示',
				content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
			})
		}

		if (wx.getStorageSync('openid')) {
			
		}else {
			// 登录
			wx.login({
				success: res => {
					// 发送 res.code 到后台换取 openId, sessionKey, unionId
					GET_OPTION({ js_code: res.code }).then(res => {
						console.log(res)
						wx.setStorageSync('openid', res.openid)
						wx.setStorageSync('session_key', res.session_key)
					}).catch(res => {
						console.log(res)
					})
				}
			})
		}
	},
	globalData: {
		openid: wx.getStorageSync('openid'),
		userInfo: null,
		accessToken: wx.getStorageSync('accessToken'),
		categoryList: [{
			value: '00',
			label: '仲裁'
		}, {
			value: '01',
			label: '诉讼'
		}, {
			value: '02',
			label: '强执公证'
		}, {
			value: '03',
			label: '仲裁执行'
		}, {
			value: '04',
			label: '诉讼执行'
		}, {
			value: '05',
			label: '公证执行'
		}, {
			value: '06',
			label: '诉讼加执行'
		}, {
			value: '07',
			label: '仲裁调解'
		}, {
			value: '08',
			label: '诉讼调解'
		}, {
			value: '09',
			label: '律师调解'
		}, {
			value: '11',
			label: '邀约仲裁'
		}, {
			value: '10',
			label: '其他'
		}]
	}
})
