<template>
    <div>
          <div id = "info" v-if='produceContent[0]'>
            <div id = "infotop" class="box">
                <h2>商品详情</h2>
                <div class="title" v-for="(item, index) in produceContent[0].modules" :key="index">
                    <div v-if="item.type == 'TEXT'">{{item.text}}</div>
                    <img v-else-if="item.type == 'IMAGE'" :src = "item.image.src">
                </div>
            </div>
            <div class = 'box'>
              <h3>{{produceContent[1].title}}</h3>
              <div v-for="(item, index) in produceContent[1].modules" :key="index">
                  <div v-if="item.type == 'TEXT'">{{item.text}}</div>
                  <img v-else-if="item.type == 'IMAGE'" :src = 'item.image.src'>
              </div>
            </div >
            <div class = 'box'>
                <h3>{{produceContent[2].title}}</h3>
                <div v-for="(item, index) in produceContent[2].modules" :key="index">
                  <div v-if="item.type == 'TEXT'">{{item.text}}</div>
                  <img v-else-if="item.type != 'LINK'" :src = 'item.image.src'>
              </div>
            </div>
            <div class = 'box'>
                <h3>{{produceContent[3].title}}</h3>
                <div v-for="(item, index) in produceContent[3].modules" :key="index">
                  <div v-if="item.type == 'TEXT'">{{item.text}}</div>
                  <img v-else-if="item.type != 'LINK'" :src = 'item.image.src'>
              </div>
            </div>
            <div class = 'box'>
                <h3>{{produceContent[4].title}}</h3>
                <div v-for="(item, index) in produceContent[4].modules" :key="index">
                  <div v-if="item.type == 'TEXT'">{{item.text}}</div>
                  <img v-else-if="item.type != 'LINK'" :src = 'item.image.src'>
              </div>
            </div>
       </div>
    </div>
</template>


<style>
      #info {
      margin:0 0.37rem;
      padding-bottom:1.2rem; 
    }
    #infotop h2 {
      margin-top:1rem;
      color:#dd4f14
    }
    .box {
      padding:0.2667rem  0;
      border-bottom:1px solid #ccc
    }
    #infotop .title  div {
      font-size:0.28rem;
      padding:0.2667rem 0
    }
    .box img {
      margin-top:0.2667rem
    }
    .box div {
      margin-top:0.2667rem;
      font-size:.28rem;
    }
</style>


<script>
import Vuex from 'vuex'
import {get} from './get'
export default {
    computed: {
      ...Vuex.mapState({
        produceContent:state=>state.produceinfo.produceContent
      })
    },
    created(){
      this.$nextTick(()=>{
            var id = ""
            if(this.$route.params.id){
                id = this.$route.params.id
                sessionStorage.setItem("produceId", JSON.stringify(this.$route.params.id))
            } else{
             id =  JSON.parse(sessionStorage.getItem('produceId'))
             }
              var url2 = 'app/product/'+id +'/details?legacy=false'
              get(url2).then((res)=>{
            
            this.getproduceContent(res.data.details)
        });
      })
    },
    methods: {
      ...Vuex.mapActions({
          getproducemore:'produceinfo/getproducemore'
      }),
      ...Vuex.mapMutations({
        getproduceContent:'produceinfo/getproduceContent'
      })
    },
}
</script>