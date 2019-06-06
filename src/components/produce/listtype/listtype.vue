<template>
    <div>
        <listTop/>
        
        <listnav/>
        <listtypeContent/>
    </div>
</template>

 

 <script>
 import listTop from './listTop'
 import listnav from './listnav'
 import listtypeContent from './listtypecontent'
 import List from './list'
 export default {
     components:{
         listTop,
         listnav,
         listtypeContent,
         List
     }
 }
 </script>