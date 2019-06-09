<template>
    <div id="naked" style="display:block;"> 
         
        <div class="storylist" @scroll="reloadadd($event)">
            <div class="items"  v-for="(ele,index) in storyList" :key="index">               
                <div class="img-box" style="height: 501.682px;">
                    <img width="344" height="463.07692307692304" style="top: 38.6047px;" :src="ele.titleImage.src">
                </div> 
                <div class="info-box">
                    <p class="title">{{ele.title}}</p>
                </div>             
            </div>           
        </div>        
    </div>
</template>

<script>
import Vuex from 'vuex'
    export default{ 
        name:"naked",
        
        created () {
            this.storygetList();
            
        },
        computed: {
            ...Vuex.mapState({
                storyList:state=>state.findpage.storyList
            })
        },
        methods: {
            ...Vuex.mapActions({
                storygetList:"findpage/storygetList",
                reloadadd:"findpage/reloadadd"
            })
            
              
        }
    }
</script>

<style scoped>
    #naked{
        width:100%;
        height:100%;
        
    }
    ::webkit-scrollbar{
        width:0;
        height:0;
        color:transparent;
    }
    .storylist{
        width:100%;
        height:1410px;
        padding:.9rem 0 ;  
        overflow:auto;
    }
    .items{
        width:3.44rem;
        height:5.8rem;
        float:left;
        margin-left:.2rem;
        
    }
    .img-box{
        margin-bottom: .22rem;
        width:100%;
        height:100%;
    }
     .img-box>img{

       position:relative;
       
    }
    .info-box>.title{
        font-weight: 700;
        font-size: .25rem;
        font-size:#2b2b2b;
        margin-bottom: .38rem;
    }
    .img-box .img {
        position:relative;
    }
</style>