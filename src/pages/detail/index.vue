<template>
  <div>
    <swiper class="mainimg" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
      <block v-for="(item, index) in pictures" :index="index" :key="key">
        <swiper-item>
          <img :src="item.url" class="slide-image" mode="aspectFill"/>
        </swiper-item>
      </block>
    </swiper>
    <div class="maintext">
      <p class="title">{{data.name}}</p>
      <p class="sale">月销量：0</p>
      <p class="money">￥{{data.fmoney}}/天</p>
      <p class="detail" v-html="data.word">
      </p>
      <div class="bottom">
        <button @click="buynow" class="buybtn">马上下单</button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    computed: {},
    mounted () {
      const _this = this
      _this.id = _this.$root.$mp.query.id
      this.$http.get('/api/selectOne', {id: _this.id}).then((d) => {
        _this.data = d.data
      }).catch(err => {
        console.log(err)
      })
    },
    methods: {
      buynow () {
        wx.navigateTo({
          url: '../order/main'
        })
      }
    },
    data: {
      pictures: [{url: 'https://poer44.xyz/static/images/test.jpg'}, {url: 'https://poer44.xyz/static/images/test2.jpg'}],
      id: '',
      data: {name: '', word: '', fmoney: '0.0'}
    }
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

