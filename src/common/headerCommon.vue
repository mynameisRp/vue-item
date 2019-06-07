<template>
    <div class="header">
        <div class="left">
            <img src="http://img.thebeastshop.com/images/menu-tab/menu-menu.png">
        </div>
        <div class="right">
            <img src="https://img.thebeastshop.com/images/menu-tab/menu-search.png">
            <img src="http://img.thebeastshop.com/images/menu-tab/menu-cart.png">
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderCommon"
}
</script>

<style scoped>
.header{
    position: fixed;
    top:0;
    width: 100%;
    background:#fff;
    padding: .2rem .2rem;
    display: flex;
    justify-content: space-between;
}

.header img{
    width: .54rem;
}

.header .right img {
    float: left;
    margin-right: .2rem;
}
</style>
