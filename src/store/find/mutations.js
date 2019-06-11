export default {
    mutationsgetlist(state,params){
        state.mygoodsList = params;
        
    },
    mutationsstorygetlist(state,params){
        state.storyList = params;
    },
    mutationsstorylist(state,params){
        state.storyList.push(...params);
       
    },
    mutationshomegetlist(state,params){
        state.homeList = params;
    }
   
}