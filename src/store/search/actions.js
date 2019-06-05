import { suggest, suggestList } from '@api/http'

export default {
    async suggestData({commit}){
        let data = await suggest();
        console.log(data.data)
        commit("mutationsSuggestDef", data.data.defaultKeyword);
        commit("mutationsHot", data.data.hotKeys)
    },
    async suggestListData({commit}, keyword){
        let data = await suggestList(keyword);
        console.log(data.data);
        commit("mutationsSuggestList", data.data) 
    }
}

