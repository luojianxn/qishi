Page({
  data: {
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
    items1: [{ name: "企石新闻", image: '../../image/店铺.png'}, 
      { name: "同城商铺", image: '../../image/店铺.png'},
      { name: "餐饮美食", image: '../../image/店铺.png'},
      { name: "休闲娱乐", image: '../../image/店铺.png'},
      { name: "企业工厂", image: '../../image/店铺.png'}],
    items2: [{ name: "求职招聘", image: '../../image/钱包.png' },
            { name: "住宿租房", image: '../../image/发布.png' },
            { name: "本地问答", image: '../../image/用户.png' },
            { name: "投放广告", image: '../../image/用户.png' },
            { name: "其他", image: '../../image/用户.png' }],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1500,
    circular: true,
    beforeColor: "white",//指示点颜色  
    afterColor: "coral"//当前选中的指示点颜色 
   
  },
onLoad:function(){
  

}

})
