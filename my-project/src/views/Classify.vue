<template>
    <div>
        <mt-header title="商品分类">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <v-left :datas="classifyData"></v-left>
        <v-footer></v-footer>
    </div>
</template>

<script>
import Left from '@/components/classify/left.vue';
import Footer from '@/common/footer.vue';
import api from '@/axios/api.js';
export default {
    components:{
        'v-footer':Footer,
        'v-left':Left
    },
    data(){
        return{
            classifyData:''
        }
    },
    created(){
        api.JH_news('/news/index', 'type=top&key=123456')
        .then(res => {
            console.log(res);
            this.classifyData = res.articles;

        }).catch((error)=>{
            console.log(error)
        });
    }
}
</script>

<style>

</style>
