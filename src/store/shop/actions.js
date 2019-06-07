import {shopCityAndBrand,CityData} from "@api/http"

export default {
    async cityList({commit}){
        let data = await CityData();
        commit("mutationsShopHeader", data.data)
    },

    async shopSelect({commit}){
        let data = await shopCityAndBrand();
        commit("mutationsShopSelect", data.data)
    }
}