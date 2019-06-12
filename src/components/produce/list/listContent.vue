<template>
    <div>
        <div id = 'content'>
           <ul class='clearfix'>
             <li v-for="(item, index) in producelist" :key="index" @click="toproduce(item)">
               <img :src="item.featureImage" alt="">
               <div id = "produceinfo">
                  <div class='producetitle'>{{item.monthSendDistType}}</div>
                  <div class='producetitle'>{{item.name}}</div>
                  <div></div>
                  <span>
                      <span class = "symbol">￥</span>
                      <span class = "symbol">{{item.price|getPrice}}</span>
                      <span class='decimal'>{{item.price|getPriceSmall}}</span>
                  </span>
               </div>
             </li>
           </ul>
        </div>
    </div>
</template>


<style scoped>
    
        #content ul li {
          width:3.6rem;
          height:auto;
          font-size: .35rem;
          float:left;
          padding:0.2rem 0.2rem
        }
        #produceinfo{
          padding-left: .4rem;
          color:#000
        }
        #produceinfo .symbol{
          font-size:.35rem;
          color:#000;
          font-weight:700

        }
        #produceinfo .decimal{
          font-size: .26rem
        }
        #produceinfo .producetitle{
          width:100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          line-height: .45rem
        }
         .clearfix:after {
                content: " ";
                display: block;
                height: 0;
                clear: both;
            }
</style>

<script>
import Vuex from 'vuex'
export default {
    computed: {
        ...Vuex.mapState({
            listIndex:state=>state.producelist.listIndex,
            producelist:state=>state.producelist.producelist
        })
    },
    created(){
        // this.pduce = this.$route.params
        if(this.$route.params.cateTitle){
          this.getProduce(this.$route.params)
        }else{
          this.getproducelist()
        }
    },
    methods: {
        ...Vuex.mapActions({
            getProduce:'producelist/getProduce'
        }),
        ...Vuex.mapMutations({
            getproducelist:'producelist/getproducelist'
        }),
        toproduce(item){
          console.log(item)
          this.$router.push({
            name:'produceinfo',
            query:{id:item.id}
          })
        }
    },
    data(){
        return {
            pduce:{}
        }
    },
    filters:{
        getPriceSmall(val){
            var str = val.toString()
            if(str.indexOf('.') == -1){
                return 0
            }else{
                var i = str.indexOf('.');
                return str.substring(i+1,i+2)
            }
        },
        getPrice(val){
            return Math.floor(val)+'.'
        }
    }
}
</script>