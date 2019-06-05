<template>
    <div class="cart-footer">
        <div class="footer-wrap">
            <div class="cart-price">总计:￥0.<span>0</span></div>
            <div class="cart-btn">结算<span>(0)</span></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "cartFoot"
}
</script>

<style>
.cart-footer{
    position: fixed;
    width: 100%;
    background: #fff;
    bottom: 0;
}

.cart-footer .footer-wrap{
    float: right;
    display: flex;
}

.cart-footer .footer-wrap .cart-price{
    font-size: .3rem;
    margin-top: .4rem;
    font-weight: 600;
}

.cart-footer .footer-wrap .cart-price span{
    font-size: .2rem;
}

.cart-footer .footer-wrap .cart-btn{
    width: 2rem;
    height: .9rem;
    background: #9a9a9a;
    font-size: .3rem;
    color: #fff;
    line-height: .9rem;
    border-radius: 3px;
    text-align: center;
    margin: .2rem .3rem;
}
</style>
