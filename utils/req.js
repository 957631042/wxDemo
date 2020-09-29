const req = ({url, method, data, header}, success, fail) => {
	wx.request({
		url,
		method: method || 'Get',
		data: data || {},
		header: header || {"Contant-type": "application/json"},
		success,
		fail
	})
}
const showLoading = () => {
  wx.showLoading({
    title: '加载中...',
  })
}
const hideLoading = () => {
  setTimeout(_=>{
    wx.hideLoading()
  },800)
}
module.exports = {
  req,
  showLoading,
  hideLoading
}