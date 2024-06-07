<template>
    <h1>这里显示的是Layout</h1>
    <div>
        <RouterLink to="Params">跳转Params</RouterLink>|
        <RouterLink to="Products">跳转Products</RouterLink>|
        <RouterLink to="/">跳转Layout</RouterLink>
        <RouterLink to="ad">跳转ADCategory</RouterLink>
        <router-view></router-view>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>