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
    items1: [{name:"企石新闻"},{name:"同城商铺"},{name:"餐饮美食"},{name:"休闲娱乐"},{name:"企业工厂"}],
    items2: [{name:"求职招聘"},{name:"住宿租房"},{name:"本地问答"},{name:"投放广告"},{name:"其他"}],
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
