//index.js
//获取应用实例
const app = getApp()
const link = require("../../utils/req")
Page({
  data: {
    page: 1,
	  dataList:[]
  },
  //事件处理函数
  onLoad: function () {
    this.getDatalist()
  },
  getDatalist: function(e) {
    link.showLoading()
    link.req({url: "https://api.apiopen.top/getJoke",data: {page:this.data.page,count: "3", type: "video"}},({data: res})=>{;
      this.setData({
        dataList: [...this.data.dataList, ...res.result]
      })
      console.log(this.data.dataList)
      link.hideLoading()
    })
  },
  onReachBottom: function(){
    console.log("下拉");
    this.setData({
      page: this.data.page+1
    })
    console.log(this.data.page)
    this.getDatalist();
  }
})
