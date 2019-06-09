import {FindData,StoryData} from "@api/find";

export default {
//    晒单内容
    async getlist({commit}){
        let data = await FindData({limit:20,offset:0});
        console.log(data.data)
        commit('mutationsgetlist', data.data.items)    
    },
        
    // 故事
    async storygetList({commit}){
        
        let data = await StoryData({shopId:[1015660,1015658,1015656,1015685,1015691,1015692],limit:20,offset:0});
        
        commit('mutationsstorygetlist', data.data.reviews)      
    },   
    async homegetlist({commit}){  
        let data = await StoryData();
        commit('mutationshomegetlist', data.data.reviews)    
    }
   
}