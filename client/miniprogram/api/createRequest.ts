import request from '../utils/request'
interface API_SPACE {
  [propName: string]: any;
}
function createRequest(apis:API_SPACE = {}):API_SPACE {
  const apiList:API_SPACE = {}
  Object.keys(apis).forEach((key: string) => {
    apiList[key] = (options: any) => {
      const { data = {} } = options
      return request.request({
        ...apis[key],
        data
      })
    }
  })
  return apiList
}

export default createRequest