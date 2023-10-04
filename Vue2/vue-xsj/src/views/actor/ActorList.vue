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
      @delete="deleteActor(item.id, $event)"
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
      listActorsByName(){
        let instance = axios.create()
        instance({
          url: 'https://api.88-hao.top/movie-actors/name',
          method:'POST',
          data: 'name=' + this.name
        }).then(res => {
          console.log(res);
          this.actors = res.data.data
        })
      },
      search() {
        if(this.name.trim()){
          this.listActorsByName()
        }else{
          this.listActors()
        }
      },
      deleteActor(id,e){

        this.$confirm('此操作将永久删除该演员, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(res => {
            let instance = axios.create()
            instance({
              url:'https://api.88-hao.top/movie-actor/del',
              method: 'POST',
              data: 'id='+id
            }).then(res => {
              console.log(res);
              if(res.data.code==200){
                this.search()
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              }
            })
          }).catch(res => {
              this.$message({
                  type: 'info',
                  message: '已取消删除'
                }); 
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