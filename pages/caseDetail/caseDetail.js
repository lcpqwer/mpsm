// pages/caseDetail/caseDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        nav: '0',
        state: '2',
        // 新增案件字段
        case: [{ id: '01', name: '借贷合同' }],
        list: [1, 1, 1, 1, 1],
        addMIF: false,  // 新增材料modal
        minfoIF: false, // 材料信息modal
        exIF: false,    // 出库modal
        reIF: false,    // 退回modal
        merIF: false,   // 商户modal
        lawIF: false,   // 律师modal
        recordIF: false, // 变更记录详情modal
    },

    /**
     * 改变页面轮播
     * @param {Object} e 元素信息
     */
    changeSwiper(e) {
        console.log(e)
        let nav = e.detail.current
        if (nav != this.data.nav) {
            this.setData({ nav })
        }
    },

    /**
     * 改变页面轮播
     * @param {Object} e 元素信息
     */
    chooseNav(e) {
        let nav = e.currentTarget.dataset.nav;
        this.setData({ nav })
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
     * 禁止关闭modal冒泡
     */
    stop() { },


    addM() {

    },

    /**
     * 删除图片
     * @param {Object} e 元素信息 
     */
    deleteP(e) {
        wx.showModal({
            content: '确认删除当前图片吗？',
            success: res => {
                console.log(res)
            }
        })
    },

    /**
     * 新增图片
     */
    addP() {
        wx.showActionSheet({
            itemList: ["拍照", "从手机相册选择"],
            success: res => {
                console.log(res)
                if (res.tapIndex === 0){
                    // 拍照
                }else if (res.tapIndex === 1){
                    // 从手机相册选择
                }
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
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