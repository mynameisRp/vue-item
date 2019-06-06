<template>
    <div>
        <div id = 'nav'>
            <ul id = "nav_ul" class = 'clearfix'>
              <li>综合</li>
              <li>新品</li>
              <li>价格</li>
              <li style="border:none">筛选</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .clearfix:after {
                content: " ";
                display: block;
                height: 0;
                clear: both;
            }
        #nav_ul{
          border:0.0133rem solid #000;
          margin:0 0.3rem;
          padding:0.2rem 0
        }
        #nav_ul li {
          float: left;
          list-style: none;
          padding:0.1333rem 0.56rem;
          border-right:1px solid #000;
          font-size: 0.28rem
        }
</style>


