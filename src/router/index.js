import Vue from 'vue'
import Router from 'vue-router'
import Cart from "./cart"
import Home from "./home"
import Choose from "./choose"
import Find from "./find"
import Search from "./search"
import Mine from "./mine"
import Shop from "./shop"


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
    Shop
  ]
})
