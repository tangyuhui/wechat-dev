
var app = getApp();
Page({
  data: {
    username: ""
  },
  onShow:function(){
     
  },
  onLoad: function (options) {
    // console.log(app.globalData.userinfo);
    if (!app.globalData.userinfo) {
    //   wx.navigateTo({ url: "../login/login" })

      // wx.redirectTo({ url: "../login/login" })
    } else {

      this.setData({ username: app.globalData.userinfo.username })
    }
  },
  onReady: function () {
    // 页面渲染完成
   
  },
  onShow: function (options) {
  

  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
    console.log("user页面关闭")
  }
})