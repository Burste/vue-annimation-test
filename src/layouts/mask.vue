<template>
    <!-- <div class="z-30 w-full h-full fixed left-0 top-0"><slot /></div> -->
    <teleport :to="`#app`">
        <transition name="fade">
            <div
                v-show="props.show"
                class="fixed top-0 left-0 z-10 w-screen h-screen"
            >
                <div
                    :class="[
                        'fixed bg-black bg-opacity-30 w-full h-full z-0 transition-all duration-300 top-0 left-0 ',
                        {
                            'opacity-1': props.show,
                        },
                    ]"
                />
                <slot />
            </div>
        </transition>
    </teleport>
</template>
<script setup>
import { onClickOutside, useThrottleFn } from '@vueuse/core';
import { Fragment, Teleport, nextTick, onUpdated, ref } from 'vue';

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    click: {
        type: Function,
        default: () => {},
    },
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
