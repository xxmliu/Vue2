<template>
  <div>
    <p v-for="items in names" :key="items">{{ items }}</p>
    <hr />
    <h2>电影详情</h2>
    <div class="movies" v-for="items in movies" :key="items.id">
      <img :src="items.url" alt="" />
      <div>
        <span>{{ items.name }}</span>
        <b>{{ items.score }}</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: ["paopao", "liangliang", "xiaoxin", "xiaoming"],
      movies: [
        {
          id: 1001,
          name: "坚如磐石",
          score: "9.0",
          url: "https://p0.pipi.cn/mmdb/fb738633be1b128d3357e2418539bafea3dbb.jpg?imageView2/1/w/464/h/644",
        },
        {
          id: 1001,
          name: "奥本海默",
          score: "9.9",
          url: "https://p0.pipi.cn/mmdb/fb738633537f2a8ea38ea34efb781c44a0ea1.jpg?imageView2/1/w/464/h/644",
        },
        {
          id: 1001,
          name: "莫斯科行动",
          score: "8.8",
          url: "https://p0.pipi.cn/mmdb/fb7386dd2c9ddd1789af3325d7d2c9e0b5212.jpg?imageView2/1/w/464/h/644",
        },
        {
          id: 1001,
          name: "无间道",
          score: "9.7",
          url: "https://p0.pipi.cn/mmdb/25bfd65151bc690e13537c2009444a0c511b2.jpg?imageView2/1/w/464/h/644",
        },
        {
          id: 1001,
          name: "爸爸的谎言",
          score: "9.1",
          url: "https://p0.pipi.cn/mmdb/fb7386dd7a3dddecd850c862922c80eb1cce2.jpg?imageView2/1/w/464/h/644",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.movies{
  display: inline-block;
  margin: 10px;
  border-radius: 6px;
  box-shadow: 2px 2px 2px #ccc;

  &:hover{
    box-shadow: 3px 3px 3px #999;
  }

  >img{
    width: 200px;
    border-radius: 6px 6px 0 0;
  }
  >div{
    display: flex;
    height: 25px;
    line-height: 25px;
    justify-content: center;
    position: relative;

    >span{
      position: absolute;
      left: 5%;
    }

    >b {
      position: absolute;
      color: orange;
      right: 5%;
    }
  }
}
</style>
