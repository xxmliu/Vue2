import httpApi from '@/http'
import Vue from 'vue'
import Vuex from 'vuex'
import { Message } from 'element-ui';
import router from '@/router'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
  },
  mutations: {
    updateUser(state,payload){
      state.user = payload
    }
  },
  actions: {
    login(state,params){
      httpApi.adminApi.login(params).then(res => {
        if( res.data.code == 200){
          state.commit('updateUser',res.data)
          Message.success({
            showClose: true,
            message: '恭喜您登陆成功，欢迎来到新世纪影城',
            type: 'success'
          })
          router.replace('/home/index')
        }else{
          Message.error({
            showClose: true,
            message: res.data.msg,
            type: 'error'
          })
        }
      })
    }
  },
  modules: {
  }
})
