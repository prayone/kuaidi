//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
      num:null,
      resData:null,
      items: [
        { name: 'zto', value: '中通' },
        { name: 'sf', value: '顺丰' },
        { name: 'yt', value: '圆通' }
      ],
      mc:null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  clickxc:function(){
      var that=this;
    app.getExpressInfo(this.data.mc, this.data.num,function(data){
        console.log(data)
        that.setData({resData:data})

    })
  },
  numInfo:function(e){

      this.setData({num:e.detail.value})
  },
  radioChange: function (e) {
    console.log(e.detail.value )
    this.setData({mc:e.detail.value})
  }
})
