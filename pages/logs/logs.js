//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    item: [1, 1, 1, 1, 1, 1, 1, 1]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
