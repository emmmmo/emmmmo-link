/**
 * 获取活动列表
 */
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

/**
 * 查询命令
 * @param {*} command
 * @param {*} rule
 */
const queryCommand = (command, rule) => db.command[command](rule)

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db
      .collection('activities')
      .where({
        _removed: queryCommand('neq', true),
      })
      .field({
        _id: false,
      })
      .get()
  } catch (error) {
    return {
      error,
    }
  }
}
