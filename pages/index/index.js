Page({
  data: {
    top:0,
    //轮播图
    swiperCurrent: 1,
    arr: [{
      images: '../../image/1.jpg'
    },
    {
      images: '../../image/2.jpg'
    },
    {
      images: '../../image/3.jpg'
    },
    {
      images: '../../image/3.jpg'
    }
    ],
    items1: [{ name: "企石新闻", image: '../../image/dianpu.png'}, 
      { name: "同城商铺", image: '../../image/dianpu.png'},
      { name: "餐饮美食", image: '../../image/dianpu.png'},
      { name: "休闲娱乐", image: '../../image/dianpu.png'},
      { name: "企业工厂", image: '../../image/dianpu.png'}],
    items2: [{ name: "求职招聘", image: '../../image/yonghu.png' },
            { name: "住宿租房", image: '../../image/yonghu.png' },
            { name: "本地问答", image: '../../image/yonghu.png' },
      { name: "投放广告", image: '../../image/yonghu.png' },
      { name: "其他", image: '../../image/yonghu.png' }],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1500,
    circular: true,
    beforeColor: "white",//指示点颜色  
    afterColor: "coral",//当前选中的指示点颜色 
    lists: [{ ID:1,TESTTEXT:5}, {ID:1,TESTTEXT:5},{ID:1,TESTTEXT:5},{ID:1,TESTTEXT:5},
            { ID:11,TESTTEXT:5}, {ID:1,TESTTEXT:5},{ID:1,TESTTEXT:5},{ID:1,TESTTEXT:5},{ID:1,TESTTEXT:5}],
    requestLoading: false, //"上拉加载"的变量，默认false，隐藏  
    requestLoadingComplete: false , //“没有数据”的变量，默认false，隐藏  
    requestPageNum:1,
    callbackcount: 5

  },
onLoad:function(){
  console.log(123);
},
scroll: function(e) {
    let that = this;
    console.log(e.detail.scrollTop);
    that.top = e.detail.scrollTop;
    that.setData({ top: that.top});
  },
  loadMore:function(e) {
    var that=this;
    console.log(123);
    that.setData({
      requestLoading: true,
      lists: that.data.lists.concat({ ID:11,TESTTEXT:5})
  });
  },
  onReachBottom: function () {
    console.log("page上拉触底");
    //this.getList();

  },
  onPullDownRefresh: function () {
    console.log("page向上");
  },
  
  getList:function(){
    var that = this;
    var requestPageNum = this.data.requestPageNum, // 第几次加载数据(第几页)
        callbackcount = this.data.callbackcount; //返回数据的个数(一次性取数据的个数)
    wx.request({
      url: 'http://localhost:8080/hello/getData',
      data: {
        SQL_NAME:'test',
        PAGE_NUM: requestPageNum
      },
      success: function (res) {
        console.log(res);
        let screenHeight = wx.getSystemInfoSync().windowHeight;
        console.log(screenHeight);
        let screenOrderNum = parseInt(screenHeight / 170);
        console.log(screenOrderNum, '满屏最多能放几个卡片')
        // 9 >= 1, 2, 3 知道 currentPage 大于 rap数据总页码
        if (res.data.length > screenOrderNum) {
          console.log("A");
          that.setData({
            requestLoading: true,
            lists: that.data.lists.concat(res.data)
          });
     
        } else if (res.data.length <= screenOrderNum) {
        
          that.setData({
            requestLoadingComplete: false,
            requestLoading: false,
            lists: that.data.lists.concat(res.data)
          })
        } else {
          that.setData({
            requestLoadingComplete: true,
            requestLoading: false
          })
        }
        wx.hideLoading();
        wx.stopPullDownRefresh();
      }
    });

  }
})
