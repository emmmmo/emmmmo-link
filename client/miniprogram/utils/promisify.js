/**
 * 将 api promise 化
 */
const cloud = wx.cloud

/**
 * 调用云函数
 * @param {String} name 函数名
 * @param {Object} [data] 数据
 */
export const cloudFun = (name, data = {}) => {
  return new Promise((resolve, reject) => {
    cloud.callFunction({
      name,
      data,
      success: ({ result }) => resolve(result),
      fail: e => reject(e),
    })
  })
}
