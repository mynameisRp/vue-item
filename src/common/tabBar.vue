<template>
    <div id="tabBar">
        <mt-tabbar v-model="selected">
            <mt-tab-item v-for="(item, index) in navs" :key="index" :id="index">
                <div class="icon"></div>
                {{item.title}}
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
import Vue from "vue"
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
export default {
    name: "TabBar",
    watch:{
        selected:function(val){
            this.$router.push(this.navs[val].path)
        }
    },
    data(){
        return {
            selected: "0",
            imgFlag: true,
            navs: [
                {
                    title: "首页",
                    path: "/index"
                },
                {
                    title: "选购",
                    path: "/choose"
                },
                {
                    title: "发现",
                    path: "/find"
                },
                {
                    title: "门店",
                    path: "/shop"
                },
                {
                    title: "我的",
                    path: "/mine"
                }
            ]
        }
    }
}

</script>

<style>
#tabBar .mint-tabbar{
    z-index: 9;
}

#tabBar .icon{
    width: .56rem;
    height: .56rem;
    background: url(~/images/tabBar.png) no-repeat;
    background-size: 3rem 1rem;
    margin-left: .6rem;
    background-position: 0 0;
}

#tabBar .mint-tabbar a:nth-of-type(1) .icon{
    background-position: -1.26rem 0;
}

#tabBar .mint-tabbar a:nth-of-type(2) .icon{
    background-position: 0 0;
}

#tabBar .mint-tabbar a:nth-of-type(3) .icon{
    background-position: -.61rem 0;
}

#tabBar .mint-tabbar a:nth-of-type(4) .icon{
    background-position: -2.52rem 0;
}

#tabBar .mint-tabbar a:nth-of-type(5) .icon{
    background-position: -1.9rem 0;
}
#tabBar .is-selected{
    color: #000;
}

#tabBar .mint-tabbar a.is-selected .icon{
   background-position-y: -.58rem;
}
</style>
