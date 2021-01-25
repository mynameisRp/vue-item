<template>
    <div>
        <div id = "produce_title" v-if='item.brand'>
          <div id = "produce_top">
              <div class = "brand">{{item.brand.name}}</div>
              <div class= 'name' @click="sayitem">{{item.name}}</div>
              <span>
                <span class="price">￥</span>
                <span  class="price">{{item.price}}</span>
                <span>.0</span>
                <p>该商品预售，预计将于两个工作日内发货</p>
              </span>
          </div>
          <div id = "area">
            <p>请选择配送区域</p>
          </div>
          <div id = "area">
            <p>正品保证</p>
          </div>
       </div>
    </div>
</template>


<style scoprd>
    #produce_title{
      margin:0.2667rem 0.37rem;
      
    }
    #produce_title .brand {
      font-size: .3rem;
      color:#000
    }
    #produce_title .name {
      font-size: .45rem;
      font-weight: 700;
      color:#000
    }
    #produce_title .price {
      font-size:.48rem;
      font-weight: 700;
    }
    #produce_title p {
      margin-top:0.4rem;
      letter-spacing: .026rem;
      color:#000;
      font-size:.24rem;
      
    }
    #produce_top{
      padding-bottom:.3rem;
      border-bottom: 1px solid #ccc
    }
    #area p{
      margin-top:.3rem;
      font-size:.3rem;
      font-weight:500
    }
    #area{
      padding-bottom:.3rem;
      border-bottom: 1px solid #ccc
    }
</style>


<script>
import Vuex from 'vuex'
export default {
   computed: {
    ...Vuex.mapState({
      item:state=>state.produceinfo.produce
    })
  },
  methods: {
    sayitem(){
      console.log(this.item)
    }
  },
}
</script>