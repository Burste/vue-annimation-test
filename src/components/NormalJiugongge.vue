<template>
    <div class="normal-jiugongge__container">
        <JiuBlocks
            :blingBlock="blingBlock"
            :ballPos="ballPos"
            :ballClassName="'moving-right'"
        />
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import JiuBlocks from './JiuBlocks.vue';

const ballPos = reactive([1, 3, 7, 9]);
const blingBlock = reactive([3, 5, 9]);
</script>
<style lang="scss" scoped>
.normal-jiugongge {
    &__container {
        position: relative;
    }
}
</style>
