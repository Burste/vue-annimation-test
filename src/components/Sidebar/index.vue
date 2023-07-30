<template>
    <Mask :show="sidebarExpandStatus">
        <div
            ref="target"
            :class="[
                'transition-all duration-900 z-10 py-10 flex flex-col items-center justify-start gap-4 fixed top-0 -left-[240px] h-screen w-full bg-portal-coffee max-w-[240px]',
                {
                    'ml-[240px]': sidebarExpandStatus,
                },
            ]"
        >
            <div
                v-for="item in mockData"
                :key="item.key"
                class="flex flex-col items-center justify-start gap-2 w-full min-h-[40px] text-white cursor-pointer"
                @click="() => onSidebarItemClick(item)"
            >
                <SidebarItem
                    :idx="0"
                    :item="item"
                    :activeChildKey="activeChildKey"
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

const activeChildKey = ref(null);
const storePlatform = usePlatformState();
const { sidebarExpandStatus } = storeToRefs(storePlatform);
const { toggleSidebar } = storePlatform;

const onSidebarItemClick = (item, parent = null) => {
    console.log(
        'onSidebarItemClick',
        item,
        parent,
        'act',
        activeChildKey.value
    );
    if (item.children && item.children.length) {
        if (activeChildKey.value === item.key) {
            activeChildKey.value = parent ? parent.key : null;
        } else {
            activeChildKey.value = item.key;
        }
    } else {
        // activeChildKey.value = parent ? parent.key : item.key;
        console.log('SET PATJ');
    }
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
