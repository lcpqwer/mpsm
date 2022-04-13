const date = new Date()
const nowYear = date.getFullYear()
const nowMonth = date.getMonth() + 1
const nowDay = date.getDate()

let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// 根据年月 获取当月的总天数
let getDays = function (year, month) {
    if (month === 2) {
        return ((year % 4 === 0) && ((year % 100) !== 0)) || (year % 400 === 0) ? 29 : 28
    } else {
        return daysInMonth[month - 1]
    }
}
// 根据年月日设置当前月有多少天 并更新年月日数组
let setDate = function (year, month, day, _th) {
    let daysNum = year === nowYear && month === nowMonth ? nowDay : getDays(year, month)
    day = day > daysNum ? 1 : day
    let monthsNum = year === nowYear ? nowMonth : 12
    let years = ['全部日期']
    let months = []
    let days = []
    let yearIdx = 9999
    let monthIdx = 0
    let dayIdx = 0

    // 重新设置年份列表
    for (let i = 2020; i <= nowYear; i++) {
        years.push(i)
    }
    years.map((v, idx) => {
        if (v === year) {
            yearIdx = idx
        }
    })
    // console.log(year)
    // 重新设置月份列表
    // console.log('monthsNum', monthsNum)
    if (year == '2020') {
        for (let i = 10; i <= monthsNum; i++) {
            months.push(i)
        }
    } else {
        for (let i = 1; i <= monthsNum; i++) {
            months.push(i)
        }
    }

    months.map((v, idx) => {
        if (v === month) {
            monthIdx = idx
        }
    })
    // 重新设置日期列表
    for (let i = 1; i <= daysNum; i++) {
        days.push(i)
    }
    days.map((v, idx) => {
        if (v === day) {
            dayIdx = idx
        }
    })
    // console.log(yearIdx, monthIdx, dayIdx)
    _th.setData({
        years: years,//年份列表
        months: months,//月份列表
        days: days,//日期列表
        value: [yearIdx, monthIdx, dayIdx],
        year: year,
        month: month,
        day: day
    })


}
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        pickerIf: String
    },

    /**
     * 组件的初始数据
     */
    data: {
        years: [],
        months: [],
        days: [],
        year: nowYear,
        month: nowMonth,
        day: nowDay,
        yearIndex: 0,
        sys: 'ios',
        value: [0, 0, 0]
    },

    attached() {
        this.init()
    },

    /**
     * 组件的方法列表
     */
    methods: {
        init() {
            setDate(this.data.year, this.data.month, this.data.day, this)
            this.setData({ value: [0, 0, 0] })
            this.setData({ sys: getApp().globalData.sys })
            // console.log(this.data.years, this.data.months, this.data.days)
        },

        bindChange: function (e) {
            // console.log(e)
            let val = e.detail.value
            this.setData({
                yearIndex: val[0]
            })
            setDate(this.data.years[val[0]], this.data.months[val[1]], this.data.days[val[2]], this)
        },
        confirm() {
            // console.log(this.data.years, this.data.months, this.data.days)
            // console.log(this.data.value)
            let val = this.data.value
            if (val[0] == 0) {
                this.triggerEvent('confirm', { date: "全部日期" })
            } else {
                this.triggerEvent('confirm', {
                    date: `${this.data.years[val[0]]}年${this.data.months[val[1]]}月${this.data.days[val[2]]}日`,
                    year: this.data.years[val[0]],
                    month: this.data.months[val[1]],
                    day: this.data.days[val[2]]
                })
                // console.log(`${this.data.years[val[0]]}年${this.data.months[val[1]]}月${this.data.days[val[2]]}日`)
            }
        },
        cancel() {
            this.triggerEvent('cancel')
        },
        noThing(){}
    }
})
