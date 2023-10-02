<template>
  <div>
    <!-- views/Actors.vue -->
    <button @click="getActors">加载演员列表</button>
    <hr>
    <person 
      v-for="item in actors" 
      :key="item.id" 
      :name="item.actor_name" 
      :avatar="item.actor_avatar">
    </person>
    <!-- <MyPerson></MyPerson>
    <my-person></my-person> -->
    
    <!-- <div class="item" 
        v-for="item in actors" :key="item.id">
      <img :src="item.actor_avatar" alt="">
      <div>{{item.actor_name}}</div>
    </div> -->

  </div>
</template>

<script>
import Person from '../components/Person.vue';
import myaxios from '../http/MyAxios'

export default {
  // components 用于声明当前组件所使用的子组件
  components: { 
    // 组件名（标签名）：组件对象
    Person: Person,   //简写：Person
    MyPerson: Person
  },
  
  data() {
    return {
      actors: [], // 保存演员列表数据
    }
  },
  methods: {
    getActors() {
      let url = "https://api.88-hao.top/movie-actors"
      let params = {page:3, pagesize:100}
      myaxios.get(url, params).then(res=>{
        console.log(res)
        this.actors = res.data.data
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: inline-block;
  margin: 0px 10px 10px 0px;

  img {
    width: 90px;
  }
  div {
    font-size: 0.9em;
  }
}
</style>