<template>
    <div>
        <div id = "bottom">
         <img src="../../../public/icon-cart-sm.png" alt="">
         <div>
           <button class="buynow">立即购买</button>
           <button class="pushcart">加入购物车</button>
           
         </div>
       </div>
    </div>
</template>


<style scoped>
     #bottom{
      display: flex;
      justify-content: space-between;
      padding:.2rem .4rem;
      position:fixed;
      bottom:0;
      background:#fff;
      width:100%;
      
    }
    #bottom img {
      width:0.4rem;
      height:0.4rem;
      margin-top:.3rem
    }
    .buynow{
      width:2.2rem;
      height:0.8rem;
      color:#000;
      text-align: center;
      line-height:0.8rem;
      cursor:pointer;
      border-radius: .05rem;
      font-size:.3rem;
      background-color: #fff;
      border:1px solid #000
    }
    .pushcart{
      width:2.2rem;
      height:0.8rem;
      color:#fff;
      text-align: center;
      line-height:0.8rem;
      cursor:pointer;
      border-radius: .05rem;
      font-size:.3rem;
      background-color: #000;
      border:1px solid #000
    }
</style>