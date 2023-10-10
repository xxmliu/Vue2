<template>
  <div>
    <!-- Index.vue -->

    <!-- 模糊搜索的表单 -->
    <el-form :inline="true" @submit.native.prevent>
      <el-form-item label="姓名：">
        <el-input 
          @keyup.native.enter="search" 
          v-model="name" 
          placeholder="请输入导演姓名关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="search" type="primary">查询</el-button>
      </el-form-item>
    </el-form>
    <el-divider content-position="left">导演列表</el-divider>

    <!-- 输出查询结果 -->
    <person v-for="item in director" :key="item.id"
      @delete="deleteActor(item.id)"
      :name="item.director_name"
      :avatar="item.director_avatar">
    </person>
  </div>
</template>

<script>
import Person from '@/components/Person.vue'
import httpApi from '@/http/index'

  export default {
  components: { Person },
    data() {
      return {
        name:'',
        director: [],
      }
    },
    methods: {
      listdirector() {
        httpApi.directorApi.queryAllDirector().then(res => {
          console.log(res);
          this.director = res.data.data
        })
      },
      listdirectorByName(){
        httpApi.directorApi.queryByNameLike({name:this.name}).then(res => {
          console.log(res);
          this.director = res.data.data
        })
      },
      search() {
        if(this.name.trim()){
          this.listdirectorByName()
        }else{
          this.listdirector()
        }
      },
      deleteActor(id){
        this.$confirm('此操作将永久删除该导演, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(res => {
          httpApi.directorApi.delete({id})
            .then(res => {
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
      this.listdirector()
    },
  }
</script>

<style lang="scss" scoped>

</style>