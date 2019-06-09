<template>
  <div id="find">
    <Goods/>
    <Findtop/>
   
    <TabBar/>
    
  </div>
</template>

<script>
import Goods from '@components/find/goods';
import Findtop from '@components/find/findtop';
import findcontent from '@components/find/findcontent';
import TabBar from '@common/tabBar';
export default {
    name:'findpage',
    components:{
      Goods,
      Findtop,
      findcontent,
      TabBar
      }
   
}
</script>

<style scoped>
  #find{
    font-size:24px;
  }
</style>
