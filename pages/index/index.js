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
    lists: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
  },
onLoad:function(){
  console.log(123);

},
  scroll(e) {
    let that = this;
   // console.log(e.detail.scrollTop);
    that.top = e.detail.scrollTop;
    that.setData({ top: that.top});
  },
  loadMore(e) {

    console.log(123);
  
  }
})
