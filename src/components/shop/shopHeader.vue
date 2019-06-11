<template>
    <div class="header">
        <div class="city" @click="showCityList">
            <h2>{{city}}</h2>
        </div>
        <div class="tab-wrap">
            <ul class="tab">
                <li class="tab-list all">
                    <p>
                        <span>全部品牌</span>
                    </p>
                </li>
                <li class="tab-list" v-for="(item, index) in tabData" :key="index"><p>{{item.name}}</p></li>
            </ul>
            <div id = 'map_area' v-show='map_ul_display'>
                <ul ref='map_ul'>
                    <li 
                    v-for="(item, index) in cityData" :key="index"
                    :class="index==cityIndex?active:''"
                    @click="changeIndex(item,index)"
                    >{{item.cityName}}</li>
                </ul>
            </div>
        </div>
    </div> 
</template>

<script>
import Vuex from "vuex"
export default {
    name: "shopHeader",
    created(){
        this.cityList();
    },
    computed: {
        ...Vuex.mapState({
                cityData: state=>state.Shop.cityData,
                tabData: state=>state.Shop.tabData,
                cityIndex:state=>state.Shop.cityActiveIndex
        })
    },
    methods:{
        ...Vuex.mapActions({
            cityList: "Shop/cityList"
        }),
        showCityList(){
            this.map_ul_display = !this.map_ul_display
        },
        ...Vuex.mapMutations({
            changCityIndex:'Shop/changCityIndex'
        }),
        changeIndex(item,index){
            this.changCityIndex(index)
        }
    },
    data(){
        return {
            city: "全国",
            active:'active',
            map_ul_display:false
        }
    }
}
</script>

<style scoped>
.header{
    text-align: center;
    padding: .32rem 0;
    font-size: .23rem;
}

.header h2{
    padding-left: .2rem;
}

.header h2::after{
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border: .1rem solid transparent;
    border-top: .1rem solid #000;
    margin-left: .2rem;
}

.tab-wrap{
    margin: .4rem 0;
    padding: 0 .2rem;
    position:relative
}

.tab-wrap .tab{
    border: 2px solid #000;
    display: flex;
    flex-wrap: wrap;
    padding: .04rem;
}


.tab-wrap .tab .tab-list{
    width: 25%;
    height: 1.2rem;
    padding: .03rem;
    border-bottom: 1px solid #000;
}

.tab-wrap .tab .tab-list:nth-of-type(2) p{
    border-left: 1px solid #000;
}

.tab-wrap .tab .tab-list:nth-last-of-type(1),
.tab-wrap .tab .tab-list:nth-last-of-type(2),
.tab-wrap .tab .tab-list:nth-last-of-type(3){
    border-bottom: none;
}

.tab-wrap .tab .tab-list:nth-of-type(4) p{
    border-right: none;
}

.tab-wrap .tab .tab-list p {
    border-right: 1px solid #000; 
    background: #fff;
    color: #000;
    height: 100%;
    text-align: center;
    font-size: .24rem;
    font-weight: bolder;
    padding-top: .28rem;
}

.tab-wrap .tab .all{
    padding-top: 0;
    padding-right: 0;
}

.tab-wrap .tab .all p{
    background: #000;
    color:#fff;
    line-height: .8rem;
}
#map_area {
    padding:0.2667rem 0.1333rem;
    position:absolute;
    top:0;
    width:100%;
    background:#fff;
}
#map_area li {
    float:left;
    font-size:.4rem;
    color:#000;
    font-weight:700;
    margin:0.2rem 0.25rem
}
#map_area .active {
    color:red
}
</style>
