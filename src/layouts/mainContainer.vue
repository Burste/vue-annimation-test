<script setup></script>

<template>
    <div class="main-container">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.main-container {
    padding: 80px 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}
</style>
