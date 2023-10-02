import axios from 'axios'
// qs模块可以将对象转换为查询字符串,里面的stringify方法可以将一个json对象直接转为(以?和&符连接的形式)
import qs from 'qs'

// 创建Axios实例
const instance = axios.create()

const myaxios = {

  /**
   * 基于 axios 发送 get 请求，返回Promise对象
   * @param {string} url    请求资源路径
   * @param {object} params 请求资源
   */
  get(url, params) {
    return instance({ 
      url, 
      params, 
      method: 'GET' 
    })
  },

  /**
   * 基于 axios 发送 post 请求
   * @param {string} url    请求资源路径
   * @param {object} params 请求资源
   */
  post(url, params) {
    return instance({ 
      url, 
      //qs模块里面的stringify方法可以将一个json对象直接转为(以?和&符连接的形式)
      data: qs.stringify(params), 
      method: 'POST' 
    })
  }
}

export default myaxios