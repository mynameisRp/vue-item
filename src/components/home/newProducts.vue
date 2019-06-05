<template>
    <div class="newProducts">
        <h2>NEW ARRIVAL</h2>
        <swiper ref="mySwiper">
            <swiper-slide v-for="(item, index) in newProImgList" :key="index" v-show="item.featureImage">
                <img :src="item.featureImage">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import Vuex from "vuex"
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:"NewProducts",
    created(){
        this.newProList();
        // console.log(this)
    },
    components:{
        swiper,
        swiperSlide
    },
    methods: {
        ...Vuex.mapActions({
            newProList: "Home/newProList"
        })
    },
    computed:{
        ...Vuex.mapState({
            newProImgList: state=>state.Home.newProImgList
        }),
        // swiper() {
        //     return this.$refs.mySwiper.swiper
        // }
    }
}
</script>

<style>
/* .newProducts{
    width: 100%;
    overflow: hidden;
} */

.newProducts h2{
    text-align: center;
    font-size: .6rem;
    color: #000;
    font-weight: 600;
    margin: .6rem  0 .6rem;
}

.newProducts .swiper-wrapper .swiper-slide{
    width: 3rem !important;
}

.newProducts img{
    height: 3rem;
    width: 3rem;
}
</style>
