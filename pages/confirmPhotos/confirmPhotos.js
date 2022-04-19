// pages/confirmPhotos/confirmPhotos.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: []
    },

    preview(e) {
        wx.previewImage({
            urls: [e.currentTarget.dataset.path],
        })
    },

    del(e) {
        wx.showModal({
            content: '确认删除图片？',
            success: res => {
                if (res.confirm){
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
                }
            }
        })
    },

    add() {
        wx.chooseImage({
            count: 9,
            success: res => {
                this.setData({
                    list: this.data.list.concat(res.tempFilePaths)
                })
            }
        })
    },

    next(){
        wx.navigateTo({
          url: `/pages/matchCase/matchCase?list=${encodeURI(JSON.stringify(this.data.list))}`,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if (options.list) {
            let list = JSON.parse(decodeURI(options.list))
            this.setData({ list })
        }
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