<template>
    <div class="container">
        <div class="outer-box" v-for="(item, k) in detailsArticle"  v-show="$route.query.type == 'article'" :key="k">
            <img :src="item.data.image.src">
        </div>
        <div class="outer-box" v-for="(items, i) in detailsDeeplink"  v-show="$route.query.type == 'deeplink'">
            <img :src="items.titleImage.src">
        </div>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    name: "Detail",
    created(){
        this.headerBannerDetailsData(this.$route.query)
    },
    methods: {
        ...Vuex.mapActions({
            headerBannerDetailsData: "HomeDetails/headerBannerDetailsData"
        })
    },
    computed: {
        ...Vuex.mapState({
            detailsArticle: state=>state.HomeDetails.detailsArticle,
            detailsDeeplink: state=>state.HomeDetails.detailsDeeplink
        })
    }
}
</script>

<style>
.container{
    padding: 1rem 0 1rem;
}
</style>
