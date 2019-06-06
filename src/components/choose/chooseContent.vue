<template>
    <div>
        <div id = "content">
            <div id = "content_left">
                <ul>
                    
                    <li v-for="(item, index) in lista" :key="index" :class="index==routerIndex?active:''"
                   @click="getRouteindex(index,$event)"><span v-if="item.data">{{item.data.title}}</span></li>
                </ul>
            </div>
            <div id = "content_right">
                <chooseMore/>
            </div>
        </div>
    </div>
</template>
<script>
import  Vuex from 'vuex'


import chooseMore from './chooseMore'

export default {
     computed: {
      ...Vuex.mapState({
        lista:state=>state.choose.chooseList.modules,
        routerIndex:state=>state.choose.routerIndex
      })
    },
    created(){
       this.$nextTick(()=>{
         this.getChooseIndex()
       })
       
       
    },
   
   
  
    methods: {
        ...Vuex.mapActions({
            getChooseIndex:'choose/getChooseIndex',
           
        }),
        ...Vuex.mapMutations({
           getRouteIndex:'choose/getRouteIndex'
        })
        ,
        getRouteindex(index,e){
          var parent = e.target.parentNode ;
          this.getRouteIndex(index)
        }
           
    },
   
    data(){
      return {
          chooseList:[],
          b:123,
          active:'active',
          flag:true
      }
    },
    components:{
      chooseMore
    }
}
</script>


<style  scpoed>
     #content{
      width:100%;
      height:11.3rem;
      display: flex;
      padding-top:0.1818rem
      /* display: flex;
      flex-direction: row;
      flex-wrap: nowrap */
    }
    #content_left {
      float: left;
      width:2.5rem;
      background-color: #fff;
      padding:0.1818rem 0.3636rem;
      height:12rem;
      
    }
    #content_left ul li {
      margin-top:0.1818rem;
      font-size: 0.3273rem;
      font-weight: bolder ;
      color:#000;
      height:0.7rem;
      font-family: Helvetica Neue,Helvetica,sans-serif
    }
    #content_left ul .active {
      font-size: 0.4rem;
      font-weight: 900;
      border-bottom:0.0545rem solid #000;
      display:inline-block
    }
    #content_right {
        width:5.2364rem;
        height:100%;
        background-color: #fff;
        overflow:auto
      
    }
</style>