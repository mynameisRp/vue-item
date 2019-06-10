export default {
    mutationsShopSelect(state, params){
        state.shopSelectList = params
    },
    mutationsShopHeader(state, params){
        state.cityData = params.cities;
        state.tabData = params.brands;
    }
}