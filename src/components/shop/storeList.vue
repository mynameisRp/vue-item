<template>
    <div>
        <div class="store-list" v-for="(item, index) in shopSelectList" :key="index">
            <div class="logo">
                <img :src="item.imgApp.url">
            </div>
            <div class="info">
                <h1 class="brand">{{item.platformName}}</h1>
                <h2 class="name">{{item.storeName}}</h2>
                <p class="time">营业时间 {{item.openTime}}</p>
                <p class="adds">{{item.address}}</p>
                <p class="tel">
                    <span></span>
                    <span>{{item.mobile}}</span>
                </p>
                <p class="map">
                    <span></span>
                    <span>门店地图</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    name: "StoreList",
    created(){
        this.shopSelect()
        console.log(this)
    },
    computed: {
        ...Vuex.mapState({
            shopSelectList: state=>state.Shop.shopSelectList
        })
    },
    methods: {
        ...Vuex.mapActions({
            shopSelect: "Shop/shopSelect"
        })
    }
}
</script>

<style scoped>

.store-list .info{
    padding: .3rem .4rem;
}

.store-list .info .brand{
    margin-top: .4rem; 
    font-size: .76rem;
}

.store-list .info .name{
    font-size: .5rem;
}

.store-list .info .adds{
    margin: .1rem 0;
}
</style>
