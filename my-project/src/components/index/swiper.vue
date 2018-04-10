<template>
  <mt-swipe :auto="4000">
   <mt-swipe-item v-for="k in swiperData" :key="k.id">
        <router-link :to="{ name: '详情页'}">
          <img :src="k.imgPath">
        </router-link>
    </mt-swipe-item>
  </mt-swipe>
</template>
<script>
export default{
    props:['swiperData']
}
</script>
<style>

</style>
