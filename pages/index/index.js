// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    subtitle: '加载中...',
    type: 'in_theaters',
    loading: false,
    hasMore: false,
    page: 1,
    size: 20,
    products: [{
     id:1,
     rate:"2.5-5.0%",
     name:'华安基金',
     deadline:'随时可取',
     purAmount:'0.01'
    }]
  },

  loadMore() {
    if (!this.data.hasMore) return

    this.setData({ subtitle: '加载中...', loading: true })
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(params) {
    this.data.title = params.title || this.data.title

    // 类型： in_theaters  coming_soon  us_box
    this.data.type = params.type || this.data.type

    this.loadMore()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({ title: this.data.title + '  理财' })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.setData({ movies: [], page: 1, hasMore: true })
    this.loadMore()
      .then(() => app.wechat.original.stopPullDownRefresh())
  },

  onReachBottom() {
    this.loadMore()
  }
})
