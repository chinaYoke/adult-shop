<template>
    <mt-search  v-model="value" cancel-text="取消" 
    placeholder="搜索您想要的商品">
    </mt-search>
</template>
<script>
import { Search } from "mint-ui";

Vue.component(Search.name, Search);
export default {};
</script>
