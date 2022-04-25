// pages/searchCase/searchCase.js
const { MATCH_LIST, MATCH_CHECK } = require('../../utils/api')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        stateList: [{ id: '', name: '全部状态' }, { id: '01', name: '已入库' }, { id: '02', name: '已出库' }, { id: '03', name: '已退回' }],
        caseType: '',
        loadState: 'More',
        categoryList: getApp().globalData.categoryList,
        accessToken: wx.getStorageSync('accessToken'),
        keywords: '',
        pageNumber: 1,
        pageSize: 15,
        list: [],
        listShow: false,
        total: 0,
        isAll: 0,
        checkNum: 0,
        caseIds: ''
    },

    /**
     * 选择案件类目
     * @param {*} e 
     */
    changeType(e) {
        // console.log(e)
        let index = e.detail.value;
        let caseType = this.data.categoryList[index].value
        if (caseType !== this.data.caseType) {
            this.setData({ caseType, caseIds: '', list: [],  pageNumber: 1})
            this.getList()
        }
        
    },

    /**
     * input双向绑定
     * @param {*} e 
     */
    inputVal(e) {
        let name = e.currentTarget.dataset.name
        this.setData({ [name]: e.detail.value })
    },

    /**
     * 点击右下角搜索
     */
    confirmInput() {
        this.setData({ pageNumber: 1, list: [], caseIds: '' })
        this.getList()
    },

    /**
     * 获取caseList
     */
    getList() {
        let { caseType, pageNumber, pageSize, keywords } = this.data
        let data = {
            caseType, pageNumber, pageSize, keywords
        }
        this.setData({ listShow: true, loadState: 'Loading' })
        MATCH_LIST(data).then(res => {
            // console.log(res)
            let list = this.data.list.concat(res.records),
                loadState = 'More'
            if (pageNumber == res.pages) {
                loadState = 'noMore'
            }
            if (pageNumber == 1 && list.length == 0) {
                loadState = 'Empty'
            }
            this.setData({ list, loadState, pageNumber: pageNumber + 1, total: res.total})
            this.setCheckNum()
        }).catch(res => {
            this.setData({ loadState: 'Error' })
            wx.showToast({
                title: res
            })
        })
    },

    /**
     * 下一页
     */
    nextPage() {
        let { loadState } = this.data
        if (loadState == 'More' || loadState == 'Error') {
            this.getList()
        }
    },

    /**
     * 复制文本
     * @param {*} e 
     */
    copyText(e) {
        wx.setClipboardData({
            data: e.currentTarget.dataset.text,
            success: () => {
                wx.showToast({
                    title: '复制成功',
                })
            }
        })
    },

    /**
     * 选中/取消选中单个案件
     * @param {*} e 
     */
    checkOne(e) {
        let caseid = e.currentTarget.dataset.caseid,
            { caseIds } = this.data
        if (caseIds == '') {
            caseIds = caseid
        } else if (caseIds.indexOf(caseid) == -1) {
            caseIds += ',' + caseid
        } else if (caseIds.indexOf(caseid) == 0) {
            caseIds = caseIds.replace(caseid, '').replace(',', '')
        } else {
            caseIds = caseIds.replace(',' + caseid, '')
        }
        // console.log(caseIds)
        this.setData({ caseIds })
        this.setCheckNum()
    },

    /**
     * 全选/取消全选
     */
    changeCheckAll() {
        this.setData({ isAll: this.data.isAll == 1 ? 0 : 1, caseIds: '' })
        this.setCheckNum()
    },

    /**
     * 设置选择的案件数量
     */
    setCheckNum() {
        let { total, isAll, caseIds } = this.data
        let checkNum = caseIds == '' ? 0 : caseIds.split(',').length
        if (isAll == 1) {
            checkNum = total - checkNum
        }
        this.setData({checkNum})
    },

    /**
     * 确认案件
     */
    confirm() {
        let {isAll, keywords, caseIds, caseType} = this.data
        // 单个案件首次入库
        let data = {
            isAll, caseIds, keywords, caseType
        }
        
        wx.setStorageSync('oper', '00')
        wx.navigateTo({
            url: '/pages/oneConfirmCase/oneConfirmCase',
        })
        // 批量案件首次入库
        // wx.setStorageSync('oper', '10')
        // wx.navigateTo({
        //   url: '/pages/batchConfirmCase/batchConfirmCase',
        // })
    },

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