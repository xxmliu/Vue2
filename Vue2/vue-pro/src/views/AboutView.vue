<template>
  <div>
    <button @click="doClick()">跳转到cart</button>
  </div>
</template>

<script>
  export default {
    methods: {
      doClick() {
        this.$router.push('/cart')
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
