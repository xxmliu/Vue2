<template>
  <div>
    <div>
    <!-- views/Request.vue -->
    <h2>测试Axios的使用方法</h2>
    <button @click="getMovies()">GET请求,加载电影列表</button>
    &nbsp;&nbsp; | &nbsp;&nbsp; 
    <input v-model="keyword" type="text" placeholder="请输入关键字">
    <button @click="getMoviesLike()">Post请求查询电影</button>
    <hr>

    <h2>测试封装MyAxios的使用方法</h2>
    <button @click="getMoviesMyAxios()">GET请求,加载电影列表</button>
    &nbsp;&nbsp; | &nbsp;&nbsp; 
    <input v-model="keywored" type="text" placeholder="请输入关键字">
    <button @click="getMoviesLikeMyAxios()">Post请求查询电影</button>
    <hr>

    <h1>查询结果</h1>
    <div class="header" style="font-weight:bold;">
      <div class="cover">封面图片</div>
      <div class="title">标题</div>
      <div class="actor">主演</div>
      <div class="showingon">上映时间</div>
      <div class="type">电影类型</div>
      <div class="duration">电影时长</div>
    </div>
    <!-- 表格行 -->
    <div class="header" v-for="item in movies" :key="item.id">
      <div class="cover">
        <router-link :to="`/movie/detail?id=${item.id}`">
          <img width="80px" :src="item.cover" alt="">
        </router-link>
      </div>
      <div @click="$router.push('/movie/detail/'+item.id)" class="title">{{item.title}}</div>
      <div class="actor">{{item.star_actor}}</div>
      <div class="showingon">{{item.showingon}}</div>
      <div class="type">{{item.type}}</div>
      <div class="duration">{{item.duration}} 分钟</div>
    </div>


  </div>
  </div>
</template>

<script>
import axios from 'axios'
import myaxios from '../http/MyAxios'

  export default {
    data() {
      return {
        movies: [],   // 用于保存需要显示的电影列表
        keyword: '',  // 与关键字输入框完成双向数据绑定
        keywored: '', // 与关键字输入框完成双向数据绑定
      }
    },

    methods: {
      // 基于myaxios发送get请求，加载电影详情
      getMoviesMyAxios() {
        let url = 'https://api.88-hao.top/movie-infos'
        let params = {page:1, pagesize:20}
        myaxios.get(url,params).then(res => {
          console.log(res);
          this.movies = res.data.data.result
        })
      },

      // 基于myaxios发送post请求，通过关键字查询电影
      getMoviesLikeMyAxios() {
        if(!this.keywored)return
        let url = 'https://api.88-hao.top/movie-infos/name'
        let params = {page:1, pagesize:20, name:this.keywored}
        myaxios.post(url, params).then(res => {
          console.log(res);
          this.movies = res.data.data.result
        })
      },


      // 发送get请求，加载电影详情
      getMovies() {
        // 创建Axios实例
        let instance = axios.create()
        instance({
          url:'https://api.88-hao.top/movie-infos',
          method: 'GET',
          params: {page:1, pagesize:20}
        }).then(res => {
          console.log(res);
          this.movies = res.data.data.result
        })
      },

      // 发送post请求，通过关键字查询电影
      getMoviesLike(){
        // 如果没有关键字，则直接返回
        if(!this.keyword){  return; }
        // 否则 发送post请求，模糊查询结果
        let instance = axios.create()
        instance({
          url:'https://api.88-hao.top/movie-infos/name',
          method:'POST',
          data: 'page=1&pagesize=20&name=' + this.keyword
        }).then(res => {
          console.log(res);
          this.movies = res.data.data.result
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

input {
  border: none;
  width: 200px;
  height: 30px;
  border-radius: 6px;
  border: 1px solid #000;
}

button{
  border: none;
  border-radius: 6px;
  height: 30px;
  background-color: orange;
  color: #fff;
  cursor: pointer;

  &:active{
    opacity: 0.4;
  }
}
  .header {
    display: flex;
    width: 80%;
    margin: 0px auto;
    padding: 10px 0px;
    align-items: center;
    border-bottom: 1px solid #ccc;
    cursor: pointer;

    .cover { width: 150px; }
    .title { flex: 1;}
    .actor { width: 250px; }
    .showingon { width: 150px; }
    .type { width: 200px; }
    .duration { width: 150px; }
}
</style>