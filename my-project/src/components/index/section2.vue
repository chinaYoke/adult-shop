<template>
  <section>
      <ul class="section-ul">
          <li v-for="k in section2" :key='k.id'>
              <router-link :to="{name:'详情页'}">
                  <img v-lazy='k.thumbnail_pic_s'/>
              </router-link>
              <p class="section-title">{{k.author_name}}</p>
          </li>
      </ul>
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui';

  export default {
    props:['section2']

  }
</script>

<style lang="less" scoped>
 @import '../../assets/common.less';
  @import '../../assets/index/style.css';
.section-ul{
  overflow-x: auto;
    width: 100%;
      /*原生滑动*/
    -webkit-overflow-scrolling: touch;
     display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    // margin-left: 6vw;
    li{
       margin-right: 10vw;
       img{
           width:26vw;
       }
       .section-title{
           text-align: center;;
       }
    }
}
</style>
