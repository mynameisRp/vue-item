import Vue from 'vue'
import Vuex from 'vuex'
import Home from './home'
import Search from './search'
import Cart from "./cart"
import HomeDetails from "./homeDetails"
import Shop from "./shop"
import choose from './choose/index'
import producelist from './producelist/index'
import list from './list/index'
import produceinfo from './produceinfo/index'
import find from "./find"

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    Home,
    Search,
    Cart,
    HomeDetails,
    Shop,
    choose,
    producelist,
    list,
    produceinfo,
    find
  }
})
