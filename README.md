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

