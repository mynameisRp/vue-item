import { suggest, suggestList } from '@api/http'

export default {
    async suggestData({commit}){
        let data = await suggest();
        commit("mutationsSuggestDef", data.data.defaultKeyword);
        commit("mutationsHot", data.data.hotKeys)
    },
    async suggestListData({commit}, keyword){
        let data = await suggestList(keyword);
        commit("mutationsSuggestList", data.data) 
    }
}

