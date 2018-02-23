var app=getApp();

var   sendrequest=function(a){
    var that = a
    that.hidden=true;
        wx.request({
          url:"http://apis.baidu.com/txapi/mvtp/meinv",
          method:"get",
          header: {
              'Content-Type': 'application/json',
              "apikey":"e325c29be2b8440f20aa45b04131383f"
            },
            data:{
                "num":that.data.imagenumber
            },
            success:function(res){
                var newslistdata=res.data.newslist;
                that.setData({newslistdata:newslistdata,hidden:true});
                that.update();
                wx.redirectTo({

                  success: function(res){
                    // success
                  },
                  fail: function() {
                    // fail
                  },
                  complete: function() {
                    // complete
                  }
                })
            }
      })
}

Page({
  data:{
    // text:"这是一个页面"
    newslistdata:[],
    imagenumber:10,
    hidden:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
     sendrequest(this)
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  lower:function(e){
      this.data.imagenumber++;
      this.data.hidden=true;
      sendrequest(this);
      console.log( this.data.imagenumber)
  }

})