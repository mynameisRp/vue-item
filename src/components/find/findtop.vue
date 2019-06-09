<template>
    <div id="findtop">       
        <ul class="myheader">           
            <router-link to="findcontent" tag="li">随便晒单</router-link>        
            <router-link to="coverstory" tag="li">封面故事</router-link>         
        </ul>  
        <router-view>
           
        </router-view>  
        
    </div>
</template>

<script>
import Vuex from 'vuex'
import findcontent from '@components/find/findcontent'
import coverstory from '@components/find/coverstory'
export default{
    name:"findtop",
    data(){
        return {
            flag:'true'
        }
    },
    components:{
      findcontent,
      coverstory
    }
}
</script>

<style scoped>
    #findtop{ 
        position: fixed; 
        top: 0;
        left: 0; 
        background:white;
       
         
    }   
    .myheader{ 
       
        width: 7.5rem;
        height:.88rem; 
        display:flex;
        padding:0 2.08rem;  
    }
    .myheader>li{   
        flex:1; 
        font-weight:900;
        height:.88rem;
        font-size:.34rem;
        text-align: center;
        margin-top:.3rem;
    }   
    .carts-icon{
        width:.36rem;
        height:.36rem;
        position:absolute;
        left:6rem;
        top:.05rem;
    }
    .router-link-active{
        color:#dd4f14;
    }
</style>