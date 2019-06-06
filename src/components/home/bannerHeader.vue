<template>
  <div>
        <swiper ref="mySwiper">
            <swiper-slide v-for="(item,index) in headerBanner" :key="index" v-show="item.image.src"  @click.native="skipDetails(item.link)">
                <img :src="item.image.src">
                <div class="img-index"><span>{{item.sequence}}</span>/<span>5</span></div>
            </swiper-slide>
        </swiper>
        
  </div>
</template>

<script>
import Vuex from 'vuex'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:"BannerHeader",
    created(){
        this.headerbannerList();
    },
    components:{
        swiper,
        swiperSlide
    },
    methods: {
        ...Vuex.mapActions({
            headerbannerList: "Home/headerBannerList"
        }),
        skipDetails(val){
            this.$router.push({
                path: "/homeDetails",
                query: {
                    value: val.value,
                    type: val.type
                }
            })   
        }
    },
    computed: {
        ...Vuex.mapState({
            headerBanner:state=>state.Home.headerBanner
        })
    }
}
</script>

<style>
.img-index{
    position: absolute;
    right: 0;
    bottom: 0;
    color: #fff;
    font-size: .3rem;
}
</style>
