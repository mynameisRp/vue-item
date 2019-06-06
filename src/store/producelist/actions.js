
import {getProduceList,getProduceContent,getOtherFromProduce,getOtherFromProduceOther} from '@api/bobo'
export default {

    async getNav({commit},params){
       
        let data = await getProduceList(params);
        commit('getNavList',data.data.subCategory)
        console.log(data)
    },
    async getProduce({commit},params){
        console.log(params)
        if(params.value == ''){
                var url = 'app/search/product?limit=20&offset=0&cateTitle='
                +params.cateTitle+'&linkType='+params.linkType+'subTitle='+params.subTitle
                +'&title=全部商品&sortField=SYNTHESIS&sortOrder=DESC'
                params.url = url
               let data = await getProduceContent(params)
                
                commit('getproducelist',data.data.list.items)
            
        }else{
            var url = 'app/search/product?limit=20&offset=0&cateTitle='
            +params.cateTitle+'&categoryId='+params.value+'&linkType='+params.linkType+'subTitle='+params.subTitle
            +'&title=全部商品&sortField=SYNTHESIS&sortOrder=DESC'
            params.url = url
            let data = await getProduceContent(params)
             
             commit('getproducelist',data.data.list.items)
        }
       
    },
    async getOthers({commit},params){
        if(params.link.value !=""){
            
            let data = await getOtherFromProduce(params)
                commit('getproducelist',data.data.list.items)
            
        }else{
            
            let data = await getOtherFromProduceOther()
            commit('getproducelist',data.data.list.items)
        }
    }


}