<template>
    <div>
        
 <swiper :options="swiperOption">
 <swiper-slide><img src="../../../public/123213.jpg"></swiper-slide>
 <swiper-slide><img src="../../../public/123213.jpg"></swiper-slide>
 <swiper-slide><img src="../../../public/123213.jpg"></swiper-slide>
 <swiper-slide><img src="../../../public/123213.jpg"></swiper-slide>
 <swiper-slide><img src="../../../public/123213.jpg"></swiper-slide>
 <swiper-slide><img src="../../../public/123213.jpg"></swiper-slide>
 </swiper>
 <!--以下看需要添加-->
 <div class="swiper-scrollbar"></div> //滚动条
 <div class="swiper-button-next"></div> //下一项
 <div class="swiper-button-prev"></div> //上一项
 <div class="swiper-pagination"></div> //标页码


    </div>
</template>


<script>
 import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
 import { swiper, swiperslide } from 'vue-awesome-swiper'
 export default {
 components: {
    swiper,
    swiperslide
 }
 }
</script>