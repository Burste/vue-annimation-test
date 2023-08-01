<template>
    <div class="normal-jiugongge__container">
        <JiuBlocks
            title="Made by GSAP"
            :blingBlock="blingBlock"
            :ballPos="ballPos"
            aniType="gsap"
        />
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import JiuBlocks from './JiuBlocks.vue';

const ballPos = reactive([1, 3, 7, 9]);
const blingBlock = reactive([3, 5, 9]);
</script>
<style lang="scss" scoped>
.normal-jiugongge {
    &__container {
        position: relative;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
}
</style>
