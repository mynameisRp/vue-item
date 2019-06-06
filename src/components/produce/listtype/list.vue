<template>
    <div>
        <div id= 'list'>
            <ul class = 'clearfix element'>
                <li 
                v-for="(item, index) in list" :key="index"
                :class="index==listIndex?active:''"
                @click='listgetOthers(item,index)'
                >{{item.title}}</li>              
            </ul>
        </div>
    </div>
</template>


<style >
        #list {
          width:100%;
          height:0.6667rem;
          margin-top:0.2rem;
          overflow:hidden
        }
        #list ul {
          
          width:max-content;
        }
        #list ul li {
          float: left;
          list-style-type:none;
          text-align:center;
          font-size:0.28rem;
          font-weight: 500
        }
        .clearfix:after {
                content: ".";
                display: block;
                height: 0;
                clear: both;
        }
       #list ul .active {
          font-weight:900;
          
        }
       

        
</style>

<script>

import Vuex from 'vuex'
export default {
   computed:{
        ...Vuex.mapState({
          list:state=>state.producelist.navList,
          listIndex:state=>state.producelist.listIndex
        })
    },
    data(){
      return{
        active:'active',
        
      }
    },
    created(){
        if(this.$route.params.cateTitle){
          this.getNav(this.$route.params)
        }else{
          this.getNavList()
        }
        console.log(1111)
        
        
    },
    methods:{
        ...Vuex.mapActions({
            getNav:'producelist/getNav',
            getOthers:'producelist/getOthers'
        }),
        ...Vuex.mapMutations({
            changeListIndex:'producelist/changeListIndex',
            getNavList:'producelist/getNavList'
        }),
        listgetOthers(item,index){
            this.changeListIndex(index)
            this.getOthers(item)
        },

    }
}
</script>