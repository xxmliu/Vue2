import myaxios from "../MyAxios";
import BASEURL from "../BaseURL";

const XSJURL = BASEURL.XSJURL

const actorApi = {

  queryByNameLike(params){
    let url = XSJURL + "/movie-actors/name";
    return myaxios.post(url, params);
  },

  queryAllActors(params){
    let url = XSJURL + "/movie-actors";
    return myaxios.get(url, params);
  },

  delete(params){
    let url = XSJURL + "/movie-actor/del";
    return myaxios.post(url,params)
  },

  upload(params){
    let url = XSJURL + "/movie-actor/add"
    return myaxios.post(url, params)
  }
  
}

export default actorApi