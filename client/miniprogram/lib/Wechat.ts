import BasePage from './BasePage'
interface wechatInter {
  Page?: any;
  Component?: any;
  BasePage?: any;
  createPage?: Function;
  createComponent?: Function;
  newInstance?: Function;
}
// 小程序全局对象
const WeChat:wechatInter = {}
// 注入的Page方法
WeChat.Page = Page
// 注入的Component方法
WeChat.Component = Component
// 注入基础页面类
WeChat.BasePage = BasePage

/**
 * 注册页面
 */
WeChat.createPage = function(PageClass: any) {
  const page = newInstance(PageClass)
  WeChat.Page(page)
}

/**
 * 初始化组件
 */
WeChat.createComponent = function(ComponentClass: any) {
  const component = newInstance(ComponentClass)
  console.log(component)
  WeChat.Component(component)
}

/**
 * 实例化页面类，同时将所有属性拷贝到新对象中
 * @param {*} Class
 */
function newInstance(wxClass: any) {
  const obj = new wxClass()
  const attrs:Array<any> = []
  const newObj:any = {}
  loopAtrr(obj, attrs)
  attrs.reverse()
  attrs.forEach((item:any) => Object.assign(newObj, item))
  return newObj
}

/**
 * 递归获取对象自身上所有属性
 * @param {*} obj
 * @param {*} attrs
 */
function loopAtrr(obj, attrs) {
  const excludeAttr = ['constructor']
  const pureObj = {}
  Object.getOwnPropertyNames(obj).forEach(key => {
    if (!excludeAttr.includes(key)) pureObj[key] = obj[key]
  })
  attrs.push(pureObj)
  obj.constructor !== BasePage && loopAtrr(obj.__proto__, attrs)
}

export default WeChat
