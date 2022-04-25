// pages/batchCircul/batchCircul.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        loadState: 'More',
        categoryList: getApp().globalData.categoryList, // 类目列表
        stateList: [{
            value: '00',
            label: '待入库'
        }, {
            value: '01',
            label: '已入库'
        }, {
            value: '02',
            label: '已出库'
        }, {
            value: '03',
            label: '部分出库'
        }, {
            value: '04',
            label: '已退件'
        }],     // 状态列表
        stateIndex: null,
        list: []
    },

    /**
     * 修改picker
     * @param {Object} e 元素信息 
     */
    changePicker(e) {
        let name = e.target.dataset.pickerindex
        this.setData({ [name]: e.detail.value, list: [1] })
        wx.setStorageSync('params', {
            
        })
    },

    /**
     * 批量入库
     */
    batchEnter() {
        let { stateIndex } = this.data
        let oper, url
        if (stateIndex == 0) {
            oper = '01'
            url = '/pages/caseMaterials/caseMaterials'
        } else if (stateIndex == 1) {
            oper = '11'
            url = '/pages/takePhoto/takePhoto'
        } else if (stateIndex == 2) {
            oper = '31'
            url = '/pages/caseMaterials/caseMaterials'
        } else if (stateIndex == 3) {
            oper = '21'
            url = '/pages/takePhoto/takePhoto'
        } else {
            oper = '41'
            url = '/pages/takePhoto/takePhoto'
        }
        wx.setStorageSync('oper', oper)
        wx.navigateTo({
            url,
        })
    },

    /**
     * 批量出库
     */
    batchOut() {
        let { stateIndex } = this.data
        let oper
        if (stateIndex == 1){
            oper = '12'
        }else {
            oper = 22
        }
        wx.setStorageSync('oper', oper)
        wx.navigateTo({
          url: '/pages/caseMaterials/caseMaterials',
        })
    },

    /**
     * 批量退件
     */
    batchRe() {
        wx.setStorageSync('oper', '13')
        wx.navigateTo({
          url: '/pages/caseMaterials/caseMaterials',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if (wx.getStorageSync('batch')){
            wx.removeStorageSync('batch')
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