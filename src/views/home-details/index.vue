<template>
    <div id="home-details">
        <HeaderCommon/>
        <Details/>
    </div>
</template>

<script>
import Details from "@components/home/details"
import HeaderCommon from "@common/headerCommon"
export default {
    name: "HomeDetails",
    components: {
        Details,
        HeaderCommon
    }
}
</script>

<style>
.details-header{
    height: 2rem;
    width: 100%;
    position: fixed;
    top: 0;
    background: yellow;
}
</style>
