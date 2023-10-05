import myaxios from '../MyAxios'
import BASE_URL from '../BaseURL'

const XSJURL = BASE_URL.XSJURL

const adminApi = {
  login(params){
    let url = XSJURL + '/user/login'
    return myaxios.post(url, params)
  }
}
export default adminApi