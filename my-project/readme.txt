1.vue-cli环境搭建
2.在view层里面存在子组件，components里面放公共的；
3.安装less,修改配置文件,进行文字的适配;
4.安装mint ui ;如果引入樣式
5.vuex一直報錯；其实是因为export default 原因，在build 里面注释下文字
6.注意区分export  export default的区别。 
export与export default均可用于导出常量、函数、文件、模块等，
你可以在其它文件或模块中通过import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用，
export default仅有一个导入的时候没有花括号   
export、import在一个文件中可以有多个 导入的时候带花括号
7.axios应用，请求响应拦截器；api.js  用来封装axios
8.mock.js模拟数据安装;Mock is not defined;失败