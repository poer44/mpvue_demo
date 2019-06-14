<template>
  <div class="divrow">
    <div class="titlespan">
      <span class="title">测试123</span>
      <span class="smalltitle">先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。
宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。</span>
    </div>
    <div class="imgdiv">
     <img src="../../static/images/user.png">
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .divrow {
    border-bottom: 1px solid gray;
    height: 180rpx;
    width: 100%;
    padding: 30rpx;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }

  .title {
    font-size: 40rpx;
    font-weight: bold;
  }

  .smalltitle {
    font-size: 30rpx;
    color: #a7a7a7;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }

  .imgdiv {
    flex-grow: 0;
    width: 120rpx;
    height: 120rpx;
  }
  .imgdiv img{
    width: 120rpx;
    height: 120rpx;
  }

  .titlespan {
    display: flex;
    flex-direction: column;
  }
</style>
