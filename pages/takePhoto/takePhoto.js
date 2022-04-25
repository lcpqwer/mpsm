// pages/takePhoto/takePhoto.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        oper: null
    },

    cameraDone() {
        wx.hideLoading()
    },

    takePhoto() {
        const ctx = wx.createCameraContext()
        ctx.takePhoto({
            quality: 'high',
            success: (res) => {
                let list = this.data.list;
                list.push(res.tempImagePath)
                this.setData({
                    list
                })
            }
        })
    },
    error(e) {
        console.log(e.detail)
        wx.hideLoading({
            success: (res) => {
                wx.showToast({
                    title: '调取摄像头失败',
                    mask: true,
                    icon: "error"
                })
            },
        })
    },

    preview(e) {
        wx.previewImage({
            urls: [e.currentTarget.dataset.path],
        })
    },

    del(e) {
        let index = e.currentTarget.dataset.index;
        let list = [];
        let ls = this.data.list;
        for (let i = 0; i < ls.length; i++) {
            if (i != index) {
                list.push(ls[i])
            }
        }
        this.setData({
            list
        })
    },

    chooseImage() {
        wx.chooseImage({
            count: 9,
            sourceType: ['album'],
            success: res => {
                this.setData({
                    list: this.data.list.concat(res.tempFilePaths)
                })
            }
        })
    },

    next() {
        let { oper, list } = this.data, url
        if (list.length > 0){
            url = `/pages/confirmPhotos/confirmPhotos?list=${encodeURI(JSON.stringify(this.data.list))}`
        }else if (oper == '00' || oper == '0') {
            wx.showToast({
              title: '请上传材料图片',
              mask: true,
              icon: 'none'
            })
            return
        }else {
            url = '/pages/caseMaterials/caseMaterials'
        }
        wx.navigateTo({
            url
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({ oper: wx.getStorageSync('oper') })
        // wx.showLoading({
        //     title: '调取摄像头',
        //     mask: true
        // })
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