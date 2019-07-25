import api from '../api/index'
interface defaultPage extends Page.PageInstance{
  [propName: string]: any;
}
export default class BasePage implements defaultPage {
  constructor() {
    this.api = api
    this.setDefaultData({
      abs: '111',
    })
  }
  showErrorMsg(title) {
    wx.showModal({})
  }
  /**
   * 设置初始 data
   * @param {*} data
   */
  setDefaultData(data) {
    this.data = Object.assign({}, this.data, data)
  }
}
