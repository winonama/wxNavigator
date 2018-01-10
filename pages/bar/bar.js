// pages/bar/bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    //配置tabBar  
    tabBar: {
      "list": [
        {
          "pagePath": "/pages/index/index",
          "text": "首页",
          "iconPath": "../../resource/images/home.png",
          "selectedIconPath": "../../resource/images/home_on.png",
          active: true
        },
        {
          "pagePath": "/pages/logs/logs",
          "text": "联系我们",
          "iconPath": "../../resource/images/concat.png",
          "selectedIconPath": "../../resource/images/concat_on.png",
          "selectedColor": "#4EDF80",
          active: false
        },
        {
          "pagePath": "/pages/logs/logs",
          "text": "申报进度",
          "iconPath": "../../resource/images/search.png",
          "selectedIconPath": "../../resource/images/search_on.png",
          "selectedColor": "#4EDF80",
          active: false
        }
      ],
      "position": "bottom"
    } 
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

