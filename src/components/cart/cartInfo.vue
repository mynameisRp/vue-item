<template>
    <div class="cart-info">
        <div class="info-img">
            <img src="https://img.thebeastshop.com/weapp/cart/cart-null.png@90q.png" alt="">
        </div>
        <p class="info-message">这里什么都没有呀...</p>
        <a class="goHome" @click="skipHome">
            去逛逛野兽派
        </a>
    </div>
</template>

<script>
export default {
    name: "CartInfo",
    methods: {
        skipHome(){
            this.$router.push("/index")
        }
    }
}
</script>

<style>
.cart-info{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cart-info .info-img{
    padding-top: .6rem;
}
.cart-info .info-img img{
    height: 3.8rem;
    width: 2.6rem;
}
.cart-info .info-message{
    font-size: .3rem;
    color: #9a9a9a;
    margin: .3rem 0;
}
.cart-info .goHome{
    border: 1px solid #333;
    color: #333;
    display: block;
    width: 4rem;
    height: 1rem;
    font-size: .3rem;
    text-align: center;
    line-height: 1rem;
}
</style>
