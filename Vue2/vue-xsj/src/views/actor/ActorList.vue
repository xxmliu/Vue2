<template>
  <div>
    <!-- Index.vue -->

    <!-- 模糊搜索的表单 -->
    <el-form :inline="true" @submit.native.prevent>
      <el-form-item label="姓名：">
        <el-input 
          @keyup.native.enter="search" 
          v-model="name" 
          placeholder="请输入演员姓名关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="search" type="primary">查询</el-button>
      </el-form-item>
    </el-form>
    <el-divider content-position="left">演员列表</el-divider>

    <!-- 输出查询结果 -->
    <person v-for="item in actors" :key="item.id"
      :name="item.actor_name"
      :avatar="item.actor_avatar">
    </person>
  </div>
</template>

<script>
import Person from '@/components/Person.vue'
import axios from 'axios'
  export default {
  components: { Person },
    data() {
      return {
        name:'',
        actors: [],
      }
    },
    methods: {
      listActors() {
        let instance = axios.create()
        instance({
          url: 'https://api.88-hao.top/movie-actors',
          method:'GET',
          params: {page:1,pagesize:100}
        }).then(res => {
          console.log(res);
          this.actors = res.data.data
        })
      },
      search(){
        let instance = axios.create()
        instance({
          url: 'https://api.88-hao.top/movie-actors/name',
          method:'POST',
          data: 'name=' + this.name
        }).then(res => {
          console.log(res);
          this.actors = res.data.data
        })
      }
    },
    mounted () {
      this.listActors()
    },
  }
</script>

<style lang="scss" scoped>

</style>