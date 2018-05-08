<template lang='html'>
  <footer >
      <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1">
         <i slot="icon" class="icon-home"></i>
            首页
        </mt-tab-item>
        <mt-tab-item id="tab2">
             <i slot="icon" class="icon-list"></i>
           分类
        </mt-tab-item>
        <mt-tab-item id="tab3">
             <i slot="icon" class="icon-man-woman"></i>
            去拼团
        </mt-tab-item>
        <mt-tab-item id="tab4">
            <i slot="icon" class="icon-user"></i>
           个人中心
        </mt-tab-item>
        </mt-tabbar>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  @import '../assets/common.less';
  @import '../assets/index/style.css';

</style>

