<template>
    <!-- <h1>这里显示的是Layout</h1> -->
    <!-- <div>
        <RouterLink to="Params">跳转Params</RouterLink>|
        <RouterLink to="Products">跳转Products</RouterLink>|
        <RouterLink to="/">跳转Layout</RouterLink>
        <RouterLink to="ad">跳转ADCategory</RouterLink>
        <router-view></router-view>
    </div> -->
    <HeaderNav></HeaderNav>
    <router-view></router-view>
</template>

<script setup>
import HeaderNav from '@/components/HeaderNav.vue'

</script>

<style >

</style>