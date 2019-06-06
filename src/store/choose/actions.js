

import axios from 'axios'
import {getChooseIndexApi,getMoreApi} from '@api/bobo'

export default{
    async getChooseIndex({commit}){
        
       
       let data = await getChooseIndexApi()
        
        commit('getChooseIndexList',data.data)
    },
    getChooseIndexOnce({commit},params){
        commit('getChooseIndexList',params)
    },
    async getMoreApi({commit}){
        let data = await getMoreApi();
        commit('getChooseMoreMutations',data.data.modules)
    }
}