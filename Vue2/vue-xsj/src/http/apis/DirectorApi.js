import myaxios from "../MyAxios";
import BASE_URL from "../BaseURL";

const XSJURL = BASE_URL.XSJURL

const directorApi = {
  queryByNameLike(params){
    let url = XSJURL + "/movie-directors/name";
    return myaxios.post(url, params);
  },

  queryAllDirector(){
    let url = XSJURL + "/movie-directors";
    return myaxios.get(url, {page:1, pagesize:100});
  },

  delete(params){
    let url = XSJURL + "/movie-director/del";
    return myaxios.post(url,params)
  },

  upload(params){
    let url = XSJURL + "/movie-director/add";
    return myaxios.post(url, params)
  }
}

export default directorApi