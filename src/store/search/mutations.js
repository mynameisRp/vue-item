export default {
    mutationsSuggestDef(state, params) {
        state.defaultKeyword = params;
    },
    mutationsHot(state, params) {
        state.hotKeys = params;
    },
    mutationsSuggestList(state, params){
        state.suggestList = params;
    }
}