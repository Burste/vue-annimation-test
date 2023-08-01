<template>
    <Mask :show="sidebarExpandStatus">
        <div
            ref="target"
            :class="[
                'transition-all duration-900 z-10 py-10 flex flex-col items-center justify-start gap-2 fixed top-0 -left-[240px] h-screen w-full bg-portal-light-coffee max-w-[240px] overflow-auto',
                {
                    'ml-[240px]': sidebarExpandStatus,
                },
            ]"
        >
            <div
                v-for="item in mockData"
                :key="item.key"
                class="flex flex-col items-center justify-start gap-2 w-full text-white cursor-pointer"
                @click="() => onSidebarItemClick(item)"
            >
                <SidebarItem
                    :idx="0"
                    :item="item"
                    :activeChildKey="activeMenuItem"
                    :onItemClick="onSidebarItemClick"
                />
            </div>
        </div>
    </Mask>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { usePlatformState } from '@/store';
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';
import mockData from '@/mock/sidebarData.json';
import Mask from '@/layouts/mask.vue';
import SidebarItem from './SidebarItem.vue';

const target = ref(null);

const storePlatform = usePlatformState();
const { activeMenuItem, sidebarExpandStatus } = storeToRefs(storePlatform);
const { toggleSidebar, setActiveMenuItem } = storePlatform;

const onSidebarItemClick = (item, parent = null) => {
    let nextActiveKey = null;
    if (item.children && item.children.length) {
        if (activeMenuItem.value === item.key) {
            nextActiveKey = parent ? parent.key : null;
        } else {
            console.log('C:another key');
            nextActiveKey = item.key;
        }
    } else {
        // activeChildKey.value = parent ? parent.key : item.key;
        nextActiveKey = item.key;
        console.log('SET PATH');
    }
    setActiveMenuItem(nextActiveKey);
};

onClickOutside(target, () => {
    if (sidebarExpandStatus.value) toggleSidebar();
});
</script>
<style lang="scss" scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
}
</style>
