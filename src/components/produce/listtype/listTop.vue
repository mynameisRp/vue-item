<template>
    <div>
         <div id = 'top'>
            <img src="@@/menu-menu.png" alt="">
            <div>
              <img src="@@/down.png" alt="">
              <img src="@@/icon-cart-sm.png" alt="">
            </div>
        </div>
    </div>
</template>


 <style scoped>
      #top{
        display: flex;
        justify-content: space-between;
        padding:0.0667rem 0.3rem
      }
        #top > img {
            width:0.7467rem;
            height:0.7467rem
        }
        #top div {
          display: flex
        }
        #top div > img {
            width:0.6667rem;
            height:0.6667rem
        }
    </style>