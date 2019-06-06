export default {
    getlistData(state,params){
        if(params){
            sessionStorage.setItem('contentList',JSON.stringify(params));
        }
        
        state.datalist = JSON.parse(sessionStorage.getItem('contentList')) 
    }
}