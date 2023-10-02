<template>
  <div class="person">
    <img :src="avatar" alt="" />
    <div>{{ name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String, // 用于约束参数类型 必须传递String过来
      required: true, // 用于约束参数必填
    },
    avatar: {
      type: String,
      required: true,
    },
  }
};
</script>

<style lang="scss" scoped>
.person {
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
