# 微信小程序导航插件

## 导航插件效果图
![image](http://ovle9bdip.bkt.clouddn.com/131323131.gif)

## 使用方法

1. 引入pages/bar组件进入项目
2. 在app.js中配置公用方法和导航数据

```js

  //高亮控制函数
  editTabBar: function () {
    var tabBar = this.globalData.tabBar,
    currentPages = getCurrentPages(),
    _this = currentPages[currentPages.length - 1],
    pagePath = _this.__route__;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (var i in tabBar.list) {
      tabBar.list[i].active = false;
      (tabBar.list[i].pagePath == pagePath) && (tabBar.list[i].active = true);
    }
    _this.setData({
      tabBar: tabBar
    });
  }, 
  
  //导航数据
  globalData: {
    //配置tabBar  
    tabBar: {
      "list": [
        {
          "pagePath": "/pages/index/index",
          "text": "首页",
          "iconPath": "../../resource/images/home.png",
          "selectedIconPath": "../../resource/images/home_on.png",
          active: true //是否高亮
        },
        {
          "pagePath": "/pages/concat/concat",
          "text": "联系我们",
          "iconPath": "../../resource/images/concat.png",
          "selectedIconPath": "../../resource/images/concat_on.png",
          "selectedColor": "#4EDF80",
          active: false
        },
        {
          "pagePath": "/pages/process/process",
          "text": "申报进度",
          "iconPath": "../../resource/images/search.png",
          "selectedIconPath": "../../resource/images/search_on.png",
          "selectedColor": "#4EDF80",
          active: false
        }
      ],
    }
  }

```
2. 在index.wxml页面上引入组件

```html
<import src="../bar/bar.wxml" />  
<template is="tabBar" data="{{tabBar: tabBar}}" />
```
4. 在index.wxss中引入样式文件

```css
@import"../bar/bar.wxss";
```
5. 在index.js中调用公用函数

```js
//获取应用实例
const app = getApp()

/**
* 生命周期函数--监听页面加载
*/
onLoad: function (options) {
    app.editTabBar(); 
},
```