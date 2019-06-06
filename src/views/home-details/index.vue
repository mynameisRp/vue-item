<template>
    <div id="home-details">
        <div class="details-header"></div>
        <Details/>
    </div>
</template>

<script>
import Details from "@components/home/details"
export default {
    name: "HomeDetails",
    components: {
        Details
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
