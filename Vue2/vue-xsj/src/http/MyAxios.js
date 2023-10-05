// 封装HTTP请求
import axios from 'axios'
// 将对象转为查询字符串
import qs from 'qs'

let instance = axios.create()

let myaxios = {

  /**
   * @param {String} url 请求地址
   * @param {Object} params 请求参数
   * @return {Promise}
   */
  get(url, params) {
    return instance({
      url,
      method:'GET',
      params
    })
  },

  /**
   * @param {String} url 请求地址
   * @param {Object} params 请求参数
   * @return {Promise}
   */
  post(url, params) {
    return instance({
      url,
      method:'POST',
      data: qs.stringify(params)
    })
  }
}

export default myaxios