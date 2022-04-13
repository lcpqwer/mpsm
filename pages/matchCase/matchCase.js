// pages/matchCase/matchCase.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        state: 'More',
        search: '11111'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({...options})
        wx.showModal({
            title: "提示",
            content: `系统没有找到与合同编号${this.data.search}相匹配的案件信息，是否新建`,
            confirmText: "取消",
            cancelText: "新建",
            cancelColor: "#1780f3",
            confirmColor: "#989898",
            success: res => {
                console.log(res)
                if (res.cancel){
                    wx.navigateTo({
                      url: `/pages/caseDetail/caseDetail?type=add&list=${this.data.list}`,
                    })
                }
            }
        })
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