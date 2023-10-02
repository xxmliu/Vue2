<template>
  <div class="counter">
    <button :disabled="n <= min" @click="n--">-</button>
    <span>{{ n }}</span>
    <button :disabled="n >= max" @click="n++">+</button>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Number,
        default: 1,
      },
      min: {
        type: Number,
        default: 1,
      },
      max: {
        type: Number,
        default: 10,
      }
    },
    data() {
      return {
        n: this.value,
      }
    },
  }
</script>

<style lang="scss" scoped></style>