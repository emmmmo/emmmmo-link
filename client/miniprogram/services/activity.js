import { cloudFun } from '../utils/index'

/**
 * 获取活动列表
 * @param {*} data
 */
export const getActivityList = (data = {}) => {
  return cloudFun('getActivityList', data)
}

/**
 * 创建活动
 * @param {*} data
 */
export const postActivity = (data = {}) => {
  return cloudFun('postActivity', data)
}
