import {getlistDataFromList,getMoreApi} from '@api/bobo'
export default {

    async getlistData({commit},params){
        
        let res = await getlistDataFromList(params)
        let res1 = 0
        console.log(res.data.list.items)
        commit('getlistData',res.data.list.items)
        
        // console.log(await getlistDataFromList(params))
        
    },
    
}