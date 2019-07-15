import { getActivityList, postActivity } from '../../services/index'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    text: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  getActivityList() {
    return getActivityList()
      .then(res => {
        this.setData({
          text: JSON.stringify(res.data),
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  postActivity() {
    return postActivity({
      title: '测试',
      startTime: 123123123,
      endTime: 12312313132132,
      address: '地址',
      detail: '详情',
    })
      .then(res => {
        this.setData({
          text: JSON.stringify(res),
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
})
