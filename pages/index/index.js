//index.js
//获取应用实例
var app = getApp()

var  sendrequest=function(a){
    var that = a;
    that.hidden=true;
        wx.request({
          url:"http://apis.baidu.com/txapi/huabian/newtop",
          method:"get",
          header: {
              'Content-Type': 'application/json',
              "apikey":"e325c29be2b8440f20aa45b04131383f"
            },
            data:{
                "page":that.data.news_page,
                "num":20
            },
            success:function(res){
                var newslist=res.data.newslist;
                console.log("newslist",newslist);
                var allnews=newslist.concat(that.data.newslist);
                that.setData({newslist:allnews,hidden:true});
                that.update();
            }
      })
}

Page({
  data: {
    news_page:1,
    newslist:[],
    motto: '善林宝',
    userInfo: {},
    loginname:'善林宝',
    hidden:true,
    bannerimgs:[
      'http://pic.3h3.com/up/2013-5/201351284644118200.jpg',
      'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1503/17/c2/3974346_1426551981202_mthumb.jpg'
    ]
  },
    onReady:function(){
     sendrequest(this)
  },


  lower:function(e){
      this.data.news_page++;
      this.data.hidden=false;
      sendrequest(this);
  },

  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../shanlinbao/login/login'
    // })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
