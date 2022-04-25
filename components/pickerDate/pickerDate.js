// components/pickerDate/pickerDate.js
require('../../utils/util')
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        start: {
            value: '2000-01-12',
            type: String
        },
        end: {
            value: new Date().format('yyyy-MM-dd'),
            type: String
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        years: [],
        months: [],
        days: [],
        value: [0, 0, 0],
        startY: null,
        startM: null,
        startD: null,
        endY: null,
        endM: null,
        endD: null
    },

    /**
     * 获取开始日期与结束数据日期
     */
    attached() {
        // 获取satrt
        this.setData({
            startY: new Date(this.data.start).getFullYear(),
            startM: new Date(this.data.start).getMonth() + 1,
            startD: new Date(this.data.start).getDate(),
            endY: new Date(this.data.end).getFullYear(),
            endM: new Date(this.data.end).getMonth() + 1,
            endD: new Date(this.data.end).getDate()
        })
        let { startY, endY, startM, startD } = this.data
        this.setData({
            years: this.getListRange(startY, endY),
            months: this.getListRange(startM, 12),
            days: this.getListRange(startD, new Date(startY, startM, 0).getDate())
        })
    },


    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 获取范围内数值的数组
         * @param {Number} sNum 开始数值
         * @param {Number} eNum 结束数值
         */
        getListRange(sNum, eNum) {
            let list = []
            for (let i = sNum; i < eNum + 1; i++) {
                list.push(i)
            }
            return list
        },
        /**
         * 改变picker修改picker数组
         * @param {Object} e 元素信息
         */
        bindChange(e) {
            let value = e.detail.value,
                { startY, startM, startD, endY, endM, endD, years, months } = this.data;
            let year = years[value[0]]
            if (value[0] != this.data.value[0]) {
                if (year == startY) {
                    this.setData({
                        months: this.getListRange(startM, 12),
                        days: this.getListRange(startD, new Date(startY, startM, 0).getDate())
                    })
                } else if (year == endY) {
                    console.log(endM)
                    this.setData({
                        months: this.getListRange(1, endM)
                    })
                    if (endM == 1) {
                        this.setData({ days: this.getListRange(1, endD) })
                    } else {
                        this.setData({ days: this.getListRange(1, new Date(year, 1, 0).getDate()) })
                    }
                } else {
                    this.setData({
                        months: this.getListRange(1, 12),
                        days: this.getListRange(1, new Date(year, 1, 0).getDate())
                    })
                }
            } else if (value[1] != this.data.value[1]) {
                // 修改月
                let month = months[value[1]]
                if (year == startY && month == startM) {
                    this.setData({ days: this.getListRange(startD, new Date(year, month, 0).getDate()) })
                } else if (year == endY && month == endM) {
                    this.setData({ days: this.getListRange(1, endD) })
                } else {
                    this.setData({ days: this.getListRange(1, new Date(year, month, 0).getDate()) })
                }
            }
            this.setData({ value })
        },
        /**
         * 取消
         */
        cancel() {
            this.triggerEvent('cancel')
        },
        /**
         * 清空
         */
        clear() {
            this.setData({ value: [0, 0, 0] })
            this.triggerEvent('clear')
        },
        /**
         * 确认
         */
        confirm() {
            let { years, months, days, value } = this.data
            this.triggerEvent('confirm', {
                year: years[value[0]],
                month: months[value[1]],
                day: days[value[2]]
            })
        },
        noThing(){}
    }
})
