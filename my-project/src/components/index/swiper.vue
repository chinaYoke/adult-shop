<template>
  <mt-swipe :auto="4000">
   <mt-swipe-item v-for="k in swiperData" :key="k.id">
          <img :src="k.imgpath">
    </mt-swipe-item>
  </mt-swipe>
  <!-- <mt-swipe :auto="4000">
    <mt-swipe-item><img src="http://img4.imgtn.bdimg.com/it/u=1665207864,746409922&fm=27&gp=0.jpg"/></mt-swipe-item>
    <mt-swipe-item><img src="http://img4.imgtn.bdimg.com/it/u=1665207864,746409922&fm=27&gp=0.jpg"/></mt-swipe-item>
    <mt-swipe-item><img src="http://img4.imgtn.bdimg.com/it/u=1665207864,746409922&fm=27&gp=0.jpg"/></mt-swipe-item>
    </mt-swipe> -->
</template>
<script>
export default{
    props:['swiperData']
}
</script>
<style lang="less" scoped>

.mint-swipe {
  width: 100%;
  height:50vw;
  a,img {
    display: block;
    width: 100%;
    height:100%;
  }
}
</style>
