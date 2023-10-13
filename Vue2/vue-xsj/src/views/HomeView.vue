<template>
  <div>
    <el-container style="height: 100vh">
      <el-aside class="aside" :style="{width:`${isCollapse?65:240}px`, transition: '0.4s'}">
        <el-menu 
          router
          default-active="index"
          background-color="#345"
          text-color="#bbb"
          :style="{height: '100vh'}"
          :collapse="isCollapse"
          class="el-menu-vertical-demo">
          <el-menu-item>
            <img width="30px" src="../assets/logo.svg" alt="">
            <template slot="title">
              <span style="font-size: 1.2em; color:#efefef; font-weight: bold;">&nbsp;&nbsp;新世纪影城后台管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/home/index">
            <i class="el-icon-message"></i>
            <template slot="title">
              首页
            </template>

            <!-- 演员管理 -->
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">演员管理</span>
            </template>
            <el-menu-item index="/home/actor-list/1">
              <i class="el-icon-notebook-2"></i>
              <span slot="title">演员列表</span>
            </el-menu-item>
            <el-menu-item index="/home/actor-add">
              <i class="el-icon-plus"></i>
              <span slot="title">新增演员</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导演管理</span>
            </template>
            <el-menu-item index="/home/director-list">
              <i class="el-icon-notebook-2"></i>
              <span slot="title">导演列表</span>
            </el-menu-item>
            <el-menu-item index="/home/director-add">
              <i class="el-icon-plus"></i>
              <span slot="title">新增导演</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header class="header">
          <i v-show="!isCollapse" class="el-icon-s-fold" @click="isCollapse=true"></i>
          <i v-show="isCollapse" class="el-icon-s-unfold" @click="isCollapse=false"></i>

          <div v-if="user">
            <i class="el-icon-user"></i>
            <span>{{ user.nickname }}</span>
            &nbsp;|&nbsp;
            <i class="el-icon-phone-outline"></i>
            <span>{{ user.phone }}</span>
            &nbsp;|&nbsp;
            <i class="el-icon-message"></i>
            <span>{{ user.email }}</span>
          </div>

          <div v-else>
            <span>未登录</span>
          </div>

        </el-header>

        <el-main>
          <!-- 二级占位符 -->
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  // 如下写法，this.user就是vuex中state里的user
  // computed:mapState(['user','token'])
  computed: {
    ...mapState(['user', 'token']),
  },

  methods: {
    // 以下写法相当于将vuex的mutations中声明的updateUser方法引入
    // 调用this.updateUser(参数对象),即可执行vuex中的mutations
    ...mapMutations(['updateUser'])
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;

  i {
    font-size: 1.3em;
  }
}
.aside::-webkit-scrollbar {
  display: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
  }
</style>
