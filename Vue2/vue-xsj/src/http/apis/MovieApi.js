import myaxios from "../MyAxios";
import BASE_URL from "../BaseURL";

const XSJURL = BASE_URL.XSJURL

const movieApi = {
  /**
   * 分页查询所有电影
   * @param {object} params { page: xxx, pagesize: xxx }
   * @returns Promise
   */
  queryAllMovie(params){
    let url = XSJURL + '/movie-infos'
    return myaxios.get(url,params)
  },

  /**
   * 根据电影名称模糊查询所有电影
   * @param {object} params { name: xxx  }
   * @returns Promise
   */
  queryByName(params){
    let url = XSJURL + '/movie-infos/name'
    return myaxios.post(url,params)
  },

  /**
   * 根据id删除电影
   * @param {object} params { id: x }
   * @returns 
   */
  delete(params){
    let url = XSJURL + '/movie-info/del'
    return myaxios.post(url,params)
  }

}

export default movieApi