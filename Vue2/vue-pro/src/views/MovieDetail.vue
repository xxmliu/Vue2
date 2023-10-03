<template>
  <div>
    <h3>通过$route.query传递的id参数：{{ $route.query.id }}</h3>
    <h3>通过$route.params传递的id参数：{{ $route.params.id }}</h3>
    <h2>电影详情</h2>
    <hr>

      <img :src="movie.cover" alt="" width="150px" />
      <h3>电影名称：{{ movie.title }}</h3>
      <h3>电影主演：{{ movie.star_actor }}</h3>
      <h3>电影类型：{{ movie.type }}</h3>
      <h3>电影上映日期：{{ movie.showingon}}</h3>
      <h3>电影简介：{{ movie.description }}</h3>
  </div>
</template>

<script>
import myaxios from '@/http/MyAxios';
export default {
  data() {
    return {
      movie:{}
    };
  },
  methods: {
    
  },
  mounted () {
    let id = this.$route.query.id || this.$route.params.id
    let url = 'https://api.88-hao.top/movie-info/query'
    let params = {id}
    myaxios.get(url, params).then(res => {
      console.log(res);
      this.movie = res.data.data
    })
  },
};
</script>

<style lang="scss" scoped>
h2 {
  color: red;
}
</style>
