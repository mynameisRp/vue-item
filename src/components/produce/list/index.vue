<template>
    <div>
       
       <listTop />
       <list/>
       <listNav/>
       <listContent/>
    </div>
</template>


<script>
import list from './list'
import listTop from './listTop'
import listNav from './listnav'
import listContent from './listContent'
import Vuex from 'vuex'
export default {
   components:{
        list,
        listTop,
        listNav,
        listContent
    },
}
</script>