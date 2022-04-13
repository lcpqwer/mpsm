// pages/caseDetail/caseDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        nav: '1',
        state: '2',
        type: 'detail',
        // 新增案件字段
        case: [{ id: '01', name: '借贷合同' }],
        list: []
    },

    chooseNav(e) {
        let nav = e.currentTarget.dataset.nav;
        this.setData({ nav })
    },

    changeState(e) {
        let state = e.currentTarget.dataset.state;
        this.setData({ state })
    },

    update() {

    },

    upload() {

    },

    add() {
        wx.showActionSheet({
            itemList: ["拍照", "从手机相册选择", "从会话列表选择文件"],
            success: res => {
                console.log(res)
            }
        })
    },

    next(e) {
        let url = e.currentTarget.dataset.url;
        wx.navigateTo({ url })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if (options.type == 'add') {
            this.setData({
                type: options.type,
                list: JSON.parse(decodeURI(options.list))
            })
        }

        console.log(this.data.type)
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