import Vue from 'vue'
import Router from 'vue-router'
import Cart from "./cart"
import Home from "./home"
import Choose from "./choose"
import Find from "./find"
import Search from "./search"
import Mine from "./mine"
import Shop from "./shop"
import Producelist from './producelist/index'
import Listtype from './list/index'
import Info from '../components/produceinfo/index'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    Home,
    Search,
    Cart,
    Choose,
    Find,
    Mine,
    Shop,
    Producelist,
    Listtype,
    {
      path:'/produceinfo',
      name:'produceinfo',
      component:Info
    }
  ]
})
