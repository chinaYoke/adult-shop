<template>
  <mt-swipe :auto="4000">
   <mt-swipe-item v-for="k in swiperData" :key="k.id">
          <img :src="k.thumbnail_pic_s">
    </mt-swipe-item>
  </mt-swipe>
  
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
