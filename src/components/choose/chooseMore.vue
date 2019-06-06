<template>
    <div id = "app" v-if='items[routerIndex]'>
        <div 
        v-for="(item, index) in items[routerIndex].data.subCategory" :key="index" @click="jumpTo(item)"
        v-if='!item.hideImage'
        >
            <img :src="item.image.src" />
            <span>{{item.title}}</span>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'



export default {
     computed: {
      ...Vuex.mapState({
        routerIndex:state=>state.choose.routerIndex,
        items:state=>state.choose.chooseMoreList,
        chooselist:state=>state.choose.chooseList
      })
    },
    created(){
       this.$nextTick(()=>{
           this.getMoreApi()
       }) 
       
       
    },

    
  
    methods: {
        ...Vuex.mapActions({
            getMoreApi:'choose/getMoreApi',
           
        }),
        ...Vuex.mapMutations({
           getRouteIndex:'choose/getRouteIndex',
           getChooseIndexList:'choose/getChooseIndexList'
        })
        ,
        getRouteindex(index,e){
          var parent = e.target.parentNode ;
          this.getRouteIndex(index)
        },
        jumpTo(item){
            // console.log(item.title)
            

            if(item.link.type == 'all' || item.link.type == 'category'){
                this.$router.push({name:'producelist',params:{
                    'cateTitle':this.items[this.routerIndex].data.title,
                    'subTitle':item.title,
                    'linkType':item.link.type,
                    'value':item.link.value
                    }})
            }else if(item.link.type == 'list'){
                this.$router.push({name:'list',params:{title:item.title,listId:item.link.value}})
            }

        }
           
    },
   
    data(){
      return {
          chooseList:[],
          listIndex:0,
          active:'active',
          
      }
    },
    filters:{
        getItemList(val){
            var arr = []
            for(var i = 0 ; i < val.length ; i++){
                if(!val[i].hideImage){
                    arr.push(val[i])
                }
            }
            return arr
        }
    },
    watch: {
        'routerIndex'(newV){
            // this.items = this.items[newV].data.subCategory
            console.log(this.items)
        }
    },
}
</script>


<style scoped>
    #app {
        width:5.3rem;
        min-height:10rem;
        background-color: #fff;
        float:right;
    }
    #app div {
        display:inline-block;
        padding-left:0.06rem;
        position:relative;
        
    }
    #app div img {
        width:2.45rem;
        height:3.4545rem
    }
    span {
        position:absolute;
        top:0.1818rem;
        left:0.1818rem;
        color:#fff;
        font-family: Helvetica Neue,Helvetica,sans-serif;
        font-size:0.2909rem
    }
</style>


