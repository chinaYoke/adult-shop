<template>
  <aside class="aside">
      <ul>
          <li v-for="(k,i) in datas">
              <router-link :to="{}">
              </router-link>
          </li>
      </ul>
  </aside>
</template>

<script>
export default {
    props:['datas']
}
</script>

<style>

</style>
