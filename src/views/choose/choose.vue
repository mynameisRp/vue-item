<template>
    <div>
         
        <div id="app">
          <chooseTop/>
          <chooseContent/>
          
        </div>
    </div>
</template>
<script>
import Vuex from 'vuex'
import chooseTop from '@components/choose/chooseTop'
import chooseContent from '@components/choose/chooseContent'

export default {
    created(){
       this.getChooseIndex()
    },

    mounted() {
      console.log(this.list)
    }, 
  
    methods: {
        ...Vuex.mapActions({
            getChooseIndex:'choose/getChooseIndex',
            
        }),
        
    },
    computed: {
      ...Vuex.mapState({
        list:state=>state.choose.chooseList
      })
    },
    data(){
      return {
          chooseList:{}
      }
    },
    components:{
      chooseTop,
      chooseContent,
      chooseMore
    }
}
</script>

<style scoped>
    
</style>