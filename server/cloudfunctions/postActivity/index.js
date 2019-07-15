/**
 * 创建活动
 */
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 一般第一个验证是否必填，必填只需要 message，选填需要 defaultValue
// 第二个是其他类型，比如 range 范围 使用 >= 或 <= 判断
// 第三个是关联型，比如最大人数不能小于最小人数
const validForm = {
  // 标题
  title: [
    {
      require: true,
      message: '未填写活动标题',
    },
  ],
  // 最小参与人数
  minUserCount: [
    {
      defaultValue: 2,
    },
    {
      range: [2, 20],
      message: '最小参与人数在 2 - 20 之间',
    },
    {
      relation: 'maxUserCount',
      validFunction: (currentValue, targetValue) => currentValue <= targetValue,
      message: '最小参与人数不能大于最大参与人数',
    },
  ],
  // 最大参与人数
  maxUserCount: [
    {
      defaultValue: 10,
    },
    {
      range: [2, 20],
      message: '最大参与人数在 2 - 20 之间',
    },
    {
      relation: 'minUserCount',
      validFunction: (currentValue, targetValue) => currentValue >= targetValue,
      message: '最大参与人数不能小于最小参与人数',
    },
  ],
  // 开始时间
  startTime: [
    {
      require: true,
      message: '未选择活动开始时间',
    },
    {
      relation: 'endTime',
      validFunction: (currentValue, targetValue) => currentValue < targetValue,
      message: '开始时间必须小于结束时间',
    },
  ],
  // 结束时间
  endTime: [
    {
      require: true,
      message: '未选择活动结束时间',
    },
    {
      relation: 'startTime',
      validFunction: (currentValue, targetValue) => currentValue > targetValue,
      message: '结束时间必须大于开始时间',
    },
  ],
  // 地址
  address: [
    {
      require: true,
      message: '未填写活动地址',
    },
  ],
  // 详情
  detail: [
    {
      require: true,
      message: '未填写活动描述',
    },
  ],
}

/**
 * 是否是 undefined
 * @param {*} val
 */
function isUndefined(val) {
  return typeof val === 'undefined'
}

/**
 * 检查数据是否争取
 * @param {*} data
 */
function checkFormValid(params, validForm) {
  const data = {}

  for (const key in validForm) {
    if (Object.prototype.hasOwnProperty.call(validForm, key)) {
      const opts = validForm[key]
      // 传入的值
      const value = params[key]

      // 取出每一个验证器
      for (let i = 0; i < opts.length; i++) {
        const { require, defaultValue, range, relation, validFunction, message } = opts[i]
        // 输出的值
        const currentValue = data[key]

        // 当前值未设置
        if (isUndefined(currentValue)) {
          // 必填 && 传入值是 undefined 抛错
          if (require && isUndefined(value)) {
            return {
              error: {
                message,
              },
            }
          }
          // 选填 && 传入值是 undefined
          if (!isUndefined(defaultValue) && isUndefined(value)) {
            data[key] = defaultValue
          } else {
            data[key] = value
          }
        }

        // 校验范围和关联
        if (
          (range && (currentValue > range[1] || currentValue < range[0])) ||
          (relation && !isUndefined(data[relation]) && !validFunction(currentValue, data[relation]))
        ) {
          return {
            error: {
              message,
            },
          }
        }
      }
    }
  }

  return {
    data,
  }
}

// 云函数入口函数
exports.main = async (event, context) => {
  const { data, error } = checkFormValid(event, validForm)

  if (error) {
    return {
      error,
    }
  }

  try {
    return await db.collection('activities').add({
      data: {
        ...data,
        activityId: Date.now(),
        createTime: db.serverDate(),
        // 0 待开始 1 进行中
        status: 0,
      },
    })
  } catch (error) {
    return {
      error,
    }
  }
}
