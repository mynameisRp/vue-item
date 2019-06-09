import Vue from 'vue'
import Vuex from 'vuex'
import Home from './home'
import Search from './search'
import Cart from "./cart"
import find from "./find"

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    Home,
    Search,
    Cart,
    find
  }
})
