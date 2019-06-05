<template>
    <div>
        <div class="cart-header">
        <!-- 购物车顶部左边 -->
            <div class="cart-header-left">
                <div class="check" @click="checkAll" :style="checkFlag?checkCss: ''"></div>
                <div class="title">全选</div>
                <div class="title-tag">满99免邮</div>
            </div>
            <!-- 购物车顶部右边 -->
            <div class="cart-header-right">
                <span class="text">编辑</span>
            </div>
        </div>
        <div class="cart-pro">
            <div class="check" :style="checkFlag?checkCss: ''" @click="check"></div>
            <div class="pro-img">
            
            </div>
            <div class="pro-detail">
                <p>Oly Studio</p>
                <p>DIEGO 双层圆茶几</p>
                <p class="pro-price"><span>￥4,740</span>.<span>0</span><span>￥15,800.0</span><span>抢购</span></p>
            </div>
            <span class="pro-num">x1</span>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    name: "CartHeader",
    created(){
        this.cartData();
    },
    data(){
        return {
            checkFlag: false,
            checkCss:{
                background:"url(https://img.thebeastshop.com/app/cart/checkbox-black.png@90q.jpg)",
                backgroundSize: "100% 100%"
            }
        }
    },
    methods: {
        ...Vuex.mapActions({
            cartData: "Cart/cartData"
        }),
        checkAll(){
            this.checkFlag = !this.checkFlag
        },
        check(){
            this.checkFlag = !this.checkFlag
        }
    }
}
</script>

<style scoped>
.cart-header{
   display: flex;
   justify-content: space-between;
   padding: .2rem 0;
   border-bottom: 1px solid #ccc;
   margin-top: .4rem;
}

.cart-header .cart-header-left{
    display: flex;
}

.cart-groups .check{
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    border:1px solid #ccc;
}

.cart-groups .cart-header-left .check{
    margin-top: .16rem;
}

.cart-header .cart-header-left .title{
    font-weight: 800;
    font-size: .46rem;
    margin: 0 .2rem;
}

.cart-header .cart-header-left .title-tag{
    background: #000;
    color:#fff;
    font-size:.2rem;
    height: .3rem;
    margin-top: .2rem;
}

.text{
    display: block;
    position: fixed;
    top: .2rem;
    right: 0.2rem;
    color: #333;
    font-size: .34rem;
    font-weight: 600;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    background: #fff;
    box-shadow: 0 0 10px #838383
}

.cart-pro{
    padding: .2rem;
    display: flex;
    position: relative;
    font-size: .26rem;
    color: #424648;
}

.cart-pro .check{
    position: absolute;
    top: .4rem;
    left: 0;
    margin-top: .25rem;
    background: #fff;
}

.cart-pro .pro-img{
    width: 1.2rem;
    height: 1.4rem;
    background: #f00;
    margin: .2rem .3rem .2rem .4rem;
}
.pro-detail .pro-price {
    margin-top: .9rem;
}


.pro-detail .pro-price span:nth-of-type(2){
    font-size: .1rem;
    margin-right: .2rem;
}

.pro-detail .pro-price span:nth-of-type(3)
{
    font-size: .1rem;
    color: #ccc;
    text-decoration: line-through;
    margin-right: .2rem;
}

.pro-detail .pro-price span:nth-of-type(4){
    font-size: .1rem;
    color: #fff;
    background: #c44747;
    padding: .04rem;
}

.pro-num{
    position: absolute;
    right: 0;
    bottom: .2rem;
}
</style>
