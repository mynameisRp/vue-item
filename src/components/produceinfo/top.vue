<template>
    <div id = "app">
         <img src="../../../public/menu-menu.png" alt="" id = "img_left">
         <img src="../../../public/no-favorite.png" alt="" id = "img_right">
          <div id = "content">
          <swiper v-if="images">
               
              <swiper-slide v-for="(item, index) in images" :key="index"><img :src="item" alt=""></swiper-slide>
              
              
            
            </swiper>
          </div>
    </div>
</template>

<style scoped>
    *{
      margin:0;
      padding:0
    }
      #app{
        position:relative
      }
     #img_left , #img_right{
       width:1rem;
       height:1rem;
       z-index:1000
     }
     #img_left {
       position:absolute;
       top:0;
       left:0.18rem
     }
     #content {
       width:100%;
       height:100%;
       padding:0 0.0001rem
     }
     #img_right {
      position:absolute;
       top:0;
       right:0.18rem
     }
     #pic_ul {
       width:max-content;
     }
     #pic_ul  li {
        float: left;
        margin-left:0.31rem
     }
     .clearfix:after {
                content: " ";
                display: block;
                height: 0;
                clear: both;
            }
</style>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperslide } from 'vue-awesome-swiper'
import Vuex from 'vuex'
import {get} from './get'
export default {
  
  components: {
    swiper,
    swiperslide,
    
  },
  computed: {
    ...Vuex.mapState({
      images:state=>state.produceinfo.produce.images
    })
  },
  created() {
    console.log(this.$route.params)
    this.$nextTick(()=>{
     var url = 'app/product/'+this.$route.query.id
          get(url).then((res)=>{
              this.getproduceMutations(res.data)
          })
    })
  },
  
  methods: {
    ...Vuex.mapActions({
      getproduce:'produceinfo/getproduce'
    })
    ,
    ...Vuex.mapMutations({
      getproduceMutations:'produceinfo/getproduce'
    })
  },
  data(){
    return {
     
    }
  }
}
</script>