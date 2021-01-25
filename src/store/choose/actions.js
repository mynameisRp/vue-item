import {getChooseIndexApi,getMoreApi} from '@api/bobo'

export default{
    async getChooseIndex({commit}){
       let data = await getChooseIndexApi()
        commit('getChooseIndexList',data.data.modules)
    },
    getChooseIndexOnce({commit},params){
        commit('getChooseIndexList',params)
    },
    async getMoreApi({commit}){
        let data = await getChooseIndexApi();
        commit('getChooseMoreMutations',data.data.modules)
    }
}