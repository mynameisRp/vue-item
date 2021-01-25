<template>
    <div>
        <div id= 'list' class="swiper-container">
            
            <ul class = 'clearfix swiper-wrapper element'>
                
                    
                    
                        <li v-for="(item, index) in list" :key="index"
                        :class="index==listIndex?active:''"
                        class='swiper-slide'
                        @click='listgetOthers(item,index)'
                        >{{item.title}}</li>
                    
            
            </ul>
          
        </div>
    </div>
</template>


<style scoped>
        #list {
          width:100%;
          height:0.6667rem;
          margin-top:0.2rem;
          overflow: hidden;
        }
        #list ul {
          padding:0 0.3rem;
          overflow:auto;
          width:100%
        }
        #list ul li {
          float: left;
          list-style-type:none; 
          font-size:0.28rem;
          font-weight: 500;
          line-height:0.4rem;
          margin:0 0.1rem
        }
        .clearfix:after {
                content: ".";
                display: block;
                height: 0;
                clear: both;
        }
       #list ul .active {
          font-weight:900;
          
        }
        .swiper-slide{
          width:15%
        }
         .element::-webkit-scrollbar {display:none}
                html {
            overflow-y: scroll;
          }

          :root {
            overflow-y: auto;
            overflow-x: hidden;
          }

          :root body {
            position: absolute;
          }

          body {
            width: 100vw;
            overflow: hidden;
          }
        .swiper-slide {
          width:15%
        }
</style>

<script>

import Vuex from 'vuex'
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
import { swiper, swiperslide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperslide,
    
  },
   computed:{
        ...Vuex.mapState({
          list:state=>state.producelist.navList,
          listIndex:state=>state.producelist.listIndex
        })
    },
    data(){
      return{
        active:'active',
        
      }
    },
    created(){
        if(this.$route.params.cateTitle){
          this.getNav(this.$route.params)
        }else{
          this.getNavList()
        }
        console.log(1111)
        
        
    },
    beforeMount() {
      this._initSwiper()
    },
    methods:{
        ...Vuex.mapActions({
            getNav:'producelist/getNav',
            getOthers:'producelist/getOthers'
        }),
        ...Vuex.mapMutations({
            changeListIndex:'producelist/changeListIndex',
            getNavList:'producelist/getNavList'
        }),
        listgetOthers(item,index){
            this.changeListIndex(index)
            this.getOthers(item)
        },
        _initSwiper(){
         var mySwiper = new Swiper('.swiper-container',{
            freeMode : true,
            freeModeMomentum : false,
            

            })
        }
    }
}
</script>