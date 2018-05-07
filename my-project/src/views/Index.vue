<template>
  <div class="index">
      <v-search></v-search>
      <v-swiper :swiperData="ListShow"></v-swiper>
      <v-section1 :section1="ListShow.title"></v-section1>
  </div>
</template>
<script>
import Search from '@/components/index/search.vue'
import Swiper from '@/components/index/swiper.vue'
import Section1 from '@/components/index/section1.vue'
import api from '@/axios/api.js'

export default {
  components:{
      'v-search':Search,
      'v-swiper':Swiper,
      'v-section1':Section1
  },
  data() {
    return {
      ListShow: '',
      loading:true
    }
  },
  beforeCreate() {
    //请求轮播图
     api.JH_news('/news/index', 'type=top&key=123456')
      .then(res => {
        console.log(res);
        this.ListShow = res.articles;

      });
  }
}

</script>
<style>

</style>
