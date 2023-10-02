# 什么是Vue

​		Vue是一套构建用户界面的**渐进式的MVVM架构**，Vue的核心是为了解决数据的绑定问题，为了开发大型页面（SPA）和组件化，所以Vue的核心思想就是数据驱动和组件化。

# MVVM架构

- **model层：**业务层，js代码，不如data里的响应式数据，methods里的方法。

- **view层：**视图层，html和css代码,用户可以看见的。

- **viewModel层：**视图模型层，Vue框架帮忙做的，处理数据和DOM的联动，常说的双向数据绑定。

  <u>**优点：它能够将应用程序的不同部分分离开来，使得代码更加清晰、易于维护和扩展。**</u>

​		MVVM架构思想是一种将应用程序分为三个部分的设计模式，即模型（Model）、视图（View）和视图模型（ViewModel）。其中，模型代表应用程序的数据和业务逻辑，视图代表用户界面，而视图模型则是连接模型和视图的桥梁，负责处理视图的展示逻辑和用户交互，并将用户的操作反馈到模型中。这种架构思想的优点在于，它能够将应用程序的不同部分分离开来，使得代码更加清晰、易于维护和扩展。在Vue.js中，采用了MVVM架构思想，将模型和视图通过双向数据绑定的方式进行连接，而视图模型则由Vue.js框架自动生成，从而使得开发者能够更加专注于业务逻辑的实现，而不必过多关注界面的细节  。

# Vue中的事件绑定  

在js表达式中可以直接访问vue对象的data中声明的变量，也可以进行数据的运算、方法的调用。Vue在背后做了大量的工作，通过声明式的语法（在data中声明变量），实现在页面中直接通过 {{}} 语法引用data变量。**并且data**中定义的这些变量将拥有响应式的特点（一旦**data**中变量的值有变化，**Vue**将操作关联的**DOM**元素，自动更新UI）

```html
<div>{{ js表达式 }}</div>
```

```html
<div id="app">
  <h1>电影详情</h1>
  <img :src="url" alt="" width="150px">
  <h3>电影名称：{{ name }}</h3>
  <h3>电影主演：{{ actors.join('/') }}</h3>
  <h3>电影类型：{{ type }}</h3>
  <h3>电影上映日期：{{ showingon }}</h3>
  <input 
         @focus="inputType = 'text'" 
         @blur=" inputType = 'password'" 
         :type="inputType" 
         placeholder="请输入验证码">
  <hr>
  <button @click="clickBtn1()">坚如磐石</button>
  <button @click="clickBtn2()">奥本海默</button>
</div>
<script>
  // 创建Vue对象，管理 #app，动态设置文本内容
  let vm = new Vue({
    data: {
      url:'https://p0.pipi.cn/mmdb/fb738633be1b128d3357e2418539bafea3dbb.jpg?imageView2/1/w/464/h/644',
      name:'坚如磐石',
      actors: ['雷佳音', '张国立', '于和伟'],
      type: '动作 悬疑 剧情',
      showingon: '2023-09-28',
      inputType: 'password'
    },
    methods: {
      clickBtn1(){
        // this就是new出来的Vue对象，可以直接修改其属性
        // data中声明的属性具有响应式的特点，所以当属性被修改
        // 页面内容将自动更新
        this.url = 'https://p0.pipi.cn/mmdb/fb738633be1b128d3357e2418539bafea3dbb.jpg?imageView2/1/w/464/h/644'
        this.name = '坚如磐石',
          this.actors = ['雷佳音', '张国立', '于和伟'],
          this.type = '动作 悬疑 剧情',
          this.showingon = '2023-09-28'
      },
      clickBtn2(){
        this.url = 'https://p0.pipi.cn/mmdb/fb738633537f2a8ea38ea34efb781c44a0ea1.jpg?imageView2/1/w/464/h/644'
        this.name = '奥本海默',
          this.actors = ['基里安·墨菲', '小罗伯特·唐尼', '弗洛伦斯·皮尤'],
          this.type = '剧情 传记 历史',
          this.showingon = '2023-08-30'
      }
    },
    el: '#app'
  })
</script>
```

# Vue中元素属性的动态绑定  

一旦为属性添加了 :(v-bind:)，那么vue在解析该标签时，将会把该属性当做是动态属性，此时双引号中的
代码将被解析为js代码段，vue会把js代码段的返回值设置给标签的属性值

```html
<input 
   @focus="inputType = 'text'" 
   @blur=" inputType = 'password'" 
   :type="inputType" 
   placeholder="请输入验证码"
 />
```

```js
data: {
  inputType: 'password'
},
```

# 动态修改class类名  

```html
<div @click="activeIndex=0" :class="activeIndex == 0 ? 'active' : ''">介绍</div>
<div @click="activeIndex=1" :class="activeIndex == 1 ? 'active' : ''">演职人员</div>
<div @click="activeIndex=2" :class="activeIndex == 2 ? 'active' : ''">奖项</div>
<div @click="activeIndex=3" :class="activeIndex == 3 ? 'active' : ''">图集</div>
```

```js
data: {
	activeIndex: 0,  // 描述激活项的下标
},
```

# 动态的修改style属性  

```html
<div class="tabs">
  <div @click="activeIndex=0" :class="activeIndex == 0 ? 'active' : ''">介绍</div>
  <div @click="activeIndex=1" :class="activeIndex == 1 ? 'active' : ''">演职人员</div>
  <div @click="activeIndex=2" :class="activeIndex == 2 ? 'active' : ''">奖项</div>
  <div @click="activeIndex=3" :class="activeIndex == 3 ? 'active' : ''">图集</div>
</div>

<div :style="`display:${activeIndex == 0 ? 'block' : 'none'};`">介绍的具体内容</div>
<div :style="`display:${activeIndex == 1 ? 'block' : 'none'};`">演职人员的具体内容</div>
<div :style="{display:activeIndex==2 ? 'block' : 'none'}">奖项的具体内容</div>
<div :style="{display:activeIndex==3 ? 'block' : 'none'}">图集的具体内容</div>
```

```js
data: {
  activeIndex: 0,  // 描述激活项的下标
},
```

# v-show

vue指令：控制元素true或者false（显示或者隐藏）

```html
<div v-show="activeIndex == 0">介绍的具体内容</div>
<div v-show="activeIndex == 1">演职人员的具体内容</div>
<div v-show="activeIndex == 2">奖项的具体内容</div>
<div v-show="activeIndex == 3">图集的具体内容</div>
```

```js
data: {
  activeIndex: 0,  // 描述激活项的下标
},
```

# 脚手架开发VUE-CLI

```bash
# 命令名称 安装 全局 安装包的名字
npm i -g @vue/cli
# 查看安装版本
vue --version
# 生成项目包
vue create vue-pro(文件名)
```

当脚手架启动时，将会打开 public/index.html ，并且在该网页中运行 main.js ，将会创建 Vue 对象，通过Vue 对象来管理 index.html 中的 #app 内容的显示。初始化状态下，默认将 App.vue 组件中的内容渲染到#app 中，从而看到页面效果 。

# vue-router路由

引入官方的vue-router路由模块，定义路由组件（在routes中使用component进行映射组件，用name导航到对应路由），创建router实例，传入routes配置，在里面定义路由模式history，最后在App.vue中使用router-link跳转并且设置路由占位符。

```js
import Vue from 'vue'
// 1.引入官方路由模块
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexView from '../views/IndexView.vue'

Vue.use(VueRouter)

// 2.在routes中使用component进行映射组件，用name导航到对应路由
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

// 3.创建router实例，传入routes配置，在里面定义路由模式history
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
```

# Vue的常用指令  

**当vue加载template时，发现元素的属性时v-开头的属性，就会当做是vue指令来处理。常用的指令有：**  

1. v-on 绑定事件
2. v-bind 绑定属性
3. v-show 动态显示或隐藏元素
4. v-text 显示文本
5. v-html 解析并显示html代码
6. v-pre 原样显示{{}}
7. v-for 循环输出多个当前元素
8. v-if 判断
8. v-model 双向数据绑定  

# v-for的用法

v-for指令用于循环输出当前元素。例如：  

```html
<p v-for="items in names" :key="items">{{ items }}</p>
```

```js
data() {
  return {
    names: ["paopao", "liangliang", "xiaoxin", "xiaoming"],
  };
},
```

# :key 的作用  

v-for指令一般都需要配一个v-bind:key指令（简写 :key）来为当前的每一个列表项分配一个唯一的标识符，目的是为了提高列表更新时的DOM渲染性能。  

如果列表中已经包含很多列表项了，后续由于列表数据的变化需要重新渲染列表时，将会通过:key来检测当前需要渲染的列表项以前是否已经渲染过（比较列表项的key是否在原始列表中已经存在），如果已经渲染过，则不在重建DOM，只需要更新UI即可。  

# computed计算属性

**computed计算属性**是vue提供了一种特殊的属性。

- 计算属性本质上是一个函数，返回通过数据计算之后得到的结果。在template中可以当做普通属性来进行访问。如果计算所需要的变量发生了变化，则将立即影响计算属性的结果，UI也会立即更新。
- computed计算得到的结果将会被vue缓存。如果下次使用计算属性时，计算属性的结果不变，则直接使用缓存的值（不会重新执行方法进行运算）。 只有在计算属性所依赖的变量有变化时，才会重新执行计算属性进行运算。  

使用时，当做普通属性来用：  

```html
<span>{{ totalPrice }}</span>
```

```js
{
  data(){},
  methods:{},
   computed: { // 计算属性 声明在此处
     totalPrice() { // 计算总价格并return
       let total = 0
       this.cartInfo.forEach(item=>{
         total += item.count * item.price
       })
       return total
     }
   },
}
```

# v-model 双向数据绑定

实现name变量与文本框输入的值之间的双向数据绑定：  

- 如果用户在输入框中输入内容（修改value），则data中的name变量将会更新 。
- 如果程序使用js将data中的name变量进行修改，则文本框中的内容也会发生改变 。

```html
<input type="text" placeholder="请输入文本" v-model="name">
<button>提交表单</button>
```

```js
data(){
  return {
    name: ''
  }
}
```

# watch监听器

watch是vue为了更好的监控所管的变量，提供的数据监听器。通过watch就可以监听data中声明的数据的动态变化。一旦data中变量值有变化，就会触发监听器，执行相应的监听方法 。

```js
data(){
  return {
    name: ''
  }
},
watch: { // 监听器
  // 该监听方法将会在data中的name属性变化时，自动被调用
  // 并且自动传入两个参数： （新值, 旧值）
  name(newValue, oldValue){
    // ....
}
```

# 表单组件的双向数据绑定

```vue
<template>
  <div>
    <h3>用户注册</h3>
    <hr />
    用户账号：<input type="text" v-model="form.username" />
    <p>{{ errorMsg.userMsg }}</p>
    <hr />
    用户密码：<input type="password" v-model="form.password" />
    <p>{{ errorMsg.pwdMsg }}</p>
    <hr />
    注册手机：<input type="text" v-model="form.phone" />
    <p>{{ errorMsg.phoneMsg }}</p>
    <hr />
    注册邮箱：<input type="text" v-model="form.email" />
    <p>{{ errorMsg.emailMsg }}</p>
    <hr />
    选择性别：
    <input value="男" type="radio" v-model="form.gender" /> 男
    <input value="女" type="radio" v-model="form.gender" /> 女
    <hr />
    选择爱好:
    <input value="健身" type="checkbox" v-model="form.hobby" /> 健身
    <input value="游泳" type="checkbox" v-model="form.hobby" /> 游泳
    <input value="拉丁" type="checkbox" v-model="form.hobby" /> 拉丁
    <hr />
    选择籍贯：
    <select v-model="form.pro">
      <option value="河南省">河南省</option>
      <option value="河北省">河北省</option>
      <option value="山东省">山东省</option>
      <option value="山西省">山西省</option>
    </select>
    <hr />
    <button @click="btn()">注册</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "test",
        password: "",
        phone: "",
        email: "",
        gender: "", // 性别
        hobby: ['游泳','健身'],  // 爱好 多选框空数组
        pro: '山西省',    // 籍贯
      },
      errorMsg: {
        userMsg: "",
        pwdMsg: "",
        phoneMsg: "",
        emailMsg: "",
      },
    };
  },
  methods: {
    btn() {
      console.log(this.form);

      let user = /\b[a-zA-Z0-9]{6,15}\b/;
      if (user.test(this.form.username)) {
        this.errorMsg.userMsg = "";
      } else {
        this.errorMsg.userMsg = "用户名格式不正确";
      }

      // let pwd = /\d{6}/
      // if(pwd.test(this.form.password)){
      //   this.errorMsg.pwdMsg = ''
      // }else{
      //   this.errorMsg.pwdMsg = '密码格式不正确'
      // }

      let reg = /^1[3-9]\d{9}$/;
      if (reg.test(this.form.phone)) {
        this.errorMsg.phoneMsg = "";
      } else {
        this.errorMsg.phoneMsg = "手机号格式不正确";
      }

      let ema = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (ema.test(this.form.email)) {
        this.errorMsg.emailMsg = "";
      } else {
        this.errorMsg.emailMsg = "邮箱格式不正确";
      }
    },
  },

  watch: {
    "form.password": function (newValue, oldValue) {
      console.log(newValue);
      if (newValue.length == 6) {
        // 表单验证
        if (/\d{6}/.test(newValue)) {
          this.errorMsg.pwdMsg = ""; // 清空错误消息
        } else {
          this.errorMsg.pwdMsg = "格式不正确";
        }
      } else {
        this.errorMsg.pwdMsg = ""; // 清空错误消息
      }
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  color: red;
}
</style>
```

# v-if

v-if 与 v-show 的区别？

- v-if控制一个dom元素是否输出
- v-show控制一个dom元素是否显示

如果在页面中频繁的操作dom树（dom节点频繁的新增与删除），肯定会影响页面性能。所以如果对于需要频繁切换显示或隐藏状态的dom元素应该使用v-show。

```html
<div v-if="boolean表达式"></div>
<div v-else-if="boolean表达式"></div>
<div v-else-if="boolean表达式"></div>
<div v-else-if="boolean表达式"></div>
<div v-else></div>
```

# 自定义指令

vue官方已经提供了很多内置指令，来操作当前dom元素。与此同时，vue还提供一种自定义指令的写法，可以让程序员自己设计指令来完成对dom的操作  

```html
<h2 v-red>电影详情</h2>
```

```js
// 自定义指令
directives: {
  red: {
    // 一旦含有v-red指令的dom元素被插入到dom树中，执行该方法
    // 传入的el就是绑定了v-red指令的dom对象
    inserted (el) {
      el.style.color = 'red'
    }
  }
}
```

# Axios

https://api.88-hao.top/movie-infos?page=1&pagesize=20

axios是一个网络通信库。封装了原生的ajax，提供了一些简单的api（基于promise语法）方便的发送http、https请求 。

```js
import axios from 'axios'      // 引入axios
let instance = axios.create()  // 创建axios实例
```

发送get请求

```js
instance({
  url: '请求路径 http://localhost:3000',
  method: 'GET',
  params: {page:1, pagesize:20}
}).then(res=>{}) // 请求成功后执行 .then
  .catch(err=>{}) // 请求失败后执行 .catch
```

发送post请求

```js
instance({
  url: '请求路径 http://localhost:3000',
  method: 'POST',
  data: 'page=1&pagesize=20&name=熊猫'
}).then(res=>{}) // 请求成功后执行 .then
  .catch(err=>{}) // 请求失败后执行 .catch
```

