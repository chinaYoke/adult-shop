<template>
  <div class="index">
      <v-search></v-search>
      <v-swiper :swiperData="datas.pics"></v-swiper>
      <v-section1 :section1="datas.infos"></v-section1>
  </div>
</template>
<script>
import Search from '@/components/index/search.vue'
import Swiper from '@/components/index/swiper.vue'
import Section1 from '@/components/index/section1.vue'
// import index from '@/http/mock.js' //模拟数据
export default {
  components:{
      'v-search':Search,
      'v-swiper':Swiper,
      'v-section1':Section1
  },
  data() {
    return {
      datas: '',
      loading:true
    }
  },
  beforeCreate() {
    //请求轮播图片
   this.$http.get('seller').then((response) => {
      this.datas = response.data.data;
      console.log(response)
    }).catch(function(error) {
      alert(error)
    })
  }
}
</script>
<style>

</style>
