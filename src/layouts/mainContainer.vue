<template>
    <div class="main-container">
        <div class="flex justify-center items-center gap-3 p-3">
            <router-link
                v-for="(route, index) in routes"
                class="text-white min-w-max text-sm"
                :key="index"
                :to="route.path"
            >
                {{ route.name }}
            </router-link>
        </div>

        <router-view class="view"></router-view>
        <!-- <slot /> -->
    </div>
</template>
<script setup>
import { computed } from 'vue';
import routeConfig from '@/routes/config';
const routes = computed(() =>
    routeConfig.filter((route) => route.path !== '/')
);
</script>

<style lang="scss" scoped>
.main-container {
    max-width: 390px;
    margin: 0 auto;
    padding: 80px 20px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
}

.router-link-active {
    background-color: #ffee63;
    color: #332c39;
}
</style>
