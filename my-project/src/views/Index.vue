<template>
  <div class="index">
      <v-search></v-search>
      <v-swiper :swiperData="datas.swiper"></v-swiper>
  </div>
</template>
<script>
import Search from '@/components/index/search.vue'
import Swiper from '@/components/index/swiper.vue'

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
  },
  beforeCreate() {

    this.$api({
      method: 'post',
      url: '/index'
    }).then((response) => {
      this.datas = response.data;
    }).catch(function(error) {
      alert(error)
    })
  }
}
</script>
<style>

</style>
