<template>
    <div class="suggest-pro">
        <div class="suggest-header">
            <h2>你可能喜欢</h2>
        </div>

        <div class="pro" v-for="(item, index) in suggestList" :key="index">
            <div class="list-pro">
                <div class="pro-img">
                    <img :src="item.featureImage" alt="">
                </div>
                <div class="pro-info">
                    <p class="title">{{item.brand.name}}</p>
                    <p class="name">{{item.name}}</p>
                    <p class="price">￥{{item.price}}.<span>0</span><span class="rawPrice" v-if="item.price == item.rawPrice ? false : true">￥{{item.rawPrice}}.0</span></p> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    name: "CartSuggest",
    created(){
        this.cartSuggestData()
    },
    methods:{
        ...Vuex.mapActions({
            cartSuggestData: "Cart/cartSuggestData"
        })
    },
    computed: {
        ...Vuex.mapState({
            suggestList: state=>state.Cart.suggestList
        })
    }
}
</script>

<style>
.suggest-pro{
    height: 100%;
    margin-top: .4rem;
    background: #fff;
    padding-bottom: .3rem;
    overflow: hidden;
}

.suggest-header{
    text-align: center;
    font-size: 0.28rem;
    padding: .4rem 0;
}

.pro{
    width: 100%;
}

.list-pro{
    width: 50%;
    min-height: 6rem;
    float: left;
}

.list-pro .pro-img{
    width: 100%;
    height: 4rem;
}




.pro-info .name{
    width: 2.8rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.pro-info .price span:nth-last-of-type(1){
    font-size: .1rem;
}

.pro-info .price span.rawPrice{
    margin-left: .2rem;
    color: #c9c9c9;
    text-decoration-line: line-through;
}
</style>
