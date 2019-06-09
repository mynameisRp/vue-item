<template>
  <div id="findlist" style="display:block;">
    <div id="list-left">   
        <div class="item" v-for="(ele,index) in mygoodsList" :key="index">
          <div class="video-image">          
              <img
                :src="ele.annex.images[0].src"
              />
          </div>
          <div class="user-action">
              <div class="cmt">{{ele.content}}</div>
              <div class="user-info">
                <div class="avator">
                  <img :src="ele.evaluator.avatarUrl">
                </div>
                <div class="name">媛*</div>
              </div>
              <div class="action">
                <div class="star"><img src="https://img.thebeastshop.com/weapp/discovery/icon-star.png?t=1"
                    class="no-star"> <img src="https://img.thebeastshop.com/weapp/discovery/icon-star-active.png?t=1"
                    class="has-star">
                </div> <span class="count">1</span>
              </div>
          </div>
        </div>
    </div>
    <div id="list-right"> 
        <div class="item"  v-for="(ele,index) in mygoodsList" :key="index">
          <div class="video-image">         
              <img
                :src="ele.image"
              >
          </div>
          <div class="user-action">
            <div class="cmt">{{ele.content}}</div>
            <div class="user-info">
              <div class="avator">
                <img :src="ele.evaluator.avatarUrl">
              </div>
              <div class="name">媛*</div>
            </div>
            <div class="action">
              <div class="star"><img src="https://img.thebeastshop.com/weapp/discovery/icon-star.png?t=1"
                  class="no-star"> <img src="https://img.thebeastshop.com/weapp/discovery/icon-star-active.png?t=1"
                  class="has-star"></div> <span class="count">1</span>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
  
  name:"findcontent",
  computed: {
    ...Vuex.mapState({
      mygoodsList:state=>state.find.mygoodsList
     
    }) 
  },
  created() {
    this.getlist();
    console.log(this)
  },
  methods: {
    ...Vuex.mapActions({
      getlist:"find/getlist"
    })
    
  }
}
</script>

<style scoped>
 
  #findlist{
    padding:0 .32rem 0;
    height:14.11rem;
    overflow:auto;
    background:white;

  }
  #list-left{
    width:3.28rem;
    margin-right:.30rem;
    float:left;
  }
  #list-right{
    width:3.28rem;
    float:right;
    }
  .item{
    height:4.66rem;
    
  }
  .video-image img{
    border-radius:.15rem;
    width:3.28rem;
    height:3.28rem;
  }
  .video-image{
    
    margin-bottom:.24rem;
         
  }
  .user-action{
    margin-bottom:.2rem;
  }
  .cmt{
    font-size:.22rem;
    font-weight:900;
    margin-bottom:.2rem;
  }
  .user-info{
    float:left;
    width:1.2rem;
    height:.32rem;
  }
  .name{
    display:inline-block;
    margin-left:.16rem;
    font-size:.22rem;
    float:left;
  }
  .avator{
    float:left;
  }
  .user-info>.avator>img{
    display:inline-block;
    width:.32rem;
    height:.32rem;
    border-radius:100%;
    overflow:hidden;
  }
  .action{
    float:right;
    width:.56rem;
    height:.32rem;
  }
  .action>.star>img{
    width:.32rem;
    height:.26rem;
    float:left;
    
  }
  .has-star{
    display:none
    }
  
  .action>.count{
    float:left;
    margin-left:.12rem;
  }
    

 
</style>
