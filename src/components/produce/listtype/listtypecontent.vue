<template>
    <div>
        <div id = 'content'>
           <ul class='clearfix'>
             <li v-for="(item, index) in datalist" :key="index">
               <img :src="item.featureImage" alt="">
               <div id = "produceinfo">
                  <div class='producetitle'>{{item.monthSendDistType}}</div>
                  <div class='producetitle'>{{item.name}}</div>
                  <div></div>
                  <span>
                      <span class = "symbol">￥</span>
                      <span class = "symbol">{{item.price|getPrice}}</span>
                      <span>.</span>
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
          line-height: .4rem
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
            datalist:state=>state.list.datalist
        })
    },
    
    created() {
        if(this.$route.params.title){
           this.getlistData(this.$route.params)
           console.log(111) 
        }else{
            this.getMutationslistData()
        }
        
    },
    methods: {
        ...Vuex.mapActions({
            getlistData:'list/getlistData'
        }),
        ...Vuex.mapMutations({
            getMutationslistData:'list/getlistData'
        }),
        getproduceinfo(){
            
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
            return Math.floor(val)
        }
    }
}
</script>