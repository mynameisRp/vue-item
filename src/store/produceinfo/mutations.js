export default{
    getproduce(state,params){
        state.produce = params
    },
    getproduceContent(state,params){
        state.produceContent  = params
    },
    deleteProduceAll(state){
        state.produce = state.produceContent = []
    }
}