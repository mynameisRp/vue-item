import {getlistDataFromList} from '@api/bobo'
export default {

    async getlistData({commit},params){
        let data = await getlistDataFromList(params)
            commit('getlistData',res.data.list.items)
        
    }
}