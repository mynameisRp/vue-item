<template>
    <swiper ref="mySwiper">
        <swiper-slide v-for="(item, index) in delayList" :key="index"  v-show="item.image.src">
            <img :src="item.image.src" >
        </swiper-slide>
    </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Vuex from "vuex"
export default {
    name: "Delay",
    created(){
        this.delayData();
    },
     components:{
        swiper,
        swiperSlide
    },
    methods: {
        ...Vuex.mapActions({
            delayData: "Home/delayData"
        })
    },
    computed: {
        ...Vuex.mapState({
            delayList: state=>state.Home.delayList
        })
    }
}
</script>

<style>

</style>
