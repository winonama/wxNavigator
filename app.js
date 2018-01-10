//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
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
  globalData: {
    userInfo: null,
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
})