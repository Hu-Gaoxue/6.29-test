<script setup>
import AppTopNav from '@/components/AppTopNav.vue';
import MyHeader from '@/components/MyHeader.vue'

</script>

<template>
    <!-- 顶部 -->
    <AppTopNav/>
    <!-- 头部 -->
    <MyHeader/>

    <div class="main">
        <!-- 二级路由 -->
        <router-view/>
    </div>

    <div>底部区域</div>
</template>
<style lang="less" scoped>

</style>