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
    <person v-for="item in actorsData.actors" :key="item.id"
      @delete="deleteActor(item.id)"
      :name="item.actor_name"
      :avatar="item.actor_avatar">
    </person>

    <el-pagination
      class="paging"
      background
      layout="prev, pager, next"
      :total="actorsData.total"
      @current-change="handleCurrentChange"
      :current-page="actorsData.page"
      :page-size="actorsData.pagesize"
    >
    </el-pagination>

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
        actorsData: {
          // 当前页
          page: this.$route.params.page ? 
                  parseInt(this.$route.params.page) : 1,  
          pagesize: 100,    // 每页多少条
          actors: [],     // 演员列表
          total: 1000       // 一共有多少条
        },
      }
    },
    methods: {


      handleCurrentChange(e){
        console.log('变化:',e);
        this.$router.push(`/home/actor-list/${e}`)
        this.actorsData.page = e
        this.search()
      },

      // submit(){
      //   // 初始化第一页
      //   if(this.$route.path != '/home/actor-list'){
      //     this.$router.push(`/home/actor-list`)
      //   }
      //   this.moviesData.page = 1 
      //   this.search()
      // },


      listActors() {
        let params = {
          page: this.actorsData.page,
          pagesize: this.actorsData.pagesize
        }
        httpApi.actorApi.queryAllActors(params).then(res => {
          console.log(res);
          this.actorsData.actors = res.data.data
        })
      },
      listActorsByName(){
        httpApi.actorApi.queryByNameLike({name:this.name}).then(res => {
          console.log(res);
          this.actorsData.actors = res.data.data
        })
      },
      search() {
        if(this.name.trim()){
          this.listActorsByName()
        }else{
          this.listActors()
        }
      },
      deleteActor(id){
        this.$confirm('此操作将永久删除该演员, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(res => {
          httpApi.actorApi.delete({id})
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
      this.listActors()
    },
  }
</script>

<style lang="scss" scoped>
.paging{
  text-align: center;
}

</style>