import {FindData,StoryData} from "@api/find";

export default {
//    晒单内容
    async getlist({commit}){
        let data = await FindData({limit:20,offset:0});
        console.log(data)
        commit('mutationsgetlist', data.data.modules[0].data.items)    
    },
        
    // 故事
    async storygetList({commit}){ 
        let data = await StoryData({limit:20,offset:0,shopId:[1015660,1015658,1015656,1015685,1015691,1015692]});
        commit('mutationsstorygetlist', data.data.modules[0].data.reviews)      
    },   
    async homegetlist({commit}){  
        let data = await StoryData();
        commit('mutationshomegetlist', data.data.modules[0].data.reviews)    
    }
   
}