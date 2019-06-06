export default{
    getNavList(state,params){
        console.log(params);
        if(params){
            sessionStorage.setItem('navList',JSON.stringify(params));
        }
        
        state.navList = JSON.parse(sessionStorage.getItem('navList')) 
    } ,
    getproducelist(state,params){
        if(params){
            sessionStorage.setItem('producelist',JSON.stringify(params));
        }
        
        state.producelist = JSON.parse(sessionStorage.getItem('producelist')) 
        
    },
    changeListIndex(state,params){
        state.listIndex = params
    }
}