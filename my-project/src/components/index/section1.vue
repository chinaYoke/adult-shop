<template>
   <section class="section1">
       <h1>促销商品</h1>
    <ul class="section1-list">
        <li v-for="k in section1" :key="k.id">
          <router-link :to="{name:'详情页'}" :key="k.id">
              <img v-lazy="k.thumbnail_pic_s"/>
          </router-link>
        </li>
    </ul>
    <!-- <router-link :to="{ name: '详情页'}"  class="section1-banner">
     <img v-lazy="section1.banner" v-if='section1'>
    </router-link> -->
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui';
export default {
    props:['section1']
}
</script>

<style lang="less" scoped>
@import '../../assets/common.less';
@import '../../assets/index/style.css';
    .section1{
        background:#fff;
        margin-top: 6vw;
        h1{
            text-align: center;
            margin-bottom: 6vw;
        }
        .section1-list{
            display: -ms-flex;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -ms-flex-pack: distribute;
            justify-content: space-around;

            li{
                width: 45%;
                height:50vw;
                img{
                    width: 100%;
                     display: block;
                }
            }
        }
        .section1-banner {
            display: block;
            width: 100vw;
            img {
                width: 100%;
                height: 24vw;
            }
            }
    }
</style>

 