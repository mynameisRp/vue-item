<template>
    <div id = "api">
      <Top/> 
      <Producetitle/>
      <Info/>
      <Bottom/>
    </div>
</template>

<style scoped>
    #api{
       overflow:hidden
    }
</style>

<script>
import Top from './top'
import Bottom from './bottom'
import Producetitle from './producetitle'
import Info from './info'
export default {
    components:{
        
        Top,
        Producetitle,
        Info,
        Bottom
        
    }
}
</script>
