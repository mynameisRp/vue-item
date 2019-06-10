<template>
    <div id="covertitle">
        <ul class="nav-list">
            <router-link to="coverstory" tag="li" style="margin-left:.3rem;" >全部
                <span class="line"></span>
            </router-link>
            <router-link to="basthome" tag="li" @click="changestate()">BEAST HOME</router-link>
            <router-link to="bastfloral" tag="li">BEAST FLORAL</router-link>
            <router-link to="littleb" tag="li">LITTLE B</router-link>
            <router-link to="tbh" tag="li">T-B-H</router-link>
            <router-link to="naked" tag="li" style="margin-right:.4rem;">NAKED BEAST</router-link>
        </ul>
        <router-view>
           
        </router-view>
    </div>
     
</template>

<script>
import Vuex from 'vuex'
import coverstory from '@components/find/coverstory'
import basthome from '@components/find/basthome'
import bastfloral from '@components/find/bastfloral'
import littleb from '@components/find/littleb'
import tbh from '@components/find/tbh'
import naked from '@components/find/naked'
export default {
    name:"covertitle",
    
    methods: {
        
    },
    components:{
       basthome,
       coverstory,
       bastfloral,
       littleb,
       tbh,
       naked
    }
}
</script>

<style scoped>
    #covertitle{
        clear:both;
        height:.7rem;
       width:7.5rem;
        position:fixed;
        top:.88rem;
        left:0;
        z-index:5;
        background:white;
        width:7.5rem;
        overflow-x:scroll;
       
       
    }
    .nav-list{
        clear:both;
        height:.7rem;
        border-bottom:.01rem solid #e1e1e1;
        width:max-content;
        white-space:nowrap;
          
         
    }
    .nav-list>li{
        color: #000;
        font-weight: 700;
        font-size:.27rem;
        float:left;
        margin-left:.8rem;
        
        
    }
</style>