import {cart,cartSuggest} from "@api/http"

export default {
    async cartData(){
        let data = await cart();
        // console.log(data)
    },
    async cartSuggestData({commit}){
        let data = await cartSuggest();
        commit("mutationsCartSuggest", data.data)
    }
}