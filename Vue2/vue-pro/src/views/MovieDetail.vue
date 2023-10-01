<template>
  <div>
    <h2>电影详情</h2>
    <img :src="movie.url" alt="" width="150px" />
    <h3>电影名称：{{ movie.name }}</h3>
    <h3>电影主演：{{ movie.actors.join("/") }}</h3>
    <h3>电影类型：{{ movie.type }}</h3>
    <h3>电影上映日期：{{ movie.showingon }}</h3>
    <button @click="next">换一部</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie:{
        url: "https://p0.pipi.cn/mmdb/fb738633be1b128d3357e2418539bafea3dbb.jpg?imageView2/1/w/464/h/644",
        name: "坚如磐石",
        actors: ["雷佳音", "张国立", "于和伟"],
        type: "动作 悬疑 剧情",
        showingon: "2023-09-28",
      },
      
    };
  },
  methods: {
    next(){
      this.movie = {
        url : 'https://p0.pipi.cn/mmdb/fb738633537f2a8ea38ea34efb781c44a0ea1.jpg?imageView2/1/w/464/h/644',
        name : '奥本海默',
        actors : ['基里安·墨菲', '小罗伯特·唐尼', '弗洛伦斯·皮尤'],
        type : '剧情 传记 历史',
        showingon : '2023-08-30'
      }
    }
  },
};
</script>

<style lang="scss" scoped>
h2 {
  color: red;
}
</style>
