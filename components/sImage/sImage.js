// components/sIamg/sImage.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        src: String,
        mode: String
    },

    /**
     * 组件的初始数据
     */
    data: {
        show: false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        show() {
            this.setData({ show: true })
        }
    }
})
