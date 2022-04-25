// pages/caseMaterials/caseMaterials.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        first: null,
        addMIF: false,  // 新增材料modal
        merIF: false,   // 商户modal
        lawIF: false,   // 律师modal
        oper: null
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
     * 删除材料
     * @param {*} e 元素信息 
     */
    deleteM(e) {
        wx.showModal({
            content: '确认删除当前材料类型吗？',
            success: res => {
                console.log(res)
            }
        })
    },

    /**
     * 首次入库成功
     */
    success() {
        wx.reLaunch({
            url: '/pages/success/success?state=1&first=true',
        })
    },

    /**
     * 
     */
    back() {

    },

    /**
     * 禁止关闭modal冒泡
     */
    stop() { },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({oper: wx.getStorageSync('oper')})
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