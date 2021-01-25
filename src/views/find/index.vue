<template>
  <div id="find">
    <Goods/>
    <Findtop/>
    <findcontent/>
  </div>
</template>

<script>
import Goods from '@components/find/goods';
import Findtop from '@components/find/findtop';
import findcontent from '@components/find/findcontent';
export default {
    name:'findpage',
    components:{
      Goods,
      Findtop,
      findcontent
      }
   
}
</script>

<style scoped>
  #find{
    font-size:.26rem;
    padding-bottom: 1rem;
  }
</style>
