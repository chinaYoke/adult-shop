<template lang='html'>
  <!-- gotoRouter:点击后路由跳转到与id名相同的route.name所对应的路径 -->
  <footer @click.stop='gotoRouter' >
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="首页">
         <i slot="icon" class="icon-home"></i>
            首页
        </mt-tab-item>
        <mt-tab-item id="分类">
             <i slot="icon" class="icon-list"></i>
           分类
        </mt-tab-item>
        <mt-tab-item id="正在拼">
             <i slot="icon" class="icon-man-woman"></i>
            去拼团
        </mt-tab-item>
        <mt-tab-item id="个人中心">
            <i slot="icon" class="icon-user"></i>
           个人中心
        </mt-tab-item>
        </mt-tabbar>
  </footer>
</template>

<script>
export default {
    methods:{
        gotoRouter(){
            this.$router.push({
                name:this.selected
            })
        }
    },
    data(){
        return {
            selected:''
        }
    },
    mounted(){
         //获取当前路由名称，根据该名称给当前footer添加is-selected
      let Rname = this.$route.name;
      switch (Rname) {
        case '首页':
          this.selected = '首页';
          break;
        case '分类':
          this.selected = '分类';

          break;
        case '正在拼':
          this.selected = '去拼团';

          break;
        case '个人中心':
          this.selected = '个人中心';
          break;
      }
    }
}
</script>

<style lang="less" scoped>
  @import '../assets/common.less';
  @import '../assets/index/style.css';

</style>

