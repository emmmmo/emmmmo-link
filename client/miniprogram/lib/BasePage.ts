import api from '../api/index'

export default class BasePage {

  public data: any
  public api: any
  constructor() {
    this.setDefaultData({
      abs: '111'
    })
    this.data = {}
    this.api = api
  }
  showErrorMsg(title: string) {
    wx.showModal({title: title, content: ''})
  }
  /**
   * 设置初始 data
   * @param {*} data 
   */
  setDefaultData(data) {
    this.data = Object.assign({}, this.data, data)
  }
}