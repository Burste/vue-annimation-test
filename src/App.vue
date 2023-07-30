<script setup>
import MainHeader from './components/MainHeader.vue';
import NormalJiugongge from './components/NormalJiugongge.vue';
import Sidebar from './components/Sidebar/index.vue';
import MainContainer from './layouts/mainContainer.vue';
</script>

<template>
    <MainHeader />
    <Sidebar />
    <MainContainer>
        <NormalJiugongge />
    </MainContainer>
</template>

<style lang="scss" scoped></style>
