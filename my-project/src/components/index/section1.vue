<template>
   <section class="section1">
    <ul class="section1-list">
        <li v-for="k in section1" :key="k.id">
            <text>{{k}}</text>
        </li>
    </ul>
  </section>
</template>

<script>
export default {
    props:['section1']
}
</script>

<style>

</style>

 