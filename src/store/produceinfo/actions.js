import {getproduceFromInfo,getproducemoreFromInfo} from '@api/bobo'

export default{

    async getproduce({commit},params){
        let data = await getproduceFromInfo(params)
            commit('getproduce',data.data)
       
       
    },
    async getproducemore({commit},params){
        let data = await   getproducemoreFromInfo(params)
            commit('getproduceContent',data.data.details)
        
    }
}