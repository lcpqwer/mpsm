// pages/user/user.js
Component({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: wx.getStorageSync('USERINFO'),
        accessToken: wx.getStorageSync('accessToken')
    },

    methods: {
        load(){
            this.accessToken = wx.getStorageSync('accessToken')
            this.getNumber()
        },
        
        /**
         * 获取用户数据
         */
        getNumber(){

        },

        /**
         * 获取用户信息
         */
        getUserInfo(e) {
            console.log(e)
            if (e.detail.errMsg == "getUserInfo:ok") {
                this.setData({
                    userInfo: e.detail.userInfo
                })
                wx.setStorageSync('USERINFO', e.detail.userInfo)
            }
        },

        getUserProfile() {
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

        /**
         * 上传记录
         */
        next(e) {
            if (this.data.accessToken) {
                let url = e.currentTarget.dataset.url
                wx.navigateTo({ url })
            } else {
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
    }

})