import {get} from '@untils/get'

//choose
export const getChooseIndexApi = () => get('/app/index/classifyDataV2')

export const getMoreApi = () => get('app/index/classifyDataV2')


//producelist
export const getProduceList =(params)=>get('app/index/category/'+params.cateTitle,params)

export const getProduceContent =(params) => get(params.url,params)

export const getOtherFromProduce =(params)=>get('app/search/product?limit=20&offset=0&categoryId='+params.link.value
+'&sortField=SYNTHESIS&sortOrder=DESC',params)

export const getOtherFromProduceOther =()=>get('app/search/product?limit=20&offset=0&cateTitle=%E6%8E%A8%E8%8D%90&linkType=all&subTitle=%E5%85%A8%E9%83%A8%E5%95%86%E5%93%81&title=%E5%85%A8%E9%83%A8%E5%95%86%E5%93%81&sortField=SYNTHESIS&sortOrder=DESC')


//producelist
export const getlistDataFromList = (params)=>get('app/search/product?limit=20&offset=0&listId='+params.listId+'&title='+params.title+'&sortField=SYNTHESIS&sortOrder=DESC',params)
//app/search/product?limit=20&offset=0&listId=618&title=FOR%20BABY&sortField=SYNTHESIS&sortOrder=DESC

//produceinfo


export const getproduceFromInfo = (params) => get('app/product/'+params,params)

export const getproducemoreFromInfo = (params) => get('app/product/'+params +'/details?legacy=false',params)


//门店


export const getCityBrand = () => get('appadmin/store/cityAndBrand')