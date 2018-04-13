<template>
  <div class="index">
      <v-search></v-search>
      <v-swiper :swiperData="datas.swiper"></v-swiper>
  </div>
</template>
<script>
import Search from '@/components/index/search.vue'
import Swiper from '@/components/index/swiper.vue'
// import index from '@/http/mock.js' //模拟数据
export default {
  components:{
      'v-search':Search,
      'v-swiper':Swiper
  },
  data() {
    return {
      datas: '',
      loading:true
    }
  }
}
</script>
<style>

</style>
