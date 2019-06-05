<template>
  <div id="app">
    <router-view />
    <TabBar v-if="this.$route.meta.tabFlag"/>
  </div>
</template>

<script>
import TabBar from "@common/tabBar"
import Vuex from "vuex"
export default {
  name:"App",
  components: {
    TabBar
  }
}
</script>


<style scoped>




</style>
