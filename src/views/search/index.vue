<template>
    <div id="search-wrap">
        <!-- 搜素头部 -->
        <div class="search-header">
            <div class="search">
                <input type="text" :placeholder="defaultKeyword.name" @input="search($event)"/>
            </div>
            <div class="btn-search">
                <a href="#" @click="skipHome">取消</a>
            </div>
        </div>

        <!-- 搜素显示 -->
        <div class="search-show">
            <h2>热门搜索</h2>
            <div class="search-host">
                <ul>
                    <li v-for="(item, index) in hotKeys" :key="index">{{item.name}}</li>
                </ul>
            </div>
        </div>
    
        <!-- 搜索列表 -->
        <div class="search-list" v-if="listFlag">
            <ul>
                <li v-for="(item, index) in suggestList" :key="index">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
name: "Search",
created(){
    this.suggestData();
},
methods: {
    ...Vuex.mapActions({
        suggestData: "Search/suggestData",
        suggestListData: "Search/suggestListData"
        
    }),
    search(e){
        let val = e.target.value;
        setTimeout(()=>{
            this.suggestListData(val);
            this.listFlag = true
        },1000)
    },
    skipHome(){
        this.$router.push("/index")
    }
},
computed: {
    ...Vuex.mapState({
        defaultKeyword:state=>state.Search.defaultKeyword,
        hotKeys: state=>state.Search.hotKeys,
        suggestList: state=>state.Search.suggestList
    })
},
data(){
    return {
        listFlag: false
    }
}
}
</script>

<style scoped>
#search-wrap {
    padding: .18rem .3rem 0;
}

/* 搜索头部 */
.search-header{
    display: flex;
}

.search{
    width: 80%;
}

.search input{
    width: 100%;
    height: .54rem;
    outline: none;
    border: none;
    border-radius: .16rem;
    padding-left: .48rem;
    background-color: #e6e7e8;
    background-size: 6%;
    background-position: .1rem .1rem;
    font-size: .2rem;
}

.btn-search{
    margin-left: .5rem;
}

.btn-search a{
    font-size: .3rem;
    color: #000;
}


/* 搜素显示 */

.search-show h2{
    margin: .36rem 0 .2rem;
    font-size: .4rem;
}


.search-host ul li{
  display: block;
  width: max-content;
  background: #f4f4f4;
  color: #333;
  font-size: .3rem; 
  float: left;
  padding:0 .2rem;
  margin: 0 .3rem .2rem 0;
  text-align: center;
  line-height: .5rem;
}

.search-list{
    position: fixed;
    z-index: 9;
    width: 100%;
    height: 100%;
    background: #fff;
    top: 1rem;
}

.search-list li{
    font-size: .27rem;
    border-bottom: 1px solid #ccc;
    padding: .2rem 0;
}

.search-list li:last-child(1){
    border-bottom: none;
}
</style>
