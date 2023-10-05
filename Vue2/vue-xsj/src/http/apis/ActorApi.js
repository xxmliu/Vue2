import myaxios from "../MyAxios";
import BASEURL from "../BaseURL";

const XSJURL = BASEURL.XSJURL

const actorApi = {

  queryByNameLike(params){
    let url = XSJURL + "/movie-actors/name";
    return myaxios.post(url, params);
  },

  queryAllActors(){
    let url = XSJURL + "/movie-actors";
    return myaxios.get(url, {page:1, pagesize:100});
  },

  delete(params){
    let url = XSJURL + "/movie-actor/del";
    return myaxios.post(url,params)
  },
  
}

export default actorApi