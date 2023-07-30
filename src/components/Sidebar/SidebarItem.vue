<template>
    <div
        :class="`h-10 relative flex items-center justify-center select-none`"
        :style="`background: ${child_bg[idx]}`"
        @click.stop="() => onItemClick(item, parentItem)"
    >
        {{ item.text }}
        <div
            v-show="item?.children?.length && idx !== 0"
            :class="[
                'absolute right-3 w-5 h-5 flex items-center justify-center',
                {
                    'rotate-180': isShowChild(item),
                },
            ]"
        >
            <svg
                fill="white"
                width="12px"
                height="12px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M 4.21875 10.78125 L 2.78125 12.21875 L 15.28125 24.71875 L 16 25.40625 L 16.71875 24.71875 L 29.21875 12.21875 L 27.78125 10.78125 L 16 22.5625 Z"
                    ></path>
                </g>
            </svg>
        </div>
    </div>
    <div v-if="isShowChild(item)" class="bg-yellow-600 w-full">
        <SidebarItem
            v-for="childItem in item.children"
            :key="childItem.key"
            :idx="idx + 1"
            :item="childItem"
            :activeChildKey="activeChildKey"
            :onItemClick="onItemClick"
            :parentItem="item"
        />
    </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    className: {
        type: String,
        default: '',
    },
    idx: {
        type: Number,
        default: 0,
    },
    item: {
        type: Object,
        default: () => {},
    },
    parentItem: {
        type: Object,
        default: () => {},
    },
    activeChildKey: {
        type: String,
        default: () => {},
    },
    onItemClick: {
        type: Function,
        default: () => {},
    },
});
const child_bg = {
    0: '',
    1: '#ca8a04',
    2: '#d1951a',
    3: '#d9a030',
    4: '#e0ab46',
    5: '#e8b65c',
    6: '#efc172',
    7: '#f7cc88',
    8: '#fed79e',
    9: '#ffedb4',
};

// 展開子項目需要判斷是否有子項目，沒有子項目則但要收合
const isShowChild = (item) => {
    const res = computed(() => {
        return (
            (item.children &&
                item.children.length &&
                item.children.find((i) => i.key === props.activeChildKey)) ||
            props.activeChildKey === item.key
        );
    });
    return res.value;
};
</script>

<style lang="scss" scoped></style>
