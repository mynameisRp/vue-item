import {http} from '@untils/server'

// 首页数据接口
export const IndexData = () => http("get", "/app/index/getNewIndex")


// 新产品数据接口
export const newProduct = (params) => http("post", "app/article/newProduct", params)


// 搜索建议接口
export const suggest = () => http("get", "/app/search/suggest")


// 搜索列表接口
export const suggestList = (keyword) => http("get", "/app/search/associate",{keyword: keyword})

// 购物车
export const cart = () => http("get", "/app/cart")

//购物车建议
export const cartSuggest = () => http("get", "app/product/suggest?offset=0&limit=20&source=CART")

