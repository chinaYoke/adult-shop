<template>
  <div class="index">
      <v-search></v-search>
      <v-swiper :swiperData="ListShow"></v-swiper>
      <v-section1 :section1="ListShow"></v-section1>
      <v-section2 :section2="ListShow"></v-section2>
      <v-baseline></v-baseline>
      <v-footer></v-footer>
  </div>
</template>
<script>
import Search from '@/components/index/search.vue'
import Swiper from '@/components/index/swiper.vue'
import Section1 from '@/components/index/section1.vue'
import Section2 from '@/components/index/section2.vue'
import Baseline from '@/common/baseline.vue'
import Footer from '@/common/footer.vue'
import api from '@/axios/api.js'

export default {
  components:{
      'v-search':Search,
      'v-swiper':Swiper,
      'v-section1':Section1,
      'v-section2':Section2,
      'v-footer':Footer,
      'v-baseline':Baseline
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
