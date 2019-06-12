<template>
  <div class="top">
    <div class="search_input" @click="goSearch"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      goSearch (ev) {
        const url = '../searchbar/main'
        mpvue.navigateTo({url})
      }
    }
  }
</script>

<style scoped>
  .top {
    width: 100%;
    height: 90rpx;
    background-color: #3F8ECA;
  }

  .search_input {
    border-radius: 10rpx;
    height: 70rpx;
    margin-left: 10rpx;
    margin-right: 10rpx;
    background-color: #fff;
    opacity: 0.8;
    box-sizing: border-box;
  }
</style>
