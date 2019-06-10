<template>
    <div id="covers-story" > 
        <covertitle/>
        <div class="storylist"  style="display:block;">
            <div class="items"  v-for="(ele,index) in storyList" :key="index">               
                <div class="img-box" >
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
import covertitle from '@components/find/covertitle'
    export default{ 
        name:"coverstory",
        
        mounted() {
            this.storygetList();
           
        },
        
        components:{
            covertitle
        },
        computed: {
            ...Vuex.mapState({
                storyList:state=>state.find.storyList,
                num:state=>state.find.num
            })
        },
        methods: {
            ...Vuex.mapActions({
                storygetList:"find/storygetList",
                reloadadd:"find/reloadadd"
            })
           
              
        }
        
    }
</script>

<style scoped>
    #covers-story{
       
        
    }
    ::webkit-scrollbar{
        width:0;
        height:0;
        color:transparent;
    }
    .storylist{
        width:100%;
        height:1410px;
        padding:1.57rem 0 ;  
        overflow:auto;

    }
    .items{
        width:3.44rem;
        height:6rem;
        float:left;
        margin-left:.2rem;
        
    }
    .img-box{
        margin-bottom: .22rem;
       
        
        
    }
    .info-box>.title{
        font-weight: 700;
        font-size: .25rem;
        font-size:#2b2b2b;
        margin-bottom: .38rem;
    }
    .img-box img {
       
        width:3.44rem;
        height:5.01rem;
    }
</style>