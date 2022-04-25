// pages/batchConfirmCase/batchConfirmCase.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detailIF: false,    // 案件详情mdoal
    },

    /**
     * modal层显示
     * @param {*} e 元素信息
     */
    showModal(e) {
        let modalId = e.currentTarget.dataset.modalid
        this.setData({ [modalId]: true })
    },

    /**
     * modal层隐藏
     * @param {*} e 元素信息
     */
    hideModal(e) {
        let modalId = e.currentTarget.dataset.modalid
        this.setData({ [modalId]: false })
    },

    /**
     * 禁止关闭modal冒泡
     */
    stop() { },

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