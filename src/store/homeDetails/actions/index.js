import {detailsArticle, detailsShop} from '@api/http'


export default {
    async headerBannerDetailsData({commit}, params){
        if(params.type == "article"){
            let articleData = await detailsArticle(params.value);
            articleData.data.modules[0].data.image.src = JSON.parse(articleData.data.featureImage).src;
            commit("mutationsDetailsArticle", articleData.data.modules)
        } else if (params.type = "deeplink"){
            let val = params.value.split("?")[1].split("&")[1]
            let deeplinkData = await detailsShop(val)
            commit("mutationsDetailsDeeplink", deeplinkData.data.review.reviews)
        }   
       
    }


}