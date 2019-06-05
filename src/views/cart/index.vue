<template>
    <div id="cart">
        <div class="cart-groups">
            <!-- <CartHeader /> -->
            <CartInfo/>
            <CartSuggest/>
            <CartFoot/>
        </div>
    </div>
</template>

<script>
import CartHeader from "@components/cart/cartHeader"
import CartSuggest from "@components/cart/cartSuggest"
import CartFoot from "@components/cart/cartFoot"
import CartInfo from "@components/cart/cartInfo"
export default {
    name: "Cart",
    components:{
        CartHeader,
        CartSuggest,
        CartFoot,
        CartInfo
    }
}
</script>

<style>
#cart{
    background: #f5f5f5;
    height: 100%;
}

.cart-groups{
    background: #fff;
    padding: 0 .2rem;
}
.cart-groups .check{
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    border:1px solid #ccc;
}
</style>
